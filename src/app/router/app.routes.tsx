// routes/AppRoutes.tsx
import { useRoutes } from 'react-router-dom';
// import { authRoutes } from '../../features/auth/router/auth.routes';
import PublicRoute from './wrappers/PublicRoutes';
import ProtectedRoute from './wrappers/ProtectedRoutes';
import { authRoutes } from '../../features/auth/router/auth.routes';
// import PageNotFound from '../pages/PageNotFound';
// import { userRoutes } from '../../features/user/router/user.router';
import { recipesRoutes } from '../../features/Recipe/router/recipe.router';
import { homeRoutes } from '../../features/Home/router/home.router';
// import { donationsRoutes } from '../../features/donation/router/donation.router';

export default function AppRoutes() {
  const routes = useRoutes([
    // Public routes (auth pages - redirect to home if authenticated)
    ...authRoutes.map((route) => ({
      ...route,
      element: <PublicRoute>{route.element}</PublicRoute>,
    })),

    // Home route - accessible to everyone (no wrapper needed)
    ...homeRoutes,

    // Protected routes (require authentication)
    // ...userRoutes.map((route) => ({
    //   ...route,
    //   element: <ProtectedRoute>{route.element}</ProtectedRoute>,
    // })),
    // ...donationsRoutes.map((route) => ({
    //   ...route,
    //   element: <ProtectedRoute>{route.element}</ProtectedRoute>,
    // })),
    ...recipesRoutes.map((route) => ({
      ...route,
      element: <ProtectedRoute>{route.element}</ProtectedRoute>,
    })),

    { path: '*', element: <>Page Not Found!</> },
  ]);

  return routes;
}
