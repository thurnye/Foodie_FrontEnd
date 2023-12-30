import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Typography, Container, TextField, Button } from '@mui/material';
import { CiText } from "react-icons/ci";
import { FormContainer, Input, SelectInput, ReactSelectInput } from '../FormContainer/FormContainer';
import metaData from '../../../../components/metaData';

const BasicForm = () => {

    const tagsOptions = []
    metaData[0].tags.forEach(el => {
        tagsOptions.push(
            { value: el, label: el }
        )
    })
    const onSubmit = data => console.log(data);

    return (
        <Container>
            {/* BASIC INFO */}
            <Box sx={{display: 'flex', alignItems:'flex-start'}}>
                <Box sx={{mr: 3, mt:-1, fontSize: 35 }} color="text.secondary">
                    <CiText />
                </Box>
                <div >
                    <Typography variant="h5" component="div">
                        <b>Basic Info</b>
                    </Typography>
                    <Typography sx={{ fontSize: 14, mb: 2 }} color="text.secondary" gutterBottom>
                        Name your event and tell event-goers why they should come. Add details that highlight what makes it unique.
                    </Typography>
                    <FormContainer onSubmit={onSubmit}>
                        <Box>
                            <Input 
                                type="text"
                                name="EventTitle" 
                                label="Event Title"
                                placeholder="Be clear and descriptive"
                                isRequired={true} 
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
                        
                        {/* <Box>
                            <SelectInput name="gender" options={["female", "male", "other"]} label="Gender" />
                        </Box> */}
                        <Box>
                            <ReactSelectInput name="tags" options={tagsOptions} label="Tags" isMulti={true}/>
                        </Box>
                        <Button type="submit"> Submit</Button>
                    </FormContainer>
                    </div>
            </Box>
        </Container>
    );
}

export default BasicForm;
