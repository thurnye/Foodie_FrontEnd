import React, {useState} from 'react';
import FormDirection from '../../../../components/Dashboard/Events/Forms/FormDirection/FormDirection';
import styles from './Schedule.module.css';

const Schedule = () => {
  const [proceed, setProceed] = useState(false);
  return(
  <div className={styles.Schedule}>
    Schedule Component
    <FormDirection onSubmit={() => setProceed(true)} proceed={proceed}/>
      
  </div>
)};



export default Schedule;
