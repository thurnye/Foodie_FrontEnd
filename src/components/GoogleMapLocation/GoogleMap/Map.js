import React from 'react';
import styles from './Map.module.css';
import { GoogleMap, MarkerF, InfoWindowF } from '@react-google-maps/api';
import { Typography, Link, Card, CardActions, CardContent, Skeleton } from '@mui/material';
import { FaDirections } from "react-icons/fa";

const containerStyle = {
  width: '100%',
  height: '400px'
};

const Map = ({ location, farmerLocations = [], zoom = 12, isLoaded, isStatic = false }) => {
  const [openMarker, setOpenMarker] = React.useState(null);

  return (
    <div className={styles.Map}>
      {!isLoaded && (
        <Skeleton variant="rounded" width={containerStyle.width} height={containerStyle.height} />
      )}
      {isLoaded && (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={location}
          zoom={zoom}
          options={{
            zoomControl: false,
            streetViewControl: false,
            mapTypeControl: false,
            fullscreenControl: false,
          }}
        >
          {farmerLocations.map((farmer, index) => (
            <MarkerF
              key={index}
              position={farmer.coordinates}
              onClick={() => setOpenMarker(index)}
            >
              {openMarker === index && (
                <InfoWindowF onCloseClick={() => setOpenMarker(null)}>
                  <Card sx={{ maxWidth: '200px' }}>
                    <CardContent sx={{ pb: 0 }}>
                      <Typography variant="h5" component="div" sx={{ fontSize: '16px' }}>
                        {farmer.name}
                      </Typography>
                      <Typography sx={{ mb: 0.5, fontSize: '12px' }} color="text.secondary">
                        {farmer.formattedAddress}
                      </Typography>
                    </CardContent>
                    <CardActions sx={{ p: 2, pt: 1 }}>
                      <Link href={`https://maps.google.com/?q=${farmer.coordinates.lat},${farmer.coordinates.lng}`} variant="body2" target="_blank">
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
