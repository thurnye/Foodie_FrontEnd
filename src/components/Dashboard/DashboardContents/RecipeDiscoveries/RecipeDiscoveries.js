import React from 'react';
import styles from './RecipeDiscoveries.module.css';
import img7 from '../../../../public/images/recentRecipes/img7.jpeg';
import DashboardRecipeCard from '../DashboardRecipeCard/DashboardRecipeCard';
import { Box } from '@mui/material';

const recipe = [
  {
    recipeName: 'Chocolate banana pancakes',
    description:
      'Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad mi',
    duration: '30 Minutes',
    thumbnail: img7,
    level: 'Super Easy',
    isVideo: false,
    link: '/all-recipes',
    length: '0:30',
  },
];


const RecipeDiscoveries = () => {
  return (
    <Box className={styles.RecipeDiscoveries} sx={{height: 200, overflow: 'auto'}}>
      <DashboardRecipeCard recipes={recipe} origin={"recipesDiscoveries"}/>
    </Box>
  );
};

export default RecipeDiscoveries;
