import React from 'react';
import styles from './ModalDialog.module.css';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const ModalDialog = ({setOpen, open, children, title, size, fullScreen}) => {
  // const [open, setOpen] = React.useState(false);

  // const handleClickOpen = () => {
  //   setOpen(true);
  // };

  // const handleClose = () => {
  //   setOpen(false);
  // };

  return(
  <div className={styles.ModalDialog}>
    <Dialog
        open={open}
        size={size}
        fullScreen={fullScreen}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        {title && <DialogTitle id="alert-dialog-title">
          {title}
        </DialogTitle>}
        <DialogContent>
          {children}
        </DialogContent>
      </Dialog>
  </div>
)};


export default ModalDialog;
