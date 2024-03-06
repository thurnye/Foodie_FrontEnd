import React, {useState} from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styles from './CreateEvent.module.css';
import Container from '@mui/material/Container';
import AddTickets from '../Forms/AddTickets/AddTickets'
import BasicInfos from '../Forms/BasicInfos/BasicInfos'
import Details from '../Forms/Details/Details'
import Publish from '../Forms/Publish/Publish'
import GoLive from '../Forms/GoLive/GoLive'
import Schedule from '../Forms/Schedule/Schedule'
import { AddEventFormContext, defaultForm } from '../../../store/formStateContext';



const CreateEvent = ({isLoaded}) => {
  let location = useLocation();
  let navigate = useNavigate();
  const event = location.state?.event;
  const userId = location.state?.userId;
  
  const formSteps = ['Basic Info', 'Schedule', 'Details', 'Add Tickets', ' Publish', 'Go Live'];
  const [currentFormStep, setCurrentFormStep] = useState(0);
  let edit = location.state?.edit
  const [eventForm, setEventForm] = useState(edit ? event : defaultForm);
  const [saveResultStatus, setSaveResultStatus] = useState();

  const getCurrentForm = (step) => {
    switch (step) {
      case 0:
        return(<BasicInfos isLoaded={isLoaded}/>)
      case 1:
        return (<Schedule/>)
      case 2:
        return (<Details/>)
      case 3:
        return (<AddTickets/>)
      case 4:
        return (<Publish/>)
      case 5:
        return (<GoLive/>)
      default:
        return <></>
    }
  }

  return(
  <div className={styles.CreateEvent}>
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <div>
      <AddEventFormContext.Provider value={{formSteps, currentFormStep, setCurrentFormStep,eventForm, setEventForm, saveResultStatus, setSaveResultStatus
    }}>   
      {getCurrentForm(currentFormStep)}
    </AddEventFormContext.Provider>
      </div>
    </Container>
  </div>
)};


export default CreateEvent;
