import React, { useState, useEffect } from 'react';
import {
  Box,
  useTheme,
  useMediaQuery,
  Drawer,
  IconButton,
} from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../../../app/stores/stores';
import TeamSidebar from '../components/TeamSidebar';
import ChannelsList from '../components/ChannelsList';
import ChatArea from '../components/ChatArea';
import NotificationsPanel from '../components/NotificationsPanel';
import SettingsModal from '../components/SettingsModal';
import CallScreen from '../components/CallScreen';
import CalendarView from '../components/CalendarView';
import DirectMessagesList from '../components/DirectMessagesList';
import CreateTeamDialog from '../components/CreateTeamDialog';
import { Container } from 'react-bootstrap';
import {
  fetchUserTeams,
  fetchUserConversations,
  fetchUserMeetings,
  fetchUserNotifications,
} from '../redux/communication.slice';
import { socketService } from '../services/socket.service';
import { sendMessage } from '../redux/communication.slice';

const CommunicationLayout: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isTablet = useMediaQuery(theme.breakpoints.down('lg'));
  const { viewMode, activeCall, settings } = useSelector(
    (state: RootState) => state.communication
  );
  const currentUser = useSelector((state: RootState) => state.auth?.user);

  const [mobileOpen, setMobileOpen] = useState(false);

  // Fetch initial data on mount
  useEffect(() => {
    const loadInitialData = async () => {
      try {
        // Fetch all initial data from API
        await Promise.all([
          dispatch(fetchUserTeams()).unwrap(),
          dispatch(fetchUserConversations()).unwrap(),
          dispatch(fetchUserMeetings()).unwrap(),
          dispatch(fetchUserNotifications()).unwrap(),
        ]);
      } catch (error) {
        console.error('Failed to load initial data:', error);
      }
    };

    loadInitialData();
  }, [dispatch]);

  // Connect to WebSocket
  useEffect(() => {
    const userId = currentUser?._id || currentUser?.id;
    if (userId) {
      socketService.connect(userId);

      // Listen for new messages
      socketService.onNewMessage((message) => {
        dispatch(sendMessage(message));
      });

      // Listen for user status changes
      socketService.onUserStatusChanged((data) => {
        console.log('User status changed:', data);
        // Update user status in state if needed
      });

      // Cleanup on unmount
      return () => {
        socketService.disconnect();
      };
    }
  }, [currentUser, dispatch]);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // If there's an active call, show the call screen
  if (activeCall) {
    return <CallScreen />;
  }

  const sidebarContent = (
    <Box sx={{ display: 'flex', height: '100%' }}>
      {/* Team Sidebar - Far left */}
      <TeamSidebar />

      {/* Channels/DMs List - Left sidebar */}
      {viewMode === 'channel' && (
        <ChannelsList onClose={() => setMobileOpen(false)} />
      )}
      {viewMode === 'dm' && (
        <DirectMessagesList onClose={() => setMobileOpen(false)} />
      )}
    </Box>
  );

  return (
    <Container>
      <Box
        sx={{
          display: 'flex',
          height: '100vh',
          overflow: 'hidden',
          bgcolor: settings.theme === 'dark' ? 'grey.900' : 'grey.50',
        }}
      >
        {/* Mobile: Drawer for sidebar, Desktop: Always visible */}
        {isMobile ? (
          <Drawer
            variant='temporary'
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better mobile performance
            }}
            sx={{
              '& .MuiDrawer-paper': {
                width: '85%',
                maxWidth: 352, // 72px (TeamSidebar) + 280px (ChannelsList/DirectMessagesList)
                bgcolor: settings.theme === 'dark' ? 'grey.900' : 'grey.50',
              },
            }}
          >
            {sidebarContent}
          </Drawer>
        ) : (
          sidebarContent
        )}

        {/* Main Content Area */}
        <Box
          sx={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
          }}
        >
          {/* Mobile Menu Button */}
          {isMobile && (
            <Box
              sx={{
                p: 1,
                borderBottom: 1,
                borderColor: 'divider',
                bgcolor:
                  settings.theme === 'dark' ? 'grey.800' : 'background.paper',
              }}
            >
              <IconButton onClick={handleDrawerToggle} edge='start'>
                <MenuIcon />
              </IconButton>
            </Box>
          )}

          {viewMode === 'calendar' ? <CalendarView /> : <ChatArea />}
        </Box>

        {/* Notifications Panel */}
        <NotificationsPanel />

        {/* Settings Modal */}
        <SettingsModal />

        {/* Create Team Dialog */}
        <CreateTeamDialog />
      </Box>
    </Container>
  );
};

export default CommunicationLayout;
