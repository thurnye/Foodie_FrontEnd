import React,{useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import { FormHelperText } from '@mui/material';
import { FormContainer, Input, SelectInput, AmountInput, TextArea } from '../FormContainer/FormContainer';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { getRandomInt, getTotals } from '../../../../../util/commons';
import Alert from '@mui/material/Alert';
import _ from 'lodash';






export default function TicketTypes({remainingTicket,open, setOpen, section, setSections, sections, ticketType, setTicketType, editTicketType, SectionCapacity}) {
    

    const [type, setType] = useState();
    const [typeError, setTypeError] = useState(false);
    const [sectionOptions, setSectionOptions] = useState([]);
    const [message, setMessage] = useState()

    useEffect(() => {
        setType(ticketType)
    },[ticketType])

    const onSubmit = (data) => {
        if (!type) {
        setTypeError(true);
        return;
        }
        
    
        setTypeError(false);
        
        if(remainingTicket < data.capacity){
            setMessage(`exceeded remaining capacity of ${remainingTicket} ticket(s)`);
            return;
        }
        setMessage();
        if(editTicketType){
            // Updating
            const oldSection = sections.find((el) => el.name === editTicketType.section)
            const foundSection = sections.find((el) => el.name === data.section);
            if (foundSection) {
                const newTicket = { ...data, type, sectionId: foundSection.id };
                const existingTicketIndex = foundSection.ticketTypes.findIndex(ticketType => ticketType.id === editTicketType.id);

                if (existingTicketIndex !== -1) {
                    // Ticket exists, update it with a deep copy
                    foundSection.ticketTypes[existingTicketIndex] = _.merge({}, foundSection.ticketTypes[existingTicketIndex], newTicket);
                }  
                if(existingTicketIndex){
                   
                    //check to see if it exceed the section capacity
                    if(newTicket.capacity > foundSection.capacity){
                        setMessage(`cannot exceeded capacity of ${foundSection.capacity} ticket(s) for ${data.section} section`);
                        return;
                    }
                    //check to  see if it exceeds the remaining ticket ticket capacity
                    const foundSectionRemainingCapacity = foundSection.capacity - getTotals(foundSection.ticketTypes, 'capacity');
                    if(newTicket.capacity > foundSectionRemainingCapacity){
                        setMessage(`cannot exceeded remaining capacity of ${foundSectionRemainingCapacity} ticket(s) for ${data.section} section`);
                        return;
                    }

                     // remove the existing ticket from the old section tickeTypes
                     oldSection.ticketTypes = oldSection.ticketTypes.filter(ticketType => ticketType.id !== editTicketType.id);
                    
                    //Ticket doesn't exist, add it
                    foundSection.ticketTypes.push(newTicket);
                }
                // Now update the sections array if needed
                
            }
    }
        // Creating New Ticket
        if(!editTicketType){
            if (data && type) {
            const newData = { id: getRandomInt(), ...data, type, sold: 0 };
            const findOne = sections.find((el) => el.name === data.section);
        
            if (findOne) {
                const { ticketTypes } = findOne;
                findOne.ticketTypes = [...ticketTypes, {...newData, sectionId: findOne.id}];
            } else {
                const newSectionId = getRandomInt()
                const defaultSectionName = "General Admission"
                // When there is no section so we create a new one
                const adjustedData = { 
                    ...newData, 
                    section: defaultSectionName, 
                    sectionId: newSectionId
                };
                const defaultSection = {
                id: newSectionId,
                name: defaultSectionName,
                capacity: data.capacity,
                currency: {
                        label: 'US Dollar - USD',
                        currency: 'US Dollar',
                        symbol: '$',
                    },
                ticketTypes: [adjustedData],
                };
                setSections((prev) => [...prev, defaultSection])
                // sections.push(defaultSection);
            }
        
            }
        }
        handleClose();
    };
    
    useEffect(() => {
            const options = sections?.map((el) => ({label: el.name, value: el.name}))
        setSectionOptions(options);
     
    },[sections, open])

    const handleClose = () => {
        setOpen(!open)
        setMessage('')
        setTypeError('')
    }





    return (
    <div>
        <Box sx={{position:'relative'}}>
            <Drawer
            anchor={'right'}
            open={open}
            onClose={() => handleClose()}
            sx={{
                width: 240,
                flexShrink: 0,
                [`& .MuiDrawer-paper`]: { width: {xs: '95%', sm: 550}, boxSizing: 'border-box' },
            }}
            >
            <Typography variant="h6" gutterBottom sx={{p: 2}}>
                Add tickets {remainingTicket}
            </Typography>
            <Divider sx={{p:0}}/>
            <Box sx={{p:2}}>
                {message && <Alert severity="error" sx={{mb: 2}}>{message}</Alert>}

                <Stack spacing={2} direction="row" sx={{justifyContent: 'space-between'}}>
                    {['Paid', 'Free', 'Donation'].map((el) => <Button 
                    sx={{}}
                    variant={type === el ? 'contained' : 'outlined'}
                    onClick={() => {
                        setType(el);
                        setTicketType && setTicketType(el)
                    }}
                    >{el}</Button>)}
                </Stack>
                {typeError && 
                    <FormHelperText id="component-error-text" sx={{ color: '#ff604f' }}>
                        One of this option is required.
                    </FormHelperText>
                }
            </Box>
            <Box sx={{p:2}}>
                <FormContainer onSubmit={onSubmit}>
                    <Box>
                        <Input 
                            type="text"
                            name="name" 
                            label="Name"
                            isRequired={true} 
                            errorMessage='Name is required!'
                            maxLength={50}
                            size= 'normal'
                            defaultValue={editTicketType?.name}
                        />
                    </Box>
                    
                    <Box>
                        <SelectInput 
                            disabled={sectionOptions.length === 0 ? true : false}
                            options={sectionOptions}
                            isMulti={false}
                            name="section" 
                            label="Section"
                            isRequired={sectionOptions.length > 0 ? true : false} 
                            errorMessage='Section is required!'
                            defaultValue={editTicketType?.section ? editTicketType?.section : section?.name}
                        />
                    </Box>
                    
                    <Box sx={{}}>
                        <AmountInput 
                            name="capacity" 
                            label="Capacity"
                            isRequired={true} 
                            errorMessage='Capacity is required!'
                            size= 'normal'
                            defaultValue={editTicketType?.capacity}
                        >
                            <FormHelperText id="component-error-text" sx={{ color: 'secondary' }}>
                                Limit the total that can be sold of this specific ticket type
                            </FormHelperText>
                        </AmountInput>
                    </Box>
                    {(type !== 'Free' || ticketType !== 'Free') &&
                    <Box sx={{}}>
                        <AmountInput 
                            name="price" 
                            label="Price"
                            isRequired={type === 'Free' ?  false : true} 
                            errorMessage='Price is required!'
                            symbol={section?.currency?.symbol ?? '$'}
                            defaultValue={type === 'Free' ?  0 : (editTicketType?.price ?? '')}
                            disabled={type === 'Free' ?  true : false}
                            customValues={type === 'Free' ?  true : false}
                        />
                    </Box>
                    }
                    <Box sx={{}}>
                        <Typography variant="subtitle2" gutterBottom>
                            Ticket sales end
                        </Typography>
                        <Box sx={{display: 'flex', justifyContent:'space-between'}}>
                            <Box sx={{width: '49%'}}>
                                <Input 
                                    type="number"
                                    name="salesEnd" 
                                    isRequired={true} 
                                    errorMessage='This is required!'
                                    size= 'normal'
                                    min={1}
                                    defaultValue={1}
                                />
                            </Box>
                            <Box sx={{width: '49%'}}>
                                <SelectInput 
                                    options={[
                                        {
                                            label:'Day(s)',
                                            value: 'Day(s)'
                                        }, 
                                            {
                                            label:'Hour(s)',
                                            value: 'Hour(s)'
                                        }, 
                                            {
                                            label:'Minute(s)',
                                            value: 'Minute(s)'
                                        }
                                    ]}
                                    isMulti={false}
                                    name="period" 
                                    isRequired={true} 
                                    errorMessage='Section is required!'
                                    defaultValue={'Hour(s)'}
                                />
                            </Box>
                        </Box>
                        <Box>
                            <SelectInput 
                                options={[{label:'Before event starts', value:'Before event starts'}, {label:'Before event ends', value:'Before event ends'}]}
                                isMulti={false}
                                name="periodFrame" 
                                isRequired={true} 
                                errorMessage='This is required!'
                                defaultValue={'Before event starts'}
                            />
                        </Box>
                    </Box>
                    <Box sx={{mt: 3, mb: 3}}>
                        <Accordion sx={{border: 0, boxShadow : 0}}>
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1-content"
                            id="panel1-header"
                            >
                            Advanced Settings
                            </AccordionSummary>
                            <AccordionDetails>
                                <Box>
                                    <TextArea 
                                        name="description" 
                                        label="Description"
                                        isRequired={false} 
                                        isMultiline={true}
                                        row={5}
                                        maxLength={1220}
                                        defaultValue={editTicketType?.description}
                                        // size= 'normal'
                                    />
                                </Box>
                            </AccordionDetails>
                        </Accordion>
                    </Box>
                    <Stack spacing={2} direction="row" sx={{justifyContent: 'space-between'}}>
                        <Button onClick={() => setOpen(!open)} variant='outlined'>Cancel</Button>
                        <Button variant='contained'  type="submit">Save</Button>
                    </Stack>
                </FormContainer>
            </Box>
            </Drawer>
        </Box>
    </div>
    );
}