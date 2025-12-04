import React from 'react';
import {
  Box,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Grid,
} from '@mui/material';
import { Link } from 'react-router-dom';

interface IBookTemplate {
  name: string;
  pages: number;
  paperSize: 'A3' | 'A4' | 'US letter';
  thumbnail: string;
}

interface ITemplateList {}

const bookTemplateData: IBookTemplate[] = [
  {
    name: 'Rustic',
    pages: 15,
    paperSize: 'A4',
    thumbnail: 'https://images.unsplash.com/photo-1510626176961-4b57d4fbad03',
  },
  {
    name: 'Classic',
    pages: 21,
    paperSize: 'A4',
    thumbnail: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f',
  },
  {
    name: 'Minimalist',
    pages: 18,
    paperSize: 'A4',
    thumbnail: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f',
  },
  {
    name: 'Modern',
    pages: 25,
    paperSize: 'A4',
    thumbnail: 'https://images.unsplash.com/photo-1526312426976-f4d754fa9bd6',
  },
  {
    name: 'Traditional',
    pages: 30,
    paperSize: 'A4',
    thumbnail: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836',
  },
  {
    name: 'Hot',
    pages: 30,
    paperSize: 'A4',
    thumbnail: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836',
  },
  {
    name: 'Vegan',
    pages: 30,
    paperSize: 'A4',
    thumbnail: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836',
  },
  {
    name: 'Caliente',
    pages: 30,
    paperSize: 'A4',
    thumbnail: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836',
  },
];

const TemplateLists: React.FC<ITemplateList> = () => {
  return (
    <Box sx={{ p: 4 }}>
      <Typography variant='h4' fontWeight={700} mb={3}>
        Cookbook Layout Templates
      </Typography>

      <Grid container spacing={3}>
        {bookTemplateData.map((template, index) => (
          <Grid item xs={6} sm={6} md={3} key={index}>
            <Card
              sx={{
                borderRadius: 3,
                overflow: 'hidden',
                boxShadow: 4,
                transition: 'transform 0.3s ease',
                '&:hover': { transform: 'scale(1.03)' },
                maxWidth: 250,
                height: {xs: 290, md: 350},
              }}
            >
              <Link to={`/dashboard/template/${template.name.toLowerCase()}`}>
                <CardMedia
                  component='img'
                  height='200'
                  image={template.thumbnail}
                  alt={template.name}
                />
                <CardContent>
                  <Typography variant='body1' fontWeight={600} sx={{py: 2}}>
                    {template.name}
                  </Typography>
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: { xs: 'column', md: 'row' },
                      justifyContent: { xs: 'flex-start', md: 'space-between'},
                      alignItems: { xs: 'flex-start', md: 'center'}
                    }}
                  >
                    <Typography variant='body2' color='text.secondary'>
                      Pages: {template.pages}
                    </Typography>
                    <Typography variant='body2' color='text.secondary'>
                      Paper Size: {template.paperSize}
                    </Typography>
                  </Box>
                </CardContent>
              </Link>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default TemplateLists;
