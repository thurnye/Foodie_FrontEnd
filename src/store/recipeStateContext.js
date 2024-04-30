
import { createContext, useContext} from 'react';



export const defaultForm = {
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
    faqs:[],
    thumbnail: '',
  },
  nutritionalFacts: {
    nutrients: [],
  },
  directions: {
    ingredients:{ 
      main: [],
      dressing: []
    },
    steps: [],
  },

// notes: [],
// mainIngredients: [],
// dressingIngredients: [],
// nutritionFacts: [],
// directions: [],
}

const formSteps = ["Basic Info", "Details", "Nutritional Facts", "Directions" ];
export const AddRecipeFormContext = createContext({
  eventForm: defaultForm,
  setRecipeForm: (form) => form,
  currentFormStep: 'Basic Info',
  formSteps,
  setCurrentFormStep: (step) => step,
  saveResultStatus : 200,  //default save successful,
  setSaveResultStatus: (status) => status
    
})



export const useAddRecipeFormContext = () => useContext(AddRecipeFormContext)