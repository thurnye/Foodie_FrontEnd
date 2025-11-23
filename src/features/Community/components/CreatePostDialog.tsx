import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Box,
  IconButton,
  Chip,
  Typography,
  InputAdornment,
} from '@mui/material';
import { Close, Image, VideoLibrary, Cancel } from '@mui/icons-material';
import { AppDispatch } from '../../../app/stores/stores';
import { createPost, updatePost } from '../redux/community.thunk';
import { IPostMedia, IPost } from '../types/community.types';

interface CreatePostDialogProps {
  open: boolean;
  onClose: () => void;
  groupId: string;
  editPost?: IPost;
}

const CreatePostDialog: React.FC<CreatePostDialogProps> = ({ open, onClose, groupId, editPost }) => {
  const dispatch = useDispatch<AppDispatch>();

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [media, setMedia] = useState<IPostMedia[]>([]);
  const [tags, setTags] = useState<string[]>([]);
  const [tagInput, setTagInput] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [videoUrl, setVideoUrl] = useState('');
  const [showImageInput, setShowImageInput] = useState(false);
  const [showVideoInput, setShowVideoInput] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Populate fields when editing
  useEffect(() => {
    if (editPost) {
      setTitle(editPost.title);
      setContent(editPost.content);
      setMedia(editPost.media || []);
      setTags(editPost.tags || []);
    }
  }, [editPost]);

  const handleAddImage = () => {
    if (imageUrl.trim()) {
      setMedia([...media, { type: 'image', url: imageUrl.trim() }]);
      setImageUrl('');
      setShowImageInput(false);
    }
  };

  const handleAddVideo = () => {
    if (videoUrl.trim()) {
      setMedia([...media, { type: 'video', url: videoUrl.trim() }]);
      setVideoUrl('');
      setShowVideoInput(false);
    }
  };

  const handleRemoveMedia = (index: number) => {
    setMedia(media.filter((_, i) => i !== index));
  };

  const handleAddTag = () => {
    if (tagInput.trim() && !tags.includes(tagInput.trim())) {
      setTags([...tags, tagInput.trim()]);
      setTagInput('');
    }
  };

  const handleRemoveTag = (tagToRemove: string) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  const handleSubmit = async () => {
    if (!title.trim() || !content.trim()) return;

    setIsSubmitting(true);
    try {
      if (editPost) {
        // Update existing post
        await dispatch(
          updatePost({
            postId: editPost._id,
            data: {
              title: title.trim(),
              content: content.trim(),
              media: media.length > 0 ? media : undefined,
              tags: tags.length > 0 ? tags : undefined,
            },
          })
        );
      } else {
        // Create new post
        await dispatch(
          createPost({
            groupId,
            title: title.trim(),
            content: content.trim(),
            media: media.length > 0 ? media : undefined,
            tags: tags.length > 0 ? tags : undefined,
          })
        );
      }
      handleClose();
    } catch (error) {
      console.error('Error saving post:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setTitle('');
    setContent('');
    setMedia([]);
    setTags([]);
    setTagInput('');
    setImageUrl('');
    setVideoUrl('');
    setShowImageInput(false);
    setShowVideoInput(false);
    onClose();
  };

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
      <DialogTitle sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Typography variant="h6">{editPost ? 'Edit Post' : 'Create Post'}</Typography>
        <IconButton size="small" onClick={handleClose}>
          <Close />
        </IconButton>
      </DialogTitle>

      <DialogContent dividers>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {/* Title */}
          <TextField
            fullWidth
            label="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Give your post a title..."
            variant="outlined"
            required
            inputProps={{ maxLength: 300 }}
            helperText={`${title.length}/300`}
          />

          {/* Content */}
          <TextField
            fullWidth
            multiline
            minRows={6}
            label="Content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Share your thoughts, recipes, or food experiences..."
            variant="outlined"
            required
            inputProps={{ maxLength: 10000 }}
            helperText={`${content.length}/10000`}
          />

          {/* Media Section */}
          <Box>
            <Box sx={{ display: 'flex', gap: 1, mb: 1 }}>
              <Button
                startIcon={<Image />}
                onClick={() => setShowImageInput(!showImageInput)}
                variant={showImageInput ? 'contained' : 'outlined'}
                size="small"
              >
                Add Image
              </Button>
              <Button
                startIcon={<VideoLibrary />}
                onClick={() => setShowVideoInput(!showVideoInput)}
                variant={showVideoInput ? 'contained' : 'outlined'}
                size="small"
              >
                Add Video
              </Button>
            </Box>

            {/* Image URL Input */}
            {showImageInput && (
              <Box sx={{ mb: 2 }}>
                <TextField
                  fullWidth
                  size="small"
                  label="Image URL"
                  value={imageUrl}
                  onChange={(e) => setImageUrl(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleAddImage()}
                  placeholder="https://example.com/image.jpg"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <Button size="small" onClick={handleAddImage}>
                          Add
                        </Button>
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>
            )}

            {/* Video URL Input */}
            {showVideoInput && (
              <Box sx={{ mb: 2 }}>
                <TextField
                  fullWidth
                  size="small"
                  label="Video URL"
                  value={videoUrl}
                  onChange={(e) => setVideoUrl(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleAddVideo()}
                  placeholder="https://example.com/video.mp4"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <Button size="small" onClick={handleAddVideo}>
                          Add
                        </Button>
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>
            )}

            {/* Media Preview */}
            {media.length > 0 && (
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                {media.map((item, index) => (
                  <Box
                    key={index}
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1,
                      p: 1,
                      bgcolor: '#f5f5f5',
                      borderRadius: 1,
                    }}
                  >
                    {item.type === 'image' ? <Image /> : <VideoLibrary />}
                    <Typography variant="body2" sx={{ flex: 1, overflow: 'hidden', textOverflow: 'ellipsis' }}>
                      {item.url}
                    </Typography>
                    <IconButton size="small" onClick={() => handleRemoveMedia(index)}>
                      <Cancel fontSize="small" />
                    </IconButton>
                  </Box>
                ))}
              </Box>
            )}
          </Box>

          {/* Tags Section */}
          <Box>
            <TextField
              fullWidth
              size="small"
              label="Tags"
              value={tagInput}
              onChange={(e) => setTagInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleAddTag()}
              placeholder="Add tags (press Enter)"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <Button size="small" onClick={handleAddTag}>
                      Add
                    </Button>
                  </InputAdornment>
                ),
              }}
            />
            {tags.length > 0 && (
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mt: 1 }}>
                {tags.map((tag, index) => (
                  <Chip
                    key={index}
                    label={tag}
                    size="small"
                    onDelete={() => handleRemoveTag(tag)}
                    variant="outlined"
                  />
                ))}
              </Box>
            )}
          </Box>
        </Box>
      </DialogContent>

      <DialogActions sx={{ p: 2 }}>
        <Button onClick={handleClose} disabled={isSubmitting}>
          Cancel
        </Button>
        <Button
          variant="contained"
          onClick={handleSubmit}
          disabled={!title.trim() || !content.trim() || isSubmitting}
        >
          {isSubmitting ? (editPost ? 'Updating...' : 'Posting...') : (editPost ? 'Update' : 'Post')}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CreatePostDialog;
