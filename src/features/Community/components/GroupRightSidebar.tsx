import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Divider,
  IconButton,
  Menu,
  MenuItem,
  Avatar,
  Stack,
} from '@mui/material';
import {
  Settings,
  Check,
  Close,
  PersonRemove,
} from '@mui/icons-material';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import { IGroup, ICommunityUser } from '../types/community.types';
import { groupMemberRole } from '../mock/community.mock';

interface GroupRightSidebarProps {
  currentGroup: IGroup;
  isCreator: boolean;
  userRole: string | undefined;
  userId: string | undefined;
  groupId: string | undefined;
  onApproveJoinRequest: (userId: string) => void;
  onRejectJoinRequest: (userId: string) => void;
  onHandleJoinLeave: () => void;
}

const GroupRightSidebar: React.FC<GroupRightSidebarProps> = ({
  currentGroup,
  isCreator,
  userRole,
  userId,
  groupId,
  onApproveJoinRequest,
  onRejectJoinRequest,
  onHandleJoinLeave,
}) => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  return (
    <>
      {/* About */}
      <Card sx={{ mb: 2, borderRadius: 2 }}>
        <CardContent>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography variant='h6' fontWeight='bold' gutterBottom>
              About Community
            </Typography>
            <Box>
              {(isCreator ||
                userRole === groupMemberRole.ADMIN ||
                userRole === groupMemberRole.MODERATOR) && (
                <IconButton onClick={(e) => setAnchorEl(e.currentTarget)}>
                  <Settings />
                </IconButton>
              )}
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={() => setAnchorEl(null)}
              >
                <MenuItem
                  onClick={() =>
                    navigate(`/communities/groups/${groupId}/settings`)
                  }
                >
                  Group Settings
                </MenuItem>
                <MenuItem
                  onClick={() =>
                    navigate(`/communities/groups/${groupId}/members`)
                  }
                >
                  Manage Members
                </MenuItem>
              </Menu>
            </Box>
          </Box>
          <Divider sx={{ mb: 2 }} />
          <Typography variant='body2' color='text.secondary' sx={{ mb: 2 }}>
            {currentGroup.description}
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography variant='body2' color='text.secondary'>
                Members
              </Typography>
              <Typography variant='body2' fontWeight='bold'>
                {currentGroup.memberCount}
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography variant='body2' color='text.secondary'>
                Posts
              </Typography>
              <Typography variant='body2' fontWeight='bold'>
                {currentGroup.postCount}
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography variant='body2' color='text.secondary'>
                Created
              </Typography>
              <Typography variant='body2' fontWeight='bold'>
                {new Date(currentGroup.createdAt).toLocaleDateString()}
              </Typography>
            </Box>
          </Box>
        </CardContent>
      </Card>

      {/* Join Requests (Admin/Moderator only) */}
      {(isCreator ||
        userRole === groupMemberRole.ADMIN ||
        userRole === groupMemberRole.MODERATOR) &&
        currentGroup.joinRequest &&
        currentGroup.joinRequest.length > 0 && (
          <Card sx={{ mb: 2, borderRadius: 2 }}>
            <CardContent>
              <Typography variant='h6' fontWeight='bold' gutterBottom>
                Join Requests ({currentGroup.joinRequest.length})
              </Typography>
              <Divider sx={{ mb: 2 }} />
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 1.5,
                }}
              >
                {currentGroup.joinRequest.map(
                  (requestUserId: string, index: number) => (
                    <Box
                      key={index}
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                      }}
                    >
                      <Avatar sx={{ width: 32, height: 32 }}>{index + 1}</Avatar>
                      <Box sx={{ flex: 1 }}>
                        <Typography variant='body2' fontWeight='bold'>
                          User {index + 1}
                        </Typography>
                        <Typography variant='caption' color='text.secondary'>
                          Pending
                        </Typography>
                      </Box>
                      <Box sx={{ display: 'flex', gap: 0.5 }}>
                        <IconButton
                          size='small'
                          color='success'
                          onClick={() => onApproveJoinRequest(requestUserId)}
                        >
                          <Check fontSize='small' />
                        </IconButton>
                        <IconButton
                          size='small'
                          color='error'
                          onClick={() => onRejectJoinRequest(requestUserId)}
                        >
                          <Close fontSize='small' />
                        </IconButton>
                      </Box>
                    </Box>
                  )
                )}
              </Box>
            </CardContent>
          </Card>
        )}

      {/* Rules */}
      {currentGroup.rules && currentGroup.rules.length > 0 && (
        <Card sx={{ mb: 2, borderRadius: 2 }}>
          <CardContent>
            <Typography variant='h6' fontWeight='bold' gutterBottom>
              Community Rules
            </Typography>
            <Divider sx={{ mb: 2 }} />
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
              {currentGroup.rules.map((rule: string, index: number) => (
                <Box key={index}>
                  <Typography variant='body2' fontWeight='bold'>
                    {index + 1}. Rule {index + 1}
                  </Typography>
                  <Typography variant='body2' color='text.secondary'>
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
          <Typography variant='h6' fontWeight='bold' gutterBottom>
            Moderators
          </Typography>
          <Divider sx={{ mb: 2 }} />
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
            {currentGroup.members
              .filter(
                (m: any) =>
                  m.role === groupMemberRole.ADMIN ||
                  m.role === groupMemberRole.MODERATOR
              )
              .map((member: any, index: number) => {
                const memberUser = member.user as ICommunityUser;
                const isMe = memberUser._id === userId;
                return (
                  <Box
                    key={index}
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      '&:hover .member-actions': {
                        opacity: 1,
                      },
                    }}
                  >
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                      }}
                    >
                      <Avatar src={memberUser?.avatar} sx={{ width: 32, height: 32 }}>
                        {memberUser?.firstName?.[0]}
                      </Avatar>
                      <Box sx={{ flex: 1 }}>
                        <Typography variant='body2' fontWeight='bold'>
                          {isMe
                            ? 'You'
                            : `${memberUser?.firstName} ${memberUser?.lastName}`}
                        </Typography>
                        <Typography variant='caption' color='text.secondary'>
                          {member.role}
                        </Typography>
                      </Box>
                    </Box>
                    {/* member actions */}
                    <Box
                      className='member-actions'
                      sx={{
                        opacity: 0,
                        transition: 'opacity 0.2s ease-in-out',
                      }}
                    >
                      <Stack direction='row' spacing={1}>
                        {!isMe && (
                          <IconButton size='small'>
                            <ChatBubbleOutlineIcon
                              fontSize='small'
                              color='primary'
                            />
                          </IconButton>
                        )}
                        <IconButton size='small' onClick={onHandleJoinLeave}>
                          <PersonRemove fontSize='small' color='error' />
                        </IconButton>
                      </Stack>
                    </Box>
                  </Box>
                );
              })}
          </Box>
          <Typography
            variant='h6'
            fontWeight='bold'
            gutterBottom
            sx={{ mt: 4 }}
          >
            Members
          </Typography>
          <Divider sx={{ mb: 2 }} />
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
            {currentGroup.members
              .filter((m: any) => m.role === groupMemberRole.MEMBER)
              .map((member: any, index: number) => {
                const memberUser = member.user as ICommunityUser;
                const isMe = memberUser._id === userId;
                return (
                  <Box
                    key={index}
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      '&:hover .member-actions': {
                        opacity: 1,
                      },
                    }}
                  >
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                      }}
                    >
                      <Avatar src={memberUser?.avatar} sx={{ width: 32, height: 32 }}>
                        {memberUser?.firstName?.[0]}
                      </Avatar>
                      <Box sx={{ flex: 1 }}>
                        <Typography variant='body2' fontWeight='bold'>
                          {isMe
                            ? 'You'
                            : `${memberUser?.firstName} ${memberUser?.lastName}`}
                        </Typography>
                        <Typography variant='caption' color='text.secondary'>
                          {member.role}
                        </Typography>
                      </Box>
                    </Box>
                    {/* members interactions */}
                    <Box
                      className='member-actions'
                      sx={{
                        opacity: 0,
                        transition: 'opacity 0.2s ease-in-out',
                      }}
                    >
                      <Stack direction='row' spacing={1}>
                        {!isMe && (
                          <IconButton size='small'>
                            <ChatBubbleOutlineIcon
                              fontSize='small'
                              color='primary'
                            />
                          </IconButton>
                        )}
                        {(userRole === groupMemberRole.ADMIN ||
                          userRole === groupMemberRole.MODERATOR) && (
                          <IconButton size='small'>
                            <AdminPanelSettingsIcon
                              fontSize='small'
                              color='primary'
                            />
                          </IconButton>
                        )}
                        <IconButton size='small' onClick={onHandleJoinLeave}>
                          <PersonRemove fontSize='small' color='error' />
                        </IconButton>
                      </Stack>
                    </Box>
                  </Box>
                );
              })}
          </Box>
        </CardContent>
      </Card>
    </>
  );
};

export default GroupRightSidebar;
