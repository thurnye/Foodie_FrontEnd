import React, {useState} from 'react';
import FormDirection from '../../../../components/Dashboard/Events/Forms/FormDirection/FormDirection';
import styles from './Publish.module.css';

const Publish = () => {
  const [proceed, setProceed] = useState(false);

  return(
  <div className={styles.Publish}>
    Publish Component
    <FormDirection onSubmit={() => setProceed(true)} proceed={proceed}/>
  </div>
)};

export default Publish;
