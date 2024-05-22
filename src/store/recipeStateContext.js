
import { createContext, useContext} from 'react';
// import placeholder from '../public/images/IMG_0970.PNG'



// export const defaultForm = {
//   basicInfo: {
//     recipeName: '',
//     duration: '',
//     level: '',
//     serving: '',
//     tags: [],
//     categories: [],
//   },
//   details: {
//     about: [],
//     faqs:[],
//     thumbnail: '',
//   },
//   nutritionalFacts: [
//     {
//         "name": "jmbnjkn",
//         "amount": "565",
//         "unit": "oz"
//     },
//     {
//         "name": "454",
//         "amount": "4545",
//         "unit": "l"
//     }
// ],
//   directions: {
//     ingredients:[
      
//     ],
//     methods: [
//       // {
//       //     "step": [
//       //         {
//       //             "type": "title",
//       //             "value": "testing"
//       //         },
//       //         {
//       //             "type": "text",
//       //             "value": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
//       //         },
//       //         {
//       //           "type": "video",
//       //           "value": 'https://youtu.be/bl5xTS8g3jo?si=8ZKcja94-FGS9-jd' ,
//       //         }
//       //     ]
//       // },
//       // {
//       //     "step": [
//       //         {
//       //             "type": "title",
//       //             "value": "test"
//       //         },
//       //         {
//       //             "type": "text",
//       //             "value": "test 2"
//       //         },
//       //         {
//       //           "type": "image",
//       //           "value": [
//       //               "https://images.unsplash.com/photo-1532636653654-e243fbe850b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0ODIwNDd8MHwxfHNlYXJjaHwxfHxjb29raW5nJTIwY29udGVzdHxlbnwwfHx8fDE3MTUyMDk1ODF8MA&ixlib=rb-4.0.3&q=80&w=400",
//       //               "https://images.unsplash.com/photo-1528712306091-ed0763094c98?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0ODIwNDd8MHwxfHNlYXJjaHwzfHxjb29raW5nJTIwY29udGVzdHxlbnwwfHx8fDE3MTUyMDk1ODF8MA&ixlib=rb-4.0.3&q=80&w=400",
//       //               "https://images.unsplash.com/photo-1605433247501-698725862cea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0ODIwNDd8MHwxfHNlYXJjaHw0fHxjb29raW5nJTIwY29udGVzdHxlbnwwfHx8fDE3MTUyMDk1ODF8MA&ixlib=rb-4.0.3&q=80&w=400"
//       //           ],
//       //           "isUnsplash": true,
//       //           "isMultiple": true
//       //       }
//       //     ]
//       // }
//     ]
//   },

// // notes: [],
// // mainIngredients: [],
// // dressingIngredients: [],
// // nutritionFacts: [],
// // directions: [],
// }

export const defaultForm = {
  "basicInfo": {
      "recipeName": "tomatoes Puree",
      "duration": {
          "value": "5 Minutes",
          "label": "5 Minutes"
      },
      "level": {
          "value": "Easy",
          "label": "Easy"
      },
      "serving": {
          "value": 1,
          "label": 1
      },
      "tags": [
          {
              "value": "15 minutes or less",
              "label": "15 minutes or less"
          },
          {
              "value": "10 ingredients or less",
              "label": "10 ingredients or less"
          },
          {
              "value": "appetizer",
              "label": "appetizer"
          },
          {
              "value": "bacon",
              "label": "bacon"
          }
      ],
      "categories": [
          {
              "value": "Pizza",
              "label": "Pizza"
          },
          {
              "value": "Lunch",
              "label": "Lunch"
          },
          {
              "value": "Meat",
              "label": "Meat"
          },
          {
              "value": "Greens",
              "label": "Greens"
          }
      ]
  },
  "details": {
      "thumbnail": "https://images.unsplash.com/photo-1490645935967-10de6ba17061?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0ODIwNDd8MHwxfHNlYXJjaHw4fHxyZWNpcGV8ZW58MHx8fHwxNzEzNzUxNDU4fDA&ixlib=rb-4.0.3&q=80&w=400",
      "about": [
        {
            "type": "text",
            "value": "<p><strong>Lorem Ipsum</strong>&nbsp;is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>"
        },
        {
            "type": "image",
            "value": [
                "https://images.unsplash.com/photo-1517666005606-69dea9b54865?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0ODIwNDd8MHwxfHNlYXJjaHwyfHx0b21hdG8lMjBwdXJlZXxlbnwwfHx8fDE3MTU4MDk5NTd8MA&ixlib=rb-4.0.3&q=80&w=400",
                "https://images.unsplash.com/photo-1529312266912-b33cfce2eefd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0ODIwNDd8MHwxfHNlYXJjaHw0fHx0b21hdG8lMjBwdXJlZXxlbnwwfHx8fDE3MTU4MDk5NTd8MA&ixlib=rb-4.0.3&q=80&w=400",
                "https://images.unsplash.com/photo-1528751086790-81a64658fc53?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0ODIwNDd8MHwxfHNlYXJjaHw1fHx0b21hdG8lMjBwdXJlZXxlbnwwfHx8fDE3MTU4MDk5NTd8MA&ixlib=rb-4.0.3&q=80&w=400",
                "https://images.unsplash.com/photo-1444731961956-751ed90465a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0ODIwNDd8MHwxfHNlYXJjaHw2fHx0b21hdG8lMjBwdXJlZXxlbnwwfHx8fDE3MTU4MDk5NTd8MA&ixlib=rb-4.0.3&q=80&w=400"
            ],
            "isUnsplash": true,
            "isMultiple": true
        }
    ],
      "faqs": [
          {
              "ques": "ssdfs",
              "ans": "rrfgfgfgf"
          }
      ]
  },
  "nutritionalFacts": [
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
  "directions": {
    "methods": [
        {
            "step": [
                {
                    "type": "title",
                    "value": "rtrtrtr"
                },
                {
                    "type": "text",
                    "value": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                },
                {
                    "type": "image",
                    "value": [
                        "https://images.unsplash.com/photo-1542010589005-d1eacc3918f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0ODIwNDd8MHwxfHNlYXJjaHw0fHxyZWNpcGV8ZW58MHx8fHwxNzE1NzkzOTgyfDA&ixlib=rb-4.0.3&q=80&w=400",
                        "https://images.unsplash.com/photo-1466637574441-749b8f19452f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0ODIwNDd8MHwxfHNlYXJjaHwyfHxyZWNpcGV8ZW58MHx8fHwxNzE1NzkzOTgyfDA&ixlib=rb-4.0.3&q=80&w=400"
                    ],
                    "isUnsplash": true,
                    "isMultiple": true
                }
            ]
        },
        {
            "step": [
                {
                    "type": "title",
                    "value": "serbeefefe"
                },
                {
                    "type": "text",
                    "value": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                }
            ]
        }
    ],
    "ingredients": [
        {
            "name": "ddfdfs",
            "type": "main"
        },
        {
            "name": "ddfdsd",
            "type": "dressing"
        },
        {
            "name": "dfdferf",
            "type": "main"
        }
    ]
}
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