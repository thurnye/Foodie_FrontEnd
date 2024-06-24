import React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Container from '@mui/material/Container';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Outlet} from 'react-router-dom';
import GroupInfo from '../GroupInfo/GroupInfo';

const drawerWidth = 240;

const Main = styled('main', {
  shouldForwardProp: (prop) => prop !== 'openDrawer',
})(({ theme, openDrawer, isXs }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginRight: isXs ? -drawerWidth : -drawerWidth,
  overFlowX: 'hidden',
  ...(openDrawer && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: 0,
  }),
  position: 'relative',
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'openDrawer',
})(({ theme, openDrawer }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(openDrawer && {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-start',
}));

export default function SingleGroupContainer() {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down('md'));
  const [openDrawer, setOpenDrawer] = React.useState(false);



  const handleDrawerOpenDrawer = () => {
    setOpenDrawer(true);
  };

  const handleDrawerClose = () => {
    setOpenDrawer(false);
  };

  React.useEffect(() => {
    console.log(isXs);
    if (!isXs) {
      // large screen
      setOpenDrawer(true);
    } else {
      // small screen
      setOpenDrawer(false);
    }
  }, [isXs]);

  return (
    <Container maxWidth='lg' sx={{ mt: 4, mb: 4 }}>
      <Box sx={{ display: 'flex', position: 'relative', overflowX: 'hidden' }}>
        <CssBaseline />
        <AppBar
          position='absolute'
          openDrawer={openDrawer}
          sx={{ background: 'none', boxShadow: 'none', color: '#a4a4a4' }}
        >
          <Toolbar>
            <Typography
              noWrap
              sx={{ flexGrow: 1 }}
              component='div'
            />
            <IconButton
              color='inherit'
              aria-label='openDrawer drawer'
              edge='end'
              onClick={handleDrawerOpenDrawer}
              sx={{ ...(openDrawer && { display: 'none' }) }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Main openDrawer={openDrawer} isXs={isXs}>
          {/* <DrawerHeader /> */}
          <Outlet />
        </Main>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            position: 'relative',
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              position: 'absolute',
              boxSizing: 'border-box',
            },
          }}
          variant='persistent'
          anchor='right'
          open={openDrawer}
        >
          <DrawerHeader sx={{ display: { xs: 'block', md: 'none' } }}>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'rtl' ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <GroupInfo />
        </Drawer>
      </Box>
    </Container>
  );
}
