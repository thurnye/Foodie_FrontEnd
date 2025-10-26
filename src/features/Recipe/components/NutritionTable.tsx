import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import { INutritionalFact } from '../types/recipe.types';



interface NutrientsTableProps {
  nutrients: INutritionalFact[];
}

// ---- Component ----
const NutrientsTable: React.FC<NutrientsTableProps> = ({ nutrients }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        width: '100%',
        py: 3,
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Box
        sx={{
          width: '100%',
          maxWidth: 1000,
          borderRadius: 1,
          overflow: 'hidden',
          boxShadow: theme.shadows[1],
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', lg: '30% 70%' },
        }}
      >
        {/* Left Section (Heading) */}
        <Box
          sx={{
            backgroundColor: '#fee86d',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            p: { xs: 2, lg: 4 },
          }}
        >
          <Typography
            variant="h5"
            sx={{
              textAlign: 'center',
              fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
              fontWeight: 600,
              color: theme.palette.text.primary,
            }}
          >
            Nutritional Information
          </Typography>
        </Box>

        {/* Right Section (Grid layout for nutrients) */}
        <Box
          sx={{
            backgroundColor: '#f8f6e6',
            display: 'grid',
            gridTemplateColumns: {
              xs: 'repeat(3, 1fr)',
              sm: 'repeat(3, 1fr)',
              md: 'repeat(4, 1fr)',
              lg: 'repeat(5, 1fr)',
            },
            gap: { xs: 2, sm: 3, md: 4 },
            alignItems: 'center',
            justifyItems: 'center',
            py: { xs: 3, lg: 4 },
            px: { xs: 2, lg: 3 },
          }}
        >
          {nutrients.map((el, index) => (
            <Box
              key={`nutrient_${index}`}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
              }}
            >
              <Typography
                sx={{
                  fontWeight: 600,
                  fontSize: { xs: '0.95rem', sm: '1rem' },
                  fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
                  color: theme.palette.text.primary,
                }}
              >
                {el.amount}
                {el.unit}
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: '0.85rem', sm: '0.9rem' },
                  color: theme.palette.text.secondary,
                  fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
                }}
              >
                {el.name}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default NutrientsTable;
