import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  FormControlLabel,
  Switch,
  Box,
  Typography,
  Chip,
  IconButton,
  Alert,
  CircularProgress,
} from '@mui/material';
import { Close, Add, Image as ImageIcon } from '@mui/icons-material';
import { AppDispatch } from '../../../app/stores/stores';
import { createGroup, updateGroup } from '../redux/community.thunk';
import { ICreateGroup, IGroup } from '../types/community.types';

interface CreateGroupDialogProps {
  open: boolean;
  onClose: () => void;
  editGroup?: IGroup;
}

const CreateGroupDialog: React.FC<CreateGroupDialogProps> = ({ open, onClose, editGroup }) => {
  const dispatch = useDispatch<AppDispatch>();

  const [formData, setFormData] = useState<ICreateGroup>({
    name: '',
    description: '',
    isPrivate: false,
    tags: [],
    rules: [],
    coverImage: '',
    icon: '',
  });

  const [tagInput, setTagInput] = useState('');
  const [ruleInput, setRuleInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Populate fields when editing
  useEffect(() => {
    if (editGroup) {
      setFormData({
        name: editGroup.name,
        description: editGroup.description,
        isPrivate: editGroup.isPrivate,
        tags: editGroup.tags || [],
        rules: editGroup.rules || [],
        coverImage: editGroup.coverImage || '',
        icon: editGroup.icon || '',
      });
    }
  }, [editGroup]);

  const handleInputChange = (field: keyof ICreateGroup) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [field]: e.target.value });
  };

  const handleSwitchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, isPrivate: e.target.checked });
  };

  const handleAddTag = () => {
    if (tagInput.trim() && !formData.tags?.includes(tagInput.trim())) {
      setFormData({
        ...formData,
        tags: [...(formData.tags || []), tagInput.trim()],
      });
      setTagInput('');
    }
  };

  const handleRemoveTag = (tagToRemove: string) => {
    setFormData({
      ...formData,
      tags: formData.tags?.filter((tag) => tag !== tagToRemove) || [],
    });
  };

  const handleAddRule = () => {
    if (ruleInput.trim()) {
      setFormData({
        ...formData,
        rules: [...(formData.rules || []), ruleInput.trim()],
      });
      setRuleInput('');
    }
  };

  const handleRemoveRule = (index: number) => {
    setFormData({
      ...formData,
      rules: formData.rules?.filter((_, i) => i !== index) || [],
    });
  };

  const handleSubmit = async () => {
    // Validation
    if (!formData.name.trim()) {
      setError('Group name is required');
      return;
    }
    if (!formData.description.trim()) {
      setError('Group description is required');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      if (editGroup) {
        // Update existing group
        await dispatch(updateGroup({
          groupId: editGroup._id,
          data: formData
        })).unwrap();
      } else {
        // Create new group
        await dispatch(createGroup(formData)).unwrap();
      }
      handleClose();
    } catch (err: any) {
      setError(err.message || (editGroup ? 'Failed to update group' : 'Failed to create group'));
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    setFormData({
      name: '',
      description: '',
      isPrivate: false,
      tags: [],
      rules: [],
      coverImage: '',
      icon: '',
    });
    setTagInput('');
    setRuleInput('');
    setError(null);
    onClose();
  };

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
      <DialogTitle>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h6" fontWeight="bold">
            {editGroup ? 'Edit Group Settings' : 'Create New Group'}
          </Typography>
          <IconButton onClick={handleClose} size="small">
            <Close />
          </IconButton>
        </Box>
      </DialogTitle>

      <DialogContent dividers>
        {error && (
          <Alert severity="error" sx={{ mb: 2 }} onClose={() => setError(null)}>
            {error}
          </Alert>
        )}

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          {/* Group Name */}
          <TextField
            label="Group Name"
            fullWidth
            required
            value={formData.name}
            onChange={handleInputChange('name')}
            placeholder="Enter group name"
          />

          {/* Description */}
          <TextField
            label="Description"
            fullWidth
            required
            multiline
            rows={3}
            value={formData.description}
            onChange={handleInputChange('description')}
            placeholder="Describe what your group is about"
          />

          {/* Cover Image URL */}
          <TextField
            label="Cover Image URL (optional)"
            fullWidth
            value={formData.coverImage}
            onChange={handleInputChange('coverImage')}
            placeholder="https://example.com/cover.jpg"
            InputProps={{
              startAdornment: <ImageIcon sx={{ mr: 1, color: 'text.secondary' }} />,
            }}
          />

          {/* Icon URL */}
          <TextField
            label="Group Icon URL (optional)"
            fullWidth
            value={formData.icon}
            onChange={handleInputChange('icon')}
            placeholder="https://example.com/icon.jpg"
            InputProps={{
              startAdornment: <ImageIcon sx={{ mr: 1, color: 'text.secondary' }} />,
            }}
          />

          {/* Privacy Setting */}
          <Box>
            <FormControlLabel
              control={
                <Switch
                  checked={formData.isPrivate}
                  onChange={handleSwitchChange}
                  color="primary"
                />
              }
              label={
                <Box>
                  <Typography variant="body1" fontWeight="medium">
                    Private Group
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    If active only members can see posts and content and approval is required to join
                  </Typography>
                
                </Box>
              }
            />
          </Box>

          {/* Tags */}
          <Box>
            <Typography variant="subtitle2" gutterBottom fontWeight="medium">
              Tags
            </Typography>
            <Box sx={{ display: 'flex', gap: 1, mb: 1 }}>
              <TextField
                size="small"
                fullWidth
                value={tagInput}
                onChange={(e) => setTagInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleAddTag()}
                placeholder="Add tags (e.g., cooking, baking)"
              />
              <Button
                variant="outlined"
                onClick={handleAddTag}
                startIcon={<Add />}
                disabled={!tagInput.trim()}
              >
                Add
              </Button>
            </Box>
            {formData.tags && formData.tags.length > 0 && (
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {formData.tags.map((tag, index) => (
                  <Chip
                    key={index}
                    label={tag}
                    onDelete={() => handleRemoveTag(tag)}
                    color="primary"
                    variant="outlined"
                  />
                ))}
              </Box>
            )}
          </Box>

          {/* Rules */}
          <Box>
            <Typography variant="subtitle2" gutterBottom fontWeight="medium">
              Group Rules (optional)
            </Typography>
            <Box sx={{ display: 'flex', gap: 1, mb: 1 }}>
              <TextField
                size="small"
                fullWidth
                value={ruleInput}
                onChange={(e) => setRuleInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleAddRule()}
                placeholder="Add a rule"
              />
              <Button
                variant="outlined"
                onClick={handleAddRule}
                startIcon={<Add />}
                disabled={!ruleInput.trim()}
              >
                Add
              </Button>
            </Box>
            {formData.rules && formData.rules.length > 0 && (
              <Box sx={{ pl: 2, height: 500, overflow: 'auto' }}>
                {formData.rules.map((rule, index) => (
                  <Box
                    key={index}
                    sx={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: 1,
                      mb: 1,
                    }}
                  >
                    <Typography variant="body2" sx={{ flex: 1 }}>
                      {index + 1}. {rule}
                    </Typography>
                    <IconButton
                      size="small"
                      onClick={() => handleRemoveRule(index)}
                      color="error"
                    >
                      <Close fontSize="small" />
                    </IconButton>
                  </Box>
                ))}
              </Box>
            )}
          </Box>
        </Box>
      </DialogContent>

      <DialogActions sx={{ px: 3, py: 2 }}>
        <Button onClick={handleClose} disabled={loading}>
          Cancel
        </Button>
        <Button
          variant="contained"
          onClick={handleSubmit}
          disabled={loading || !formData.name.trim() || !formData.description.trim()}
          sx={{
            backgroundColor: '#ff6b6b',
            '&:hover': { backgroundColor: '#ff5252' },
          }}
        >
          {loading ? <CircularProgress size={24} /> : (editGroup ? 'Update Group' : 'Create Group')}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CreateGroupDialog;
