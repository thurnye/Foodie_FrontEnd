import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import styles from './EventsContainer.module.css';
import EventsList from '../EventsList/EventsList';
import AddEvent from '../AddEvent/AddEvent';
import { getRandomInt, getDateShort } from '../../../../util/commons';

const EventsContainer = () => {
  const [activeComponent, setActiveComponent] = useState('Add Event'); 
  const [calendarValue, setCalendarValue] = useState(new Date());
  const componentsNavs = [
    'All',
    'Online',
    'Today',
    'This Week',
    'This Month',
    'Free',
    'Tomorrow',
    'This Weekend'
  ];
  const dropDownItems = [
    'Today',
    'Tomorrow',
    'This Weekend',
  ];

  // Function to handle component button click
  // const handleComponentClick = (component) => {
  //   setActiveComponent(component);
  // };
  // const onCalendarChange = (value) => {
  //   setCalendarValue(value);
  // }

  return (
    <div className={styles.EventsContainer}>
      <div>
        <ul className={`nav ${styles.EventNav}`} id="myTab" role="tablist">
          {componentsNavs.slice(0, 6).map((el) => (
            <li className="nav-item" role="presentation" key={`${el}_${getRandomInt()}`}>
              <button
                className={`nav-link ${activeComponent === el ? ` active ${ styles.activeCompNav}`  : ''}`}
                id={`${el}-tab`}
                type="button"
                role="tab"
                aria-controls={el}
                aria-selected={activeComponent === el ? 'true' : 'false'}
                onClick={() => setActiveComponent(el)} // Handle click event
              >
                {el}
              </button>
            </li>
          ))}
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="addEvent-tab"
              data-bs-toggle="tab"
              data-bs-target="#addEvent"
              type="button"
              role="tab"
              aria-controls="addEvent"
              aria-selected={activeComponent === 'Add Event' ? 'true' : 'false'}
              onClick={() => setActiveComponent('Add Event')} // Handle click event
            >
              Add Event
            </button>
          </li>
        </ul>
      </div>

      <div className={`dropdown ${styles.EventNav}`} >
        <button className="btn nav-link dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          Date
        </button>
        <ul className="dropdown-menu">
          <li>
            <button className="dropdown-item" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Calendar</button>
          </li>
          {dropDownItems.map((el) =>
            <li key={`${el}_${getRandomInt()}`}>
              <button 
              className="dropdown-item" 
              onClick={() => setActiveComponent(el)}
              >
                {el}
              </button>
            </li>
          )}
        </ul>
      </div>

      <div className={styles.panelContainer}>
        {/* Render a new panel for each component */}
        {componentsNavs.map((el) => (
          <div
            key={`panel_${el}_${getRandomInt()}`}
            className={`tab-content ${activeComponent === el ? 'show active' : ''}`}
            id={el}
            role="tabpanel"
            aria-labelledby={`${el}-tab`}
          >
            {activeComponent === el && <EventsList />}
          </div>
        ))}

        {/* Panel for 'Add Event' */}
        <div
          className={`tab-pane fade h-100 ${activeComponent === 'Add Event' ? 'show active' : ''} ${styles.isActivePanel}`}
          id="addEvent"
          role="tabpanel"
          aria-labelledby="addEvent-tab"
        >
          <AddEvent />
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
            <Calendar 
            onChange={(value) => setCalendarValue(value)} 
            value={calendarValue} 
            defaultValue={new Date()}            
            minDate={new Date()}
            />
            </div>
            <div className={`modal-footer ${styles.ModalFooter}`}>
              <p><em>{getDateShort(calendarValue)}</em></p>
              <button type="button" className="btn" data-bs-dismiss="modal">Apply</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsContainer;
