import React, {useEffect, useState}  from 'react';
import styles from './AddTickets.module.css';
import FormDirection from '../../../../components/Dashboard/Events/Forms/FormDirection/FormDirection';
import { useAddEventFormContext } from '../../../../store/formStateContext';
import TicketForm from './TicketForm';
import Tickets from './Tickets';




const AddTickets = () => {
  const { eventBritForm, setEventBritForm } = useAddEventFormContext();
  const [data, setData] = useState();
  const [capacity, setCapacity] = useState({
    "type": "Up to 100 tickets",
    "value": 100
});
  const [proceed, setProceed] = useState(false);
  const [isCapacityEdit, setIsCapacityEdit] = useState(false);
  const [sections, setSections] = useState([])

  useEffect(() => {
    if(data){
      console.log({data})
      setEventBritForm((eventBritForm) => ({ 
        ...eventBritForm, 
        tickets: data 
      }
      ));
      
    }

  }, [data]);

  console.log(sections, capacity)
  





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
    sections={sections}/></>
    }
    <FormDirection onSubmit={() => setProceed(false)} proceed={proceed}/>
  </div>
)};


export default AddTickets;
