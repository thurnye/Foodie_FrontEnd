import React, { useState } from 'react';
import {
  Box,
  Avatar,
  Typography,
  IconButton,
  Button,
  TextField,
  Stack,
  Rating,
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
  ExpandMore,
  ExpandLess,
} from '@mui/icons-material';
import { IReview, IReviewReaction } from '../types/recipe.types';
import { formatDistanceToNow } from 'date-fns';
import ReviewReply from './ReviewReply';

interface ReviewItemProps {
  review: IReview;
  currentUserId?: string;
  onLike: (reviewId: string) => void;
  onReact: (reviewId: string, reactionType: IReviewReaction['type']) => void;
  onReply: (reviewId: string, replyText: string, parentReplyId?: string) => void;
  onLikeReply: (replyId: string) => void;
  onReactReply: (replyId: string, reactionType: IReviewReaction['type']) => void;
}

const ReviewItem: React.FC<ReviewItemProps> = ({
  review,
  currentUserId,
  onLike,
  onReact,
  onReply,
  onLikeReply,
  onReactReply,
}) => {
  const [showReactions, setShowReactions] = useState(false);
  const [showReplyForm, setShowReplyForm] = useState(false);
  const [replyText, setReplyText] = useState('');
  const [showReplies, setShowReplies] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);

  const isLiked = currentUserId ? review.likes.includes(currentUserId) : false;

  const getReactionCount = (type: IReviewReaction['type']) => {
    return review.reactions.filter((r) => r.type === type).length;
  };

  const hasUserReacted = (type: IReviewReaction['type']) => {
    return currentUserId
      ? review.reactions.some((r) => r.type === type && r.userId === currentUserId)
      : false;
  };

  const reactionIcons: { type: IReviewReaction['type']; icon: React.ReactNode; color: string }[] = [
    { type: 'like', icon: <ThumbUp fontSize="small" />, color: '#1976d2' }, // Blue
    { type: 'love', icon: <Favorite fontSize="small" />, color: '#fa8072' }, // Salmon
    { type: 'laugh', icon: <TagFaces fontSize="small" />, color: '#ffd700' }, // Gold
    { type: 'wow', icon: <SentimentSatisfied fontSize="small" />, color: '#ff9800' }, // Orange
    { type: 'sad', icon: <MoodBad fontSize="small" />, color: '#9e9e9e' }, // Gray
  ];

  const handleSubmitReply = () => {
    if (replyText.trim()) {
      onReply(review._id, replyText);
      setReplyText('');
      setShowReplyForm(false);
    }
  };

  return (
    <Box sx={{ py: 3, borderBottom: '1px solid', borderColor: 'divider' }}>
      <Box sx={{ display: 'flex', gap: 2 }}>
        <Avatar
          src={review.user?.avatar}
          alt={review.user?.username}
          sx={{ width: 48, height: 48 }}
        >
          {review.user?.firstName?.[0]}
        </Avatar>

        <Box sx={{ flex: 1 }}>
          <Box
            sx={{
              bgcolor: 'grey.50',
              borderRadius: 2,
              p: 2,
            }}
          >
            <Stack direction="row" justifyContent="space-between" alignItems="start">
              <Box sx={{ flex: 1 }}>
                <Stack direction="row" alignItems="center" spacing={1}>
                  <Typography variant="subtitle1" fontWeight="bold">
                    {review.user?.firstName} {review.user?.lastName}
                  </Typography>
                  <IconButton
                    size="small"
                    onClick={() => setIsCollapsed(!isCollapsed)}
                    sx={{ ml: 1 }}
                  >
                    {isCollapsed ? <ExpandMore /> : <ExpandLess />}
                  </IconButton>
                </Stack>
                <Typography variant="caption" color="text.secondary" display="block">
                  @{review.user?.username}
                </Typography>
              </Box>
              <Rating value={review.rating} readOnly size="small" />
            </Stack>

            <Collapse in={!isCollapsed}>
              <Typography variant="body2" sx={{ mt: 1 }}>
                {review.review}
              </Typography>

              <Typography variant="caption" color="text.secondary" sx={{ mt: 1, display: 'block' }}>
                {formatDistanceToNow(new Date(review.createdAt), { addSuffix: true })}
              </Typography>
            </Collapse>
          </Box>

          <Stack direction="row" spacing={2} sx={{ mt: 1, alignItems: 'center' }}>
            <Button
              size="small"
              startIcon={isLiked ? <ThumbUp /> : <ThumbUpOutlined />}
              onClick={() => onLike(review._id)}
              sx={{ textTransform: 'none', minWidth: 'auto' }}
            >
              {review.likes.length > 0 && review.likes.length}
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
                    boxShadow: 3,
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
                        onReact(review._id, type);
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
              Reply {review.replies.length > 0 && `(${review.replies.length})`}
            </Button>

            {review.replies.length > 0 && (
              <Button
                size="small"
                startIcon={showReplies ? <ExpandLess /> : <ExpandMore />}
                onClick={() => setShowReplies(!showReplies)}
                sx={{ textTransform: 'none' }}
              >
                {showReplies ? 'Hide' : 'Show'} Replies
              </Button>
            )}
          </Stack>

          {review.reactions.length > 0 && (
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

          {review.replies.length > 0 && (
            <Collapse in={showReplies}>
              <Box sx={{ mt: 2 }}>
                {review.replies.map((reply) => (
                  <ReviewReply
                    key={reply._id}
                    reply={reply}
                    parentReviewId={review._id}
                    currentUserId={currentUserId}
                    onLike={onLikeReply}
                    onReact={onReactReply}
                    onReply={onReply}
                    nestedReplies={[]}
                  />
                ))}
              </Box>
            </Collapse>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default ReviewItem;
