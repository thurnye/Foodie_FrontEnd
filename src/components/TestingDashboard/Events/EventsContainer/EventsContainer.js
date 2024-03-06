import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import styles from './EventsContainer.module.css';
import { getRandomInt, getDateShort,} from '../../../../util/commons';
import {componentsNavs, dropDownItems, manageEventsNavs} from '../../../../util/globalVars';


const EventsContainer = () => {
  const [activeComponent, setActiveComponent] = useState('all'); 
  const [calendarValue, setCalendarValue] = useState([]);

  return (
    <div className={styles.EventsContainer}>
      <div>
        <ul className={`nav ${styles.EventNav}`}>
          {componentsNavs.slice(0, 6).map((el) => (
            <li className="nav-item p-2" key={`${el.name}_${getRandomInt()}`}>
              <Link to={el.type} state={{ type: el.type, calendarValue }}>{el.name}</Link>
            </li>
          ))}

        
          <li className="nav-item" role="presentation">
            <div className={`dropdown ${styles.EventNav}`} >
              <button className="btn nav-link dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Manage Events
              </button>
              <ul className="dropdown-menu">
                {manageEventsNavs.map((el) => 
                <li key={`manageEventsNavs_${el.name}`} className="dropdown-item">
                  <Link to={el.path} state={{ type: el.type, edit: false}}>{el.name}</Link>
                </li>
                )}
              </ul>
            </div>
          </li>
        </ul>
      </div>
    
    { activeComponent !== 'newEvent' && 
      <div className={`dropdown ${styles.EventNav}`} >
        <button className="btn nav-link dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          Filter Date
        </button>
        <ul className="dropdown-menu">
          {activeComponent === 'all' && <li>
            <button className="dropdown-item" data-bs-toggle="modal" data-bs-target="#staticBackdropCalendar">Calendar</button>
          </li>}
          
          {dropDownItems.map((el) =>
            <li key={`${el.name}_${getRandomInt()}`}>
              <button 
              className="dropdown-item" 
              onClick={() => setActiveComponent(el.type)}
              >
                {el.name}
              </button>
            </li>
          )}
        </ul>
      </div>
    }      
    <div className={styles.panelContainer}>
        <div>
          <Outlet/>
        </div>
    </div>

      {/* <!-- Modal --> */}
      <div className="modal fade" id="staticBackdropCalendar" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-dialog-sm">
          <div className="modal-content">
            <div className={`modal-header ${styles.ModalHeader}`}>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className={`modal-body ${styles.calendarContent}`}>
            <Calendar 
              onChange={(value) => setCalendarValue(value)} 
              value={calendarValue} 
              defaultValue={new Date()}            
              minDate={new Date()}
              selectRange={true}
            />
            </div>
            <div className={`modal-footer ${styles.ModalFooter}`}>
              <p className='d-flex flex-column'>
                {calendarValue.length > 0 && 
                  <>
                    <span><em>Start: {getDateShort(calendarValue[0])}</em> </span>
                    <span><em>End: {getDateShort(calendarValue[1])}</em> </span>
                  </>  
                }
              </p>
              <button type="button" className="btn" data-bs-dismiss="modal">Apply</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsContainer;
