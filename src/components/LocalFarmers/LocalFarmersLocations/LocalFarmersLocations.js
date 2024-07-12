import React, { useState, useEffect } from 'react';
import styles from './LocalFarmersLocations.module.css';
import { Box } from '@mui/material';
import KeyWordMap from '../../GoogleMapLocation/GoogleMap/KeyWordMap';

const LocalFarmersLocations = ({isLoaded}) => {
  const [location, setLocation] = useState();
  const [error, setError] = useState(null);

  const handleSuccess = (position) => {
    const { latitude, longitude } = position.coords;
    const coordinates = {
      lat: latitude,
      lng: longitude,
    };
    setLocation(coordinates);
  };

  const handleError = (error) => {
    setError(error.message);
  };

  const getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(handleSuccess, handleError);
    } else {
      setError('Geolocation is not supported by your browser.');
    }
  };

  useEffect(() => {
    getUserLocation();
  }, []);


  return (
  <div className={styles.LocalFarmersLocations}>
    <Box>
      <KeyWordMap 
      isLoaded={isLoaded} 
      center={location} 
      keyword={'local farmers'}
      />
    </Box>
  </div>
)};

export default LocalFarmersLocations;
