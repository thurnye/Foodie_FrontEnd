
import { createContext, useContext} from 'react';

export const defaultForm = {
  basicInfo: {
    eventTitle:"",
    displayEndTime: '',
    // ends:"",
    locationState: "venue",
    dateOccurrence: "recurring",
    dateTime:{
      start: "",
      end: "",
  },
    location:"",
    organizer:"",
    // starts: "",
    tags: []
  },
  schedule:[],
  details: {
    images: [],
    summary: "",
    about: [],
    faqs: []
  },
  tickets:  {
    capacity:{
      "type": "Up to 100 tickets",
      "value": 100
  },
  sections:[]
  } 
}

const formSteps = ['Basic Info', 'Schedule', 'Details', 'Add Tickets', ' Preview']
export const AddEventFormContext = createContext({
  eventForm: defaultForm,
  setEventForm: (form) => form,
  currentFormStep: 'Basic Info',
  formSteps,
  setCurrentFormStep: (step) => step,
  saveResultStatus : 200,  //default save successful,
  setSaveResultStatus: (status) => status  
})



export const useAddEventFormContext = () => useContext(AddEventFormContext)