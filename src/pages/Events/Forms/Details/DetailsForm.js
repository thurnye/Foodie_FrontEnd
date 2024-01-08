import React,{useState} from 'react';
import FormDirection from '../../../../components/Dashboard/Events/Forms/FormDirection/FormDirection';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Card, CardContent, CardMedia } from '@mui/material';
import { MdOutlineEdit } from "react-icons/md";
import About from './About';
import FAQs from './faqs';
import OverView from './Overview';
import parser from 'html-react-parser';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { getRandomInt } from '../../../../util/commons';
import { MdExpandMore } from "react-icons/md";
import SwipeableCarousel from './SwipeableCarousel'


const defaultTitle = 'Festival 2024'

const DetailsForm = ({setData}) => {
    const [proceed, setProceed] = useState(false);
    const [about, setAbout] = useState([])
    const [faqs, setFaqs] = useState([])
    const [eventImages, setEventImages] = useState([])
    const [summary, setSummary] = useState('')
    const [activeSection, setActiveSection] = useState("")
    const [isHovered, setIsHovered] = useState("");

    const getEditIcons = (section) => <Box sx={{ maxWidth: '100%', flexGrow: 1, position: 'relative' }}>
    <Box
        sx={{
        position: 'absolute',
        top: 6,
        right: 6,
        height: '100%',
        backgroundColor: '#E9EDFC',
        zIndex: 1,
        color: '#3559E3'
        }}
    >
        <Card sx={{ width: 25, height: 25, borderRadius: '50%', textAlign: 'center', background:'inherit' }} onClick={() => setActiveSection(section)}>
        <Typography>
            <MdOutlineEdit color='#3559E3'/>
        </Typography>
        </Card>
    </Box>
    </Box>

    const onSubmit = () => {
        const details = {
            images: eventImages,
            summary,
            ...about,
            ...faqs
        }
        console.log(details)
        setData(details)
    };




    return (
        <div>

            <SwipeableCarousel setEventImages={setEventImages} eventImages={eventImages}/>

            {/* Overview */}
            <Box sx={{mb: 2, mt: 2}}>
                {activeSection !== 'overviewForm' &&
                <Box sx={{}} onClick={() => setActiveSection('overviewForm')}>
                    <Card 
                        onMouseEnter={() => setIsHovered('overviewForm')}
                        onMouseLeave={() => setIsHovered('')}
                    >
                        {isHovered === "overviewForm" && getEditIcons('overviewForm')}
                        <CardContent>
                                <Typography variant="h3" gutterBottom sx={{mb:3}}>
                                {defaultTitle}
                                </Typography>
                                <Typography variant="body2" gutterBottom>
                                    {summary ? summary :  'A short and sweet sentence about your event.'}
                                </Typography>
                        </CardContent>
                    </Card>
                </Box>
                }
                {activeSection === 'overviewForm' && 
                    <Box>
                        <Card >
                            <CardContent>
                                <Typography variant="h5" gutterBottom sx={{mb:3}}>
                                    Event Overview
                                </Typography>
                                <Box sx={{mb:3}}>
                                    <Typography variant="body1" gutterBottom>
                                        Event title
                                    </Typography>
                                    <Typography variant="caption" color="text.secondary">
                                        Title : {defaultTitle}
                                    </Typography>

                                </Box>

                                <Box sx={{mb:2}}>
                                    <OverView 
                                    setSummary={setSummary} 
                                    summary={summary}
                                    setActiveSection={setActiveSection}
                                    />
                                    
                                </Box>
                            </CardContent>
                        </Card>
                    </Box>
                }
            </Box>

            {/* About */}
            <Box sx={{mb: 2}}>
                {activeSection !== 'aboutForm' &&
                <Box sx={{ }} onClick={() => setActiveSection('aboutForm')}>
                    <Card 
                        onMouseEnter={() => setIsHovered('aboutForm')}
                        onMouseLeave={() => setIsHovered("")}
                    >
                        {isHovered === 'aboutForm' && getEditIcons('aboutForm')}
                        <CardContent>
                            <Typography variant="h5" gutterBottom sx={{mb:3}}>
                                About this event
                            </Typography>
                            {about?.length === 0 ? <>
                                <Typography variant="body2" gutterBottom>
                                    Use this section to provide more details about your event. You can include things to know, venue information, parking, accessibility options-anything that will help people know what to expect.
                                </Typography>
                            </> : <>
                                    {about?.about?.map((el, i) => {

                                        return <Box sx={{width: '100%', mb: 3}}>
                                            
                                            {el.type === 'text' && <Box>
                                                {parser(el.value)}
                                            </Box>}

                                            {el.type === 'image' &&  <Box sx={{ maxWidth: 650, m: 'auto'}}>
                                                <Box sx={{mb: 3}}>
                                                    <img src={el.value} className="card-img" alt="event_banner" />
                                                </Box>
                                            </Box>}

                                            {el.type === 'video' && <Box sx={{ maxWidth: 650, m: 'auto'}}>
                                                <Box sx={{mb:3}}>
                                                    {parser(el.value)}
                                                </Box>
                                            </Box>}
                                        </Box>
                                    })}
                                </>
                                }
                        </CardContent>
                    </Card>
                </Box>
                }
                {activeSection === 'aboutForm' && 
                    <Box sx={{}}>
                        <Card >
                            <CardContent>
                                <Typography variant="h5" gutterBottom sx={{mb:3}}>
                                    About this event
                                </Typography>
                                <Box sx={{mb:3}}>
                                    <Typography variant="caption" color="text.secondary">
                                        Add more details about your event and include what people can expect if they attend.
                                    </Typography>

                                </Box>

                                <Box sx={{mb:2}}>
                                    <About 
                                    setAbout={setAbout} 
                                    about={about}
                                    setActiveSection={setActiveSection}
                                    />
                                </Box>
                            </CardContent>
                        </Card>
                    </Box>
                }
            </Box>

            {/* FAQ*/}
            <Box sx={{mb: 2}}>
                {activeSection !== 'faqForm' &&
                <Box sx={{ }}>
                    <Card 
                        onMouseEnter={() => setIsHovered('faqForm')}
                        onMouseLeave={() => setIsHovered("")}
                    >
                        {isHovered === 'faqForm' && getEditIcons('faqForm')}
                        <CardContent>
                        {faqs.length === 0 ? <>
                            <Typography variant="h5" gutterBottom sx={{mb:3}}>
                                Add more sections to your event page
                            </Typography>
                            
                            <Typography variant="body2" gutterBottom>
                                Make your event stand out even more. These sectons help attendees find information and answers their questions - which means more ticket sales and less time answering messages.
                            </Typography>

                                </> : <>
                                    <Typography variant="h5" gutterBottom sx={{mb:3}}>
                                        Frequently Asked Questions
                                    </Typography>
                                    {faqs?.faqs?.map((el) => <Accordion sx={{ maxWidth: 650, mb: 1}} key={getRandomInt()}>
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
                                        </Accordion>)}
                                </>}
                            
                        </CardContent>
                    </Card>
                </Box>
                }
                {activeSection === 'faqForm' && 
                    <Box sx={{}}>
                        <Card >
                            <CardContent>
                                <Typography variant="h5" gutterBottom sx={{mb:3}}>
                                    FAQ
                                </Typography>
                                <Box sx={{mb:3}}>
                                    <Typography variant="caption" color="text.secondary">
                                        Answer questions your attendees may have about the event, like parking, accessibility, refunds, and other informations.
                                    </Typography>
                                </Box>

                                <Box sx={{mb:2}}>
                                    <FAQs 
                                    setFaqs={setFaqs} 
                                    faqs={faqs}
                                    setActiveSection={setActiveSection}
                                    />
                                </Box>
                            </CardContent>
                        </Card>
                    </Box>
                }
            </Box>

            <FormDirection onSubmit={onSubmit} proceed={proceed}/>
        </div>
    );
}

export default DetailsForm;
