import React from 'react';
import { Card, CardMedia, Box } from '@mui/material';
import ad from '../../../public/images/adverts/book.png';

const BookAd: React.FC = () => {
  return (
    <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', my: 3 }}>
      <Card
        sx={{
          width: '100%',
          maxWidth: 650,
          borderRadius: 2,
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          overflow: 'hidden',
        }}
      >
        <a href="#" style={{ textDecoration: 'none', display: 'block' }}>
          <CardMedia
            component="img"
            image={ad}
            alt="advert"
            sx={{
              width: '100%',
              height: 'auto',
              display: 'block',
              transition: 'transform 0.3s ease',
              '&:hover': {
                transform: 'scale(1.02)',
              },
            }}
          />
        </a>
      </Card>
    </Box>
  );
};

export default BookAd;
