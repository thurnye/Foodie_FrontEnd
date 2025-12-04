import { RouteObject } from 'react-router-dom';
import { lazy } from 'react';

const CookbookCollectionList = lazy(() =>
  import('../pages/CookbookCollectionList').then((m) => ({
    default: m.default,
  }))
);
const BookList = lazy(() =>
  import('../pages/BookList').then((m) => ({ default: m.default }))
);

const CookbookEditor = lazy(() =>
  import('../pages/BookEditor').then((m) => ({ default: m.default }))
);

export const cookbookRoutes: RouteObject[] = [
  {
    path: 'cook-book',
    element: <CookbookCollectionList />,
  },
  {
    path: 'cook-book/collection/:cookbookId',
    element: <BookList />,
  },
  {
    path: 'cook-book/book/:bookId/edit',
    element: <CookbookEditor />,
  },
];
