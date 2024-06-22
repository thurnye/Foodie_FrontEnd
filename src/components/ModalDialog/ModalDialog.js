import React from 'react';
import styles from './ModalDialog.module.css';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

const ModalDialog = ({setOpen, open, children, title, size, fullScreen}) => {


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
