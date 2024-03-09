import React, {useState, useEffect} from 'react';
import {useNavigate } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux'
import styles from './EventFeed.module.css';
import Box from '@mui/material/Box';
import {Paper, Grid} from '@mui/material'
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import EventList from '../EventList/EventList';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import services from '../../../../util/services';


const EventFeed = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch()
  const user = useSelector(state => state.userLog.user);
  const [selectedEventId, setSelectedEventId] = useState();
  const [events, setEvents] = useState([]);
  const [currentPage, setCurrentPage] = useState(1)
  const [counts, setCounts] = useState(10);
  const [paginationModel, setPaginationModel] = React.useState({
    pageSize: 25,
    page: 1,
  });

  const fetchEvents = async (query, userId) => {
    try {
            const allEvents = await services.getUserEvents(userId, query);
            console.log(allEvents)
            setEvents(allEvents.data.events);
            setCounts(allEvents.data.count);
    } catch (err) {
        console.log(err);
    }
};

useEffect(() => {
    if (user && paginationModel) { // Check if both user and paginationModel exist
        const filter = {
            keywordSearch: '',
            activeComp: 'myEvent', //only get user's event
            timeFrame: {starts: '', ends: ''},
            currentPage: paginationModel.page,
            perPage: paginationModel.pageSize
        };
        user.user._id && fetchEvents(filter, user.user._id);
    }
}, [user, paginationModel.page, paginationModel.pageSize]);



  return(
  <div className={styles.EventFeed}>
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
              <Grid item xs={12} >
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                  }}
                >
                  <Typography  gutterBottom sx={{mx: 3}}>
                    <Link to="/eventbrit/create-event">Create Event</Link>
                  </Typography>

                  <Typography  gutterBottom>
                    <Link to="/eventbrit/create-event">Upcoming Event</Link>
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                  <Box sx={{display: 'flex'}}>
                    <Typography variant="body1" gutterBottom sx={{flexGrow: 1}}>
                      My Event Lists
                    </Typography>
                    <Stack direction="row" spacing={2}>
                      <Button 
                        variant="contained" 
                        disabled={selectedEventId !== undefined ? false : true}
                        onClick={() =>   navigate("/eventbrit/edit-event", { state: { edit: false, id:  selectedEventId} })
                      } 
                      >
                        Edit
                      </Button>
                      <Button 
                        variant="contained" 
                        disabled={selectedEventId !== undefined ? false : true}
                        onClick={() =>   navigate("/eventbrit/edit-event", { state: { edit: true, id:  selectedEventId} })
                      } 
                      >
                        Previev
                      </Button>
                    </Stack>
                  </Box>
                  {/* <EventList/> */}
                  <EventList 
                    setSelectedEvent={setSelectedEventId} 
                    data={events}
                    paginationModel={paginationModel}
                    setPaginationModel={setPaginationModel}
                    rowCount={counts}
                  />
                </Paper>
              </Grid>
            </Grid>
          </Container>
  </div>
)};


export default EventFeed;
