import React from 'react';
import { Box, Typography } from '@mui/material';

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

export default function TableOfContentsLayoutTwo(
  recipeNames: string[]
): React.ReactNode[] {
  const tableOfContentsData: Record<string, string[]> =
    splitRecipes(recipeNames);

  const pages: React.ReactNode[] = [];

  Object.entries(tableOfContentsData).forEach(
    ([partKey, partItems], partIndex) => {
      /** Start number for this page */
      const startNumber =
        partIndex === 0 ? 1 : 9 + (partIndex - 1) * 10 + 1;

      pages.push(
        <Box
          key={`tableOfContent-${partIndex + 1}`}
          sx={{
            width: 1588,
            height: 1123,
            position: 'relative',
          }}
        >
          <Box
            sx={{
              width: '420mm',
              height: '297mm',
              bgcolor: '#fff',
              borderRadius: 2,
              boxShadow: '0 0 25px rgba(0,0,0,0.15)',
              overflow: 'hidden',
              display: 'flex',
            }}
          >
            {/* Left page - Large image */}
            <Box
              sx={{
                width: '50%',
                height: '100%',
                position: 'relative',
              }}
            >
              <Box
                component="img"
                src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&h=1200&fit=crop"
                alt="Overhead food spread"
                sx={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
            </Box>

            {/* Right page - Table of Contents */}
            <Box
              sx={{
                width: '50%',
                height: '100%',
                bgcolor: '#5C8D89',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                p: 8,
              }}
            >
              {partIndex < 1 && (
              <Typography
                sx={{
                  fontFamily: "'Arial', sans-serif",
                  fontSize: '3.5rem',
                  fontWeight: 700,
                  color: '#fff',
                  mb: 6,
                  letterSpacing: '0.02em',
                }}
              >
                Table of Content
              </Typography>
              )}

              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                {partItems.map((item: string, index: number) => {
                  const itemNumber = startNumber + index; // continuous numbering
                  const itemPage = itemNumber + 3; // your logic: starts at page 4

                  return (
                    <Box
                      key={`${item}-${index}`}
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 3,
                        borderBottom: '1px solid rgba(255,255,255,0.3)',
                        pb: 2,
                      }}
                    >
                      {/* Number */}
                      <Typography
                        sx={{
                          fontFamily: "'Arial', sans-serif",
                          fontSize: '2rem',
                          fontWeight: 700,
                          color: '#fff',
                          minWidth: '60px',
                        }}
                      >
                        {itemNumber.toString().padStart(2, '0')}
                      </Typography>

                      {/* Title */}
                      <Typography
                        sx={{
                          fontFamily: "'Arial', sans-serif",
                          fontSize: '1.4rem',
                          fontWeight: 400,
                          color: '#fff',
                          flex: 1,
                        }}
                      >
                        {item}
                      </Typography>

                      {/* Page */}
                      <Typography
                        sx={{
                          fontFamily: "'Arial', sans-serif",
                          fontSize: '1.2rem',
                          fontWeight: 400,
                          color: 'rgba(255,255,255,0.8)',
                        }}
                      >
                        {itemPage}
                      </Typography>
                    </Box>
                  );
                })}
              </Box>
            </Box>
          </Box>
        </Box>
      );
    }
  );

  return pages;
}
