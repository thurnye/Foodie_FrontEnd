import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton,
  Typography,
  Divider,
  Avatar,
} from '@mui/material';
import {
  Menu as MenuIcon,
  ChevronRight as ChevronRightIcon,
  Home as HomeIcon,
  Restaurant as RestaurantIcon,
  People as PeopleIcon,
  Event as EventIcon,
  Dashboard as DashboardIcon,
  Settings as SettingsIcon,
  Logout as LogoutIcon,
  Chat as ChatIcon,
} from '@mui/icons-material';
import { useAppSelector, useAppDispatch } from '../../hooks/app.hooks';
import { logoutUser } from '../../../features/auth/redux/slice/asyncThunkServices';

// === Types === //
export interface NavItem {
  name: string;
  path: string;
}

interface SwipeableMenuDrawerProps {
  items: NavItem[];
}

const drawerWidth = 260;

// Map nav items to icons
const getIcon = (name: string) => {
  switch (name.toLowerCase()) {
    case 'home':
      return <HomeIcon />;
    case 'recipes':
      return <RestaurantIcon />;
    case 'community':
    case 'communities':
      return <PeopleIcon />;
    case 'events':
      return <EventIcon />;
    case 'communication':
      return <ChatIcon />;
    default:
      return <HomeIcon />;
  }
};

