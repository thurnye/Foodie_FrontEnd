import React from 'react';
import styles from './ReactSelect.module.css';
import Select from 'react-select'
import makeAnimated from 'react-select/animated';
import { Controller } from 'react-hook-form';

const ReactSelect = ({selectedTag, name, control, options, defaultValue, isMulti}) => {
  const animatedComponents = makeAnimated();
  
  return(
  <div className={styles.ReactSelect}>
    <Controller
        name={name}
        control={control}
        defaultValue={defaultValue}
        render={({ field }) => (
          <Select 
          {...field} 
          options={options} 
          closeMenuOnSelect={false}
          components={animatedComponents}
          isMulti={isMulti}
          defaultValue={selectedTag}/>
        )}
      />
  </div>
)};



export default ReactSelect;
