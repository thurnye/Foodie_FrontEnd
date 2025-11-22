import React, { useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Divider,
  IconButton,
  Avatar,
} from '@mui/material';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { Add, Check, Close } from '@mui/icons-material';
import { IGroup } from '../types/community.types';
import {
  groupNavItems,
  resources,
  generalRules,
  groupMemberRole,
} from '../mock/community.mock';

interface GroupLeftSidebarProps {
  currentGroup: IGroup;
  isMember: boolean;
  isCreator: boolean;
  userRole: string | undefined;
  groupId: string | undefined;
  onCreatePost: () => void;
  onApproveJoinRequest: (userId: string) => void;
  onRejectJoinRequest: (userId: string) => void;
}

const GroupLeftSidebar: React.FC<GroupLeftSidebarProps> = ({
  currentGroup,
  isMember,
  isCreator,
  userRole,
  groupId,
  onCreatePost,
  onApproveJoinRequest,
  onRejectJoinRequest,
}) => {
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <Card sx={{ mb: 2, borderRadius: 2 }}>
        <CardContent>
          <Box sx={{}}>
            <List component='div' disablePadding>
              {groupNavItems.map((rule) => (
                <ListItemButton sx={{}} key={rule.name}>
                  <ListItemIcon>{React.createElement(rule.icon)}</ListItemIcon>
                  <ListItemText primary={rule.name} />
                </ListItemButton>
              ))}
            </List>
          </Box>

          <Box sx={{ mt: 4, borderTop: '1px solid #e0e0e0', pt: 2 }}>
            {isMember && (
              <List component='div' disablePadding>
                <ListItemButton onClick={onCreatePost}>
                  <ListItemIcon>
                    <Add />
                  </ListItemIcon>
                  <ListItemText primary={'Create Post'} />
                </ListItemButton>
              </List>
            )}
          </Box>

          <Box sx={{ mt: 4, borderTop: '1px solid #e0e0e0', pt: 2 }}>
            <List
              sx={{
                width: '100%',
                bgcolor: 'background.paper',
              }}
              component='nav'
              aria-labelledby='nested-list-subheader'
            >
              <ListItemButton onClick={handleClick}>
                <ListItemText primary='RESOURCES' sx={{ color: '#3e3e3e' }} />
                {open ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={open} timeout='auto' unmountOnExit>
                <List component='div' disablePadding>
                  {resources.map((resource) => (
                    <ListItemButton sx={{ pl: 2 }} key={resource.name}>
                      <ListItemIcon>
                        {React.createElement(resource.icon)}
                      </ListItemIcon>
                      <ListItemText primary={resource.name} />
                    </ListItemButton>
                  ))}
                </List>
              </Collapse>
            </List>
          </Box>

          <Box sx={{ mt: 4, borderTop: '1px solid #e0e0e0', pt: 2 }}>
            <List component='div' disablePadding>
              {generalRules.map((rule) => (
                <ListItemButton sx={{}} key={rule.name}>
                  <ListItemIcon>{React.createElement(rule.icon)}</ListItemIcon>
                  <ListItemText primary={rule.name} />
                </ListItemButton>
              ))}
            </List>
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
                  (userId: string, index: number) => (
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
                          onClick={() => onApproveJoinRequest(userId)}
                        >
                          <Check fontSize='small' />
                        </IconButton>
                        <IconButton
                          size='small'
                          color='error'
                          onClick={() => onRejectJoinRequest(userId)}
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
    </>
  );
};

export default GroupLeftSidebar;
