import React, { useEffect, useRef, useState } from 'react';
import styles from './Map.module.css';
import { GoogleMap, MarkerF, InfoWindowF } from '@react-google-maps/api';
import { Typography, Link, Card, CardActions, CardContent, Skeleton } from '@mui/material';
import { FaDirections } from "react-icons/fa";

const containerStyle = {
  width: '100%',
  height: '400px'
};

const Map = ({ location, zoom = 12, isLoaded, isStatic = "false" }) => {
  const [map, setMap] = useState(null);
  const [locations, setLocations] = useState([]);
  const [openInfoIndex, setOpenInfoIndex] = useState(null);
  const searchBoxRef = useRef(null);

  const onLoad = React.useCallback((mapInstance) => {
    setMap(mapInstance);
    if (isStatic === "true" && mapInstance) {
      const service = new window.google.maps.places.PlacesService(mapInstance);
      const request = {
        location: location.coordinates,
        radius: 50000,
        type: ['grocery'] // or 'grocery_or_supermarket', 'food', etc.
      };

      service.nearbySearch(request, (results, status) => {
        if (status === window.google.maps.places.PlacesServiceStatus.OK) {
          setLocations(results.map((place) => ({
            name: place.name,
            position: place.geometry.location,
            address: place.vicinity,
            url: `https://www.google.com/maps/search/?api=1&query=${place.name}&query_place_id=${place.place_id}`
          })));
        }
      });
    }
  }, [isStatic, location]);

  const onUnmount = React.useCallback(() => setMap(null), []);

  return (
    <div className={styles.Map}>
      {!isLoaded && <Skeleton variant="rounded" width={containerStyle.width} height={containerStyle.height} />}
      {isLoaded && (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={isStatic === "true" ? location.coordinates : location.coordinates}
          zoom={zoom}
          onLoad={onLoad}
          onUnmount={onUnmount}
          options={{
            zoomControl: false,
            streetViewControl: false,
            mapTypeControl: false,
            fullscreenControl: false
          }}
        >
          {(isStatic === "false" ? [location] : locations).map((loc, index) => (
            <MarkerF
              key={index}
              position={loc.position}
              title={loc.name}
              onClick={() => setOpenInfoIndex(index)}
            >
              {openInfoIndex === index && (
                <InfoWindowF onCloseClick={() => setOpenInfoIndex(null)}>
                  <Card sx={{ maxWidth: '200px' }}>
                    <CardContent sx={{ pb: 0 }}>
                      <Typography variant="h5" component="div" sx={{ fontSize: '16px' }}>
                        {loc.name}
                      </Typography>
                      <Typography sx={{ mb: 0.5, fontSize: '12px' }} color="text.secondary">
                        {loc.address}
                      </Typography>
                    </CardContent>
                    <CardActions sx={{ p: 2, pt: 1 }}>
                      <Link href={loc.url} variant="body2" target="_blank">
                        View on Google Maps <FaDirections />
                      </Link>
                    </CardActions>
                  </Card>
                </InfoWindowF>
              )}
            </MarkerF>
          ))}
        </GoogleMap>
      )}
    </div>
  );
};

export default React.memo(Map);
