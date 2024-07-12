import React, { useState, useEffect } from 'react';
import styles from './LocalFarmersLocations.module.css';
import { Box } from '@mui/material';
import KeyWordMap from '../../GoogleMapLocation/GoogleMap/KeyWordMap';

const LocalFarmersLocations = ({isLoaded}) => {
  const [location, setLocation] = useState(
//     {
//     "name": "Toronto",
//     "url": "https://maps.google.com/?q=Toronto,+ON,+Canada&ftid=0x89d4cb90d7c63ba5:0x323555502ab4c477",
//     "coordinates": {
//         "lat": 43.653226,
//         "lng": -79.3831843
//     },
//     "formattedAddress": "Toronto, ON, Canada"
// }
);
  const [error, setError] = useState(null);

  const handleSuccess = (position) => {
    console.log(position)
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

  console.log(location)
  
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
