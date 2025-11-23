import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Avatar,
  IconButton,
  Menu,
  MenuItem,
  Chip,
  Button,
  Divider,
  Collapse,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from '@mui/material';
import {
  ArrowUpward,
  ArrowDownward,
  ChatBubbleOutline,
  Share,
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
import { IPost, ICommunityUser, ReactionType } from '../types/community.types';
import {
  votePost,
  removePostVote,
  reactToPost,
  removePostReaction,
  deletePost,
} from '../redux/community.thunk';
import PostComments from './PostComments';
import VideoPlayer from '../../../app/components/VideoPlayer';
import CreatePostDialog from './CreatePostDialog';

interface PostCardProps {
  post: IPost;
}

const reactionIcons: Record<ReactionType, React.ReactElement> = {
  like: <ThumbUpAltOutlined fontSize='small' />,
  love: <FavoriteOutlined fontSize='small' />,
  fire: <LocalFireDepartmentOutlined fontSize='small' />,
  laugh: <SentimentSatisfiedAltOutlined fontSize='small' />,
  sad: <SentimentVeryDissatisfiedOutlined fontSize='small' />,
  wow: <Telegram fontSize='small' />,
};

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  const dispatch = useDispatch<AppDispatch>();
  const { user } = useSelector((state: RootState) => state.auth);

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [reactionAnchorEl, setReactionAnchorEl] = useState<null | HTMLElement>(
    null
  );
  const [showComments, setShowComments] = useState(false);
  const [shareAnchorEl, setShareAnchorEl] = useState<null | HTMLElement>(null);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [editDialogOpen, setEditDialogOpen] = useState(false);

  const author = post.author as ICommunityUser;
  const userVote = post.votes?.find((v) => v.user === user?.id);
  const userReaction = post.reactions?.find((r) => r.user === user?.id);

  const handleVote = async (value: 1 | -1) => {
    if (userVote) {
      if (userVote.value === value) {
        // Remove vote if clicking same button
        await dispatch(removePostVote(post._id));
      } else {
        // Change vote
        await dispatch(votePost({ postId: post._id, value }));
      }
    } else {
      // Add new vote
      await dispatch(votePost({ postId: post._id, value }));
    }
  };

  const handleReaction = async (type: ReactionType) => {
    if (userReaction) {
      if (userReaction.type === type) {
        // Remove reaction if same type
        await dispatch(removePostReaction(post._id));
      } else {
        // Change reaction
        await dispatch(reactToPost({ postId: post._id, reactionType: type }));
      }
    } else {
      // Add new reaction
      await dispatch(reactToPost({ postId: post._id, reactionType: type }));
    }
    setReactionAnchorEl(null);
  };

  const handleShare = (platform?: string) => {
    const url = `${window.location.origin}/communities/posts/${post._id}`;

    if (platform === 'copy') {
      navigator.clipboard.writeText(url);
    } else if (platform === 'twitter') {
      window.open(
        `https://twitter.com/intent/tweet?url=${encodeURIComponent(
          url
        )}&text=${encodeURIComponent(post.title)}`,
        '_blank'
      );
    } else if (platform === 'facebook') {
      window.open(
        `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
          url
        )}`,
        '_blank'
      );
    } else if (platform === 'whatsapp') {
      window.open(
        `https://wa.me/?text=${encodeURIComponent(post.title + ' ' + url)}`,
        '_blank'
      );
    }

    setShareAnchorEl(null);
  };

  const handleDeleteClick = () => {
    setDeleteDialogOpen(true);
    setAnchorEl(null);
  };

  const handleDeleteConfirm = async () => {
    await dispatch(deletePost(post._id));
    setDeleteDialogOpen(false);
  };

  const handleDeleteCancel = () => {
    setDeleteDialogOpen(false);
  };

  const handleEditClick = () => {
    setEditDialogOpen(true);
    setAnchorEl(null);
  };

  const formatTimeAgo = (date: Date | string) => {
    try {
      return formatDistanceToNow(new Date(date), { addSuffix: true });
    } catch {
      return 'recently';
    }
  };

  return (
    <Card sx={{ mb: 2, borderRadius: 2 }}>
      <CardContent>
        {/* Header */}
        <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 2 }}>
          <Avatar src={author?.avatar} sx={{ mr: 2 }}>
            {author?.firstName?.[0]}
          </Avatar>
          <Box sx={{ flex: 1 }}>
            <Typography variant='subtitle2' fontWeight='bold'>
              {author?.firstName} {author?.lastName}
            </Typography>
            <Typography variant='caption' color='text.secondary'>
              {formatTimeAgo(post.createdAt)}
              {post.isPinned && (
                <Chip
                  label='Pinned'
                  size='small'
                  color='primary'
                  sx={{ ml: 1, height: 18 }}
                />
              )}
            </Typography>
          </Box>
          <IconButton
            size='small'
            onClick={(e) => setAnchorEl(e.currentTarget)}
          >
            <MoreVert />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={() => setAnchorEl(null)}
          >
            {user?.id ===
              (typeof post.author === 'string'
                ? post.author
                : post.author._id) && (
              <MenuItem onClick={handleDeleteClick}>Delete</MenuItem>
            )}
            {user?.id ===
              (typeof post.author === 'string'
                ? post.author
                : post.author._id) && (
              <MenuItem onClick={handleEditClick}>Edit</MenuItem>
            )}
            <MenuItem onClick={() => setAnchorEl(null)}>Report</MenuItem>
          </Menu>
        </Box>

        {/* Title */}
        <Typography variant='h6' fontWeight='bold' gutterBottom>
          {post.title}
        </Typography>

        {/* Content */}
        <Typography
          variant='body2'
          color='text.secondary'
          sx={{ mb: 2, whiteSpace: 'pre-wrap' }}
        >
          {post.content}
        </Typography>

        {/* Media */}
        {post.media && post.media.length > 0 && (
          <Box sx={{ mb: 2 }}>
            {post.media.map((media, index) => (
              <Box
                key={index}
                sx={{
                  position: 'relative',
                  borderRadius: 2,
                  overflow: 'hidden',
                  mb: 1,
                }}
              >
                {media.type === 'image' ? (
                  <img
                    src={media.url}
                    alt={media.alt || post.title}
                    style={{
                      width: '100%',
                      maxHeight: 500,
                      objectFit: 'cover',
                    }}
                  />
                ) : (
                  <>
                    <VideoPlayer
                      link={media.url}
                      sx={{ display: 'block', m: 0, maxWidth: '100' }}
                      width={'inherit'}
                    />
                  </>
                )}
              </Box>
            ))}
          </Box>
        )}

        {/* Tags */}
        {post.tags && post.tags.length > 0 && (
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mb: 2 }}>
            {post.tags.map((tag, index) => (
              <Chip key={index} label={tag} size='small' variant='outlined' />
            ))}
          </Box>
        )}

        <Divider />

        {/* Vote, Comment, Share Bar */}
        <Box sx={{ display: 'flex', alignItems: 'center', mt: 2, gap: 1 }}>
          {/* Voting */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              bgcolor: '#f5f5f5',
              borderRadius: 10,
              px: 1,
            }}
          >
            <IconButton
              size='small'
              onClick={() => handleVote(1)}
              sx={{
                color: userVote?.value === 1 ? '#ff6b6b' : 'inherit',
              }}
            >
              <ArrowUpward fontSize='small' />
            </IconButton>
            <Typography
              variant='body2'
              fontWeight='bold'
              sx={{
                minWidth: 30,
                textAlign: 'center',
                color: userVote
                  ? userVote.value === 1
                    ? '#ff6b6b'
                    : '#4a90e2'
                  : 'inherit',
              }}
            >
              {post.voteCount}
            </Typography>
            <IconButton
              size='small'
              onClick={() => handleVote(-1)}
              sx={{
                color: userVote?.value === -1 ? '#4a90e2' : 'inherit',
              }}
            >
              <ArrowDownward fontSize='small' />
            </IconButton>
          </Box>

          {/* Comments */}
          <Button
            size='small'
            startIcon={<ChatBubbleOutline />}
            onClick={() => setShowComments(!showComments)}
            sx={{ color: 'text.secondary', textTransform: 'none' }}
          >
            {post.commentCount}{' '}
          </Button>

          {/* Reactions */}
          <Button
            size='small'
            startIcon={
              userReaction ? (
                reactionIcons[userReaction.type]
              ) : (
                <ThumbUpAltOutlined />
              )
            }
            onClick={(e) => setReactionAnchorEl(e.currentTarget)}
            sx={{
              color: userReaction ? '#ff6b6b' : 'text.secondary',
              textTransform: 'none',
            }}
          >
            {post.reactionCount}
          </Button>
          <Menu
            anchorEl={reactionAnchorEl}
            open={Boolean(reactionAnchorEl)}
            onClose={() => setReactionAnchorEl(null)}
          >
            {(Object.keys(reactionIcons) as ReactionType[]).map((type) => (
              <MenuItem key={type} onClick={() => handleReaction(type)}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  {reactionIcons[type]}
                  <Typography
                    variant='caption'
                    sx={{ textTransform: 'capitalize' }}
                  >
                    {type}
                  </Typography>
                </Box>
              </MenuItem>
            ))}
          </Menu>

          {/* Share */}
          <Button
            size='small'
            startIcon={<Share />}
            onClick={(e) => setShareAnchorEl(e.currentTarget)}
            sx={{ color: 'text.secondary', textTransform: 'none' }}
          >
            Share
          </Button>
          <Menu
            anchorEl={shareAnchorEl}
            open={Boolean(shareAnchorEl)}
            onClose={() => setShareAnchorEl(null)}
          >
            <MenuItem onClick={() => handleShare('copy')}>Copy Link</MenuItem>
            <MenuItem onClick={() => handleShare('twitter')}>
              Share on Twitter
            </MenuItem>
            <MenuItem onClick={() => handleShare('facebook')}>
              Share on Facebook
            </MenuItem>
            <MenuItem onClick={() => handleShare('whatsapp')}>
              Share on WhatsApp
            </MenuItem>
          </Menu>
        </Box>

        {/* Comments Section */}
        <Collapse in={showComments}>
          <Divider sx={{ my: 2 }} />
          <PostComments postId={post._id} />
        </Collapse>
      </CardContent>

      {/* Delete Confirmation Dialog */}
      <Dialog
        open={deleteDialogOpen}
        onClose={handleDeleteCancel}
        aria-labelledby='delete-dialog-title'
        aria-describedby='delete-dialog-description'
      >
        <DialogTitle id='delete-dialog-title'>Delete Post</DialogTitle>
        <DialogContent>
          <DialogContentText id='delete-dialog-description'>
            Are you sure you want to delete this post? This action cannot be undone.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDeleteCancel} color='primary'>
            Cancel
          </Button>
          <Button onClick={handleDeleteConfirm} color='error' variant='contained' autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>

      {/* Edit Post Dialog */}
      <CreatePostDialog
        open={editDialogOpen}
        onClose={() => setEditDialogOpen(false)}
        groupId={typeof post.group === 'string' ? post.group : post.group._id}
        editPost={post}
      />
    </Card>
  );
};

export default PostCard;
