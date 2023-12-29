import React, {useState, useEffect} from 'react';
import services from '../../../../util/services'
import {useDispatch} from 'react-redux'
import { useLocation } from 'react-router-dom';
import Button from '@mui/material/Button';
import styles from './SingleEvent.module.css';
import placeholderImg from '../../../../public/images/userbg.jpeg';
import userPlaceHolder from '../../../../public/images/placeholders/user.png'
import { FaRegCalendarCheck } from "react-icons/fa6";
import { FaRegCalendar } from "react-icons/fa";
import { AiOutlineGlobal } from "react-icons/ai";
import { LuShare } from "react-icons/lu";
import { ImFlag } from "react-icons/im";
import { FaRegHeart } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import ModalFeedBack from '../../../ModalFeedBack/ModalFeedBack';
import parser from 'html-react-parser';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { Divider } from '@mui/material';
import { experimentalStyled as styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import {getRandomInt} from '../../../../util/commons';
import { MdLocationOn } from "react-icons/md";
import { BsClockHistory } from "react-icons/bs";
import { IoTicketOutline } from "react-icons/io5";
import Loading from '../../../Loading/Loading'
import {getWeekDay, getTimeZone, getLocalTime, getDateShort, formatNumber, getAllDatesInRange } from '../../../../util/commons';
import Map from '../../../GoogleMapLocation/GoogleMap/Map';

const { DateTime } = require('luxon');

const SingleEvent = ({isLoaded}) => {

  const location = useLocation();
    const eventId = location.state?.eventId
    const dispatch = useDispatch()
    const [event, setEvent] = useState(null)
    const [show, setShow] = useState(false);
    const [dateClicked, setDateClicked] = useState('#dee2e6');
    const [isFav, setIsFav] = useState(false);
    const tags = ['Canada Events', 'Ontario Events', 'Things to do in Toronto', 'CanadaToronto', 'PerformancesToronto', 'Film & Media' ,'Performances','comedy','saturdays','comedyevent','comedyshow','standupcomedy','comedynight','livecomedy','standupshow','livecomedyshow','comedy_show'];
    const [loading, setLoading] = useState(true);
    const [dateOptions, setDateOptions] = useState([]);
    

    const fetchEvent = async () => {
      try{
        setLoading(true)
        const result = await services.findEventById(eventId);
        setEvent(result.data)
        setLoading(false)
      }catch (err){
        console.log(err)
      }
    }
    
    useEffect(() => {
      fetchEvent()
      }, 
    [eventId, dispatch])



  
    

    useEffect(() => {
      if(event){
        const start = event.eventDetails.starts
        const end = event.eventDetails.ends;
        const interval = event.eventDetails.frequency; 
        const dateRanges = getAllDatesInRange(start, end, interval);

        const newDateRanges = [];

        //only display current and future dates
        dateRanges.forEach((el) => {
          if(new Date(el) >= new Date()){
            newDateRanges.push(el);
          }
        })
        setDateOptions(newDateRanges);

      }
    },[event]);

    const Item = styled(Paper)(({ theme }) => ({
      backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      ...theme.typography.body2,
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      width: '120px'
    }));





  return(
  <div className={` container ${styles.SingleEvent}`}>
    {loading ? <Loading/> : 
    <>
      

      <div className="jumbotron jumbotron-fluid border mb-4">
        <div className="container">
          <h1 className="display-4">Fluid jumbotron</h1>
          <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
        </div>
      </div>
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-8">
            <div className="card-body">
              {/* <h6 className="card-title">Saturday, December 30</h6> */}
              <h6 className="card-title">{getDateShort(new Date(dateOptions[0]))}</h6>
              <h2 className="card-title"><strong>{event.eventDetails.eventTitle}</strong></h2>
              <p className="card-text py-4">Savor the laughter at Sizzling Saturdays! Toronto's comedy spectacle starts at 8 PM. A night of uproarious fun awaits!</p>


              <div className={`p-4 d-flex justify-content-between align-items-center ${styles.followContainer}`}>
                <div className='d-flex align-items-center justify-content-center'>
                  <div>
                    <img src={event.createdBy.avatar ? event.createdBy.avatar : userPlaceHolder } alt='thumbnail' className={`${styles.avatar}`}/>
                  </div>
                  <div className='px-3'>
                    <p className="card-text mb-0">By <strong>{event.createdBy.firstName} {event.createdBy.lastName}</strong> </p>
                    <p className="card-text mt-2">{formatNumber(event.createdBy.followers)} followers</p>
                  </div>
                </div>
                <div className=''>
                  <Button variant="contained">Follow</Button>
                </div>
              </div>

              <div className='my-5'>
                <h4 className='card-title'><strong>Select date and time</strong></h4>
                <div className="border p-3">
                  <div className='row'>
                    <div className='col-1'>
                      <FaRegCalendarCheck />
                    </div>
                    <div className='col-11'>
                      <Typography variant="p" component="div">
                      By <b>{getDateShort(new Date(dateOptions[0]))} {getLocalTime(new Date(dateOptions[0])).toUpperCase()} {getTimeZone()}</b>
                      </Typography>
                      <Button variant="text" sx={{pl: 0}} onClick={() => setShow(true)}>More options</Button>
                      <ModalFeedBack
                        show={show}
                        setShow={setShow}
                        content={<></>}
                        isClose={true}
                        isConfirm={true}
                        confirmLabel={'Confirm'}
                        closeLabel={'Cancel'}
                      />
                    </div>
                  </div>
                  <div className={`mt-4 ${styles.calendarContainer}`}>
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container item spacing={1}>
                          <Grid container item spacing={2}>
                            <React.Fragment>
                              {dateOptions.slice(0, 3).map((el) => 
                              <Grid item xs={6} sm={4} lg={3} key={el}>
                                <Item className={`  ${dateClicked === el ? styles.activeCalendarCard : ''}`}>
                                  <div onClick={() => setDateClicked(el)}>
                                    <div className={` ${styles.calendarCard}`}>
                                      <Typography variant="h6" component="div" sx={{ fontSize: 15 }}>
                                      {getWeekDay(new Date(el))}
                                      </Typography>
                                      <Divider/>
                                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                      {
                                        new Date().getFullYear() === new Date(el).getFullYear() ?  
                                        DateTime.fromISO(el).monthLong : 
                                        <>{DateTime.fromISO(el).monthShort}, {new Date(el).getFullYear()}</>
                                      }
                                    </Typography>
                                    <div className={`border ${styles.day} ${dateClicked === el ? styles.activeCalendarCardDay : ''}`}>
                                      <Typography variant="h6" component="div" sx={{ p: 1,}} >
                                      {new Date(el).getDate()}
                                      </Typography>
                                    </div>
                                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                      {getLocalTime(new Date(el))}
                                    </Typography>
                                    </div>
                                  </div>
                                </Item>
                              </Grid>
                              )}
                              <Grid item xs={6} sm={4} lg={3}>
                                <Item>
                                  {dateOptions.length > 3 && 
                                    <div className='item'>
                                      <div className={` ${styles.calendarCard}`} onClick={() => setShow(true)}>
                                        <Typography variant="h6" component="div" sx={{ fontSize: 15}}>
                                          <FaRegCalendar />
                                        </Typography>
                                        <Typography variant="h6" component="div" sx={{mt: 1, color: 'black', fontSize: 15, width: '55px'}}>More options</Typography>
                                      </div>
                                    </div>
                                  }  
                                </Item>
                              </Grid>
                            </React.Fragment>
                          </Grid>
                        </Grid>
                    </Box>

                  </div>

                </div>
              </div>

              <div className='mb-5'>
                <h4 className='card-title'><strong>Location</strong></h4>
                <div className='row'>
                    <div className='col-1'>
                      <MdLocationOn />
                    </div>
                    <div className='col-11'>
                      <Typography variant="p" component="div">
                      <b>{event.eventDetails.location.name}</b>
                      </Typography>
                      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                      {event.eventDetails.location.formattedAddress}
                      </Typography>
                      <Button variant="text" sx={{pl: 0}}>Show map</Button>
                      <Map isLoaded={isLoaded} location={event.eventDetails.location}/>
                    </div>
                  </div>
              </div>


              <div className='mb-5'>
                <h4 className='card-title'><strong>Refund Policy</strong></h4>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                  Contact the organizer to request a refund.
                </Typography>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                  We do not handle refund fees, and fees are nonrefundable.
                </Typography>
              </div>


              <div className='mb-5'>
                <h4 className='card-title'><strong>About this event</strong></h4>
                
                  <div className='d-flex'>
                    <div className="card-text d-flex align-items-center justify-content-center " style={{    marginRight: '6rem'}}>
                      <div className={`${styles.aboutEventHeadIcon}`}><BsClockHistory /></div>
                      <div>
                      <small className="text-body-secondary">
                        1 hour 45 minutes
                      </small>
                        </div>
                    </div>
                    <div className="card-text d-flex align-items-center justify-content-center">
                      <div className={`${styles.aboutEventHeadIcon}`}><IoTicketOutline /></div>
                      <div>
                      <small className="text-body-secondary">
                        Mobile Ticket
                      </small>
                        </div>
                    </div>
                </div>
                <Typography sx={{ fontSize: 14, mt:4 }} color="text.secondary" gutterBottom>
                {parser(event.eventDetails.eventDescription)}
                </Typography>
              </div>

              <div className='mb-5'>
                <h4 className='card-title mb-3'><strong>Tags</strong></h4>
                <div className='d-flex flex-wrap'>
                  {tags.map((el) => <Typography sx={{fontSize: 12, mb:3, mr: 2, p: 1, backgroundColor: '#EEEDF2', borderRadius: 5 }} key={getRandomInt()}>{el}</Typography>)}
                </div>
              </div>


              <div className='mb-5'>
                <h4 className='card-title'><strong>About the Organizer</strong></h4>
                <div>
                  <Card sx={{ minWidth: 275, textAlign: 'center' , pt: 3,  pb: 3}}>
                    <CardContent>
                      <Box sx={{margin: 'auto'}}>
                        <img src={placeholderImg} alt='thumbnail' className={styles.organizerCard}/>
                      </Box>
                      <Typography sx={{ fontSize: 14, mt: 4 }} color="text.secondary" gutterBottom>
                        Organized by
                      </Typography>
                      <Typography variant="h5" component="div" sx={{ mb: 3 }} >
                        {event.createdBy.firstName} {event.createdBy.lastName}
                      </Typography>
                      <Typography variant="h5" component="div">
                        {formatNumber(event.createdBy.followers)}
                      </Typography>
                      <Typography sx={{ mb: 1.5 }} color="text.secondary" variant="body2">
                        Followers
                      </Typography>
                      
                    </CardContent>
                    <CardActions sx={{display: 'flex', justifyContent: 'center', alignContent:'center'}}>
                      <Button size="small" sx={{ mr: 1.5 }}>Contact</Button>
                      <Button variant="contained">Follow</Button>
                    </CardActions>
                    <CardContent>
                      <Typography variant="body2"  color="text.secondary">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                      </Typography>
                      <Box sx={{textAlign: 'left'}}>
                        <Button size="small" sx={{  mt: 2 }}>View More</Button>
                      </Box>
                      <Box className={`${styles.cardGlobalIcon}`} color='#3559E3'><AiOutlineGlobal /></Box>
                    </CardContent>
                  </Card>
                </div>
              </div>
              <Box sx={{textAlign: 'center'}}>
                <Typography size="small" sx={{  mt: 2, color:'#3559E3' }}> <ImFlag sx={{mr: 2}}/> <span>Report this event</span></Typography>
              </Box>


            </div>
          </div>
          <div className="col-md-4">
            <div className='d-flex justify-content-end align-items-center mb-2'>
              {isFav ?  <Box sx={{mr: 2}}>
                <FaHeart onClick={() => setIsFav(false)} color='#c42727'/>
                </Box> 
                : 
                <Box sx={{mr: 2}}>
                  <FaRegHeart onClick={() => setIsFav(true)} />
                </Box> 
              }

            <Box sx={{mr: 1}}><LuShare /></Box>
            </div>
          <Card sx={{ minWidth: 275 }}>
            <CardContent sx={{ textAlign: 'center' }}>
              <Typography variant="h6" component="div">
                $22.23
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" sx={{ color: 'white', textAlign: 'center', height: '49px', width: '100%', backgroundColor: '#D1420D' }}>Tickets</Button>
            </CardActions>
          </Card>
          </div>
        </div>
      </div>
    </>
    }

  </div>
)};



export default SingleEvent;
