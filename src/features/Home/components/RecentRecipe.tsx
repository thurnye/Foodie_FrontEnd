import React from 'react';
import { Box, Container, Grid, Paper, useTheme } from '@mui/material';
import Heading from '../../../app/components/UI/Heading';
// import RecentRecipeList from '../../../components/RecentContainer/RecentRecipeList';
// import Category from '../Categories/category';
// import NewsLetter from '../NewsLetter/newsLetter';
// import LatestRecipesList from '../LatestRecipe/latestRecipesList';
// import AppAdvert from '../AppAds/appAdvert';
// import MySocialMedia from '../SocialMedia/mySocialMedia';

import MealApp from '../../../public/images/adverts/ad.jpeg';
import UTube from '../../../public/images/adverts/utube.png';

import Category from '../../../app/components/Category';
import NewsLetterSubscriptionForm from '../../../app/components/NewsLetterSubscriptionForm';
import RecentRecipeCard from './RecentRecipeCard';
import { IRecipe } from '../../Recipe/types/recipe.types';
import { recent } from '../mock/home.mock';
import LatestRecipesCard from '../../../app/components/LatestRecipesCard';
import { authorLatestRecipe } from '../../Recipe/mocks/reviewMockData';
import AdGallery from '../../../app/components/AdGallery';
import MediaChannels from './MediaChannels';



const RecentRecipe: React.FC = () => {
  const theme = useTheme();

  return (
    <Box sx={{ py: 6, backgroundColor: theme.palette.background.default }}>
      <Container maxWidth='lg'>
        {/* Section Heading */}
        <Heading title='Recent Recipes' />

        {/* Main Grid */}
        <Grid container spacing={4} sx={{ mt: 2 }}>
          {/* --- Left Column (Main Recipe List) --- */}
          <Grid item xs={12} md={8}>
            <Paper
              elevation={0}
              sx={{
                p: { xs: 1, sm: 2 },
                border: {
                  xs: 'none',
                  md: `1px solid ${theme.palette.divider}`,
                },
                backgroundColor: theme.palette.background.paper,
              }}
            >
              {recent.map((recipe, i) => (
                <RecentRecipeCard
                  recipe={recipe}
                  key={`recent_${recipe._id}_${i}`}
                />
              ))}
              {/* <RecentRecipeList recent={recent} /> */}
            </Paper>
          </Grid>

          {/* --- Right Column (Sidebar) --- */}
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 3,
                position: { md: 'sticky' },
                top: { md: 120 },
              }}
            >
              <Category />
              <NewsLetterSubscriptionForm />
              <LatestRecipesCard
                title='LATEST RECIPES'
                recipes={authorLatestRecipe}
              />
              <AdGallery
                ads={[
                  {
                    src: MealApp,
                    alt: 'download the meal app',
                    href: 'https://example.com/healthy-food',
                  },
                ]}
                direction='column'
                hoverScale={1.03}
                spacing={2}
              />
              <MediaChannels/>
              <AdGallery
                ads={[
                  {
                    src: UTube,
                    alt: 'youtube channel',
                    href: 'https://youtube.com/healthy-food',
                  },
                ]}
                direction='column'
                hoverScale={1.03}
                spacing={2}
              />
              {/* <LatestRecipesList />
              <AppAdvert src={MealApp} title="Meal App" />
              <MySocialMedia />
              <AppAdvert src={UTube} title="YouTube" /> */}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default RecentRecipe;
