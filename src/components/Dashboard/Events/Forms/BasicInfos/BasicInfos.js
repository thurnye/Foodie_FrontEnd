import React, { useEffect, useState } from 'react';
import styles from './BasicInfos.module.css';
import BasicForm from './BasicForm';
import { useAddEventFormContext } from '../../../../../store/formStateContext';

const BasicInfos = ({ isLoaded }) => {
  const { eventForm, setEventForm } = useAddEventFormContext();

  const [data, setData] = useState();

  useEffect(() => {
    if (data) {
      const updatedData = {
        ...eventForm,
        basicInfo: data,
      };
      setEventForm(updatedData);
    }
  }, [data]);

  return (
    <div className={` ${styles.BasicInfos}`}>
      <BasicForm
        setData={setData}
        isLoaded={isLoaded}
        defaultValues={eventForm.basicInfo}
      />
    </div>
  );
};

export default BasicInfos;
