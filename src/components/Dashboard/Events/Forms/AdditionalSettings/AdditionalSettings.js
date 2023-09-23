import React, { useState, useEffect } from 'react';
import styles from './AdditionalSettings.module.css';
import FormDirection from '../FormDirection/FormDirection';
import { useAddEventFormContext } from '../../../../../store/formStateContext';
import currencyToSymbolMap from 'currency-symbol-map/map'
import currencyCodes from 'currency-codes';
import { Typeahead } from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';

const AdditionalSettings = () => {
  const { eventForm, setEventForm } = useAddEventFormContext();
  const [proceed, setProceed] = useState(false);
  const [currencies, setCurrencies] = useState([])
  const [selectedOption, setSelectedOption] = useState([]);

  const handleInputChange = (selected) => {
    setSelectedOption(selected);
  };


  const handleSubmit = () => {
    const data = eventForm.additionalSettings;
    data.currency = selectedOption;
    setEventForm((eventForm) => ({...eventForm, additionalSettings:data}))
    setProceed(true);

  }

  console.log(eventForm)

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
  <div className={styles.AdditionalSettings}>
    <div className={styles.sectionHeader}>
      <p className={`h1 ${styles.sectionNumber}`}>3</p>
      <p className={`h2 ${styles.sectionName}`}>Additional Settings</p>
    </div>

    <div className={styles.sectionForm}>
      <div>
        <label htmlFor="inputEmail_6764" className="form-label"
        >Default Currency</label>
        <Typeahead
          id="autocomplete"
          labelKey="label" 
          placeholder="Search for a currency..."
          onChange={handleInputChange}
          options={currencies}
          selected={selectedOption}
        />
      </div>
    </div>

    <div className={styles.Directions}>
      <FormDirection proceed={proceed} onSubmit={handleSubmit}/>
    </div>
  </div>
)};

export default AdditionalSettings;
