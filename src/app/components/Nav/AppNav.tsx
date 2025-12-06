import React, { MouseEvent, useState } from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Menu,
  Container,
  Avatar,
  Tooltip,
  MenuItem,
  ListItemIcon,
  Divider,
  Button,
  useTheme,
  useMediaQuery,
  useScrollTrigger,
} from '@mui/material';
import {
  Settings as SettingsIcon,
  Logout as LogoutIcon,
  Dashboard as DashboardIcon,
  People as PeopleIcon,
  Chat as ChatIcon,
} from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { getRandomInt } from '../../../util/commons';
import useAppNavigate from '../../../util/useAppNavigation';
import { useAppSelector, useAppDispatch } from '../../hooks/app.hooks';
import { logoutUser } from '../../../features/auth/redux/slice/asyncThunkServices';

import Logo from '../../../public/images/logo.png';
import SwipeableMenuDrawer from './SwipeableMenuDrawer';

// === Types === //
interface NavItem {
  name: string;
  path: string;
  active: boolean;
}

const appNavItems: NavItem[] = [
  { name: 'Home', path: '/', active: true },
  { name: 'Recipes', path: '/recipes', active: false },
  { name: 'Community', path: '/communities', active: false },
  { name: 'Events', path: '/events', active: false },
  // { name: 'Communication', path: '/communication', active: false },
];

