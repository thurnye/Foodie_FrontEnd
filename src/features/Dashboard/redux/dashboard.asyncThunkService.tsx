/**
 * Dashboard Async Thunk Services
 * Uses services from Recipe feature
 */

import { createAsyncThunk } from '@reduxjs/toolkit';
import { ApiClientError } from '../../../shared/types/api.types';
import { RecipeApiService } from '../../Recipe/services/recipe.services';

/**
 * Fetch current user's recipes for dashboard
 */
export const fetchMyRecipes = createAsyncThunk(
  'dashboard/fetchMyRecipes',
  async (_, { rejectWithValue }) => {
    try {
      return await RecipeApiService.getMyRecipes();
    } catch (error) {
      const err =
        error instanceof ApiClientError
          ? error.message
          : 'Failed to fetch user recipes';
      return rejectWithValue(err);
    }
  }
);

/**
 * Delete a recipe from dashboard
 */
export const deleteMyRecipe = createAsyncThunk(
  'dashboard/deleteMyRecipe',
  async (recipeId: string, { rejectWithValue }) => {
    try {
      await RecipeApiService.deleteRecipe(recipeId);
      return recipeId;
    } catch (error) {
      const err =
        error instanceof ApiClientError
          ? error.message
          : 'Failed to delete recipe';
      return rejectWithValue(err);
    }
  }
);
