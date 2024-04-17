import React from 'react';
import styles from './BreadCrumb.module.css';

const BreadCrumb = ({steps, currentStep}) => (
  <div className={styles.BreadCrumb}>
      {steps.map((step, index) => (
        <div 
        key={index} 
        className={`${styles.BreadcrumbItem} 
        ${index === currentStep ? styles.active : ''}`}
        >
          {step}
        </div>
      ))}
  </div>
);


export default BreadCrumb;
