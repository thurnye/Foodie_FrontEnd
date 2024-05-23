import React from 'react';
import styles from './AccountDashboard.module.css';
import Dashboard from '../Dashboard';


const AccountDashboard = () => (
  <div className={` ${styles.AccountDashboard}`}>
    <Dashboard/>
  </div>
);


export default AccountDashboard;
