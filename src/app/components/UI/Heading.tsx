import React from 'react';
import { Box, Typography } from '@mui/material';

interface HeadingProps {
  title: string;
}

const Heading: React.FC<HeadingProps> = ({ title }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        width: '100%',
      }}
    >
      {/* Text */}
      <Typography
        variant='h5'
        sx={{
          fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
          whiteSpace: 'nowrap',
          fontWeight: 500,
          letterSpacing: 1,
          mr: 1,
        }}
      >
        {title}
      </Typography>

      {/* Two horizontal lines */}
      <Box sx={{ flex: 1, position: 'relative', height: '2px' }}>
        <Box
          sx={{
            position: 'absolute',
            top: -1,
            width: '100%',
            height: '1px',
            backgroundColor: '#c4cac7',
            borderRadius: 1,
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            top: 5, // space between the two lines
            width: '100%',
            height: '1px',
            backgroundColor: '#c4cac7',
            borderRadius: 1,
          }}
        />
      </Box>
    </Box>
  );
};

export default Heading;
