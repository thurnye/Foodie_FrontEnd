import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux'
import EventsCard from './EventsCard'
import CustomPagination from '../../../CustomPagination/CustomPagination';
import { getTomorrowDate, getWeekDates, getWeekendDates, getMonthDates } from '../../../../util/commons';
import services from '../../../../util/services';
import { eventsActions } from '../../../../store/eventSlice';

const EventListContainer = ({userId}) => {
    const user = useSelector(state => state.userLog.user);
    const dispatch = useDispatch()
    let location = useLocation();
    const [data, setData] = useState(null);
    const [events, setEvents] = useState([]);
    const [currentPage, setCurrentPage] = useState(1)
    const [counts, setCounts] = useState(0);
    const [loading, setLoading] = useState(true);
    const [eventId, setEventId] = useState(null);
    const [userEvent, setUserEvent] = useState(false);
    const type = location.state?.type
    const calendarValue = location.state?.calendarValue;
    

    const fetchEvents = async (query, userId) => {
        try{
            setLoading(true)
            let allEvents = null;

            //fetch events created by the user only
            if(type === 'myEvent' && userId){
                setEvents([]);
                allEvents = await services.getUserEvents(userId, query);
            }
            if(type !== 'myEvent'){
                setEvents([]);
                allEvents = await services.getEvents(query);
            }

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
        timeFrame = {starts: new Date(), ends: new Date()};
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
    setEvents([]);
    const filter = {
        keywordSearch : '',
        activeComp: type,
        timeFrame: getTimeFrame(type),
        currentPage,
    }
    fetchEvents(filter, user?.user._id);

  },[calendarValue, currentPage, type, user]);




    useEffect(() => {
    if(data){
        setLoading(true)
        const eventData = data.data.events;
        setCounts(data.data.count);
        // store the event in redux state
        if(type === 'myEvent'){
            dispatch(eventsActions.getAllUsersEvents({
                data: eventData
            }));
            setUserEvent(true)
        }
        if(type !== 'myEvent'){
            dispatch(eventsActions.getEvents({
                data: eventData
            }));
            setUserEvent(false)
        }
        setEvents(eventData)
        setLoading(false);
    }
    },[type, data, dispatch]);



    return (<>
        {loading ? 
            <div className="text-center resultSpinnerContainer">
                <div className="spinner-border text-secondary" role="status">
                </div>
            </div> 
        :
            events.length > 0 && <>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
                {
                    events.map((event) => <div className="col" key={event?._id}>
                    <EventsCard
                        event={event}
                        type={type} 
                        setEventId={setEventId}
                        showAction={userEvent}
                        userId={user?.user._id}
                    />
                </div>)    
                }
            </div>
            {counts > 1 && <CustomPagination totalPages={counts} currentPage={currentPage} onPageChange={setCurrentPage}/>}
            </> 
        }
    </>

    );
}

export default EventListContainer;
