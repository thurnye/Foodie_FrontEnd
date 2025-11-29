import React from 'react';
import {
  Box,
  Typography,
  IconButton,
  Avatar,
  Paper,
  Grid,
  Tooltip,
  Chip,
} from '@mui/material';
import {
  Mic as MicIcon,
  MicOff as MicOffIcon,
  Videocam as VideocamIcon,
  VideocamOff as VideocamOffIcon,
  ScreenShare as ScreenShareIcon,
  StopScreenShare as StopScreenShareIcon,
  CallEnd as CallEndIcon,
  MoreVert as MoreVertIcon,
} from '@mui/icons-material';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../../../app/stores/stores';
import { endCall, toggleMute, toggleCamera, toggleScreenShare } from '../redux/communication.slice';
import { formatDuration, intervalToDuration } from 'date-fns';

const CallScreen: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { activeCall, settings } = useSelector((state: RootState) => state.communication);
  const currentUser = useSelector((state: RootState) => state.auth?.user);

  const [callDuration, setCallDuration] = React.useState(0);

  React.useEffect(() => {
    if (activeCall && activeCall.status === 'active') {
      const interval = setInterval(() => {
        setCallDuration((prev) => prev + 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [activeCall?.status]);

  if (!activeCall) return null;

  const currentUserId = currentUser?._id || currentUser?.id;
  const currentParticipant = activeCall.participants.find((p) => {
    const participantId = p.user._id || p.user.id;
    return participantId === currentUserId;
  });
  const otherParticipants = activeCall.participants.filter((p) => {
    const participantId = p.user._id || p.user.id;
    return participantId !== currentUserId;
  });

  const formatCallDuration = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    if (hours > 0) {
      return `${hours}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }
    return `${minutes}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <Box
      sx={{
        width: '100vw',
        height: '100vh',
        bgcolor: settings.theme === 'dark' ? 'grey.900' : 'grey.800',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
      }}
    >
      {/* Header */}
      <Box
        sx={{
          p: 2,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          bgcolor: 'rgba(0, 0, 0, 0.3)',
        }}
      >
        <Box>
          <Typography variant="h6" color="white">
            {activeCall.type === 'video' ? 'Video' : 'Audio'} Call
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Chip
              label={activeCall.status === 'connecting' ? 'Connecting...' : formatCallDuration(callDuration)}
              size="small"
              sx={{ bgcolor: 'rgba(255, 255, 255, 0.2)', color: 'white' }}
            />
            <Typography variant="caption" color="white">
              {activeCall.participants.length} participant{activeCall.participants.length > 1 ? 's' : ''}
            </Typography>
          </Box>
        </Box>
        <IconButton sx={{ color: 'white' }}>
          <MoreVertIcon />
        </IconButton>
      </Box>

      {/* Participants Grid */}
      <Box sx={{ flex: 1, p: 3, overflow: 'auto' }}>
        <Grid container spacing={2} sx={{ height: '100%' }}>
          {activeCall.participants.map((participant) => (
            <Grid
              item
              xs={12}
              sm={activeCall.participants.length === 1 ? 12 : 6}
              md={activeCall.participants.length <= 2 ? 6 : 4}
              key={participant.user._id}
            >
              <Paper
                sx={{
                  height: '100%',
                  minHeight: 300,
                  bgcolor: settings.theme === 'dark' ? 'grey.800' : 'grey.700',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {participant.isCameraOff || activeCall.type === 'audio' ? (
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: 2,
                    }}
                  >
                    <Avatar
                      src={participant.user.avatar}
                      alt={participant.user.name}
                      sx={{ width: 120, height: 120 }}
                    />
                    <Typography variant="h6" color="white">
                      {participant.user.name}
                    </Typography>
                  </Box>
                ) : (
                  <Box
                    sx={{
                      width: '100%',
                      height: '100%',
                      bgcolor: 'grey.900',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Typography variant="body1" color="grey.500">
                      Camera feed (simulated)
                    </Typography>
                  </Box>
                )}

                {/* Participant Info Overlay */}
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    p: 2,
                    bgcolor: 'rgba(0, 0, 0, 0.6)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <Typography variant="subtitle1" color="white" fontWeight={600}>
                    {participant.user.name}
                    {((participant.user._id || participant.user.id) === currentUserId) && ' (You)'}
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 1 }}>
                    {participant.isMuted && (
                      <MicOffIcon sx={{ color: 'error.light', fontSize: 20 }} />
                    )}
                    {participant.isCameraOff && activeCall.type === 'video' && (
                      <VideocamOffIcon sx={{ color: 'error.light', fontSize: 20 }} />
                    )}
                    {participant.isScreenSharing && (
                      <ScreenShareIcon sx={{ color: 'primary.light', fontSize: 20 }} />
                    )}
                  </Box>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Call Controls */}
      <Box
        sx={{
          p: 3,
          bgcolor: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 2,
        }}
      >
        {/* Mute/Unmute */}
        <Tooltip title={currentParticipant?.isMuted ? 'Unmute' : 'Mute'}>
          <IconButton
            onClick={() => currentUserId && dispatch(toggleMute(currentUserId))}
            sx={{
              bgcolor: currentParticipant?.isMuted ? 'error.main' : 'rgba(255, 255, 255, 0.2)',
              color: 'white',
              width: 56,
              height: 56,
              '&:hover': {
                bgcolor: currentParticipant?.isMuted ? 'error.dark' : 'rgba(255, 255, 255, 0.3)',
              },
            }}
          >
            {currentParticipant?.isMuted ? <MicOffIcon /> : <MicIcon />}
          </IconButton>
        </Tooltip>

        {/* Camera Toggle (Video calls only) */}
        {activeCall.type === 'video' && (
          <Tooltip title={currentParticipant?.isCameraOff ? 'Turn on camera' : 'Turn off camera'}>
            <IconButton
              onClick={() => currentUserId && dispatch(toggleCamera(currentUserId))}
              sx={{
                bgcolor: currentParticipant?.isCameraOff ? 'error.main' : 'rgba(255, 255, 255, 0.2)',
                color: 'white',
                width: 56,
                height: 56,
                '&:hover': {
                  bgcolor: currentParticipant?.isCameraOff ? 'error.dark' : 'rgba(255, 255, 255, 0.3)',
                },
              }}
            >
              {currentParticipant?.isCameraOff ? <VideocamOffIcon /> : <VideocamIcon />}
            </IconButton>
          </Tooltip>
        )}

        {/* Screen Share */}
        <Tooltip title={currentParticipant?.isScreenSharing ? 'Stop sharing' : 'Share screen'}>
          <IconButton
            onClick={() => currentUserId && dispatch(toggleScreenShare(currentUserId))}
            sx={{
              bgcolor: currentParticipant?.isScreenSharing ? 'primary.main' : 'rgba(255, 255, 255, 0.2)',
              color: 'white',
              width: 56,
              height: 56,
              '&:hover': {
                bgcolor: currentParticipant?.isScreenSharing ? 'primary.dark' : 'rgba(255, 255, 255, 0.3)',
              },
            }}
          >
            {currentParticipant?.isScreenSharing ? <StopScreenShareIcon /> : <ScreenShareIcon />}
          </IconButton>
        </Tooltip>

        {/* End Call */}
        <Tooltip title="End call">
          <IconButton
            onClick={() => dispatch(endCall())}
            sx={{
              bgcolor: 'error.main',
              color: 'white',
              width: 56,
              height: 56,
              '&:hover': {
                bgcolor: 'error.dark',
              },
            }}
          >
            <CallEndIcon />
          </IconButton>
        </Tooltip>
      </Box>
    </Box>
  );
};

export default CallScreen;
