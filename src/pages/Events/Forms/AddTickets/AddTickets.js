import React, {useState}  from 'react';
import styles from './AddTickets.module.css';
import FormDirection from '../../../../components/Dashboard/Events/Forms/FormDirection/FormDirection';


const AddTickets = () => {
  const [proceed, setProceed] = useState(false);
  return(
  <div className={styles.AddTickets}>
    AddTickets Component
    <FormDirection onSubmit={() => setProceed(true)} proceed={proceed}/>
  </div>
)};


export default AddTickets;
