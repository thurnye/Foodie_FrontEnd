import React from 'react';
import { Box, Typography } from '@mui/material';

export const CoverPageLayoutTwo: React.FC = () => {
  return (
    <Box
    //   sx={{
    //     width: '210mm',
    //     height: '297mm',
    //     display: 'flex',
    //     position: 'relative',
    //     backgroundColor: '#fff',
    //     overflow: 'hidden',
    //   }}
     key='coverPage'
      sx={{
        // border: '2px dotted green',
        height: '100%',
        position: 'relative',
      }}
    >
      {/* Left Half - Pizza Image */}
      <Box
        sx={{
          width: '50%',
          height: '100%',
          backgroundImage: 'url(https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Right Half - Red Background */}
      <Box
        sx={{
          width: '50%',
          height: '100%',
          backgroundColor: '#D32F2F',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '40px',
        }}
      >
        {/* Vertical COOK Text */}
        <Typography
          sx={{
            position: 'absolute',
            left: '20px',
            top: '50%',
            transform: 'translateY(-50%) rotate(-90deg)',
            transformOrigin: 'center',
            fontSize: '6rem',
            fontWeight: 700,
            color: '#fff',
            letterSpacing: '0.3em',
            fontFamily: 'Arial, sans-serif',
          }}
        >
          COOK
        </Typography>

        {/* Main Content */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '30px',
            marginLeft: '40px',
          }}
        >
          {/* BOOK Title */}
          <Typography
            sx={{
              fontSize: '5rem',
              fontWeight: 700,
              color: '#fff',
              letterSpacing: '0.1em',
              fontFamily: 'Arial, sans-serif',
              lineHeight: 1,
            }}
          >
            COOK
          </Typography>
          <Typography
            sx={{
              fontSize: '5rem',
              fontWeight: 700,
              color: '#fff',
              letterSpacing: '0.1em',
              fontFamily: 'Arial, sans-serif',
              lineHeight: 1,
              marginTop: '-20px',
            }}
          >
            BOOK
          </Typography>

          {/* Subtitle Boxes */}
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '15px', marginTop: '20px' }}>
            <Box
              sx={{
                border: '2px solid #fff',
                padding: '10px 20px',
                textAlign: 'center',
              }}
            >
              <Typography
                sx={{
                  fontSize: '1.2rem',
                  fontWeight: 600,
                  color: '#fff',
                  letterSpacing: '0.15em',
                  fontFamily: 'Arial, sans-serif',
                }}
              >
                FRESH COOKING
              </Typography>
            </Box>
            <Box
              sx={{
                border: '2px solid #fff',
                padding: '10px 20px',
                textAlign: 'center',
              }}
            >
              <Typography
                sx={{
                  fontSize: '1.2rem',
                  fontWeight: 600,
                  color: '#fff',
                  letterSpacing: '0.15em',
                  fontFamily: 'Arial, sans-serif',
                }}
              >
                A CULINARY EXPERIENCE
              </Typography>
            </Box>
          </Box>

          {/* Bottom Text */}
          <Typography
            sx={{
              fontSize: '0.9rem',
              color: '#fff',
              fontFamily: 'Arial, sans-serif',
              marginTop: 'auto',
              position: 'absolute',
              bottom: '30px',
              textAlign: 'center',
            }}
          >
            WWW.CALIENTE.COM
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
