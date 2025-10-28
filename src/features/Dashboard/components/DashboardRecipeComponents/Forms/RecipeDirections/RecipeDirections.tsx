import React, { useEffect, useState } from 'react';
import { Box, CircularProgress } from '@mui/material';
import RecipeDirectionsForm from './RecipeDirectionsForm';
import { useAddRecipeFormContext } from '../../../../Context/dashboard.recipeContext';

interface RecipeDirectionsProps {}

const RecipeDirections: React.FC<RecipeDirectionsProps> = () => {
  const {
    formSteps,
    recipeForm,
    setRecipeForm,
    currentFormStep,
    setCurrentFormStep,
  } = useAddRecipeFormContext();

  const [data, setData] = useState<any>(null); // Replace `any` with your `RecipeDirectionsData` type if defined

  useEffect(() => {
    if (data) {
      const updatedData = {
        ...recipeForm,
        directions: data,
      };

      // Enable next step in form
      formSteps[currentFormStep + 1].isDisabled = false;
      setRecipeForm(updatedData);
      setCurrentFormStep(currentFormStep + 1);
    }
  }, [
    data,
    recipeForm,
    formSteps,
    currentFormStep,
    setRecipeForm,
    setCurrentFormStep,
  ]);

  // Optional: show loading state if recipeForm isn’t ready yet
  if (!recipeForm) {
    return (
      <Box
        sx={{
          minHeight: '50vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <CircularProgress color='primary' />
      </Box>
    );
  }

  return (
    <Box>
      <RecipeDirectionsForm
        setData={setData}
        defaultValues={
          recipeForm.directions || { ingredients: [], methods: [] }
        }
      />
    </Box>
  );
};

export default RecipeDirections;
