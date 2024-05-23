import { createContext, useContext } from 'react';
// import placeholder from '../public/images/IMG_0970.PNG'

export const defaultForm = {
  _id: null,
  authorId: '',
  basicInfo: {
    recipeName: '',
    duration: '',
    level: '',
    serving: '',
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
  }
};

const formSteps = ['Basic Info', 'Details', 'Nutritional Facts', 'Directions'];
export const AddRecipeFormContext = createContext({
  eventForm: defaultForm,
  setRecipeForm: (form) => form,
  currentFormStep: 'Basic Info',
  formSteps,
  setCurrentFormStep: (step) => step,
  saveResultStatus: 200, //default save successful,
  setSaveResultStatus: (status) => status,
});

export const useAddRecipeFormContext = () => useContext(AddRecipeFormContext);
