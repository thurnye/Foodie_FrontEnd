import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../../features/auth/redux/slice/auth.slice';
import recipeReducer from '../../features/Recipe/redux/recipe.slice';
import dashboardReducer from '../../features/Dashboard/redux/dashboard.slice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    recipe: recipeReducer,
    dashboard: dashboardReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;