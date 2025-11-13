import React from 'react';
import { Box, Typography } from '@mui/material';
import { Spa } from '@mui/icons-material';

export const CoverPageLayoutSeven: React.FC = () => {
  return (
    <Box
      key='coverPage'
      sx={{
        // border: '2px dotted green',
        height: '100%',
        position: 'relative',
      }}
    >
      <Box
        sx={{
          height: 'inherit',
          position: 'relative',
          bgcolor: 'blue',
           backgroundImage:
            "url('https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=900&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* WHITE vertical strip on the left */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            bottom: '10%',
            left: 0,
            width: '18%',
            bgcolor: '#fff',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Box
            sx={{
              width: '20%',
              height: '100%',
              bgcolor: '#5a5a5a',
            }}
          />
        </Box>

        {/* RED main block */}
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            bottom: 0,
            left: 0,
            right: 0,
            bgcolor: '#C85C5C',
          }}
        >
          {/* TEXT "COOK BOOK" */}
          <Box
            sx={{
              position: 'absolute',
              top: '18%',
              left: '31%',
              color: '#fff',
            }}
          >
            <Typography
              sx={{
                fontSize: '1rem',
                lineHeight: 1,
                fontWeight: 700,
                fontFamily: 'Arial, Helvetica, sans-serif',
                mb: 1,
              }}
            >
              THE
            </Typography>
            <Typography
              sx={{
                fontSize: '4rem',
                lineHeight: 1,
                fontWeight: 700,
                fontFamily: 'Arial, Helvetica, sans-serif',
                mb: 1,
              }}
            >
              COOK
            </Typography>
            <Typography
              sx={{
                fontSize: '4rem',
                lineHeight: 1,
                fontWeight: 700,
                fontFamily: 'Arial, Helvetica, sans-serif',
              }}
            >
              BOOK
            </Typography>
          </Box>

          {/* Subtitle boxes */}
          <Box
            sx={{
              position: 'absolute',
              top: '54%',
              left: '31%',
              display: 'flex',
              flexDirection: 'column',
              gap: 0.5,
            }}
          >
            <Box
              sx={{
                bgcolor: 'rgba(255,255,255,0.8)',
                px: 1.5,
                py: 0.5,
                fontSize: '0.75rem',
                fontFamily: 'Arial, Helvetica, sans-serif',
                color: '#C85C5C',
                fontWeight: 600,
              }}
            >
              FRESH COOKING
            </Box>
            <Box
              sx={{
                bgcolor: 'rgba(255,255,255,0.8)',
                px: 1.5,
                py: 0.5,
                fontSize: '0.75rem',
                fontFamily: 'Arial, Helvetica, sans-serif',
                color: '#C85C5C',
                fontWeight: 600,
              }}
            >
              8 RECIEPES
            </Box>
            <Box
              sx={{
                bgcolor: 'rgba(255,255,255,0.8)',
                px: 1.5,
                py: 0.5,
                fontSize: '0.75rem',
                fontFamily: 'Arial, Helvetica, sans-serif',
                color: '#C85C5C',
                fontWeight: 600,
              }}
            >
              COOKBOOK DESIGN
            </Box>
          </Box>

          {/* Decorative lines */}
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '31%',
              width: '30%',
            }}
          >
            <Box
              sx={{
                height: '3px',
                width: '100%',
                bgcolor: 'rgba(90,90,90,0.6)',
                mb: 0.5,
              }}
            />
            <Box
              sx={{
                height: '3px',
                width: '100%',
                bgcolor: 'rgba(255,255,255,0.4)',
                mb: 0.5,
              }}
            />
          </Box>

          <Box
            sx={{
              position: 'absolute',
              bottom: '27%',
              left: '31%',
              width: '30%',
            }}
          >
            <Box
              sx={{
                height: '3px',
                width: '100%',
                bgcolor: 'rgba(90,90,90,0.6)',
                mb: 0.5,
              }}
            />
            <Box
              sx={{
                height: '3px',
                width: '100%',
                bgcolor: 'rgba(255,255,255,0.4)',
              }}
            />
          </Box>

          {/* Circle decoration */}
          <Box
            sx={{
              position: 'absolute',
              right: '8%',
              bottom: '25%',
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              overflow: 'hidden',
              display: 'flex',
            }}
          >
            <Box
              sx={{
                width: '50%',
                height: '100%',
                background:
                  'repeating-linear-gradient(45deg, transparent, transparent 3px, rgba(255,255,255,0.6) 3px, rgba(255,255,255,0.6) 6px)',
              }}
            />
            <Box
              sx={{
                width: '50%',
                height: '100%',
                bgcolor: 'rgba(255,255,255,0.4)',
              }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
