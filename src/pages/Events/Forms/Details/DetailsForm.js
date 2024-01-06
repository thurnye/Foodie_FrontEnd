import React,{useState} from 'react';
import FormDirection from '../../../../components/Dashboard/Events/Forms/FormDirection/FormDirection';
import Box from '@mui/material/Box';
import { FormContainer, Input, LocationInput, ReactSelectInput, DateAndTimeInput, CheckBoxField } from '../FormContainer/FormContainer';
import SwipeableCarousel from './SwipeableCarousel'
import Typography from '@mui/material/Typography';
import { Card, CardContent } from '@mui/material';
import { MdOutlineEdit } from "react-icons/md";
import About from './About';

const defaultTitle = 'Festival 2024'

const DetailsForm = () => {
    const [proceed, setProceed] = useState(false);
    const [eventImages, setEventImages] = useState([])
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

    const onSubmit = data => {
        if(data){
            console.log(data)
        }
    };
    return (
        <div>
                {/* <SwipeableCarousel setEventImages={setEventImages} eventImages={eventImages}/> */}
            <FormContainer onSubmit={onSubmit}>
                {/* OverView */}
                <Box sx={{mb: 2}}>
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
                                    A short and sweet sentence about your event.
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
                                        <Typography variant="body1" gutterBottom>
                                            Summary
                                        </Typography>

                                        <Typography variant="caption" color="text.secondary" gutterBottom>
                                            Grab people's attention with a short description about your event. Attendees will see this at the top of your event page.(140 characters max)
                                        </Typography>

                                        <Box sx={{mt:1}}>
                                            <Input 
                                                type="text"
                                                name="summary" 
                                                label="Summary"
                                                placeholder="Be clear and descriptive"
                                                isRequired={true} 
                                                errorMessage='Summary is required!'
                                            />
                                        </Box>
                                    </Box>
                                </CardContent>
                            </Card>
                        </Box>
                    }
                </Box>

                {/* About */}
                   
            </FormContainer>
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
                                <Typography variant="body2" gutterBottom>
                                    Use this section to provide more details about your event. You can include things to know, venue information, parking, accessibility options-anything that will help people know what to expect.
                                </Typography>
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
                                        <About/>
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
