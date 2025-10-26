import React from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActionArea,
} from '@mui/material';

import img1 from '../../../public/images/recommendation/img1.jpeg';
import img2 from '../../../public/images/recommendation/img2.jpeg';
import img3 from '../../../public/images/recommendation/img3.jpeg';
import img4 from '../../../public/images/recommendation/img4.jpeg';
import Heading from '../../../app/components/UI/Heading';

// ---------- Types ----------
interface RecommendationItem {
  title: string;
  image: string;
  slug: string;
  _id: string;
}

const recommendations: RecommendationItem[] = [
  {
    title: 'Overnight oatmeal and fig for breakfast weight loss',
    image: img1,
    slug: 'overnight-oatmeal-and-fig-for-breakfast-weight-loss',
    _id: '664e404cb4513dfa42a75d99',
  },
  {
    title: 'Smoked tofu salad with spicy peanut sauce',
    image: img2,
    slug: 'smoked-tofu-salad-with-spicy-peanut-sauce',
    _id: '664e404cb4513dfa42a75d99',
  },
  {
    title: '5 antioxidant-powered smoothie recipes',
    image: img3,
    slug: '5-antioxidant-powered-smoothie-recipes',
    _id: '664e404cb4513dfa42a75d99',
  },
  {
    title: 'Stuffed avocado with vegetables and fruit',
    image: img4,
    slug: 'stuffed-avocado-with-vegetables-and-fruit',
    _id: '664e404cb4513dfa42a75d99',
  },
];

const Recommendations: React.FC = () => {
  return (
    <Box sx={{ mt: 5 }}>
      {/* Heading */}
      <Box sx={{ mb: 3 }}>
        <Heading title='You may like these too' />
      </Box>

      {/* Recommendations Grid */}
      <Grid container spacing={3}>
        {recommendations.map((item) => (
          <Grid item xs={6} sm={6} md={3} key={item.slug}>
            
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.2s, box-shadow 0.2s',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: 6,
                },
              }}
            >
              <CardActionArea
                component={Link}
                to={`/recipe/${item._id}`}
                sx={{ flexGrow: 1 }}
              >
                <CardMedia
                  component='img'
                  height='194'
                  image={
                    item.image
                  }
                  alt={item.title}
                  sx={{ objectFit: 'cover' }}
                />
                <CardContent>
                  <Typography
                    variant='body2'
                    sx={{
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                    }}
                  >
                    {item.title}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Recommendations;
