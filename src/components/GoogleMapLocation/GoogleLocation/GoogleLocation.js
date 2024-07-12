import React, { useState } from 'react';
import styles from './GoogleLocation.module.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Autocomplete } from '@react-google-maps/api';
import LinearProgress from '@mui/material/LinearProgress';

const GoogleLocation = ({ isLoaded, setValue, defaultValue, label, fieldName, control, placeholder }) => {
  const [searchResult, setSearchResult] = useState("Result: none");

  function onLoad(autocomplete) {
    setSearchResult(autocomplete);
  }

  function onPlaceChanged() {
    if (searchResult != null) {
      const place = searchResult.getPlace();
      const name = place.name;
      const url = place.url;
      const coordinates = {
        lat: place.geometry.location.lat(),
        lng: place.geometry.location.lng(),
      };
      const formattedAddress = place.formatted_address;

      const location = {
        name,
        url,
        coordinates,
        formattedAddress
      };
      console.log(location)
      setValue(fieldName, location);
    }
  }

  if (!isLoaded) {
    return <div> <LinearProgress /></div>;
  }

  return (
    <div className={styles.GoogleLocation}>
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': {  width: '100%'},
        }}
      >
        {/* {!isLoaded && <div>Loading</div>} */}
        {/* {isLoaded && */}
          <Autocomplete onPlaceChanged={onPlaceChanged} onLoad={onLoad}>
            <TextField
              label={label}
              fullWidth
              id="outlined-size-small"
              defaultValue={defaultValue}
              size="small"
              placeholder={placeholder}
              {...control} 
            />
          </Autocomplete>
          {/*  } */}
      </Box>
    </div>
  );
};

export default GoogleLocation;