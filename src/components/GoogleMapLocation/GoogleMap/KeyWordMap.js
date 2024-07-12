import React, { useState, useCallback, useRef } from 'react';
import {
  GoogleMap,
  Marker,
  MarkerF,
  InfoWindowF,
} from '@react-google-maps/api';
import {
  Card,
  CardActions,
  CardContent,
  Link,
  Skeleton,
  Typography,
} from '@mui/material';
import { FaDirections } from 'react-icons/fa';

const mapContainerStyle = {
  width: '100%',
  height: '400px',
};

const options = {
  disableDefaultUI: true,
  zoomControl: true,
};

const KeyWordMap = ({ isLoaded, center, keyword }) => {
  const [markers, setMarkers] = useState([]);
  const mapRef = useRef(null);
  const [open, setOpen] = React.useState(false);

  const fetchFarmers = useCallback(
    (bounds) => {
      const service = new window.google.maps.places.PlacesService(
        new window.google.maps.Map(document.createElement('div'))
      );

      service.nearbySearch(
        {
          location: bounds.getCenter(),
          radius: 5000, // Adjust radius as needed
          keyword,
        },
        (results, status) => {
          if (status === window.google.maps.places.PlacesServiceStatus.OK) {
            setMarkers(results);
          }
        }
      );
    },
    [keyword]
  );

  const onMapLoad = useCallback((map) => {
    mapRef.current = map;
  }, []);

  const onMapIdle = useCallback(() => {
    if (!mapRef.current) return; // Check if map is defined

    const bounds = mapRef.current.getBounds();
    if (bounds) {
      fetchFarmers(bounds);
    }
  }, [fetchFarmers]);

  if (!isLoaded)
    return (
      <Skeleton
        variant='rounded'
        width={mapContainerStyle.width}
        height={mapContainerStyle.height}
      />
    );

  return (
    <GoogleMap
      mapContainerStyle={mapContainerStyle}
      zoom={12}
      center={center}
      options={options}
      onLoad={onMapLoad}
      onIdle={onMapIdle}
    >
      {markers.map((marker, index) => (
        <>
          <MarkerF
            position={{
              lat: marker.geometry.location.lat(),
              lng: marker.geometry.location.lng(),
            }}
            name={marker.name}
            title={marker.name}
            onClick={() => setOpen(marker.place_id)}
            key={index}
          >
            {open === marker.place_id && (
              <InfoWindowF onCloseClick={() => setOpen(false)}>
                <Card sx={{ maxWidth: '200px' }}>
                  <CardContent sx={{ pb: 0 }}>
                    <Typography
                      variant='h5'
                      component='div'
                      sx={{ fontSize: '16px' }}
                    >
                      {marker.name}
                    </Typography>
                    <Typography
                      sx={{ mb: 0.5, fontSize: '12px' }}
                      color='text.secondary'
                    >
                      {marker.formattedAddress}
                    </Typography>
                  </CardContent>
                  <CardActions sx={{ p: 2, pt: 1 }}>
                    <Link
                      href={marker.url}
                      variant='body2'
                      target='_blank'
                      sx={{ cursor: 'pointer' }}
                    >
                      View on Google Maps <FaDirections />
                    </Link>
                  </CardActions>
                </Card>
              </InfoWindowF>
            )}
          </MarkerF>
        </>
      ))}
    </GoogleMap>
  );
};

export default KeyWordMap;
