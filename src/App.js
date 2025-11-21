import React, { Suspense, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import 'font-awesome/css/font-awesome.min.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
// import { useJsApiLoader } from '@react-google-maps/api';
import './App.css';
import AccountMenu from './components/Nav/AccountMenu';

import { HelmetProvider } from 'react-helmet-async';
import AppRoutes from './app/router/app.routes';
import { useAppDispatch, useAppSelector } from './app/hooks/app.hooks';
import { initializeAuth } from './features/auth/redux/slice/asyncThunkServices';
import { Box, CircularProgress } from '@mui/material';

library.add(fab, fas, far);

// const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
// const placesLibrary = ['places'];


function App() {
  const dispatch = useAppDispatch();
  // const isLoading = useAppSelector((state) => state.auth.loading);
  const [isInitialized, setIsInitialized] = React.useState(false);
  const initRef = React.useRef(false);
  const helmetContext = {};
  // const { isLoaded } = useJsApiLoader({
  //   id: 'google-map-script',
  //   googleMapsApiKey: apiKey,
  //   libraries: placesLibrary,
  // });

  useEffect(() => {
    if (initRef.current) return; // Prevent rerun
    initRef.current = true;

    dispatch(initializeAuth());
    setIsInitialized(true);
  }, [dispatch]);
  if (!isInitialized) {
    return (
      <div className='flex items-center justify-center min-h-screen'>
        <div className='text-center'>
          <div className='text-xl font-semibold'>Loading...</div>
        </div>
      </div>
    );
  }

  return (
    <React.Fragment>
      <BrowserRouter>
        <HelmetProvider context={helmetContext}>
          <AccountMenu />
          <Suspense
            fallback={
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
            }
          >
            <AppRoutes />
          </Suspense>
        </HelmetProvider>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
