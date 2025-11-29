import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Box,
  Typography,
  Chip,
  Avatar,
  AvatarGroup,
  Divider,
  IconButton,
  Tooltip,
} from '@mui/material';
import {
  Close as CloseIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
  Videocam as VideocamIcon,
  ContentCopy as ContentCopyIcon,
} from '@mui/icons-material';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../app/stores/stores';
import { setMeetingDetails, deleteMeeting, startCall } from '../redux/communication.slice';
import { format } from 'date-fns';
import { ICall } from '../types/communication.types';
import { currentUser } from '../data/mockData';

const MeetingDetailsDialog: React.FC = () => {
  const dispatch = useDispatch();
  const { showMeetingDetails } = useSelector((state: RootState) => state.communication);

  const handleClose = () => {
    dispatch(setMeetingDetails(null));
  };

  const handleDelete = () => {
    if (showMeetingDetails) {
      dispatch(deleteMeeting(showMeetingDetails._id));
      handleClose();
    }
  };

  const handleJoinMeeting = () => {
    if (!showMeetingDetails) return;

    const call: ICall = {
      _id: `call-${Date.now()}`,
      type: 'video',
      participants: [
        {
          user: currentUser,
          isMuted: false,
          isCameraOff: false,
          isScreenSharing: false,
          joinedAt: new Date(),
        },
      ],
      status: 'connecting',
      startTime: new Date(),
      meetingId: showMeetingDetails._id,
    };

    dispatch(startCall(call));
    handleClose();
  };

  const handleCopyLink = () => {
    if (showMeetingDetails?.link) {
      navigator.clipboard.writeText(showMeetingDetails.link);
    }
  };

  if (!showMeetingDetails) return null;

  return (
    <Dialog open={Boolean(showMeetingDetails)} onClose={handleClose} maxWidth="sm" fullWidth>
      <DialogTitle sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Typography variant="h6">{showMeetingDetails.title}</Typography>
        <IconButton size="small" onClick={handleClose}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          {/* Status */}
          <Box>
            <Chip
              label={showMeetingDetails.status}
              color={
                showMeetingDetails.status === 'scheduled'
                  ? 'primary'
                  : showMeetingDetails.status === 'ongoing'
                  ? 'success'
                  : showMeetingDetails.status === 'completed'
                  ? 'default'
                  : 'error'
              }
              size="small"
            />
            {showMeetingDetails.isRecurring && (
              <Chip
                label={`Recurring ${showMeetingDetails.recurrencePattern}`}
                size="small"
                sx={{ ml: 1 }}
              />
            )}
          </Box>

          {/* Date & Time */}
          <Box>
            <Typography variant="subtitle2" color="text.secondary" gutterBottom>
              When
            </Typography>
            <Typography variant="body1">
              {format(new Date(showMeetingDetails.startTime), 'EEEE, MMMM d, yyyy')}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {format(new Date(showMeetingDetails.startTime), 'h:mm a')} -{' '}
              {format(new Date(showMeetingDetails.endTime), 'h:mm a')} ({showMeetingDetails.duration} minutes)
            </Typography>
          </Box>

          {/* Description */}
          {showMeetingDetails.description && (
            <Box>
              <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                Description
              </Typography>
              <Typography variant="body2">{showMeetingDetails.description}</Typography>
            </Box>
          )}

          <Divider />

          {/* Organizer */}
          <Box>
            <Typography variant="subtitle2" color="text.secondary" gutterBottom>
              Organized by
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Avatar src={showMeetingDetails.organizer.avatar} alt={showMeetingDetails.organizer.name} />
              <Typography variant="body2">{showMeetingDetails.organizer.name}</Typography>
            </Box>
          </Box>

          {/* Participants */}
          <Box>
            <Typography variant="subtitle2" color="text.secondary" gutterBottom>
              Participants ({showMeetingDetails.participants.length})
            </Typography>
            <AvatarGroup max={10}>
              {showMeetingDetails.participants.map((participant) => (
                <Tooltip key={participant._id} title={participant.name}>
                  <Avatar src={participant.avatar} alt={participant.name} />
                </Tooltip>
              ))}
            </AvatarGroup>
          </Box>

          {/* Meeting Link */}
          {showMeetingDetails.link && (
            <Box>
              <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                Meeting Link
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Typography variant="body2" sx={{ flex: 1, wordBreak: 'break-all' }}>
                  {showMeetingDetails.link}
                </Typography>
                <Tooltip title="Copy link">
                  <IconButton size="small" onClick={handleCopyLink}>
                    <ContentCopyIcon fontSize="small" />
                  </IconButton>
                </Tooltip>
              </Box>
            </Box>
          )}
        </Box>
      </DialogContent>

      <DialogActions>
        {showMeetingDetails.organizer._id === currentUser._id && (
          <>
            <Button startIcon={<EditIcon />} onClick={handleClose}>
              Edit
            </Button>
            <Button startIcon={<DeleteIcon />} onClick={handleDelete} color="error">
              Delete
            </Button>
          </>
        )}
        <Box sx={{ flex: 1 }} />
        <Button onClick={handleClose}>Close</Button>
        {showMeetingDetails.status === 'scheduled' && (
          <Button variant="contained" startIcon={<VideocamIcon />} onClick={handleJoinMeeting}>
            Join Meeting
          </Button>
        )}
      </DialogActions>
    </Dialog>
  );
};

export default MeetingDetailsDialog;
