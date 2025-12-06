import { useRoutes } from 'react-router-dom';
import PublicRoute from './wrappers/PublicRoutes';
import ProtectedRoute from './wrappers/ProtectedRoutes';
import { authRoutes } from '../../features/auth/router/auth.routes';
import { recipesRoutes } from '../../features/Recipe/router/recipe.router';
import { homeRoutes } from '../../features/Home/router/home.router';
import { dashboardRoutes } from '../../features/Dashboard/router/dashboard.router';
import BookRenderer from '../../features/CookBook/pages/BookRenderer';
import { communityRoutes } from '../../features/Community/router/community.router';
import { eventRoutes } from '../../features/Events/router/event.router';
import { communicationRoutes } from '../../features/Communication/router/communication.router';
import { profileRoutes, authorRoutes } from '../../features/Profile/router/profile.routes';

export default function AppRoutes() {
  const routes = useRoutes([
    // Book renderer route - public route for PDF generation
    { path: '/book-renderer', element: <BookRenderer /> },

    // Public routes (auth pages - redirect to home if authenticated)
    ...authRoutes.map((route) => ({
      ...route,
      element: <PublicRoute>{route.element}</PublicRoute>,
    })),

    // Home route - accessible to everyone (no wrapper needed)
    ...homeRoutes,

    // Author profile routes - public (no wrapper needed)
    ...authorRoutes,

    ...recipesRoutes.map((route) => ({
      ...route,
      element: <ProtectedRoute>{route.element}</ProtectedRoute>,
    })),
    ...dashboardRoutes.map((route) => ({
      ...route,
      element: <ProtectedRoute>{route.element}</ProtectedRoute>,
    })),
    ...communityRoutes.map((route) => ({
      ...route,
      element: <ProtectedRoute>{route.element}</ProtectedRoute>,
    })),
    ...eventRoutes.map((route) => ({
      ...route,
      element: <ProtectedRoute>{route.element}</ProtectedRoute>,
    })),
    ...communicationRoutes.map((route) => ({
      ...route,
      element: <ProtectedRoute>{route.element}</ProtectedRoute>,
    })),
    ...profileRoutes.map((route) => ({
      ...route,
      element: <ProtectedRoute>{route.element}</ProtectedRoute>,
    })),

    { path: '*', element: <>Page Not Found!</> },
  ]);

  return routes;
}
