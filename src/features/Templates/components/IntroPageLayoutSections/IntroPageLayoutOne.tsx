import React from 'react';
import {
  Box,
  Typography,
  Card,
  CardMedia,
} from '@mui/material';
import { IRecipe } from '../../../Recipe/types/recipe.types';

interface IIntroPageLayoutOne {
  recipe: IRecipe;
}

export default function IntroPageLayoutOne({ recipe }: IIntroPageLayoutOne) {
  return (
    <Box
      key='welcome'
      sx={{
        // border: '2px dotted green',
        height: '100%',
        position: 'relative',
      }}
    >
      {/* Background Image */}
      <Box
        sx={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=800&h=600&fit=crop')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          width: '100%',
          height: '100%',
          borderRadius: 1,
          p: 10,
        }}
      >
        {/* Inner Content Box */}
        <Box
          sx={{
            height: 'inherit',
            margin: 'auto',
            background: 'white',
            width: '95%',
            textAlign: 'center',
          }}
        >
          <Box
            sx={{
              // border: '2px dotted grey',
              py: 8,
              px: 3,
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              alignItems: 'center',
              textAlign: 'start',
            }}
          >
            <Box>
              <Card sx={{ mb: 2, maxWidth: '100%' }}>
                <CardMedia
                  component='img'
                  image={recipe.details.thumbnail}
                  alt={recipe.basicInfo.recipeName}
                  sx={{ maxHeight: 300, objectFit: 'cover' }}
                />
              </Card>
            </Box>
            <Box>
              <Typography>Contact Me.</Typography>
              <Typography>Phone: +123-4566-7890</Typography>
              <Typography>Mail. use@example.com</Typography>
              <Typography>Web: www.example.com</Typography>
            </Box>
          </Box>
          <Box sx={{ px: 8, py: 4 }}>
            <Typography> WELCOME</Typography>
            <Typography>
              {' '}
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id
              beatae quas nisi ad? Deleniti veritatis delectus beatae nisi
              laudantium pariatur odio? Quas laborum et consectetur recusandae
              dolorem maxime commodi voluptatem?
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
