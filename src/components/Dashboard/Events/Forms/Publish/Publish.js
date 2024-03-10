import React, {useState} from 'react';
import {useSelector} from 'react-redux'
import FormDirection from '../../../../TestingDashboard/Events/Forms/FormDirection/FormDirection';
import styles from './Publish.module.css';
import { useAddEventFormContext } from '../../../../../store/formStateContext';
import services from '../../../../../util/services';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { LiaImageSolid } from "react-icons/lia";
import Paper from '@mui/material/Paper';
import { TfiTicket } from "react-icons/tfi";
import { FaUsers } from "react-icons/fa";
import { currencyFormat, getTotals } from '../../../../../util/commons';
import Preview from './Preview'



const Publish = ({edit, }) => {
  const [proceed, setProceed] = useState(false);
  const user = useSelector(state => state.userLog?.user?.user)
  const { eventForm, setSaveResultStatus} = useAddEventFormContext();
  const coverImage = eventForm.details.images[0]?.imgPath
  const totalSectionsCapacity = getTotals(eventForm.tickets.sections, 'capacity');

  const getTotalPrice = (tickets) => {
    let totalPrice = 0;
    // Iterate over each ticket type
    tickets.forEach(ticket => {
        // Iterate over each ticket type within the ticket category
        ticket.ticketTypes.forEach(ticketType => {
            // Convert price to number and add it to total price
            totalPrice += parseFloat(ticketType.price);
        });
    });

    return totalPrice;
  };

  const handleSubmit = async () => {
    try {
      const data = {
        userId: user._id,
        eventForm
      }
      const result  = await services.postEvent(data);
      console.log(result);
      setSaveResultStatus(result.status)
      setProceed(true);
    } catch (error) {
      setSaveResultStatus(error.status)
      console.log(error);
    }
    //sent to the backend here
  };

  return(
  <div className={styles.Publish}>
    <Box>
        <Box sx={{ maxWidth: 1200, }}>
          <Paper sx={{ flex: '1 0 auto', p: 3, }} elevation={3} >
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={1}>
                <Grid item xs={12} sm={5} sx={{background: '#F8F7FA'}}>
                  <Box>
                    {coverImage ? 
                      <CardMedia
                        component="img"
                        sx={{ width: '100%', maxHeight: 250 }}
                        image={coverImage}
                        alt="event cover thumbnail"
                      />
                    : 
                    <Box sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center'
                      }}>
                      <LiaImageSolid size={45} color="#A9A8B3"/>
                    </Box>
                    }
                  </Box>
                </Grid>
                <Grid item xs={12} sm={7} sx={{}}>
                  <Box sx={{pt: 4, px:4, position: 'relative',  height: '100%'}}>
                    <Typography variant="body1" gutterBottom>Test</Typography>
                    <Typography variant="caption" display="block" gutterBottom>
                      Thursday, May 2, 2024 at 7:00pm EDT
                    </Typography>
                    <Typography variant="body2" display="block" gutterBottom sx={{my: 2}}>
                      something nice
                    </Typography>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        my: 3
                      }}>
                      <Box sx={{
                        display: 'inherit',
                        justifyContent: 'flex-start',
                        alignItems: 'normal'
                      }}>
                        <TfiTicket />
                        <Typography variant="caption" display="block" gutterBottom sx={{ml: 1}}>
                        {currencyFormat.format(getTotalPrice(eventForm.tickets.sections))}
                        </Typography>
                      </Box>
                      <Box sx={{
                        display: 'inherit',
                        justifyContent: 'flex-start',
                        alignItems: 'normal',
                        mx: 3
                      }}>
                        <FaUsers />
                        <Typography variant="caption" display="block" gutterBottom sx={{ml: 1}}>
                        {totalSectionsCapacity}
                        </Typography>
                      </Box>
                    </Box>
                    <Box sx={{width: '100%', }}>
                      <Box sx={{borderTop: '2px solid #F8F7FA', textAlign: 'center', pt: 3}}>
                        <Preview data={eventForm} isPublish={true}/>
                      </Box>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Paper>
        </Box>
    </Box>
    {!edit && <FormDirection onSubmit={() => handleSubmit()} proceed={proceed}/>} 
    
  </div>
)};

export default Publish;
