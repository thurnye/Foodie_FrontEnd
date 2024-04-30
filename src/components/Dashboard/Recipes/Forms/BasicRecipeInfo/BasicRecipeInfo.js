import React, {useEffect, useState} from 'react';
import styles from './BasicRecipeInfo.module.css';
import BasicRecipeForm from './BasicRecipeForm';
import { useAddRecipeFormContext } from '../../../../../store/recipeStateContext';
import Box from '@mui/material/Box';


const BasicRecipeInfo = () => {
  const {formSteps, recipeForm, setRecipeForm, currentFormStep, setCurrentFormStep  } = useAddRecipeFormContext();
  const [data, setData] = useState();
  
  // console.log(recipeForm);

  useEffect(() => {
    if(data){
      const updatedData = { 
        ...recipeForm, 
        basicInfo: data 
      }
      formSteps[currentFormStep + 1].isDisabled = false
      setRecipeForm(updatedData);
      setCurrentFormStep(currentFormStep + 1)
      // edit && updateEvent(updatedData);
    }
  }, [data]);

  return(
  <Box className={styles.BasicRecipeInfo}>
    <BasicRecipeForm
      setData={setData}
      // isLoaded={isLoaded} 
      defaultValues={recipeForm.basicInfo} 
    />
  </Box>
)};


export default BasicRecipeInfo;
