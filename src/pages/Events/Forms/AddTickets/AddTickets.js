import React, {useEffect, useState}  from 'react';
import styles from './AddTickets.module.css';
import FormDirection from '../../../../components/Dashboard/Events/Forms/FormDirection/FormDirection';
import { useAddEventFormContext } from '../../../../store/formStateContext';
import Capacity from './Capacity'


const AddTickets = () => {
  const { eventBritForm, setEventBritForm } = useAddEventFormContext();
  const [data, setData] = useState();
  const [capacity, setCapacity] = useState(0);
  const [proceed, setProceed] = useState(false);

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

  console.log(capacity)





  return(
  <div className={styles.AddTickets}>
    <Capacity capacity={capacity} setCapacity={setCapacity}/>
    <FormDirection onSubmit={() => setProceed(true)} proceed={proceed}/>
  </div>
)};


export default AddTickets;
