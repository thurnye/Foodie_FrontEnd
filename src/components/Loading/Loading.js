import React from 'react';
import styles from './Loading.module.css';

const Loading = () => (
  <div className={styles.Loading}>
    <div className="text-center spinnerContainer">
      <div className="spinner-border text-secondary" role="status">
      </div>
    </div> 
  </div>
);


export default Loading;
