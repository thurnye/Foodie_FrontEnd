import React from 'react';
import {
  Box,
  Typography,
  Card,
  CardMedia,
} from '@mui/material';
import { ICookbookAuthor } from '../../../CookBook/types/cookbook.types';

interface IIntroPageLayoutOne {
  author: ICookbookAuthor;
}

export default function IntroPageLayoutOne({ author }: IIntroPageLayoutOne) {
  console.log('author in IntroPageLayoutOne', author);
  return (
    <Box
      key='welcome'
      sx={{
        // border: '2px dotted green',
         width: 794, height: 1123 ,
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
                  image={author.avatar}
                  alt={author.firstName}
                  sx={{ maxHeight: 300, objectFit: 'cover' }}
                />
              </Card>
            </Box>
            <Box>
              <Typography>Contact Me.</Typography>
              <Typography>Phone: +123-4566-7890</Typography>
              <Typography>Mail. {author.email}</Typography>
              <Typography>Web: <a href='www.author.com' target='_blank'>www.author.com</a></Typography>
            </Box>
          </Box>
          <Box sx={{ px: 8, py: 4 }}>
            <Typography> WELCOME</Typography>
            <Typography>
              {author.bio}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
