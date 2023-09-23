import React from 'react';
import styles from './Ticket.module.css';
import qrCode from '../../../../../../public/images/adverts/QRCode.png'

const Ticket = () => {
  return(
  <div className={styles.Ticket}>
    <div class="card-group">
    {Array.from(Array(3)).map((_, index) => (
      <div class={`card ${styles.TicketCardContainer}`}>
        <img src={qrCode} class="card-img-top" alt="..."/>
        <div className={styles.qrBottom}>
          <div className={`${styles.circle} ${styles.circle1}`}></div>
          <div className={styles.TicketNumber}>
            <span>Ticket 1 of 1</span>
          </div>
          <div className={`${styles.circle} ${styles.circle2}`}></div>
        </div>
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
        </div>
      </div>
    ))}
    </div>
  </div>
)};


export default Ticket;
