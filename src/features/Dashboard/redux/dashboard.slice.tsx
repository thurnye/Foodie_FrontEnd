/**
 * Dashboard Redux Slice
 * Manages dashboard-specific state for recipes, events, bookmarks, etc.
 */

import { createSlice } from '@reduxjs/toolkit';
import { IRecipe } from '../../Recipe/types/recipe.types';
import { fetchMyRecipes, deleteMyRecipe } from './dashboard.asyncThunkService';

interface IDashboardState {
  // Recipes
  myRecipes: IRecipe[];
  selectedRecipe: IRecipe | null;
  recipesLoading: boolean;
  recipesError: string | null;

  // Events (can be extended later)
  myEvents: any[];
  eventsLoading: boolean;
  eventsError: string | null;

  // Bookmarks (can be extended later)
  myBookmarks: any[];
  bookmarksLoading: boolean;
  bookmarksError: string | null;
}

const initialState: IDashboardState = {
  // Recipes
  myRecipes: [],
  selectedRecipe: null,
  recipesLoading: false,
  recipesError: null,

  // Events
  myEvents: [],
  eventsLoading: false,
  eventsError: null,

  // Bookmarks
  myBookmarks: [],
  bookmarksLoading: false,
  bookmarksError: null,
};

// --- Slice ---

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    clearRecipesError: (state) => {
      state.recipesError = null;
    },
    clearEventsError: (state) => {
      state.eventsError = null;
    },
    clearBookmarksError: (state) => {
      state.bookmarksError = null;
    },
    setSelectedRecipe: (state, action) => {
      state.selectedRecipe = action.payload;
    },
    clearSelectedRecipe: (state) => {
      state.selectedRecipe = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch My Recipes
      .addCase(fetchMyRecipes.pending, (state) => {
        state.recipesLoading = true;
        state.recipesError = null;
      })
      .addCase(fetchMyRecipes.fulfilled, (state, action) => {
        state.recipesLoading = false;
        state.myRecipes = action.payload || [];
      })
      .addCase(fetchMyRecipes.rejected, (state, action) => {
        state.recipesLoading = false;
        state.recipesError = action.payload as string;
      })

      // Delete My Recipe
      .addCase(deleteMyRecipe.pending, (state) => {
        state.recipesLoading = true;
        state.recipesError = null;
      })
      .addCase(deleteMyRecipe.fulfilled, (state, action) => {
        state.recipesLoading = false;
        state.myRecipes = state.myRecipes.filter(
          (recipe) => recipe._id !== action.payload
        );
        // Clear selected recipe if it was deleted
        if (state.selectedRecipe?._id === action.payload) {
          state.selectedRecipe = null;
        }
      })
      .addCase(deleteMyRecipe.rejected, (state, action) => {
        state.recipesLoading = false;
        state.recipesError = action.payload as string;
      });
  },
});

export const {
  clearRecipesError,
  clearEventsError,
  clearBookmarksError,
  setSelectedRecipe,
  clearSelectedRecipe,
} = dashboardSlice.actions;

export default dashboardSlice.reducer;
