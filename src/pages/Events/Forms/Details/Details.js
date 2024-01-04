import React, {useEffect, useState}from 'react';
import styles from './Details.module.css';
import DetailsForm from './DetailsForm'
import { useAddEventFormContext } from '../../../../store/formStateContext';



const Details = () => {
  const { eventBritForm, setEventBritForm } = useAddEventFormContext();
  const [data, setData] = useState();


  useEffect(() => {
    if(data){
      console.log({data})
      setEventBritForm((eventBritForm) => ({ 
        ...eventBritForm, 
        details: data 
      }
      ));
    }
  }, [data]);


  return(
  <div className={styles.BasicInfos}>
    <DetailsForm setData={setData}/>
  </div>
)};

export default Details;
