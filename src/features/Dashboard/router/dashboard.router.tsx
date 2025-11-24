import { RouteObject } from 'react-router-dom';
import { lazy } from 'react';
import { cookbookRoutes } from '../../CookBook/router/cookbook.router';
import { templateRoutes } from '../../Templates/router/templates.router';
import { eventRoutes } from '../../Events/router/event.router';

const DashboardLayout = lazy(() =>
  import('../components/DashboardLayout').then((m) => ({ default: m.default }))
);

const DashboardHome = lazy(() =>
  import('../pages/DashboardHome').then((m) => ({ default: m.default }))
);

const DashboardEvents = lazy(() =>
  import('../pages/DashboardEvents').then((m) => ({ default: m.default }))
);

const DashboardRecipes = lazy(() =>
  import('../pages/DashboardRecipes').then((m) => ({ default: m.default }))
);

const DashboardBookmarks = lazy(() =>
  import('../pages/DashboardBookmarks').then((m) => ({ default: m.default }))
);

const DashboardCreateEditRecipe = lazy(() =>
  import('../pages/Dashboard_Create_Edit_Recipe').then((m) => ({
    default: m.default,
  }))
);

export const dashboardRoutes: RouteObject[] = [
  {
    path: '/dashboard',
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <DashboardHome />,
      },
      {
        path: 'events',
        element: <DashboardEvents />,
      },
      {
        path: 'recipes',
        element: <DashboardRecipes />,
      },
      {
        path: 'recipes/create',
        element: <DashboardCreateEditRecipe />,
      },
      {
        path: 'recipes/edit/:id',
        element: <DashboardCreateEditRecipe />,
      },
      ...cookbookRoutes,
      ...templateRoutes,
      ...eventRoutes,

      {
        path: 'bookmarks',
        element: <DashboardBookmarks />,
      },
    ],
  },
];
