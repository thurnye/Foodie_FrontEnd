import React from 'react';
import {
  Drawer,
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  IconButton,
  Button,
  Divider,
  Chip,
} from '@mui/material';
import {
  Close as CloseIcon,
  Notifications as NotificationsIcon,
  DoneAll as DoneAllIcon,
} from '@mui/icons-material';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../app/stores/stores';
import {
  toggleNotifications,
  markNotificationAsRead,
  markAllNotificationsAsRead,
} from '../redux/communication.slice';
import { formatDistanceToNow } from 'date-fns';

const NotificationsPanel: React.FC = () => {
  const dispatch = useDispatch();
  const { showNotifications, notifications, settings } = useSelector(
    (state: RootState) => state.communication
  );

  const unreadNotifications = notifications.filter((n) => !n.isRead);

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case 'mention':
        return '💬';
      case 'message':
        return '📩';
      case 'meeting':
        return '📅';
      default:
        return '🔔';
    }
  };

  return (
    <Drawer
      anchor="right"
      open={showNotifications}
      onClose={() => dispatch(toggleNotifications())}
      sx={{
        '& .MuiDrawer-paper': {
          width: 360,
          bgcolor: settings.theme === 'dark' ? 'grey.800' : 'background.paper',
        },
      }}
    >
      <Box sx={{ p: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <NotificationsIcon />
          <Typography variant="h6">Notifications</Typography>
          {unreadNotifications.length > 0 && (
            <Chip label={unreadNotifications.length} size="small" color="error" />
          )}
        </Box>
        <IconButton size="small" onClick={() => dispatch(toggleNotifications())}>
          <CloseIcon />
        </IconButton>
      </Box>

      <Divider />

      {unreadNotifications.length > 0 && (
        <>
          <Box sx={{ p: 2 }}>
            <Button
              startIcon={<DoneAllIcon />}
              fullWidth
              variant="outlined"
              size="small"
              onClick={() => dispatch(markAllNotificationsAsRead())}
            >
              Mark all as read
            </Button>
          </Box>
          <Divider />
        </>
      )}

      <List sx={{ flex: 1, overflow: 'auto' }}>
        {notifications.length === 0 ? (
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              p: 4,
              gap: 2,
            }}
          >
            <NotificationsIcon sx={{ fontSize: 48, color: 'text.secondary' }} />
            <Typography variant="body2" color="text.secondary" align="center">
              No notifications yet
            </Typography>
          </Box>
        ) : (
          notifications.map((notification) => (
            <React.Fragment key={notification._id}>
              <ListItem
                sx={{
                  bgcolor: notification.isRead
                    ? 'transparent'
                    : settings.theme === 'dark'
                    ? 'grey.700'
                    : 'action.hover',
                  cursor: 'pointer',
                  '&:hover': {
                    bgcolor: settings.theme === 'dark' ? 'grey.600' : 'action.selected',
                  },
                }}
                onClick={() => dispatch(markNotificationAsRead(notification._id))}
              >
                <ListItemAvatar>
                  <Avatar
                    sx={{
                      bgcolor: settings.theme === 'dark' ? 'grey.600' : 'grey.200',
                    }}
                  >
                    {getNotificationIcon(notification.type)}
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <Typography variant="subtitle2" fontWeight={notification.isRead ? 400 : 600}>
                      {notification.title}
                    </Typography>
                  }
                  secondary={
                    <>
                      <Typography variant="body2" color="text.secondary">
                        {notification.message}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        {formatDistanceToNow(new Date(notification.createdAt), { addSuffix: true })}
                      </Typography>
                    </>
                  }
                />
                {!notification.isRead && (
                  <Box
                    sx={{
                      width: 8,
                      height: 8,
                      borderRadius: '50%',
                      bgcolor: 'primary.main',
                      ml: 1,
                    }}
                  />
                )}
              </ListItem>
              <Divider />
            </React.Fragment>
          ))
        )}
      </List>
    </Drawer>
  );
};

export default NotificationsPanel;
