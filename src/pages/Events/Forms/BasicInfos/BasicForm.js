import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { Box, Typography, Container, Button, Stack, FormHelperText } from '@mui/material';
import TextField from '@mui/material/TextField';
import { CiText } from "react-icons/ci";
import { GrMapLocation } from "react-icons/gr";
import { ImCalendar } from "react-icons/im";
import { FormContainer, Input, LocationInput, ReactSelectInput, CheckBoxField, TimeInput } from '../FormContainer/FormContainer';
import metaData from '../../../../components/metaData';
import FormDirection from '../../../../components/Dashboard/Events/Forms/FormDirection/FormDirection';
import DateRangePicker from './DateRangePicker'
import {getDateShort, mergeTimeToDate} from '../../../../util/commons'

const tagsOptions = []
metaData[0].tags.forEach(el => {
    tagsOptions.push(
        { value: el, label: el }
    )
});

const BasicForm = ({isLoaded, setData, defaultValues}) => {
    const [locationValue, setLocationValue] = React.useState(defaultValues.locationState);
    const [dateOccurrence, setDateOccurrence] = React.useState(defaultValues.dateOccurrence);
    const [proceed, setProceed] = useState(false);
    const [selected, setSelected] = useState(defaultValues.dateTime.start ? true : false);
    const [noDateError, setNoDateError] = useState (false);
    const [dateState, setDateState] = useState({
        start: defaultValues.dateTime.start,
        end: defaultValues.dateTime.end,
    });
  

    const onSubmit = data => {
        if(data){
           const {endTime, startTime} = data;
           const { start, end } = dateState;
            //    merge the date and time together
            if (dateOccurrence === 'single' && (start === ""  || end === "" || startTime === ""  || endTime === "")) {
            return setNoDateError(true);
            }
            setNoDateError(false);
            const mergedStart = mergeTimeToDate(new Date(start),  new Date(startTime));
            const mergedEnd = mergeTimeToDate( new Date(end),  new Date(endTime));
            setDateState(prevState => ({
                ...prevState,
                start: mergedStart,
                end: mergedEnd
            }));
            setData({...data, 
                dateTime: {start: mergedStart, end: mergedEnd}, 
                locationState: locationValue, 
                dateOccurrence 
            });
            setProceed(true);
        }
    };

    // Adding the date range date fo single date
    const handleDateChange = (dt) => {
        const {startDate, endDate} = dt;
        setDateState(prevState => ({
            ...prevState,
            start: startDate,
            end: endDate
          }));
    }

    return (
        <Container>
            <FormContainer onSubmit={onSubmit} defaultValues={defaultValues}>
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
                                    errorMessage='Event title is required!!'
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
                        {['Venue', 'Online event', 'To be announced'].map((el) => <Button 
                            sx={{}}
                            variant={locationValue === el.toLowerCase() ? 'contained' : 'outlined'}
                            onClick={() => {
                                setLocationValue(el.toLowerCase());
                            }}
                            >{el}</Button>)}
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

                                    {/* will add later */}
                        {/* <Box>
                        <Stack spacing={2} direction="row">
                            {[{label:'Single', name:'single'}, {label:'Recurring Event', name:'recurring'}].map((el) => <Button 
                            sx={{}}
                            variant={dateOccurrence === el.name ? 'contained' : 'outlined'}
                            onClick={() => {
                                setDateOccurrence(el.name);
                            }}
                            >{el.label}</Button>)}
                        </Stack>
                        </Box> */}

                        <Box sx={{ width: '100%', mt: 1 }}>
                            <Box>
                                {dateOccurrence === 'single' && <>
                                    <Typography sx={{ fontSize: 14, }} color="text.secondary">
                                        Single event happens once and can last multiple days with a fix time.
                                    </Typography>

                                    <Box>
                                        <DateRangePicker
                                            buttonText={dateState.start ? 'Edit Date' : 'Add Date'}
                                            onChange={(dateRange) => {
                                                handleDateChange(dateRange);
                                                setNoDateError(true);
                                            }}
                                            onSubmit={(dateRange) => {
                                                handleDateChange(dateRange); 
                                                setSelected(true);
                                            }}
                                            defaultDate={{
                                                "startDate": dateState.start,
                                                "endDate": dateState.end
                                            }}
                                        />
                                        {noDateError && 
                                            <FormHelperText id="component-error-text" sx={{ color: '#ff604f', mb: 3 }}>
                                                Start and End Date is needed for this option.
                                            </FormHelperText>
                                        }
                                        <Box>
                                            
                                            {selected && Object.entries(dateState).map(([key, value]) => (
                                                <Box key={key}>
                                                    <Typography sx={{ fontSize: 14, mb: 2, fontWeight: 700 }} >
                                                        {key}
                                                    </Typography>
                                                    <Box
                                                    sx={{
                                                        display:'flex',
                                                        justifyContent: 'space-around',
                                                        alignItems: 'center'
                                                    }}
                                                    >
                                                    <TextField  value={getDateShort(value)} id="fullWidth" disabled size='small'/>
                                                    <TimeInput 
                                                        name={`${key}Time`} 
                                                        label={`${key} Time`} 
                                                        isRequired={dateOccurrence === 'single' ? true : false}
                                                    />
                                                    </Box>
                                                </Box>
                                            ))}
                                        </Box>
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
