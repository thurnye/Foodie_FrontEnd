import React, { useState } from 'react';
import {
  Box,
  Avatar,
  Typography,
  IconButton,
  Chip,
  Paper,
  Menu,
  MenuItem,
  Tooltip,
} from '@mui/material';
import {
  MoreVert as MoreVertIcon,
  Reply as ReplyIcon,
} from '@mui/icons-material';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../../../app/stores/stores';
import { addReaction, removeReaction } from '../redux/communication.slice';
import { IMessage } from '../types/communication.types';
import { formatDistanceToNow } from 'date-fns';

interface MessageBubbleProps {
  message: IMessage;
}

const MessageBubble: React.FC<MessageBubbleProps> = ({ message }) => {
  const dispatch = useDispatch<AppDispatch>();
  const { settings, selectedChannelId, selectedConversationId, viewMode } = useSelector(
    (state: RootState) => state.communication
  );
  const currentUser = useSelector((state: RootState) => state.auth?.user);

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [showReactions, setShowReactions] = useState(false);

  const currentUserId = currentUser?._id || currentUser?.id;
  const messageSenderId = message.sender._id || message.sender.id;
  const isOwnMessage = messageSenderId === currentUserId;

  const handleReactionClick = (emoji: string) => {
    if (!currentUserId) return;

    const hasReacted = message.reactions?.some(
      (r) => r.emoji === emoji && r.users.includes(currentUserId)
    );

    if (hasReacted) {
      dispatch(
        removeReaction({
          messageId: message._id,
          emoji,
          userId: currentUserId,
          channelId: viewMode === 'channel' && selectedChannelId ? selectedChannelId : undefined,
          conversationId: viewMode === 'dm' && selectedConversationId ? selectedConversationId : undefined,
        })
      );
    } else {
      dispatch(
        addReaction({
          messageId: message._id,
          emoji,
          userId: currentUserId,
          channelId: viewMode === 'channel' && selectedChannelId ? selectedChannelId : undefined,
          conversationId: viewMode === 'dm' && selectedConversationId ? selectedConversationId : undefined,
        })
      );
    }
  };

  const commonEmojis = ['👍', '❤️', '😄', '🎉', '🚀', '👀'];

  return (
    <Box
      sx={{
        display: 'flex',
        gap: 2,
        mb: 3,
        '&:hover .message-actions': {
          opacity: 1,
        },
      }}
    >
      {/* Avatar */}
      <Avatar src={message.sender.avatar} alt={message.sender.name} sx={{ width: 40, height: 40 }} />

      {/* Message Content */}
      <Box sx={{ flex: 1, minWidth: 0 }}>
        {/* Header */}
        <Box sx={{ display: 'flex', alignItems: 'baseline', gap: 1, mb: 0.5 }}>
          <Typography variant="subtitle2" fontWeight={600}>
            {message.sender.name}
          </Typography>
          <Typography variant="caption" color="text.secondary">
            {formatDistanceToNow(new Date(message.createdAt), { addSuffix: true })}
          </Typography>
          {message.isEdited && (
            <Typography variant="caption" color="text.secondary" sx={{ fontStyle: 'italic' }}>
              (edited)
            </Typography>
          )}
        </Box>

        {/* Message Body */}
        <Paper
          sx={{
            p: 1.5,
            bgcolor: isOwnMessage
              ? settings.theme === 'dark'
                ? 'primary.dark'
                : 'primary.light'
              : settings.theme === 'dark'
              ? 'grey.800'
              : 'grey.100',
            color: isOwnMessage ? 'primary.contrastText' : 'text.primary',
            borderRadius: 2,
            position: 'relative',
          }}
        >
          <Typography variant="body2" sx={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>
            {message.content}
          </Typography>

          {/* Action Buttons */}
          <Box
            className="message-actions"
            sx={{
              position: 'absolute',
              top: -12,
              right: 8,
              opacity: 0,
              transition: 'opacity 0.2s',
              display: 'flex',
              gap: 0.5,
              bgcolor: settings.theme === 'dark' ? 'grey.700' : 'background.paper',
              borderRadius: 1,
              boxShadow: 1,
            }}
          >
            <Tooltip title="Add Reaction">
              <IconButton size="small" onClick={() => setShowReactions(!showReactions)}>
                😊
              </IconButton>
            </Tooltip>
            <Tooltip title="Reply">
              <IconButton size="small">
                <ReplyIcon fontSize="small" />
              </IconButton>
            </Tooltip>
            <IconButton size="small" onClick={(e) => setAnchorEl(e.currentTarget)}>
              <MoreVertIcon fontSize="small" />
            </IconButton>
          </Box>
        </Paper>

        {/* Quick Reactions Picker */}
        {showReactions && (
          <Paper
            sx={{
              mt: 1,
              p: 1,
              display: 'flex',
              gap: 1,
              width: 'fit-content',
            }}
          >
            {commonEmojis.map((emoji) => (
              <IconButton
                key={emoji}
                size="small"
                onClick={() => {
                  handleReactionClick(emoji);
                  setShowReactions(false);
                }}
              >
                {emoji}
              </IconButton>
            ))}
          </Paper>
        )}

        {/* Reactions */}
        {message.reactions && message.reactions.length > 0 && (
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mt: 1 }}>
            {message.reactions.map((reaction) => {
              const hasUserReacted = currentUserId ? reaction.users.includes(currentUserId) : false;
              return (
                <Chip
                  key={reaction.emoji}
                  label={`${reaction.emoji} ${reaction.count}`}
                  size="small"
                  onClick={() => handleReactionClick(reaction.emoji)}
                  sx={{
                    height: 24,
                    cursor: 'pointer',
                    bgcolor: hasUserReacted
                      ? settings.theme === 'dark'
                        ? 'primary.dark'
                        : 'primary.light'
                      : settings.theme === 'dark'
                      ? 'grey.700'
                      : 'grey.200',
                    '&:hover': {
                      bgcolor: settings.theme === 'dark' ? 'grey.600' : 'grey.300',
                    },
                  }}
                />
              );
            })}
          </Box>
        )}
      </Box>

      {/* Message Options Menu */}
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={() => setAnchorEl(null)}>
        <MenuItem onClick={() => setAnchorEl(null)}>Copy Message</MenuItem>
        {isOwnMessage && (
          <>
            <MenuItem onClick={() => setAnchorEl(null)}>Edit Message</MenuItem>
            <MenuItem onClick={() => setAnchorEl(null)} sx={{ color: 'error.main' }}>
              Delete Message
            </MenuItem>
          </>
        )}
        {!isOwnMessage && (
          <MenuItem onClick={() => setAnchorEl(null)} sx={{ color: 'error.main' }}>
            Report Message
          </MenuItem>
        )}
      </Menu>
    </Box>
  );
};

export default MessageBubble;
