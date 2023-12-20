import React, { useEffect, useState } from 'react';
import styles from './EventsList.module.css';
import { getRandomInt, formatNumber, formatDateWithTimeZoneRegion} from '../../../../util/commons';
import { HiMiniEllipsisVertical } from "react-icons/hi2";
import { MdLocationPin } from "react-icons/md";
import { FaUserFriends} from "react-icons/fa";
import CustomPagination from '../../../CustomPagination/CustomPagination';
import {useSelector} from 'react-redux';



const EventsList = ({filter, setEventId, counts, currentPage, setCurrentPage}) => {
  const allEvents = useSelector(state => state.eventData?.events?.events)
  const [events, setEvents] = useState([]);






  // const [period, setPeriod] = useState('');
  // const [timeFrame, setTimeFrame] = useState();




  
  
  return(
  <div className={styles.Events}>
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
      {allEvents?.map((event, index) => (
        <div className="col" key={`event_${getRandomInt()}`}>
          <div className="card border" >
            <div className="card-body">
             {filter.period === 'myEvent' && <div className={`dropdown d-flex justify-content-end mb-2 ${styles.EventsListActionsContainer}`} >
                <button className="btn nav-link" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                <HiMiniEllipsisVertical />
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <button className="dropdown-item" onClick={() => setEventId(event._id)}>Modify Event</button>
                    <button className="dropdown-item" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Delete Event</button>
                  </li>
                </ul>
              </div>}
            <img src={event.eventDetails.thumbnail} className={`card-img ${styles.Banner}`} alt="eventBanner"/>
              <h4 className={` ${styles.Title}`}>{event.eventDetails.eventTitle}</h4>
              <h6 className={`${styles.Time}`}>{formatDateWithTimeZoneRegion(new Date(event.eventDetails.starts))}</h6>
              <h6 className={`${styles.Venue}`}>
                <span>
                  <MdLocationPin size={'20px'}/>
                </span>
                <span>{event.eventDetails.location}</span>
                
              </h6>
              {event?.isFree && 
                <h6 className={`${styles.Entry}`}>Free</h6>
              }
              <h6 className={`${styles.Organiser}`}>
                {event.createdBy.firstName} {event.createdBy.lastName}
              </h6>
              <h6 className={`${styles.Followers}`}>
                <span>
                  <FaUserFriends size={'20px'}/>
                </span>
                <span> {formatNumber(event.createdBy.followers)} Followers</span>
              </h6>
            </div>
          </div>        
        </div>
      ))}
      <div className="col" key={`event_${getRandomInt()}`}></div>
    </div>

    {counts > 1 && <CustomPagination totalPages={counts} currentPage={currentPage} onPageChange={setCurrentPage}/>}

    {/* <!-- Modal --> */}
    <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-dialog-sm">
          <div className="modal-content">
            <div className={`modal-header ${styles.ModalHeader}`}>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className={`modal-body ${styles.calendarContent}`}>
              You are about to delete this event
            </div>
            <div className={`modal-footer ${styles.ModalFooter}`}>
            <button type="button" className="btn" data-bs-dismiss="modal" aria-label="Close">Cancel</button>
              <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Delete</button>
            </div>
          </div>
        </div>
      </div>
  </div>
)};


export default EventsList;
