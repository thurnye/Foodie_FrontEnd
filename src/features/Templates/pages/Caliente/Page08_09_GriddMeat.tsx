import React from 'react';
import { Box, Typography } from '@mui/material';
import { A3CanvasLayout } from '../../Layouts/A3CanvasLayout';

export const Page08_09_GriddMeat: React.FC = () => {
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
        {/* NEW ITEM Label */}
        <Box
          sx={{
            display: 'inline-block',
            backgroundColor: '#D32F2F',
            color: '#fff',
            padding: '8px 20px',
            marginBottom: '20px',
            width: 'fit-content',
          }}
        >
          <Typography
            sx={{
              fontSize: '0.9rem',
              fontWeight: 600,
              letterSpacing: '0.1em',
              fontFamily: 'Arial, sans-serif',
            }}
          >
            NEW ITEM
          </Typography>
        </Box>

        {/* Title */}
        <Typography
          sx={{
            fontSize: '3.5rem',
            fontWeight: 700,
            color: '#333',
            fontFamily: 'Georgia, serif',
            marginBottom: '30px',
            lineHeight: 1.2,
          }}
        >
          Gridd Meat
        </Typography>

        {/* Description */}
        <Typography
          sx={{
            fontSize: '1rem',
            color: '#555',
            fontFamily: 'Arial, sans-serif',
            lineHeight: 1.8,
            marginBottom: '40px',
            textAlign: 'justify',
          }}
        >
          Experience the perfect char and smoky flavor of expertly grilled meats. This signature
          dish combines premium cuts with our special marinade and grilling technique to create
          a masterpiece that's both tender and flavorful.
        </Typography>

        {/* Directions Section */}
        <Typography
          sx={{
            fontSize: '1.5rem',
            fontWeight: 700,
            color: '#D32F2F',
            fontFamily: 'Arial, sans-serif',
            marginBottom: '20px',
          }}
        >
          → DIRECTIONS
        </Typography>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <Typography
            sx={{
              fontSize: '0.95rem',
              color: '#555',
              fontFamily: 'Arial, sans-serif',
              lineHeight: 1.6,
            }}
          >
            1. Prepare the marinade by combining olive oil, garlic, and herbs
          </Typography>
          <Typography
            sx={{
              fontSize: '0.95rem',
              color: '#555',
              fontFamily: 'Arial, sans-serif',
              lineHeight: 1.6,
            }}
          >
            2. Marinate the meat for at least 2 hours or overnight
          </Typography>
          <Typography
            sx={{
              fontSize: '0.95rem',
              color: '#555',
              fontFamily: 'Arial, sans-serif',
              lineHeight: 1.6,
            }}
          >
            3. Preheat grill to high heat (450-500°F)
          </Typography>
          <Typography
            sx={{
              fontSize: '0.95rem',
              color: '#555',
              fontFamily: 'Arial, sans-serif',
              lineHeight: 1.6,
            }}
          >
            4. Grill meat for 4-5 minutes per side for medium-rare
          </Typography>
          <Typography
            sx={{
              fontSize: '0.95rem',
              color: '#555',
              fontFamily: 'Arial, sans-serif',
              lineHeight: 1.6,
            }}
          >
            5. Let rest for 5 minutes before serving
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
        {/* Ingredients Section */}
        <Typography
          sx={{
            fontSize: '1.5rem',
            fontWeight: 700,
            color: '#D32F2F',
            fontFamily: 'Arial, sans-serif',
            marginBottom: '25px',
          }}
        >
          → INGREDIENTS
        </Typography>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '40px' }}>
          <Typography sx={{ fontSize: '0.95rem', color: '#555', fontFamily: 'Arial, sans-serif' }}>
            01. 2 lbs premium beef steak
          </Typography>
          <Typography sx={{ fontSize: '0.95rem', color: '#555', fontFamily: 'Arial, sans-serif' }}>
            02. 4 cloves garlic, minced
          </Typography>
          <Typography sx={{ fontSize: '0.95rem', color: '#555', fontFamily: 'Arial, sans-serif' }}>
            03. 1/4 cup olive oil
          </Typography>
          <Typography sx={{ fontSize: '0.95rem', color: '#555', fontFamily: 'Arial, sans-serif' }}>
            04. 2 tbsp fresh rosemary
          </Typography>
          <Typography sx={{ fontSize: '0.95rem', color: '#555', fontFamily: 'Arial, sans-serif' }}>
            05. 1 tbsp black pepper
          </Typography>
          <Typography sx={{ fontSize: '0.95rem', color: '#555', fontFamily: 'Arial, sans-serif' }}>
            06. 2 tsp sea salt
          </Typography>
          <Typography sx={{ fontSize: '0.95rem', color: '#555', fontFamily: 'Arial, sans-serif' }}>
            07. 1 tbsp balsamic vinegar
          </Typography>
        </Box>

        {/* Large Grilled Meat Image */}
        <Box
          sx={{
            width: '100%',
            height: '350px',
            backgroundImage: 'url(https://images.unsplash.com/photo-1544025162-d76694265947?w=1200&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            borderRadius: '8px',
            marginBottom: '30px',
          }}
        />

        {/* Description Text */}
        <Typography
          sx={{
            fontSize: '0.95rem',
            color: '#555',
            fontFamily: 'Arial, sans-serif',
            lineHeight: 1.7,
            marginBottom: '20px',
          }}
        >
          The secret to perfect grilled meat lies in the quality of ingredients and precise timing.
          Our method ensures a beautiful crust while maintaining juicy tenderness inside.
        </Typography>

        {/* Small Food Image */}
        <Box
          sx={{
            width: '150px',
            height: '120px',
            backgroundImage: 'url(https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            borderRadius: '4px',
          }}
        />
      </Box>
    </A3CanvasLayout>
  );
};
