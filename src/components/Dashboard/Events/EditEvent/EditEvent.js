import React, {useEffect, useState} from 'react';
import styles from './EditEvent.module.css';
import {useDispatch} from 'react-redux'
import { useLocation } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import { FaEllipsisVertical } from "react-icons/fa6";
import CreateEvent from '../CreateEvent/CreateEvent'
import services from '../../../../util/services'
import AddTickets from '../Forms/AddTickets/AddTickets'
import BasicInfos from '../Forms/BasicInfos/BasicInfos'
import Details from '../Forms/Details/Details'
import Publish from '../Forms/Publish/Publish'
import GoLive from '../Forms/GoLive/GoLive'
import Schedule from '../Forms/Schedule/Schedule'
import { CiTextAlignLeft } from "react-icons/ci";
import { GrSchedule } from "react-icons/gr";
import { TbListDetails } from "react-icons/tb";
import { TfiTicket } from "react-icons/tfi";
import { VscOpenPreview } from "react-icons/vsc";

const drawerWidth = 150;

const formSteps = [
  { label: 'Basic Info', icon: <CiTextAlignLeft /> },
  { label: 'Schedule', icon: <GrSchedule /> },
  { label: 'Details', icon: <TbListDetails /> },
  { label: 'Add Tickets', icon: <TfiTicket /> },
  { label: 'Publish', icon: <VscOpenPreview /> },
];

const EditEvent = ({isLoaded}) => {
  let location = useLocation();
  const dispatch = useDispatch()
  const eventId = location.state?.id;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);
  const [active, setActive] = useState(0)
  const [event, setEvent] = useState()
  

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const drawer = (
    <div style={{height: '100%'}}>
      <Toolbar />
      <Divider />
      <List>
        {formSteps.map((el, index) => (
          <ListItem key={el.label} disablePadding>
            <ListItemButton  onClick={() => setActive(index)}
            sx={{
              background: active === index ? "#eef8ff" : ""
            }}>
              <ListItemIcon sx={{minWidth: 25}}>
                {el.icon}
              </ListItemIcon>
              <ListItemText primary={el.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  const fetchEvent = async () => {
    try{
      const result = await services.findEventById(eventId);
      setEvent(result.data)
    }catch (err){
      console.log(err)
    }
  }
  
  useEffect(() => {
    fetchEvent()
    }, 
  [eventId, dispatch])
  


  return(
    <div className={styles.EditEvent}>
      <Box sx={{}}>
        <Box sx={{ display: 'flex' }}>
          <CssBaseline />
          <AppBar
            position="absolute"
            sx={{
              background: 'none',
              boxShadow: 'none',
              top:'9vh',
              width: { sm: `calc(100% - ${drawerWidth}px)` },
              ml: { sm: `${drawerWidth}px` },
            }}
          >
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { sm: 'none' }, color: 'black' }}
              >
                <FaEllipsisVertical />
              </IconButton>
            </Toolbar>
          </AppBar>
          <Box
            component="nav"
            sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
            aria-label="mailbox folders"
          >
            {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
            {/* Mobile Screen */}
            <Drawer
              // container={container}
              variant="temporary"
              open={mobileOpen}
              onTransitionEnd={handleDrawerTransitionEnd}
              onClose={handleDrawerClose}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
              sx={{
                display: { xs: 'block', sm: 'none' },
                height: '100%',
                top: '13.5vh',
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, position: 'relative !important', },
              }}
            >
              {drawer}
            </Drawer>

            {/* Large Screen */}
            <Drawer
              variant="permanent"
              sx={{
                display: { xs: 'none', sm: 'block' },
                height: '100%',
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, position: 'relative !important' },
              }}
              open
            >
              {drawer}
            </Drawer>
          </Box>
          <Box
            component="main"
            sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
          >
            <Toolbar />
            <Box>
              <CreateEvent 
                isLoaded={isLoaded} 
                edit={true} 
                event={event} 
                active={active}
                id={eventId}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  )
};


export default EditEvent;
