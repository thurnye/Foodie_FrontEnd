import React, { useState, useEffect } from 'react';
import styles from './RecipesContainer.module.css';
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
import Tooltip from '@mui/material/Tooltip';
import FilterRecipe from '../FilterRecipe/FilterRecipe'
import Recipes from '../Recipes/Recipes';
import TuneIcon from '@mui/icons-material/Tune';




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

const RecipesContainer = () => {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down('md'));
  const [open, setOpen] = useState(false);
  const [filterData, setFilterData] = useState()


  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };



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
      className={styles.RecipesContainer}
      sx={{ mt: 4, mb: 4 }}
    >
      <Box sx={{ display: 'flex', position: 'relative', overflowX: 'hidden' }}>
        <CssBaseline />
        <AppBar position='absolute' open={open}>
          <Toolbar id="back-to-top-anchor">
            <Tooltip title='Create Group'>
              <IconButton
                color='inherit'
                aria-label='open drawer'
                onClick={handleDrawerOpen}
                edge='start'
                sx={{ mr: 2, ...(open && { display: 'none' }) }}
              >
                <TuneIcon />
              </IconButton>
            </Tooltip>
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
            
          >
            
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
          {/* Filter list */}
          <FilterRecipe getFilter={setFilterData}/>
        </Drawer>

        <Main open={open}>
          <DrawerHeader />
          <Recipes filter={filterData}/>
        </Main>
      </Box>
    </Container>
  );
};

export default RecipesContainer;
