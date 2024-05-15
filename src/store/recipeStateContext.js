
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
  nutritionalFacts: [
    {
        "name": "jmbnjkn",
        "amount": "565",
        "unit": "oz"
    },
    {
        "name": "454",
        "amount": "4545",
        "unit": "l"
    }
],
  directions: {
    ingredients:[
      
    ],
    methods: [
      // {
      //     "step": [
      //         {
      //             "type": "title",
      //             "value": "testing"
      //         },
      //         {
      //             "type": "text",
      //             "value": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
      //         },
      //         {
      //           "type": "video",
      //           "value": 'https://youtu.be/bl5xTS8g3jo?si=8ZKcja94-FGS9-jd' ,
      //         }
      //     ]
      // },
      // {
      //     "step": [
      //         {
      //             "type": "title",
      //             "value": "test"
      //         },
      //         {
      //             "type": "text",
      //             "value": "test 2"
      //         },
      //         {
      //           "type": "image",
      //           "value": [
      //               "https://images.unsplash.com/photo-1532636653654-e243fbe850b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0ODIwNDd8MHwxfHNlYXJjaHwxfHxjb29raW5nJTIwY29udGVzdHxlbnwwfHx8fDE3MTUyMDk1ODF8MA&ixlib=rb-4.0.3&q=80&w=400",
      //               "https://images.unsplash.com/photo-1528712306091-ed0763094c98?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0ODIwNDd8MHwxfHNlYXJjaHwzfHxjb29raW5nJTIwY29udGVzdHxlbnwwfHx8fDE3MTUyMDk1ODF8MA&ixlib=rb-4.0.3&q=80&w=400",
      //               "https://images.unsplash.com/photo-1605433247501-698725862cea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0ODIwNDd8MHwxfHNlYXJjaHw0fHxjb29raW5nJTIwY29udGVzdHxlbnwwfHx8fDE3MTUyMDk1ODF8MA&ixlib=rb-4.0.3&q=80&w=400"
      //           ],
      //           "isUnsplash": true,
      //           "isMultiple": true
      //       }
      //     ]
      // }
    ]
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