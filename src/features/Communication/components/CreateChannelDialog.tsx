import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  FormControlLabel,
  Switch,
  RadioGroup,
  Radio,
  FormControl,
  FormLabel,
  Box,
  Typography,
} from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../../../app/stores/stores';
import { toggleCreateChannel, createChannelThunk } from '../redux/communication.slice';
import { IChannel } from '../types/communication.types';

const CreateChannelDialog: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { showCreateChannel, selectedTeamId } = useSelector((state: RootState) => state.communication);

  const [formData, setFormData] = useState({
    name: '',
    description: '',
    type: 'text' as 'text' | 'announcement',
    isPrivate: false,
  });

  const handleClose = () => {
    dispatch(toggleCreateChannel());
    setFormData({
      name: '',
      description: '',
      type: 'text',
      isPrivate: false,
    });
  };

  const handleCreate = async () => {
    if (!formData.name.trim() || !selectedTeamId) {
      return;
    }

    try {
      await dispatch(
        createChannelThunk({
          teamId: selectedTeamId,
          name: formData.name.toLowerCase().replace(/\s+/g, '-'),
          description: formData.description,
          type: formData.type,
          isPrivate: formData.isPrivate,
        })
      ).unwrap();
      handleClose();
    } catch (error) {
      console.error('Failed to create channel:', error);
      // You can show a toast/notification here
    }
  };

  return (
    <Dialog open={showCreateChannel} onClose={handleClose} maxWidth="sm" fullWidth>
      <DialogTitle>Create Channel</DialogTitle>
      <DialogContent>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, pt: 2 }}>
          {/* Channel Name */}
          <TextField
            label="Channel Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="e.g., frontend-dev"
            helperText="Channel names are lowercase with hyphens"
            fullWidth
            required
          />

          {/* Description */}
          <TextField
            label="Description"
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            placeholder="What's this channel about?"
            multiline
            rows={3}
            fullWidth
          />

          {/* Channel Type */}
          <FormControl component="fieldset">
            <FormLabel component="legend">Channel Type</FormLabel>
            <RadioGroup
              value={formData.type}
              onChange={(e) => setFormData({ ...formData, type: e.target.value as 'text' | 'announcement' })}
            >
              <FormControlLabel
                value="text"
                control={<Radio />}
                label={
                  <Box>
                    <Typography variant="body2" fontWeight={500}>
                      Text Channel
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      Regular channel where everyone can post messages
                    </Typography>
                  </Box>
                }
              />
              <FormControlLabel
                value="announcement"
                control={<Radio />}
                label={
                  <Box>
                    <Typography variant="body2" fontWeight={500}>
                      Announcement Channel
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      Only admins can post, everyone can read
                    </Typography>
                  </Box>
                }
              />
            </RadioGroup>
          </FormControl>

          {/* Private Channel */}
          <FormControlLabel
            control={
              <Switch
                checked={formData.isPrivate}
                onChange={(e) => setFormData({ ...formData, isPrivate: e.target.checked })}
              />
            }
            label={
              <Box>
                <Typography variant="body2" fontWeight={500}>
                  Make Private
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  Only invited members can access this channel
                </Typography>
              </Box>
            }
          />
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleCreate} variant="contained" disabled={!formData.name.trim()}>
          Create Channel
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CreateChannelDialog;
