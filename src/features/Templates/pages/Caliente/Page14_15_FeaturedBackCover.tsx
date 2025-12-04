import React from 'react';
import { Box, Typography } from '@mui/material';
import { A3CanvasLayout } from '../../Layouts/A3CanvasLayout';

export const Page14_15_FeaturedBackCover: React.FC = () => {
  return (
    <A3CanvasLayout>
      {/* Left Page */}
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
            fontSize: '2.5rem',
            fontWeight: 700,
            color: '#333',
            fontFamily: 'Arial, sans-serif',
            marginBottom: '40px',
          }}
        >
          FEATURED DISHES
        </Typography>

        {/* 2x2 Grid of Dishes */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '30px',
            marginBottom: '40px',
          }}
        >
          {/* Dish 1 */}
          <Box>
            <Box
              sx={{
                width: '100%',
                height: '180px',
                backgroundImage: 'url(https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&q=80)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                borderRadius: '4px',
                marginBottom: '15px',
              }}
            />
            <Typography
              sx={{
                fontSize: '1.3rem',
                fontWeight: 700,
                color: '#333',
                fontFamily: 'Arial, sans-serif',
                marginBottom: '8px',
              }}
            >
              Signature Burger
            </Typography>
            <Typography
              sx={{
                fontSize: '0.85rem',
                color: '#555',
                fontFamily: 'Arial, sans-serif',
                lineHeight: 1.5,
              }}
            >
              Juicy beef patty with premium toppings, served on artisan bun
            </Typography>
          </Box>

          {/* Dish 2 */}
          <Box>
            <Box
              sx={{
                width: '100%',
                height: '180px',
                backgroundImage: 'url(https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=600&q=80)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                borderRadius: '4px',
                marginBottom: '15px',
              }}
            />
            <Typography
              sx={{
                fontSize: '1.3rem',
                fontWeight: 700,
                color: '#333',
                fontFamily: 'Arial, sans-serif',
                marginBottom: '8px',
              }}
            >
              Seafood Platter
            </Typography>
            <Typography
              sx={{
                fontSize: '0.85rem',
                color: '#555',
                fontFamily: 'Arial, sans-serif',
                lineHeight: 1.5,
              }}
            >
              Fresh catch of the day with lemon butter sauce and herbs
            </Typography>
          </Box>

          {/* Dish 3 */}
          <Box>
            <Box
              sx={{
                width: '100%',
                height: '180px',
                backgroundImage: 'url(https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=600&q=80)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                borderRadius: '4px',
                marginBottom: '15px',
              }}
            />
            <Typography
              sx={{
                fontSize: '1.3rem',
                fontWeight: 700,
                color: '#333',
                fontFamily: 'Arial, sans-serif',
                marginBottom: '8px',
              }}
            >
              Pasta Primavera
            </Typography>
            <Typography
              sx={{
                fontSize: '0.85rem',
                color: '#555',
                fontFamily: 'Arial, sans-serif',
                lineHeight: 1.5,
              }}
            >
              Fresh pasta with seasonal vegetables in light cream sauce
            </Typography>
          </Box>

          {/* Dish 4 */}
          <Box>
            <Box
              sx={{
                width: '100%',
                height: '180px',
                backgroundImage: 'url(https://images.unsplash.com/photo-1603073419107-d9371d951b1a?w=600&q=80)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                borderRadius: '4px',
                marginBottom: '15px',
              }}
            />
            <Typography
              sx={{
                fontSize: '1.3rem',
                fontWeight: 700,
                color: '#333',
                fontFamily: 'Arial, sans-serif',
                marginBottom: '8px',
              }}
            >
              Grilled Salmon
            </Typography>
            <Typography
              sx={{
                fontSize: '0.85rem',
                color: '#555',
                fontFamily: 'Arial, sans-serif',
                lineHeight: 1.5,
              }}
            >
              Perfectly grilled with citrus glaze and roasted vegetables
            </Typography>
          </Box>
        </Box>

        {/* Ingredients Lists */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '20px',
          }}
        >
          <Box>
            <Typography
              sx={{
                fontSize: '0.8rem',
                color: '#777',
                fontFamily: 'Arial, sans-serif',
                lineHeight: 1.4,
              }}
            >
              <strong>Key ingredients:</strong> Beef, lettuce, tomato, cheese, special sauce
            </Typography>
          </Box>
          <Box>
            <Typography
              sx={{
                fontSize: '0.8rem',
                color: '#777',
                fontFamily: 'Arial, sans-serif',
                lineHeight: 1.4,
              }}
            >
              <strong>Key ingredients:</strong> Shrimp, scallops, mussels, lemon, butter
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* Right Page */}
      <Box
        sx={{
          width: '100%',
          height: '100%',
          display: 'flex',
          position: 'relative',
          backgroundColor: '#fff',
          overflow: 'hidden',
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

        {/* Right Half - Red Background (Back Cover) */}
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
            {/* COOK BOOK Title */}
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

            {/* Bottom Text */}
            <Typography
              sx={{
                fontSize: '0.9rem',
                color: '#fff',
                fontFamily: 'Arial, sans-serif',
                marginTop: '100px',
                textAlign: 'center',
              }}
            >
              WWW.CALIENTE.COM
            </Typography>
          </Box>
        </Box>
      </Box>
    </A3CanvasLayout>
  );
};
