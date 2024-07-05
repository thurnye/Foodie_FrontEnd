import React, { useState, useEffect } from 'react';
import styles from './ChatComponents.module.css';
import Container from '@mui/material/Container';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import useMediaQuery from '@mui/material/useMediaQuery';
import ViewListIcon from '@mui/icons-material/ViewList';
import PrivateChat from '../PrivateChat/PrivateChat';
import io from 'socket.io-client';
import ChatList from '../ChatList/ChatList';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { chatsActions } from '../../../store/chatSlice';
import Tooltip from '@mui/material/Tooltip';
import CreateGroup from '../../../components/CreateGroup/CreateGroup';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
// import VideoCallIcon from '@mui/icons-material/VideoCall';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import AddGroupMember from './AddGroupMember';
import PrivateGroupInfo from '../privateGroupInfo/privateGroupInfo';
// import VideoContainer from '../VideoContainer/VideoContainer' do not delete

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
  justifyContent: { xs: 'space-between', md: 'flex-end' },
}));

const ChatComponents = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const isXs = useMediaQuery(theme.breakpoints.down('md'));
  const user = useSelector((state) => state.userLog.user?.user);
  const selected = useSelector((state) => state.chatData.activeChat);
  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [openGroupInfo, setOpenGroupInfo] = useState(false);
  // const [selected, setSelected] = useState(null);
  const [typingUser, setTypingUser] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const openMenu = Boolean(anchorEl);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (user) {
      socket.emit('chatList', { userId: user._id });

      socket.on('allChatsLists', ({ chatLists, groupList, allList }) => {
        console.log('allList::', allList);
        dispatch(chatsActions.getChatsList(allList));
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


  console.log("selected::", selected)


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
            <Tooltip title='Create Group'>
              <IconButton
                color='inherit'
                aria-label='open drawer'
                onClick={handleDrawerOpen}
                edge='start'
                sx={{ mr: 2, ...(open && { display: 'none' }) }}
              >
                <ViewListIcon />
              </IconButton>
            </Tooltip>
            {selected && (
              <>
                <Box sx={{ flexGrow: 1 }}>
                  <Card
                    sx={{
                      border: 'none',
                      boxShadow: 'none',
                    }}
                  >
                    <CardHeader
                      avatar={
                        <Avatar
                          alt={`${selected.firstName}`}
                          src={selected.avatar}
                          sx={{ width: 30, height: 30 }}
                        />
                      }
                      action={
                        <>
                          <IconButton
                            aria-label='more'
                            id='long-button'
                            aria-controls={openMenu ? 'long-menu' : undefined}
                            aria-expanded={openMenu ? 'true' : undefined}
                            aria-haspopup='true'
                            onClick={(event) =>
                              selected.type !== 'singleChat' && setAnchorEl(event.currentTarget)
                            }
                          >
                            <MoreVertIcon />
                          </IconButton>
                          <Menu
                            id='basic-menu'
                            anchorEl={anchorEl}
                            open={openMenu}
                            onClose={() => setAnchorEl(null)}
                            MenuListProps={{
                              'aria-labelledby': 'basic-button',
                            }}
                          >
                            <MenuItem onClick={() => {
                              setAnchorEl(null)
                              setOpenGroupInfo(true)
                              }}>
                             Group info
                            </MenuItem>
                              <MenuItem onClick={() => {
                                setOpenModal(true)
                                setAnchorEl(null)
                                }}>
                                Add Member
                              </MenuItem>
                          </Menu>
                        </>
                      }
                      title={
                        selected.type === 'singleChat'
                          ? `${selected.otherUser.firstName} ${selected.otherUser.lastName}`
                          : `${selected.groupName}`
                      }
                      subheader={typingUser ? `typing...` : ''}
                      titleTypographyProps={{
                        ml: -1.25,
                      }}
                      subheaderTypographyProps={{
                        fontSize: '10px',
                        fontStyle: 'italic',
                        ml: -1.25,
                      }}
                      sx={{
                        px: 1,
                        py: 0.125,
                        pt: 0.5,
                      }}
                    />
                  </Card>
                </Box>
                {/* Do not delete */}
                {/* <Tooltip title='video call'>
                  <IconButton
                    color='inherit'
                    aria-label='open video window'
                    onClick={() => setOpenVideoModal(true)}
                    edge='start'
                    sx={{ ml: 2 }}
                  >
                    <VideoCallIcon />
                  </IconButton>
                </Tooltip> */}
              </>
            )}
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
          <DrawerHeader
            sx={{ justifyContent: { xs: 'space-between', md: 'flex-end' } }}
          >
            <CreateGroup
              showIcon={true}
              isPrivate={true}
            />
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
          <ChatList 
          // selected={selected} 
          // setSelected={setSelected} 
          />
        </Drawer>

        <Main open={open}>
          <DrawerHeader />
          {/* <VideoContainer 
          {/* <VideoContainer 
            open={openVideoModal} 
            setOpen={setOpenVideoModal}
            selected={selected}
          /> */}
          <PrivateChat selected={selected} setTypingUser={setTypingUser} />
          <AddGroupMember open={openModal} setOpen={setOpenModal}/>
          <PrivateGroupInfo open={openGroupInfo} setOpen={setOpenGroupInfo} selected={selected}/>
        </Main>
      </Box>
    </Container>
  );
};

export default ChatComponents;
