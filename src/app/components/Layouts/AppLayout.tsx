import React from 'react';
import { Box } from '@mui/material';
import AppNav from '../Nav/AppNav';
import AppFooter from '../../../features/Footer/components/AppFooter';

interface AppLayoutProps {
  children: React.ReactNode;
  showNav?: boolean;
  showFooter?: boolean;
}

const AppLayout: React.FC<AppLayoutProps> = ({
  children,
  showNav = true,
  showFooter = true,
}) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      {/* Navigation */}
      {showNav && <AppNav />}

      {/* Main Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {children}
      </Box>

      {/* Footer */}
      {showFooter && <AppFooter />}
    </Box>
  );
};

export default AppLayout;
