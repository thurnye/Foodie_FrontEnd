import React, {useState} from 'react';
import styles from './AddEvent.module.css';
import { eventForm as FormData, AddEventFormContext } from '../../../../store/formStateContext';
import EventDetails from '../Forms/EventDetails/EventDetails';
import CreateTicket from '../Forms/CreateTicket/CreateTicket';
import AdditionalSettings from '../Forms/AdditionalSettings/AdditionalSettings';


const AddEvent = () => {
  // https://www.eventbrite.co.uk/blog/how-to-set-up-online-registration-for-an-event-ds00/
  const [eventForm, setEventForm] = useState(FormData);

const formSteps = ['Event Details', 'Create Ticket', 'Additional Settings'];
const [currentFormStep, setCurrentFormStep] = useState(1);

const onSubmit = async (data) => {
    try{
      console.log(data);
    }catch(err){
      console.log(err)
    }
};


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
    </div>

    <AddEventFormContext.Provider value={{formSteps, currentFormStep, setCurrentFormStep,eventForm, setEventForm, 
    }}>   
      {getCurrentForm(currentFormStep)}
    </AddEventFormContext.Provider>
  </div>
)};

export default AddEvent;
