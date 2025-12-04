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
import { truncateText } from '../../../app/utils/app.text';
import { featureRecipe } from '../mock/home.mock';

const FeatureRecipe: React.FC = () => {
  return (
    <Container>
      <Box sx={{ mt: 8, px: { xs: 2, md: 6 } }}>
        <Grid container spacing={3}>
          {featureRecipe.map((el, i) => {
            const aboutText =
              el.details.about?.find((item) => item.type === 'text')?.value ??
              '';
            return (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                key={`threeCards_${i}_${el.basicInfo.recipeName}`}
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
                      image={el.details.thumbnail}
                      alt={el.basicInfo.recipeName}
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
                        {el.basicInfo.duration.value}
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
                        {el.basicInfo.level.value}
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
                        mb: 3,
                        '&:hover': { textDecoration: 'underline' },
                        display: 'block',
                        height: { xs: 'auto', md: '2.5rem' },
                      }}
                    >
                      {el.basicInfo.recipeName}
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
                      {truncateText(aboutText, 120)}{' '}
                      <Link
                        to={{
                          pathname: `/recipe/${el._id}`,
                          search: `?q=${el.basicInfo.recipeName
                            .toLowerCase()
                            .replaceAll(' ', '-')}`,
                        }}
                        state={{ recipeId: el._id }}
                        style={{ color: '#1e8aff', textDecoration: 'none' }}
                      >
                        Read More
                      </Link>
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Container>
  );
};

export default FeatureRecipe;
