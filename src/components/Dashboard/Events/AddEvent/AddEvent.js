import React, {useState, useEffect} from 'react';
import styles from './AddEvent.module.css';
import { useForm, FormProvider } from "react-hook-form"
import { AddEventFormContext } from '../../../../store/formStateContext';
import { getRandomInt } from '../../../../util/commons';
import EventDetails from '../Forms/EventDetails/EventDetails';
import CreateTicket from '../Forms/CreateTicket/CreateTicket';
import AdditionalSettings from '../Forms/AdditionalSettings/AdditionalSettings';


const AddEvent = () => {
  // const {
  //   control,
  //   register, 
  //   handleSubmit,
  //   formState: { errors },
  //   setValue,
  //   getValues,
  //   watch,
  // } = useForm();
  const methods = useForm()
  // https://www.eventbrite.co.uk/blog/how-to-set-up-online-registration-for-an-event-ds00/
  const [eventForm, setEventForm] = useState({
    eventDetails : {
      eventTitle: '',
      location: '',
      isOnline: false,
      starts: new Date(),
      ends: new Date(),
      repeat: false,
      frequency: '',
      thumbnail: '',
      eventDescription: '',
      fAQs:[], //{question:'', answer: ''}
      organiser: '',
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
            ticketSalesStartDate: new Date(),
            ticketSalesEndDate: new Date(),
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
            ticketSalesStartDate: new Date(),
            ticketSalesEndDate: new Date(),
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
            ticketSalesStartDate: new Date(),
            ticketSalesEndDate: new Date(),
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
  });
const [activeComponent, setActiveComponent] = useState('Event Details'); 
const formSteps = ['Event Details', 'Create Ticket', 'Additional Settings'];
const [currentFormStep, setCurrentFormStep] = useState(0);


const completeFormStep = () => {
  if(currentFormStep < formSteps.length - 1){
    setCurrentFormStep(currentFormStep + 1);
  }
};
const PrevFormStep = () => {
  if(currentFormStep > 0){
    setCurrentFormStep(currentFormStep - 1);
  }
};





const onSubmit = async (data) => {
    try{
      console.log(data);
    }catch(err){
      console.log(err)
    }
};

const getForm = (step) => {
  switch (step) {
    case 'Event Details':
      return(<EventDetails
      />)
    case 'Create Ticket':
      return (<CreateTicket/>)
    case 'Additional Settings':
      return (<AdditionalSettings/>)
    default:
      return <></>
  }
}
const getCurrentForm = (step) => {
  switch (step) {
    case 0:
      return(<EventDetails/>)
    case 1:
      return (<CreateTicket/>)
    case 2:
      return (<AdditionalSettings/>)
    default:
      return <></>
  }
}



  return(
  <div className={styles.AddEvent}>
    <div className={styles.eventHeader}>
      <div className={styles.EventActions}>
        <ul className={`nav ${styles.EventAction}`}>
          <li className="nav-item" role="presentation" >
          <p className='h1'>Create An Event</p>
          </li>
          <li className="nav-item" role="presentation" >
            <button type="submit" className="btn btn-secondary" onClick={() => onSubmit()}>SAVE</button>
            <button type="button" className="btn btn-secondary" disabled>PREVIEW</button>
            <button type="button" className="btn btn-secondary" disabled>MAKE EVENT LIVE</button>
          </li>
        </ul>
      </div>

      {/* <ul className={`nav ${styles.EventNav}`} id="myTab" role="tablist">
        {formSteps.map((el) => (
          <li className="nav-item" role="presentation" key={`${el}_${getRandomInt()}`}>
            <button
              className={`nav-link ${activeComponent === el ? ` active ${ styles.activeCompNav}`  : ''}`}
              id={`${el}-tab`}
              type="button"
              role="tab"
              aria-controls={el}
              aria-selected={activeComponent === el ? 'true' : 'false'}
              onClick={() => setActiveComponent(el)} // Handle click event
            >
              {el}
            </button>
          </li>
        ))}
      </ul> */}
    </div>
    {/* {currentFormStep > 0 &&
    <button type="button" onClick={PrevFormStep}>Previous: {formSteps[currentFormStep - 1 ]}</button>
    }
    {currentFormStep < formSteps.length - 1 &&
      <button onClick={()=> completeFormStep()}> Next Step: {formSteps[currentFormStep + 1]}</button>
    } */}
    {/* <pre>{JSON.stringify(watch(), null, 2)}</pre> */}

    <AddEventFormContext.Provider value={{formSteps, currentFormStep, setCurrentFormStep,eventForm, setEventForm, 
    }}>
            
      {getCurrentForm(currentFormStep)}
    </AddEventFormContext.Provider>

    {/* <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        {getCurrentForm(currentFormStep)}
      </form>
    </FormProvider> */}

    {/* {formSteps.map((el) => (
        <div
          key={`panel_${el}_${getRandomInt()}`}
          className={`tab-content ${activeComponent === el ? 'show active' : ''}`}
          id={el}
          role="tabpanel"
          aria-labelledby={`${el}-tab`}
        >
          {activeComponent === el && getForm(el)}
        </div>
      ))} */}

      
    
  </div>
)};

export default AddEvent;
