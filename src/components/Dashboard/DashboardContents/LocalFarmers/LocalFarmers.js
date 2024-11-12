import React from 'react';
import styles from './LocalFarmers.module.css';
import Map from '../../../GoogleMapLocation/GoogleMap/Map';

const locations = {
  name: "CF Toronto Eaton Centre",
  url: "https://maps.google.com/?cid=10054590163955992631",
  coordinates: {
    lat: 43.6544382,
    lng: -79.3806994
  },
  formattedAddress: "220 Yonge St, Toronto, ON M5B 2H1, Canada"
};

const LocalFarmers = ({ isLoaded }) => {
  return (
    <div className={styles.LocalFarmers}>
      <Map isLoaded={isLoaded} isStatic="true" location={locations} />
    </div>
  );
};

export default LocalFarmers;
