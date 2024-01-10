import React from 'react';
import styles from './ToastNotification.module.css';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const ToastNotification = ({ message, type }) => {
  const showToast = () => {
    toast[type](message, {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  return (
    <div>
      <button onClick={showToast}>Show Toastr</button>
    </div>
  );
};


export default ToastNotification;
