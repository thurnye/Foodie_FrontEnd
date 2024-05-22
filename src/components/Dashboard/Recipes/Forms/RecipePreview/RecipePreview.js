import React, {useEffect, useState} from 'react';
import styles from './RecipePreview.module.css';
import { useAddRecipeFormContext } from '../../../../../store/recipeStateContext';
import NewSingleRecipe from '../../../../NewSingleRecipe/NewSingleRecipe';


const RecipePreview = () => {
  const {recipeForm  } = useAddRecipeFormContext();


  
  console.log('recipeForm::',recipeForm)

  return(
  <div className={styles.RecipePreview}>
    {/* <RecipePreview setData={setData} 
      defaultValues={recipeForm.directions}/> */}
      <NewSingleRecipe recipe={recipeForm}/>
    </div>
)};


export default RecipePreview;
