import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICookbook, CookbookState } from '../types/cookbook.types';
import {
  createCookbook,
  deleteCookbook,
  fetchCookbookById,
  fetchMyCookbooks,
  generateCookbook,
  updateCookbook,
} from './cookbook.async.thunk';

const initialState: CookbookState = {
  cookbooks: [],
  currentCookbook: null,
  selectedRecipes: [],
  loading: false,
  error: null,
  pagination: null,
};

const cookbookSlice = createSlice({
  name: 'cookbook',
  initialState,
  reducers: {
    setCurrentCookbook: (state, action: PayloadAction<ICookbook | null>) => {
      state.currentCookbook = action.payload;
    },
    toggleRecipeSelection: (state, action: PayloadAction<string>) => {
      const recipeId = action.payload;
      const index = state.selectedRecipes.indexOf(recipeId);
      if (index > -1) {
        state.selectedRecipes.splice(index, 1);
      } else {
        state.selectedRecipes.push(recipeId);
      }
    },
    setSelectedRecipes: (state, action: PayloadAction<string[]>) => {
      state.selectedRecipes = action.payload;
    },
    clearSelectedRecipes: (state) => {
      state.selectedRecipes = [];
    },
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    // Create cookbook
    builder.addCase(createCookbook.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(createCookbook.fulfilled, (state, action) => {
      state.loading = false;
      state.currentCookbook = action.payload;
      state.cookbooks.unshift(action.payload);
    });
    builder.addCase(createCookbook.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });

    // Fetch my cookbooks
    builder.addCase(fetchMyCookbooks.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchMyCookbooks.fulfilled, (state, action) => {
      state.loading = false;
      state.cookbooks = action.payload.data;
      state.pagination = action.payload.pagination || null;
    });
    builder.addCase(fetchMyCookbooks.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });

    // Fetch cookbook by ID
    builder.addCase(fetchCookbookById.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchCookbookById.fulfilled, (state, action) => {
      state.loading = false;
      state.currentCookbook = action.payload;
    });
    builder.addCase(fetchCookbookById.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });

    // Update cookbook
    builder.addCase(updateCookbook.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(updateCookbook.fulfilled, (state, action) => {
      state.loading = false;
      if (action.payload) {
        state.currentCookbook = action.payload;
        const index = state.cookbooks.findIndex(
          (c) => c._id === action.payload._id
        );
        if (index > -1) {
          state.cookbooks[index] = action.payload;
        }
      }
    });
    builder.addCase(updateCookbook.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });

    // Delete cookbook
    builder.addCase(deleteCookbook.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(deleteCookbook.fulfilled, (state, action) => {
      state.loading = false;
      state.cookbooks = state.cookbooks.filter((c) => c._id !== action.payload);
      if (state.currentCookbook?._id === action.payload) {
        state.currentCookbook = null;
      }
    });
    builder.addCase(deleteCookbook.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });

    // Generate cookbook
    builder.addCase(generateCookbook.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(generateCookbook.fulfilled, (state, action) => {
      state.loading = false;
      if (action.payload) {
        state.currentCookbook = action.payload;
        const index = state.cookbooks.findIndex(
          (c) => c._id === action.payload._id
        );
        if (index > -1) {
          state.cookbooks[index] = action.payload;
        }
      }
    });
    builder.addCase(generateCookbook.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });
  },
});

export const {
  setCurrentCookbook,
  toggleRecipeSelection,
  setSelectedRecipes,
  clearSelectedRecipes,
  clearError,
} = cookbookSlice.actions;

export default cookbookSlice.reducer;
