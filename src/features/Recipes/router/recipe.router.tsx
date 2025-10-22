import { RouteObject } from 'react-router-dom';
import { lazy } from 'react';

const Recipes = lazy(() => import('../pages/Recipes'));
const RecipeDetail = lazy(() => import('../pages/RecipeDetail'));

export const recipesRoutes: RouteObject[] = [
  { path: '/recipes',element: <Recipes />},
  { path: '/recipes/:recipeId',element: <RecipeDetail />},
];