const AppNav: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useAppNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const { isAuthenticated, user } = useAppSelector((state) => state.auth);

  // menu dropdown anchor
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);

  // Add elevation on scroll for better UX
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => setAnchorEl(null);

  const logoutHandler = async (e: MouseEvent<HTMLLIElement | HTMLButtonElement>) => {
    e.preventDefault();
    handleClose();

    try {
      await dispatch(logoutUser()).unwrap();
      navigate('/login');
    } catch (error) {
      console.error('Logout failed:', error);
      navigate('/login');
    }
  };

  return (
    <AppBar
      position={isMobile ? 'sticky' : 'static'}
      elevation={trigger ? 4 : 0}
      sx={{
        bgcolor: 'background.paper',
        color: 'text.primary',
        borderBottom: 1,
        borderColor: 'divider',
        transition: 'box-shadow 0.3s ease-in-out',
      }}
    >
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{
            minHeight: { xs: 64, md: 80 },
            py: 1,
          }}
          >
          <Box sx={{
            display: 'flex',
            width: '100%'
          }}>
            {/* Logo */}
            <Box
              component={Link}
              to="/"
              sx={{
                display: 'flex',
                alignItems: 'center',
                textDecoration: 'none',
                mr: { xs: 2, md: 4 },
                width: { xs: 120, sm: 150, md: 180 },
              }}
            >
              <img
                src={Logo}
                alt="Foodie Logo"
                style={{ width: '100%', height: 'auto' }}
              />
            </Box>
  
            {/* Desktop Navigation */}
            {isAuthenticated && (
              <Box
                sx={{
                  flexGrow: 1,
                  display: { xs: 'none', md: 'flex' },
                  alignItems: 'center',
                  gap: 1,
                  justifyContent:'center',
                }}
              >
                {appNavItems.map((page) => (
                  <Button
                    key={getRandomInt()}
                    component={Link}
                    to={page.path}
                    sx={{
                      color: 'text.primary',
                      fontSize: '1rem',
                      fontWeight: 500,
                      textTransform: 'none',
                      px: 2,
                      py: 1,
                      '&:hover': {
                        bgcolor: 'action.hover',
                      },
                    }}
                  >
                    {page.name}
                  </Button>
                ))}
              </Box>
            )}
  
            {/* Mobile Menu */}
            {isAuthenticated && (
              <Box
                sx={{
                  // position:'absolute',
                  flexGrow: 1,
                  display: { xs: 'flex', md: 'none' },
                  alignItems: 'center',
                  justifyContent: 'flex-end'
                }}
              >
                <SwipeableMenuDrawer items={appNavItems} />
              </Box>
            )}
  
            {/* Right side - Auth buttons or Account menu */}
            <Box sx={{
              
            }}>

            </Box>
            {!isAuthenticated && (
              <Box sx={{ 
                display: 'flex', 
                flexGrow: 1, 
                justifyContent: 'flex-end' ,
                }}>
                <Button
                  component={Link}
                  to="/login"
                  variant="text"
                  sx={{
                    textTransform: 'none',
                    fontWeight: 600,
                    px: 3,
                    py: 1,
                  }}
                >
                  Login / Signup
                </Button>
              </Box>)}

              {/* only for desktop */}
              {(isAuthenticated &&
              <Box sx={{ flexGrow: 0,  display: { xs: 'none', md: 'flex' }, }}>
                <Tooltip title="Account settings">
                  <IconButton
                    onClick={handleClick}
                    size="small"
                    sx={{ ml: 2 }}
                    aria-controls={open ? 'account-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                  >
                    <Avatar
                      alt={`${user?.firstName ?? ''} ${user?.lastName ?? ''}`}
                      src={user?.avatar ?? ''}
                      sx={{
                        width: { xs: 36, md: 40 },
                        height: { xs: 36, md: 40 },
                        border: 2,
                        borderColor: open ? 'primary.main' : 'transparent',
                        transition: 'border-color 0.2s',
                      }}
                    />
                  </IconButton>
                </Tooltip>
  
                <Menu
                  anchorEl={anchorEl}
                  id="account-menu"
                  open={open}
                  onClose={handleClose}
                  onClick={handleClose}
                  PaperProps={{
                    elevation: 3,
                    sx: {
                      overflow: 'visible',
                      filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.15))',
                      mt: 1.5,
                      minWidth: 220,
                      '& .MuiAvatar-root': {
                        width: 32,
                        height: 32,
                        ml: -0.5,
                        mr: 1.5,
                      },
                      '&::before': {
                        content: '""',
                        display: 'block',
                        position: 'absolute',
                        top: 0,
                        right: 14,
                        width: 10,
                        height: 10,
                        bgcolor: 'background.paper',
                        transform: 'translateY(-50%) rotate(45deg)',
                        zIndex: 0,
                      },
                    },
                  }}
                  transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                  anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                >
                  {/* User Info Header */}
                  <Box sx={{ px: 2, py: 1.5, borderBottom: 1, borderColor: 'divider' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                      <Avatar
                        alt={`${user?.firstName ?? ''} ${user?.lastName ?? ''}`}
                        src={user?.avatar ?? ''}
                        sx={{ width: 40, height: 40 }}
                      />
                      <Box>
                        <Box sx={{ fontWeight: 600, fontSize: '0.95rem' }}>
                          {user?.firstName} {user?.lastName}
                        </Box>
                        <Box sx={{ fontSize: '0.8rem', color: 'text.secondary' }}>
                          {user?.email}
                        </Box>
                      </Box>
                    </Box>
                  </Box>
  
                  {/* Menu Items */}
                  <MenuItem
                    component={Link}
                    to="/dashboard"
                    onClick={handleClose}
                    sx={{ py: 1.5 }}
                  >
                    <ListItemIcon>
                      <DashboardIcon fontSize="small" />
                    </ListItemIcon>
                    Dashboard
                  </MenuItem>
  
                  <MenuItem
                    component={Link}
                    to="/communities"
                    onClick={handleClose}
                    sx={{ py: 1.5 }}
                  >
                    <ListItemIcon>
                      <PeopleIcon fontSize="small" />
                    </ListItemIcon>
                    Communities
                  </MenuItem>
  
                  <MenuItem
                    component={Link}
                    to="/communication"
                    onClick={handleClose}
                    sx={{ py: 1.5 }}
                  >
                    <ListItemIcon>
                      <ChatIcon fontSize="small" />
                    </ListItemIcon>
                    Communication
                  </MenuItem>
  
                  <Divider sx={{ my: 1 }} />
  
                  <MenuItem
                    component={Link}
                    to="/account"
                    onClick={handleClose}
                    sx={{ py: 1.5 }}
                  >
                    <ListItemIcon>
                      <SettingsIcon fontSize="small" />
                    </ListItemIcon>
                    Settings
                  </MenuItem>
  
                  <MenuItem onClick={logoutHandler} sx={{ py: 1.5, color: 'error.main' }}>
                    <ListItemIcon>
                      <LogoutIcon fontSize="small" color="error" />
                    </ListItemIcon>
                    Logout
                  </MenuItem>
                </Menu>
              </Box>
            )}
            </Box>

        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default AppNav;
