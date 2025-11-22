import React, { useEffect, useRef, useCallback } from 'react';
import { Card, Typography, Button, Box, CircularProgress } from '@mui/material';
import { IPost } from '../types/community.types';
import PostCard from './PostCard';

interface GroupMainContentProps {
  groupPosts: IPost[];
  isMember: boolean;
  onCreatePost: () => void;
  onLoadMore: () => void;
  hasMore: boolean;
  loading: boolean;
}

const GroupMainContent: React.FC<GroupMainContentProps> = ({
  groupPosts,
  isMember,
  onCreatePost,
  onLoadMore,
  hasMore,
  loading,
}) => {
  const observer = useRef<IntersectionObserver | null>(null);
  const lastPostRef = useCallback(
    (node: HTMLDivElement) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          onLoadMore();
        }
      });

      if (node) observer.current.observe(node);
    },
    [loading, hasMore, onLoadMore]
  );

  return (
    <Box sx={{
      maxHeight:'100vh',
      overflow:'auto',
      '&::-webkit-scrollbar': {
        display: 'none'
      },
      msOverflowStyle: 'none',
      scrollbarWidth: 'none'
    }}>
      {groupPosts.length === 0 && !loading ? (
        <Card sx={{ p: 4, textAlign: 'center', borderRadius: 2 }}>
          <Typography variant='h6' color='text.secondary' gutterBottom>
            No posts yet
          </Typography>
          <Typography variant='body2' color='text.secondary' sx={{ mb: 2 }}>
            Be the first to share something with this community!
          </Typography>
          {isMember && (
            <Button variant='contained' onClick={onCreatePost}>
              Create First Post
            </Button>
          )}
        </Card>
      ) : (
        <>
          {groupPosts.map((post, index) => {
            if (groupPosts.length === index + 1) {
              return <div key={post._id} ref={lastPostRef}><PostCard post={post} /></div>;
            } else {
              return <PostCard key={post._id} post={post} />;
            }
          })}
          {loading && (
            <Box sx={{ display: 'flex', justifyContent: 'center', py: 3 }}>
              <CircularProgress />
            </Box>
          )}
        </>
      )}
    </Box>
  );
};

export default GroupMainContent;
