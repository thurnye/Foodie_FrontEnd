import { createAsyncThunk } from '@reduxjs/toolkit';
import { ApiClientError } from '../../../shared/types/api.types';
import { RecipeApiService } from '../services/recipe.services';
import { IRecipeData } from '../types/recipe.types';

export const fetchRecipes = createAsyncThunk(
  'recipes/fetchRecipes',
  async (_, { rejectWithValue }) => {
    try {
      return await RecipeApiService.getRecipes();
    } catch (error) {
      const err =
        error instanceof ApiClientError
          ? error.message
          : 'Failed to fetch recipes';
      return rejectWithValue(err);
    }
  }
);

export const saveRecipe = createAsyncThunk(
  'recipes/saveRecipe',
  async (data: IRecipeData, { rejectWithValue }) => {
    try {
      return await RecipeApiService.saveRecipe(data);
    } catch (error) {
      const err =
        error instanceof ApiClientError
          ? error.message
          : 'Failed to save recipes';
      return rejectWithValue(err);
    }
  }
);

export const deleteRecipe = createAsyncThunk(
  'recipes/deleteRecipe',
  async (recipesId: string, { rejectWithValue }) => {
    try {
      await RecipeApiService.deleteRecipe(recipesId);
      return recipesId;
    } catch (error) {
      const err =
        error instanceof ApiClientError
          ? error.message
          : 'Failed to delete recipes';
      return rejectWithValue(err);
    }
  }
);
