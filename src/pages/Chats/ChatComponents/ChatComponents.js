import React, { useState, useEffect } from 'react';
import styles from './ChatComponents.module.css';
import Container from '@mui/material/Container';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import useMediaQuery from '@mui/material/useMediaQuery';
import ViewListIcon from '@mui/icons-material/ViewList';
import PrivateChat from '../PrivateChat/PrivateChat';
import io from 'socket.io-client';
import ChatList from '../ChatList/ChatList';
import { useSelector } from 'react-redux';
import {useDispatch} from 'react-redux';
import { chatsActions } from '../../../store/chatSlice';

const socket = io('http://localhost:8670/');


const drawerWidth = 240;
const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
    position: 'relative',
    zIndex: 10,
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

const ChatComponents = () => {
  const theme = useTheme();
  const dispatch = useDispatch()
  const isXs = useMediaQuery(theme.breakpoints.down('md'));
  const user = useSelector((state) => state.userLog.user?.user);
  const [open, setOpen] = useState(false);
  const [roomId, setRoomId] = useState()
  const [groupRoomId, setGroupRoomId] = useState()
  const [selected, setSelected] = useState(null)

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (user) {
      socket.emit('chatList', { userId: user._id });

      socket.on('allChatsLists', ({ chatLists }) => {
        console.log(chatLists)
      dispatch(
        chatsActions.getChatsList(chatLists)
      )
      });



      socket.on('error', (error) => {
        console.error(error.message);
      });

      
      return () => {
        socket.off('allChatsLists');
        socket.off('error');
      };
    }
  }, [user, dispatch]);


  useEffect(() => {
    if (!isXs) {
      // large screen
      setOpen(true);
    } else {
      // small screen
      setOpen(false);
    }
  }, [isXs]);

  return (
    <Container
      maxWidth='lg'
      className={styles.ChatComponents}
      sx={{ mt: 4, mb: 4 }}
    >
      <Box sx={{ display: 'flex', position: 'relative', overflowX: 'hidden' }}>
        <CssBaseline />
        <AppBar position='absolute' open={open}>
          <Toolbar>
            <IconButton
              color='inherit'
              aria-label='open drawer'
              onClick={handleDrawerOpen}
              edge='start'
              sx={{ mr: 2, ...(open && { display: 'none' }) }}
            >
              <ViewListIcon />
            </IconButton>
            <Typography variant='h6' noWrap component='div'>
              Persistent drawer
            </Typography>
          </Toolbar>
        </AppBar>

        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            position: 'relative',
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              boxSizing: 'border-box',
              position: 'absolute',
            },
          }}
          variant='persistent'
          anchor='left'
          open={open}
        >
          <DrawerHeader>
            <IconButton
              onClick={handleDrawerClose}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {theme.direction === 'ltr' ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <ChatList selected={selected} setSelected={setSelected}/>
        </Drawer>

        <Main open={open}>
          <DrawerHeader />
          <PrivateChat selected={selected}/>
        </Main>
      </Box>
    </Container>
  );
};

export default ChatComponents;
