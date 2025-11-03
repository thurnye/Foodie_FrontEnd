import React from 'react';
import { Box, Typography } from '@mui/material';
import { A3CanvasLayout } from '../../Layouts/A3CanvasLayout';

export const Page10_11_ProfatoDumpling: React.FC = () => {
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
        {/* Page Number */}
        <Typography
          sx={{
            fontSize: '3rem',
            fontWeight: 700,
            color: '#D32F2F',
            fontFamily: 'Arial, sans-serif',
            marginBottom: '20px',
          }}
        >
          02
        </Typography>

        {/* Title */}
        <Typography
          sx={{
            fontSize: '3rem',
            fontWeight: 700,
            color: '#333',
            fontFamily: 'Arial, sans-serif',
            marginBottom: '30px',
            lineHeight: 1.2,
          }}
        >
          PROFATO DUMPLING
        </Typography>

        {/* Paragraph 1 */}
        <Typography
          sx={{
            fontSize: '1rem',
            color: '#555',
            fontFamily: 'Arial, sans-serif',
            lineHeight: 1.8,
            marginBottom: '25px',
            textAlign: 'justify',
          }}
        >
          These delicate dumplings represent the pinnacle of culinary craftsmanship. Each piece
          is hand-folded with care, ensuring the perfect balance of tender wrapper and savory filling.
          The result is a dish that delights both the eye and the palate.
        </Typography>

        {/* Paragraph 2 */}
        <Typography
          sx={{
            fontSize: '1rem',
            color: '#555',
            fontFamily: 'Arial, sans-serif',
            lineHeight: 1.8,
            marginBottom: '25px',
            textAlign: 'justify',
          }}
        >
          Our signature dumpling recipe has been perfected over years of experimentation. We use
          only the finest ingredients, from premium flour for the wrappers to fresh vegetables and
          perfectly seasoned meats for the filling. Every bite tells a story of tradition and innovation.
        </Typography>

        {/* Paragraph 3 */}
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
          Whether steamed, pan-fried, or boiled, these dumplings maintain their exceptional texture
          and flavor. Serve them as an appetizer or main course, accompanied by our specially crafted
          dipping sauce that enhances every nuance of taste.
        </Typography>

        {/* Small Dumpling Image */}
        <Box
          sx={{
            width: '250px',
            height: '200px',
            backgroundImage: 'url(https://images.unsplash.com/photo-1563245372-f21724e3856d?w=600&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            borderRadius: '8px',
            marginTop: 'auto',
          }}
        />
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
        {/* Large Pasta/Noodle Image */}
        <Box
          sx={{
            width: '100%',
            height: '400px',
            backgroundImage: 'url(https://images.unsplash.com/photo-1612927601601-6638404737ce?w=1200&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            borderRadius: '8px',
            marginBottom: '40px',
          }}
        />

        {/* Cooking Methods Section */}
        <Typography
          sx={{
            fontSize: '1.8rem',
            fontWeight: 700,
            color: '#333',
            fontFamily: 'Arial, sans-serif',
            marginBottom: '20px',
          }}
        >
          Cooking Methods
        </Typography>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '15px', marginBottom: '30px' }}>
          <Typography
            sx={{
              fontSize: '0.95rem',
              color: '#555',
              fontFamily: 'Arial, sans-serif',
              lineHeight: 1.6,
            }}
          >
            <strong>Steamed:</strong> Place dumplings in a steamer basket over boiling water for 8-10 minutes
            until wrapper becomes translucent.
          </Typography>
          <Typography
            sx={{
              fontSize: '0.95rem',
              color: '#555',
              fontFamily: 'Arial, sans-serif',
              lineHeight: 1.6,
            }}
          >
            <strong>Pan-Fried:</strong> Heat oil in a pan, add dumplings and cook until golden brown on bottom,
            then add water and cover to steam.
          </Typography>
          <Typography
            sx={{
              fontSize: '0.95rem',
              color: '#555',
              fontFamily: 'Arial, sans-serif',
              lineHeight: 1.6,
            }}
          >
            <strong>Boiled:</strong> Drop dumplings into boiling water and cook for 6-8 minutes until they
            float to the surface.
          </Typography>
        </Box>

        {/* Serving Suggestions */}
        <Typography
          sx={{
            fontSize: '1.8rem',
            fontWeight: 700,
            color: '#333',
            fontFamily: 'Arial, sans-serif',
            marginBottom: '15px',
          }}
        >
          Serving Suggestions
        </Typography>

        <Typography
          sx={{
            fontSize: '0.95rem',
            color: '#555',
            fontFamily: 'Arial, sans-serif',
            lineHeight: 1.7,
          }}
        >
          Serve hot with soy-vinegar dipping sauce, garnished with fresh scallions and sesame seeds.
          Pairs beautifully with hot tea or light soup.
        </Typography>
      </Box>
    </A3CanvasLayout>
  );
};
