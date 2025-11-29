import React, { useState, useRef, useEffect } from 'react';
import {
  Box,
  Typography,
  IconButton,
  Avatar,
  TextField,
  InputAdornment,
  Paper,
  Chip,
  Tooltip,
  Menu,
  MenuItem,
  Divider,
  AvatarGroup,
  Button,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import {
  MoreVert as MoreVertIcon,
  People as PeopleIcon,
  Notifications as NotificationsIcon,
  AttachFile as AttachFileIcon,
  EmojiEmotions as EmojiIcon,
  Send as SendIcon,
  Videocam as VideocamIcon,
  Call as CallIcon,
  Info as InfoIcon,
} from '@mui/icons-material';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../../../app/stores/stores';
import { sendMessageThunk, startCall, toggleNotifications, fetchChannelMessages, fetchConversationMessages } from '../redux/communication.slice';
import { IMessage, ICall } from '../types/communication.types';
import MessageBubble from './MessageBubble';
import { socketService } from '../services/socket.service';

const ChatArea: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const {
    selectedChannelId,
    selectedConversationId,
    channels,
    conversations,
    messages,
    dmMessages,
    viewMode,
    settings,
    teams,
    unreadNotificationsCount,
  } = useSelector((state: RootState) => state.communication);
  const currentUser = useSelector((state: RootState) => state.auth?.user);

  const [messageText, setMessageText] = useState('');
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const selectedChannel = channels.find((c) => c._id === selectedChannelId);
  const selectedConversation = conversations.find((c) => c._id === selectedConversationId);

  // Fetch messages and join room when channel/conversation changes
  useEffect(() => {
    if (selectedChannelId) {
      dispatch(fetchChannelMessages(selectedChannelId));
      socketService.joinChannel(selectedChannelId);
      return () => {
        socketService.leaveChannel(selectedChannelId);
      };
    }
  }, [selectedChannelId, dispatch]);

  useEffect(() => {
    if (selectedConversationId) {
      dispatch(fetchConversationMessages(selectedConversationId));
      socketService.joinConversation(selectedConversationId);
      return () => {
        socketService.leaveConversation(selectedConversationId);
      };
    }
  }, [selectedConversationId, dispatch]);
  const currentMessages =
    viewMode === 'channel' && selectedChannelId
      ? messages[selectedChannelId] || []
      : selectedConversationId
      ? dmMessages[selectedConversationId] || []
      : [];

  const selectedTeam = selectedChannel
    ? teams.find((t) => t._id === selectedChannel.teamId)
    : null;

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [currentMessages]);

  const handleSendMessage = async () => {
    if (!messageText.trim()) return;

    try {
      await dispatch(
        sendMessageThunk({
          channelId: viewMode === 'channel' && selectedChannelId ? selectedChannelId : undefined,
          conversationId: viewMode === 'dm' && selectedConversationId ? selectedConversationId : undefined,
          content: messageText,
          type: 'text',
        })
      ).unwrap();
      setMessageText('');
    } catch (error) {
      console.error('Failed to send message:', error);
      // You can show a toast/notification here
    }
  };

  const handleStartVideoCall = () => {
    if (!currentUser) return;

    const call: ICall = {
      _id: `call-${Date.now()}`,
      type: 'video',
      participants: [
        {
          user: currentUser,
          isMuted: false,
          isCameraOff: false,
          isScreenSharing: false,
          joinedAt: new Date(),
        },
      ],
      status: 'connecting',
      startTime: new Date(),
      channelId: viewMode === 'channel' && selectedChannelId ? selectedChannelId : undefined,
      conversationId: viewMode === 'dm' && selectedConversationId ? selectedConversationId : undefined,
    };

    dispatch(startCall(call));
  };

  const handleStartAudioCall = () => {
    if (!currentUser) return;

    const call: ICall = {
      _id: `call-${Date.now()}`,
      type: 'audio',
      participants: [
        {
          user: currentUser,
          isMuted: false,
          isCameraOff: true,
          isScreenSharing: false,
          joinedAt: new Date(),
        },
      ],
      status: 'connecting',
      startTime: new Date(),
      channelId: viewMode === 'channel' && selectedChannelId ? selectedChannelId : undefined,
      conversationId: viewMode === 'dm' && selectedConversationId ? selectedConversationId : undefined,
    };

    dispatch(startCall(call));
  };

  const renderHeader = () => {
    if (viewMode === 'channel' && selectedChannel) {
      return (
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            p: isMobile ? 1.5 : 2,
            borderBottom: 1,
            borderColor: 'divider',
            bgcolor: settings.theme === 'dark' ? 'grey.800' : 'background.paper',
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, flex: 1, minWidth: 0 }}>
            <Typography variant={isMobile ? 'body1' : 'h6'} fontWeight={600} noWrap>
              # {selectedChannel.name}
            </Typography>
            {!isMobile && selectedChannel.description && (
              <>
                <Divider orientation="vertical" flexItem />
                <Typography variant="body2" color="text.secondary" noWrap>
                  {selectedChannel.description}
                </Typography>
              </>
            )}
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: isMobile ? 0.5 : 1 }}>
            {!isMobile && (
              <>
                <Tooltip title="Start Video Call">
                  <IconButton onClick={handleStartVideoCall} size={isMobile ? 'small' : 'medium'}>
                    <VideocamIcon fontSize="small" />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Start Audio Call">
                  <IconButton onClick={handleStartAudioCall} size={isMobile ? 'small' : 'medium'}>
                    <CallIcon fontSize="small" />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Channel Info">
                  <IconButton size={isMobile ? 'small' : 'medium'}>
                    <InfoIcon fontSize="small" />
                  </IconButton>
                </Tooltip>
              </>
            )}
            <Tooltip title={`Notifications (${unreadNotificationsCount})`}>
              <IconButton onClick={() => dispatch(toggleNotifications())} size={isMobile ? 'small' : 'medium'}>
                {unreadNotificationsCount > 0 ? (
                  <Chip
                    label={unreadNotificationsCount}
                    size="small"
                    color="error"
                    sx={{ height: 20 }}
                  />
                ) : (
                  <NotificationsIcon fontSize="small" />
                )}
              </IconButton>
            </Tooltip>
            <IconButton onClick={(e) => setAnchorEl(e.currentTarget)} size={isMobile ? 'small' : 'medium'}>
              <MoreVertIcon fontSize="small" />
            </IconButton>
          </Box>
        </Box>
      );
    } else if (viewMode === 'dm' && selectedConversation) {
      const currentUserId = currentUser?._id || currentUser?.id;
      const otherParticipants = selectedConversation.participants.filter(
        (p) => {
          const participantId = p._id || p.id;
          return participantId !== currentUserId;
        }
      );

      return (
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            p: isMobile ? 1.5 : 2,
            borderBottom: 1,
            borderColor: 'divider',
            bgcolor: settings.theme === 'dark' ? 'grey.800' : 'background.paper',
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: isMobile ? 1 : 2, flex: 1, minWidth: 0 }}>
            <AvatarGroup max={3}>
              {otherParticipants.map((participant) => (
                <Avatar
                  key={participant._id}
                  src={participant.avatar}
                  alt={participant.name}
                  sx={{ width: isMobile ? 32 : 40, height: isMobile ? 32 : 40 }}
                />
              ))}
            </AvatarGroup>
            <Box sx={{ minWidth: 0 }}>
              <Typography variant={isMobile ? 'body1' : 'h6'} fontWeight={600} noWrap>
                {otherParticipants.map((p) => p.name).join(', ')}
              </Typography>
              {!isMobile && (
                <Typography variant="caption" color="text.secondary" noWrap>
                  {otherParticipants.map((p) => p.status).join(', ')}
                </Typography>
              )}
            </Box>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: isMobile ? 0.5 : 1 }}>
            {!isMobile && (
              <>
                <Tooltip title="Start Video Call">
                  <IconButton onClick={handleStartVideoCall} size={isMobile ? 'small' : 'medium'}>
                    <VideocamIcon fontSize="small" />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Start Audio Call">
                  <IconButton onClick={handleStartAudioCall} size={isMobile ? 'small' : 'medium'}>
                    <CallIcon fontSize="small" />
                  </IconButton>
                </Tooltip>
              </>
            )}
            <Tooltip title={`Notifications (${unreadNotificationsCount})`}>
              <IconButton onClick={() => dispatch(toggleNotifications())} size={isMobile ? 'small' : 'medium'}>
                {unreadNotificationsCount > 0 ? (
                  <Chip
                    label={unreadNotificationsCount}
                    size="small"
                    color="error"
                    sx={{ height: 20 }}
                  />
                ) : (
                  <NotificationsIcon fontSize="small" />
                )}
              </IconButton>
            </Tooltip>
            <IconButton onClick={(e) => setAnchorEl(e.currentTarget)} size={isMobile ? 'small' : 'medium'}>
              <MoreVertIcon fontSize="small" />
            </IconButton>
          </Box>
        </Box>
      );
    }

    return null;
  };

  if (!selectedChannelId && !selectedConversationId) {
    return (
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          bgcolor: settings.theme === 'dark' ? 'grey.900' : 'grey.50',
        }}
      >
        <Typography variant="h5" color="text.secondary">
          Select a channel or conversation to start messaging
        </Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', height: '100%' }}>
      {/* Header */}
      {renderHeader()}

      {/* Messages Area */}
      <Box
        sx={{
          flex: 1,
          overflow: 'auto',
          p: 3,
          bgcolor: settings.theme === 'dark' ? 'grey.900' : 'grey.50',
        }}
      >
        {currentMessages.length === 0 ? (
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: '100%',
            }}
          >
            <Typography variant="body1" color="text.secondary">
              No messages yet. Start the conversation!
            </Typography>
          </Box>
        ) : (
          <>
            {currentMessages.map((message) => (
              <MessageBubble key={message._id} message={message} />
            ))}
            <div ref={messagesEndRef} />
          </>
        )}
      </Box>

      {/* Message Composer */}
      <Box
        sx={{
          p: isMobile ? 1 : 2,
          borderTop: 1,
          borderColor: 'divider',
          bgcolor: settings.theme === 'dark' ? 'grey.800' : 'background.paper',
        }}
      >
        <TextField
          fullWidth
          multiline
          maxRows={isMobile ? 3 : 4}
          placeholder={`Message ${viewMode === 'channel' ? '#' + selectedChannel?.name : 'direct message'}`}
          value={messageText}
          onChange={(e) => setMessageText(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
              e.preventDefault();
              handleSendMessage();
            }
          }}
          InputProps={{
            startAdornment: !isMobile && (
              <InputAdornment position="start">
                <Tooltip title="Attach File">
                  <IconButton size="small">
                    <AttachFileIcon />
                  </IconButton>
                </Tooltip>
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                {!isMobile && (
                  <Tooltip title="Add Emoji">
                    <IconButton size="small">
                      <EmojiIcon />
                    </IconButton>
                  </Tooltip>
                )}
                <Tooltip title="Send">
                  <IconButton onClick={handleSendMessage} color="primary" disabled={!messageText.trim()} size="small">
                    <SendIcon fontSize="small" />
                  </IconButton>
                </Tooltip>
              </InputAdornment>
            ),
          }}
          sx={{
            '& .MuiOutlinedInput-root': {
              bgcolor: settings.theme === 'dark' ? 'grey.700' : 'white',
              fontSize: isMobile ? '14px' : '16px',
            },
          }}
        />
      </Box>

      {/* Options Menu */}
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={() => setAnchorEl(null)}>
        {isMobile && (
          <>
            <MenuItem onClick={() => { handleStartVideoCall(); setAnchorEl(null); }}>
              <VideocamIcon fontSize="small" sx={{ mr: 1 }} /> Start Video Call
            </MenuItem>
            <MenuItem onClick={() => { handleStartAudioCall(); setAnchorEl(null); }}>
              <CallIcon fontSize="small" sx={{ mr: 1 }} /> Start Audio Call
            </MenuItem>
            {viewMode === 'channel' && (
              <MenuItem onClick={() => setAnchorEl(null)}>
                <InfoIcon fontSize="small" sx={{ mr: 1 }} /> Channel Info
              </MenuItem>
            )}
            <Divider />
          </>
        )}
        <MenuItem onClick={() => setAnchorEl(null)}>
          {viewMode === 'channel' ? 'Channel Settings' : 'Conversation Settings'}
        </MenuItem>
        <MenuItem onClick={() => setAnchorEl(null)}>Notification Preferences</MenuItem>
        <Divider />
        <MenuItem onClick={() => setAnchorEl(null)} sx={{ color: 'error.main' }}>
          {viewMode === 'channel' ? 'Leave Channel' : 'Leave Conversation'}
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default ChatArea;
