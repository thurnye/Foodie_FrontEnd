import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../../features/auth/redux/slice/auth.slice';
import recipeReducer from '../../features/Recipe/redux/recipe.slice';
import dashboardReducer from '../../features/Dashboard/redux/dashboard.slice';
import cookbookReducer from '../../features/CookBook/redux/cookbook.slice';
import communityReducer from '../../features/Community/redux/community.slice';
import eventReducer from '../../features/Events/redux/event.slice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    recipe: recipeReducer,
    dashboard: dashboardReducer,
    cookbook: cookbookReducer,
    community: communityReducer,
    events: eventReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
