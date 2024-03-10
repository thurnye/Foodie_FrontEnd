import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { useLocation } from 'react-router-dom';
import Button from '@mui/material/Button';
import styles from './SingleEvent.module.css';
import userPlaceHolder from '../../../../public/images/placeholders/user.png'
import { FaRegCalendarCheck } from "react-icons/fa6";
import { FaRegCalendar } from "react-icons/fa";
import { AiOutlineGlobal } from "react-icons/ai";
import { LuShare } from "react-icons/lu";
import { ImFlag } from "react-icons/im";
import { FaRegHeart } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { MdExpandMore } from "react-icons/md";
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
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import {getRandomInt, getWeekDay, getTimeZone, getLocalTime, getDateShort, formatNumber, getAllDatesInRange, getTotals, backDatedDate, currencyFormat} from '../../../../util/commons';
import { MdLocationOn } from "react-icons/md";
import { BsClockHistory } from "react-icons/bs";
import { IoTicketOutline } from "react-icons/io5";
import Loading from '../../../Loading/Loading'
import Map from '../../../GoogleMapLocation/GoogleMap/Map';
import ImageLayout from '../Forms/Details/ImageLayout'
import CoverCarousel from './CoverCarousel'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import services from '../../../../util/services' 


const { DateTime } = require('luxon');

