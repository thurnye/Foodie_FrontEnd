import React, {useState} from 'react';
import styles from './CreateTicket.module.css';
import FormDirection from '../FormDirection/FormDirection'

const CreateTicket = () => {
  const [proceed, setProceed] = useState(false);
  return(
  <div className={styles.CreateTicket}>
    CreateTicket Component

    <div>
      <FormDirection proceed={proceed}/>
    </div>
  </div>
)};


export default CreateTicket;
