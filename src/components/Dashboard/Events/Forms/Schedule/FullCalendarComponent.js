import React, { useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react'; // corrected import
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { Box, Dialog, Grid, DialogTitle, DialogContent, DialogActions, TextField, Button, Typography } from '@mui/material';
import FormDirection from '../../../../Forms/FormDirection/FormDirection';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { renderTimeViewClock } from '@mui/x-date-pickers/timeViewRenderers';

const FullCalendarComponent = ({setData, defaultDates, edit}) => {
  const [events, setEvents] = useState([]);
  const [open, setOpen] = useState(false);
  const [openTitle, setOpenTitle] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [title, setTitle] = useState('')
  const [selectInfo, setSelectInfo] = useState();
  const [proceed, setProceed] = useState(false);
  const [validRange, setValidRange] = useState({ start: new Date() });
  const [error, setError] = useState(false)

  useEffect(() => {
    // Fetch events from server or local storage
    // For demo purposes, I'll initialize some sample events
    const initialEvents = defaultDates;
    setEvents(initialEvents);
  }, []);

  const handleDateSelect = () => {
    setOpenTitle(true);
  };

  const handleSaveTitle = () => {
    if (title) {
      const newEvent = {
        id: String(events.length + 1),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr
      };
      setEvents([...events, newEvent]);
      setOpenTitle(!openTitle);
      setTitle('')
    }
  }

  const handleEventClick = (clickInfo) => {
    // Extract event data
    const { id, title, start, end } = clickInfo.event;
  
    // Set selected event state
    setSelectedEvent({
      id,
      title,
      startStr: start.toISOString(),
      endStr: end.toISOString()
    });
  
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleEventUpdate = () => {
    // Find the index of the selected event in the events array
    
    
    const eventIndex = events.findIndex(event => event.id === selectedEvent.id);
    if (eventIndex !== -1 && !checkError(selectedEvent)) {
      // Create a copy of the events array and update the selected event
      const updatedEvents = [...events];
      updatedEvents[eventIndex] = {
        ...updatedEvents[eventIndex],
        title: selectedEvent.title,
        start: selectedEvent.startStr,
        end: selectedEvent.endStr
      };
      setEvents(updatedEvents);
      setOpen(false);
      setError('')
    }
  };

  const handleDeleteEvent = () => {
    // Filter out the selected event from the events array
    const updatedEvents = events.filter(event => event.id !== selectedEvent.id);
    setEvents(updatedEvents);
    setOpen(false);
  };
  

  const checkError = (evt) => {
    const { id, title, startStr, endStr } = evt;
    if(new Date(startStr) < new Date()){
      setError('Error, min date should be greater than present date/time')
      return true
    }
    if(new Date(startStr) >= new Date(endStr)){
      setError('End Date and time must be greater than start date and time!')
      return true
    }
    setError('')
   return false
  }

  const onSubmit = () => {
    if(events.length){
      setData(events)
      setProceed(true);
    }
  };

  return (
    <div>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        {/* <DemoContainer> */}
          <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            headerToolbar={{
              left: 'prev,next today',
              center: 'title',
              right: 'dayGridMonth,timeGridWeek,timeGridDay'
            }}
            initialView="timeGridWeek"
            weekends={true}
            events={events}
            selectable={true}
            select={(info) => {
              handleDateSelect();
              setSelectInfo(info)
            }}
            eventClick={handleEventClick}
            validRange={validRange}
          />


          <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Edit Event</DialogTitle>
            <DialogContent>
              {error && <Typography variant="caption" display="block" gutterBottom color="error">
                {error}
              </Typography>}
              <TextField
                label="Title"
                defaultValue={selectedEvent ? selectedEvent.title : ''}
                onChange={e => setSelectedEvent({ ...selectedEvent, title: e.target.value })}
                fullWidth
                sx={{my: 4}}
              />

              <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={12} md={6} sx={{mb: {xs: 3}}}>
                  <label htmlFor="inputStart_6754" className="form-label">Starts</label>
                  <DateTimePicker
                    fullWidth
                    value={selectedEvent ? new Date(selectedEvent.startStr) : null}
                    onChange={date => setSelectedEvent({ ...selectedEvent, startStr: date.toISOString() })}
                    renderInput={(params) => <TextField {...params} fullWidth />}
                    minDateTime={selectedEvent ? new Date(selectedEvent.startStr) : new Date()}
                    viewRenderers={{
                      hours: renderTimeViewClock,
                      minutes: renderTimeViewClock,
                    }}
                  />
                </Grid>

                <Grid item xs={12} md={6} sx={{mb: {xs: 3}}}>
                  <label htmlFor="inputEnd_6754" className="form-label">Ends</label>
                  <DateTimePicker
                    fullWidth
                    value={selectedEvent ? new Date(selectedEvent.endStr) : null}
                    onChange={date => setSelectedEvent({ ...selectedEvent, endStr: date.toISOString() })}
                    renderInput={(params) => <TextField {...params} fullWidth />}
                    minDateTime={new Date()}
                    viewRenderers={{
                      hours: renderTimeViewClock,
                      minutes: renderTimeViewClock,
                    }}
                  />
                </Grid>
              </Grid>
            </DialogContent>
            <DialogActions>
              <Button variant="contained" color="error" onClick={handleDeleteEvent}>Delete</Button>
              <Button variant="contained" onClick={handleEventUpdate}>Update</Button>
            </DialogActions>
          </Dialog>

            {/* Add Title Dialog */}
          <Dialog open={openTitle} onClose={() => setOpenTitle(!openTitle)}>
            <DialogTitle>Add Title</DialogTitle>
            <DialogContent>
              <TextField
                label="Title"
                value={title}
                defaultValue={selectedEvent ? selectedEvent.title : ''}
                onChange={e => setTitle( e.target.value)}
                fullWidth
                sx={{my: 4}}
              />
              <Button variant="contained" onClick={() => handleSaveTitle()}>Save</Button>
            </DialogContent>
          </Dialog>


          {edit ? <Box sx={{textAlign: 'end', mt: 3}}>
                  <Button variant="contained" 
                  type="submit"
                  onClick={onSubmit} 
                  >Save Section</Button>
                </Box> 
                : 
                <FormDirection onSubmit={onSubmit} proceed={proceed}/>
              }

        {/* </DemoContainer> */}
      </LocalizationProvider>
    </div>
  );
};

export default FullCalendarComponent;
