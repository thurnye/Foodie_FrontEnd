import React, {useEffect, useState} from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import ticket from '../../../../../public/images/Event/createTicket.png'
import { PiUserThin } from "react-icons/pi";
import Typography from '@mui/material/Typography';
import { getRandomInt, getTotals } from '../../../../../util/commons';
import Alert from '@mui/material/Alert';
import { FormContainer, Input, AmountInput } from '../../../../Forms/FormContainer/FormContainer';

const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
});

const CreateSection = ({setSections, editSection, isEdit, setIsEdit, sections, disabled, remainingSectionCapacity}) => {
    const defaultCurrency = {
        label: 'US Dollar - USD',
        currency: 'US Dollar',
        symbol: '$',
    }
    const [open, setOpen] = useState(isEdit);
    const [section, setSection] = useState();
    const [currency, setCurrency] = useState(defaultCurrency);
    const [message, setMessage] = useState('')
    

    const onSubmit = (data) => {
        const {name, capacity} = data;

        
        setMessage();
        if(sections.length > 0 && section){
            // Updating
            const duplicatedName = sections.find(element => element.id !== section.id && element.name === name)
            //Check for Duplicate Names
            if(duplicatedName){
                setMessage(`${name} already exist`);
                return;
            }
            const found = sections.find((el) => el.id === section.id)
            if(found){
                
                const updatedSections = sections
                const totalFoundSectionCapacity = getTotals(found.ticketTypes, 'capacity')
                const totalSectionsCapacity = getTotals(updatedSections,'capacity');
                //check to see that the new capacity is less than the total number of all sections capacity and not greater
                if(totalSectionsCapacity > remainingSectionCapacity){
                    setMessage(`exceeded capacity of ${remainingSectionCapacity} ticket(s)`);
                    return;
                }
                //check to see that the new capacity is not less than the total capacity of its ticketTypes
                if(totalFoundSectionCapacity > capacity){
                    setMessage(`cannot set capacity less than the total number of ticket(s) capacity`);
                    return;
                }

                

                found.name = name;
                found.capacity = capacity
                // Adjust the Section name for all the its ticketType
                if(found.ticketTypes.length > 0) {
                    found.ticketTypes.forEach((ticket) => ticket.section = name)
                }
                setSections(updatedSections)
            }
        }else{
            // New Data
            //Check for Duplicate Names
            const duplicatedName = sections.find(element => element.name === name)
            if(duplicatedName){
                setMessage(`${name} already exist`);
                return;
            }
            if(capacity > remainingSectionCapacity){
                setMessage(`exceeded remaining capacity of ${remainingSectionCapacity} ticket(s)`);
                return;
            }
            const adjustData = {
                ...data,
                id: getRandomInt(),
                currency,
                ticketTypes: []
            }
            setSections((prev) => [...prev, adjustData])

        }
        setIsEdit && setIsEdit(!open)
        setOpen(!open)
    };


    useEffect(() => {
        if(isEdit){
            setOpen(isEdit)
            setSection(editSection);
        }
        if(!isEdit){
            setSection();
        }
    }, [isEdit, editSection])


    return (
        <div>
            <Box sx={{mt:3}}>
                <Button variant="outlined" onClick={() => setOpen(!open)} sx={{
                    borderColor: '#7d7f91', color: '#7d7f91'
                }} disabled={disabled}>
                    Create a section
                </Button>
                <Dialog
                    open={open}
                    onClose={() => {
                        setOpen(!open)
                        setIsEdit && setIsEdit(!open)
                        setCurrency(defaultCurrency)
                    }}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <FormContainer onSubmit={onSubmit}>
                        <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={2}>
                            <Grid item md={4} sx={{display: {xs: 'none', md: 'initial'}}}>
                                <Box sx={{mt: 5}}>
                                    <Img alt="complex" src={ticket} />
                                </Box>
                            </Grid>
                            <Grid item xs={12} md={8}>
                                <DialogContent>
                                    <Box>
                                        <DialogTitle id="alert-dialog-title" sx={{fontWeight: 900, p:0, pt: 3, pb: 3}}>
                                            Create Section
                                        </DialogTitle>
                                        <DialogContentText id="alert-dialog-description">
                                                Use a section to sell various ticket types that share the same section capacity

                                        </DialogContentText>
                                        <Box sx={{ width: '100%', mt: 2 }}>
                                       {message && <Alert severity="error" sx={{mb: 2}}>{message}</Alert>}
                                            <Box>
                                                <Input 
                                                    type="text"
                                                    name="name" 
                                                    label="Section name"
                                                    isRequired={true} 
                                                    errorMessage='Section name is required!'
                                                    defaultValue={section?.name}
                                                />
                                            </Box>
                                            <Box>
                                                <AmountInput
                                                    name="capacity" 
                                                    label="Section capacity"
                                                    isRequired={true} 
                                                    errorMessage='Section capacity is required!'
                                                    defaultValue={section?.capacity}
                                                />
                                            </Box>
                                            <Box sx={{mb: 2}}>
                                                {/* Will be added later */}
                                                {/* <CountrySelect currency={currency} setCurrency={setCurrency}/> */}
                                            </Box>
                                        </Box>
                                        <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', background: '#e7e9f4', p: 3}}>
                                            <Typography variant="button" display="block" gutterBottom color='primary' sx={{transform: 'none', display: 'flex', justifyContent:'center', alignItems:'center',  p:1, borderRadius: '50%', background:'#d9def4', mr: 3}}>
                                                <PiUserThin fontSize={25}/>
                                            </Typography>
                                            <Typography variant="body2" gutterBottom>
                                                The event capacity will be updated based on your total sections capacity
                                            </Typography>
                                        </Box>
                                    </Box>
                                </DialogContent>
                                <DialogActions>
                                    <Button onClick={() => {
                                        setOpen(!open)
                                       setIsEdit && setIsEdit(!open)
                                        }} variant='outlined'>Cancel</Button>
                                    <Button  type="submit">{section ? 'Update' : 'Create'}</Button>
                                </DialogActions>
                            </Grid>
                        </Grid>
                        </Box>
                    </FormContainer>
                </Dialog>
            </Box>
        </div>
    );
}

export default CreateSection;
