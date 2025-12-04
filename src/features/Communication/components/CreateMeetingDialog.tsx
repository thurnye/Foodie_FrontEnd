import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Box,
  FormControlLabel,
  Switch,
  MenuItem,
  Chip,
  Autocomplete,
} from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../../../app/stores/stores';
import { toggleCreateMeeting, addMeeting } from '../redux/communication.slice';
import { IMeeting, IUser } from '../types/communication.types';

const CreateMeetingDialog: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { showCreateMeeting, teams, channels } = useSelector((state: RootState) => state.communication);
  const currentUser = useSelector((state: RootState) => state.auth?.user);

  // Get all users from teams (you can also get from a users list if available)
  const allUsers: IUser[] = React.useMemo(() => {
    const userMap = new Map<string, IUser>();
    teams.forEach(team => {
      // In real implementation, you'd fetch team members here
      // For now, just return empty array since we don't have users list
    });
    return Array.from(userMap.values());
  }, [teams]);

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    participants: [] as string[],
    teamId: '',
    channelId: '',
    startTime: '',
    endTime: '',
    duration: 60,
    isRecurring: false,
    recurrencePattern: 'weekly' as 'daily' | 'weekly' | 'monthly',
  });

  const handleClose = () => {
    dispatch(toggleCreateMeeting());
    setFormData({
      title: '',
      description: '',
      participants: [],
      teamId: '',
      channelId: '',
      startTime: '',
      endTime: '',
      duration: 60,
      isRecurring: false,
      recurrencePattern: 'weekly',
    });
  };

  const handleCreate = () => {
    if (!formData.title.trim() || !formData.startTime || !formData.endTime || !currentUser) {
      return;
    }

    const participants = allUsers.filter((u) => {
      const userId = u._id || u.id;
      return formData.participants.includes(userId);
    });

    const newMeeting: IMeeting = {
      _id: `meeting-${Date.now()}`,
      title: formData.title,
      description: formData.description,
      organizer: currentUser,
      participants: [currentUser, ...participants],
      teamId: formData.teamId || undefined,
      channelId: formData.channelId || undefined,
      startTime: new Date(formData.startTime),
      endTime: new Date(formData.endTime),
      duration: formData.duration,
      isRecurring: formData.isRecurring,
      recurrencePattern: formData.isRecurring ? formData.recurrencePattern : undefined,
      status: 'scheduled',
      link: `https://meet.foodie.com/${Date.now()}`,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    dispatch(addMeeting(newMeeting));
    handleClose();
  };

  return (
    <Dialog open={showCreateMeeting} onClose={handleClose} maxWidth="sm" fullWidth>
      <DialogTitle>Schedule Meeting</DialogTitle>
      <DialogContent>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, pt: 2 }}>
          {/* Title */}
          <TextField
            label="Meeting Title"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            placeholder="e.g., Sprint Planning"
            fullWidth
            required
          />

          {/* Description */}
          <TextField
            label="Description"
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            placeholder="What's this meeting about?"
            multiline
            rows={3}
            fullWidth
          />

          {/* Participants */}
          <Autocomplete
            multiple
            options={allUsers.filter((u) => {
              const userId = u._id || u.id;
              const currentUserId = currentUser?._id || currentUser?.id;
              return userId !== currentUserId;
            })}
            getOptionLabel={(option) => option.name || `${option.firstName} ${option.lastName}`}
            value={allUsers.filter((u) => {
              const userId = u._id || u.id;
              return formData.participants.includes(userId);
            })}
            onChange={(e, newValue) =>
              setFormData({
                ...formData,
                participants: newValue.map((u) => u._id || u.id).filter((id): id is string => Boolean(id))
              })
            }
            renderInput={(params) => <TextField {...params} label="Participants" placeholder="Select participants" />}
            renderTags={(value, getTagProps) =>
              value.map((option, index) => {
                const { key, ...tagProps } = getTagProps({ index });
                const userId = option._id || option.id;
                const userName = option.name || `${option.firstName} ${option.lastName}`;
                return <Chip key={userId} label={userName} size="small" {...tagProps} />;
              })
            }
          />

          {/* Team & Channel */}
          <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2 }}>
            <TextField
              select
              label="Team (Optional)"
              value={formData.teamId}
              onChange={(e) => setFormData({ ...formData, teamId: e.target.value, channelId: '' })}
              fullWidth
            >
              <MenuItem value="">None</MenuItem>
              {teams.map((team) => (
                <MenuItem key={team._id} value={team._id}>
                  {team.name}
                </MenuItem>
              ))}
            </TextField>

            <TextField
              select
              label="Channel (Optional)"
              value={formData.channelId}
              onChange={(e) => setFormData({ ...formData, channelId: e.target.value })}
              fullWidth
              disabled={!formData.teamId}
            >
              <MenuItem value="">None</MenuItem>
              {channels
                .filter((c) => c.teamId === formData.teamId)
                .map((channel) => (
                  <MenuItem key={channel._id} value={channel._id}>
                    {channel.name}
                  </MenuItem>
                ))}
            </TextField>
          </Box>

          {/* Date & Time */}
          <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2 }}>
            <TextField
              label="Start Time"
              type="datetime-local"
              value={formData.startTime}
              onChange={(e) => setFormData({ ...formData, startTime: e.target.value })}
              fullWidth
              required
              InputLabelProps={{ shrink: true }}
            />

            <TextField
              label="End Time"
              type="datetime-local"
              value={formData.endTime}
              onChange={(e) => setFormData({ ...formData, endTime: e.target.value })}
              fullWidth
              required
              InputLabelProps={{ shrink: true }}
            />
          </Box>

          {/* Duration */}
          <TextField
            label="Duration (minutes)"
            type="number"
            value={formData.duration}
            onChange={(e) => setFormData({ ...formData, duration: parseInt(e.target.value) })}
            fullWidth
          />

          {/* Recurring */}
          <Box>
            <FormControlLabel
              control={
                <Switch
                  checked={formData.isRecurring}
                  onChange={(e) => setFormData({ ...formData, isRecurring: e.target.checked })}
                />
              }
              label="Recurring Meeting"
            />

            {formData.isRecurring && (
              <TextField
                select
                label="Recurrence Pattern"
                value={formData.recurrencePattern}
                onChange={(e) =>
                  setFormData({ ...formData, recurrencePattern: e.target.value as 'daily' | 'weekly' | 'monthly' })
                }
                fullWidth
                sx={{ mt: 2 }}
              >
                <MenuItem value="daily">Daily</MenuItem>
                <MenuItem value="weekly">Weekly</MenuItem>
                <MenuItem value="monthly">Monthly</MenuItem>
              </TextField>
            )}
          </Box>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button
          onClick={handleCreate}
          variant="contained"
          disabled={!formData.title.trim() || !formData.startTime || !formData.endTime}
        >
          Schedule Meeting
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CreateMeetingDialog;
