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
import { eventsActions } from '../../../../store/eventSlice';
import Preview from '../Forms/Publish/Preview'
import AlertDialog from '../../../AlertDialog/AlertDialog';
import { PiTrashThin } from "react-icons/pi";


const EventFeed = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch()
  const user = useSelector(state => state.userLog.user);
  const [selectedEventId, setSelectedEventId] = useState();
  const [events, setEvents] = useState([]);
  const [previewEvent, setPreviewEvent] = useState(false);
  const [currentPage, setCurrentPage] = useState(1)
  const [counts, setCounts] = useState(10);
  const [isDelete, setIsDelete] = useState(false)
  const [paginationModel, setPaginationModel] = React.useState({
    pageSize: 25,
    page: 1,
  });
  const [message, setMessage] = useState('Deleting this event will permanently delete all tickets, if it is an ongoing event please make sure refunds are done before deleting for bought tickets')

  const fetchEvents = async (query, userId) => {
    try {
        const allEvents = await services.getUserEvents(userId, query);
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

  // Add the data to redux for preview
  useEffect(() => {
    if(selectedEventId){
      setPreviewEvent(false)
      console.log({selectedEventId, events})
      const previewData = events.find((el) => el._id === selectedEventId);
      dispatch(eventsActions.getSingleEvent({
          data: previewData
      }))
      setPreviewEvent(true)
    }
  },[selectedEventId])

  const handleSectionDelete = async () => {
    console.log(selectedEventId)
    try {
      const response = await services.removeEvent(selectedEventId);
      console.log(response.data.deleted)
      if(response.data.deleted){
        setEvents(events.filter((el) => el._id !== selectedEventId))
        setPreviewEvent(false)
      }
  } catch (err) {
      console.log(err);
  }
  }


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
                  variant="text" 
                  disabled={selectedEventId !== undefined ? false : true}
                  onClick={() =>  setIsDelete(true)}
                  sx={{textTransform: 'none'}} 
                  color="error"
                >
                  Delete
                </Button>
                <Button 
                  variant="text" 
                  disabled={selectedEventId !== undefined ? false : true}
                  onClick={() =>   navigate("/eventbrit/edit-event", { state: { edit: false, id:  selectedEventId} })}
                  sx={{textTransform: 'none'}} 
                >
                  Edit
                </Button>
                {previewEvent ? <Preview data={previewEvent} edit={true}/> 
                  : 
                  <Button  variant="text" disabled={true} sx={{textTransform: 'none'}}> Preview </Button>
                }
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
      <AlertDialog open={isDelete} setOpen={setIsDelete} setConfirmDelete={() => handleSectionDelete()}>
                <Box sx={{display: 'flex', flexDirection: 'column', justifyContent:'center', alignItems:'center',}}>
                    <Typography variant="button" display="block" gutterBottom sx={{transform: 'none', display: 'flex',justifyContent:'center', alignItems:'center', height: 50, width: 50, borderRadius: '50%', backgroundColor:'#f8f7fa'}}>
                            <PiTrashThin fontSize={30}/>
                    </Typography>
                    <Typography variant="h6" gutterBottom color="error">
                        Delete
                    </Typography>
                    <Typography variant="caption" gutterBottom>
                        {message}
                    </Typography>
                </Box>
            </AlertDialog>
    </Container>
  </div>
)};


export default EventFeed;
