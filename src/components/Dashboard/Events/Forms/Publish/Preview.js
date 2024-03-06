import * as React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { FaExternalLinkAlt } from "react-icons/fa";
import SingleEvent from './SingleEvent/SingleEvent'

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Preview({data}) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button variant="text" onClick={handleClickOpen} sx={{textTransform: 'none'}}>
          Preview your event  <FaExternalLinkAlt style={{marginLeft: '5px'}}/>
      </Button>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              PREVIEW
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose} sx={{textTransform: 'none'}}>
              Close
            </Button>
          </Toolbar>
        </AppBar>
        <Box>
            <SingleEvent isPreview={true}/>
        </Box>
      </Dialog>
    </React.Fragment>
  );
}