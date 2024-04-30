import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import CreateSection from './CreateSection';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TicketTypes from './TicketTypes';
import Fade from '@mui/material/Fade';
import { getRandomInt, getTotals, currencyFormat } from '../../../../../util/commons';
import Dropdown from '../../../../Dropdown/Dropdown';
import { LuHeart } from "react-icons/lu";
import { MdOutlineMoneyOff } from "react-icons/md";
import { TfiTicket } from "react-icons/tfi";
import AlertDialog from '../../../../AlertDialog/AlertDialog';
import { PiTrashThin } from "react-icons/pi";
import Capacity from './Capacity'
import IconButton from '@mui/material/IconButton';
import ModeIcon from '@mui/icons-material/Mode';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

const menuOptions = [
    {
        label: 'Paid',
        header: 'Create a ticket that people have to pay for.',
        icon: <TfiTicket fontSize={25}/>,
        background: '#EAEBF9',
        color: '#6898F7',
    },
    {
        label: 'Free',
        header: 'Create a ticket that no one has to pay for.',
        icon: <MdOutlineMoneyOff fontSize={25}/>,
        background: '#F4ECFE',
        color: '#9374E7',
    },
    {
        label: 'Donation',
        header: 'Let people pay any amount for their ticket.',
        icon: <LuHeart fontSize={25}/>,
        background: '#FCEEEF',
        color: '#FAAF9F'
    }
]

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3, pt: 0 }}>
            {children}
          </Box>
        )}
      </div>
    );
  }
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }



