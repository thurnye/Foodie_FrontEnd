
import { createContext, useContext} from 'react';
import { getRandomInt } from '../util/commons';

export const eventForm = {
    eventDetails : {
      eventTitle: '',
      location: '',
      isOnline: false,
      starts: '',
      ends: '',
      repeat: false,
      frequency: 'weekly',
      thumbnail: '',
      eventDescription: '',
      addFAQs: false,
      fAQs:[{
        ques: "",
        ans: "",
      }], //{question:'', answer: ''}
      organiserName: '',
      organiserDescription: '',
      includeLinks: false, //links to the event
      test: false
    },
    tickets : [
        {
          sortId: getRandomInt(),
          ticketName : 'Early Bird',
          quantity: '',
          price: '',
          ticketDescription: '',
          showDescriptionOnEventPage: false,
          onlineSales: true,
          doorSales: true,
          starts: '',
          ends: '',
          ticketVisibility: false,  //hide ticket when max is reached,
          autoHideDate:'',
          ticketsPerOrder: {
            min: 1,
            max: 10
          }
        },
        {
          sortId: getRandomInt(),
          ticketName : 'General Admission',
          quantity: '',
          price: '',
          advanceOptions:{
            ticketDescription: '',
            showDescritptionOnEventPage: false,
            onlineSales: true,
            doorSales: true,
            ticketSalesStartDate: '',
            ticketSalesEndDate: '',
            ticketVisibility: false,  //hide ticket when max is reached,
            ticketsPerOrder: {
              min: 0,
              max: 10
            }
          }
        },
        {
          sortId: getRandomInt(),
          ticketName : 'VIP',
          quantity: '',
          price: '',
          advanceOptions:{
            ticketDescription: '',
            showDescritptionOnEventPage: false,
            onlineSales: true,
            doorSales: true,
            ticketSalesStartDate: '',
            ticketSalesEndDate: '',
            ticketVisibility: false,  //hide ticket when max is reached,
            ticketsPerOrder: {
              min: 0,
              max: 10
            }
          }
        }
      ],
    additionalSettings: {
      currency: '',

    }
}

const formSteps = ['Event Details', 'Create Ticket', 'Additional Settings'];

export const AddEventFormContext = createContext({
    eventForm,
    setEventForm: (form) => form,
    currentFormStep: 'Event Details',
    formSteps,
    setCurrentFormStep: (step) => step
    
})



export const useAddEventFormContext = () => useContext(AddEventFormContext)