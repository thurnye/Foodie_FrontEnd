import React from 'react';
import { Box, Typography } from '@mui/material';

export const CoverPageLayoutFour: React.FC = () => {
  return (
    <Box
     key='coverPage'
      sx={{
        // border: '2px dotted green',
        height: '100%',
        position: 'relative',
      }}
    >
        <Box
              sx={{
                width: "210mm",
                height: "297mm",
                bgcolor: "#fff",
                borderRadius: 2,
                boxShadow: "0 0 25px rgba(0,0,0,0.15)",
                position: "relative",
                display: "flex",
                flexDirection: "column",
                p: 10,
              }}
            >
              {/* Recipe number */}
              <Typography
                sx={{
                  fontFamily: "'Helvetica Neue', sans-serif",
                  fontSize: "1rem",
                  color: "#999",
                  letterSpacing: "0.2em",
                  mb: "auto",
                }}
              >
                Recipe 001
              </Typography>
      
              {/* Main title */}
              <Typography
                sx={{
                  fontFamily: "'Helvetica Neue', sans-serif",
                  fontSize: "3rem",
                  fontWeight: 300,
                  color: "#2d2d2d",
                  mb: 2,
                }}
              >
                Delicious
              </Typography>
      
              <Typography
                sx={{
                  fontFamily: "'Helvetica Neue', sans-serif",
                  fontSize: "5rem",
                  fontWeight: 700,
                  color: "#2d2d2d",
                  mb: 6,
                  letterSpacing: "-0.02em",
                }}
              >
                RECIPE BOOK.
              </Typography>
      
              {/* Center image */}
              <Box
                component="img"
                src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&h=400&fit=crop"
                alt="Featured dish"
                sx={{
                  width: "350px",
                  height: "250px",
                  objectFit: "cover",
                  alignSelf: "center",
                  mb: 4,
                }}
              />
      
              {/* Subtitle */}
              <Typography
                sx={{
                  fontFamily: "'Helvetica Neue', sans-serif",
                  fontSize: "0.85rem",
                  color: "#999",
                  textAlign: "center",
                  lineHeight: 1.8,
                }}
              >
                Simple recipes, extraordinary flavors
              </Typography>
            </Box>
    </Box>
  );
};
