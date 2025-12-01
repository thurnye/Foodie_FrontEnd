import React, { useState } from 'react';
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Typography,
  TextField,
  InputAdornment,
  Badge,
  Chip,
  AvatarGroup,
} from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../app/stores/stores';
import { selectConversation } from '../redux/communication.slice';
import { formatDistanceToNow } from 'date-fns';

interface DirectMessagesListProps {
  onClose?: () => void;
}

const DirectMessagesList: React.FC<DirectMessagesListProps> = ({ onClose }) => {
  const dispatch = useDispatch();
  const { conversations, selectedConversationId, settings } = useSelector(
    (state: RootState) => state.communication
  );
  const currentUser = useSelector((state: RootState) => state.auth?.user);

  const [searchQuery, setSearchQuery] = useState('');

  const currentUserId = currentUser?._id || currentUser?.id;

  const filteredConversations = conversations.filter((conversation) => {
    const otherParticipants = conversation.participants.filter((p) => {
      const participantId = p._id || p.id;
      return participantId !== currentUserId;
    });
    const names = otherParticipants.map((p) => p.name).join(' ');
    return names.toLowerCase().includes(searchQuery.toLowerCase());
  });

  const handleConversationClick = (conversationId: string) => {
    dispatch(selectConversation(conversationId));
    onClose?.();
  };

  return (
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
      {/* Header */}
      <Box
        sx={{
          p: 2,
          borderBottom: 1,
          borderColor: 'divider',
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
          Direct Messages
        </Typography>
      </Box>

      {/* Search */}
      <Box sx={{ p: 2 }}>
        <TextField
          fullWidth
          size="small"
          placeholder="Search conversations..."
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

      {/* Conversations List */}
      <Box sx={{ flex: 1, overflow: 'auto' }}>
        <List disablePadding>
          {filteredConversations.map((conversation) => {
            const otherParticipants = conversation.participants.filter((p) => {
              const participantId = p._id || p.id;
              return participantId !== currentUserId;
            });
            const onlineCount = otherParticipants.filter((p) => p.status === 'online').length;

            return (
              <ListItem key={conversation._id} disablePadding>
                <ListItemButton
                  selected={selectedConversationId === conversation._id}
                  onClick={() => handleConversationClick(conversation._id)}
                  sx={{
                    '&.Mui-selected': {
                      bgcolor: settings.theme === 'dark' ? 'grey.700' : 'action.selected',
                      '&:hover': {
                        bgcolor: settings.theme === 'dark' ? 'grey.600' : 'action.selected',
                      },
                    },
                  }}
                >
                  <ListItemAvatar>
                    {otherParticipants.length === 1 ? (
                      <Badge
                        overlap="circular"
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                        variant="dot"
                        sx={{
                          '& .MuiBadge-badge': {
                            backgroundColor:
                              otherParticipants[0].status === 'online'
                                ? '#44b700'
                                : otherParticipants[0].status === 'away'
                                ? '#ff9800'
                                : otherParticipants[0].status === 'busy'
                                ? '#f44336'
                                : '#9e9e9e',
                            color:
                              otherParticipants[0].status === 'online'
                                ? '#44b700'
                                : otherParticipants[0].status === 'away'
                                ? '#ff9800'
                                : otherParticipants[0].status === 'busy'
                                ? '#f44336'
                                : '#9e9e9e',
                            boxShadow: `0 0 0 2px ${settings.theme === 'dark' ? '#424242' : '#fff'}`,
                            '&::after': {
                              position: 'absolute',
                              top: 0,
                              left: 0,
                              width: '100%',
                              height: '100%',
                              borderRadius: '50%',
                              animation:
                                otherParticipants[0].status === 'online'
                                  ? 'ripple 1.2s infinite ease-in-out'
                                  : 'none',
                              border: '1px solid currentColor',
                              content: '""',
                            },
                          },
                          '@keyframes ripple': {
                            '0%': {
                              transform: 'scale(.8)',
                              opacity: 1,
                            },
                            '100%': {
                              transform: 'scale(2.4)',
                              opacity: 0,
                            },
                          },
                        }}
                      >
                        <Avatar src={otherParticipants[0].avatar} alt={otherParticipants[0].name} />
                      </Badge>
                    ) : (
                      <AvatarGroup max={2}>
                        {otherParticipants.slice(0, 2).map((participant) => (
                          <Avatar
                            key={participant._id}
                            src={participant.avatar}
                            alt={participant.name}
                            sx={{ width: 32, height: 32 }}
                          />
                        ))}
                      </AvatarGroup>
                    )}
                  </ListItemAvatar>

                  <ListItemText
                    primary={
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Typography variant="body2" fontWeight={conversation.unreadCount > 0 ? 600 : 400}>
                          {otherParticipants.map((p) => p.name).join(', ')}
                        </Typography>
                        {conversation.unreadCount > 0 && (
                          <Chip
                            label={conversation.unreadCount}
                            size="small"
                            color="primary"
                            sx={{ height: 18, fontSize: '0.7rem' }}
                          />
                        )}
                      </Box>
                    }
                    secondary={
                      <Typography
                        variant="caption"
                        color="text.secondary"
                        noWrap
                        sx={{
                          display: 'block',
                          maxWidth: '100%',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                        }}
                      >
                        {conversation.lastMessage
                          ? `${conversation.lastMessage.sender.name}: ${conversation.lastMessage.content}`
                          : 'No messages yet'}
                      </Typography>
                    }
                  />

                  {conversation.lastMessage && (
                    <Typography variant="caption" color="text.secondary" sx={{ ml: 1 }}>
                      {formatDistanceToNow(new Date(conversation.lastMessage.createdAt), {
                        addSuffix: false,
                      })}
                    </Typography>
                  )}
                </ListItemButton>
              </ListItem>
            );
          })}

          {filteredConversations.length === 0 && (
            <ListItem>
              <ListItemText
                primary={
                  <Typography variant="body2" color="text.secondary" align="center">
                    No conversations found
                  </Typography>
                }
              />
            </ListItem>
          )}
        </List>
      </Box>
    </Box>
  );
};

export default DirectMessagesList;
