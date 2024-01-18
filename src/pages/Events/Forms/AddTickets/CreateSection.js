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
import ticket from '../../../../public/images/Event/createTicket.png'
import { FormContainer, Input } from '../FormContainer/FormContainer';
import { PiUserThin } from "react-icons/pi";
import Typography from '@mui/material/Typography';
import { getRandomInt } from '../../../../util/commons';


const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
});


const CreateSection = ({setSections, editSection, isEdit, setIsEdit, sections}) => {
    const [open, setOpen] = useState(isEdit);
    const [section, setSection] = useState();


    const onSubmit = (data) => {
        if(section){
            const {name, capacity} = data;
            const found = sections.find((el) => el.id === section.id)
            if(found){
                found.name = name;
                found.capacity = capacity
                setSections(sections)
            }
        }else{
            const adjustData = {
                ...data,
                id: getRandomInt(),
                currency: {
                    label: 'US Dollar - USD',
                    currency: 'US Dollar',
                    symbol: '$',
                },
                ticketTypes: []
            }
            setSections((prev) => [...prev, adjustData])

        }
        setIsEdit(!open)
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
                }}>
                    Create a section
                </Button>
                <Dialog
                    open={open}
                    onClose={() => {
                        setOpen(!open)
                        setIsEdit(!open)
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
                                                <Input 
                                                    type="number"
                                                    name="capacity" 
                                                    label="Section capacity"
                                                    isRequired={true} 
                                                    errorMessage='Section capacity is required!'
                                                    defaultValue={section?.capacity}
                                                />
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
                                        setIsEdit(!open)
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
