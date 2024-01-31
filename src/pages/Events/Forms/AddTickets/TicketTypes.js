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
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { getRandomInt } from '../../../../util/commons';
import Alert from '@mui/material/Alert';



const data = [
    {   
        id: 34567,
        name: 'General Admission',
        currency: {
            label: 'US Dollar - USD',
            currency: 'US Dollar',
            symbol: '$',
        },
        capacity: 100,
        ticketTypes: [{
            id: 12756345,
            name: 'Free',
            capacity: 50,
            price: 'CA$2.00'
        }]
    },
    {   
        id: 347565067,
        name: 'Regular Admission',
        currency: {
            label: 'US Dollar - USD',
            currency: 'US Dollar',
            symbol: '$',
        },
        capacity: 100,
        ticketTypes: [{
            id: 1234545,
            name: 'Free',
            capacity: 50,
            price: 'CA$2.00'
        }]
    },
    {   
        id: 35765567,
        name: 'VIP Admission',
        currency: {
            label: 'US Dollar - USD',
            currency: 'US Dollar',
            symbol: '$',
        },
        capacity: 100,
        ticketTypes: [
            {
                id: 1233445,
                name: 'Free',
                capacity: 50,
                price: 'CA$2.00'
            },
            {
                id: 1235634450,
                name: 'Paid',
                capacity: 50,
                price: 'CA$12.00'
            },
            {
                id: 12336864456,
                name: 'Donations',
                capacity: 50,
                price: 'CA$1.00'
            },
        ]
    }
]

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
            const updatedSections = sections.map(section => ({
                ...section,
                ticketTypes: section.ticketTypes.map(ticketType =>
                ticketType.id === editTicketType.id ? { ...ticketType, ...data, ...type } : ticketType
                )
            }));
            setSections(updatedSections);
        }

        // Creating New Ticket
        if(!editTicketType){
            if (data && type) {
            const newData = { id: getRandomInt(), ...data, type };
            const findOne = sections.find((el) => el.name === data.section);
        
            if (findOne) {
                const { ticketTypes } = findOne;
                findOne.ticketTypes = [...ticketTypes, newData];
            } else {
                // When there is no section so we create a new one
                const adjustedData = { ...newData, section: "General Assembly" };
                const defaultSection = {
                id: getRandomInt(),
                name: "General Assembly",
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
        if(sections.length > 0){
        setSectionOptions(sections.map((el) => el.name));
        }
    },[sections])

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
                    
                    <Box sx={{}}>
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
                        <Input 
                            type="number"
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
                        </Input>
                    </Box>
                    <Box sx={{}}>
                        <AmountInput 
                            type="number"
                            name="price" 
                            label="Price"
                            isRequired={true} 
                            errorMessage='Price is required!'
                            symbol={section?.currency?.symbol ?? '$'}
                            defaultValue={editTicketType?.price}
                        />
                    </Box>
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
                                    options={['Day(s)', 'Hour(s)', 'Minute(s)']}
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
                                options={['Before event starts', 'Before event ends']}
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