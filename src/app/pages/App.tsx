import React, { Suspense, useEffect, useRef, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { useJsApiLoader } from '@react-google-maps/api';
import AppRoutes from '../router/app.routes';
import { useAppDispatch, useAppSelector } from '../hooks/app.hooks';
import { initializeAuth } from '../../features/auth/redux/slice/asyncThunkServices';
import NavBar from '../../components/NavBar/NavBar';
import AccountMenu from '../../components/Nav/AccountMenu';
// import AccountMenu from '../../components/Nav/AccountMenu';

// Register all FontAwesome icons
library.add(fab, fas, far);

const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY as string;
const placesLibrary: 'places'[] = ['places'];

const App: React.FC = () => {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector((state) => state.auth.loading);
  const initRef = useRef<boolean>(false);

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: apiKey,
    libraries: placesLibrary,
  });

  useEffect(() => {
    if (initRef.current) return;
    initRef.current = true;

    dispatch(initializeAuth());
  }, [dispatch]);

  // Show loading screen while initializing auth (only on first load)
  if (isLoading) {
    return (
      <div className='flex items-center justify-center min-h-screen'>
        <div className='text-center'>
          <div className='text-xl font-semibold'>Loading...</div>
        </div>
      </div>
    );
  }

  return (
    <BrowserRouter>
      {/* <AccountMenu /> */}
      <NavBar/>
      <Suspense fallback={<div>Loading...</div>}>
        <AppRoutes />
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
