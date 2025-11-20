import React from 'react';
import { Box, Typography, Card, CardMedia } from '@mui/material';
import { PageLayoutFormat } from '../../../CookBook/types/book.types';


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
export default function TableOfContentsLayoutOne(
  recipeNames: string[],
  paperSize: PageLayoutFormat = PageLayoutFormat.A4
): React.ReactNode[] {
  const tableOfContentsData = splitRecipes(recipeNames);

  const pages: React.ReactNode[] = [];

  // Determine dimensions based on paper size
  // A3 = landscape (420mm x 297mm), A4 = portrait (210mm x 297mm)
  const isA3 = paperSize === PageLayoutFormat.A3;
  const dimensions = isA3
    ? { width: 1588, height: 1123 } // A3 landscape
    : { width: 794, height: 1123 }; // A4 portrait

  Object.entries(tableOfContentsData).forEach(([partKey, partItems], partIndex) => {
    const startNumber = partIndex === 0 ? 1 : 9 + (partIndex - 1) * 10 + 1;

    pages.push(
      <Box
        key={`tableOfContent-${partIndex + 1}`}
        sx={{
          width: dimensions.width,
          height: dimensions.height,
          position: 'relative',
        }}
      >
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            height: 'inherit',
          }}
        >
          <Box
            sx={{
              flexGrow: 1,
              mt: 0,
              mb: 0,
              py: 14,
              px: 8,
              height: 'inherit',
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
          <Box sx={{ width: 300, display: 'flex', flexDirection: 'column', justifyContent:'space-evenly', alignItems:'center' }}>
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
