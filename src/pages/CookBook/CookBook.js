import React from 'react';
import styles from './CookBook.module.css';
import CookBookContainer from '../../components/Dashboard/Recipes/CookBookManager/CookBookContainer/CookBookContainer';

const CookBook = () => (
  <div className={styles.CookBook}>
    <CookBookContainer/>
  </div>
);


export default CookBook;
