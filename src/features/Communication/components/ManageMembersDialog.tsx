import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Box,
  Typography,
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Chip,
  TextField,
  InputAdornment,
  Alert,
  CircularProgress,
} from '@mui/material';
import {
  Search as SearchIcon,
  Delete as DeleteIcon,
  PersonAdd as PersonAddIcon,
} from '@mui/icons-material';
import { ITeam, IUser } from '../types/communication.types';
import { TeamAPI } from '../services/communication.api.service';

interface ManageMembersDialogProps {
  open: boolean;
  onClose: () => void;
  team: ITeam | null;
  currentUserId?: string;
  onMemberRemoved?: () => void;
  onOpenInvite?: () => void;
}

const ManageMembersDialog: React.FC<ManageMembersDialogProps> = ({
  open,
  onClose,
  team,
  currentUserId,
  onMemberRemoved,
  onOpenInvite,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [removingMemberId, setRemovingMemberId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  if (!team) return null;

  // Type guard to check if owner is populated
  const isOwnerPopulated = typeof team.owner === 'object' && team.owner !== null;
  const ownerData = isOwnerPopulated ? (team.owner as IUser) : null;
  const ownerId = ownerData?._id || String(team.owner);
  const isOwner = ownerId === currentUserId;

  const filteredMembers = team.members?.filter((member: any) => {
    const fullName = `${member.firstName || ''} ${member.lastName || ''}`.toLowerCase();
    const email = member.email?.toLowerCase() || '';
    const query = searchQuery.toLowerCase();
    return fullName.includes(query) || email.includes(query);
  }) || [];

  const handleRemoveMember = async (userId: string) => {
    if (!isOwner) return;

    try {
      setError(null);
      setRemovingMemberId(userId);
      await TeamAPI.removeMember(team._id, userId);
      onMemberRemoved?.();
    } catch (err: any) {
      setError(err.response?.data?.error || 'Failed to remove member');
    } finally {
      setRemovingMemberId(null);
    }
  };

  const getMemberRole = (member: any) => {
    const memberId = member._id || member;
    return memberId === ownerId ? 'Owner' : 'Member';
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h6">Manage Members</Typography>
          {isOwner && (
            <Button
              startIcon={<PersonAddIcon />}
              variant="outlined"
              size="small"
              onClick={() => {
                onClose();
                onOpenInvite?.();
              }}
            >
              Invite
            </Button>
          )}
        </Box>
      </DialogTitle>
      <DialogContent>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {/* Search */}
          <TextField
            fullWidth
            size="small"
            placeholder="Search members..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon fontSize="small" />
                </InputAdornment>
              ),
            }}
          />

          {/* Error Alert */}
          {error && (
            <Alert severity="error" onClose={() => setError(null)}>
              {error}
            </Alert>
          )}

          {/* Team Info */}
          <Box>
            <Typography variant="body2" color="text.secondary">
              {team.members?.length || 0} {team.members?.length === 1 ? 'member' : 'members'}
            </Typography>
          </Box>

          {/* Members List */}
          <List sx={{ maxHeight: 400, overflow: 'auto' }}>
            {filteredMembers.map((member: any) => {
              const memberId = member._id || member;
              const isCurrentUser = memberId === currentUserId;
              const isTeamOwner = memberId === ownerId;
              const canRemove = isOwner && !isTeamOwner;

              return (
                <ListItem
                  key={memberId}
                  sx={{
                    border: 1,
                    borderColor: 'divider',
                    borderRadius: 1,
                    mb: 1,
                  }}
                >
                  <ListItemAvatar>
                    <Avatar src={member.avatar} alt={member.firstName}>
                      {member.firstName?.charAt(0)?.toUpperCase()}
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Typography variant="body2">
                          {member.firstName} {member.lastName}
                          {isCurrentUser && ' (You)'}
                        </Typography>
                        <Chip
                          label={getMemberRole(member)}
                          size="small"
                          color={isTeamOwner ? 'primary' : 'default'}
                          sx={{ height: 20 }}
                        />
                      </Box>
                    }
                    secondary={member.email}
                  />
                  {canRemove && (
                    <ListItemSecondaryAction>
                      {removingMemberId === memberId ? (
                        <CircularProgress size={24} />
                      ) : (
                        <IconButton
                          edge="end"
                          onClick={() => handleRemoveMember(memberId)}
                          size="small"
                          color="error"
                        >
                          <DeleteIcon fontSize="small" />
                        </IconButton>
                      )}
                    </ListItemSecondaryAction>
                  )}
                </ListItem>
              );
            })}
          </List>

          {filteredMembers.length === 0 && (
            <Box sx={{ textAlign: 'center', py: 3 }}>
              <Typography variant="body2" color="text.secondary">
                No members found
              </Typography>
            </Box>
          )}
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};

export default ManageMembersDialog;
