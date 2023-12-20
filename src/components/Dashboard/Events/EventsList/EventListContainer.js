import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import {useDispatch} from 'react-redux'
import EventsCard from './EventsCard'
import CustomPagination from '../../../CustomPagination/CustomPagination';
import { getTomorrowDate, getWeekDates, getWeekendDates, getMonthDates } from '../../../../util/commons';
import services from '../../../../util/services';
import { eventsActions } from '../../../../store/eventSlice';

const EventListContainer = () => {
    const dispatch = useDispatch()
    let location = useLocation();
    const [data, setData] = useState(null);
    const [events, setEvents] = useState([]);
    const [currentPage, setCurrentPage] = useState(1)
    const [counts, setCounts] = useState(0);
    const [loading, setLoading] = useState(true);
    const [eventId, setEventId] = useState(null);
    const type = location.state?.type
    const calendarValue = location.state?.calendarValue;
    
    console.log(type);

    const fetchFilteredRecipes = async (query) => {
    try{
      setLoading(true)
      const allEvents = await services.getEvents(query);
      setData(allEvents)
      setLoading(false);
    }catch(err){
      console.log(err)
    }
  }

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

  useEffect(() => {
    const filter = {
        userId : type === 'my-event' ? '' : null,
        keywordSearch : '',
        activeComp: type,
        timeFrame: getTimeFrame(type),
        currentPage,
    }
    
    fetchFilteredRecipes(filter);
    
  },[calendarValue, currentPage, type]);


    useEffect(() => {
    if(data){
        console.log(data)
        setCounts(data.data.count);
        // store the event in redux state
        dispatch(eventsActions.getEvents({
            data: data.data.events
        }));
        setEvents(data.data.events)
    }
},[data, dispatch]);



    return (<>
        {events.length > 0 && <>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
            {
                events.map((event) => <div className="col" key={event?._id}>
                <EventsCard
                    event={event}
                    type={type} 
                    setEventId={setEventId}
                />
            </div>)    
            }
        </div>
        {counts > 1 && <CustomPagination totalPages={counts} currentPage={currentPage} onPageChange={setCurrentPage}/>}
        </>} 

    </>

    );
}

export default EventListContainer;
