import React, { useState, useEffect } from 'react';
import styles from './Publish.module.css';
import { useAddEventFormContext } from '../../../../../store/formStateContext';
import 'react-bootstrap-typeahead/css/Typeahead.css';

const Publish = () => {
  const { eventForm } = useAddEventFormContext();

  const handleSubmit = (selected) => {
  };

  console.log(eventForm)


  return (
  <div className={styles.Publish}>
    <div className={styles.sectionHeader}>
      <p className={`h2 ${styles.sectionName}`}>Congratulations Event Saved!!</p>
    </div>

    <div className={styles.sectionForm}>
    </div>
  </div>
)};

export default Publish;