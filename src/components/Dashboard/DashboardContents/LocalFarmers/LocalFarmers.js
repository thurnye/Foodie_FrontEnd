import React, { useEffect, useState } from 'react';
import styles from './LocalFarmers.module.css';
import Map from '../../../GoogleMapLocation/GoogleMap/Map';

const LocalFarmers = ({ isLoaded }) => {
  const [farmerLocations, setFarmerLocations] = useState([]);
  const [currentLocation, setCurrentLocation] = useState({ lat: 0, lng: 0 });

  // Fetch user’s current location
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setCurrentLocation({ lat: latitude, lng: longitude });
      },
      (error) => console.error("Error fetching location:", error),
      { enableHighAccuracy: true }
    );
  }, []);

  // Fetch farmers dynamically from Google Places API
  useEffect(() => {
    if (isLoaded && currentLocation.lat !== 0 && currentLocation.lng !== 0) {
      const service = new window.google.maps.places.PlacesService(document.createElement('div'));
      
      // Define the request for nearby farmers markets
      const request = {
        location: currentLocation,
        radius: 10000, 
        type: ['grocery_or_supermarket', 'farmers market', "supermarket", 'shopping_mall', 'bakery','convenience_store' ], // Closest type to "farmers market"
      };

      service.nearbySearch(request, (results, status) => {
        if (status === window.google.maps.places.PlacesServiceStatus.OK) {
          // Map Google Places results to our desired format
          const locations = results.map((place) => ({
            name: place.name,
            coordinates: { lat: place.geometry.location.lat(), lng: place.geometry.location.lng() },
            url: place.url,
            formattedAddress: place.vicinity,
          }));
          setFarmerLocations(locations);
        } else {
          console.error("PlacesService request failed:", status);
        }
      });
    }
  }, [isLoaded, currentLocation]);

  return (
    <div className={styles.LocalFarmers}>
      <Map 
        isLoaded={isLoaded} 
        location={currentLocation} 
        farmerLocations={farmerLocations} 
        isStatic={true} 
      />
    </div>
  );
};

export default LocalFarmers;
