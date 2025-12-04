import React from 'react';
import LatestRecipesCard from '../../../app/components/LatestRecipesCard';
import { authorLatestRecipe } from '../mocks/reviewMockData';

const AuthorLatestRecipes: React.FC = () => {
  return (
    <LatestRecipesCard title='LATEST RECIPES' recipes={authorLatestRecipe} />
  );
};

export default AuthorLatestRecipes;
