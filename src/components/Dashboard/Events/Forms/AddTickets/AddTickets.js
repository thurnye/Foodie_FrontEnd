import React, {useEffect, useState}  from 'react';
import styles from './AddTickets.module.css';
import FormDirection from '../FormDirection/FormDirection';
import { useAddEventFormContext } from '../../../../../store/formStateContext';
import TicketForm from './TicketForm';
import Tickets from './Tickets';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const AddTickets = ({edit, updateEvent}) => {
  const { eventForm, setEventForm  } = useAddEventFormContext();
  const [data, setData] = useState();
  const [capacity, setCapacity] = useState(eventForm.tickets.capacity);
  const [proceed, setProceed] = useState(false);
  const [isCapacityEdit, setIsCapacityEdit] = useState(false);
  const [sections, setSections] = useState(eventForm.tickets.sections)

  console.log(eventForm)

  // useEffect(() => {
  //   if(data){
  //     setEventForm((eventForm) => ({ 
  //       ...eventForm, 
  //       tickets: data 
  //     }
  //     ));
  //   }

  // }, [data]);


  
const onSubmit = () => {
  if(sections.length > 0){
    const data = { 
      ...eventForm, 
      tickets: {
        capacity,
        sections
      } 
    }
    setEventForm(data);
    edit && updateEvent(data);
    setProceed(true)
  }
}

console.log(sections)




  return(
  <div className={styles.AddTickets}>
    {sections.length === 0 ? <>
      <TicketForm 
        data={data} 
        setData={setData} 
        capacity={capacity} 
        setCapacity={setCapacity}
        isCapacityEdit={isCapacityEdit} 
        setIsCapacityEdit={setIsCapacityEdit}
        setSections={setSections}
        sections={sections}
      />
    </> : 
    <><Tickets setSections={setSections}
    sections={sections} capacity={capacity} setCapacity={setCapacity}/></>
    }
    {edit ? <Box sx={{textAlign: 'end', mt: 3}}>
        <Button 
        variant="contained" 
        type="submit"
        onClick={onSubmit}
        >Save Section</Button>
      </Box> 
      : 
      <FormDirection onSubmit={onSubmit} proceed={proceed}/>
    }  
  </div>
)};


export default AddTickets;
