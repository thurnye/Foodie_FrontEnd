import { RouteObject } from 'react-router-dom';
import { lazy } from 'react';

const CookbookList = lazy(() =>
  import('../pages/CookbookList').then((m) => ({ default: m.default }))
);

const CookbookEditor = lazy(() =>
  import('../pages/CookbookEditor').then((m) => ({ default: m.default }))
);

export const cookbookRoutes: RouteObject[] = [
  {
    path: 'cook-book',
    element: <CookbookList />,
  },
  {
    path: 'cookbook/:cookbookId/edit',
    element: <CookbookEditor />,
  },
];
