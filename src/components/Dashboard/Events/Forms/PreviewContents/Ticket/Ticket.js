import React from 'react';
import styles from './Ticket.module.css';
import qrCode from '../../../../../../public/images/adverts/QRCode.png'

const Ticket = () => {
  const ticketType = ['Early Bird', 'General Admission', 'VIP']

  return(
  <div className={styles.Ticket}>
    <div className="card-group">
    {Array.from(Array(3)).map((_, index) => (
      <div className={`card ${styles.TicketCardContainer}`}>
        <img src={qrCode} className="card-img-top" alt="..."/>
        <div className={styles.qrBottom}>
          <div className={`${styles.circle} ${styles.circle1}`}></div>
          <div className={styles.TicketNumber}>
            <span>Ticket 1 of 1</span>
          </div>
          <div className={`${styles.circle} ${styles.circle2}`}></div>
        </div>
        <div className="card-body">
          <div className={`pb-3`}>
            <label>Name</label>
            <p className="card-title h4">John Doe</p>
          </div>
          <div className={`pb-3`}>
            <label>Event</label>
            <p className={`card-title ${styles.labelDesc}`}>Event Location</p>
          </div>
          <div className={`pb-3`}>
            <label>Ticket/Seat</label>
            <p className={`card-title ${styles.labelDesc}`}>{ticketType[index]}</p>
          </div>
          <div>
            <div className="row">
              <div className={`col ${styles.Date_Location}`}>
                <label>Date</label>
                <p className={`card-title ${styles.labelDesc}`}>Fri, Feb 21, 2024</p>
                <p className={`card-title ${styles.labelDescTime}`}>7:00 AM EST</p>
                <div className={`pt-2 ${styles.AddToCalendar}`}>
                  Add to Calendar
                </div>
              </div>
              <div className={`col ${styles.Date_Location}`}>
                <label>Location</label>
                <p className={`card-title ${styles.labelDesc}`}>
                Yonge-Dundas Square, Toronto, ON 
                </p>
                <div className={`pt-2 ${styles.AddToCalendar}`}>
                  View Map
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    ))}
    </div>
  </div>
)};


export default Ticket;
