import React, { useEffect, useState } from 'react';
import RecipeDetailsForm from './RecipeDetailsForm';
import { useAddRecipeFormContext } from '../../../../Context/dashboard.recipeContext';
import { IRecipeDetails } from '../../../../../Recipe/types/recipe.types';



const RecipeDetails: React.FC = () => {
  const {
    formSteps,
    recipeForm,
    setRecipeForm,
    currentFormStep,
    setCurrentFormStep,
  } = useAddRecipeFormContext();

  //Explicitly type the local state
  const [data, setData] = useState<IRecipeDetails | undefined>(undefined);

  useEffect(() => {
    if (data) {
      console.log({ data });

      //Update recipe form context safely
      const updatedData = {
        ...recipeForm,
        details: data,
      };

      //Enable the next step in the form
      if (formSteps[currentFormStep + 1]) {
        formSteps[currentFormStep + 1].isDisabled = false;
      }

      setRecipeForm(updatedData);
      setCurrentFormStep(currentFormStep + 1);
    }
  }, [data]);

  return (
    <div>
      <RecipeDetailsForm
        setData={setData}
        defaultValues={recipeForm.details}
      />
    </div>
  );
};

export default RecipeDetails;
