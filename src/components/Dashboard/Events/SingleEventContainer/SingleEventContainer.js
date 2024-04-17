import React from 'react';
import styles from './SingleEventContainer.module.css';
import SingleEvent from '../SingleEvent/SingleEvent';


const SingleEventContainer = () => (
  <div className={styles.SingleEventContainer}>
    <SingleEvent isPreview={false} />
  </div>
);


export default SingleEventContainer;
