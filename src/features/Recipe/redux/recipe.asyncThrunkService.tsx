import { createAsyncThunk } from '@reduxjs/toolkit';
import { ApiClientError } from '../../../shared/types/api.types';
import { RecipeApiService } from '../services/recipe.services';
import { IRecipeQueryParams } from '../types/recipe.types';

export const fetchRecipes = createAsyncThunk(
  'recipes/fetchRecipes',
  async (params: IRecipeQueryParams = {}, { rejectWithValue }) => {
    try {
      return await RecipeApiService.getRecipes(params);
    } catch (error) {
      const err =
        error instanceof ApiClientError
          ? error.message
          : 'Failed to fetch recipes';
      return rejectWithValue(err);
    }
  }
);

export const fetchRecipeById = createAsyncThunk(
  'recipes/fetchRecipeById',
  async (recipeId: string, { rejectWithValue }) => {
    try {
      return await RecipeApiService.getRecipeById(recipeId);
    } catch (error) {
      const err =
        error instanceof ApiClientError
          ? error.message
          : 'Failed to fetch recipe';
      return rejectWithValue(err);
    }
  }
);

export const deleteRecipe = createAsyncThunk(
  'recipes/deleteRecipe',
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