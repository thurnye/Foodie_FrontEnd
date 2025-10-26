import React, { useState } from 'react';
import {
  Box,
  Avatar,
  Typography,
  IconButton,
  Button,
  TextField,
  Stack,
  Collapse,
} from '@mui/material';
import {
  ThumbUp,
  ThumbUpOutlined,
  Favorite,
  SentimentSatisfied,
  TagFaces,
  MoodBad,
  Reply as ReplyIcon,
} from '@mui/icons-material';
import { IReviewReply, IReviewReaction } from '../types/recipe.types';
import { formatDistanceToNow } from 'date-fns';

interface ReviewReplyProps {
  reply: IReviewReply;
  parentReviewId: string;
  currentUserId?: string;
  onLike: (replyId: string) => void;
  onReact: (replyId: string, reactionType: IReviewReaction['type']) => void;
  onReply: (reviewId: string, replyText: string, parentReplyId?: string) => void;
  nestedReplies?: IReviewReply[];
}

const ReviewReply: React.FC<ReviewReplyProps> = ({
  reply,
  parentReviewId,
  currentUserId,
  onLike,
  onReact,
  onReply,
  nestedReplies = [],
}) => {
  const [showReactions, setShowReactions] = useState(false);
  const [showReplyForm, setShowReplyForm] = useState(false);
  const [replyText, setReplyText] = useState('');

  const isLiked = currentUserId ? reply.likes.includes(currentUserId) : false;

  const getReactionCount = (type: IReviewReaction['type']) => {
    return reply.reactions.filter((r) => r.type === type).length;
  };

  const hasUserReacted = (type: IReviewReaction['type']) => {
    return currentUserId
      ? reply.reactions.some((r) => r.type === type && r.userId === currentUserId)
      : false;
  };

  const reactionIcons: { type: IReviewReaction['type']; icon: React.ReactNode; color: string }[] = [
    { type: 'like', icon: <ThumbUp fontSize="small" />, color: '#1976d2' }, // Blue
    { type: 'love', icon: <Favorite fontSize="small" />, color: '#ff0000' }, // Red
    { type: 'laugh', icon: <TagFaces fontSize="small" />, color: '#ffd700' }, // Gold
    { type: 'wow', icon: <SentimentSatisfied fontSize="small" />, color: '#ff9800' }, // Orange
    { type: 'sad', icon: <MoodBad fontSize="small" />, color: '#9e9e9e' }, // Gray
  ];

  const handleSubmitReply = () => {
    if (replyText.trim()) {
      // When replying to a reply, pass parentReviewId and the current reply._id as parentReplyId
      onReply(parentReviewId, replyText, reply._id);
      setReplyText('');
      setShowReplyForm(false);
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        gap: 2,
        pl: 6,
        py: 2,
        borderLeft: '2px solid',
        borderColor: 'divider',
      }}
    >
      <Avatar
        src={reply.user?.avatar}
        alt={reply.user?.username}
        sx={{ width: 32, height: 32 }}
      >
        {reply.user?.firstName?.[0]}
      </Avatar>

      <Box sx={{ flex: 1 }}>
        <Box
          sx={{
            bgcolor: 'grey.100',
            borderRadius: 2,
            p: 2,
          }}
        >
          <Typography variant="subtitle2" fontWeight="bold">
            {reply.user?.firstName} {reply.user?.lastName}
          </Typography>
          <Typography variant="caption" color="text.secondary" display="block" mb={1}>
            @{reply.user?.username}
          </Typography>
          <Typography variant="body2">{reply.review}</Typography>
        </Box>

        <Stack direction="row" spacing={2} sx={{ mt: 1, alignItems: 'center' }}>
          <Button
            size="small"
            startIcon={isLiked ? <ThumbUp /> : <ThumbUpOutlined />}
            onClick={() => onLike(reply._id)}
            sx={{ textTransform: 'none', minWidth: 'auto' }}
          >
            {reply.likes.length > 0 && reply.likes.length}
          </Button>

          <Box sx={{ position: 'relative' }}>
            <Button
              size="small"
              onClick={() => setShowReactions(!showReactions)}
              sx={{ textTransform: 'none' }}
            >
              React
            </Button>
            {showReactions && (
              <Box
                sx={{
                  position: 'absolute',
                  bottom: '100%',
                  left: 0,
                  bgcolor: 'background.paper',
                  boxShadow: 2,
                  borderRadius: 1,
                  p: 0.5,
                  display: 'flex',
                  gap: 0.5,
                  zIndex: 10,
                }}
              >
                {reactionIcons.map(({ type, icon, color }) => (
                  <IconButton
                    key={type}
                    size="small"
                    onClick={() => {
                      onReact(reply._id, type);
                      setShowReactions(false);
                    }}
                    sx={{
                      color: hasUserReacted(type) ? color : 'action.disabled',
                      '&:hover': {
                        color: color,
                        bgcolor: `${color}15`,
                      },
                    }}
                  >
                    {icon}
                  </IconButton>
                ))}
              </Box>
            )}
          </Box>

          <Button
            size="small"
            startIcon={<ReplyIcon />}
            onClick={() => setShowReplyForm(!showReplyForm)}
            sx={{ textTransform: 'none' }}
          >
            Reply {nestedReplies.length > 0 && `(${nestedReplies.length})`}
          </Button>

          <Typography variant="caption" color="text.secondary">
            {formatDistanceToNow(new Date(reply.createdAt), { addSuffix: true })}
          </Typography>
        </Stack>

        {reply.reactions.length > 0 && (
          <Stack direction="row" spacing={1} sx={{ mt: 1 }}>
            {reactionIcons.map(({ type, icon, color }) => {
              const count = getReactionCount(type);
              return count > 0 ? (
                <Box
                  key={type}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 0.5,
                    fontSize: '0.75rem',
                    color: color,
                  }}
                >
                  {icon}
                  <Typography variant="caption" sx={{ color }}>{count}</Typography>
                </Box>
              ) : null;
            })}
          </Stack>
        )}

        <Collapse in={showReplyForm}>
          <Box sx={{ mt: 2 }}>
            <TextField
              fullWidth
              multiline
              rows={2}
              placeholder="Write a reply..."
              value={replyText}
              onChange={(e) => setReplyText(e.target.value)}
              size="small"
            />
            <Stack direction="row" spacing={1} sx={{ mt: 1 }}>
              <Button
                variant="contained"
                size="small"
                onClick={handleSubmitReply}
                disabled={!replyText.trim()}
              >
                Post Reply
              </Button>
              <Button
                variant="text"
                size="small"
                onClick={() => {
                  setShowReplyForm(false);
                  setReplyText('');
                }}
              >
                Cancel
              </Button>
            </Stack>
          </Box>
        </Collapse>

        {nestedReplies.length > 0 && (
          <Box sx={{ mt: 2 }}>
            {nestedReplies.map((nestedReply) => (
              <ReviewReply
                key={nestedReply._id}
                reply={nestedReply}
                parentReviewId={parentReviewId}
                currentUserId={currentUserId}
                onLike={onLike}
                onReact={onReact}
                onReply={onReply}
                nestedReplies={[]}
              />
            ))}
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default ReviewReply;
