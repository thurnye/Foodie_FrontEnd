import React, { createContext, useContext } from 'react';
import { IFormStep, IRecipeFormType } from '../types/dashboard_recipe.types';
import { formSteps } from '../utils/dashboard.recipe.defaults';

// Context state types
export interface AddRecipeFormContextType {
  recipeForm: IRecipeFormType;
  setRecipeForm: React.Dispatch<React.SetStateAction<IRecipeFormType>>;
  currentFormStep: number;
  formSteps: IFormStep[];
  setCurrentFormStep: React.Dispatch<React.SetStateAction<number>>;
  saveResultStatus: number | string;
  setSaveResultStatus: React.Dispatch<React.SetStateAction<number | string>>;
}

// Default form values
export const defaultForm: IRecipeFormType = {
  _id: null,
  basicInfo: {
    recipeName: '',
    duration: {
      value: '',
      label: '',
    },
    level: {
      value: '',
      label: '',
    },
    serving: {
      value: '',
      label: '',
    },
    tags: [],
    categories: [],
  },
  details: {
    about: [],
    faqs: [],
    thumbnail: '',
  },
  nutritionalFacts: [],
  directions: {
    ingredients: [],
    methods: [],
  },
};

// Default context state
export const AddRecipeFormContext = createContext<AddRecipeFormContextType>({
  recipeForm: defaultForm,
  setRecipeForm: () => {},
  currentFormStep: 0,
  formSteps: formSteps,
  setCurrentFormStep: () => {},
  saveResultStatus: 200,
  setSaveResultStatus: () => {},
});

// Custom hook for context access
export const useAddRecipeFormContext = (): AddRecipeFormContextType =>
  useContext(AddRecipeFormContext);
