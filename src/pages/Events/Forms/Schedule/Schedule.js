import React, {useEffect, useState} from 'react';
import styles from './Schedule.module.css';
import Selectable from './Selectable'
import { useAddEventFormContext } from '../../../../store/formStateContext';

const Schedule = () => {
  const { eventBritForm, setEventBritForm } = useAddEventFormContext();
  const [data, setData] = useState();

  useEffect(() => {
    if(data){
      console.log({data})
      setEventBritForm((eventBritForm) => ({ 
        ...eventBritForm, 
        schedule: data 
      }
      ));
    }
  }, [data])


  
  return(
  <div className={styles.Schedule}>
    <Selectable setData={setData} title={eventBritForm?.basicInfo?.eventTitle}/>
  </div>
)};



export default Schedule;
