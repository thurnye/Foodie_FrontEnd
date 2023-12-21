import React, {useEffect, useState} from 'react';
import { useNavigate  } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styles from './EventsCard.module.css';
import { formatNumber, formatDateWithTimeZoneRegion} from '../../../../util/commons';
import { HiMiniEllipsisVertical } from "react-icons/hi2";
import { MdLocationPin } from "react-icons/md";
import { FaUserFriends} from "react-icons/fa";
import ModalFeedBack from '../../../ModalFeedBack/ModalFeedBack';

const EventsCard = ({event, showAction, userId}) => {
  const navigate = useNavigate();
  const events = useSelector(state => state.eventData.userEvents);
  const [eventId, setEventId] = useState(null);
  const [show, setShow] = useState(false)
  const [showMessage, setShowMessage] = useState('')
  

  
//if the redirect to edit page to edit event
  useEffect(() => {
    if(eventId && !show){
      const event = events?.find(el => String(el._id) === String(eventId));
      if(!event){
        setShowMessage('Event Not Found');
        setShow(true);
        return;
      }
      setShow(false);
      navigate("edit-event", { state: { edit: true, type: "myEvent", eventId: event._id, event, userId } });
    }
  },[eventId, events])

  return(
  <div className={styles.Events}>
    <div className="card border" >
      <div className="card-body">
        { showAction && <div className={`dropdown d-flex justify-content-end mb-2 ${styles.EventsListActionsContainer}`} >
          <button className="btn nav-link" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          <HiMiniEllipsisVertical />
          </button>
          <ul className="dropdown-menu">
            <li>
              <button className='dropdown-item' onClick={() => setEventId(event._id)}>Modify Item</button>
            </li>
            <li>
              <button className="dropdown-item" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Delete Event</button>
            </li>
          </ul>
        </div>}
      <img src={event?.eventDetails.thumbnail} className={`card-img ${styles.Banner}`} alt="eventBanner"/>
        <h4 className={` ${styles.Title}`}>{event?.eventDetails.eventTitle}</h4>
        <h6 className={`${styles.Time}`}>{formatDateWithTimeZoneRegion(new Date(event?.eventDetails.starts))}</h6>
        <h6 className={`${styles.Venue}`}>
          <span>
            <MdLocationPin size={'20px'}/>
          </span>
          <span>{event?.eventDetails.location}</span>
          
        </h6>
        {event?.isFree && 
          <h6 className={`${styles.Entry}`}>Free</h6>
        }
        <h6 className={`${styles.Organiser}`}>
          {event?.createdBy.firstName} {event?.createdBy.lastName}
        </h6>
        <h6 className={`${styles.Followers}`}>
          <span>
            <FaUserFriends size={'20px'}/>
          </span>
          <span> {formatNumber(event?.createdBy.followers)} Followers</span>
        </h6>
      </div>
    </div> 
    
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

      <ModalFeedBack
        show={show}
        setShow={setShow}
        content={showMessage}
        isClose={true}
        closeLabel={'Close'}
      />
  </div>
)};


export default EventsCard;
