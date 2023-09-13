import React from 'react'
import { useAddEventFormContext } from '../../../../../store/formStateContext';



const FormDirection = ({disabledNext="false"}) => {
    const { formSteps, setCurrentFormStep, currentFormStep} = useAddEventFormContext()
  
    const completeFormStep = () => {
        if(currentFormStep < formSteps.length - 1){
          setCurrentFormStep(currentFormStep + 1);
        }
      };
      const PrevFormStep = () => {
        if(currentFormStep > 0){
          setCurrentFormStep(currentFormStep - 1);
        }
      };

      console.log(disabledNext)

  return (
    <div>
        {currentFormStep > 0 &&
    <button type="button"  className="btn btn-primary" onClick={PrevFormStep}>Previous: {formSteps[currentFormStep - 1 ]}</button>
    }
    {currentFormStep < formSteps.length - 1 &&
      <button type="button" className="btn btn-primary" onClick={()=> completeFormStep()} disabled={disabledNext}> Next Step: {formSteps[currentFormStep + 1]}</button>
    }
    </div>
  )
}

export default FormDirection;
