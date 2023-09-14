
import { createContext, useContext} from 'react';

export const eventForm = {
    eventDetails : {
      eventTitle: '',
      location: '',
      isOnline: false,
      starts: '',
      ends: '',
      repeat: false,
      frequency: '',
      thumbnail: '',
      eventDescription: '',
      fAQs:[], //{question:'', answer: ''}
      organiserName: '',
      organiserDescription: '',
      includeLinks: false //links to the event
    },
    tickets : {
      prices: [
        {
          ticketName : 'Early Bird',
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
      ]
    },
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