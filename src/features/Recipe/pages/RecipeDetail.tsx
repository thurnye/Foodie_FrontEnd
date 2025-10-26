import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import {
  Box,
  Grid,
  Typography,
  CircularProgress,
  Container,
  Alert,
  Button,
} from '@mui/material';

import { useAppDispatch, useAppSelector } from '../../../app/hooks/app.hooks';
import { fetchRecipeById } from '../redux/recipe.asyncThrunkService';
import { ArrowBack } from '@mui/icons-material';
import RecipeAuthor from '../components/RecipeAuthor';
import NewsLetterSubscriptionForm from '../../../app/components/NewsLetterSubscriptionForm';
import AuthorLatestRecipes from '../components/AuthorLatestRecipes';
import Category from '../../../app/components/Category';
import RecipeContainer from '../components/RecipeContainer';
import BookAd from '../components/BookAd';
import Recommendations from '../components/Recommendations';
import ReviewForm from '../components/ReviewForm';
import ReviewList from '../components/ReviewList';
import FoodAd from '../components/FoodAd';

// ---------- Component ----------
const RecipeDetail: React.FC = () => {
  const { recipeId } = useParams<{ recipeId: string }>();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const {
    currentRecipe: recipe,
    loading,
    error,
  } = useAppSelector((state) => state.recipe);

  useEffect(() => {
    if (recipeId) {
      dispatch(fetchRecipeById(recipeId));
    }
  }, [dispatch, recipeId]);

  if (loading) {
    return (
      <Container
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '60vh',
        }}
      >
        <CircularProgress />
      </Container>
    );
  }

  if (error || !recipe) {
    return (
      <Container sx={{ mt: 5 }}>
        <Alert severity='error'>{error || 'Recipe not found'}</Alert>
        <Button
          startIcon={<ArrowBack />}
          onClick={() => navigate('/recipes')}
          sx={{ mt: 2 }}
        >
          Back to Recipes
        </Button>
      </Container>
    );
  }

  return (
    <Container sx={{ py: 5 }}>
      <Grid container spacing={4}>
        {/* Left section - Recipe Content */}
        <Grid item xs={12} md={8}>
          <RecipeContainer recipe={recipe} />
        </Grid>

        {/* Right section - Sidebar */}
        <Grid item xs={12} md={4}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            <RecipeAuthor />
            <FoodAd />
            <NewsLetterSubscriptionForm />
            <AuthorLatestRecipes />
            <Category />
          </Box>
        </Grid>
      </Grid>
      <Box>
        {/* Book Ad */}
        <Box sx={{ my: 5 }}>
          <BookAd />
        </Box>

        {/* Recommendations */}
        <Box sx={{ my: 5 }}>
          <Recommendations />
        </Box>

        {/* Review Form */}
        <Box sx={{ my: 5 }}>
          <ReviewForm />
        </Box>

        {/* Review List */}
        <Box sx={{ my: 5 }}>
          {recipeId && <ReviewList recipeId={recipeId} />}
        </Box>
      </Box>
    </Container>
  );
};

export default RecipeDetail;
