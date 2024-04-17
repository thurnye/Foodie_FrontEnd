import React from 'react';
import styles from './EventInfo.module.css';
import img from '../../../../public/images/adverts/Kitchen-Banner-2023_6.jpg'

const EventInfo = () => (
  <div className={styles.EventInfo}>
    <div>
      <div class="card text-bg-dark mb-3">
        <img src={img} class="card-img" alt="..."/>
      </div>
    </div>
    <div class="card mb-3">
    <div class="row g-0">
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
        </div>
      </div>
      <div class="col-md-4">
        price section
      </div>
      </div>
    </div>
  </div>
);


export default EventInfo;
