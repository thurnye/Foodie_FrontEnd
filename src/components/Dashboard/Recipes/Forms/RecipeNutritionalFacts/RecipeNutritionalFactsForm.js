import React,{useState} from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Card, CardContent, Button } from '@mui/material';
import { MdOutlineEdit } from "react-icons/md";
import Container from '@mui/material/Container'
import EastIcon from '@mui/icons-material/East';
import RecipeNutrientsAddEdit from './RecipeNutrientsAddEdit'
import NutritionalTable from './NutritionalTable';


const RecipeDetailsForm = ({setData, defaultValues}) => {
    const [nutrients, setNutrients] = useState(defaultValues)
    const [open, setOpen] = useState(false)
    const [isHovered, setIsHovered] = useState(false);
    const [isError, setIsError] = useState(false);

    const getEditIcons = () => <Box sx={{ maxWidth: '100%', flexGrow: 1, position: 'relative' }}>
    <Box
        sx={{
        position: 'absolute',
        top: 6,
        right: 6,
        height: '100%',
        backgroundColor: '#E9EDFC',
        zIndex: 1,
        color: '#3559E3'
        }}
    >
        <Card sx={{ width: 25, height: 25, borderRadius: '50%', textAlign: 'center', background:'inherit' }} onClick={() => setOpen(true)}>
        <Typography>
            <MdOutlineEdit color='#3559E3'/>
        </Typography>
        </Card>
    </Box>
    </Box>

    const onSubmit = () => {
        if(nutrients.length === 0){
            setIsError(true);
            return;
        }
       
        console.log(nutrients)
        setData(nutrients);
    };

    console.log({nutrients})

    return (
        <Container>
            <Box sx={{mb: 2}}>
                {!open &&
                <Box sx={{ }} onClick={() => nutrients?.length === 0 && setOpen(true)}>
                    <Card 
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        {isHovered  && getEditIcons()}
                        <CardContent>
                            
                        {nutrients?.length === 0 ? <Box>
                           
                            
                           <Card 
                            sx={{ width: '100%', height: '50vh',display: 'flex', justifyContent: 'center',  alignItems: 'center', border: 'none', boxShadow: 'none' }}
                            >
                               <CardContent>
                                   <Typography variant="h5" component="div" color="text.secondary">
                                       No Nutrient Added!.
                                   </Typography>
                                   <Typography variant="caption" component="div"   color="text.secondary" sx={{textAlign: 'center'}}>
                                       click to add nutrients
                                   </Typography>
                                   {isError && 
                                        <Typography variant="caption"  component="div" gutterBottom sx={{mb:3, color:'salmon', textAlign:'center'}}>
                                            *nutrients are needed!
                                        </Typography>
                                    }   
                               </CardContent>
                           </Card>
                       </Box>
                        : 
                            <Box>
                                <Typography variant="h5" gutterBottom sx={{mb:3}}>
                                    Nutrients
                                </Typography>
                                <NutritionalTable data={nutrients}/>
                            </Box>
                                    
                        }  
                        </CardContent>
                    </Card>
                </Box>
                 } 
                {open  && 
                    <Box sx={{}}>
                        <Card >
                            <CardContent>
                                <Typography variant="h5" gutterBottom sx={{mb:3}}>
                                    Add Nutrients Here!
                                </Typography>
                                {isError && 
                                    <Typography variant="caption" gutterBottom sx={{mb:3, color:'salmon'}}>
                                        *nutrients are needed!
                                    </Typography>
                                }
                                <Box sx={{mb:3}}>
                                    <Typography variant="caption" color="text.secondary">
                                        Answer questions your attendees may have about the event, like parking, accessibility, refunds, and other informations.
                                    </Typography>
                                </Box>

                                <Box sx={{mb:2}}>
                                    <RecipeNutrientsAddEdit 
                                        setData={setNutrients} 
                                        nutrients={nutrients}
                                        setOpen={setOpen}
                                    />
                                </Box>
                            </CardContent>
                        </Card>
                    </Box>
                }
            </Box>

            <Box sx={{mt: 10, width: '100%', textAlign: 'end'}}>
                <Button variant="text" endIcon={<EastIcon/>} onClick={()=>onSubmit()}>
                    Continue
                </Button>
            </Box>
        </Container>
    );
}

export default RecipeDetailsForm;
