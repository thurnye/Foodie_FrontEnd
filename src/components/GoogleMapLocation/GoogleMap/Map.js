import React from 'react';
import styles from './Map.module.css';
import { GoogleMap, useJsApiLoader, Marker, LoadScript, MarkerF, InfoWindowF } from '@react-google-maps/api';
import Skeleton from '@mui/material/Skeleton';

const containerStyle = {
  width: '400px',
  height: '400px'
};
const center = {
  lat: 43.6532,
  lng: -79.3832
};

const Map = ({location = center, name='Young-Dundas Square', zoom = 12, isLoaded}) => {

  // const { isLoaded } = useJsApiLoader({
  //   id: 'google-map-script',
  //   googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
  // })
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
        center={location}
        zoom={12}
        onLoad={onLoad}
        onUnmount={onUnmount}
    >
      <MarkerF position={location} name={name} title={name} onClick={() => setOpen(true)}>
        {/* {open && 
          <InfoWindowF onClick={() => setOpen(false)}>
            <div> Something is here</div>
          </InfoWindowF>
          } */}
      </MarkerF>
    </GoogleMap>}
  </div>
  )
};


export default React.memo(Map)
