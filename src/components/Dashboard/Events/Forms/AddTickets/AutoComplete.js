import React, { useState, useEffect} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import currencyToSymbolMap from 'currency-symbol-map/map'
import currencyCodes from 'currency-codes';

export default function CountrySelect({currency, setCurrency}) {
    const [currencies, setCurrencies] = useState([])
    const [selectedOption, setSelectedOption] = useState(currency);
    
      useEffect(() => {
        const options = []
        for (const property in currencyToSymbolMap) {
          if(currencyCodes.code(property)?.currency){
            options.push({
              label: `${currencyCodes.code(property)?.currency} - ${property}`,
              symbol: currencyToSymbolMap[property],
              currency: currencyCodes.code(property)?.currency
            })
          }
        }
        options.sort((a, b) => {
          const labelA = a.label.toLowerCase();
          const labelB = b.label.toLowerCase();
          if (labelA < labelB) return -1;
          if (labelA > labelB) return 1;
          return 0;
        });
        setCurrencies(options)
    
      },[]);




  return (

    <Autocomplete
        value={selectedOption}
        onChange={(event, newValue) => {
            setCurrency(newValue)
            setSelectedOption(newValue);
        }}
        id="Default-Currency-states"
        options={currencies}
        renderOption={(props, option) => (
            <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                {option.label} 
            </Box>
        )}
        renderInput={(params) => <TextField {...params} label="Default Currency" />}
      />
  );
}

