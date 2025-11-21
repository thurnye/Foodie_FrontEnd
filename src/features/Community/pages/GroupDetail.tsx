import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  Box,
  Container,
  Typography,
  Button,
  Card,
  CardContent,
  Avatar,
  Chip,
  Divider,
  Grid,
  Paper,
  IconButton,
  Menu,
  MenuItem,
  Tabs,
  Tab,
  CircularProgress,
} from '@mui/material';
import {
  Add,
  PersonAdd,
  PersonRemove,
  Settings,
  MoreVert,
  People,
  Article,
  TrendingUp,
  AccessTime,
} from '@mui/icons-material';
import { AppDispatch, RootState } from '../../../app/stores/stores';
import { fetchGroupById, fetchPosts, joinGroup, leaveGroup } from '../redux/community.thunk';
import PostCard from '../components/PostCard';
import CreatePostDialog from '../components/CreatePostDialog';
import { ICommunityUser } from '../types/community.types';

const GroupDetail: React.FC = () => {
  const { groupId } = useParams<{ groupId: string }>();
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { user } = useSelector((state: RootState) => state.auth);
  const { selectedGroup, posts, groupsLoading } = useSelector((state: RootState) => state.community);

  const [createPostOpen, setCreatePostOpen] = useState(false);
  const [sortBy, setSortBy] = useState<'newest' | 'popular' | 'trending'>('newest');
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  useEffect(() => {
    if (groupId) {
      dispatch(fetchGroupById(groupId));
      dispatch(fetchPosts({ groupId, sort: sortBy }));
    }
  }, [dispatch, groupId, sortBy]);

  if (groupsLoading || !selectedGroup) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '80vh' }}>
        <CircularProgress />
      </Box>
    );
  }

  const currentGroup = selectedGroup;
  const creator = currentGroup.creator as ICommunityUser;
  const isMember = currentGroup.members.some(
    (m: any) => (typeof m.user === 'string' ? m.user : m.user._id) === user?.id
  );
  const isCreator = (typeof currentGroup.creator === 'string' ? currentGroup.creator : currentGroup.creator._id) === user?.id;
  const userRole = currentGroup.members.find(
    (m: any) => (typeof m.user === 'string' ? m.user : m.user._id) === user?.id
  )?.role;

  const handleJoinLeave = async () => {
    if (!groupId) return;
    if (isMember) {
      await dispatch(leaveGroup(groupId));
    } else {
      await dispatch(joinGroup(groupId));
    }
  };

  const handleSortChange = (_: React.SyntheticEvent, newValue: string) => {
    setSortBy(newValue as 'newest' | 'popular' | 'trending');
  };

  const groupPosts = posts.filter((p) => p.group === groupId);

  return (
    <Box sx={{ bgcolor: '#f5f5f5', minHeight: '100vh', py: 3 }}>
      <Container maxWidth="lg">
        {/* Group Header */}
        <Card sx={{ mb: 3, borderRadius: 2 }}>
          {currentGroup.coverImage && (
            <Box
              sx={{
                height: 200,
                backgroundImage: `url(${currentGroup.coverImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
          )}
          <CardContent>
            <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
              <Avatar
                src={currentGroup.icon}
                sx={{
                  width: 80,
                  height: 80,
                  fontSize: '2rem',
                  bgcolor: 'primary.main',
                  mt: currentGroup.coverImage ? -6 : 0,
                  border: '4px solid white',
                }}
              >
                {currentGroup.name[0]}
              </Avatar>

              <Box sx={{ flex: 1 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                  <Typography variant="h4" fontWeight="bold">
                    {currentGroup.name}
                  </Typography>
                  {currentGroup.isPrivate && (
                    <Chip label="Private" size="small" color="secondary" />
                  )}
                </Box>

                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  {currentGroup.description}
                </Typography>

                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                    <People fontSize="small" color="action" />
                    <Typography variant="body2">
                      {currentGroup.memberCount} {currentGroup.memberCount === 1 ? 'member' : 'members'}
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                    <Article fontSize="small" color="action" />
                    <Typography variant="body2">
                      {currentGroup.postCount} {currentGroup.postCount === 1 ? 'post' : 'posts'}
                    </Typography>
                  </Box>
                  <Typography variant="body2" color="text.secondary">
                    Created by {creator?.firstName} {creator?.lastName}
                  </Typography>
                </Box>

                {currentGroup.tags && currentGroup.tags.length > 0 && (
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mb: 2 }}>
                    {currentGroup.tags.map((tag: string, index: number) => (
                      <Chip key={index} label={tag} size="small" variant="outlined" />
                    ))}
                  </Box>
                )}

                <Box sx={{ display: 'flex', gap: 1 }}>
                  {isMember ? (
                    <>
                      <Button
                        variant="contained"
                        startIcon={<Add />}
                        onClick={() => setCreatePostOpen(true)}
                      >
                        Create Post
                      </Button>
                      <Button
                        variant="outlined"
                        startIcon={<PersonRemove />}
                        onClick={handleJoinLeave}
                      >
                        Leave Group
                      </Button>
                    </>
                  ) : (
                    <Button
                      variant="contained"
                      startIcon={<PersonAdd />}
                      onClick={handleJoinLeave}
                    >
                      Join Group
                    </Button>
                  )}
                  {(isCreator || userRole === 'admin' || userRole === 'moderator') && (
                    <IconButton onClick={(e) => setAnchorEl(e.currentTarget)}>
                      <Settings />
                    </IconButton>
                  )}
                  <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={() => setAnchorEl(null)}>
                    <MenuItem onClick={() => navigate(`/communities/groups/${groupId}/settings`)}>
                      Group Settings
                    </MenuItem>
                    <MenuItem onClick={() => navigate(`/communities/groups/${groupId}/members`)}>
                      Manage Members
                    </MenuItem>
                  </Menu>
                </Box>
              </Box>
            </Box>
          </CardContent>
        </Card>

        <Grid container spacing={3}>
          {/* Main Content */}
          <Grid item xs={12} md={8}>
            {/* Sort Tabs */}
            <Paper sx={{ mb: 2, borderRadius: 2 }}>
              <Tabs value={sortBy} onChange={handleSortChange} variant="fullWidth">
                <Tab
                  icon={<AccessTime />}
                  iconPosition="start"
                  label="New"
                  value="newest"
                  sx={{ textTransform: 'none' }}
                />
                <Tab
                  icon={<TrendingUp />}
                  iconPosition="start"
                  label="Popular"
                  value="popular"
                  sx={{ textTransform: 'none' }}
                />
                <Tab
                  icon={<TrendingUp />}
                  iconPosition="start"
                  label="Trending"
                  value="trending"
                  sx={{ textTransform: 'none' }}
                />
              </Tabs>
            </Paper>

            {/* Posts */}
            {groupPosts.length === 0 ? (
              <Card sx={{ p: 4, textAlign: 'center', borderRadius: 2 }}>
                <Typography variant="h6" color="text.secondary" gutterBottom>
                  No posts yet
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  Be the first to share something with this community!
                </Typography>
                {isMember && (
                  <Button variant="contained" onClick={() => setCreatePostOpen(true)}>
                    Create First Post
                  </Button>
                )}
              </Card>
            ) : (
              groupPosts.map((post) => <PostCard key={post._id} post={post} />)
            )}
          </Grid>

          {/* Sidebar */}
          <Grid item xs={12} md={4}>
            {/* About */}
            <Card sx={{ mb: 2, borderRadius: 2 }}>
              <CardContent>
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                  About Community
                </Typography>
                <Divider sx={{ mb: 2 }} />
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  {currentGroup.description}
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography variant="body2" color="text.secondary">
                      Members
                    </Typography>
                    <Typography variant="body2" fontWeight="bold">
                      {currentGroup.memberCount}
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography variant="body2" color="text.secondary">
                      Posts
                    </Typography>
                    <Typography variant="body2" fontWeight="bold">
                      {currentGroup.postCount}
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography variant="body2" color="text.secondary">
                      Created
                    </Typography>
                    <Typography variant="body2" fontWeight="bold">
                      {new Date(currentGroup.createdAt).toLocaleDateString()}
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>

            {/* Rules */}
            {currentGroup.rules && currentGroup.rules.length > 0 && (
              <Card sx={{ mb: 2, borderRadius: 2 }}>
                <CardContent>
                  <Typography variant="h6" fontWeight="bold" gutterBottom>
                    Community Rules
                  </Typography>
                  <Divider sx={{ mb: 2 }} />
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                    {currentGroup.rules.map((rule: string, index: number) => (
                      <Box key={index}>
                        <Typography variant="body2" fontWeight="bold">
                          {index + 1}. Rule {index + 1}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {rule}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </CardContent>
              </Card>
            )}

            {/* Moderators */}
            <Card sx={{ borderRadius: 2 }}>
              <CardContent>
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                  Moderators
                </Typography>
                <Divider sx={{ mb: 2 }} />
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                  {currentGroup.members
                    .filter((m: any) => m.role === 'admin' || m.role === 'moderator')
                    .map((member: any, index: number) => {
                      const memberUser = member.user as ICommunityUser;
                      return (
                        <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                          <Avatar src={memberUser?.avatar} sx={{ width: 32, height: 32 }}>
                            {memberUser?.firstName?.[0]}
                          </Avatar>
                          <Box sx={{ flex: 1 }}>
                            <Typography variant="body2" fontWeight="bold">
                              {memberUser?.firstName} {memberUser?.lastName}
                            </Typography>
                            <Typography variant="caption" color="text.secondary">
                              {member.role}
                            </Typography>
                          </Box>
                        </Box>
                      );
                    })}
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>

      {/* Create Post Dialog */}
      {groupId && (
        <CreatePostDialog
          open={createPostOpen}
          onClose={() => setCreatePostOpen(false)}
          groupId={groupId}
        />
      )}
    </Box>
  );
};

export default GroupDetail;
