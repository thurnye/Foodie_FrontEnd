import React from 'react';
import { Box, Typography } from '@mui/material';
import { A3CanvasLayout } from '../../Layouts/A3CanvasLayout';

export const Page06_07_CookingTeam: React.FC = () => {
  return (
    <A3CanvasLayout>
      {/* Left Page */}
      <Box
        sx={{
          width: '100%',
          height: '100%',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Large Pasta Image */}
        <Box
          sx={{
            width: '100%',
            height: '100%',
            backgroundImage: 'url(https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=1200&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />

        {/* Overlay Text */}
        <Box
          sx={{
            position: 'absolute',
            bottom: '60px',
            left: '50px',
          }}
        >
          <Typography
            sx={{
              fontSize: '3.5rem',
              fontWeight: 700,
              color: '#fff',
              fontFamily: 'Arial, sans-serif',
              letterSpacing: '0.05em',
              textShadow: '2px 2px 8px rgba(0,0,0,0.5)',
            }}
          >
            COOKING
          </Typography>
          <Typography
            sx={{
              fontSize: '3.5rem',
              fontWeight: 700,
              color: '#fff',
              fontFamily: 'Arial, sans-serif',
              letterSpacing: '0.05em',
              textShadow: '2px 2px 8px rgba(0,0,0,0.5)',
              marginTop: '-10px',
            }}
          >
            TICKET
          </Typography>
        </Box>
      </Box>

      {/* Right Page */}
      <Box
        sx={{
          width: '100%',
          height: '100%',
          backgroundColor: '#fff',
          padding: '60px 50px',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/* Title */}
        <Typography
          sx={{
            fontSize: '3rem',
            fontWeight: 700,
            color: '#333',
            fontFamily: 'Arial, sans-serif',
            marginBottom: '25px',
          }}
        >
          Cooking Team
        </Typography>

        {/* Description */}
        <Typography
          sx={{
            fontSize: '1rem',
            color: '#555',
            fontFamily: 'Arial, sans-serif',
            lineHeight: 1.8,
            marginBottom: '40px',
            maxWidth: '500px',
          }}
        >
          Our dedicated team of culinary experts brings passion, creativity, and years of
          experience to every recipe. Together, we create exceptional dishes that inspire
          and delight.
        </Typography>

        {/* Stats Boxes */}
        <Box sx={{ display: 'flex', gap: '30px', marginBottom: '50px' }}>
          <Box
            sx={{
              border: '3px solid #D32F2F',
              padding: '20px 30px',
              textAlign: 'center',
            }}
          >
            <Typography
              sx={{
                fontSize: '2.5rem',
                fontWeight: 700,
                color: '#D32F2F',
                fontFamily: 'Arial, sans-serif',
              }}
            >
              780+
            </Typography>
            <Typography
              sx={{
                fontSize: '1rem',
                color: '#555',
                fontFamily: 'Arial, sans-serif',
              }}
            >
              Cooking Chef
            </Typography>
          </Box>

          <Box
            sx={{
              border: '3px solid #D32F2F',
              padding: '20px 30px',
              textAlign: 'center',
            }}
          >
            <Typography
              sx={{
                fontSize: '2.5rem',
                fontWeight: 700,
                color: '#D32F2F',
                fontFamily: 'Arial, sans-serif',
              }}
            >
              5
            </Typography>
            <Typography
              sx={{
                fontSize: '1rem',
                color: '#555',
                fontFamily: 'Arial, sans-serif',
              }}
            >
              Years Experience
            </Typography>
          </Box>
        </Box>

        {/* Team Member Photos - 2x2 Grid */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '20px',
          }}
        >
          <Box sx={{ textAlign: 'center' }}>
            <Box
              sx={{
                width: '180px',
                height: '180px',
                backgroundImage: 'url(https://images.unsplash.com/photo-1583394293214-28ded15ee548?w=400&q=80)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                borderRadius: '4px',
                marginBottom: '10px',
              }}
            />
            <Typography
              sx={{
                fontSize: '1.1rem',
                fontWeight: 600,
                color: '#333',
                fontFamily: 'Arial, sans-serif',
              }}
            >
              Robert William
            </Typography>
            <Typography
              sx={{
                fontSize: '0.9rem',
                color: '#777',
                fontFamily: 'Arial, sans-serif',
              }}
            >
              Head Chef
            </Typography>
          </Box>

          <Box sx={{ textAlign: 'center' }}>
            <Box
              sx={{
                width: '180px',
                height: '180px',
                backgroundImage: 'url(https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=400&q=80)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                borderRadius: '4px',
                marginBottom: '10px',
              }}
            />
            <Typography
              sx={{
                fontSize: '1.1rem',
                fontWeight: 600,
                color: '#333',
                fontFamily: 'Arial, sans-serif',
              }}
            >
              Sarah Johnson
            </Typography>
            <Typography
              sx={{
                fontSize: '0.9rem',
                color: '#777',
                fontFamily: 'Arial, sans-serif',
              }}
            >
              Pastry Chef
            </Typography>
          </Box>

          <Box sx={{ textAlign: 'center' }}>
            <Box
              sx={{
                width: '180px',
                height: '180px',
                backgroundImage: 'url(https://images.unsplash.com/photo-1581299894007-aaa50297cf16?w=400&q=80)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                borderRadius: '4px',
                marginBottom: '10px',
              }}
            />
            <Typography
              sx={{
                fontSize: '1.1rem',
                fontWeight: 600,
                color: '#333',
                fontFamily: 'Arial, sans-serif',
              }}
            >
              Michael Chen
            </Typography>
            <Typography
              sx={{
                fontSize: '0.9rem',
                color: '#777',
                fontFamily: 'Arial, sans-serif',
              }}
            >
              Sous Chef
            </Typography>
          </Box>

          <Box sx={{ textAlign: 'center' }}>
            <Box
              sx={{
                width: '180px',
                height: '180px',
                backgroundImage: 'url(https://images.unsplash.com/photo-1595273670150-bd0c3c392e46?w=400&q=80)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                borderRadius: '4px',
                marginBottom: '10px',
              }}
            />
            <Typography
              sx={{
                fontSize: '1.1rem',
                fontWeight: 600,
                color: '#333',
                fontFamily: 'Arial, sans-serif',
              }}
            >
              Emma Davis
            </Typography>
            <Typography
              sx={{
                fontSize: '0.9rem',
                color: '#777',
                fontFamily: 'Arial, sans-serif',
              }}
            >
              Line Cook
            </Typography>
          </Box>
        </Box>
      </Box>
    </A3CanvasLayout>
  );
};
