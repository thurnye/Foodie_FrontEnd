import React,{useState} from 'react'
import FullCalendar  from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import { formatDate } from '@fullcalendar/core'
// import { addReservation } from '../../redux/reservationSlice';
// import {deleteReservation} from '../../redux/reservationSlice'
import { Box,Button, Grid,TextField } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import ModeIcon from '@mui/icons-material/Mode';
import DialogTitle from '@mui/material/DialogTitle';
import Typography from '@mui/material/Typography';
import { INITIAL_EVENTS, createEventId } from './event-utils'
import './eventCal.css'
import InputAdornment from '@mui/material/InputAdornment';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { renderTimeViewClock } from '@mui/x-date-pickers/timeViewRenderers';
import FormDirection from '../../../../../TestingDashboard/Events/Forms/FormDirection/FormDirection';



const intitalEvt = {
  id: '',
  title: '',
  start: '',
  end: '',
}

  export default function EventCalendar({setData, defaultDates}) {
    const [weekendsVisible, setWeekendsVisible] = useState(true)
    const [currentEvents, setCurrentEvents] = useState([])
    const [openDrawer, setOpenDrawer] = useState(false)
    const [activeEvent, setActiveEvent] = useState()
    const [proceed, setProceed] = useState(false);
   
    const [event, setEvent] = useState(intitalEvt)
  
    function handleWeekendsToggle() {
      setWeekendsVisible(!weekendsVisible)
    }
  
    function handleDateSelect(selectInfo) {
      setOpenDrawer(true);
      setEvent({ id: createEventId(), ...selectInfo})
    }


    const createEvent = (id) => {
      const {title, start, end} = event;
      if(new Date(start) < new Date()){
        window.alert('Error, min date should be greater than present date/time')
        return;
      }
      if(new Date(start) >= new Date(end)){
        window.alert('End Date and time must be greater than start date and time!')
        return;
      }
      
        let calendarApi = event.view.calendar
        calendarApi.unselect()
        if(title && start && end){
          calendarApi.addEvent({...event, durationEditable: true});
          setOpenDrawer(false)
        }
    }
  
    function handleEventClick(clickInfo) {
      setEvent(clickInfo.event);
      setActiveEvent(clickInfo)
      setOpenDrawer(true)
    }

    const handleDelete = () => {
      const updatedEvents = currentEvents.filter(el => el.id !== event.id);
      activeEvent.event.remove()
      setCurrentEvents(updatedEvents);
      setOpenDrawer(!openDrawer);
      setEvent(intitalEvt)
      setActiveEvent()
    }


    // console.log({currentEvents})
    // console.log({event})
  
    function handleEvents(events) {
      setCurrentEvents(events)
    }



    const onSubmit = () => {
      if(currentEvents.length){
        const myEvents = currentEvents.map((el) => ({
          id: el.id,
          title: el.title,
          start: el.start,
          end: el.end
        }))
        console.log(myEvents)
        setData(myEvents)
        setProceed(true);
      }
    };

  
    return (<Box>
          <Sidebar
            weekendsVisible={weekendsVisible}
            handleWeekendsToggle={handleWeekendsToggle}
            currentEvents={currentEvents}
          />
        <div className='demo-app'>
          <div className='demo-app-main'>
            <FullCalendar
              plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
              headerToolbar={{
                left: 'prev,next today',
                center: 'title',
                right: 'dayGridMonth,timeGridWeek,timeGridDay'
              }}
              validRange={{
                start: new Date()
              }}
              initialView='dayGridMonth'
              editable={true}
              selectable={true}
              selectMirror={true}
              dayMaxEvents={true}
              weekends={weekendsVisible}
              initialEvents={defaultDates} // alternatively, use the `events` setting to fetch from a feed
              select={handleDateSelect}
              eventContent={renderEventContent} // custom render function
              eventClick={handleEventClick}
              eventsSet={handleEvents} // called after events are initialized/added/changed/removed
              /* you can update a remote database when these fire:
              eventAdd={function(){}}
              eventChange={function(){}}
              eventRemove={function(){}}
              */
            />
          </div>
        </div>
        <Dialog
        maxWidth={'md'}
        open={openDrawer}
        onClose={() => setOpenDrawer(!openDrawer)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" sx={{mt: 3}}>
          <TextField
            autoFocus
            variant="standard" 
            fullWidth
            label="Title"
            error={!event.title ? true : false}
            id="outlined-error-helper-text"
            defaultValue={event.title}
            helperText={!event.title && 'Title is required!'}
            onChange={(e) => {
              setEvent(prevState => ({
                ...prevState,
                title: e.target.value
              }));}}
            InputProps={{
              endAdornment: <InputAdornment position="end"><ModeIcon/></InputAdornment>,
            }}
          />
        </DialogTitle>
        <DialogContent>
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            
            <Grid item xs={12} md={6} sx={{mb: {xs: 3}}}>
            <label htmlFor="inputEmail_6754" className="form-label"
                >Starts</label>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DemoContainer components={['DateTimePicker', 'DateTimePicker']}>
                      <DateTimePicker
                        fullWidth
                        margin="small"
                        id="date-picker"
                        minDate={new Date()}
                        defaultValue={new Date(event.start)}
                        value={new Date(event.start)}
                        onChange={(date) => setEvent(prevState => ({
                          ...prevState,
                          start: date // Update start date only
                        }))}
                        viewRenderers={{
                          hours: renderTimeViewClock,
                          minutes: renderTimeViewClock,
                        }}
                      />
                </DemoContainer>
              </LocalizationProvider>
            </Grid>
            <Grid item xs={12} md={6} sx={{mb: {xs: 3}}}>
            <label htmlFor="inputEmail_6754" className="form-label"
                >Ends</label>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DemoContainer components={['DateTimePicker', 'DateTimePicker']}>
                      <DateTimePicker
                        fullWidth
                        minDate={new Date(event.start)}
                        margin="small"
                        id="date-picker"
                        defaultValue={new Date(event.end)}
                        value={new Date(event.end)}
                        onChange={(date) => setEvent(prevState => ({
                          ...prevState,
                          end: date // Update end date only
                        }))}
                        viewRenderers={{
                          hours: renderTimeViewClock,
                          minutes: renderTimeViewClock,
                        }}
                      />
                </DemoContainer>
              </LocalizationProvider>
            </Grid>
          
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleDelete()} color="error">Delete</Button>
          <Button onClick={() => setOpenDrawer(!openDrawer)}>Cancel</Button>
          <Button onClick={() => createEvent(event.id)} autoFocus> Save </Button>
        </DialogActions>
      </Dialog>

      <FormDirection onSubmit={onSubmit} proceed={proceed}/>
    
    </Box>
    )
  }
  
  function renderEventContent(eventInfo) {
    return (
      <>
        <b>{eventInfo.timeText}</b>
        <i>{eventInfo.event.title}</i>
      </>
    )
  }
  
  function Sidebar({ weekendsVisible, handleWeekendsToggle, currentEvents }) {
    return (
      <div className='demo-app-sidebar'>
        <div className='demo-app-sidebar-section'>
          <h2>Instructions</h2>
          <ul>
            <li>Select dates and you will be prompted to create a new event</li>
            <li>Drag, drop, and resize events</li>
            <li>Click an event to delete it</li>
          </ul>
        </div>
        <div className='demo-app-sidebar-section'>
          <label>
            <input
              type='checkbox'
              checked={weekendsVisible}
              onChange={handleWeekendsToggle}
            ></input>
            toggle weekends
          </label>
        </div>
        <div className='demo-app-sidebar-section'>
          <h2>All Events ({currentEvents.length})</h2>
          <ul>
            {currentEvents.map((event) => (
              <SidebarEvent key={event.id} event={event} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
  
  function SidebarEvent({ event }) {
    return (
      <li key={event.id}>
        <b>{formatDate(event.start, {year: 'numeric', month: 'short', day: 'numeric'})}</b>
        <i>{event.title}</i>
      </li>
    )
  }