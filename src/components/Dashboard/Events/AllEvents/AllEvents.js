import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './AllEvents.module.css';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import services from '../../../../util/services';
import PaginationNav from '../../../PaginationNav/PaginationNav';
import {
  getAllDatesInRange,
  getTimeZone,
  filterSortSchedule,
  getLocalDateString,
  findMinimumPriceOrFreeTicket,
} from '../../../../util/commons';


const AllEvents = () => {
  const navigate = useNavigate();
  const [events, setEvents] = useState([]);
  const [favs, setFavs] = useState([]);
  const [page, setPage] = useState(1);
  const [count, setCount] = useState();
  const limit = 12;
  const currentDate = new Date();
  const [loading, setLoading] = useState(true);

  const fetchEvents = async (query) => {
    try {
      setLoading(true);
      const allEvents = await services.getEvents(query);
      console.log('allEvents::', allEvents);
      setEvents(allEvents.data.events);
      setCount(allEvents.data.count);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const filter = {
      keywordSearch: '',
      // activeComp: 'online',
      // timeFrame: getTimeFrame(type),
      page,
      limit,
    };
    fetchEvents(filter);
  }, [page]);

  const getEventStartDate = (schedule) => {
    if(schedule.length > 0){
      console.log("LENGTH",schedule.length)
      const allDateRange = [];
      schedule.forEach((el) => {
        const {start, end} = el;
        const range = getAllDatesInRange(start, end, 'daily');
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
            filterSortSchedule(schedule)[0].start
          )} ${getTimeZone()}`}
        </Typography>
      );
    }
  };

  const handleFavs = (id) => {
    const isSelected = favs.includes(id);

    if (isSelected) {
      const updatedImages = favs.filter((selectedId) => selectedId !== id);
      setFavs(updatedImages);
    } else {
      setFavs([...favs, id]);
    }
  };

  const handleEventClick = (id, title) => {
    const formattedEventTitle = title
      .toLocaleLowerCase()
      .replaceAll(' ', '-');
    navigate(`/event?title=${formattedEventTitle}`, {
      state: { edit: false, eventId: id },
    });
  };

  return (
    <div className={styles.AllEvents}>
      <CssBaseline />
      {loading ? (
        'Loading'
      ) : (
        <Container maxWidth='lg' sx={{ mt: 4 }}>
          <Box sx={{ flexGrow: 1, mt: 4 }}>
            <Grid container columns={{ xs: 4, sm: 8, md: 12 }} sx={{}}>
              {events.map((event, index) => {
                const { _id, basicInfo, details, schedule, tickets } = event;
                return (
                  <Grid
                    item
                    xs={4}
                    sm={4}
                    md={4}
                    key={index}
                    sx={{
                      mb: 1,
                      p: 2,
                      display: { xs: 'flex', sm: 'initial' },
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    {/* <Link to={'event'}> */}
                    <Card
                      sx={{ maxWidth: 345 }}
                      onClick={() => handleEventClick(_id, basicInfo.eventTitle)}
                    >
                      <Box sx={{ position: 'relative' }}>
                        <CardMedia
                          component='img'
                          height='200'
                          image={details.images[0].imgPath}
                          alt='Paella dish'
                        />
                        <Box
                          sx={{
                            position: 'absolute',
                            right: 0,
                            bottom: 0,
                          }}
                        >
                          <CardActions disableSpacing>
                            <IconButton
                              aria-label='add to favorites'
                              onClick={() => handleFavs(_id)}
                            >
                              {favs.includes(_id) ? (
                                <FavoriteIcon
                                  sx={{
                                    height: 35,
                                    border: '1px solid white',
                                    borderRadius: '50%',
                                    width: '35px',
                                    padding: 1,
                                    background: '#4b474282',
                                    color: 'salmon',
                                  }}
                                />
                              ) : (
                                <FavoriteBorderOutlinedIcon
                                  sx={{
                                    height: 35,
                                    border: '1px solid white',
                                    borderRadius: '50%',
                                    width: '35px',
                                    padding: 1,
                                    background: '#4b474282',
                                    color: 'white',
                                  }}
                                />
                              )}
                            </IconButton>
                            <IconButton aria-label='share'>
                              <ShareIcon
                                sx={{
                                  height: 35,
                                  border: '1px solid white',
                                  borderRadius: '50%',
                                  width: '35px',
                                  padding: 1,
                                  background: '#4b474282',
                                  color: 'white',
                                }}
                              />
                            </IconButton>
                          </CardActions>
                        </Box>
                      </Box>
                      <CardContent>
                        <Typography variant='h6'>
                          {basicInfo.eventTitle}
                        </Typography>
                        <Typography variant='body1'>
                          {schedule.length > 0 && getEventStartDate(schedule)}
                        </Typography>
                        <Typography variant='caption' color='text.secondary'>
                          {basicInfo.organizer}
                        </Typography>
                        <Typography variant='body2'>
                          {findMinimumPriceOrFreeTicket(tickets.sections)}
                        </Typography>
                      </CardContent>
                    </Card>
                    {/* </Link> */}
                  </Grid>
                );
              })}
            </Grid>
          </Box>

          <Box
            sx={{
              display: count > limit ? 'flex' : 'none',
              textAlign: 'center',
              justifyContent: 'center',
              alignItems: 'center',
              m: 5,
            }}
          >
            <PaginationNav page={page} setPage={setPage} count={count} />
          </Box>
        </Container>
      )}
    </div>
  );
};

export default AllEvents;
