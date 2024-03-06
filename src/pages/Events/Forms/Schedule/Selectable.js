import React, { Fragment, useState, useCallback, useMemo } from 'react'
import { Calendar, Views, dateFnsLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css'
import format from 'date-fns/format'
import parse from 'date-fns/parse'
import startOfWeek from 'date-fns/startOfWeek'
import getDay from 'date-fns/getDay'
import enUS from 'date-fns/locale/en-US'
import Box from '@mui/material/Box';
import { FormContainer,  } from '../FormContainer/FormContainer';
import FormDirection from '../../../../components/Dashboard/Events/Forms/FormDirection/FormDirection';
import { getRandomInt } from '../../../../util/commons';
import { Button, Grid,TextField } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import ModeIcon from '@mui/icons-material/Mode';
import DialogTitle from '@mui/material/DialogTitle';
import Typography from '@mui/material/Typography';
import InputAdornment from '@mui/material/InputAdornment';
import { getDateShort, getLocalTime, getTimeZone } from '../../../../util/commons';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { renderTimeViewClock } from '@mui/x-date-pickers/timeViewRenderers';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

const locales = {
  'en-US': enUS,
}

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
})

export default function Selectable({setData, title, defaultValues}) {
  const [myEvents, setMyEvents] = useState([])
  const [openDrawer, setOpenDrawer] = useState(false)
  const [event, setEvent] = useState({
    start: "",
    end: "",
    title: "",
    eventId: 0
  })
  const [proceed, setProceed] = useState(false);
    

  
  const handleSelectSlot = useCallback(
    (evt) => {
      const { start, end } = evt
      if (title) {
        console.log(evt);
        const eventId = getRandomInt()
        if(new Date(start) < new Date()){
          window.alert('Error, min date should be greater than present date/time')
          return;
        }
        setMyEvents((prev) => [...prev, { start, end, title, eventId }])
        setEvent({ start, end, title, eventId })
        setOpenDrawer(true);
      }
    },
    [setMyEvents]
  )

  const handleSelectEvent = useCallback(
    (event) => {
      console.log(event)
      setEvent(event)
      setOpenDrawer(true);
    },
    []
  )
  const handleDelete = (id) => {
    const updatedEvents = myEvents.filter(el => el.eventId !== id);
    setMyEvents(updatedEvents);
    setOpenDrawer(!openDrawer);
  }

  const handleSaveEditEventDate = () => {
    const {title, start, end} = event;
    if(new Date(start) < new Date()){
      window.alert('Error, min date should be greater than present date/time')
      return;
    }
    if(new Date(start) >= new Date(end)){
      window.alert('End Date and time must be greater than start date and time!')
      return;
    }
    if(title && start && end){
      const updatedEvents = myEvents.map(el => {
        if (event.eventId === el.eventId) {
          return {
            ...el,
            title: event.title,
            start: event.start,
            end: event.end,
          };
        }
        return event;
      });
      setMyEvents(updatedEvents);
      setOpenDrawer(!openDrawer);
    }
  }
    
  const { defaultDate, scrollToTime } = useMemo(
    () => ({
      defaultDate: new Date(),
      scrollToTime: new Date(),
    }),
    []
    )
  const onSubmit = () => {
    if(myEvents.length){
      setData(myEvents)
      setProceed(true);
    }
  };


  return (
    <Box>
      <div >
        <Calendar
        dayLayoutAlgorithm={'no-overlap'}
          defaultDate={defaultDate}
          defaultView={Views.WEEK}
          events={myEvents}
          localizer={localizer}
          onSelectEvent={handleSelectEvent}
          onSelectSlot={handleSelectSlot}
          selectable
          scrollToTime={scrollToTime}
          style={{ height: 500 }}
        />
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
            defaultValue={event?.title}
            helperText={!event.title && 'Title is required!'}
            onChange={(e) => setEvent({
              ...event,
              title: e.target.value
            })}
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
                        value={new Date(event.start)}
                        onChange={(date) => setEvent({
                          ...event,
                          end: date
                        })}
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
                        value={new Date(event.end)}
                        onChange={(date) => setEvent({
                          ...event,
                          end: date
                        })}
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
          <Button onClick={() => handleDelete(event.eventId)} color="error">Delete</Button>
          <Button onClick={() => setOpenDrawer(!openDrawer)}>Cancel</Button>
          <Button onClick={() => handleSaveEditEventDate()} autoFocus> Save </Button>
        </DialogActions>
      </Dialog>
        
      <FormDirection onSubmit={onSubmit} proceed={proceed}/>
    </Box>
  )
}
