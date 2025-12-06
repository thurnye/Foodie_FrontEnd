import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Box,
  Typography,
  Avatar,
  Divider,
  Chip
} from '@mui/material';
import { ITeam, IUser } from '../types/communication.types';
import { formatDistanceToNow } from 'date-fns';

interface AboutTeamDialogProps {
  open: boolean;
  onClose: () => void;
  team: ITeam | null;
}

const AboutTeamDialog: React.FC<AboutTeamDialogProps> = ({
  open,
  onClose,
  team,
}) => {
  if (!team) return null;

  // Type guard to check if owner is populated
  const isOwnerPopulated = typeof team.owner === 'object' && team.owner !== null;
  const ownerData = isOwnerPopulated ? (team.owner as IUser) : null;
  const ownerName = ownerData
    ? `${ownerData.firstName} ${ownerData.lastName}`
    : String(team.owner);

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>About Team</DialogTitle>
      <DialogContent>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, pt: 1 }}>
          {/* Team Avatar and Name */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Avatar
              src={team.avatar}
              alt={team.name}
              sx={{ width: 64, height: 64 }}
            >
              {team.name.charAt(0).toUpperCase()}
            </Avatar>
            <Box>
              <Typography variant="h6" fontWeight={600}>
                {team.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {team.members?.length || 0} members • {team.channels?.length || 0} channels
              </Typography>
            </Box>
          </Box>

          <Divider />

          {/* Team Description */}
          {team.description && (
            <Box>
              <Typography variant="subtitle2" fontWeight={600} gutterBottom>
                Description
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {team.description}
              </Typography>
            </Box>
          )}

          {/* Team Owner */}
          <Box>
            <Typography variant="subtitle2" fontWeight={600} gutterBottom>
              Team Owner
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Avatar
                src={ownerData?.avatar}
                alt={ownerData?.firstName || 'Owner'}
                sx={{ width: 32, height: 32 }}
              >
                {ownerData?.firstName?.charAt(0)?.toUpperCase() || 'O'}
              </Avatar>
              <Typography variant="body2">
                {ownerName}
              </Typography>
            </Box>
          </Box>

          {/* Team Created */}
          <Box>
            <Typography variant="subtitle2" fontWeight={600} gutterBottom>
              Created
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {formatDistanceToNow(new Date(team.createdAt), {
                addSuffix: true,
              })}
            </Typography>
          </Box>

          {/* Team Channels */}
          <Box>
            <Typography variant="subtitle2" fontWeight={600} gutterBottom>
              Channels ({team.channels?.length || 0})
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 1 }}>
              {team.channels?.map((channel: any) => (
                <Chip
                  key={channel._id}
                  label={`# ${channel.name}`}
                  size="small"
                  variant="outlined"
                />
              ))}
            </Box>
          </Box>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};

export default AboutTeamDialog;
