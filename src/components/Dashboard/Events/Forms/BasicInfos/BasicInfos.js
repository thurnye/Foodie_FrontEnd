import React, {useEffect, useState} from 'react';
import styles from './BasicInfos.module.css';
import BasicForm from './BasicForm';
import { useAddEventFormContext } from '../../../../../store/formStateContext';

const BasicInfos = ({isLoaded, edit, updateEvent}) => {
  const {eventForm, setEventForm  } = useAddEventFormContext();
  
  const [data, setData] = useState();

  useEffect(() => {
    if(data){
      const updatedData = { 
        ...eventForm, 
        basicInfo: data 
      }
      setEventForm(updatedData);
      edit && updateEvent(updatedData);
    }
  }, [data]);
  
  return(
  <div className={` ${styles.BasicInfos}`}>
    <BasicForm  
      setData={setData}
      isLoaded={isLoaded} 
      defaultValues={eventForm.basicInfo} 
      edit={edit}
     />
  </div>
)};



export default BasicInfos;
