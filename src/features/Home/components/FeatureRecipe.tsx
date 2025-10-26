import React from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Grid,
  Container,
} from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faThumbsUp } from '@fortawesome/free-regular-svg-icons';

import Img2 from '../../../public/images/tier3/img2.jpeg';
import Img3 from '../../../public/images/tier3/img3.jpeg';
import Img4 from '../../../public/images/tier3/img4.jpeg';
import { truncateText } from '../../../app/utils/app.text';

interface ShowcaseItem {
  recipeName: string;
  _id: string;
  thumbnail: string;
  duration: string;
  level: string;
}

const FeatureRecipe: React.FC = () => {
  const showCase: ShowcaseItem[] = [
    {
      recipeName: '40 Mother’s Day Breakfast and Brunch Recipes',
      _id: '664e404cb4513dfa42a75f07',
      thumbnail: Img2,
      duration: '30 Minutes',
      level: 'Super Easy',
    },
    {
      recipeName: 'Slow cooker apple cinnamon oatmeal pot',
      _id: '664e404cb4513dfa42a75ee9',
      thumbnail: Img3,
      duration: '30 Minutes',
      level: 'Super Easy',
    },
    {
      recipeName: 'Fudge waffles with ice cream and chocolate sauce',
      _id: '664e404cb4513dfa42a75ecb',
      thumbnail: Img4,
      duration: '30 Minutes',
      level: 'Super Easy',
    },
  ];

  return (
    <Container>
      <Box sx={{ mt: 8, px: { xs: 2, md: 6 } }}>
        <Grid container spacing={3}>
          {showCase.map((el, i) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              key={`threeCards_${i}_${el.recipeName}`}
            >
              <Card
                sx={{
                  borderRadius: 2,
                  overflow: 'hidden',
                  boxShadow: 2,
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-6px)',
                    boxShadow: 6,
                  },
                }}
              >
                {/* Image Section */}
                <Box sx={{ position: 'relative' }}>
                  <CardMedia
                    component='img'
                    image={el.thumbnail}
                    alt={el.recipeName}
                    sx={{
                      height: { xs: 200, sm: 220, md: 240 },
                      objectFit: 'cover',
                    }}
                  />
                  {/* Overlay Info */}
                  <Box
                    sx={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      background: 'rgba(255,255,255,0.9)',
                      px: 2,
                      py: 0.5,
                    }}
                  >
                    <Typography
                      variant='caption'
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        fontWeight: 600,
                        color: 'text.primary',
                      }}
                    >
                      <FontAwesomeIcon
                        icon={faClock}
                        style={{ marginRight: 4 }}
                      />
                      {el.duration}
                    </Typography>
                    <Typography
                      variant='caption'
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        fontWeight: 600,
                        color: 'text.primary',
                      }}
                    >
                      <FontAwesomeIcon
                        icon={faThumbsUp}
                        style={{ marginRight: 4 }}
                      />
                      {el.level}
                    </Typography>
                  </Box>
                </Box>

                {/* Content */}
                <CardContent sx={{ p: 2, pb: 0 }}>
                  <Typography
                    variant='h6'
                    component={Link}
                    to={{
                      pathname: `/recipe/${el._id}`,
                    }}
                    state={{ recipeId: el._id }}
                    sx={{
                      textDecoration: 'none',
                      color: 'text.primary',
                      fontSize: { xs: 15, md: 17 },
                      fontWeight: 600,
                      '&:hover': { textDecoration: 'underline' },
                      display: 'block',
                      height: { xs: 'auto', md: '2.5rem' },
                    }}
                  >
                    {el.recipeName}
                  </Typography>

                  <Typography
                    variant='body2'
                    sx={{
                      fontSize: { xs: 13, sm: 14 },
                      color: 'text.secondary',
                      my: 1,
                      lineHeight: 1.5,
                    }}
                  >
                    {truncateText(
                      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                    )}{' '}
                    <Link
                      to={{
                        pathname: `/recipe/${el._id}`,
                        search: `?q=${el.recipeName
                          .toLowerCase()
                          .replaceAll(' ', '-')}`,
                      }}
                      state={{ recipeId: el._id }}
                      style={{ color: '#1e8aff', textDecoration: 'none' }}
                    >
                      Read More
                    </Link>
                  </Typography>

                  {/* <Box sx={{ mt: 1 }}>
                  <AuthorFooter
                    thumbnail={el.thumbnail}
                    recipeName={el.recipeName}
                    recipeId={el._id}
                  />
                </Box> */}
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default FeatureRecipe;
