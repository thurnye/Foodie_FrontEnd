import { RouteObject } from 'react-router-dom';
import { lazy } from 'react';

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
        path: 'bookmarks',
        element: <DashboardBookmarks />,
      },
    ],
  },
];