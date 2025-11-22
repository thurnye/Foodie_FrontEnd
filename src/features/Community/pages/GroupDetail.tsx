import React, { useEffect, useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Container, Grid, CircularProgress } from '@mui/material';
import { AppDispatch, RootState } from '../../../app/stores/stores';
import {
  fetchGroupById,
  fetchPosts,
  joinGroup,
  leaveGroup,
  cancelJoinRequest,
  approveJoinRequest,
  rejectJoinRequest,
} from '../redux/community.thunk';
import { appendPosts } from '../redux/community.slice';
import { ICommunityUser } from '../types/community.types';
import CreatePostDialog from '../components/CreatePostDialog';
import GroupHeader from '../components/GroupHeader';
import GroupLeftSidebar from '../components/GroupLeftSidebar';
import GroupMainContent from '../components/GroupMainContent';
import GroupRightSidebar from '../components/GroupRightSidebar';
import { communityService } from '../services/community.service';

const GroupDetail: React.FC = () => {
  const { groupId } = useParams<{ groupId: string }>();
  const dispatch = useDispatch<AppDispatch>();
  const { user } = useSelector((state: RootState) => state.auth);
  const { selectedGroup, posts, groupsLoading, postsLoading } = useSelector(
    (state: RootState) => state.community
  );

  const [createPostOpen, setCreatePostOpen] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const POSTS_PER_PAGE = 10;

  useEffect(() => {
    if (groupId) {
      dispatch(fetchGroupById(groupId));
      // Fetch first page of posts for this group
      dispatch(fetchPosts({ groupId, page: 1, limit: POSTS_PER_PAGE }));
      setPage(1);
      setHasMore(true);
    }
  }, [dispatch, groupId]);

  const loadMorePosts = useCallback(async () => {
    if (!groupId || !hasMore || postsLoading) return;

    try {
      const nextPage = page + 1;
      const newPosts = await communityService.getPosts({
        groupId,
        page: nextPage,
        limit: POSTS_PER_PAGE,
      });

      if (newPosts.length < POSTS_PER_PAGE) {
        setHasMore(false);
      }

      if (newPosts.length > 0) {
        dispatch(appendPosts(newPosts));
        setPage(nextPage);
      }
    } catch (error) {
      console.error('Failed to load more posts:', error);
    }
  }, [groupId, page, hasMore, postsLoading, dispatch]);

  if (groupsLoading || !selectedGroup) {
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '80vh',
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  const currentGroup = selectedGroup;
  const creator = currentGroup.creator as ICommunityUser;
  const isMember = currentGroup.members.some(
    (m: any) => (typeof m.user === 'string' ? m.user : m.user._id) === user?.id
  );
  const isCreator =
    (typeof currentGroup.creator === 'string'
      ? currentGroup.creator
      : currentGroup.creator._id) === user?.id;
  const userRole = currentGroup.members.find(
    (m: any) => (typeof m.user === 'string' ? m.user : m.user._id) === user?.id
  )?.role;
  const hasRequestedJoin = currentGroup.joinRequest?.includes(user?.id || '');

  const handleJoinLeave = async () => {
    if (!groupId) return;
    if (isMember) {
      await dispatch(leaveGroup(groupId));
    } else if (hasRequestedJoin) {
      await dispatch(cancelJoinRequest(groupId));
    } else {
      await dispatch(joinGroup(groupId));
    }
  };

  const handleApproveJoinRequest = (userId: string) => {
    if (groupId) {
      dispatch(approveJoinRequest({ groupId, userId }));
    }
  };

  const handleRejectJoinRequest = (userId: string) => {
    if (groupId) {
      dispatch(rejectJoinRequest({ groupId, userId }));
    }
  };

  const groupPosts = posts.filter((p) => p.group === groupId);

  return (
    <Box sx={{ bgcolor: '#f5f5f5', py: 3}}>
      <Container maxWidth='xl'>
        {/* Group Header */}
        <GroupHeader
          currentGroup={currentGroup}
          creator={creator}
          isMember={isMember}
          hasRequestedJoin={hasRequestedJoin}
          onCreatePost={() => setCreatePostOpen(true)}
          onJoinLeave={handleJoinLeave}
        />

        <Grid container spacing={3}>
          {/* Left Sidebar */}
          <Grid item xs={12} md={3}>
            <GroupLeftSidebar
              currentGroup={currentGroup}
              isMember={isMember}
              isCreator={isCreator}
              userRole={userRole}
              groupId={groupId}
              onCreatePost={() => setCreatePostOpen(true)}
              onApproveJoinRequest={handleApproveJoinRequest}
              onRejectJoinRequest={handleRejectJoinRequest}
            />
          </Grid>

          {/* Main Content */}
          <Grid item xs={12} md={6}>
            <GroupMainContent
              groupPosts={groupPosts}
              isMember={isMember}
              onCreatePost={() => setCreatePostOpen(true)}
              onLoadMore={loadMorePosts}
              hasMore={hasMore}
              loading={postsLoading}
            />
          </Grid>

          {/* Right Sidebar */}
          <Grid item xs={12} md={3}>
            <GroupRightSidebar
              currentGroup={currentGroup}
              isCreator={isCreator}
              userRole={userRole}
              userId={user?.id}
              groupId={groupId}
              onApproveJoinRequest={handleApproveJoinRequest}
              onRejectJoinRequest={handleRejectJoinRequest}
              onHandleJoinLeave={handleJoinLeave}
            />
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
