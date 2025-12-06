import { RouteObject } from 'react-router-dom';
import { lazy } from 'react';

const ProfilePage = lazy(() =>
  import('../pages/ProfilePage').then((m) => ({
    default: m.default,
  }))
);

export const profileRoutes: RouteObject[] = [
  {
    path: 'profile',
    element: <ProfilePage />,
  },
  {
    path: 'account',
    element: <ProfilePage />,
  },
  {
    path: 'settings',
    element: <ProfilePage />,
  },
];
