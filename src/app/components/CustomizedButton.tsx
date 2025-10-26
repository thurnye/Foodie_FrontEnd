import * as React from 'react';
import { styled, Theme } from '@mui/material/styles';
import Button, { ButtonProps } from '@mui/material/Button';
import { darken } from '@mui/system';

// ---------- Custom prop interface ----------
interface ColorButtonProps extends ButtonProps {
  backgroundColor?: string;
}

// ---------- Styled component ----------
const ColorButton = styled(Button, {
  shouldForwardProp: (prop) => prop !== 'backgroundColor',
})<ColorButtonProps>(({ theme, backgroundColor }) => ({
  ...(backgroundColor && {
    color: theme.palette.getContrastText(backgroundColor),
    backgroundColor: backgroundColor,
    '&:hover': {
      backgroundColor: darken(backgroundColor, 0.1), // slightly darker on hover
    },
  }),
}));

// ---------- Component prop types ----------
interface CustomizedButtonProps extends ColorButtonProps {
  label: React.ReactNode;
  height?: number | string;
  width?: number | string;
}

// ---------- Component ----------
const CustomizedButton: React.FC<CustomizedButtonProps> = ({
  type = 'button',
  disabled = false,
  sx,
  label,
  variant = 'contained',
  backgroundColor,
  endIcon,
  onClick,
  fullWidth,
  height,
  width,
  startIcon,
}) => {
  return (
    <ColorButton
      type={type}
      variant={variant}
      backgroundColor={backgroundColor}
      endIcon={endIcon}
      startIcon={startIcon}
      onClick={onClick}
      fullWidth={fullWidth}
      sx={{
        height,
        width,
        ...sx,
      }}
      disabled={disabled}
    >
      {label}
    </ColorButton>
  );
};

export default CustomizedButton;
