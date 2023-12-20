import React, { useEffect, useState } from 'react';
import {useDispatch} from 'react-redux'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import styles from './EventsContainer.module.css';
import EventsList from '../EventsList/EventsList';
import AddEvent from '../AddEvent/AddEvent';
import { getRandomInt, getDateShort, getTomorrowDate, getWeekDates, getWeekendDates, getMonthDates} from '../../../../util/commons';
import { useAddEventFormContext } from '../../../../store/formStateContext';
import services from '../../../../util/services';
import {eventsActions} from '../../../../store/eventSlice'

const EventsContainer = () => {
  const dispatch = useDispatch()
  const { eventForm, setEventForm } = useAddEventFormContext();
  const [activeComponent, setActiveComponent] = useState('all'); 
  const [calendarValue, setCalendarValue] = useState([]);
  const [eventId, setEventId] = useState(null);
  const [isEditEvent, setIsEditEvent] = useState(false);
  const [currentPage, setCurrentPage] = useState(1)
  const [counts, setCounts] = useState(0);
  const [loading, setLoading] = useState(true);
  const [events, setEvents] = useState(null)

  
  
  const componentsNavs = [
    {name: 'All', type: 'all'},
    {name: 'Online', type: 'online'},
    {name: 'Today', type: 'today'},
    {name: 'This Week', type: 'thisWeekend'},
    {name: 'This Month', type: 'thisMonth'},
    {name: 'Free', type: 'free'},
    {name: 'Tomorrow', type: 'tomorrow'},
    {name: 'This Weekend', type: 'thisWeekend'}
  ];
  const dropDownItems = [
    {name: 'Tomorrow', type: 'tomorrow'},
    {name: 'This Weekend', type: 'thisWeekend'}
  ];

  const manageEventsNavs = [
    {name: 'Add Event', type: 'addEvent'},
    {name: 'My Event', type: 'myEvent'},
    {name: 'Scheduled Events', type: 'scheduledEvents'}
  ];

  const getTimeFrame = (period) => {
    let timeFrame = {starts: '', ends: ''}
    switch (period) {
      case 'all':
        timeFrame = calendarValue ? {starts: calendarValue[0], ends: calendarValue[1]} : {starts: '', ends: ''}
        break;
      case 'today':
        timeFrame = {starts: new Date(), ends: ''};
        break;
      case 'tomorrow':
        timeFrame = getTomorrowDate();
        break;
      case 'thisWeek':
        timeFrame = getWeekDates();
        break;
      case 'thisWeekend':
        timeFrame = getWeekendDates();
        break;
      case 'thisMonth':
        timeFrame = getMonthDates();
        break;
      default:
       return timeFrame;
    }

    return timeFrame;
  }

  const fetchFilteredRecipes = async (query) => {
    try{
      setLoading(true)
      const allEvents = await services.getEvents(query);
      setEvents(allEvents)
      setLoading(false);
    }catch(err){
      console.log(err)
    }
  }

  useEffect(() => {
    if(activeComponent === 'addEvent' && !isEditEvent){
      setEventId(null);
      dispatch(eventsActions.getEventEdit(null));  //change the editable event to null
    }
    const filter = {
      keywordSearch : '',
      activeComp: activeComponent,
      timeFrame: getTimeFrame(activeComponent),
      currentPage,
    }
   
    //Get Event based on nav items
    fetchFilteredRecipes(filter);


  },[activeComponent, calendarValue, currentPage, isEditEvent]);

  useEffect(() => {
    if(eventId){
      setIsEditEvent(true);
      console.log(eventId);
      const allEvents = events.data.events;
      let foundEvent = allEvents.find(el => parseInt(el._id) === parseInt(eventId));
      // if(foundEvent){
      //   //adjust the dates
        
      //   foundEvent = {
      //     ...foundEvent,
      //     eventDetails: {
      //       ...foundEvent.eventDetails,
      //       starts: new Date(foundEvent.eventDetails.starts),
      //       ends : new Date(foundEvent.eventDetails.ends)
      //     },
      //   };
        
      //   foundEvent.tickets.forEach((ticket) => {
      //     if(ticket.start){
      //       ticket.starts = new Date(ticket.starts)
      //     }
      //     if(ticket.ends){
      //       ticket.ends = new Date(ticket.ends)
      //     }
      //   })
      // }

      console.log({foundEvent});
      dispatch(eventsActions.getEventEdit(foundEvent));
      setActiveComponent('addEvent');
    }
  },[events, eventId, setEventForm])


  useEffect(() => {
    if(events){
        // setRecipes(events.data.events);
        setCounts(events.data.count);
        // store the user in redux state
        dispatch(eventsActions.getEvents({
            data: events.data
          }))
    }
},[events, dispatch]);







  //if more items are added or reduced to the componentsNav and the manageEventsNav, adjust accordingly
  const getEventPanel = (index) => {
    switch (index) {
      case 8:
        return (<AddEvent isEdit={isEditEvent}/>)
      default:
        return <EventsList 
          filter={{period:activeComponent, calendarValue}} 
          setEventId={setEventId}
          counts={counts}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
    }
  }

  return (
    <div className={styles.EventsContainer}>
      <div>
        <ul className={`nav ${styles.EventNav}`} id="myTab" role="tablist">
          {componentsNavs.slice(0, 6).map((el) => (
            <li className="nav-item" role="presentation" key={`${el.name}_${getRandomInt()}`}>
              <button
                className={`nav-link ${activeComponent === el.type ? ` active ${ styles.activeCompNav}`  : ''}`}
                id={`${el.name}-tab`}
                type="button"
                role="tab"
                aria-controls={el.name}
                aria-selected={activeComponent === el.type ? 'true' : 'false'}
                onClick={() => setActiveComponent(el.type)} // Handle click event
              >
                {el.name}
              </button>
            </li>
          ))}
          <li className="nav-item" role="presentation">
            <div className={`dropdown ${styles.EventNav}`} >
              <button className="btn nav-link dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Manage Events
              </button>
              <ul className="dropdown-menu">
                {manageEventsNavs.map((el) => 
                <li key={`manageEventsNavs_${el.name}`}>
                  <button
                    className="nav-link"
                    id="addEvent-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#addEvent"
                    type="button"
                    role="tab"
                    aria-controls="addEvent"
                    aria-selected={activeComponent === el.type ? 'true' : 'false'}
                    onClick={() => {
                      if(el.type === 'addEvent'){
                        setIsEditEvent(false);
                        // setEventId(null);
                        // dispatch(eventsActions.getEventEdit(null)); 
                      }
                      setActiveComponent(el.type)
                    }} 
                  >
                    {el.name}
                  </button>
                </li>
                )}
              </ul>
            </div>
          </li>
        </ul>
      </div>
    
    { activeComponent !== 'addEvent' && 
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
        {/* Render a new panel for each component */}
        {[...componentsNavs, ...manageEventsNavs].map((el, index) => (
          <div
            key={`panel_${el.name}_${getRandomInt()}`}
            className={`tab-content ${activeComponent === el.type ? 'show active' : ''}`}
            id={el.name}
            role="tabpanel"
            aria-labelledby={`${el.name}-tab`}
          >
            {activeComponent === el.type && getEventPanel(index)}
          </div>
        ))}
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
