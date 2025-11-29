import React, { useState, useEffect } from 'react';
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Typography,
  IconButton,
  Badge,
  TextField,
  InputAdornment,
  Collapse,
  Chip,
  Tooltip,
  Divider,
  Button,
} from '@mui/material';
import {
  Tag as HashIcon,
  Lock as LockIcon,
  Add as AddIcon,
  Search as SearchIcon,
  ExpandMore as ExpandMoreIcon,
  ExpandLess as ExpandLessIcon,
  Message as MessageIcon,
  Campaign as CampaignIcon,
} from '@mui/icons-material';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../../../app/stores/stores';
import { selectChannel, toggleCreateChannel, setViewMode, fetchTeamChannels } from '../redux/communication.slice';
import CreateChannelDialog from './CreateChannelDialog';

interface ChannelsListProps {
  onClose?: () => void;
}

const ChannelsList: React.FC<ChannelsListProps> = ({ onClose }) => {
  const dispatch = useDispatch<AppDispatch>();
  const { channels, selectedChannelId, selectedTeamId, teams, settings } = useSelector(
    (state: RootState) => state.communication
  );

  const [searchQuery, setSearchQuery] = useState('');
  const [channelsExpanded, setChannelsExpanded] = useState(true);

  // Fetch channels when team changes
  useEffect(() => {
    if (selectedTeamId) {
      dispatch(fetchTeamChannels(selectedTeamId));
    }
  }, [selectedTeamId, dispatch]);

  const selectedTeam = teams.find((t) => t._id === selectedTeamId);
  const teamChannels = channels.filter((c) => c.teamId === selectedTeamId);

  const filteredChannels = teamChannels.filter((channel) =>
    channel.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleChannelClick = (channelId: string) => {
    dispatch(selectChannel(channelId));
    onClose?.();
  };

  const handleDMClick = () => {
    dispatch(setViewMode('dm'));
    onClose?.();
  };

  return (
    <>
      <Box
        sx={{
          width: 280,
          bgcolor: settings.theme === 'dark' ? 'grey.800' : 'background.paper',
          borderRight: 1,
          borderColor: 'divider',
          display: 'flex',
          flexDirection: 'column',
          height: '100vh',
        }}
      >
        {/* Team Header */}
        <Box
          sx={{
            p: 2,
            borderBottom: 1,
            borderColor: 'divider',
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontWeight: 600,
              color: settings.theme === 'dark' ? 'white' : 'text.primary',
              mb: 1,
            }}
          >
            {selectedTeam?.name}
          </Typography>
          <Typography
            variant="caption"
            sx={{
              color: settings.theme === 'dark' ? 'grey.400' : 'text.secondary',
            }}
          >
            {selectedTeam?.description}
          </Typography>
        </Box>

        {/* Search */}
        <Box sx={{ p: 2 }}>
          <TextField
            fullWidth
            size="small"
            placeholder="Search channels..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon fontSize="small" />
                </InputAdornment>
              ),
            }}
            sx={{
              '& .MuiOutlinedInput-root': {
                bgcolor: settings.theme === 'dark' ? 'grey.700' : 'grey.100',
              },
            }}
          />
        </Box>

        {/* Channels List */}
        <Box sx={{ flex: 1, overflow: 'auto' }}>
          {/* Direct Messages Option */}
          <ListItem disablePadding>
            <ListItemButton onClick={handleDMClick}>
              <ListItemIcon sx={{ minWidth: 36 }}>
                <MessageIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="Direct Messages" />
            </ListItemButton>
          </ListItem>

          <Divider sx={{ my: 1 }} />

          {/* Channels Header */}
          <ListItemButton onClick={() => setChannelsExpanded(!channelsExpanded)}>
            <ListItemText
              primary={
                <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                  Channels
                </Typography>
              }
            />
            <IconButton size="small" onClick={() => dispatch(toggleCreateChannel())}>
              <AddIcon fontSize="small" />
            </IconButton>
            {channelsExpanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </ListItemButton>

          <Collapse in={channelsExpanded} timeout="auto" unmountOnExit>
            <List dense>
              {filteredChannels.map((channel) => (
                <ListItem key={channel._id} disablePadding>
                  <ListItemButton
                    selected={selectedChannelId === channel._id}
                    onClick={() => handleChannelClick(channel._id)}
                    sx={{
                      pl: 3,
                      '&.Mui-selected': {
                        bgcolor: settings.theme === 'dark' ? 'grey.700' : 'action.selected',
                        '&:hover': {
                          bgcolor: settings.theme === 'dark' ? 'grey.600' : 'action.selected',
                        },
                      },
                    }}
                  >
                    <ListItemIcon sx={{ minWidth: 32 }}>
                      {channel.type === 'announcement' ? (
                        <CampaignIcon fontSize="small" />
                      ) : channel.isPrivate ? (
                        <LockIcon fontSize="small" />
                      ) : (
                        <HashIcon fontSize="small" />
                      )}
                    </ListItemIcon>
                    <ListItemText
                      primary={
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                          <Typography variant="body2">{channel.name}</Typography>
                          {channel.unreadCount > 0 && (
                            <Chip
                              label={channel.unreadCount}
                              size="small"
                              color="primary"
                              sx={{ height: 18, fontSize: '0.7rem' }}
                            />
                          )}
                        </Box>
                      }
                    />
                  </ListItemButton>
                </ListItem>
              ))}

              {filteredChannels.length === 0 && (
                <ListItem>
                  <ListItemText
                    primary={
                      <Typography variant="body2" color="text.secondary" align="center">
                        No channels found
                      </Typography>
                    }
                  />
                </ListItem>
              )}
            </List>
          </Collapse>
        </Box>

        {/* Create Channel Button */}
        <Box sx={{ p: 2, borderTop: 1, borderColor: 'divider' }}>
          <Button
            fullWidth
            startIcon={<AddIcon fontSize="small" />}
            onClick={() => dispatch(toggleCreateChannel())}
            sx={{
              justifyContent: 'flex-start',
              gap: 1,
            }}
          >
            Add Channel
          </Button>
        </Box>
      </Box>

      {/* Create Channel Dialog */}
      <CreateChannelDialog />
    </>
  );
};

export default ChannelsList;
