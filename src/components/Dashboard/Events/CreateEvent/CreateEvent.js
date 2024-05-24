import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import styles from './CreateEvent.module.css';
import Container from '@mui/material/Container';
import AddTickets from '../Forms/AddTickets/AddTickets'
import BasicInfos from '../Forms/BasicInfos/BasicInfos'
import Details from '../Forms/Details/Details'
import Publish from '../Forms/Publish/Publish'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import GoLive from '../Forms/GoLive/GoLive'
import Schedule from '../Forms/Schedule/Schedule'
import { AddEventFormContext, defaultForm } from '../../../../store/formStateContext';
import services from '../../../../util/services';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';



const CreateEvent = ({isLoaded, active, edit, id}) => {
  const navigate = useNavigate();
  const user = useSelector(state => state.userLog?.user?.user)
  const formSteps = ['Basic Info', 'Schedule', 'Details', 'Add Tickets', ' Preview', 'Go Live'];
  const [currentFormStep, setCurrentFormStep] = useState(0);
  const [loading, setLoading] = useState(true);
  const [eventForm, setEventForm] = useState(defaultForm);
  const [refresh, setRefresh] = useState(false);
  const [saveResultStatus, setSaveResultStatus] = useState();


  const fetchEvent = async () => {
    try{
      const result = await services.findEventById(id);
      setEventForm(result.data)
      setLoading(false)
    }catch (err){
      console.log(err)
    }
  }

  useEffect(() => {
    id && edit && setCurrentFormStep(active);
    id && edit && fetchEvent();
    if(!edit){
      setEventForm(defaultForm);
      setLoading(false)
    }
  },[edit, id, active]);


  const handleUpdate = async (event) => {
    try {
      const data = {
        userId: user._id,
        eventForm: event,
      }
      const result  = await services.postEvent(data);
      console.log('result',result);
      setEventForm(result.data.event)
    } catch (error) {
      console.log(error);
    }
    //sent to the backend here
  };


  


  const getCurrentForm = (step) => {
    switch (step) {
      case 0:
        return(<BasicInfos isLoaded={isLoaded} edit={edit} updateEvent={handleUpdate}/>)
      case 1:
        return (<Schedule edit={edit} updateEvent={handleUpdate}/>)
      case 2:
        return (<Details edit={edit} updateEvent={handleUpdate}/>)
      case 3:
        return (<AddTickets edit={edit} updateEvent={handleUpdate}/>)
      case 4:
        return (<Publish edit={edit}/>)
      case 5:
        return (<GoLive/>)
      default:
        return <></>
    }
  }

  const handleBackClick = () => {
    setCurrentFormStep(0);
    setEventForm(defaultForm);
    navigate(`/account/events-feeds`);
  }

  return(
  <div className={styles.CreateEvent}>
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>

    <Box sx={{my: 2}}>
          <Button variant="text" startIcon={<KeyboardBackspaceIcon/>} onClick={handleBackClick}>
          Back
        </Button>
      </Box>
      <div>
      <AddEventFormContext.Provider 
      value={{
        formSteps, 
        currentFormStep, 
        setCurrentFormStep,
        eventForm, 
        setEventForm, 
        saveResultStatus, 
        setSaveResultStatus
    }}>   
      {!loading && getCurrentForm(currentFormStep)}
    </AddEventFormContext.Provider>
      </div>
    </Container>
  </div>
)};


export default CreateEvent;
