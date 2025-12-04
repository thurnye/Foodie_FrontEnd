import { RouteObject } from 'react-router-dom';
import { lazy } from 'react';

const EventList = lazy(() =>
  import('../pages/EventList').then((m) => ({
    default: m.default,
  }))
);

const EventDetail = lazy(() =>
  import('../pages/EventDetail').then((m) => ({
    default: m.default,
  }))
);

export const eventRoutes: RouteObject[] = [
  {
    path: 'events',
    element: <EventList />,
  },
  {
    path: 'events',
    element: <EventList />,
  },
  {
    path: 'events/:eventId',
    element: <EventDetail />,
  },
];
