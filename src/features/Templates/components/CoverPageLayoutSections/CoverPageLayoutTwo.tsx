import React from 'react';
import { Box, Typography } from '@mui/material';

export const CoverPageLayoutTwo: React.FC = () => {
  return (
    <Box
      key='coverPage'
      sx={{
        width: 794,
        height: 1123,
        position: 'relative',
      }}
    >
      <Box sx={{display: 'flex', width: '100%', height: '100%'}}>
        {/* Left Half - Pizza Image */}
        <Box
          sx={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />

        {/* Right Half - Red Background */}
        <Box
          sx={{
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
              top: '20%',
              transform: 'translateY(-50%) rotate(-90deg)',
              transformOrigin: 'center',
              fontSize: '6rem',
              fontWeight: 700,
              color: '#fff',
              letterSpacing: '0.3em',
              fontFamily: 'Arial, sans-serif',
            }}
          >
            BOOK
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
           
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '15px',
                marginTop: '20px',
              }}
            >
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

            {/* Vertical COOK Text */}
          <Typography
            sx={{
              position: 'absolute',
              left: '20px',
              bottom: '12%',
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
    </Box>
  );
};
