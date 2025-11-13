import React from 'react';
import { IRecipe } from '../../../Recipe/types/recipe.types';
import { Box, Typography, Card, CardMedia } from '@mui/material';

const recipeData = require('../../../../shared/data/shared.updatedRecipeFoodieData.json');

// split records into chunks for table of contents
function splitRecipes(recipeData: string[]) {
  const result: Record<string, string[]> = {};
  const total = recipeData.length;

  // first 9 records
  result[`part1`] = recipeData.slice(0, 9);

  // remaining records in groups of 10
  let part = 2;
  for (let i = 9; i < total; i += 10) {
    const chunk = recipeData.slice(i, i + 10);
    result[`part${part}`] = chunk;
    part++;
  }

  return result;
}

// Return pages as an array instead of JSX directly
export default function TableOfContentsLayoutOne(): React.ReactNode[] {
  const recipeNames = recipeData.map((el: IRecipe) => el.basicInfo.recipeName);
  const tableOfContentsData = splitRecipes(recipeNames);

  const pages: React.ReactNode[] = [];

  Object.entries(tableOfContentsData).forEach(([partKey, partItems], partIndex) => {
    const startNumber = partIndex === 0 ? 1 : 9 + (partIndex - 1) * 10 + 1;

    pages.push(
      <Box
        key={`tableOfContent-${partIndex + 1}`}
        sx={{
          height: '100%',
          position: 'relative',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            height: 'inherit',
          }}
        >
          <Box
            sx={{
              flexGrow: 1,
              mt: -5,
              mb: 4,
              py: 14,
              px: 8,
              height: '115%',
              backgroundColor: '#f9f9f9',
            }}
          >
            {partIndex < 1 && (
              <Typography
                sx={{
                  fontFamily: "'Arial', sans-serif",
                  fontSize: '4rem',
                  fontWeight: 700,
                  color: '#2d2d2d',
                  letterSpacing: '0.05em',
                  mb: 2,
                  lineHeight: 1.2,
                }}
              >
                CONTENT
              </Typography>
            )}

            {partItems.map((item, index) => (
              <Box
                key={`content-item-${index}`}
                sx={{
                  display: 'flex',
                  mb: 2,
                }}
              >
                <Box sx={{ mr: 2 }}>
                  <Typography
                    sx={{
                      fontSize: '2rem',
                      fontWeight: 700,
                    }}
                  >
                    {startNumber < 10
                      ? `0${startNumber + index}`
                      : startNumber + index}
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    variant='body1'
                    sx={{
                      fontSize: '1rem',
                      fontWeight: 700,
                    }}
                  >
                    {item}
                  </Typography>
                  <Typography variant='caption' sx={{ width: 300 }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Molestiae, earum!
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>

          {/* Image column */}
          <Box sx={{ width: 300, py: 4 }}>
            {Array.from(Array(3)).map((_, index) => (
              <Box key={`toc-img-${index}`}>
                <Card sx={{ mb: 2, maxWidth: '100%', boxShadow: 'none' }}>
                  <CardMedia
                    component='img'
                    image='https://images.unsplash.com/photo-1488477181946-6428a0291777?w=800&h=600&fit=crop'
                    alt='Muesli'
                    sx={{ maxHeight: 300, objectFit: 'cover', p: 2 }}
                  />
                </Card>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    );
  });

  return pages;
}
