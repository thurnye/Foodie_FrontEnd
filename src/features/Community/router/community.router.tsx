import { RouteObject } from 'react-router-dom';
import { lazy } from 'react';

const Communities = lazy(() =>
  import('../pages/CommunityGroups').then((m) => ({
    default: m.default,
  }))
);
const GroupDetail = lazy(() =>
  import('../pages/GroupDetail').then((m) => ({
    default: m.default,
  }))
);


export const communityRoutes: RouteObject[] = [
  {
    path: 'communities',
    element: <Communities />,
  },
  {
    path: 'communities/group/:groupId',
    element: <GroupDetail />,
  },
  
];
