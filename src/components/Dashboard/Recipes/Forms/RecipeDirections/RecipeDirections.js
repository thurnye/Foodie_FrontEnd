import React, {useEffect, useState} from 'react';
import styles from './RecipeDirections.module.css';
import { useAddRecipeFormContext } from '../../../../../store/recipeStateContext';
import RecipeDirectionsForm from './RecipeDirectionsForm';

const RecipeDirections = () => {
  const {formSteps, recipeForm, setRecipeForm, currentFormStep, setCurrentFormStep  } = useAddRecipeFormContext();
  const [data, setData] = useState();


  useEffect(() => {
    if(data){
      console.log({data})
      const updatedData = { 
        ...recipeForm, 
        directions: data 
      }
      formSteps[currentFormStep + 1].isDisabled = false
      setRecipeForm(updatedData);
      setCurrentFormStep(currentFormStep + 1)
    }

  },[data]);
  console.log('recipeForm::',recipeForm)

  return(
  <div className={styles.RecipeDirections}>
    <RecipeDirectionsForm/>
    </div>
)};


export default RecipeDirections;
