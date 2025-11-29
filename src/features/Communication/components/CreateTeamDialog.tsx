import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Box,
  Chip,
  Autocomplete,
  Avatar,
  Typography,
} from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../../../app/stores/stores';
import { toggleCreateTeam, createTeamThunk } from '../redux/communication.slice';
import { ITeam } from '../types/communication.types';
import { IUser } from '../../auth/types/auth.types';

const CreateTeamDialog: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { showCreateTeam } = useSelector((state: RootState) => state.communication);
  const currentUser = useSelector((state: RootState) => state.auth?.user);

  const [formData, setFormData] = useState({
    name: '',
    description: '',
    members: [] as string[],
  });

  // TODO: Implement user search/fetch from backend
  // For now, using empty array until user search API is integrated
  const [availableUsers, setAvailableUsers] = useState<IUser[]>([]);

  const handleClose = () => {
    dispatch(toggleCreateTeam());
    setFormData({
      name: '',
      description: '',
      members: [],
    });
  };

  const handleCreate = async () => {
    if (!formData.name.trim()) {
      return;
    }

    try {
      await dispatch(
        createTeamThunk({
          name: formData.name,
          description: formData.description,
          members: formData.members,
        })
      ).unwrap();
      handleClose();
    } catch (error) {
      console.error('Failed to create team:', error);
      // You can show a toast/notification here
    }
  };

  return (
    <Dialog open={showCreateTeam} onClose={handleClose} maxWidth="sm" fullWidth>
      <DialogTitle>Create New Team</DialogTitle>
      <DialogContent>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, pt: 2 }}>
          {/* Team Name */}
          <TextField
            label="Team Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="e.g., Marketing Team"
            fullWidth
            required
            autoFocus
          />

          {/* Team Description */}
          <TextField
            label="Description"
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            placeholder="What's this team about?"
            multiline
            rows={3}
            fullWidth
          />

          {/* Team Members */}
          <Box>
            <Typography variant="subtitle2" gutterBottom>
              Add Team Members
            </Typography>
            <Autocomplete
              multiple
              options={availableUsers.filter((u) => {
                const userId = u._id || u.id;
                const currentUserId = currentUser?._id || currentUser?.id;
                return userId !== currentUserId;
              })}
              getOptionLabel={(option) => option.name || `${option.firstName} ${option.lastName}`}
              value={availableUsers.filter((u) => {
                const userId = u._id || u.id;
                return formData.members.includes(userId);
              })}
              onChange={(e, newValue) =>
                setFormData({ ...formData, members: newValue.map((u) => u._id || u.id) })
              }
              renderInput={(params) => (
                <TextField {...params} placeholder="Select team members (search coming soon)" />
              )}
              renderOption={(props, option) => {
                const { key, ...otherProps } = props as any;
                const userId = option._id || option.id;
                const userName = option.name || `${option.firstName} ${option.lastName}`;
                return (
                  <Box component="li" key={userId} sx={{ display: 'flex', alignItems: 'center', gap: 1 }} {...otherProps}>
                    <Avatar src={option.avatar} alt={userName} sx={{ width: 32, height: 32 }} />
                    <Box>
                      <Typography variant="body2">{userName}</Typography>
                      <Typography variant="caption" color="text.secondary">
                        {option.email}
                      </Typography>
                    </Box>
                  </Box>
                );
              }}
              renderTags={(value, getTagProps) =>
                value.map((option, index) => {
                  const { key, ...tagProps } = getTagProps({ index });
                  const userId = option._id || option.id;
                  const userName = option.name || `${option.firstName} ${option.lastName}`;
                  return (
                    <Chip
                      key={userId}
                      avatar={<Avatar src={option.avatar} />}
                      label={userName}
                      size="small"
                      {...tagProps}
                    />
                  );
                })
              }
            />
            <Typography variant="caption" color="text.secondary" sx={{ mt: 1, display: 'block' }}>
              You will be added as the team owner automatically
            </Typography>
          </Box>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleCreate} variant="contained" disabled={!formData.name.trim()}>
          Create Team
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CreateTeamDialog;
