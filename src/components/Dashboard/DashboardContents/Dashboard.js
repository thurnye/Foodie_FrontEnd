// https://mui.com/material-ui/getting-started/templates/
import React from 'react';
import styles from './Dashboard.module.css';
import { Outlet, Link, useNavigate } from 'react-router-dom';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MainListItems from './listItems';
import SearchEvent from './SearchEvent/SearchEvent';
import { Avatar } from '@mui/material';
import { useSelector } from 'react-redux';

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: 1,
  background: '#f3f3f3',
  color: 'black',
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  '& .MuiDrawer-paper': {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: 'border-box',
    ...(!open && {
      overflowX: 'hidden',
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: 0,
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

const Dashboard = () => {
  const user = useSelector((state) => state.userLog?.user?.user);
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const [header, setHeader] = React.useState('Dashboard');
  const [openMobile, setOpenMobile] = React.useState(false);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  console.log(user)
  const avatarContainer = () => <Box sx={{mt: 2, mb: 3}}>
  <Avatar
    alt={'Text'}
    src={user?.avatar}
    sx={{
      width: open ? 70 : 50,
      height: open ? 70 : 50,
      m: 'auto',
      cursor: 'pointer'
    }}
    onClick={() => {
      navigate('/account/profile');
      setHeader('Profile Settings')
    }}
  />
  <Typography variant='body2' sx={{display : open  ? 'block' : 'none', textAlign: 'center', mt: -0.2}}>{user?.firstName}</Typography>
  <Typography variant='body2' sx={{display : open ? 'block' : 'none', textAlign: 'center', mt: -0.5}}>{user?.lastName}</Typography>
</Box>

  return (
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{ display: 'flex', position: 'relative' }}>
        <CssBaseline />
        <AppBar position='absolute' open={open}>
          <Toolbar
            sx={{
              pr: '24px', // keep right padding when drawer closed
            }}
          >
            <IconButton
              edge='start'
              color='inherit'
              aria-label='open drawer'
              onClick={() => setOpenMobile(!openMobile)}
              sx={{
                display: { xs: 'block', sm: 'none' },
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component='h1'
              variant='h6'
              color='inherit'
              noWrap
              sx={{ flexGrow: 1, ml: { xs: 0, sm: open ? 0 : 7 } }}
            >
              {header}
            </Typography>
            <SearchEvent />
            <Link to={'/account/notification'}>
              <IconButton sx={{ color: '#616264ee' }} onClick={() => setHeader('Notifications')}>
                <Badge badgeContent={4} color='secondary'>
                  <NotificationsIcon />
                </Badge>
              </IconButton>
            </Link>
          </Toolbar>
        </AppBar>

        {/* Mobile */}
        <Drawer
          variant='permanent'
          open={openMobile}
          sx={{ display: { xs: 'block', sm: 'none' } }}
        >
          <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              px: [1],
            }}
          >
            <IconButton onClick={() => setOpenMobile(!openMobile)}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <List component='nav' sx={{
              flexGrow: 1,
            }}>
            {/* {mainListItems} */}
            <MainListItems header={header} setHeader={setHeader} />
            <Divider sx={{ my: 1 }} />
            {/* {secondaryListItems} */}
          </List>
          {avatarContainer()}
        </Drawer>

        {/* Potrait, large screens */}
        <Drawer
          variant='permanent'
          open={open}
          sx={{ display: { xs: 'none', sm: 'block' } }}
        >
          <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <List
            component='nav'
            sx={{
              flexGrow: 1,
            }}
          >
            {/* {mainListItems} */}
            <MainListItems header={header} setHeader={setHeader} />
            <Divider sx={{ my: 1 }} />
            {/* {secondaryListItems} */}
          </List>
            {avatarContainer()}
        </Drawer>

        <Box
          component='main'
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            overflow: 'auto',
            height: {xs: 'initial', lg: '85vh'}
          }}
        >
          <Toolbar />
          <Outlet />
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Dashboard;
