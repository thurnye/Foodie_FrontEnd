import React, { ReactNode } from 'react';
import { Box, Typography, useTheme } from '@mui/material';

interface BorderBoxTextLayoutProps {
  title: string;
  children: ReactNode;
  maxWidth?: number | string;
  paddingY?: number;
  paddingX?: number;
}

const BorderBoxTextLayout: React.FC<BorderBoxTextLayoutProps> = ({
  title,
  children,
  maxWidth = 400,
  paddingY = 3,
  paddingX = 3,
}) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        position: 'relative',
        border: `1px solid #c4cac7`,
        borderRadius: 2,
        maxWidth,
        mx: 'auto',
        textAlign: 'center',
        py: paddingY,
        px: paddingX,
        mt: 5,
      }}
    >
      {/* Title overlapping the top border */}
      <Typography
        variant='caption'
        sx={{
          position: 'absolute',
          top: 0,
          left: '50%',
          transform: 'translate(-50%, -50%)',
          bgcolor: 'white',
          px: 2,
        //   fontWeight: 600,
          letterSpacing: 1.5,
        //   color: '#c4cac7',
        }}
      >
        {title.toUpperCase()}
      </Typography>

      {children}
    </Box>
  );
};

export default BorderBoxTextLayout;
