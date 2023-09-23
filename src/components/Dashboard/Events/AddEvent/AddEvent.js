import React, {useState} from 'react';
import styles from './AddEvent.module.css';
import { eventForm as FormData, AddEventFormContext } from '../../../../store/formStateContext';
import EventDetails from '../Forms/EventDetails/EventDetails';
import CreateTicket from '../Forms/CreateTicket/CreateTicket';
import PreviewTicket from '../Forms/PreviewTicket/PreviewTicket';
import Publish from '../Forms/Publish/Publish';
import AdditionalSettings from '../Forms/AdditionalSettings/AdditionalSettings';


const AddEvent = () => {
  // https://www.eventbrite.co.uk/blog/how-to-set-up-online-registration-for-an-event-ds00/
  const [eventForm, setEventForm] = useState(FormData);

const formSteps = ['Event Details', 'Create Ticket', 'Additional Settings', 'Preview', 'Save And Publish'];
const [currentFormStep, setCurrentFormStep] = useState(3);


const getCurrentForm = (step) => {
  switch (step) {
    case 0:
      return(<EventDetails/>)
    case 1:
      return (<CreateTicket/>)
    case 2:
      return (<AdditionalSettings/>)
    case 3:
      return (<PreviewTicket/>)
    case 4:
      return (<Publish/>)
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
        </ul>
      </div>
    </div>

    <AddEventFormContext.Provider value={{formSteps, currentFormStep, setCurrentFormStep,eventForm, setEventForm, 
    }}>   
      {getCurrentForm(currentFormStep)}
    </AddEventFormContext.Provider>
  </div>
)};

export default AddEvent;
