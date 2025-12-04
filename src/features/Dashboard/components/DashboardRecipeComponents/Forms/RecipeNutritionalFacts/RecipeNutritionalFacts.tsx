import React, { useEffect, useState } from 'react';
import RecipeNutritionalFactsForm from './RecipeNutritionalFactsForm';

import { INutritionalFact } from '../../../../../Recipe/types/recipe.types';
import { useAddRecipeFormContext } from '../../../../Context/dashboard.recipeContext';

// Define type for component props (none needed here since it's a step wrapper)
const RecipeNutritionalFacts: React.FC = () => {
  const {
    formSteps,
    recipeForm,
    setRecipeForm,
    currentFormStep,
    setCurrentFormStep,
  } = useAddRecipeFormContext();

  const [data, setData] = useState<INutritionalFact[] | undefined>(undefined);

  useEffect(() => {
    if (data && data.length > 0) {
      console.log('Nutritional Facts Data:', data);

      const updatedData = {
        ...recipeForm,
        nutritionalFacts: data,
      };

      // Enable next step and update context
      if (formSteps[currentFormStep + 1]) {
        formSteps[currentFormStep + 1].isDisabled = false;
      }

      setRecipeForm(updatedData);
      setCurrentFormStep(currentFormStep + 1);
    }
  }, [data, recipeForm, formSteps, currentFormStep, setRecipeForm, setCurrentFormStep]);

  return (
    <div>
      <RecipeNutritionalFactsForm
        setData={setData}
        defaultValues={recipeForm.nutritionalFacts ?? []}
      />
    </div>
  );
};

export default RecipeNutritionalFacts;
