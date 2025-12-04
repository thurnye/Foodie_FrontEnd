import { RouteObject } from 'react-router-dom';
import { lazy } from 'react';



const Template = lazy(() =>
  import('../pages/Template').then((m) => ({ default: m.default }))
);
const TemplateLists = lazy(() =>
  import('../pages/TemplateLists').then((m) => ({ default: m.default }))
);

export const templateRoutes: RouteObject[] = [
  {
    path: 'templates',
    element: <TemplateLists/>,
  },
  {
    path: 'template/:templateId',
    element: <Template />,
  },
];
