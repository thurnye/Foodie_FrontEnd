import React, { useState, useEffect } from 'react';
import styles from './Publish.module.css';
import FormDirection from '../FormDirection/FormDirection';
import { useAddEventFormContext } from '../../../../../store/formStateContext';
import 'react-bootstrap-typeahead/css/Typeahead.css';

const Publish = () => {
  const { eventForm, setEventForm } = useAddEventFormContext();
  const [proceed, setProceed] = useState(false);

  const handleSubmit = (selected) => {
    setProceed(true);
  };

  console.log(eventForm)


  return (
  <div className={styles.Publish}>
    <div className={styles.sectionHeader}>
        <p className={`h1 ${styles.sectionNumber}`}>4</p>
        <p className={`h2 ${styles.sectionName}`}>Congratulations Event Saved!!</p>
      </div>

      <div className={styles.sectionForm}>
      </div>

      <div>
      <FormDirection proceed={proceed} onSubmit={handleSubmit}/>
    </div>
  </div>
)};

export default Publish;