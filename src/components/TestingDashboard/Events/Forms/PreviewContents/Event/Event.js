import React from 'react';
import styles from './Event.module.css';
import ad from '../../../../../../public/images/adverts/cookingClass.jpeg'
import {BiDotsVerticalRounded} from 'react-icons/bi';
import { formatNumber, formatDateWithTimeZoneRegion } from '../../../../../../util/commons';
import {FaUserFriends} from 'react-icons/fa';
import EventInfo from '../../../EventInfo/EventInfo'


const Event = () => {
  const currentDate = new Date();
  const formattedDate = formatDateWithTimeZoneRegion(currentDate);

  return(
  <div className={styles.Event}>
    <div className={`card ${styles.cardContainer}`}>
      <div data-bs-toggle="modal" data-bs-target="#exampleModal">
        <img src={ad} className="card-img-top" alt="cooking"/>
      </div>
      <div className="card-body">
        <div className={styles.bodyHeader}>
          <h5 className="card-title" data-bs-toggle="modal" data-bs-target="#exampleModal">Card title</h5>
          <span><BiDotsVerticalRounded/></span>
        </div>
        <h6 className={`${styles.Time}`}>{formattedDate}</h6>
        <h6 className={`${styles.Venue}`}>
          <span>Toronto</span>
        </h6>
        <h6 className={`${styles.Entry}`}>Starts at CA$70.00</h6>
        <h6 className={`${styles.Organiser}`}>Event Planner</h6>
        <h6 className={`${styles.Followers}`}>
          <span>
          <FaUserFriends size={'20px'}/>
          </span>
          <span> {formatNumber(307098)} Followers</span>
        </h6>
      </div>
    </div>
    {/* <EventInfo/> */}

    {/* <!-- Modal --> */}
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-body">
            <EventInfo/>
          </div>
          <div className={styles.modalFooter}>
            <div className={styles.closeModal} data-bs-dismiss="modal">Close</div>
          </div>
        </div>
      </div>
    </div>
  </div>
)};


export default Event;
