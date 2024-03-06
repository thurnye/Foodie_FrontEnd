import React, {useState} from 'react';
import { useAddEventFormContext } from '../../../../store/formStateContext';
import services from '../../../../util/services'

import styles from './GoLive.module.css';

const GoLive = () => {
  const { eventForm  } = useAddEventFormContext();

  console.log('Going Live', eventForm)

  return(
  <div className={styles.GoLive}>
    GoLive Component
  </div>
)};


export default GoLive;
