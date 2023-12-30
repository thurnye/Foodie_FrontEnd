import React, {useState} from 'react';
import styles from './Details.module.css';
import FormDirection from '../../../../components/Dashboard/Events/Forms/FormDirection/FormDirection';


const Details = () => {
  const [proceed, setProceed] = useState(false);
  return(
  <div className={styles.BasicInfos}>
    Details Component
    <FormDirection onSubmit={() => setProceed(true)} proceed={proceed}/>
  </div>
)};

export default Details;
