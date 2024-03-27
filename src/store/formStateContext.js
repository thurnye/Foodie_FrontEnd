
import { createContext, useContext} from 'react';
import { getRandomInt } from '../util/commons';

export const defaultEventForm = {
    eventDetails : {
      eventTitle: '',
      location: {
        name: "",
        url: "",
        coordinates: {
            lat: 0,
            lng: 0
        },
        formattedAddress: ""
    },
      isOnline: false,
      isFree: false,
      repeat: false,
      frequency: 'weekly',
      thumbnail: '',
      eventDescription: '',
      addFAQs: false,
      starts: new Date(),
      ends:'',
      fAQs:[{
        ques: "",
        ans: "",
      }], //{question:'', answer: ''}
      organiserName: '',
      organiserDescription: '',
      includeLinks: false, //links to the event
    },
    tickets : [
        {
          ticketName : 'Early Bird',
          quantity: 1,
          price: 1,
          ticketDescription: '',
          showDescriptionOnEventPage: true, //default false
          onlineSales: true,
          doorSales: true,
          starts: '',
          ends: '',
          ticketVisibility: true,  // false, hide ticket when max is reached,
          autoHideDate:'',
          ticketsPerOrder: {
            min: 1,
            max: 10
          }
        },
        {
          sortId: getRandomInt(),
          ticketName : 'General Assembly',
          quantity: 1,
          price: 1,
          ticketDescription: '',
          showDescriptionOnEventPage: true, //default false
          onlineSales: true,
          doorSales: true,
          starts: '',
          ends: '',
          ticketVisibility: true,  // false, hide ticket when max is reached,
          autoHideDate:'',
          ticketsPerOrder: {
            min: 1,
            max: 10
          }
        },
        {
          sortId: getRandomInt(),
          ticketName : 'VIP',
          quantity: 1,
          price: 1,
          ticketDescription: '',
          showDescriptionOnEventPage: true, //default false
          onlineSales: true,
          doorSales: true,
          starts: '',
          ends: '',
          ticketVisibility: true,  // false, hide ticket when max is reached,
          autoHideDate:'',
          ticketsPerOrder: {
            min: 1,
            max: 10
          }
        },
        
      ],
    additionalSettings: { 
    currency: {
      label: "US Dollar - USD",
      symbol: "$",
      currency: "US Dollar"
    }}
}

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