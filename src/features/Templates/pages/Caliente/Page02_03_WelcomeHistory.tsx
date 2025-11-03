import React from 'react';
import { Box, Typography } from '@mui/material';
import { A3CanvasLayout } from '../../Layouts/A3CanvasLayout';

export const Page02_03_WelcomeHistory: React.FC = () => {
  return (
    <A3CanvasLayout>
      {/* Left Page */}
      <Box
        sx={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: '#fff',
        }}
      >
        {/* Red Panel with WELCOME */}
        <Box
          sx={{
            backgroundColor: '#D32F2F',
            padding: '50px 40px',
            height: '45%',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Typography
            sx={{
              fontSize: '4rem',
              fontWeight: 700,
              color: '#fff',
              fontFamily: 'Georgia, serif',
              marginBottom: '20px',
            }}
          >
            WELCOME
          </Typography>

          {/* Chef Photo */}
          <Box
            sx={{
              width: '200px',
              height: '200px',
              backgroundImage: 'url(https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=400&q=80)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              borderRadius: '4px',
              marginBottom: '15px',
            }}
          />

          <Typography
            sx={{
              fontSize: '0.95rem',
              color: '#fff',
              fontFamily: 'Arial, sans-serif',
              lineHeight: 1.6,
              maxWidth: '450px',
            }}
          >
            Welcome to our culinary journey. This cookbook represents years of passion,
            dedication, and love for creating exceptional dishes. Each recipe has been
            carefully crafted to bring joy to your table.
          </Typography>
        </Box>

        {/* HISTORY Section */}
        <Box
          sx={{
            backgroundColor: '#D32F2F',
            padding: '30px 40px',
            marginTop: 'auto',
          }}
        >
          <Typography
            sx={{
              fontSize: '2.5rem',
              fontWeight: 700,
              color: '#fff',
              fontFamily: 'Georgia, serif',
              marginBottom: '15px',
            }}
          >
            HISTORY
          </Typography>
          <Typography
            sx={{
              fontSize: '0.9rem',
              color: '#fff',
              fontFamily: 'Arial, sans-serif',
              lineHeight: 1.6,
            }}
          >
            Our story began over a decade ago with a simple mission: to share the authentic
            flavors and traditions passed down through generations. Today, we continue this
            legacy with every recipe we create.
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
        {/* Table of Contents */}
        <Typography
          sx={{
            fontSize: '2.5rem',
            fontWeight: 700,
            color: '#333',
            fontFamily: 'Arial, sans-serif',
            marginBottom: '40px',
          }}
        >
          TABLE OF CONTENTS
        </Typography>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '50px' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <Typography sx={{ fontSize: '2rem', fontWeight: 700, color: '#D32F2F', fontFamily: 'Arial, sans-serif' }}>
              01
            </Typography>
            <Typography sx={{ fontSize: '1.3rem', fontWeight: 600, color: '#333', fontFamily: 'Arial, sans-serif' }}>
              Tasty and Spicy
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <Typography sx={{ fontSize: '2rem', fontWeight: 700, color: '#D32F2F', fontFamily: 'Arial, sans-serif' }}>
              02
            </Typography>
            <Typography sx={{ fontSize: '1.3rem', fontWeight: 600, color: '#333', fontFamily: 'Arial, sans-serif' }}>
              Cooking Team
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <Typography sx={{ fontSize: '2rem', fontWeight: 700, color: '#D32F2F', fontFamily: 'Arial, sans-serif' }}>
              03
            </Typography>
            <Typography sx={{ fontSize: '1.3rem', fontWeight: 600, color: '#333', fontFamily: 'Arial, sans-serif' }}>
              Grilled Meat
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <Typography sx={{ fontSize: '2rem', fontWeight: 700, color: '#D32F2F', fontFamily: 'Arial, sans-serif' }}>
              04
            </Typography>
            <Typography sx={{ fontSize: '1.3rem', fontWeight: 600, color: '#333', fontFamily: 'Arial, sans-serif' }}>
              Profato Dumpling
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <Typography sx={{ fontSize: '2rem', fontWeight: 700, color: '#D32F2F', fontFamily: 'Arial, sans-serif' }}>
              05
            </Typography>
            <Typography sx={{ fontSize: '1.3rem', fontWeight: 600, color: '#333', fontFamily: 'Arial, sans-serif' }}>
              Cream Soup
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <Typography sx={{ fontSize: '2rem', fontWeight: 700, color: '#D32F2F', fontFamily: 'Arial, sans-serif' }}>
              06
            </Typography>
            <Typography sx={{ fontSize: '1.3rem', fontWeight: 600, color: '#333', fontFamily: 'Arial, sans-serif' }}>
              Featured Dishes
            </Typography>
          </Box>
        </Box>

        {/* 2x2 Grid of Food Images */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '15px',
            marginTop: 'auto',
          }}
        >
          <Box
            sx={{
              width: '100%',
              height: '150px',
              backgroundImage: 'url(https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&q=80)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              borderRadius: '4px',
            }}
          />
          <Box
            sx={{
              width: '100%',
              height: '150px',
              backgroundImage: 'url(https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&q=80)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              borderRadius: '4px',
            }}
          />
          <Box
            sx={{
              width: '100%',
              height: '150px',
              backgroundImage: 'url(https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&q=80)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              borderRadius: '4px',
            }}
          />
          <Box
            sx={{
              width: '100%',
              height: '150px',
              backgroundImage: 'url(https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&q=80)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              borderRadius: '4px',
            }}
          />
        </Box>
      </Box>
    </A3CanvasLayout>
  );
};
