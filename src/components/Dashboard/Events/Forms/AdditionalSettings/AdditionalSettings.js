import React, {useState} from 'react';
import styles from './AdditionalSettings.module.css';

import FormDirection from '../FormDirection/FormDirection'

const AdditionalSettings = () => {
  const [proceed, setProceed] = useState(false);
  return (
  <div className={styles.AdditionalSettings}>
    AdditionalSettings Component

    <div>
      <FormDirection proceed={proceed}/>
    </div>
  </div>
)};

export default AdditionalSettings;
