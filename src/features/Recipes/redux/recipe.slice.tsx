/**
 * Recipes Redux Slice
 */

import { createSlice } from '@reduxjs/toolkit';
import { IRecipe } from '../types/recipe.types';
import { deleteRecipe, fetchRecipeById, fetchRecipes } from './recipe.asyncThrunkService';

interface IRecipesState {
  recipes: IRecipe[];
  currentRecipe: IRecipe | null;
  loading: boolean;
  error: string | null;
  pagination: {
    page: number;
    limit: number;
    total: number;
    pages: number;
  } | null;
}

const initialState: IRecipesState = {
  recipes: [],
  currentRecipe: null,
  loading: false,
  error: null,
  pagination: null,
};

// --- Slice ---

const recipesSlice = createSlice({
  name: 'recipes',
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
    clearCurrentRecipe: (state) => {
      state.currentRecipe = null;
    },
  },
  extraReducers: (builder) => {
    const startLoading = (state: IRecipesState) => {
      state.loading = true;
      state.error = null;
    };
    const stopLoading = (state: IRecipesState) => {
      state.loading = false;
    };

    builder
      // Fetch Recipes
      .addCase(fetchRecipes.pending, startLoading)
      .addCase(fetchRecipes.fulfilled, (state, action) => {
        stopLoading(state);
        console.log('Fetched Recipes:', action.payload);
        state.recipes = action.payload?.data || [];
        state.pagination = action.payload?.pagination || null;
      })
      .addCase(fetchRecipes.rejected, (state, action) => {
        stopLoading(state);
        state.error = action.payload as string;
      })

      // Fetch Single Recipe
      .addCase(fetchRecipeById.pending, startLoading)
      .addCase(fetchRecipeById.fulfilled, (state, action) => {
        stopLoading(state);
        console.log('Fetched Recipe By ID:', action.payload);
        state.currentRecipe = action.payload;
      })
      .addCase(fetchRecipeById.rejected, (state, action) => {
        stopLoading(state);
        state.error = action.payload as string;
      })

      // Delete Recipe
      .addCase(deleteRecipe.pending, startLoading)
      .addCase(deleteRecipe.fulfilled, (state, action) => {
        stopLoading(state);
        state.recipes = state.recipes.filter(
          (recipe) => recipe._id !== action.payload
        );
      })
      .addCase(deleteRecipe.rejected, (state, action) => {
        stopLoading(state);
        state.error = action.payload as string;
      });
  },
});

export const { clearError, clearCurrentRecipe } = recipesSlice.actions;
export default recipesSlice.reducer;
