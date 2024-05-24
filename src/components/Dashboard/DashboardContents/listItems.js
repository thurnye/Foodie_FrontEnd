import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import EventNoteIcon from '@mui/icons-material/EventNote';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import { Link } from 'react-router-dom';
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';

const MainListItems = ({ header, setHeader }) => {
  return (
    <React.Fragment>
      <Link to='dashboard'>
        <ListItemButton >
          <ListItemIcon onClick={() => setHeader('Dashboard')}>
            <DashboardIcon/>
          </ListItemIcon>
          <ListItemText primary='Dashboard' />
        </ListItemButton>
      </Link>

      <Link to='events-feeds'>
        <ListItemButton>
          <ListItemIcon onClick={() => setHeader('Events')}>
            <EventNoteIcon />
          </ListItemIcon>
          <ListItemText primary='Events' />
        </ListItemButton>
      </Link>

      <Link to='recipe-feeds'>
        <ListItemButton>
          <ListItemIcon onClick={() => setHeader('Recipes')}>
            <MenuBookIcon />
          </ListItemIcon>
          <ListItemText primary='Recipes' />
        </ListItemButton>
      </Link>
     <Link to='saves-and-bookmarks'>
      <ListItemButton onClick={() => setHeader('Saves and BookMarks')}>
        <ListItemIcon>
          <BookmarkAddedIcon />
        </ListItemIcon>
        <ListItemText primary='Saves & Bookmarks' />
      </ListItemButton>
     </Link>
    </React.Fragment>
  );
};


export default MainListItems;
