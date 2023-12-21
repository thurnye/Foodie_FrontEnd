// https://www.eventbrite.co.uk/blog/how-to-set-up-online-registration-for-an-event-ds00/
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styles from './AddEvent.module.css';
import { defaultEventForm, AddEventFormContext } from '../../../../store/formStateContext';
import EventDetails from '../Forms/EventDetails/EventDetails';
import CreateTicket from '../Forms/CreateTicket/CreateTicket';
import PreviewTicket from '../Forms/PreviewTicket/PreviewTicket';
import Publish from '../Forms/Publish/Publish';
import AdditionalSettings from '../Forms/AdditionalSettings/AdditionalSettings';



const AddEvent = ({isNew}) => {
  let location = useLocation();
  let navigate = useNavigate();
  let edit = location.state?.edit
  const event = location.state?.event;
  const userId = location.state?.userId;
  
  const [eventForm, setEventForm] = useState(edit ? event : defaultEventForm);

  const formSteps = ['Event Details', 'Create Ticket', 'Additional Settings', 'Preview', 'Save And Publish'];
  const [currentFormStep, setCurrentFormStep] = useState(0);

  useEffect(() => {
    if(!isNew && userId){
      if(event.createdBy._id !== userId){
        //Kick the unauthorized user out
        navigate("my-event", { state: { type: 'myEvent', edit: false}});
      }
    }
  },[isNew, event, ])

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
