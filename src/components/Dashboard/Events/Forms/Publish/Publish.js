import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import styles from './Publish.module.css';
import { useAddEventFormContext } from '../../../../../store/formStateContext';
import services from '../../../../../util/services';
import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { LiaImageSolid } from 'react-icons/lia';
import Paper from '@mui/material/Paper';
import { TfiTicket } from 'react-icons/tfi';
import { FaUsers } from 'react-icons/fa';
import {
  currencyFormat,
  getTotals,
  getAllDatesInRange,
  getTimeZone,
  filterSortSchedule,
  getLocalDateString,
} from '../../../../../util/commons';
import Preview from './Preview';
import CustomizedButton from '../../../../CustomizedButton/CustomizedButton';
import RequestFeedback from '../../../../RequestFeedback/RequestFeedback';

const Publish = () => {
  const user = useSelector((state) => state.userLog?.user?.user);
  let navigate = useNavigate();
  const { eventForm, setSaveResultStatus } = useAddEventFormContext();
  const coverImage = eventForm.details.images[0]?.imgPath;
  const title = eventForm.basicInfo?.eventTitle;
  const summary = eventForm.details?.summary;
  const totalSectionsCapacity = getTotals(
    eventForm.tickets.sections,
    'capacity'
  );
  const [eventId, setEventId] = useState()

  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [saved, setSaved] = useState(false);

  const currentDate = new Date();

  const getTotalPrice = (tickets) => {
    let totalPrice = 0;
    // Iterate over each ticket type
    tickets.forEach((ticket) => {
      // Iterate over each ticket type within the ticket category
      ticket.ticketTypes.forEach((ticketType) => {
        // Convert price to number and add it to total price
        totalPrice += parseFloat(ticketType?.price || 0);
      });
    });

    return totalPrice;
  };

  const getEventStartDate = () => {
    const allDateRange = [];
    eventForm?.schedule.forEach((el) => {
      const range = getAllDatesInRange(el.start, el.end, 'daily');
      range.forEach((dt) => allDateRange.push(dt));
    });
    const sortedSchedule = allDateRange.filter(
      (dateStr) => new Date(dateStr) > currentDate
    );
    sortedSchedule.sort((a, b) => new Date(a) - new Date(b));

    return (
      <Typography
        variant='caption'
        display='block'
        gutterBottom
        color={sortedSchedule[1] ? '' : 'error'}
      >
        {`${getLocalDateString(
          filterSortSchedule(eventForm?.schedule)[0].start
        )} ${getTimeZone()}`}
      </Typography>
    );
  };

  const handleSubmit = async () => {
    try {
      setIsError(false);
      setSaved(false);
      setLoading(true);
      setOpen(true);
      const data = {
        userId: user._id,
        eventForm,
      };
      const result = await services.postEvent(data);
      setSaveResultStatus(result.status);
      if (result.status) {
        setEventId(result.data.event._id)
        setLoading(false);
        setSaved(true);
      }
    } catch (error) {
      setSaveResultStatus(error.status);
      console.log(error);
      setLoading(false);
      setSaved(false);
      setIsError(true);
    }
  };

  const handleViewLiveEvent = () => {
    console.log({eventId})
    if(eventId){
      const formattedEventTitle = eventForm.basicInfo.eventTitle
        .toLocaleLowerCase()
        .replaceAll(' ', '-');
      navigate(`/event?title=${formattedEventTitle}`, {
        state: { edit: false, eventId },
      })
    }
  }

  return (
    <div className={styles.Publish}>
      <Box>
        <Box sx={{ maxWidth: 1200 }}>
          <Paper sx={{ flex: '1 0 auto', p: 3 }} elevation={3}>
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={1}>
                <Grid
                  item
                  xs={12}
                  md={5}
                  sx={{
                    background: '#F8F7FA',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <Box>
                    {coverImage ? (
                      <CardMedia
                        component='img'
                        sx={{ width: '100%', maxHeight: 250 }}
                        image={coverImage}
                        alt='event cover thumbnail'
                      />
                    ) : (
                      <Box
                        sx={{
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}
                      >
                        <LiaImageSolid size={45} color='#A9A8B3' />
                      </Box>
                    )}
                  </Box>
                </Grid>
                <Grid item xs={12} md={7} sx={{}}>
                  <Box
                    sx={{ pt: 4, px: 4, position: 'relative', height: '100%' }}
                  >
                    <Typography variant='body1' gutterBottom>
                      {title}
                    </Typography>
                    {getEventStartDate()}
                    <Typography
                      variant='caption'
                      display='block'
                      gutterBottom
                      sx={{ my: 2, fontStyle: 'italic' }}
                    >
                      {summary}
                    </Typography>
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        my: 3,
                      }}
                    >
                      <Box
                        sx={{
                          display: 'inherit',
                          justifyContent: 'flex-start',
                          alignItems: 'normal',
                        }}
                      >
                        <TfiTicket />
                        <Typography
                          variant='caption'
                          display='block'
                          gutterBottom
                          sx={{ ml: 1 }}
                        >
                          {currencyFormat.format(
                            getTotalPrice(eventForm.tickets.sections)
                          )}
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          display: 'inherit',
                          justifyContent: 'flex-start',
                          alignItems: 'normal',
                          mx: 3,
                        }}
                      >
                        <FaUsers />
                        <Typography
                          variant='caption'
                          display='block'
                          gutterBottom
                          sx={{ ml: 1 }}
                        >
                          {totalSectionsCapacity}
                        </Typography>
                      </Box>
                    </Box>
                    <Box sx={{ width: '100%' }}>
                      <Box
                        sx={{
                          borderTop: '2px solid #F8F7FA',
                          pt: 3,
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                        }}
                      >
                        <Preview data={eventForm} isPublish={true} />
                        <CustomizedButton
                          variant='text'
                          label={'Publish'}
                          id='demo-customized-button'
                          disableElevation
                          onClick={() => handleSubmit()}
                          sx={{
                            fontSize: { xs: 15, md: 18 },
                            borderRadius: 0,
                            height: 40,
                            fontWeight: 700,
                          }}
                        />
                      </Box>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Paper>
        </Box>
        <RequestFeedback
          open={open}
          setOpen={setOpen}
          loading={loading}
          isError={isError}
          saved={saved}
          handleError={handleSubmit}
          handleSuccess={handleViewLiveEvent}
        />
      </Box>
    </div>
  );
};

export default Publish;
