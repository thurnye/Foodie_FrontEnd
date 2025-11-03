import React from 'react';
import { Box, Typography } from '@mui/material';
import { A3CanvasLayout } from '../../Layouts/A3CanvasLayout';

export const Page04_05_TastySpicy: React.FC = () => {
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
            fontSize: '4rem',
            fontWeight: 700,
            color: '#D32F2F',
            fontFamily: 'Georgia, serif',
            lineHeight: 1.2,
            marginBottom: '40px',
          }}
        >
          Tasty and Spicy
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
          Discover the perfect balance of heat and flavor in our carefully curated collection
          of spicy recipes. Each dish is designed to tantalize your taste buds while maintaining
          the delicate harmony of ingredients that make every bite memorable.
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
          From mild to fiery, our recipes cater to all heat preferences. We believe that spice
          should enhance, not overpower, allowing the natural flavors of premium ingredients to
          shine through in every dish. Our chefs have perfected the art of balancing heat with
          complementary flavors.
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
          Whether you're a spice enthusiast or just beginning your journey into bold flavors,
          these recipes will guide you through techniques and ingredient combinations that create
          unforgettable meals. Experience the warmth, complexity, and satisfaction that comes
          from perfectly spiced cuisine.
        </Typography>

        {/* Bottom Images */}
        <Box
          sx={{
            display: 'flex',
            gap: '20px',
            marginTop: 'auto',
          }}
        >
          <Box
            sx={{
              width: '150px',
              height: '150px',
              backgroundImage: 'url(https://images.unsplash.com/photo-1546094096-0df4bcaaa337?w=400&q=80)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              borderRadius: '4px',
            }}
          />
          <Box
            sx={{
              width: '150px',
              height: '150px',
              backgroundImage: 'url(https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=400&q=80)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              borderRadius: '4px',
            }}
          />
        </Box>
      </Box>

      {/* Right Page */}
      <Box
        sx={{
          width: '100%',
          height: '100%',
          backgroundColor: '#fff',
          padding: '40px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* Large Pizza Image */}
        <Box
          sx={{
            width: '90%',
            height: '90%',
            backgroundImage: 'url(https://images.unsplash.com/photo-1513104890138-7c749659a591?w=1200&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            borderRadius: '8px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
          }}
        />
      </Box>
    </A3CanvasLayout>
  );
};
