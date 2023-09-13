import React, {useState} from 'react';
import styles from './CreateTicket.module.css';
import FormDirection from '../FormDirection/FormDirection'

const CreateTicket = () => {
  const [nextStep, setNextStep] = useState(true);
  return(
  <div className={styles.CreateTicket}>
    CreateTicket Component

    <div>
              {/* <button >Next: Create Ticket</button> */}
              <FormDirection disabledNext={nextStep}/>
          </div>
  </div>
)};


export default CreateTicket;
