import React, {useState, useEffect} from 'react';
import {useNavigate } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux'
import styles from './EventFeed.module.css';
import Box from '@mui/material/Box';
import {Paper, Grid} from '@mui/material'
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import services from '../../../../util/services';
import { eventsActions } from '../../../../store/eventSlice';
import Preview from '../Forms/Publish/Preview'
import AlertDialog from '../../../AlertDialog/AlertDialog';
import { PiTrashThin } from "react-icons/pi";
import { getAllDatesInRange, getDateShort } from '../../../../util/commons';
import DataGridTable from '../../../DataGridTable/DataGridTable';

const columns = [
  { field: 'id', headerName: '', width: 80 },
  { field: 'title', headerName: 'Title', width: 200 },
  { field: 'summary', headerName: 'Summary', width: 150},
  { field: 'startDate', headerName: 'Start Date', width: 150 },
  { field: 'ongoing', headerName: 'On Going', width: 150 },
  { field: 'nextEventDate', headerName: 'Next Event Date', width: 150 },
  { field: 'organizer', headerName: 'Organizer', width: 100 },
  { field: 'createdOn', headerName: 'Creation Date', width: 150 },
  { field: 'ticketSold', headerName: 'Ticket Sold', type: 'number' },
];

const getTotalSold = (sections) => {
        // Initialize total sold ticket types
    let totalSoldTicketTypes = 0;

    // Iterate over each section
    sections.forEach(section => {
        // Iterate over each ticket type within the section
        section.ticketTypes.forEach(ticketType => {
            // Add the number of sold ticket types to the total
            totalSoldTicketTypes += ticketType.sold;
        });
    });
    return totalSoldTicketTypes;
}

const getRows = (data) => {
    const currentDate = new Date();
    const rows = [];
    data.forEach((evt, i) => {
        const {_id, basicInfo, schedule, details, tickets, createdAt} = evt;
        const allDateRange = [];
        // get all the date ranges in the schedule data
        schedule.forEach((el) => {
            const range = getAllDatesInRange(el.start, el.end, 'daily');
            range.forEach((dt) => allDateRange.push(dt))

        })
        const sortedSchedule = allDateRange.filter(dateStr => new Date(dateStr) > currentDate);
        sortedSchedule.sort((a, b) => new Date(a) - new Date(b));

        rows.push({ 
            id : _id,
            title : basicInfo.eventTitle,
            summary: details.summary,
            startDate : allDateRange[0] ? ` ${getDateShort(allDateRange[0])} ` 
            : ' - ',
            ongoing: allDateRange.length > 1 ? 'Yes' : 'No',

            nextEventDate: sortedSchedule[1] ? ` ${getDateShort(sortedSchedule[1])} ` : ' - ',
            organizer : basicInfo.organizer,
            createdOn : getDateShort(createdAt),
            ticketSold : getTotalSold(tickets.sections),
        })
    })
    return rows;
}



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
  const [rows, setRows] = useState([])
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
  setRows(getRows(events))
},[events])

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
              <Link to="/account/create-event">Create Event</Link>
            </Typography>

            <Typography  gutterBottom>
              <Link to="/account/create-event">Upcoming Event</Link>
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
                  onClick={() =>   navigate("/account/edit-event", { state: { edit: false, id:  selectedEventId} })}
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
            <DataGridTable 
              setSelected={setSelectedEventId} 
              data={events}
              paginationModel={paginationModel}
              setPaginationModel={setPaginationModel}
              rowCount={counts}
              rows={rows}
              columns={columns}
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
