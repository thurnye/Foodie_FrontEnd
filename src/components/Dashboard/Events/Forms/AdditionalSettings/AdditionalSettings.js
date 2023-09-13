import React, {useState} from 'react';
import styles from './AdditionalSettings.module.css';

import FormDirection from '../FormDirection/FormDirection'

const AdditionalSettings = () => {
  const [nextStep, setNextStep] = useState(false);
  return (
  <div className={styles.AdditionalSettings}>
    AdditionalSettings Component

    <div>
              {/* <button >Next: Create Ticket</button> */}
              <FormDirection disabledNext={nextStep}/>
          </div>
  </div>
)};

export default AdditionalSettings;
