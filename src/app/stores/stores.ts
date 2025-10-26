import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../../features/auth/redux/slice/auth.slice';
import recipeReducer from '../../features/Recipe/redux/recipe.slice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    recipe: recipeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;