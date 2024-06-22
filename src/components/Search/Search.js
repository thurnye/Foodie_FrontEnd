import React, { useEffect } from 'react';
import { useState } from 'react';
import styles from './Search.module.css';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Autocomplete from '@mui/material/Autocomplete';
import CustomizedButton from '../CustomizedButton/CustomizedButton';
import { CircularProgress } from '@mui/material';

const Search = ({data}) => {
  const [searchedQuery, setSearchedQuery] = useState('');
  const [options, setOptions] = useState([])
  const [open, setOpen] = React.useState(false);
  const loading = open && options.length === 0;


  React.useEffect(() => {
    if (!open && data.length < 0) {
      setOptions([]);
    }
  }, [open, data]);

  useEffect(() => {
    if(data.length){
      setOptions(data.map((el) => ({title: el.title})))
    }else{
      setOptions([]);
    }
  }, [data])

  const handleSearch = () => {
    console.log(searchedQuery)
  }

  return (
    <div className={styles.Search}>
      <Box
        sx={{
          my: 3,
          display: 'flex',
          mr: 10,
          margin: 'auto',
        }}
      >
        <Autocomplete
          id='free-solo-search'
          freeSolo
          isOptionEqualToValue={(option, value) => option.title === value.title}
          getOptionLabel={(option) => option.title}
          options={options}
          loading={loading}
          onInputChange={(event, newInputValue) => {
            setSearchedQuery(newInputValue);
          }}
          sx={{
            flexGrow: 1,
          }}
          open={open}
          onOpen={() => {
            setOpen(true);
          }}
          onClose={() => {
            setOpen(false);
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              size="small"
              fullWidth
              InputProps={{
                ...params.InputProps,
                endAdornment: (
                  <>
                    {loading ? <CircularProgress color="inherit" size={20} /> : null}
                    {params.InputProps.endAdornment}
                  </>
                ),
              }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderRadius: 0,
                    border: 'none',
                    boxShadow:
                      '0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)',
                  },
                },
                '&.Mui-focused': {
                  borderColor: '#6F7E8C',
                },
              }}
            />
          )}
        />
        <CustomizedButton
          variant='contained'
          label={'Search'}
          backgroundColor={'#000000'}
          id='search-customized-button'
          aria-controls='search-customized-menu'
          disableElevation
          onClick={handleSearch}
          sx={{ fontSize: { xs: 15, md: 18 }, borderRadius: 0, height: 40 }}
        />
      </Box>
    </div>
  );
};

export default Search;


