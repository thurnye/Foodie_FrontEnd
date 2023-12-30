import React, {useState} from 'react';
import styles from './BasicInfos.module.css';
import FormDirection from '../../../../components/Dashboard/Events/Forms/FormDirection/FormDirection';
import BasicForm from './BasicForm';

const BasicInfos = () => {
  const [proceed, setProceed] = useState(false);
  return(
  <div className={styles.BasicInfos}>
    <BasicForm />
    <FormDirection onSubmit={() => setProceed(true)} proceed={proceed}/>
  </div>
)};



export default BasicInfos;
