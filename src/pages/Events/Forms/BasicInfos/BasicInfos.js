import React, {useEffect, useState} from 'react';
import styles from './BasicInfos.module.css';
import BasicForm from './BasicForm';
import { useAddEventFormContext } from '../../../../store/formStateContext';

const BasicInfos = ({isLoaded}) => {
  const {setEventBritForm } = useAddEventFormContext();

  const [data, setData] = useState();
  useEffect(() => {
    if(data){
      setEventBritForm((eventBritForm) => ({ 
        ...eventBritForm, 
        basicInfo: data 
      }
      ));
    }
  }, [data])
  
  return(
  <div className={` ${styles.BasicInfos}`}>
    <BasicForm  setData={setData} isLoaded={isLoaded}/>
  </div>
)};



export default BasicInfos;
