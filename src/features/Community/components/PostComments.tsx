import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Box,
  Typography,
  Avatar,
  IconButton,
  Button,
  TextField,
  Divider,
  Menu,
  MenuItem,
  Collapse,
} from '@mui/material';
import {
  ArrowUpward,
  ArrowDownward,
  Reply,
  MoreVert,
  ThumbUpAltOutlined,
  FavoriteOutlined,
  LocalFireDepartmentOutlined,
  SentimentSatisfiedAltOutlined,
  SentimentVeryDissatisfiedOutlined,
  Telegram,
} from '@mui/icons-material';
import { formatDistanceToNow } from 'date-fns';
import { AppDispatch, RootState } from '../../../app/stores/stores';
import { ICommunityUser, IComment, ReactionType } from '../types/community.types';
import {
  fetchComments,
  createComment,
  updateComment,
  deleteComment,
  voteComment,
  removeCommentVote,
} from '../redux/community.thunk';

interface PostCommentsProps {
  postId: string;
}

const reactionIcons: Record<ReactionType, React.ReactElement> = {
  like: <ThumbUpAltOutlined fontSize="small" />,
  love: <FavoriteOutlined fontSize="small" />,
  fire: <LocalFireDepartmentOutlined fontSize="small" />,
  laugh: <SentimentSatisfiedAltOutlined fontSize="small" />,
  sad: <SentimentVeryDissatisfiedOutlined fontSize="small" />,
  wow: <Telegram fontSize="small" />,
};

