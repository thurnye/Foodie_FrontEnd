import React, { MouseEvent, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import CardMedia from '@mui/material/CardMedia';
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

const appNav: NavItem[] = [
  { name: 'Home', path: '/', active: true },
  { name: 'Recipes', path: '/recipes', active: false },
  { name: 'Community', path: '/communities', active: false },
  { name: 'Events', path: '/events', active: false },
  { name: 'Communication', path: '/communication', active: false },
];

const AccountMenu: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useAppNavigate();

  const { isAuthenticated, user } = useAppSelector((state) => state.auth);

  // menu dropdown anchor
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);

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
    <Container maxWidth="xl">
      <AppBar
        position="static"
        sx={{
          background: 'none',
          color: '#000000A6',
          boxShadow: 'none',
          border: 'none',
          mt: 2,
        }}
      >
        <Container maxWidth="xl">
          <Box sx={{ width: 200 }}>
            <CardMedia component="img" image={Logo} alt="Logo" />
          </Box>

          <Toolbar disableGutters>
            {/* Mobile Menu */}
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <SwipeableMenuDrawer items={appNav} />
            </Box>

            {/* Desktop Menu */}
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {appNav.map((page) => (
                <Box key={getRandomInt()} sx={{ m: 2, fontSize: 20 }}>
                  <Link to={page.path} style={{ color: '#000000A6' }}>
                    {page.name}
                  </Link>
                </Box>
              ))}
            </Box>

            {/* Right side */}
            {!isAuthenticated ? (
              <Link to="/login">Login / Signup</Link>
            ) : (
              <Box sx={{ flexGrow: 0 }}>
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
                    elevation: 0,
                    sx: {
                      overflow: 'visible',
                      filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                      mt: 1.5,
                      '& .MuiAvatar-root': {
                        width: 32,
                        height: 32,
                        ml: -0.5,
                        mr: 1,
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
                  <MenuItem onClick={handleClose}>Manage account</MenuItem>

                  <MenuItem>
                    <Link to="/dashboard">Dashboard</Link>
                  </MenuItem>
                  <MenuItem>
                    <Link to="/communities">Communities</Link>
                  </MenuItem>
                  <MenuItem>
                    <Link to="/communication">Communications</Link>
                  </MenuItem>

                  <Divider />

                  <MenuItem>
                    <Link to="/account">
                      <ListItemIcon>
                        <Settings fontSize="small" />
                      </ListItemIcon>
                      Settings
                    </Link>
                  </MenuItem>

                  <MenuItem onClick={logoutHandler}>
                    <ListItemIcon>
                      <Logout fontSize="small" />
                    </ListItemIcon>
                    Logout
                  </MenuItem>
                </Menu>
              </Box>
            )}
          </Toolbar>
        </Container>
      </AppBar>
    </Container>
  );
};

export default AccountMenu;
