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
import { getRandomInt } from '../../../../util/commons';
import Dropdown from '../../../../components/Dropdown/Dropdown';
import { LuHeart } from "react-icons/lu";
import { MdOutlineMoneyOff } from "react-icons/md";
import { TfiTicket } from "react-icons/tfi";
import AlertDialog from '../../../../components/AlertDialog/AlertDialog';
import { PiTrashThin } from "react-icons/pi";


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


// const data = [
//     {   
//         id: 34567,
//         name: 'General Admission',
//         currency: {
//             label: 'US Dollar - USD',
//             currency: 'US Dollar',
//             symbol: '$',
//         },
//         capacity: 100,
//         ticketTypes: [{
//             id: 12756345,
//             name: 'Free',
//             capacity: 50,
//             price: 'CA$2.00'
//         }]
//     },
//     {   
//         id: 347565067,
//         name: 'Regular Admission',
//         currency: {
//             label: 'US Dollar - USD',
//             currency: 'US Dollar',
//             symbol: '$',
//         },
//         capacity: 100,
//         ticketTypes: [{
//             id: 1234545,
//             name: 'Free',
//             capacity: 50,
//             price: 'CA$2.00'
//         }]
//     },
//     {   
//         id: 35765567,
//         name: 'VIP Admission',
//         currency: {
//             label: 'US Dollar - USD',
//             currency: 'US Dollar',
//             symbol: '$',
//         },
//         capacity: 100,
//         ticketTypes: [
//             {
//                 id: 1233445,
//                 name: 'Free',
//                 capacity: 50,
//                 price: 'CA$2.00'
//             },
//             {
//                 id: 1235634450,
//                 name: 'Paid',
//                 capacity: 50,
//                 price: 'CA$12.00'
//             },
//             {
//                 id: 12336864456,
//                 name: 'Donations',
//                 capacity: 50,
//                 price: 'CA$1.00'
//             },
//         ]
//     }
// ]

const Tickets = ({setSections, sections}) => {
    const [value, setValue] = React.useState(0);
    
    const [expand, setExpand] = React.useState(0);
    const [openTicketType, setOpenTicketType] = useState(false)
    const [activeSection, setActiveSection] = useState()
    const [type, setType] = useState('')
    const [isEdit, setIsEdit] = React.useState(false);
    const [isDelete, setIsDelete] = useState()
    const [message, setMessage] = useState()
    const [confirmDelete, setConfirmDelete] = useState(false)

    

    const handleDelete = (isSection, id) => {
        if(isSection){
            console.log(id)
        }
        if(!isSection){
            console.log(false, id)
        }
    }

    const handleAddMoreTickets = (option) => {
        console.log(option.label);
        setType(option.label)
        setOpenTicketType(!openTicketType)
    };

   useEffect(() => {
        if(confirmDelete){
            const updatedArray = sections.filter((item) => item.id !== activeSection.id);
            setSections(updatedArray);
        }
   },[sections, confirmDelete, activeSection, setSections])


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
            </Box>
            <TicketTypes 
                open={openTicketType} 
                setOpen={setOpenTicketType} 
                section={activeSection}
                sections={sections} 
                setSections={setSections}
                ticketType={type}
            />
            <AlertDialog open={isDelete} setOpen={setIsDelete} setConfirmDelete={setConfirmDelete}>
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
                        />
                    </Box>
                    <Box>
                        <Box>
                            <Card sx={{
                                display: {xs: 'none', md:'block'},
                                boxShadow: 0, 
                                width: {xs: 600, md: 'initial'},
                                overflow: 'auto',
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
                                                            {el.capacity}
                                                        </Typography>
                                                    </Box>
                                                    <Box sx={{minWidth: 100, mr: 2, textAlign: 'right'}}>
                                                        CA$10.00
                                                    </Box>
                                                    <Box sx={{minWidth: 100, textAlign: 'left'}}>
                                                        <Dropdown
                                                            label="Options"
                                                            isIcon={true}
                                                            icon={<MoreVertIcon />} 
                                                            menuOptions={['Add Ticket Type', 'Edit', 'Delete'].map((opt) => ({label: opt, id: el.id}))}
                                                            onClick={(option) => {
                                                                if(option.label === 'Add Ticket Type'){
                                                                    setType()
                                                                    setActiveSection(el)
                                                                    setOpenTicketType(!openTicketType)
                                                                }
                                                                if(option.label === 'Edit'){
                                                                    setActiveSection(el)
                                                                    setIsEdit(!isEdit)
                                                                }
                                                                if(option.label === 'Delete'){
                                                                    handleDelete(true, el.id)
                                                                    setMessage(`You will permanently delete ${el.name} and all tickets within this section.`)
                                                                    setIsDelete(!isDelete)
                                                                    setActiveSection(el)
                                                                }
                                                            }}
                                                        />
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
                                                                        {ticketType.price}
                                                                    </Box>
                                                                    <Box sx={{minWidth: 100, textAlign: 'left'}}>
                                                                        <Dropdown
                                                                            label="Options"
                                                                            isIcon={true}
                                                                            icon={<MoreVertIcon />} 
                                                                            menuOptions={[ 'Edit', 'Delete'].map((opt) => ({label: opt, id: ticketType.id}))}
                                                                            onClick={(option) => {
                                                                                console.log(option)
                                                                                if(option.label === 'Edit'){
                                                                                    // setActiveSection(el)
                                                                                }
                                                                                if(option.label === 'Add ticket Type'){
                                                                                    handleDelete(false, ticketType.id)
                                                                                }
                                                                            }}
                                                                        />
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
                    </Box>
                </CustomTabPanel>
            </Box>
        </div>
    );
}

export default Tickets;
