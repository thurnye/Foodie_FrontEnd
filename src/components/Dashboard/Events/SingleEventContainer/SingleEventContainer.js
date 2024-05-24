import React, { useState } from 'react';
import styles from './SingleEventContainer.module.css';
import SingleEvent from '../SingleEvent/SingleEvent';
import services from '../../../../util/services';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const SingleEventContainer = () => {
  const location = useLocation();
  const eventId = location.state?.eventId;
  const [loading, setLoading] = useState(true);
  const [event, setEvent] = useState();

  const fetchEvent = async (id) => {
    try {
      setLoading(true);
      const response = await services.findEventById(id);
      console.log('allEvents::', response.data);
      setEvent(response.data);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchEvent(eventId);
  }, [eventId]);

  return (
    <div className={styles.SingleEventContainer}>
      {loading ? 'Loading' : <SingleEvent isPreview={false} event={event} />}
    </div>
  );
};

export default SingleEventContainer;
