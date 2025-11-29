import { RouteObject } from 'react-router-dom';
import CommunicationLayout from '../pages/CommunicationLayout';

export const communicationRoutes: RouteObject[] = [
  {
    path: '/communication',
    element: <CommunicationLayout />,
  },
];
