import React, {useEffect, useState}from 'react';
import styles from './RecipeDetails.module.css';
import RecipeDetailsForm from './RecipeDetailsForm'
import { useAddRecipeFormContext } from '../../../../../store/recipeStateContext';



const RecipeDetails = () => {
  const {formSteps, recipeForm, setRecipeForm, currentFormStep, setCurrentFormStep  } = useAddRecipeFormContext();
  const [data, setData] = useState();

  useEffect(() => {
    if(data){
      console.log({data})
      const updatedData = { 
        ...recipeForm, 
        details: data 
      }
      formSteps[currentFormStep + 1].isDisabled = false
      setRecipeForm(updatedData);
      setCurrentFormStep(currentFormStep + 1)
    }

  },[data]);


  return(
  <div className={styles.BasicInfos}>
    <RecipeDetailsForm 
      setData={setData} 
      defaultValues={recipeForm.details}
    />
  </div>
)};

export default RecipeDetails;
