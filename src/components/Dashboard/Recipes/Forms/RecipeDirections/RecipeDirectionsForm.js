import React,{useState} from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Card, CardContent, Button } from '@mui/material';
import { MdOutlineEdit } from "react-icons/md";
import Container from '@mui/material/Container'
import EastIcon from '@mui/icons-material/East';
import DirectionsForm from './DirectionsForm';
import DirectionStepper from '../../../../DirectionStepper/DirectionStepper';
import IngredientsAndDressingForm from './IngredientsAndDressingForm';
import IngredientsList from '../../../../IngredientsList/IngredientsList';



const RecipeDirectionsForm = ({setData, defaultValues}) => {
    const [isError, setIsError] = useState({
        error: false,
        type: '',
        message: ''
    });
    const [methods, setMethods] = useState(defaultValues.methods)
    const [ingredients, setIngredients] = useState(defaultValues.ingredients)
    const [activeSection, setActiveSection] = useState("")
    const [isHovered, setIsHovered] = useState("");

    const getEditIcons = (section) => <Box sx={{ maxWidth: '100%', flexGrow: 1, position: 'relative' }}>
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
        <Card sx={{ width: 25, height: 25, borderRadius: '50%', textAlign: 'center', background:'inherit' }} onClick={() => setActiveSection(section)}>
        <Typography>
            <MdOutlineEdit color='#3559E3'/>
        </Typography>
        </Card>
    </Box>
    </Box>

    const onSubmit = () => {
        if(ingredients.length === 0){
            setIsError({
                error: true,
                method: 'ingredients',
                message: 'Ingredients are needed for this recipe*'
            })
            return;
        }
        if(methods.length === 0){
            setIsError({
                error: true,
                type: 'method',
                message: 'Preparation methods or steps are needed for this recipe*'
            })
            return;
        }
        setIsError({
            error: false,
            type: '',
            message: ''
        })
        const directions = {
            methods,
            ingredients
        }
        console.log(directions)
        setData(directions);
    };

    return (
        <Container>
            {/* methods */}
            <Box sx={{mb: 2}}>
                {activeSection !== 'methodsForm' &&
                <Box sx={{ }} onClick={() => methods?.length === 0 && setActiveSection('methodsForm')}>
                    <Card 
                        onMouseEnter={() => setIsHovered('methodsForm')}
                        onMouseLeave={() => setIsHovered("")}
                    >
                        {isHovered === 'methodsForm' && getEditIcons('methodsForm')}
                        <CardContent>
                            <Typography variant="h5" gutterBottom sx={{mb:3}}>
                               Preparation Methods and Steps
                            </Typography>
                            {isError.type === 'method' && isError.error &&<>
                                <Typography variant="caption" gutterBottom sx={{mb:3, color:'salmon'}}>
                                    {isError.message}
                                </Typography>
                                </>
                            }
                            {methods?.length === 0 ? <>
                                <Typography variant="body2" gutterBottom>
                                    Use this section to provide more details preparation steps on your recipe. You can include things to add, customization tips, anything that will help people know what to expect.
                                </Typography>
                            </> 
                            : 
                                <DirectionStepper methods={methods}/>
                            }
                        </CardContent>
                    </Card>
                </Box>
                }
                {activeSection === 'methodsForm' && 
                    <Box sx={{}}>
                        <Card >
                            <CardContent>
                                <Typography variant="h5" gutterBottom sx={{mb:3}}>
                                    Preparation Methods / Steps for this recipe
                                </Typography>
                                <Box sx={{mb:3}}>
                                    <Typography variant="caption" color="text.secondary">
                                       <i>It's all bout the recipe here...</i>
                                    </Typography>

                                </Box>

                                <Box sx={{mb:2,  position: 'relative'}}>
                                    <DirectionsForm 
                                        setData={setMethods} 
                                        directions={methods}
                                        open={true} 
                                        setOpen={setActiveSection}
                                    />
                                </Box>
                            </CardContent>
                        </Card>
                    </Box>
                }
            </Box>

            {/* Ingredients*/}
            <Box sx={{mb: 2}}>
                {activeSection !== 'faqForm' &&
                <Box sx={{ }} onClick={() => ingredients?.length === 0 && setActiveSection('faqForm')}>
                    <Card 
                        onMouseEnter={() => setIsHovered('faqForm')}
                        onMouseLeave={() => setIsHovered("")}
                    >
                        {isHovered === 'faqForm' && getEditIcons('faqForm')}
                        <CardContent>
                        {ingredients?.length === 0 ? <>
                            <Typography variant="h5" gutterBottom sx={{mb:3}}>
                                Ingredients And Dressings
                            </Typography>
                            
                            <Typography variant="body2" gutterBottom>
                                Add the main ingredients and Dressing Ingredients used to prepare your recipe
                            </Typography>

                            {isError.type === 'ingredients' && isError.error &&<>
                                <Typography variant="caption" gutterBottom sx={{mb:3, color:'salmon'}}>
                                    {isError.message}
                                </Typography>
                                </>
                            }

                                </> : <>
                                    <Typography variant="h5" gutterBottom sx={{mb:3}}>
                                        Ingredients and Dressings
                                    </Typography>
                                    <IngredientsList ingredients={ingredients}/>
                                </>
                        }
                            
                        </CardContent>
                    </Card>
                </Box>
                }
                {activeSection === 'faqForm' && 
                    <Box sx={{}}>
                        <Card >
                            <CardContent>
                                <Typography variant="h5" gutterBottom sx={{mb:3}}>
                                    FAQ
                                </Typography>
                                <Box sx={{mb:3}}>
                                    <Typography variant="caption" color="text.secondary">
                                        Answer questions your attendees may have methods the event, like parking, accessibility, refunds, and other informations.
                                    </Typography>
                                </Box>

                                <Box sx={{mb:2}}>
                                    <IngredientsAndDressingForm
                                        setData={setIngredients}
                                        ingredients={ingredients}
                                        open={true}
                                        setOpen={setActiveSection}
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

export default RecipeDirectionsForm;
