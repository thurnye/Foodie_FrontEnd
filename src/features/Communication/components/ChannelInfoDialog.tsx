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
  Divider,
  Chip,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  TextField,
  InputAdornment,
  Alert,
  CircularProgress,
  Tabs,
  Tab,
} from '@mui/material';
import {
  Tag as HashIcon,
  Lock as LockIcon,
  Campaign as CampaignIcon,
  Search as SearchIcon,
  Delete as DeleteIcon,
  PersonAdd as PersonAddIcon,
} from '@mui/icons-material';
import { IChannel } from '../types/communication.types';
import { ChannelAPI } from '../services/communication.api.service';
import { formatDistanceToNow } from 'date-fns';

interface ChannelInfoDialogProps {
  open: boolean;
  onClose: () => void;
  channel: IChannel | null;
  teamMembers?: any[];
  currentUserId?: string;
  onMemberManaged?: () => void;
}

const ChannelInfoDialog: React.FC<ChannelInfoDialogProps> = ({
  open,
  onClose,
  channel,
  teamMembers = [],
  currentUserId,
  onMemberManaged,
}) => {
  const [tabValue, setTabValue] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [removingMemberId, setRemovingMemberId] = useState<string | null>(null);
  const [addingMemberId, setAddingMemberId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  if (!channel) return null;

  const channelMembers = channel.members || [];
  const channelMemberIds = channelMembers.map((m: any) => m._id || m);

  const filteredChannelMembers = channelMembers.filter((member: any) => {
    const fullName = `${member.firstName || ''} ${member.lastName || ''}`.toLowerCase();
    const email = member.email?.toLowerCase() || '';
    const query = searchQuery.toLowerCase();
    return fullName.includes(query) || email.includes(query);
  });

  const availableMembers = teamMembers.filter(
    (member) => !channelMemberIds.includes(member._id || member)
  );

  const filteredAvailableMembers = availableMembers.filter((member: any) => {
    const fullName = `${member.firstName || ''} ${member.lastName || ''}`.toLowerCase();
    const email = member.email?.toLowerCase() || '';
    const query = searchQuery.toLowerCase();
    return fullName.includes(query) || email.includes(query);
  });

  const handleRemoveMember = async (userId: string) => {
    try {
      setError(null);
      setRemovingMemberId(userId);
      await ChannelAPI.removeMember(channel._id, userId);
      onMemberManaged?.();
    } catch (err: any) {
      setError(err.response?.data?.error || 'Failed to remove member');
    } finally {
      setRemovingMemberId(null);
    }
  };

  const handleAddMember = async (userId: string) => {
    try {
      setError(null);
      setAddingMemberId(userId);
      await ChannelAPI.addMembers(channel._id, [userId]);
      onMemberManaged?.();
    } catch (err: any) {
      setError(err.response?.data?.error || 'Failed to add member');
    } finally {
      setAddingMemberId(null);
    }
  };

  const getChannelIcon = () => {
    if (channel.type === 'announcement') return <CampaignIcon />;
    if (channel.isPrivate) return <LockIcon />;
    return <HashIcon />;
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          {getChannelIcon()}
          <Typography variant="h6">{channel.name}</Typography>
          <Chip
            label={channel.isPrivate ? 'Private' : 'Public'}
            size="small"
            color={channel.isPrivate ? 'warning' : 'success'}
          />
        </Box>
      </DialogTitle>
      <DialogContent>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {/* Channel Description */}
          {channel.description && (
            <Box>
              <Typography variant="subtitle2" fontWeight={600} gutterBottom>
                Description
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {channel.description}
              </Typography>
            </Box>
          )}

          {/* Channel Info */}
          <Box>
            <Typography variant="subtitle2" fontWeight={600} gutterBottom>
              Channel Information
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
              <Chip label={`Type: ${channel.type}`} size="small" variant="outlined" />
              <Chip
                label={`${channelMembers.length} members`}
                size="small"
                variant="outlined"
              />
              <Chip
                label={`Created ${formatDistanceToNow(new Date(channel.createdAt), { addSuffix: true })}`}
                size="small"
                variant="outlined"
              />
            </Box>
          </Box>

          <Divider />

          {/* Tabs for Members and Add Members */}
          <Box>
            <Tabs value={tabValue} onChange={(_, v) => setTabValue(v)}>
              <Tab label={`Members (${channelMembers.length})`} />
              <Tab label={`Add Members (${availableMembers.length})`} />
            </Tabs>

            {/* Search */}
            <Box sx={{ mt: 2 }}>
              <TextField
                fullWidth
                size="small"
                placeholder="Search..."
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
            </Box>

            {/* Error Alert */}
            {error && (
              <Alert severity="error" onClose={() => setError(null)} sx={{ mt: 2 }}>
                {error}
              </Alert>
            )}

            {/* Current Members Tab */}
            {tabValue === 0 && (
              <List sx={{ maxHeight: 300, overflow: 'auto', mt: 2 }}>
                {filteredChannelMembers.map((member: any) => {
                  const memberId = member._id || member;
                  const isCurrentUser = memberId === currentUserId;

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
                          <Typography variant="body2">
                            {member.firstName} {member.lastName}
                            {isCurrentUser && ' (You)'}
                          </Typography>
                        }
                        secondary={member.email}
                      />
                      {!isCurrentUser && (
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
                {filteredChannelMembers.length === 0 && (
                  <Box sx={{ textAlign: 'center', py: 3 }}>
                    <Typography variant="body2" color="text.secondary">
                      No members found
                    </Typography>
                  </Box>
                )}
              </List>
            )}

            {/* Add Members Tab */}
            {tabValue === 1 && (
              <List sx={{ maxHeight: 300, overflow: 'auto', mt: 2 }}>
                {filteredAvailableMembers.map((member: any) => {
                  const memberId = member._id || member;

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
                          <Typography variant="body2">
                            {member.firstName} {member.lastName}
                          </Typography>
                        }
                        secondary={member.email}
                      />
                      <ListItemSecondaryAction>
                        {addingMemberId === memberId ? (
                          <CircularProgress size={24} />
                        ) : (
                          <IconButton
                            edge="end"
                            onClick={() => handleAddMember(memberId)}
                            size="small"
                            color="primary"
                          >
                            <PersonAddIcon fontSize="small" />
                          </IconButton>
                        )}
                      </ListItemSecondaryAction>
                    </ListItem>
                  );
                })}
                {filteredAvailableMembers.length === 0 && (
                  <Box sx={{ textAlign: 'center', py: 3 }}>
                    <Typography variant="body2" color="text.secondary">
                      {availableMembers.length === 0
                        ? 'All team members are already in this channel'
                        : 'No members found'}
                    </Typography>
                  </Box>
                )}
              </List>
            )}
          </Box>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};

export default ChannelInfoDialog;
