import React, {useState} from 'react';
import styles from './GoogleLocation.module.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Autocomplete } from '@react-google-maps/api';


// const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

const GoogleLocation = ({isLoaded, setValue, defaultValue, label}) => {
  const [searchResult, setSearchResult] = useState("Result: none");
  
  // const { isLoaded } = useLoadScript({
  //   googleMapsApiKey: "AIzaSyB0BdzTkJ5UKhlZ43CoVjaNT1VWAuZ5o9s",
  //   libraries: placesLibrary,
  // });

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
        name, url, coordinates, formattedAddress
      }
      console.log(location);
      setValue('location', location)
    }
  }

  if (!isLoaded) {
    return <div>Loading...</div>;
  }


  
  return(
  <div className={styles.GoogleLocation}>
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
    >
      {!isLoaded && <div>Loading</div>}
      {isLoaded && 
      <Autocomplete
            onPlaceChanged={onPlaceChanged}
            onLoad={onLoad}
            >
            <TextField
            label={label}
              fullWidth
              id="outlined-size-small"
              defaultValue={defaultValue}
              size="small"
            />
      </Autocomplete>}
      
      </Box>
  </div>
)};


export default GoogleLocation;
