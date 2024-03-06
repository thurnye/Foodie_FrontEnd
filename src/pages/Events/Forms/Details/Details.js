import React, {useEffect, useState}from 'react';
import styles from './Details.module.css';
import DetailsForm from './DetailsForm'
import { useAddEventFormContext } from '../../../../store/formStateContext';



const Details = () => {
  const { eventForm, setEventForm } = useAddEventFormContext();
  const [data, setData] = useState();
  

  console.log(eventForm)

  useEffect(() => {
    if(data){
      console.log({data})
      setEventForm((eventForm) => ({ 
        ...eventForm, 
        details: data 
      }
      ));
      console.log('Details:', data)
    }

  }, [data]);



  return(
  <div className={styles.BasicInfos}>
    <DetailsForm setData={setData} defaultValues={eventForm.details} defaultTitle={eventForm.basicInfo.eventTitle}/>
  </div>
)};

export default Details;
