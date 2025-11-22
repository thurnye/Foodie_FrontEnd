import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  TextField,
  InputAdornment,
  Chip,
  Avatar,
  CircularProgress,
  Alert,
  IconButton,
  Menu,
  MenuItem,
} from '@mui/material';
import {
  Search,
  Add,
  People,
  Article,
  Lock,
  Public,
  MoreVert,
} from '@mui/icons-material';
import { AppDispatch, RootState } from '../../../app/stores/stores';
import { fetchGroups, fetchMyGroups, joinGroup, cancelJoinRequest } from '../redux/community.thunk';
import { IGroup } from '../types/community.types';
import CreateGroupDialog from '../components/CreateGroupDialog';

const CommunityGroups: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { groups, myGroups, groupsLoading, groupsError } = useSelector(
    (state: RootState) => state.community
  );
  const { user } = useSelector((state: RootState) => state.auth);

  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState<'all' | 'my'>('all');
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedGroup, setSelectedGroup] = useState<IGroup | null>(null);
  const [createDialogOpen, setCreateDialogOpen] = useState(false);

  useEffect(() => {
    if (activeTab === 'all') dispatch(fetchGroups());
    else dispatch(fetchMyGroups());
  }, [dispatch, activeTab]);

  const handleSearch = () => {
    dispatch(fetchGroups({ search: searchQuery }));
  };

  const handleGroupClick = async (group: IGroup) => {
    const isMember = group.members.some(
      (m: any) => (typeof m.user === 'string' ? m.user : m.user._id) === user?.id
    );
    const hasRequestedJoin = group.joinRequest?.includes(user?.id || '');

    if (isMember || !group.isPrivate) {
      // Navigate to group if user is a member or group is public
      navigate(`group/${group._id}`);
    } else if (hasRequestedJoin) {
      // Cancel join request if already requested
      await dispatch(cancelJoinRequest(group._id));
    } else {
      // Send join request for private group
      await dispatch(joinGroup(group._id));
    }
  };

  const handleCreateGroup = () => {
    setCreateDialogOpen(true);
  };

  const handleMenuOpen = (
    event: React.MouseEvent<HTMLElement>,
    group: IGroup
  ) => {
    setAnchorEl(event.currentTarget);
    setSelectedGroup(group);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setSelectedGroup(null);
  };

  const filteredGroups = activeTab === 'all' ? groups : myGroups;

  return (
    <Box sx={{ py: 4, backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
      <Container maxWidth='xl'>
        {/* Header */}
        <Box sx={{ mb: 4 }}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              mb: 2,
            }}
          >
            <Typography variant='h4' fontWeight='bold'>
              Community Groups
            </Typography>
            <Button
              variant='contained'
              startIcon={<Add />}
              onClick={handleCreateGroup}
              sx={{
                backgroundColor: '#ff6b6b',
                '&:hover': { backgroundColor: '#ff5252' },
              }}
            >
              Create Group
            </Button>
          </Box>

          {/* Search Bar */}
          <Box sx={{ mb: 3 }}>
            <TextField
              fullWidth
              placeholder='Search groups...'
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    <Search />
                  </InputAdornment>
                ),
                sx: { backgroundColor: 'white', borderRadius: 2 },
              }}
            />
          </Box>

          {/* Tabs */}
          <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
            <Button
              variant={activeTab === 'all' ? 'contained' : 'outlined'}
              onClick={() => setActiveTab('all')}
              sx={{
                borderRadius: 2,
                ...(activeTab === 'all' && {
                  backgroundColor: '#333',
                  '&:hover': { backgroundColor: '#444' },
                }),
              }}
            >
              All Groups ({groups.length})
            </Button>
            <Button
              variant={activeTab === 'my' ? 'contained' : 'outlined'}
              onClick={() => setActiveTab('my')}
              sx={{
                borderRadius: 2,
                ...(activeTab === 'my' && {
                  backgroundColor: '#333',
                  '&:hover': { backgroundColor: '#444' },
                }),
              }}
            >
              My Groups ({myGroups.length})
            </Button>
          </Box>
        </Box>

        {/* Loading State */}
        {groupsLoading && (
          <Box sx={{ display: 'flex', justifyContent: 'center', py: 8 }}>
            <CircularProgress />
          </Box>
        )}

        {/* Error State */}
        {groupsError && (
          <Alert severity='error' sx={{ mb: 3 }}>
            {groupsError}
          </Alert>
        )}

        {/* Groups Grid */}
        {!groupsLoading && (
          <Grid container spacing={3}>
            {filteredGroups.map((group: IGroup) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={group._id}>
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    cursor: 'pointer',
                    transition: 'transform 0.2s',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: 3,
                    },
                  }}
                >
                  {/* Cover Image */}
                  <Box sx={{ position: 'relative' }}>
                    <CardMedia
                      component='img'
                      height='140'
                      image={
                        group.coverImage ||
                        'https://via.placeholder.com/400x140?text=Group+Cover'
                      }
                      alt={group.name}
                      onClick={() => handleGroupClick(group)}
                    />
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 8,
                        right: 8,
                        display: 'flex',
                        gap: 1,
                      }}
                    >
                      <Chip
                        icon={
                          group.isPrivate ? (
                            <Lock fontSize='small' />
                          ) : (
                            <Public fontSize='small' />
                          )
                        }
                        label={group.isPrivate ? 'Private' : 'Public'}
                        size='small'
                        sx={{
                          backgroundColor: 'rgba(255, 255, 255, 0.9)',
                          fontWeight: 'bold',
                        }}
                      />
                    </Box>
                  </Box>

                  {/* Group Icon */}
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      mt: -4,
                      mb: 1,
                    }}
                  >
                    <Avatar
                      src={group.icon}
                      sx={{
                        width: 80,
                        height: 80,
                        border: '4px solid white',
                        backgroundColor: '#ff6b6b',
                      }}
                    >
                      {group.name.charAt(0).toUpperCase()}
                    </Avatar>
                  </Box>

                  <CardContent
                    sx={{ flexGrow: 1, pt: 0 }}
                    onClick={() => handleGroupClick(group)}
                  >
                    <Typography
                      variant='h6'
                      fontWeight='bold'
                      gutterBottom
                      textAlign='center'
                      noWrap
                    >
                      {group.name}
                    </Typography>
                    <Typography
                      variant='body2'
                      color='text.secondary'
                      sx={{
                        mb: 2,
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                        textAlign: 'center',
                      }}
                    >
                      {group.description}
                    </Typography>

                    {/* Stats */}
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: 2,
                        mb: 1,
                      }}
                    >
                      <Box
                        sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}
                      >
                        <People fontSize='small' color='action' />
                        <Typography variant='caption' color='text.secondary'>
                          {group.memberCount}
                        </Typography>
                      </Box>
                      <Box
                        sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}
                      >
                        <Article fontSize='small' color='action' />
                        <Typography variant='caption' color='text.secondary'>
                          {group.postCount}
                        </Typography>
                      </Box>
                    </Box>

                    {/* Tags */}
                    {group.tags && group.tags.length > 0 && (
                      <Box
                        sx={{
                          display: 'flex',
                          flexWrap: 'wrap',
                          gap: 0.5,
                          justifyContent: 'center',
                        }}
                      >
                        {group.tags
                          .slice(0, 2)
                          .map((tag: string, index: number) => (
                            <Chip key={index} label={tag} size='small' />
                          ))}
                      </Box>
                    )}
                  </CardContent>

                  <CardActions
                    sx={{ justifyContent: 'space-between', px: 2, pb: 2 }}
                  >
                    <Button
                      size='small'
                      variant='contained'
                      onClick={() => handleGroupClick(group)}
                      sx={{
                        flex: 1,
                        backgroundColor: '#333',
                        '&:hover': { backgroundColor: '#444' },
                      }}
                    >
                      {(() => {
                        console.log('User:', user);
                        const isMember = group.members.some(
                          (m: any) => (typeof m.user === 'string' ? m.user : m.user._id) === user?.id
                        );
                        const hasRequestedJoin = group.joinRequest?.includes(user?.id || '');

                        if (isMember) return 'View Group';
                        if (hasRequestedJoin) return 'Cancel Request';
                        if (group.isPrivate) return 'Request to Join';
                        return 'View Group';
                      })()}
                    </Button>
                    <IconButton
                      size='small'
                      onClick={(e) => handleMenuOpen(e, group)}
                    >
                      <MoreVert />
                    </IconButton>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        )}

        {/* Empty State */}
        {!groupsLoading && filteredGroups.length === 0 && (
          <Box sx={{ textAlign: 'center', py: 8 }}>
            <Typography variant='h6' color='text.secondary' gutterBottom>
              No groups found
            </Typography>
            <Typography variant='body2' color='text.secondary' sx={{ mb: 3 }}>
              {activeTab === 'my'
                ? "You haven't joined any groups yet"
                : 'Be the first to create a group!'}
            </Typography>
            <Button
              variant='contained'
              startIcon={<Add />}
              onClick={handleCreateGroup}
              sx={{
                backgroundColor: '#ff6b6b',
                '&:hover': { backgroundColor: '#ff5252' },
              }}
            >
              Create Group
            </Button>
          </Box>
        )}

        {/* Menu */}
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={handleMenuClose}>Share</MenuItem>
          <MenuItem onClick={handleMenuClose}>Report</MenuItem>
        </Menu>

        {/* Create Group Dialog */}
        <CreateGroupDialog
          open={createDialogOpen}
          onClose={() => setCreateDialogOpen(false)}
        />
      </Container>
    </Box>
  );
};

export default CommunityGroups;
