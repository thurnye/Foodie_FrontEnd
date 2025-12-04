import React from 'react';
import { Box, Typography } from '@mui/material';
import { A3CanvasLayout } from '../../Layouts/A3CanvasLayout';

export const Page12_13_CreamSoup: React.FC = () => {
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
            fontSize: '3.5rem',
            fontWeight: 700,
            color: '#333',
            fontFamily: 'Arial, sans-serif',
            marginBottom: '30px',
            lineHeight: 1.2,
          }}
        >
          CREAM SOUP
        </Typography>

        {/* Description */}
        <Typography
          sx={{
            fontSize: '1rem',
            color: '#555',
            fontFamily: 'Arial, sans-serif',
            lineHeight: 1.8,
            marginBottom: '30px',
            textAlign: 'justify',
          }}
        >
          Indulge in the velvety richness of our signature cream soup. This comforting classic
          combines the finest ingredients with traditional techniques to create a soup that's both
          luxurious and satisfying. Each spoonful delivers warmth and depth of flavor.
        </Typography>

        {/* Quote Section */}
        <Box
          sx={{
            borderLeft: '4px solid #D32F2F',
            paddingLeft: '20px',
            marginBottom: '30px',
          }}
        >
          <Typography
            sx={{
              fontSize: '1.2rem',
              fontStyle: 'italic',
              color: '#555',
              fontFamily: 'Georgia, serif',
              lineHeight: 1.6,
            }}
          >
            "The secret to perfect cream soup lies in the slow simmering process that allows
            flavors to meld harmoniously while maintaining the soup's silky texture."
          </Typography>
        </Box>

        {/* Nutritional Benefits */}
        <Typography
          sx={{
            fontSize: '1.5rem',
            fontWeight: 700,
            color: '#333',
            fontFamily: 'Arial, sans-serif',
            marginBottom: '15px',
          }}
        >
          Nutritional Benefits
        </Typography>

        <Typography
          sx={{
            fontSize: '0.95rem',
            color: '#555',
            fontFamily: 'Arial, sans-serif',
            lineHeight: 1.7,
            marginBottom: '15px',
          }}
        >
          Our cream soup is packed with nutrients from fresh vegetables and herbs. Rich in vitamins
          A and C, it also provides essential minerals and antioxidants that support overall health.
        </Typography>

        <Typography
          sx={{
            fontSize: '0.95rem',
            color: '#555',
            fontFamily: 'Arial, sans-serif',
            lineHeight: 1.7,
          }}
        >
          The cream base adds calcium and protein, making this soup not only delicious but also
          a wholesome choice for any meal.
        </Typography>
      </Box>

      {/* Right Page */}
      <Box
        sx={{
          width: '100%',
          height: '100%',
          backgroundColor: '#fff',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/* Red Panel - Classic Recipe */}
        <Box
          sx={{
            backgroundColor: '#D32F2F',
            padding: '40px 50px',
            height: '45%',
          }}
        >
          <Typography
            sx={{
              fontSize: '2rem',
              fontWeight: 700,
              color: '#fff',
              fontFamily: 'Arial, sans-serif',
              marginBottom: '20px',
            }}
          >
            Classic Recipe
          </Typography>

          <Typography
            sx={{
              fontSize: '1.3rem',
              fontWeight: 600,
              color: '#fff',
              fontFamily: 'Arial, sans-serif',
              marginBottom: '15px',
            }}
          >
            Ingredients:
          </Typography>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '25px' }}>
            <Typography sx={{ fontSize: '0.9rem', color: '#fff', fontFamily: 'Arial, sans-serif' }}>
              • 3 cups fresh vegetables (carrots, celery, onions)
            </Typography>
            <Typography sx={{ fontSize: '0.9rem', color: '#fff', fontFamily: 'Arial, sans-serif' }}>
              • 4 cups vegetable stock
            </Typography>
            <Typography sx={{ fontSize: '0.9rem', color: '#fff', fontFamily: 'Arial, sans-serif' }}>
              • 1 cup heavy cream
            </Typography>
            <Typography sx={{ fontSize: '0.9rem', color: '#fff', fontFamily: 'Arial, sans-serif' }}>
              • 2 tbsp butter
            </Typography>
            <Typography sx={{ fontSize: '0.9rem', color: '#fff', fontFamily: 'Arial, sans-serif' }}>
              • Fresh herbs (thyme, bay leaf)
            </Typography>
          </Box>

          <Typography
            sx={{
              fontSize: '1.3rem',
              fontWeight: 600,
              color: '#fff',
              fontFamily: 'Arial, sans-serif',
              marginBottom: '15px',
            }}
          >
            Preparation:
          </Typography>

          <Typography
            sx={{
              fontSize: '0.9rem',
              color: '#fff',
              fontFamily: 'Arial, sans-serif',
              lineHeight: 1.6,
            }}
          >
            Sauté vegetables in butter until soft, add stock and simmer for 25 minutes.
            Blend until smooth, stir in cream, and season to taste. Garnish with fresh herbs.
          </Typography>
        </Box>

        {/* 2x2 Grid of Soup Images */}
        <Box
          sx={{
            padding: '30px 50px',
            flex: 1,
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '20px',
          }}
        >
          <Box
            sx={{
              width: '100%',
              height: '180px',
              backgroundImage: 'url(https://images.unsplash.com/photo-1547592166-23ac45744acd?w=600&q=80)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              borderRadius: '4px',
            }}
          />
          <Box
            sx={{
              width: '100%',
              height: '180px',
              backgroundImage: 'url(https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?w=600&q=80)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              borderRadius: '4px',
            }}
          />
          <Box
            sx={{
              width: '100%',
              height: '180px',
              backgroundImage: 'url(https://images.unsplash.com/photo-1588566565463-180a5b2090d2?w=600&q=80)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              borderRadius: '4px',
            }}
          />
          <Box
            sx={{
              width: '100%',
              height: '180px',
              backgroundImage: 'url(https://images.unsplash.com/photo-1562376552-0d160a2f238d?w=600&q=80)',
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
