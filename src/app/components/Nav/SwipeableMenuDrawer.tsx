import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

// === Types === //
export interface NavItem {
  name: string;
  path: string;
}

interface SwipeableMenuDrawerProps {
  items: NavItem[];
}

const SwipeableMenuDrawer: React.FC<SwipeableMenuDrawerProps> = ({ items }) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState<boolean>(false);

  const toggleDrawer = (value: boolean) => () => {
    setOpen(value);
  };

  const handleNavigate = (path: string) => {
    setOpen(false);
    navigate(path);
  };

  return (
    <div>
      <IconButton
        size="large"
        aria-label="open navigation menu"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={toggleDrawer(true)}
        color="inherit"
      >
        <MenuIcon />
      </IconButton>

      <SwipeableDrawer
        anchor="left"
        open={open}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        <Box sx={{ width: 250, height: '100%', p: 2 }} role="presentation">
          <List
            sx={{
              height: 'inherit',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {items.map((nav) => (
              <ListItem key={nav.path} disablePadding>
                <ListItemButton
                  sx={{ textAlign: 'center', mb: 4 }}
                  onClick={() => handleNavigate(nav.path)}
                >
                  <ListItemText
                    primary={
                      <Link
                        to={nav.path}
                        style={{ color: '#000000A6', width: '100%', textDecoration: 'none' }}
                      >
                        {nav.name}
                      </Link>
                    }
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </SwipeableDrawer>
    </div>
  );
};

export default SwipeableMenuDrawer;
