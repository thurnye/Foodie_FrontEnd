import React from 'react';
import { Box, Typography } from '@mui/material';

export default function CoverPageLayoutOne() {
  return (
    <Box
      key='coverPage'
      sx={{
        width: 794,
        height: 1123,
        position: 'relative',
      }}
    >
      {/* Background Image */}
      <Box
        sx={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=800&h=600&fit=crop')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          width: '100%',
          height: '100%',
          borderRadius: 1,
        }}
      >
        {/* Inner Content Box */}
        <Box
          sx={{
            pt: 4,
            // border: '2px dotted grey',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'center',
            height: 'inherit',
            margin: 'auto',
            background: 'white',
            width: 200,
            textAlign: 'center',
          }}
        >
          <Typography
            sx={{
              fontFamily: "'Arial', sans-serif",
              fontSize: '1.5rem',
              fontStyle: 'italic',
            }}
          >
            Healthy
          </Typography>
          <Box>
            <Typography>Fresh</Typography>
            <Typography>Best Recipes</Typography>
            <Box sx={{ m: 4 }}>
              <Typography>Chef Mary Smith</Typography>
              <Typography>Special Edition</Typography>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'center',
          zIndex: 1,
          p: 6,
          borderRadius: 1,
          minWidth: '60%',
        }}
      >
        <Typography
          sx={{
            fontFamily: "'Arial', sans-serif",
            fontSize: '4rem',
            fontWeight: 700,
            color: '#2d2d2d',
            letterSpacing: '0.05em',
            mb: 2,
            lineHeight: 1.2,
          }}
        >
          THE COOKBOOK
        </Typography>
      </Box>
    </Box>
  );
}
