import React, {useEffect} from 'react'
import { useAddEventFormContext } from '../../../../../store/formStateContext';



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
    <div>
        {currentFormStep > 0 &&
    <button type="button"  className="btn btn-primary" onClick={PrevFormStep}>Previous: {formSteps[currentFormStep - 1 ]}</button>
    }
    {currentFormStep < formSteps.length - 1 &&
      <button type="button" className="btn btn-primary" onClick={()=> onSubmit()} > Next Step: {formSteps[currentFormStep + 1]}</button>
    }
    </div>
  )
}

export default FormDirection;
