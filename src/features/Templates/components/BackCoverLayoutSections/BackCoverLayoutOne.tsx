import React from 'react';
import {
  Box,
  Typography,
} from '@mui/material';
import { IRecipe } from '../../../Recipe/types/recipe.types';

interface IBackCoverLayoutOne {
  data: IRecipe;
}
export default function BackCoverLayoutOne({ data }: IBackCoverLayoutOne) {
  return (
    <Box
      key='backCover'
      sx={{
        bgcolor: '#f5f5f5',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        p: -8,
      }}
    >
      <Box
        sx={{
          width: '210mm',
          height: '297mm',
          bgcolor: '#fff',
          borderRadius: 2,
          boxShadow: '0 0 25px rgba(0,0,0,0.15)',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/* Top section with beige background */}
        <Box
          sx={{
            height: '40%',
            bgcolor: '#F5E6D3',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Typography
            sx={{
              fontFamily: "'Helvetica Neue', sans-serif",
              fontSize: '0.9rem',
              color: '#999',
              letterSpacing: '0.2em',
            }}
          >
            0999
          </Typography>
        </Box>

        {/* Bottom section with content */}
        <Box
          sx={{
            flex: 1,
            p: 10,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Box
            component='img'
            src='https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400&h=300&fit=crop'
            alt='Thank you'
            sx={{
              width: '300px',
              height: '200px',
              objectFit: 'cover',
              mb: 6,
            }}
          />

          <Typography
            sx={{
              fontFamily: "'Helvetica Neue', sans-serif",
              fontSize: '3.5rem',
              fontWeight: 700,
              color: '#2d2d2d',
              mb: 4,
            }}
          >
            THANK YOU
          </Typography>

          <Typography
            sx={{
              fontFamily: "'Helvetica Neue', sans-serif",
              fontSize: '0.9rem',
              color: '#999',
              textAlign: 'center',
              lineHeight: 1.8,
            }}
          >
            Address
            <br />
            E-mail and Phone
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
