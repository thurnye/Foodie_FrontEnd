import React from 'react';
import {
  Box,
  Card,
  CardContent,
  Avatar,
  Typography,
  Chip,
  Button,
} from '@mui/material';
import { Add, PersonAdd, People, Article } from '@mui/icons-material';
import { IGroup, ICommunityUser } from '../types/community.types';

interface GroupHeaderProps {
  currentGroup: IGroup;
  creator: ICommunityUser;
  isMember: boolean;
  hasRequestedJoin: boolean;
  onCreatePost: () => void;
  onJoinLeave: () => void;
}

const GroupHeader: React.FC<GroupHeaderProps> = ({
  currentGroup,
  creator,
  isMember,
  hasRequestedJoin,
  onCreatePost,
  onJoinLeave,
}) => {
  return (
    <Card sx={{ mb: 3, borderRadius: 2 }}>
      {currentGroup.coverImage && (
        <Box
          sx={{
            height: 250,
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
              width: 150,
              height: 150,
              fontSize: '4rem',
              bgcolor: 'primary.main',
              mt: currentGroup.coverImage ? -6 : 0,
              border: '4px solid white',
            }}
          >
            {currentGroup.name[0]}
          </Avatar>

          <Box sx={{ flex: 1 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
              <Typography variant='h4' fontWeight='bold'>
                {currentGroup.name}
              </Typography>
              {currentGroup.isPrivate && (
                <Chip label='Private' size='small' color='secondary' />
              )}
            </Box>

            <Typography variant='body2' color='text.secondary' sx={{ mb: 2 }}>
              {currentGroup.description}
            </Typography>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                <People fontSize='small' color='action' />
                <Typography variant='body2'>
                  {currentGroup.memberCount}{' '}
                  {currentGroup.memberCount === 1 ? 'member' : 'members'}
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                <Article fontSize='small' color='action' />
                <Typography variant='body2'>
                  {currentGroup.postCount}{' '}
                  {currentGroup.postCount === 1 ? 'post' : 'posts'}
                </Typography>
              </Box>
              <Typography variant='body2' color='text.secondary'>
                Created by {creator?.firstName} {creator?.lastName}
              </Typography>
            </Box>

            {currentGroup.tags && currentGroup.tags.length > 0 && (
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mb: 2 }}>
                {currentGroup.tags.map((tag: string, index: number) => (
                  <Chip key={index} label={tag} size='small' variant='outlined' />
                ))}
              </Box>
            )}

            <Box sx={{ display: 'flex', gap: 1, justifyContent: 'end' }}>
              {isMember ? (
                <>
                  <Button
                    variant='contained'
                    startIcon={<Add />}
                    onClick={onCreatePost}
                  >
                    Create Post
                  </Button>
                </>
              ) : hasRequestedJoin ? (
                <Button variant='outlined' onClick={onJoinLeave}>
                  Cancel Request
                </Button>
              ) : (
                <Button
                  variant='contained'
                  startIcon={<PersonAdd />}
                  onClick={onJoinLeave}
                >
                  {currentGroup.isPrivate ? 'Request to Join' : 'Join Group'}
                </Button>
              )}
            </Box>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default GroupHeader;
