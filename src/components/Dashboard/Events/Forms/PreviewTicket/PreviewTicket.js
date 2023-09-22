import React, { useState, useEffect } from 'react';
import styles from './PreviewTicket.module.css';
import FormDirection from '../FormDirection/FormDirection';
import { useAddEventFormContext } from '../../../../../store/formStateContext';

const PreviewTicket = () => {
  const { eventForm, setEventForm } = useAddEventFormContext();
  const [proceed, setProceed] = useState(false);

  const handleSubmit = (selected) => {
    setProceed(true);
  };

  console.log(eventForm)


  return (
  <div className={styles.PreviewTicket}>
    <div className={styles.sectionHeader}>
        <p className={`h1 ${styles.sectionNumber}`}>4</p>
        <p className={`h2 ${styles.sectionName}`}>Preview</p>
      </div>

      <div className={styles.sectionForm}>
      </div>

      <div>
      <FormDirection proceed={proceed} onSubmit={handleSubmit}/>
    </div>
  </div>
)};

export default PreviewTicket;