const PostComments: React.FC<PostCommentsProps> = ({ postId }) => {
  const dispatch = useDispatch<AppDispatch>();
  const { user } = useSelector((state: RootState) => state.auth);
  const { comments } = useSelector((state: RootState) => state.community);

  const [newComment, setNewComment] = useState('');
  const [replyingTo, setReplyingTo] = useState<string | null>(null);
  const [replyContent, setReplyContent] = useState('');
  const [editingCommentId, setEditingCommentId] = useState<string | null>(null);
  const [editContent, setEditContent] = useState('');

  useEffect(() => {
    dispatch(fetchComments(postId));
  }, [dispatch, postId]);

  const handleCreateComment = async () => {
    if (!newComment.trim()) return;
    await dispatch(createComment({ postId, content: newComment, parentCommentId: undefined }));
    setNewComment('');
  };

  const handleReply = async (parentCommentId: string) => {
    if (!replyContent.trim()) return;
    await dispatch(createComment({ postId, content: replyContent, parentCommentId }));
    setReplyContent('');
    setReplyingTo(null);
  };

  const handleUpdate = async (commentId: string) => {
    if (!editContent.trim()) return;
    await dispatch(updateComment({ commentId, postId, data: { content: editContent } }));
    setEditingCommentId(null);
    setEditContent('');
  };

  const handleDelete = async (commentId: string) => {
    if (window.confirm('Are you sure you want to delete this comment?')) {
      await dispatch(deleteComment({ commentId, postId }));
    }
  };

  const handleVote = async (commentId: string, value: 1 | -1, currentVote?: { value: number }) => {
    if (currentVote && currentVote.value === value) {
      await dispatch(removeCommentVote({ commentId, postId }));
    } else {
      await dispatch(voteComment({ commentId, postId, value }));
    }
  };

  const formatTimeAgo = (date: Date | string) => {
    try {
      return formatDistanceToNow(new Date(date), { addSuffix: true });
    } catch {
      return 'recently';
    }
  };

  const CommentItem: React.FC<{ comment: IComment; isReply?: boolean }> = ({ comment, isReply = false }) => {
    const author = comment.author as ICommunityUser;
    const userVote = comment.votes.find((v) => v.user === user?.id);
    const userReaction = comment.reactions.find((r) => r.user === user?.id);
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [reactionAnchorEl, setReactionAnchorEl] = useState<null | HTMLElement>(null);

    return (
      <Box
        key={comment._id}
        sx={{
          ml: isReply ? 4 : 0,
          mb: 2,
          borderLeft: isReply ? '2px solid #e0e0e0' : 'none',
          pl: isReply ? 2 : 0,
        }}
      >
        <Box sx={{ display: 'flex', gap: 1 }}>
          {/* Vote Section */}
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: 40 }}>
            <IconButton
              size="small"
              onClick={() => handleVote(comment._id, 1, userVote)}
              sx={{ color: userVote?.value === 1 ? '#ff6b6b' : 'inherit', p: 0.5 }}
            >
              <ArrowUpward fontSize="small" />
            </IconButton>
            <Typography
              variant="caption"
              fontWeight="bold"
              sx={{
                color: userVote ? (userVote.value === 1 ? '#ff6b6b' : '#4a90e2') : 'inherit',
              }}
            >
              {comment.voteCount}
            </Typography>
            <IconButton
              size="small"
              onClick={() => handleVote(comment._id, -1, userVote)}
              sx={{ color: userVote?.value === -1 ? '#4a90e2' : 'inherit', p: 0.5 }}
            >
              <ArrowDownward fontSize="small" />
            </IconButton>
          </Box>

          {/* Comment Content */}
          <Box sx={{ flex: 1 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 0.5 }}>
              <Avatar src={author?.avatar} sx={{ width: 24, height: 24, mr: 1 }}>
                {author?.firstName?.[0]}
              </Avatar>
              <Typography variant="caption" fontWeight="bold" sx={{ mr: 1 }}>
                {author?.firstName} {author?.lastName}
              </Typography>
              <Typography variant="caption" color="text.secondary">
                {formatTimeAgo(comment.createdAt)}
                {comment.isEdited && ' (edited)'}
              </Typography>
              <IconButton
                size="small"
                onClick={(e) => setAnchorEl(e.currentTarget)}
                sx={{ ml: 'auto', p: 0 }}
              >
                <MoreVert fontSize="small" />
              </IconButton>
              <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={() => setAnchorEl(null)}>
                {user?.id === (typeof comment.author === 'string' ? comment.author : comment.author._id) && (
                  <>
                    <MenuItem
                      onClick={() => {
                        setEditingCommentId(comment._id);
                        setEditContent(comment.content);
                        setAnchorEl(null);
                      }}
                    >
                      Edit
                    </MenuItem>
                    <MenuItem
                      onClick={() => {
                        handleDelete(comment._id);
                        setAnchorEl(null);
                      }}
                    >
                      Delete
                    </MenuItem>
                  </>
                )}
                <MenuItem onClick={() => setAnchorEl(null)}>Report</MenuItem>
              </Menu>
            </Box>

            {editingCommentId === comment._id ? (
              <Box sx={{ mb: 1 }}>
                <TextField
                  fullWidth
                  multiline
                  minRows={2}
                  value={editContent}
                  onChange={(e) => setEditContent(e.target.value)}
                  size="small"
                  sx={{ mb: 1 }}
                />
                <Box sx={{ display: 'flex', gap: 1 }}>
                  <Button size="small" variant="contained" onClick={() => handleUpdate(comment._id)}>
                    Save
                  </Button>
                  <Button
                    size="small"
                    onClick={() => {
                      setEditingCommentId(null);
                      setEditContent('');
                    }}
                  >
                    Cancel
                  </Button>
                </Box>
              </Box>
            ) : (
              <Typography variant="body2" sx={{ mb: 1, whiteSpace: 'pre-wrap' }}>
                {comment.content}
              </Typography>
            )}

            {/* Actions */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Button
                size="small"
                startIcon={<Reply />}
                onClick={() => setReplyingTo(replyingTo === comment._id ? null : comment._id)}
                sx={{ textTransform: 'none', minWidth: 'auto', p: 0.5 }}
              >
                Reply
              </Button>

              {comment.reactionCount > 0 && (
                <Typography variant="caption" color="text.secondary">
                  {comment.reactionCount} {comment.reactionCount === 1 ? 'reaction' : 'reactions'}
                </Typography>
              )}

              {comment.replyCount > 0 && (
                <Typography variant="caption" color="text.secondary">
                  {comment.replyCount} {comment.replyCount === 1 ? 'reply' : 'replies'}
                </Typography>
              )}
            </Box>

            {/* Reply Input */}
            <Collapse in={replyingTo === comment._id}>
              <Box sx={{ mt: 1 }}>
                <TextField
                  fullWidth
                  multiline
                  minRows={2}
                  placeholder="Write a reply..."
                  value={replyContent}
                  onChange={(e) => setReplyContent(e.target.value)}
                  size="small"
                  sx={{ mb: 1 }}
                />
                <Box sx={{ display: 'flex', gap: 1 }}>
                  <Button
                    size="small"
                    variant="contained"
                    onClick={() => handleReply(comment._id)}
                    disabled={!replyContent.trim()}
                  >
                    Reply
                  </Button>
                  <Button size="small" onClick={() => setReplyingTo(null)}>
                    Cancel
                  </Button>
                </Box>
              </Box>
            </Collapse>

            {/* Render replies */}
            {comment.replies && comment.replies.length > 0 && (
              <Box sx={{ mt: 2 }}>
                {comment.replies.map((reply: IComment) => (
                  <CommentItem key={reply._id} comment={reply} isReply={true} />
                ))}
              </Box>
            )}
          </Box>
        </Box>
      </Box>
    );
  };

  const postComments = comments[postId] || [];

  return (
    <Box>
      {/* New Comment Input */}
      <Box sx={{ mb: 3 }}>
        <TextField
          fullWidth
          multiline
          minRows={3}
          placeholder="What are your thoughts?"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          variant="outlined"
          sx={{ mb: 1 }}
        />
        <Button
          variant="contained"
          onClick={handleCreateComment}
          disabled={!newComment.trim()}
        >
          Comment
        </Button>
      </Box>

      <Divider sx={{ mb: 2 }} />

      {/* Comments List */}
      {postComments.length === 0 ? (
        <Typography variant="body2" color="text.secondary" textAlign="center" sx={{ py: 4 }}>
          No comments yet. Be the first to comment!
        </Typography>
      ) : (
        <Box>
          {postComments.map((comment) => (
            <CommentItem key={comment._id} comment={comment} />
          ))}
        </Box>
      )}
    </Box>
  );
};

export default PostComments;
