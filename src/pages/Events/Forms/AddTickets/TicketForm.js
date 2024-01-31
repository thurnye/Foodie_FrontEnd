import React, {useState} from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { PiUserThin } from "react-icons/pi";
import { FaGreaterThan } from "react-icons/fa6";
import { LuHeart } from "react-icons/lu";
import { MdOutlineMoneyOff } from "react-icons/md";
import { TfiTicket } from "react-icons/tfi";
import {getRandomInt} from '../../../../util/commons';
import CreateSection from './CreateSection';
import TicketTypes from './TicketTypes'
import Capacity from './Capacity';

const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
});

const ticketTypes = [
    {
        name: 'Paid',
        header: 'Create a ticket that people have to pay for.',
        icon: <TfiTicket fontSize={30} sx={{padding: 2, backgroundColor: '#eaebf9', color: '#6898f7'}}/>,
        background: '#EAEBF9',
        color: '#6898F7',
    },
    {
        name: 'Free',
        header: 'Create a ticket that no one has to pay for.',
        icon: <MdOutlineMoneyOff fontSize={30}/>,
        background: '#F4ECFE',
        color: '#9374E7',
    },
    {
        name: 'Donation',
        header: 'Let people pay any amount for their ticket.',
        icon: <LuHeart fontSize={30}/>,
        background: '#FCEEEF',
        color: '#FAAF9F'
    }
]


const TicketForm = ({data, setData, capacity, setCapacity, isCapacityEdit, setIsCapacityEdit, setSections, sections}) => {
    const [open, setOpen] = React.useState(true);
    const [openTicketType, setOpenTicketType] = useState(false)
    const [editCapacity, setEditCapacity] = useState(false)
    const [type, setType] = useState()


    return (
        <div>
            <Paper
                sx={{
                    p: 2,
                    margin: 'auto',
                    // maxWidth: 500,
                    flexGrow: 1,
                    backgroundColor: (theme) =>
                    theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                    boxShadow: '0'
                }}
                >
                    
                <Grid container spacing={2}>                  
                    <Grid item sm={12} md>
                        <Box sx={{mb: 3}}>
                            {ticketTypes.map((el) => {
                                const {color, name, background, icon, header} = el

                            return  <Card sx={{width: '100%', boxShadow: 0, border: '1px solid #EEEDF2', mb: 2}} key={getRandomInt()}>
                                    <CardContent>
                                        <Box sx={{display: 'flex', justifyContent: 'center', alignItems:'center', width: '100%'}}>
                                            <Box>
                                                <Typography variant="button" display="block" gutterBottom color={color} sx={{transform: 'none', display: 'flex', justifyContent:'center', alignItems:'center', height: 75, width: 50, borderRadius: '5px', backgroundColor:{background}}}>
                                                    {icon}
                                                </Typography>
                                            </Box>
                                            <Box sx={{flexGrow: 1, ml: 3, mr: 2}}>
                                                <Typography variant="h6" gutterBottom>
                                                    {name}
                                                </Typography>
                                                <Typography variant="body1" gutterBottom>
                                                    {header}
                                                </Typography>
                                            </Box>
                                            <Box>
                                                <Typography onClick={()=>{
                                                    setType(name)
                                                    setOpenTicketType(true)
                                                }}>
                                                    <FaGreaterThan color='#38364F'/>
                                                </Typography>
                                            </Box>
                                        </Box>
                                    </CardContent>
                                </Card>
                            })}
                        </Box>
                        <Box>
                            <Typography variant="body2" gutterBottom>
                                Create a section if you want to sell multiple ticket types that share the same inventory. (ex. Floor, Mezzanine,etc)
                            </Typography>

                           <CreateSection setSections={setSections}/>
                        </Box>
                    </Grid>
                    <Grid item>
                        <Card sx={{ minWidth: 275, background: '#F8F7FA', boxShadow: 0}} >
                            <CardContent>
                                <Box sx={{display: 'flex', justifyContent:'space-between', alignItems:'center', mb: 3}}>
                                    <Typography variant="button" display="block" gutterBottom color='primary' sx={{transform: 'none', display: 'flex', justifyContent:'center', alignItems:'center', height: 40, width: 40, borderRadius: '50%', background:'#EAEBF9'}}>
                                        <PiUserThin fontSize={30}/>
                                    </Typography>
                                <Button variant="text" sx={{transform: 'none', fontWeight: 900}} onClick={() =>setEditCapacity(!editCapacity)}>Edit</Button>
                                <Capacity 
                                    capacity={capacity} 
                                    setCapacity={setCapacity} 
                                    setOpen={setEditCapacity}
                                    open={editCapacity}
                                />
                                </Box>
                                <Typography variant="h5" component="div" sx={{mb:3}}>
                                    Event Capacity
                                </Typography>
                                <Typography variant="body2">
                                    up to {capacity?.value} tickets
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>


                <TicketTypes 
                    open={openTicketType} 
                    setOpen={setOpenTicketType}
                    sections={sections} 
                    setSections={setSections}
                    ticketType={type}
                    setTicketType={setType}
                    editTicketType={null}
                />
            </Paper>
        </div>
    );
}

export default TicketForm;
