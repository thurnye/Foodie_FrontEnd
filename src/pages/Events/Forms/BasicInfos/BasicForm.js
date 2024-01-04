import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { Box, Typography, Container, Button, Stack } from '@mui/material';
import { CiText } from "react-icons/ci";
import { GrMapLocation } from "react-icons/gr";
import { ImCalendar } from "react-icons/im";
import { FormContainer, Input, LocationInput, ReactSelectInput, DateAndTimeInput, CheckBoxField } from '../FormContainer/FormContainer';
import metaData from '../../../../components/metaData';
import FormDirection from '../../../../components/Dashboard/Events/Forms/FormDirection/FormDirection';

const tagsOptions = []
metaData[0].tags.forEach(el => {
    tagsOptions.push(
        { value: el, label: el }
    )
});

const BasicForm = ({isLoaded, setData}) => {
    const [locationValue, setLocationValue] = React.useState('venue');
    const [dateOccurrence, setDateOccurrence] = React.useState('single');
    const [proceed, setProceed] = useState(false);
    
  


    const onSubmit = data => {
        if(data){
            let {location, starts, ends, ...rest} = data;
            starts = dateOccurrence === 'single' ? starts : ''
            ends = dateOccurrence === 'single' ? ends : ''
            location = locationValue === 'venue' ? location : locationValue
            const newData = { location, starts, ends, ...rest };
            setData(newData);
            setProceed(true);
        }
    };

    return (
        <Container>
            <FormContainer onSubmit={onSubmit}>
                {/* BASIC INFO */}
                <Box sx={{display: 'flex', alignItems:'flex-start'}}>
                    <Box sx={{mr: 3, mt:-1, fontSize: 35 }} color="text.secondary">
                        <CiText />
                    </Box>
                    <div>
                        <Typography variant="h5" component="div">
                            <b>Basic Info</b>
                        </Typography>
                        <Typography sx={{ fontSize: 14, mb: 2 }} color="text.secondary" gutterBottom>
                            Name your event and tell event-goers why they should come. Add details that highlight what makes it unique.
                        </Typography>
                            <Box>
                                <Input 
                                    type="text"
                                    name="eventTitle" 
                                    label="Event Title"
                                    placeholder="Be clear and descriptive"
                                    isRequired={true} 
                                    errorMessage='Event title is reuired!!'
                                />
                            </Box>
                            <Input
                                type="text"
                                name="organizer"
                                label="Organizer"
                                placeholder="Tell attendees who is organizing this event"
                                isRequired={true}
                            >
                                <Box>
                                    <Typography variant="caption" display="block" gutterBottom>
                                        This profile describes a unique organizer and shows all of the events on one page.
                                        <Link to={"/eventbrit/organizer"} style={{color: '#3E64FF'}}>View Organizer Info</Link>
                                    </Typography>
                                </Box>
                            </Input>
                            <Box>
                                <ReactSelectInput name="tags" options={tagsOptions} label="Tags" isMulti={true}/>
                            </Box>


                            
                    </div>
                </Box>

                <Box sx={{mt:4, mb: 4}}>
                    <hr></hr>
                </Box>

                {/* Location */}
                <Box sx={{display: 'flex', alignItems:'flex-start'}}>
                    <Box sx={{mr: 3, mt:-1, fontSize: 35 }} color="text.secondary">
                        <GrMapLocation />
                    </Box>
                    <div>
                        <Typography variant="h5" component="div">
                            <b>Location</b>
                        </Typography>
                        <Typography sx={{ fontSize: 14, mb: 2 }} color="text.secondary" gutterBottom>
                            Help people in the area discover your event and let attendees know where to show up.
                        </Typography>

                        <Box>
                        <Stack spacing={2} direction="row">
                            <Button variant="outlined" onClick={() => setLocationValue('venue')}>Venue</Button>
                            <Button variant="outlined" onClick={() => setLocationValue('online')}>Online event</Button>
                            <Button variant="outlined" onClick={() => setLocationValue('toBeAnnounced')}>To be announced</Button>
                        </Stack>
                        </Box>

                        <Box sx={{ width: '100%' }}>
                            <Box>
                                {locationValue === 'venue' && <>
                                    <Typography sx={{ fontSize: 14, mb: 2 }} >
                                        Venue Location
                                    </Typography>
                                    <LocationInput
                                        name={'location'}
                                        label={'Location'}
                                        isLoaded={isLoaded}
                                        isRequired={locationValue === 'venue' ? true : false}
                                        placeholder='search for a venue or address'
                                    />
                                </>}
                            
                                {locationValue === 'online' && (
                                    <>
                                        <Typography sx={{ fontSize: 14, mb: 2 }} color="text.secondary">
                                            Online events have unique event pages where you can add links to live streams and more
                                        </Typography>
                                    </>
                                )}

                                
                            </Box>
                        </Box>
                    
                    </div>
                </Box>

                <Box sx={{mt:4, mb: 4}}>
                    <hr></hr>
                </Box>

                {/* DATE AND TIME */}
                <Box sx={{display: 'flex', alignItems:'flex-start'}}>
                    <Box sx={{mr: 3, mt:-1, fontSize: 35 }} color="text.secondary">
                        <ImCalendar />
                    </Box>
                    <div>
                        <Typography variant="h5" component="div">
                            <b>Date And Time</b>
                        </Typography>
                        <Typography sx={{ fontSize: 14, mb: 2 }} color="text.secondary" gutterBottom>
                            Date and time Tell event-goers when your event starts and ends so they can make plans to attend.
                        </Typography>

                        <Box>
                        <Stack spacing={2} direction="row">
                            <Button variant="outlined" onClick={() => setDateOccurrence('single')}>Single</Button>
                            <Button variant="outlined" onClick={() => setDateOccurrence('recurring')}>Recurring Event</Button>
                        </Stack>
                        </Box>

                        <Box sx={{ width: '100%' }}>
                            <Box>
                                {dateOccurrence === 'single' && <>
                                    <Typography sx={{ fontSize: 14, mb: 2 }} >
                                    Single event happens once and can last multiple days
                                    </Typography>
                                    <Box>
                                        <DateAndTimeInput name="starts" minDate={new Date()} label='Event Starts' isRequired={dateOccurrence === 'single' ? true : false}/>
                                        <DateAndTimeInput name="ends" minDate={new Date()} label='Event Ends' isRequired={dateOccurrence === 'single' ? true : false}/>
                                    </Box>
                                </>}
                            
                                {dateOccurrence === 'recurring' && (
                                    <>
                                        <Typography sx={{ fontSize: 14, mb: 2 }} color="text.secondary">
                                            You’ll be able to set a schedule for your recurring event in the next step. Event details and ticket types will apply to all instances.
                                        </Typography>
                                    </>
                                )}

                                
                            </Box>
                            <CheckBoxField name='displayEndTime' defaultChecked={true} label={
                                <Box sx={{display: 'flex', flexDirection: 'column'}}>
                                    <Typography sx={{ fontSize: 14, p: 0 }} >
                                        Display end time
                                    </Typography>
                                    <Typography sx={{ fontSize: 12, mb: 2 }} color="text.secondary" >
                                        The end time of your event will be displayed to attendees.
                                    </Typography>
                                </Box>
                            }
                            />
                        </Box>
                    
                    </div>
                </Box>

                <FormDirection onSubmit={onSubmit} proceed={proceed}/>
            </FormContainer>

        </Container>
    );
}

export default BasicForm;
