import { RouteObject } from 'react-router-dom';
import { lazy } from 'react';

const Home = lazy(() =>
  import('../pages/home').then((m) => ({ default: m.default }))
);

export const homeRoutes: RouteObject[] = [
  {
    path: '/',
    element: <Home />,
  },
];
