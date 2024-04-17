import React, {useState, useEffect} from 'react';
import { useAddEventFormContext } from '../../../../../store/formStateContext';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { MdErrorOutline } from "react-icons/md";
import { GrStatusGood } from "react-icons/gr";

import styles from './GoLive.module.css';

const GoLive = () => {
  const { saveResultStatus  } = useAddEventFormContext();
  const [message, setMessage] = useState({feedback: "", icon: ""})

  useEffect(() => {
    const success = 'Event Saved Successfully!';
    const error = 'Something Went Wrong!';
    setMessage((Prev) => ({
      ...Prev,
      feedback: saveResultStatus === 200 ? success : error,
      icon: saveResultStatus === 200 ? 'success' : 'error',
    }))
  },[saveResultStatus])

  return(
  <div className={styles.GoLive}>
    <Box sx={{ maxWidth: 450, m: 'auto' }}>
      <Card sx={{ minWidth: 275 }}>
        <CardContent sx={{textAlign: 'center'}}>
          <Typography variant="h5" component="div">
            {message.feedback}
          </Typography>
          <Typography variant="h5" component="div" sx={{mt: 3}}>
            {message.icon === 'error' && <MdErrorOutline fontSize={45} color="salmon"/>}
            {message.icon === 'success' && <GrStatusGood fontSize={45} color="#679E6A"/>}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">view Live Event</Button>
        </CardActions>
      </Card>
    </Box>
  </div>
)};


export default GoLive;