const SwipeableMenuDrawer: React.FC<SwipeableMenuDrawerProps> = ({ items }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useAppDispatch();
  const [open, setOpen] = useState<boolean>(false);
  const { user } = useAppSelector((state) => state.auth);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const handleNavigate = (path: string) => {
    navigate(path);
    setOpen(false);
  };

  const handleLogout = async () => {
    try {
      await dispatch(logoutUser()).unwrap();
      navigate('/login');
    } catch (error) {
      console.error('Logout failed:', error);
      navigate('/login');
    }
  };

  const drawer = (
    <Box
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
      }}
    >
      {/* Header */}
      <Box
        sx={{
          p: 2.5,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          bgcolor: '#1a1a2e',
          flexShrink: 0,
        }}
      >
        <Typography variant='h6' sx={{ color: 'white', fontWeight: 600 }}>
          Menu
        </Typography>
        <IconButton onClick={toggleDrawer} sx={{ color: 'white' }}>
          <ChevronRightIcon />
        </IconButton>
      </Box>

      {/* Scrollable Navigation */}
      <Box
        sx={{
          flexGrow: 1,
          overflow: 'auto',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/* Main Navigation */}
        <List sx={{ px: 1, py: 2, pt: 5, flexGrow: 1 }}>
          {items.map((item) => (
            <ListItem key={item.path} disablePadding sx={{ mb: 2 }}>
              <ListItemButton
                selected={location.pathname === item.path}
                onClick={() => handleNavigate(item.path)}
                sx={{
                  borderRadius: 1.5,
                  '&.Mui-selected': {
                    backgroundColor: '#1a1a2e',
                    color: 'white',
                    '&:hover': {
                      backgroundColor: '#252540',
                    },
                    '& .MuiListItemIcon-root': {
                      color: 'white',
                    },
                  },
                  '&:hover': {
                    backgroundColor: 'rgba(26, 26, 46, 0.08)',
                  },
                }}
              >
                <ListItemIcon
                  sx={{
                    color:
                      location.pathname === item.path
                        ? 'white'
                        : 'text.secondary',
                    minWidth: 40,
                  }}
                >
                  {getIcon(item.name)}
                </ListItemIcon>
                <ListItemText
                  primary={item.name}
                  primaryTypographyProps={{
                    fontSize: '0.9rem',
                    fontWeight: location.pathname === item.path ? 600 : 400,
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}

          <ListItem disablePadding sx={{ mb: 2 }}>
            <ListItemButton
              selected={location.pathname === '/dashboard'}
              onClick={() => handleNavigate('/dashboard')}
              sx={{
                borderRadius: 1.5,
                '&.Mui-selected': {
                  backgroundColor: '#1a1a2e',
                  color: 'white',
                  '&:hover': {
                    backgroundColor: '#252540',
                  },
                  '& .MuiListItemIcon-root': {
                    color: 'white',
                  },
                },
                '&:hover': {
                  backgroundColor: 'rgba(26, 26, 46, 0.08)',
                },
              }}
            >
              <ListItemIcon
                sx={{
                  color:
                    location.pathname === '/dashboard'
                      ? 'white'
                      : 'text.secondary',
                  minWidth: 40,
                }}
              >
                <DashboardIcon />
              </ListItemIcon>
              <ListItemText
                primary='Dashboard'
                primaryTypographyProps={{
                  fontSize: '0.9rem',
                  fontWeight: location.pathname === '/dashboard' ? 600 : 400,
                }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding sx={{ mb: 2 }}>
            <ListItemButton
              selected={location.pathname === '/communication'}
              onClick={() => handleNavigate('/communication')}
              sx={{
                borderRadius: 1.5,
                '&.Mui-selected': {
                  backgroundColor: '#1a1a2e',
                  color: 'white',
                  '&:hover': {
                    backgroundColor: '#252540',
                  },
                  '& .MuiListItemIcon-root': {
                    color: 'white',
                  },
                },
                '&:hover': {
                  backgroundColor: 'rgba(26, 26, 46, 0.08)',
                },
              }}
            >
              <ListItemIcon
                sx={{
                  color:
                    location.pathname === '/communication'
                      ? 'white'
                      : 'text.secondary',
                  minWidth: 40,
                }}
              >
                <ChatIcon />
              </ListItemIcon>
              <ListItemText
                primary='Communication'
                primaryTypographyProps={{
                  fontSize: '0.9rem',
                  fontWeight: location.pathname === '/account' ? 600 : 400,
                }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding sx={{ mb: 2 }}>
            <ListItemButton
              selected={location.pathname === '/account'}
              onClick={() => handleNavigate('/account')}
              sx={{
                borderRadius: 1.5,
                '&.Mui-selected': {
                  backgroundColor: '#1a1a2e',
                  color: 'white',
                  '&:hover': {
                    backgroundColor: '#252540',
                  },
                  '& .MuiListItemIcon-root': {
                    color: 'white',
                  },
                },
                '&:hover': {
                  backgroundColor: 'rgba(26, 26, 46, 0.08)',
                },
              }}
            >
              <ListItemIcon
                sx={{
                  color:
                    location.pathname === '/account'
                      ? 'white'
                      : 'text.secondary',
                  minWidth: 40,
                }}
              >
                <SettingsIcon />
              </ListItemIcon>
              <ListItemText
                primary='Settings'
                primaryTypographyProps={{
                  fontSize: '0.9rem',
                  fontWeight: location.pathname === '/account' ? 600 : 400,
                }}
              />
            </ListItemButton>
          </ListItem>
        </List>

        {/* Bottom Section */}

        <Divider sx={{ flexShrink: 0 }} />

        {/* User Info */}
        {user && (
          <Box sx={{ p: 2, borderBottom: 1, borderColor: 'divider' }}>
            <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5 }}>
              <Avatar
                alt={`${user?.firstName ?? ''} ${user?.lastName ?? ''}`}
                src={user?.avatar ?? ''}
                sx={{ width: 40, height: 40 }}
              />
              <Box>
                <Typography sx={{ fontWeight: 600, fontSize: '0.95rem' }}>
                  {user?.firstName} {user?.lastName}
                </Typography>
                <Typography
                  sx={{ fontSize: '0.8rem', color: 'text.secondary' }}
                >
                  {user?.email}
                </Typography>
                <Box>
                  <List>
                    <ListItem disablePadding>
                      <ListItemButton
                        onClick={handleLogout}
                        sx={{
                          borderRadius: 1.5,
                          color: 'error.main',
                          '&:hover': {
                            backgroundColor: 'rgba(211, 47, 47, 0.08)',
                          },
                        }}
                      >
                        <ListItemIcon
                          sx={{
                            color: 'error.main',
                            minWidth: 40,
                          }}
                        >
                          <LogoutIcon />
                        </ListItemIcon>
                        <ListItemText
                          primary='Logout'
                          primaryTypographyProps={{
                            fontSize: '0.9rem',
                            fontWeight: 400,
                          }}
                        />
                      </ListItemButton>
                    </ListItem>
                  </List>
                </Box>
              </Box>
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );

  return (
    <Box>
      <IconButton
        size='large'
        aria-label='open navigation menu'
        aria-controls='menu-appbar'
        aria-haspopup='true'
        onClick={toggleDrawer}
        color='inherit'
      >
        <MenuIcon />
      </IconButton>

      <Drawer
        anchor='right'
        open={open}
        onClose={toggleDrawer}
        sx={{
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: drawerWidth,
            border: 'none',
            boxShadow: '2px 0 8px rgba(0,0,0,0.15)',
          },
        }}
      >
        {drawer}
      </Drawer>
    </Box>
  );
};

export default SwipeableMenuDrawer;
