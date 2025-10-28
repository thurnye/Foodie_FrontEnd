import React from 'react';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import Box from '@mui/material/Box';
import { SxProps, Theme } from '@mui/material/styles';
import CustomizedButton from './CustomizedButton';

interface BackNavigationProps {
  onClick?: () => void;
  label: string;
  variant?: 'text' | 'outlined' | 'contained';
  sx?: SxProps<Theme>;
}

const BackNavigation: React.FC<BackNavigationProps> = ({
  onClick,
  label,
  variant = 'text',
  sx,
}) => (
  <Box>
    <CustomizedButton
      variant={variant}
      label={label}
      id="join-group-button"
      disableElevation
      startIcon={<KeyboardBackspaceIcon />}
      onClick={onClick}
      sx={{
        borderRadius: 0,
        textTransform: 'none',
        ...sx,
      }}
    />
  </Box>
);

export default BackNavigation;
