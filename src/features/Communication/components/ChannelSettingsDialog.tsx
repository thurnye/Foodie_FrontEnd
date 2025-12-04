import React, { useState, useEffect } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Box,
  Alert,
  CircularProgress,
} from '@mui/material';
import { IChannel } from '../types/communication.types';
import { ChannelAPI } from '../services/communication.api.service';

interface ChannelSettingsDialogProps {
  open: boolean;
  onClose: () => void;
  channel: IChannel | null;
  onChannelUpdated?: () => void;
}

const ChannelSettingsDialog: React.FC<ChannelSettingsDialogProps> = ({
  open,
  onClose,
  channel,
  onChannelUpdated,
}) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (channel) {
      setName(channel.name);
      setDescription(channel.description || '');
    }
  }, [channel]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!channel) return;

    if (!name.trim()) {
      setError('Channel name is required');
      return;
    }

    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      await ChannelAPI.updateChannel(channel._id, {
        name: name.trim(),
        description: description.trim() || undefined,
      });

      setSuccess(true);
      onChannelUpdated?.();

      // Close dialog after short delay
      setTimeout(() => {
        onClose();
        setSuccess(false);
      }, 1500);
    } catch (err: any) {
      setError(err.response?.data?.error || 'Failed to update channel');
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    if (!loading) {
      onClose();
      // Reset form
      setTimeout(() => {
        setError(null);
        setSuccess(false);
      }, 300);
    }
  };

  if (!channel) return null;

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
      <form onSubmit={handleSubmit}>
        <DialogTitle>Channel Settings</DialogTitle>
        <DialogContent>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, pt: 1 }}>
            {error && (
              <Alert severity="error" onClose={() => setError(null)}>
                {error}
              </Alert>
            )}

            {success && (
              <Alert severity="success">
                Channel updated successfully!
              </Alert>
            )}

            <TextField
              label="Channel Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              fullWidth
              required
              disabled={loading}
              helperText="Channel name must be between 2 and 100 characters"
              inputProps={{ minLength: 2, maxLength: 100 }}
            />

            <TextField
              label="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              fullWidth
              multiline
              rows={3}
              disabled={loading}
              helperText="Optional: Describe the purpose of this channel (max 500 characters)"
              inputProps={{ maxLength: 500 }}
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} disabled={loading}>
            Cancel
          </Button>
          <Button
            type="submit"
            variant="contained"
            disabled={loading || !name.trim()}
          >
            {loading ? <CircularProgress size={24} /> : 'Save Changes'}
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default ChannelSettingsDialog;
