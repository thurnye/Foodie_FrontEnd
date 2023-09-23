import React, {useEffect} from 'react'
import { useAddEventFormContext } from '../../../../../store/formStateContext';
import styles from './FormDirection.module.css';
import {GrLinkNext, GrLinkPrevious} from 'react-icons/gr'



const FormDirection = ({onSubmit, proceed}) => {
    const { formSteps, setCurrentFormStep, currentFormStep} = useAddEventFormContext()

      useEffect(() => {
        if(proceed){
          if(currentFormStep < formSteps.length - 1){
            setCurrentFormStep(currentFormStep + 1);
          }
        }
      },[proceed, currentFormStep, formSteps, setCurrentFormStep]);

      const PrevFormStep = () => {
        if(currentFormStep > 0){
          setCurrentFormStep(currentFormStep - 1);
        }
      };


  return (
    <div className={`${styles.FormDirection} `}>
      {currentFormStep > 0 &&
        <button type="button"  className={`btn ${styles.previous}`} onClick={PrevFormStep}>
          <span className={styles.iconDirection}>
            <GrLinkPrevious/>
          </span>
          {formSteps[currentFormStep - 1 ]}
        </button>
      }
      {currentFormStep < formSteps.length - 1 &&
        <button type="button" className={`btn ${styles.next}`} onClick={()=> onSubmit()} >  
          {formSteps[currentFormStep + 1]} 
          <span className={styles.iconDirection}>
            <GrLinkNext/>
          </span> 
        </button>
      }
    </div>
  )
}

export default FormDirection;
