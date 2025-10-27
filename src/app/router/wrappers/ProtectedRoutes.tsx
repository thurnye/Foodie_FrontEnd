import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../../hooks/app.hooks';
import { Box, CircularProgress, Typography } from '@mui/material';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { isAuthenticated, loading } = useAppSelector((state) => state.auth);

  // --- Show loading spinner while auth state is initializing ---
  if (loading) {
    return (
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
          bgcolor: 'background.default',
          color: 'text.primary',
        }}
      >
        <CircularProgress
          size={48}
          thickness={4}
          sx={{
            color: 'primary.main',
            mb: 2,
          }}
        />
      </Box>
    );
  }

  // --- Redirect if not authenticated ---
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // --- Render protected children ---
  return <>{children}</>;
};

export default ProtectedRoute;
