import React from 'react';
import styles from './BackNavigation.module.css';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import Box from '@mui/material/Box';
import CustomizedButton from '../CustomizedButton/CustomizedButton';

const BackNavigation = ({onClick, label, variant, sx}) => (
  <Box className={styles.BackNavigation}>
    <CustomizedButton
      variant={variant}
      label={label}
      id='join-group-button'
      disableElevation
      startIcon={<KeyboardBackspaceIcon/>}
      onClick={onClick}
      sx={{
        // fontSize: 12,
        borderRadius: 0,
        textTransform: 'none',
        ...sx
      }}
    />
  </Box>
);

export default BackNavigation;
