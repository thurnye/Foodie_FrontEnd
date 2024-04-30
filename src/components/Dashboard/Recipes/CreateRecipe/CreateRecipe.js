import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import styles from './CreateRecipe.module.css';
import Container from '@mui/material/Container';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import BasicRecipeInfo from '../Forms/BasicRecipeInfo/BasicRecipeInfo';
import RecipeDetails from '../Forms/RecipeDetails/RecipeDetails';
import RecipeNutritionalFacts from '../Forms/RecipeNutritionalFacts/RecipeNutritionalFacts';
import RecipeDirections from '../Forms/RecipeDirections/RecipeDirections';
import {getRandomInt} from '../../../../util/commons'
import { AddRecipeFormContext, defaultForm } from '../../../../store/recipeStateContext';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import Button from '@mui/material/Button';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const formSteps = [
  { label: "Basic Info", isDisabled: false },
  { label: "Details", isDisabled: false },
  { label: "Nutritional Facts", isDisabled: false },
  { label: "Directions", isDisabled: false }
];

const CreateRecipe = () => {
  const navigate = useNavigate();
  const [currentFormStep, setCurrentFormStep] = React.useState(3);
  const [recipeForm, setRecipeForm] = useState(defaultForm);
  const [saveResultStatus, setSaveResultStatus] = useState();
  const handleChange = (event, newValue) => {
    setCurrentFormStep(newValue);
  };

  const getCurrentForm = (step) => {
    switch (step) {
      case 0:
        return <BasicRecipeInfo/>
      case 1:
        return <>
          <RecipeDetails/>
        </> 
      case 2:
        return <RecipeNutritionalFacts/>
      case 3:
        return <RecipeDirections/>
      default:
        return <></>
    }
  }
  const handleBackClick = () => {
    formSteps.forEach((el, i) => {
      if(i !== 0){
        el.isDisabled = true;
      }
    })
    navigate(`/eventbrit/recipe-feeds`);
  }

  return(
  <div className={styles.CreateRecipe}>
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Box sx={{my: 2}}>
          <Button variant="text" startIcon={<KeyboardBackspaceIcon/>} onClick={handleBackClick}>
          Back
        </Button>
      </Box>
    <AddRecipeFormContext.Provider 
      value={{
        formSteps, 
        currentFormStep, 
        setCurrentFormStep,
        recipeForm, 
        setRecipeForm, 
        saveResultStatus, 
        setSaveResultStatus
    }}>   
      <Box
        sx={{ 
          flexGrow: 1,
          bgcolor: 'background.paper', 
          display: 'flex', 
          flexDirection: {xs: 'column', md: 'initial'}, 
          height: {md: '70vh'}, 
          overflow:'auto',

        }}
      >
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={currentFormStep}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          sx={{ 
            borderRight: 1, 
            borderColor: 'divider',
            display: {xs: 'none', md: 'block'},
            minWidth: 200
           }}
        >
          {formSteps.map((tab, i) => <Tab 
          key={getRandomInt()} 
          label={tab.label} 
          disabled={tab.isDisabled}
          {...a11yProps(i)} 
          sx={{mt: i === 0 ? 8 : 4}}/>)}
          
        </Tabs>
        {/* Small Screen */}
        <Tabs 
          value={currentFormStep} 
          onChange={handleChange} 
          variant="scrollable"
          scrollButtons="auto"
          aria-label="basic tabs example"
          sx={{display: {xs: 'block', md: 'none'}}}
          >
          {formSteps.map((tab, i) => <Tab 
          key={getRandomInt()} 
          label={tab.label} 
          disabled={tab.isDisabled}
          {...a11yProps(i)} 
          sx={{ml: i === 0 ? 4 : 2}}
          />
          )}
        </Tabs>
        <Box sx={{
          flexGrow: 1, 
          height: {md: '70vh'}
        }}>
          {formSteps.map((_, i) => <TabPanel 
          value={currentFormStep} 
          index={i} 
          key={getRandomInt()}
          >
            {getCurrentForm(i)}
          </TabPanel>)}
        </Box>
      </Box>
    </AddRecipeFormContext.Provider>
    </Container>
  </div>
)};



export default CreateRecipe;
