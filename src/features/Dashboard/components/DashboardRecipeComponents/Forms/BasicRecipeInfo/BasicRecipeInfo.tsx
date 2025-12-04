import React, { useEffect, useState } from 'react';
import BasicRecipeForm from './BasicRecipeForm';
import Box from '@mui/material/Box';
import { IRecipeBasicInfo } from '../../../../../Recipe/types/recipe.types';
import { useAddRecipeFormContext } from '../../../../Context/dashboard.recipeContext';

const BasicRecipeInfo: React.FC = () => {
  const {
    formSteps,
    recipeForm,
    setRecipeForm,
    currentFormStep,
    setCurrentFormStep,
  } = useAddRecipeFormContext();

  const [data, setData] = useState<IRecipeBasicInfo | undefined>(undefined);

  useEffect(() => {
    if (data) {
      const updatedData = {
        ...recipeForm,
        basicInfo: data,
      };

      // Safely update step enable state
      if (formSteps[currentFormStep + 1]) {
        formSteps[currentFormStep + 1].isDisabled = false;
      }

      setRecipeForm(updatedData);
      setCurrentFormStep(currentFormStep + 1);
    }
  }, [data, recipeForm, formSteps, currentFormStep, setRecipeForm, setCurrentFormStep]);

  return (
    <Box>
      <BasicRecipeForm
        setData={setData}
        defaultValues={recipeForm.basicInfo}
      />
    </Box>
  );
};

export default BasicRecipeInfo;
