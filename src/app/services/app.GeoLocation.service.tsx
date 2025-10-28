import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import LinearProgress from '@mui/material/LinearProgress';
import { Autocomplete } from '@react-google-maps/api';
import { Control, UseFormSetValue } from 'react-hook-form';

// Location type definition
export interface LocationCoordinates {
  lat: number;
  lng: number;
}

export interface GoogleLocationValue {
  name: string;
  url: string;
  coordinates: LocationCoordinates;
  formattedAddress: string;
}

// Component Props Interface
interface GoogleLocationProps {
  isLoaded: boolean;
  setValue: UseFormSetValue<any>;
  defaultValue?: string;
  label?: string;
  fieldName: string;
  control?: Control<any>;
  placeholder?: string;
}

const GoogleLocation: React.FC<GoogleLocationProps> = ({
  isLoaded,
  setValue,
  defaultValue,
  label,
  fieldName,
  control,
  placeholder,
}) => {
  const [searchResult, setSearchResult] =
    useState<google.maps.places.Autocomplete | null>(null);

  const onLoad = (autocomplete: google.maps.places.Autocomplete) => {
    setSearchResult(autocomplete);
  };

  const onPlaceChanged = () => {
    if (searchResult) {
      const place = searchResult.getPlace();

      if (!place.geometry || !place.geometry.location) return;

      const name = place.name || '';
      const url = place.url || '';
      const coordinates = {
        lat: place.geometry.location.lat(),
        lng: place.geometry.location.lng(),
      };
      const formattedAddress = place.formatted_address || '';

      const location: GoogleLocationValue = {
        name,
        url,
        coordinates,
        formattedAddress,
      };

      // Set form value via react-hook-form
      setValue(fieldName, location);
    }
  };

  if (!isLoaded) {
    return (
      <div>
        <LinearProgress />
      </div>
    );
  }

  return (
    <Box>
      <Box
        component='form'
        sx={{
          '& .MuiTextField-root': { width: '100%' },
        }}
      >
        <Autocomplete onPlaceChanged={onPlaceChanged} onLoad={onLoad}>
          <TextField
            label={label}
            fullWidth
            id='outlined-size-small'
            defaultValue={defaultValue}
            size='small'
            placeholder={placeholder}
            {...(control ? { control } : {})}
          />
        </Autocomplete>
      </Box>
    </Box>
  );
};

export default GoogleLocation;
