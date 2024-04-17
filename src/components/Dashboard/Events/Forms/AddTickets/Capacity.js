import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import ticket from '../../../../../public/images/ticket.png'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { PiPlantThin } from "react-icons/pi";
import { BsMegaphone } from "react-icons/bs";
import { LiaHandsSolid } from "react-icons/lia";
import { GiPlantWatering } from "react-icons/gi";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TextField from '@mui/material/TextField';
import {getRandomInt} from '../../../../../util/commons';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';


const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
});

const capacityValues = [
    {
    label: 'Up to 25 tickets',
    value : 25,
    icon: <PiPlantThin/>
    },
    {
    label: 'Up to 100 tickets',
    value : 100,
    icon: <GiPlantWatering/>
    },
    {
    label: 'Up to 250 tickets',
    value : 250,
    icon: <LiaHandsSolid/>
    },
    {
    label: 'More than 250 tickets',
    value : 'custom',
    min: 250,
    icon: <BsMegaphone />
    },
]

export default function Capacity({capacity, setCapacity, open, setOpen}) {
  const [value, setValue] = React.useState(capacity.value);
  const [custom, setCustom] = React.useState();

  const handleContinue = () => {
   
    if(custom > 0) {
        
        setCapacity({
            type: 'custom',
            value: custom ? custom : 250

        })
    }else{
        const findOne = capacityValues.find((el) => el.value === value);
        if(findOne){
            setCapacity({
                type: findOne.label,
                value: findOne.value !== 'custom' ? findOne.value : 250
                
            })
        }else{
            setCapacity({
                type: 'Up to 100 tickets',
                value: 100
    
            })
        }
    }
    setOpen(false);
  }


  return (
    <React.Fragment>
      <Dialog
      fullWidth={true}
        open={open}
        onClose={()=> {
            setOpen(!open)
        }}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        maxWidth={'lg'}
      >
        
        <DialogContent>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item md={4} sx={{display: {xs: 'none', md: 'initial'}}}>
                        <Box sx={{mt: 5}}>
                            <Img alt="complex" src={ticket} />
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={8}>
                        <Box>
                            <DialogTitle id="alert-dialog-title" sx={{fontWeight: 900, p:0, pt: 3, pb: 3}}>
                                How many tickets do you want to sell?
                            </DialogTitle>
                            <DialogContentText id="alert-dialog-description">
                                    You told us you wanted to sell this amount earlier. Choose how many tickets you'd like to sell for your event.

                            </DialogContentText>
                            <Box sx={{ width: '100%', display: {xs: 'none', md: 'block'}, mt: 3 }}>
                                <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                                    {capacityValues.map((el) => 
                                        <Grid item xs={6} key={getRandomInt()}>
                                            <Card sx={{ minWidth: 275, position: 'relative', border: value === el.value ? '2px solid #1976d2' : 'initial' }} onClick={() => {
                                                setValue(el.value) 
                                                setCustom()
                                                }}>
                                                <CardContent sx={{display: 'flex', flexDirection: 'column',justifyContent: 'center', alignItems: 'center',borderRadius: '50%'}}>
                                                    <Box sx={{position: 'absolute', top: 0, right: 0}}>
                                                        <FormControl>
                                                            <RadioGroup
                                                                aria-labelledby="demo-controlled-radio-buttons-group"
                                                                name="controlled-radio-buttons-group"
                                                                value={value}
                                                                onChange={() => {
                                                                    setValue(el.value)
                                                                    setCustom()
                                                                }}
                                                            >
                                                                <FormControlLabel value={el.value} control={<Radio size='medium' />} />
                                                            </RadioGroup>
                                                        </FormControl>  
                                                    </Box>
                                                    <Typography  color="text.secondary" gutterBottom
                                                        sx={{
                                                            width: '36px',
                                                            height: '36px',
                                                            display: 'flex',
                                                            justifyContent: 'center',
                                                            alignItems: 'center',
                                                            borderRadius: '50%',
                                                            color: 'black',
                                                            background: '#e9e9e9'
                                                        }}
                                                    >
                                                        {el.icon}
                                                    </Typography>
                                                    <Typography variant="subtitle2" component="div">
                                                        {el.label}
                                                    </Typography>
                                                    
                                                </CardContent>
                                            </Card>
                                        </Grid>
                                    )}
                                    </Grid>
                            </Box>

                            <Box sx={{display: {xs: 'block', md: 'none'}, mt: 3}}>
                            <FormControl sx={{ m: 1, minWidth: '100%' }} size="small">
                            <InputLabel id="demo-select-small-label">Event Capacity</InputLabel>
                                <Select
                                    labelId="demo-select-small-label"
                                    id="demo-select-small"
                                    value={value}
                                    label="Event Capacity"
                                    onChange={(e) => setValue(e.target.value)}
                                >
                                    {capacityValues.map((el) => <MenuItem value={el.value} key={getRandomInt()}>
                                        {el.label}
                                    </MenuItem>)}
                                </Select>
                                </FormControl>
                            </Box>
                            <Box sx={{mt: 4, width: 'fit-content', }}>
                                <Accordion sx={{border: 0, boxShadow : 0}}>
                                    <AccordionSummary
                                    sx={{flexDirection: 'row-reverse'}}
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                    >
                                        <Typography sx={{ml: 2}}>Or set a specific event capacity </Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <TextField
                                            size='small'
                                            id="outlined-controlled"
                                            type="number"
                                            label="Custom event capacity"
                                            value={custom}
                                            onChange={(event) => {
                                            setCustom(event.target.value);
                                            }}
                                        />
                                    </AccordionDetails>
                                </Accordion>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </DialogContent>
        <DialogActions>
            <Button  onClick={()=> {setOpen(!open)}}>Cancel</Button>
            <Button onClick={handleContinue}>Update</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}