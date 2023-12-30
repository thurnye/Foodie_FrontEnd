import React from 'react';
import styles from './Map.module.css';
import { GoogleMap, MarkerF, InfoWindowF } from '@react-google-maps/api';
import { Typography, Link, Card, CardActions, CardContent, Skeleton } from '@mui/material';
import { FaDirections } from "react-icons/fa";


const containerStyle = {
  width: '100%',
  height: '400px'
};


const Map = ({location, zoom = 12, isLoaded}) => {
  const {name, coordinates, url, formattedAddress} = location;
  const [open, setOpen] = React.useState(false);
  const [map, setMap] = React.useState(null);
  const onLoad = React.useCallback(function callback(map) {
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    
    setMap(null)
  }, [])

  return(
  <div className={styles.Map}>
    {!isLoaded && <Skeleton variant="rounded" width={containerStyle.width} height={containerStyle.height} />}
    {isLoaded && 
    <GoogleMap
        mapContainerStyle={containerStyle}
        center={coordinates}
        zoom={12}
        onLoad={onLoad}
        onUnmount={onUnmount}
        options={{
          zoomControl: false,
          streetViewControl: false,
          mapTypeControl: false,
          fullscreenControl: false
        }}
    >
      <MarkerF position={coordinates} name={name} title={name} onClick={() => setOpen(true)}>
        {open && 
          <InfoWindowF onCloseClick={() => setOpen(false)}>
            <Card sx={{ maxWidth: '200px' }}>
              <CardContent sx={{pb: 0}}>
                <Typography variant="h5" component="div" sx={{fontSize: '16px'}}>
                  {name}
                </Typography>
                <Typography sx={{ mb: 0.5, fontSize: '12px' }} color="text.secondary">
                  {formattedAddress}
                </Typography>
              </CardContent>
              <CardActions sx={{p: 2, pt: 1}}>
                <Link href={url} variant="body2" target="_blank">
                  View on Google Maps <FaDirections />
                </Link>
              </CardActions>
            </Card>
          </InfoWindowF>
          }
      </MarkerF>
    </GoogleMap>}
  </div>
  )
};


export default React.memo(Map)
