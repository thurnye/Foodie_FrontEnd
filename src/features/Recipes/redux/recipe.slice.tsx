/**
 * Recipes Redux Slice (Unified Create/Update)
 */

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { ApiClientError } from '../../../shared/types/api.types';
import { IRecipe } from '../types/recipe.types';
import { deleteRecipe, fetchRecipes, saveRecipe } from './recipe.asyncThrunkService';

interface IRecipesState {
  recipes: IRecipe[];
  loading: boolean;
  error: string | null;
}

const initialState: IRecipesState = {
  recipes: [],
  loading: false,
  error: null,
};


// --- Slice ---

const recipesSlice = createSlice({
  name: 'recipes',
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
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
        state.recipes = action.payload.map((recipes) => ({
          ...recipes,
          id: recipes.id ?? '',
        }));
      })
      .addCase(fetchRecipes.rejected, (state, action) => {
        stopLoading(state);
        state.error = action.payload as string;
      })

      // Create or Update Recipe
      .addCase(saveRecipe.pending, startLoading)
      .addCase(saveRecipe.fulfilled, (state, action) => {
        stopLoading(state);
        const updatedRecipe = {
          ...action.payload,
          id: action.payload.id ?? '',
        };

        const index = state.recipes.findIndex(
          (e) => e.id === updatedRecipe.id
        );

        if (index !== -1) {
          // Update existing recipes
          state.recipes[index] = updatedRecipe;
        } else {
          // Add new recipes
          state.recipes.unshift(updatedRecipe);
        }
      })
      .addCase(saveRecipe.rejected, (state, action) => {
        stopLoading(state);
        state.error = action.payload as string;
      })

      // Delete Recipe
      .addCase(deleteRecipe.pending, startLoading)
      .addCase(deleteRecipe.fulfilled, (state, action) => {
        stopLoading(state);
        state.recipes = state.recipes.filter(
          (recipes) => recipes.id !== action.payload
        );
      })
      .addCase(deleteRecipe.rejected, (state, action) => {
        stopLoading(state);
        state.error = action.payload as string;
      });
  },
});

export const { clearError } = recipesSlice.actions;
export default recipesSlice.reducer;
