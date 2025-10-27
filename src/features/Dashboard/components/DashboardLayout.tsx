import React, { useState, useEffect } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import {
  Box,
  Drawer,
  List,
  Typography,
  Divider,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import {
  Menu as MenuIcon,
  Dashboard as DashboardIcon,
  Event as EventIcon,
  Restaurant as RestaurantIcon,
  Bookmark as BookmarkIcon,
  ChevronLeft as ChevronLeftIcon,
  Settings as SettingsIcon,
} from '@mui/icons-material';

const drawerWidth = 260;

interface NavItem {
  title: string;
  path: string;
  icon: React.ReactNode;
}

const navItems: NavItem[] = [
  {
    title: 'Dashboard',
    path: '/dashboard',
    icon: <DashboardIcon />,
  },
  {
    title: 'Events',
    path: '/dashboard/events',
    icon: <EventIcon />,
  },
  {
    title: 'Recipes',
    path: '/dashboard/recipes',
    icon: <RestaurantIcon />,
  },
  {
    title: 'Saves & Bookmarks',
    path: '/dashboard/bookmarks',
    icon: <BookmarkIcon />,
  },
];

const DashboardLayout: React.FC = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mobileOpen, setMobileOpen] = useState(false);

  // Prevent body scrolling when dashboard is mounted
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleNavigation = (path: string) => {
    navigate(path);
    if (isMobile) {
      setMobileOpen(false);
    }
  };

  const drawer = (
    <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
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
        <Typography variant="h6" sx={{ color: 'white', fontWeight: 600 }}>
          Dashboard
        </Typography>
        {isMobile && (
          <IconButton onClick={handleDrawerToggle} sx={{ color: 'white' }}>
            <ChevronLeftIcon />
          </IconButton>
        )}
      </Box>
      <Divider sx={{ flexShrink: 0 }} />

      {/* Scrollable Navigation Container */}
      <Box sx={{ flexGrow: 1, overflow: 'auto', display: 'flex', flexDirection: 'column' }}>
        {/* Main Navigation */}
        <List sx={{ px: 1, py: 2, flexGrow: 1 }}>
          {navItems.map((item) => (
            <ListItem key={item.path} disablePadding sx={{ mb: 0.5 }}>
              <ListItemButton
                selected={location.pathname === item.path}
                onClick={() => handleNavigation(item.path)}
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
                    color: location.pathname === item.path ? 'white' : 'text.secondary',
                    minWidth: 40,
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.title}
                  primaryTypographyProps={{
                    fontSize: '0.9rem',
                    fontWeight: location.pathname === item.path ? 600 : 400,
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>

        {/* Settings at Bottom */}
        <Box sx={{ mt: 'auto' }}>
          <Divider />
          <List sx={{ px: 1, mb: 3, py:'auto' }}>
            <ListItem disablePadding>
              <ListItemButton
                selected={location.pathname === '/dashboard/settings'}
                onClick={() => handleNavigation('/dashboard/settings')}
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
                    color: location.pathname === '/dashboard/settings' ? 'white' : 'text.secondary',
                    minWidth: 40,
                  }}
                >
                  <SettingsIcon />
                </ListItemIcon>
                <ListItemText
                  primary="Settings"
                  primaryTypographyProps={{
                    fontSize: '0.9rem',
                    fontWeight: location.pathname === '/dashboard/settings' ? 600 : 400,
                  }}
                />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Box>
    </Box>
  );

  return (
    <Box sx={{ height: 'calc(100vh - 100px)', overflow: 'hidden' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
        {/* Mobile Menu Button */}
        {isMobile  && (
          <Box sx={{ p: 1, display: 'flex', justifyContent: 'flex-start' }}>
            <IconButton
              onClick={handleDrawerToggle}
              sx={{
                borderTopLeftRadius: 0,
                borderBottomLeftRadius: 0,
                bgcolor: '#1a1a2e',
                color: 'white',
                ml: -1,
                '&:hover': {
                  bgcolor: '#252540',
                },
              }}
            >
              <DashboardIcon />
            </IconButton>
          </Box>
        )}

        {/* Main Layout */}
        <Box sx={{ display: 'flex', position: 'relative', flexGrow: 1, overflow: 'hidden' }}>
          {/* Drawer */}
          <Box
            component="nav"
            sx={{
              width: { md: drawerWidth },
              flexShrink: { md: 0 },
            }}
          >
          {/* Mobile Drawer */}
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true,
            }}
            sx={{
              display: { xs: 'block', md: 'none' },
              '& .MuiDrawer-paper': {
                boxSizing: 'border-box',
                width: drawerWidth,
                border: 'none',
                top: '100px',
                height: 'calc(100vh - 100px)',
                boxShadow: '2px 0 8px rgba(0,0,0,0.15)',
              },
            }}
          >
            {drawer}
          </Drawer>

          {/* Desktop Drawer */}
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: 'none', md: 'block' },
              '& .MuiDrawer-paper': {
                boxSizing: 'border-box',
                width: drawerWidth,
                border: 'none',
                position: 'relative',
                height: 'calc(100vh - 100px)',
                borderRadius: 2,
                boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
              },
            }}
            open
          >
            {drawer}
          </Drawer>
        </Box>

        {/* Main Content */}
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: { xs: 2, md: 3 },
            width: { md: `calc(100% - ${drawerWidth}px)` },
            height: '100%',
            backgroundColor: '#f8f9fa',
            ml: { md: 2 },
            borderRadius: 2,
            overflow: 'auto',
          }}
        >
          <Outlet />
        </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default DashboardLayout;
