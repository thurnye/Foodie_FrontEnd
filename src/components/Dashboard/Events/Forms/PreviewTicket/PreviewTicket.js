import React, { useState, useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux'
import styles from './PreviewTicket.module.css';
import FormDirection from '../FormDirection/FormDirection';
import { useAddEventFormContext } from '../../../../../store/formStateContext';
import services from '../../../../../util/services';
import Event from '../PreviewContents/Event/Event'
import Ticket from '../PreviewContents/Ticket/Ticket'
import Media from '../PreviewContents/Media/Media'

const PreviewTicket = () => {
  const dispatch = useDispatch()
  const user = useSelector(state => state.userLog?.user?.user)
  const { eventForm, setEventForm } = useAddEventFormContext();
  const [proceed, setProceed] = useState(false);
  const tabs = [ 'Event', 'Tickets', 'Media'];
  const [currentTab, setCurrentTab] = useState(0);

  const handleSubmit = async () => {
    try {
      const data = {
        userId: user._id,
        eventForm
      }
      const result  = await services.postEvent(data);
      console.log(result);
      setProceed(true);
    } catch (error) {
      console.log(error);
    }
    //sent to the backend here
  };

  console.log(eventForm)

  const getCurrent = (step) => {
    switch (step) {
      case 0:
        return (<Event/>)
      case 1:
        return(<Ticket/>)
      case 2:
        return (<Media/>)
      default:
        return <></>
    }
  }


  return (
  <div className={styles.PreviewTicket}>
    <div className={styles.sectionHeader}>
        <p className={`h1 ${styles.sectionNumber}`}>4</p>
        <p className={`h2 ${styles.sectionName}`}>Preview</p>
        <div className={styles.PreviewTab}>
          {tabs.map((el, i) => <div 
          onClick={() => setCurrentTab(i)}
          className={currentTab === i ? styles.activePreviewTab : ''}
          >{el}</div>)}
        </div>
    </div>

    <div className={styles.sectionPreview}>
      {getCurrent(currentTab)}
    </div>

    <div className={styles.Directions}>
      <FormDirection proceed={proceed} onSubmit={handleSubmit}/>
    </div>
  </div>
)};

export default PreviewTicket;