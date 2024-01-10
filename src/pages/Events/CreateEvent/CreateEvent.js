import React, {useState} from 'react';
import styles from './CreateEvent.module.css';
import Container from '@mui/material/Container';
import AddTickets from '../Forms/AddTickets/AddTickets'
import BasicInfos from '../Forms/BasicInfos/BasicInfos'
import Details from '../Forms/Details/Details'
import Publish from '../Forms/Publish/Publish'
import Schedule from '../Forms/Schedule/Schedule'
import { AddEventFormContext } from '../../../store/formStateContext';



const CreateEvent = ({isLoaded}) => {
  const formSteps = ['Basic Info', 'Schedule', 'Details', 'Add Tickets', ' Publish'];
  const [currentFormStep, setCurrentFormStep] = useState(3);
  const [eventBritForm, setEventBritForm] = useState();

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
      default:
        return <></>
    }
  }

  return(
  <div className={styles.CreateEvent}>
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <div>
      <AddEventFormContext.Provider value={{eventBritForm, setEventBritForm,formSteps, currentFormStep, setCurrentFormStep, 
    }}>   
      {getCurrentForm(currentFormStep)}
    </AddEventFormContext.Provider>
      </div>
    </Container>
  </div>
)};


export default CreateEvent;