const Tickets = ({setSections, sections, capacity, setCapacity}) => {
    const [value, setValue] = React.useState(0);
    const[open, setOpen] = useState(false);
    const [expand, setExpand] = React.useState(0);
    const [openTicketType, setOpenTicketType] = useState(false)
    const [activeSection, setActiveSection] = useState()
    const [type, setType] = useState('')
    const [isEdit, setIsEdit] = React.useState(false);
    const [isTicketTypeEdit, setIsTicketTypeEdit] = React.useState();
    const [isDelete, setIsDelete] = useState(false)
    const [addMoreSection, setAddMoreSection] = useState(false)
    const [message, setMessage] = useState()
    const [remainingSectionCapacity, setRemainingSectionCapacity] = useState(capacity.value)
    const [remainingTicket, setRemainingTicket] = useState();
    const totalSectionsCapacity = getTotals(sections, 'capacity'); 

    
    

    // Handle Add more tickets Types
    const handleAddMoreTickets = (option) => {
        
        // set edit to false for ticket types
        setIsTicketTypeEdit()
        setType(option.label)
        setOpenTicketType(!openTicketType)
    };


    //Remove a Section when it is confirmed
   const handleSectionDelete = (() => {
        const updatedArray = sections.filter((item) => item.id !== activeSection.id);
        setSections(updatedArray);
   })

   //Delete Ticket Type from section
   const handleDelete = ( id) => {
    const updatedSections = sections.map(section => ({
        ...section,
        ticketTypes: section.ticketTypes.filter(ticketType => ticketType.id !== id)
      }));
      setSections(updatedSections);
    
    }

   
    useEffect(() => {
        if( totalSectionsCapacity >= capacity.value){
            setAddMoreSection(true)
        } else{
            setRemainingSectionCapacity(parseInt(capacity.value) - totalSectionsCapacity )
            setAddMoreSection(false)
        }
    },[totalSectionsCapacity, capacity]);


    const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };


  const sectionActions = (el) => <Dropdown
  label="Options"
  isIcon={true}
  icon={<MoreVertIcon />} 
  menuOptions={[
      {label: 'Add Ticket Type', disabled: getTotals(el.ticketTypes, 'capacity') >= el.capacity},
      {label: 'Edit', disabled: false},
      {label: 'Delete', disabled: false},
  ].map((opt) => ({label: opt.label, id: el.id, disabled: opt.disabled}))}
  onClick={(option) => {
      if(option.label === 'Add Ticket Type'){
          setIsTicketTypeEdit()
          setType('')
          setActiveSection(el)
          setOpenTicketType(!openTicketType)
          setRemainingTicket(el.capacity - getTotals(el.ticketTypes, 'capacity'))
      }
      if(option.label === 'Edit'){
          setActiveSection(el)
          setIsEdit(!isEdit)
          setRemainingSectionCapacity(capacity.value)
      }
      if(option.label === 'Delete'){
          setMessage(`You will permanently delete ${el.name} and all tickets within this section.`)
          setIsDelete(!isDelete)
          setActiveSection(el)
      }
  }}
    />

  const ticketTypeActions = (el, ticketType) => <Dropdown
    label="Options"
    isIcon={true}
    icon={<MoreVertIcon />} 
    menuOptions={[ 'Edit', 'Delete'].map((opt) => ({label: opt, id: ticketType.id}))}
    onClick={(option) => {
        if(option.label === 'Edit'){
            setRemainingTicket(el.capacity - getTotals(el.ticketTypes, 'capacity') + parseInt(ticketType.capacity))
            setIsTicketTypeEdit(ticketType)
            setType(ticketType.type)
            setOpenTicketType(!openTicketType)
        }
        if(option.label === 'Delete'){
            handleDelete(ticketType.id)
            setActiveSection(el)
            setMessage(`You will permanently delete ${ticketType.name} from this section.`)
        }
    }}
    />




    return (
        <div>
            <Typography variant="h6" gutterBottom>
                Tickets
            </Typography>
            <Box sx={{textAlign: 'end'}}>
                <Dropdown
                    label="Add More Tickets"
                    isIcon={false}
                    menuOptions={menuOptions}
                    onClick={handleAddMoreTickets}
                />
                <Box sx={{display: 'flex', justifyContent: 'flex-end', alignItems:"center"}}>
                    <Typography variant="body2" gutterBottom sx={{mt: 2}}>
                    Event Capacity:  {totalSectionsCapacity}/{capacity.value}
                    </Typography>
                    <IconButton aria-label="fingerprint" onClick={() => setOpen(!open)} sx={{mt: 0.8}}fontSize="small">
                        <ModeIcon />
                    </IconButton>


                </Box>
                <Capacity 
                    capacity={capacity} 
                    setCapacity={setCapacity} 
                    setOpen={setOpen}
                    open={open}
                />
            </Box>
            <TicketTypes 
                open={openTicketType} 
                setOpen={setOpenTicketType} 
                section={activeSection}
                sections={sections} 
                setSections={setSections}
                ticketType={type}
                editTicketType={isTicketTypeEdit}
                remainingTicket={remainingTicket}
            />
            <AlertDialog open={isDelete} setOpen={setIsDelete} setConfirmDelete={() => handleSectionDelete()}>
                <Box sx={{display: 'flex', flexDirection: 'column', justifyContent:'center', alignItems:'center',}}>
                    <Typography variant="button" display="block" gutterBottom sx={{transform: 'none', display: 'flex',justifyContent:'center', alignItems:'center', height: 50, width: 50, borderRadius: '50%', backgroundColor:'#f8f7fa'}}>
                            <PiTrashThin fontSize={30}/>
                    </Typography>
                    <Typography variant="h6" gutterBottom color="error">
                        Delete
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        {message}
                    </Typography>
                </Box>
            </AlertDialog>

            <Box sx={{ width: '100%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={(event, newValue) => setValue(newValue)} aria-label="basic tabs example">
                    <Tab label="Admission" {...a11yProps(0)} sx={{textTransform: 'none'}}/>
                    </Tabs>
                </Box>
                <CustomTabPanel value={value} index={0}>
                    <Box sx={{textAlign: 'end', mb: 3, position: 'relative'}}>
                        <CreateSection 
                            setSections={setSections} 
                            editSection={activeSection} 
                            isEdit={isEdit}
                            setIsEdit={setIsEdit}
                            sections={sections}
                            disabled={addMoreSection}
                            remainingSectionCapacity={remainingSectionCapacity}
                        />
                    </Box>
                    <Box>
                        {/* Large Screen */}
                        <Box>
                            <Card sx={{
                                display: {xs: 'none', md:'block'},
                                boxShadow: 0, 
                                width: {xs: 600, md: 'initial'},
                                overflow: 'hidden',
                                background: 'none',
                                }}>
                                <CardContent>
                                    <Box sx={{display: 'flex', alignItems: 'center', mb: 3}}>
                                        <Box sx={{minWidth: 300, mr: 2}}></Box>
                                        <Box sx={{minWidth: 200, mr: 2, textAlign: 'right'}}>Tickets per occurrence</Box>
                                        <Box sx={{minWidth: 100, mr: 2, textAlign: 'right'}}>Price</Box>
                                        <Box sx={{minWidth: 100, mr: 2}}></Box>
                                    </Box>
                                    {sections.map((el) => 
                                        <Box sx={{mb: 2}} key={getRandomInt()}>
                                            {/* Sections */}
                                            <Card sx={{pl: 2, width: 750}}>
                                                <Box sx={{display: 'flex', alignItems: 'center'}}>
                                                    <Box sx={{minWidth: 300, mr: 2}}>
                                                        <Typography variant="body1" component="div">
                                                            {el.name}
                                                        {expand !== el.id ? <ExpandMoreIcon  onClick={() => setExpand(el.id)}/> : <ExpandLessIcon onClick={() => setExpand(0)}/>}
                                                        </Typography>
                                                    </Box>
                                                    <Box sx={{minWidth: 200, mr: 2, textAlign: 'right'}}>
                                                        <Typography variant="body1" component="div">
                                                            {el.ticketTypes.length > 0 ? getTotals(el.ticketTypes, 'capacity') :  '-'} / {el.capacity}
                                                        </Typography>
                                                    </Box>
                                                    <Box sx={{minWidth: 100, mr: 2, textAlign: 'right'}}>
                                                        {el.ticketTypes.length > 0 ? <>
                                                            {currencyFormat.format(getTotals(el.ticketTypes, 'price'))}
                                                        </> : '-'}
                                                    </Box>
                                                    <Box sx={{minWidth: 100, textAlign: 'left'}}>
                                                        {sectionActions(el)}
                                                    </Box>
                                                </Box>

                                            </Card>

                                            {/* TicketTypes */}
                                            {el.ticketTypes.map((ticketType) => 
                                                <Box sx={{width: 750,  mr: 3,  mt:1, display: expand === el.id ? 'block' : 'none' }} key={getRandomInt()}>
                                                    <Box sx={{ display: 'flex', justifyContent: 'center'}}>
                                                        <Fade in={expand === el.id}>
                                                            <Card sx={{pl: 2, pt: 3, mb: 1, width: 700}}>
                                                                <Box sx={{display: 'flex', alignItems: 'center'}}>
                                                                    <Box sx={{minWidth: 275, mr: 2}}>
                                                                        <Typography variant="body1" component="div" sx={{pl: 2}}>
                                                                            {ticketType.name}
                                                                        </Typography>
                                                                    </Box>
                                                                    <Box sx={{minWidth: 200, mr: 2, textAlign: 'right'}}>
                                                                        <Typography variant="body1" component="div">
                                                                            {ticketType.capacity}
                                                                        </Typography>
                                                                    </Box>
                                                                    <Box sx={{minWidth: 100, mr: 2, textAlign: 'right'}}>
                                                                        {currencyFormat.format(ticketType.price)}
                                                                    </Box>
                                                                    <Box sx={{minWidth: 100, textAlign: 'left'}}>
                                                                        {ticketTypeActions(el, ticketType)}
                                                                    </Box>
                                                                </Box>
                                                            </Card>
                                                        </Fade>
                                                    </Box>
                                                </Box>
                                            )}
                                        </Box>
                                    )}
                                </CardContent>
                            </Card>
                        </Box>

                        {/* Small Screen */}
                        <Box sx={{display: {xs: 'block', md:'none'},}}>
                            {sections.map((el, index) => 
                            <Card  key={`panel${index}`}>
                                <CardContent sx={{position: 'relative'}}>
                                    <Accordion expanded={expanded === `panel${index+1}`} onChange={handleChange(`panel${index+1}`)} sx={{boxShadow: 0, border: 'none'}}>
                                        <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1bh-content"
                                        id="panel1bh-header"
                                        key={`panel${index+1}`}
                                        >
                                        <Typography sx={{ flexShrink: 0 }}>
                                        {el.name}
                                        </Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            {el.ticketTypes.map((ticketType) => 
                                                <Box sx={{ flexGrow: 1 }} key={getRandomInt()}>
                                                    <Grid container spacing={2}>
                                                        <Grid item xs={8}>
                                                        <List sx={{p: 0}}>
                                                            <ListItem sx={{pt:0}}>
                                                                <ListItemText primary={ticketType.name} secondary={ticketType.capacity} />
                                                            </ListItem>
                                                        </List>
                                                        </Grid>
                                                        <Grid item xs={4}>
                                                            <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                                                                <Typography variant="body2" gutterBottom>
                                                                    {/* {el.currency.symbol}{ticketType.price}  */}
                                                                    {currencyFormat.format(ticketType.price)}
                                                                </Typography>
                                                                <Box>
                                                                        {ticketTypeActions(el, ticketType)}
                                                                    </Box>
                                                            </Box>
                                                        </Grid>
                                                        
                                                    </Grid>
                                                </Box>
                                            )}
                                        </AccordionDetails>
                                    </Accordion>
                                    <Box sx={{position: 'absolute', top: 20, right: 0}}>
                                        {sectionActions(el)}
                                    </Box>
                                </CardContent>
                            </Card>
                            )}
                        </Box>                                                  
                    </Box>
                </CustomTabPanel>
            </Box>
        </div>
    );
}

export default Tickets;
