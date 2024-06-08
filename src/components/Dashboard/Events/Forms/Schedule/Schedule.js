import React, {useEffect, useState} from 'react';
import styles from './Schedule.module.css';
import { useAddEventFormContext } from '../../../../../store/formStateContext';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FullCalendarComponent from './FullCalendarComponent';

const Schedule = () => {
  const { eventForm, setEventForm } = useAddEventFormContext();
  const [data, setData] = useState();
  const [proceed, setProceed] = useState(false);

  console.log(eventForm)

  useEffect(() => {
    if(data){
      const updatedData = { 
        ...eventForm,  
        schedule: data 
      }
      console.log('Schedule:', data)
      setEventForm(updatedData);
    }
  }, [data])




  
  return(
  <div className={styles.Schedule}>
    <Box>
      {eventForm.basicInfo.dateOccurrence === 'single' ? 
        <Box
        sx={{    
          minHeight: '65vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'normal'
        }}
        >
          <Card sx={{ maxWidth: 400, m:'auto', }}>
            <CardContent>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                You've selected the single event option in the Date and Time section on the previous page. There's no need to set up a recurring schedule for multiple event dates
              </Typography>
              <Typography sx={{ mt: 4, fontSize: 14  }} color="text.secondary">
                If you need to schedule multiple event dates, you can return to the previous page and update your selection to the recurring event option.
              </Typography>
            </CardContent>
          </Card>
        </Box>
        :
        <Box>
          <FullCalendarComponent
            setData={setData} 
            defaultDates={eventForm.schedule} 
          />
        </Box>
      }
    </Box>
  </div>
)};



export default Schedule;
