import React, {useEffect, useState} from 'react';
import styles from './SocialMediaPlatform.module.css';
import SocialMediaPlatformForm from './SocialMediaPlatformForm'
import { useAddRecipeFormContext } from '../../../../../store/recipeStateContext';




const SocialMediaPlatform = () => {
  const {formSteps, recipeForm, setRecipeForm, currentFormStep, setCurrentFormStep  } = useAddRecipeFormContext();
  const [data, setData] = useState();

  useEffect(() => {
    if(data){
      console.log({data})
      const updatedData = { 
        ...recipeForm, 
        nutritionalFacts: data 
      }
      formSteps[currentFormStep + 1].isDisabled = false
      setRecipeForm(updatedData);
      setCurrentFormStep(currentFormStep + 1)
    }

  },[data]);

  return(
  <div className={styles.SocialMediaPlatform}>
    <SocialMediaPlatformForm 
      setData={setData} 
      defaultValues={recipeForm.nutritionalFacts}
    />
  </div>
)};


export default SocialMediaPlatform;