const SingleEvent = ({isPreview, isLoaded,}) => {
  const location = useLocation();
  const eventId = location.state?.eventId
  const dispatch = useDispatch()
  const event = useSelector(state => state.eventData.singleEvent);
  // const [event, setEvent] = useState(null)
  const [show, setShow] = useState(false);
  const [dateClicked, setDateClicked] = useState('#dee2e6');
  const [isFav, setIsFav] = useState(false);
  const [loading, setLoading] = useState(true);
  const [showMap, setShowMap] = React.useState(false);
  const currentDate = new Date();
  const [ticketNumber, setTicketNumber] = useState([]);
  const [expanded, setExpanded] = React.useState(false);
  const [activeTickets, setActiveTickets] = useState([]);
  const allDateRange = [];

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  // const fetchEvent = async () => {
  //   try{
  //     const result = await services.findEventById(eventId);
  //     setEvent(result.data)
  //     setLoading(false)
  //   }catch (err){
  //     console.log(err)
  //   }
  // }

  // useEffect(() => {
  //   setLoading(true)
  //   eventId && fetchEvent()
  //   if(isPreview){
  //     setEvent(previewData);
  //     setLoading(false);
  //   }
  // },[eventId, isPreview, previewData])

  useEffect(() => {
    if(event){
      setLoading(false);
    }
  },[event])

  // const { basicInfo, schedule, details, tickets } = event;

  let basicInfo, schedule, details, tickets;
  if (event) {
    ({ basicInfo, schedule, details, tickets } = event);
  } else {
    basicInfo = schedule = details = tickets = null;
  }




  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    width: '120px'
  }));
  
  // get all the date ranges in the schedule data
  schedule?.forEach((el) => {
      const range = getAllDatesInRange(el.start, el.end, 'daily');
      range.forEach((dt) => allDateRange.push(dt))

  })
  const sortedSchedule = allDateRange.filter(dateStr => new Date(dateStr) > currentDate);
  sortedSchedule.sort((a, b) => new Date(a) - new Date(b));
  
  const checkSingleDate = () => {
    const start = basicInfo.dateTime.start; 
    const end = basicInfo.dateTime.end;
    const getStart = new Date(getDateShort(start));
    const getEnd = new Date(getDateShort(end));
    
    console.log({basicInfo});
    console.log({getStart, getEnd});

    if(basicInfo.dateOccurrence === 'single'){
      if(getStart === getEnd){
        return getStart
      }
      const dateRanges = getAllDatesInRange(start, end, 'daily');
      console.log({dateRanges})

      const firstFutureDate = dateRanges.find(date => new Date(date) > currentDate);
      return getDateShort(firstFutureDate);
    }
    if(basicInfo.dateOccurrence === 'recurring'){
      const firstDate = sortedSchedule.find(date => new Date(date) > currentDate);
      return getDateShort(firstDate);
    }

  }


  // get the non-expired tickets
  const isExpired = () => {
    const { sections } = tickets;
    const startDate = basicInfo.dateOccurrence === 'single' ? basicInfo.dateTime.start : sortedSchedule[0];
    const endDate = basicInfo.dateOccurrence === 'single' ? basicInfo.dateTime.end : sortedSchedule[sortedSchedule.length - 1];
    const activeSections = [];

    const updateSections = sections.map((el) => {
        const updatedEl = { ...el }; // Create a copy of the section object
        updatedEl.ticketTypes = el.ticketTypes.map((ticket) => {
            const updatedTicket = Object.assign({}, ticket); // Create a shallow copy of the ticket object
            const { salesEnd, period, periodFrame } = ticket;
            if (periodFrame === 'Before event starts') {
                updatedTicket.stopSales = backDatedDate(startDate, salesEnd, period);
            }
            if (periodFrame === 'Before event ends') {
                updatedTicket.stopSales = backDatedDate(endDate, salesEnd, period);
            }
            return updatedTicket;
        });
        return updatedEl;
    });

    updateSections.forEach((el) => {
        // add section with available capacity
        if (el.capacity !== getTotals(el.ticketTypes, 'capacity')) {
            activeSections.push(el);
        }
    });

    return activeSections;
};


  useEffect(() => tickets && setActiveTickets(isExpired()), [tickets]);

  // Updating the Ticket Count

  const handleIncreaseCount = (id) => {
    const existingTicketIndex = ticketNumber.findIndex(ticket => ticket.id === id);
    if (existingTicketIndex !== -1) {
      const updatedTicketNumber = [...ticketNumber];
      updatedTicketNumber[existingTicketIndex].count += 1;
      updateSold(id, updatedTicketNumber[existingTicketIndex].count);
      setTicketNumber(updatedTicketNumber);
    } else {
      setTicketNumber(prevState => [...prevState, { id, count: 1 }]);
      updateSold(id, 1);
    }
  };

  const handleDecreaseCount = (id) => {
    const existingTicketIndex = ticketNumber.findIndex(ticket => ticket.id === id);
    if (existingTicketIndex !== -1) {
      const updatedTicketNumber = [...ticketNumber];
      updatedTicketNumber[existingTicketIndex].count -= 1;
      if (updatedTicketNumber[existingTicketIndex].count === 0) {
        updatedTicketNumber.splice(existingTicketIndex, 1);
        updateSold(id, 0);
      } else {
        updateSold(id, updatedTicketNumber[existingTicketIndex].count);
      }
      setTicketNumber(updatedTicketNumber);
    }
  };


 const updateSold = (id, count) => {
    if(!isPreview){
      const updatedTickets = activeTickets.map(section => ({
        ...section,
        ticketTypes: section.ticketTypes.map(ticketType => {
          if (ticketType.id === id) {
            return {
              ...ticketType,
              sold: count
            };
          }
          return ticketType;
        })
      }));
      // Here, you may want to update your global state or API with updatedTickets
      setActiveTickets(updatedTickets);

    }
  };

  // End of updating ticket count

  return(
  <div className={` container ${styles.SingleEvent}`}>
     {loading ? (
       <Loading />
       ) : event !== null ? ( // Check if event is not null or undefined
       <>
          <div className="jumbotron jumbotron-fluid border-0 my-4">
            <div className="container">
              <CoverCarousel  images={details.images}/>
            </div>
          </div>
          <div className="card mb-3">
            <div className="row g-0">
              <div className="col-md-8">
                <div className="card-body">
                  <h6 className="card-title">{checkSingleDate()}</h6>
                  <h2 className="card-title"><strong>{basicInfo.eventTitle}</strong></h2>
                  <p className="card-text py-4">{details.summary}</p>
                  <div className={`p-4 d-flex justify-content-between align-items-center ${styles.followContainer}`}>
                    <div className='d-flex align-items-center justify-content-center'>
                      <div>
                        <img src={event?.createdBy?.avatar ? event?.createdBy?.avatar : userPlaceHolder } alt='thumbnail' className={`${styles.avatar}`}/>
                      </div>
                      <div className='px-3'>
                        <p className="card-text mb-0">By <strong>{basicInfo.organizer}</strong> </p>
                        <p className="card-text mt-2">{formatNumber(111493)} followers</p>
                      </div>
                    </div>
                    <div className=''>
                      <Button variant="contained">Follow</Button>
                    </div>
                  </div>

                  {/* Date and Time */}

                  <div className='my-5'>
                    <h4 className='card-title'><strong>Select date and time</strong></h4>
                    <div className="border p-3">
                      <Box sx={{display: 'flex', alignItems:'flex-start'}}>
                        <Box sx={{mr: 1}}>
                          <FaRegCalendarCheck />
                        </Box>
                        <div className='col-11'>
                          <Typography variant="p" component="div">
                          Starts on <b>{checkSingleDate(basicInfo.dateTime.start, basicInfo.dateTime.end)} {getLocalTime(new Date(basicInfo.dateTime.start)).toUpperCase()} {getTimeZone()}</b>
                          </Typography>
                          {basicInfo.dateOccurrence === 'recurring' && <>
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
                            </>
                          }
                        </div>
                      </Box>
                      {basicInfo.dateOccurrence === 'recurring' && <>
                        <div className={`mt-4 ${styles.calendarContainer}`}>
                          <Box sx={{ flexGrow: 1 }}>
                              <Grid container item spacing={1}>
                                <Grid container item spacing={2}>
                                  <React.Fragment>
                                    {sortedSchedule.slice(0, 3).map((el) => 
                                    <Grid item xs={6} sm={4} lg={3} key={getRandomInt()}>
                                      <Item className={`  ${dateClicked === el.id ? styles.activeCalendarCard : ''}`}>
                                        <div onClick={() => setDateClicked(el.id)}>
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
                                          <div className={`border ${styles.day} ${dateClicked === el.id ? styles.activeCalendarCardDay : ''}`}>
                                            <Typography variant="h6" component="div" sx={{ p: 1,}} >
                                            {new Date(el).getDate()}
                                            </Typography>
                                          </div>
                                          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                            {getLocalTime(new Date(el.start))}
                                          </Typography>
                                          </div>
                                        </div>
                                      </Item>
                                    </Grid>
                                    )}
                                    {sortedSchedule.length > 3 && 
                                      <Grid item xs={6} sm={4} lg={3}>
                                        <Item>
                                            <div className='item'>
                                              <div className={` ${styles.calendarCard}`} onClick={() => setShow(true)}>
                                                <Typography variant="h6" component="div" sx={{ fontSize: 15}}>
                                                  <FaRegCalendar />
                                                </Typography>
                                                <Typography variant="h6" component="div" sx={{mt: 1, color: 'black', fontSize: 15, width: '55px'}}>More options</Typography>
                                              </div>
                                            </div>
                                        </Item>
                                      </Grid>
                                    }  
                                  </React.Fragment>
                                </Grid>
                              </Grid>
                          </Box>

                        </div>
                      </>}

                    </div>
                  </div>

                  {/* Location */}

                  <div className='mb-5'>
                    <h4 className='card-title'><strong>Location</strong></h4>
                    <Box sx={{display: 'flex', alignItems:'flex-start'}}>
                        <Box sx={{mr: 1}}>
                          <MdLocationOn />
                        </Box>
                        <div >
                          {basicInfo.locationState === 'online event' && 
                            <Typography variant="p" component="div" color="text.primary">
                              <b>Online</b>
                            </Typography>
                          }
                          {basicInfo.locationState === 'to be announced' && 
                            <Typography variant="p" component="div">
                              <b>To be announced</b>
                            </Typography>
                          }
                          {basicInfo.locationState === 'venue' && <>
                            <Typography variant="p" component="div">
                              <b>{basicInfo.location.location.name}</b>
                            </Typography>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            {basicInfo.location.location.formattedAddress}
                            </Typography>
                            <Button variant="text" sx={{pl: 0}} onClick={() => setShowMap(!showMap)}>{showMap ? 'Hide Map' : 'Show Map'}</Button>
                            <Box display={showMap ? 'block' : 'none'}>
                              <Map isLoaded={isLoaded} location={basicInfo.location.location}/>
                            </Box>
                          </>}
                        </div>
                      </Box>
                  </div>

                  {/* Refund Policy */}
                  <div className='mb-5'>
                    <h4 className='card-title'><strong>Refund Policy</strong></h4>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                      Contact the organizer to request a refund.
                    </Typography>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                      We do not handle refund fees, and fees are nonrefundable.
                    </Typography>
                  </div>

                  {/* About this event */}
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
                    <Box sx={{ fontSize: 14, mt:4 }} >
                    {/* {parser(event.eventDetails.eventDescription)} */}
                    {details.about.map((el, i) => {

                    return <Box sx={{width: '100%', mb: 3}}>
                      {el.type === 'text' && <Box>
                          {parser(el.value)}
                      </Box>}

                      {el.type === 'image' &&  <Box sx={{ maxWidth: 650, m: 'auto'}}>
                              {!el.isMultiple ? 
                                  <Box sx={{mb: 3}}>
                                      <img src={el.value} 
                                      className="card-img" 
                                      alt="event_banner"
                                      style={{ objectFit: 'contain'}}
                                      />
                                  </Box>
                              : 
                                  <Box>
                                      <Card sx={{boxShadow: 'none', border:0}}>
                                          <CardContent>
                                              <ImageLayout layout={el.layout} imageList={el.value}/>
                                              {/* <Box sx={{ flexGrow: 1 }}>
                                                  <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                                                      {el.value.map((val, index) => (
                                                      <Grid item xs={12} sm={4} md={4} key={index}>
                                                          <img src={val} 
                                                              className="card-img" 
                                                              alt="event_banner"
                                                              style={{ width: '10rem', objectFit: 'contain'}}
                                                              />
                                                      </Grid>
                                                      ))}
                                                  </Grid>
                                                  </Box> */}

                                          </CardContent>
                                      </Card>
                                  </Box>
                              }
                      </Box>}

                      {el.type === 'video' && <Box sx={{ maxWidth: 650, m: 'auto'}}>
                          <Box sx={{mb:3}}>
                              {parser(el.value)}
                          </Box>
                      </Box>}
                    </Box>
                    })}
                    </Box>
                  </div>

                  {/* FAQs */}
                  {details.faqs.length > 0 && 
                    <div className='mb-5'>
                      <h4 className='card-title mb-3'><strong>Frequently Asked Questions</strong></h4>
                      <div >
                        {details.faqs?.map((el) => <Accordion sx={{ maxWidth: 650, mb: 1}} key={getRandomInt()}>
                          <AccordionSummary
                              expandIcon={<MdExpandMore />}
                              aria-controls="panel1a-content"
                              id="panel1a-header"
                          >
                              <Typography>{el.ques}</Typography>
                          </AccordionSummary>
                          <AccordionDetails sx={{background: '#F8F7FA', m: 2}}>
                              <Typography sx={{ pt: 2, pb: 2}}>
                              {el.ans}
                              </Typography>
                          </AccordionDetails>
                          </Accordion>)
                        }
                      </div>
                    </div>
                  }

                  {/* Tags */}
                  {basicInfo.tags.length > 0 && 
                    <div className='mb-5'>
                      <h4 className='card-title mb-3'><strong>Tags</strong></h4>
                      <div className='d-flex flex-wrap'>
                        {basicInfo.tags.map((el) => <Typography sx={{fontSize: 12, mb:3, mr: 2, p: 1, backgroundColor: '#EEEDF2', borderRadius: 5 }} key={getRandomInt()}>{el.label}</Typography>)}
                      </div>
                    </div>
                  }

                  {/* About the Organiser */}
                  <div className='mb-5'>
                    <h4 className='card-title'><strong>About the Organizer</strong></h4>
                    <div>
                      <Card sx={{ minWidth: 275, textAlign: 'center' , pt: 3,  pb: 3}}>
                        <CardContent>
                          <Box sx={{margin: 'auto'}}>
                            <img src={event?.createdBy?.avatar ? event?.createdBy?.avatar : userPlaceHolder } alt='thumbnail' className={styles.organizerCard}/>
                          </Box>
                          <Typography sx={{ fontSize: 14, mt: 4 }} color="text.secondary" gutterBottom>
                            Organized by
                          </Typography>
                          <Typography variant="h5" component="div" sx={{ mb: 3 }} >
                            {basicInfo.organizer}
                          </Typography>
                          <Typography variant="h5" component="div">
                            {formatNumber(111493)}
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

                  {/* Report This Event */}
                  <Box sx={{textAlign: 'center'}}>
                    <Typography size="small" sx={{  mt: 2, color:'#3559E3' }}> <ImFlag sx={{mr: 2}}/> <span>Report this event</span></Typography>
                  </Box>


                </div>
              </div>
              <div className="col-md-4">
                <div className='d-flex justify-content-end align-items-center mb-3'>
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
                {activeTickets.length > 0 && 
                  <Card sx={{ minWidth: 275 }}>
                    <CardContent>
                      {activeTickets.map((el, index) =>
                        <Accordion key={getRandomInt()} expanded={expanded === `panel${index}`} onChange={handleChange(`panel${index}`)}>
                          <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1-content"
                            id="panel1-header"
                          >
                            <Typography>{el.name}</Typography>
                          </AccordionSummary>
                          <AccordionDetails>
                            <Box>
                              {el.ticketTypes.map(ticket =>
                                <Box key={getRandomInt()}>
                                  <Box sx={{ textAlign: 'start', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <Typography variant="body1" component="div" sx={{ flexGrow: 1, mr: 1, textWrap: 'wrap' }}>
                                      {ticket.name}
                                    </Typography>
                                    <Box sx={{
                                      display: 'flex',
                                      justifyContent: 'center',
                                      alignItems: 'center'
                                    }}>
                                      <Button variant="contained"  disabled={
                                      ticketNumber.find(item => item.id === ticket.id)?.count === undefined || 
                                      ticketNumber.find(item => item.id === ticket.id)?.count === 0 ||
                                      parseInt(ticket.capacity) === parseInt(ticket.sold)
                                      } onClick={() => handleDecreaseCount(ticket.id)} sx={{
                                      width: 25, minWidth: 25}}>
                                        <RemoveIcon/>
                                      </Button>
                                        
                                      <Typography variant="h6" component="div" sx={{ mx: 2 }}>
                                        {ticketNumber.find(item => item.id === ticket.id)?.count || 0}
                                      </Typography>

                                      <Button variant="contained"  disabled={parseInt(ticket.capacity) === parseInt(ticket.sold) ? true : false} onClick={() => handleIncreaseCount(ticket.id)} sx={{
                                      width: 25, minWidth: 25}}><AddIcon/></Button>
                                      
                                    </Box>
                                  </Box>
                                  <Typography variant="body2" component="div">
                                    {ticket.type === 'Free' ? 'Free' : currencyFormat.format(ticket.price)}
                                  </Typography>
                                </Box>
                              )}
                            </Box>
                          </AccordionDetails>
                        </Accordion>
                      )}
                    </CardContent>
                    <CardActions>
                      <Button size="small" sx={{ color: 'white', textAlign: 'center', height: '49px', width: '100%', backgroundColor: '#D1420D' }}>Tickets</Button>
                    </CardActions>
                  </Card>
                }
              </div>
            </div>
          </div>
        </>
      ) : (
        // Render loading indicator or placeholder content here
        <Loading />
      )}
  </div>
)};



export default SingleEvent;
