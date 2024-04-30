import React, {useEffect, useState} from 'react';
import styles from './RecipeNutritionalFacts.module.css';
import RecipeNutritionalFactsForm from './RecipeNutritionalFactsForm'
import { useAddRecipeFormContext } from '../../../../../store/recipeStateContext';




const RecipeNutritionalFacts = () => {
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
  <div className={styles.RecipeNutritionalFacts}>
    <RecipeNutritionalFactsForm 
      setData={setData} 
      defaultValues={recipeForm.nutritionalFacts}
    />
  </div>
)};


export default RecipeNutritionalFacts;
