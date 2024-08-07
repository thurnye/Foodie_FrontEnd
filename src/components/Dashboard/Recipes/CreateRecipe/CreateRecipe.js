import React, {useEffect, useState} from 'react';
import {useNavigate, useLocation} from 'react-router-dom';
import styles from './CreateRecipe.module.css';
import Container from '@mui/material/Container';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import BasicRecipeInfo from '../Forms/BasicRecipeInfo/BasicRecipeInfo';
import RecipeDetails from '../Forms/RecipeDetails/RecipeDetails';
import RecipeNutritionalFacts from '../Forms/RecipeNutritionalFacts/RecipeNutritionalFacts';
import RecipeDirections from '../Forms/RecipeDirections/RecipeDirections';
import RecipePreview from '../Forms/RecipePreview/RecipePreview';
import {getRandomInt} from '../../../../util/commons'
import { AddRecipeFormContext, defaultForm } from '../../../../store/recipeStateContext';
import services from '../../../../util/services';
import BackNavigation from '../../../BackNavigation/BackNavigation';

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
  { label: "Directions", isDisabled: false },
  { label: "Preview", isDisabled: false }
];

const CreateRecipe = () => {
  const navigate = useNavigate();
  let location = useLocation()
  const [currentFormStep, setCurrentFormStep] = React.useState(0);
  const [recipeForm, setRecipeForm] = useState(defaultForm);
  const [saveResultStatus, setSaveResultStatus] = useState();
  const handleChange = (event, newValue) => {
    setCurrentFormStep(newValue);
  };
  const recipeId = location.state?.id

  const getRecipeData = async (id) => {
    try {
      //get single Recipe
      
      const recipe = await services.findById(id);
      console.log('SINGLE RECIPE:::', recipe.data);
      const { _id, basicInfo, details, directions, nutritionalFacts, author } =
        recipe.data;
      setRecipeForm({ _id, basicInfo, details, directions, nutritionalFacts, author });
    } catch (error) {
      console.log(error);
    }
  };

useEffect(() => {
 if(recipeId){
  getRecipeData(recipeId);
 }
}, [recipeId])

  const getCurrentForm = (step) => {
    switch (step) {
      case 0:
        return <BasicRecipeInfo/>
      case 1:
        return <RecipeDetails/>
      case 2:
        return <RecipeNutritionalFacts/>
      case 3:
        return <RecipeDirections/>
      case 4:
        return <RecipePreview/>
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
    navigate(`/account/recipe-feeds`);
  }

  return(
  <div className={styles.CreateRecipe}>
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Box sx={{my: 2}}>
        <BackNavigation variant="text" label={'Back'} onClick={handleBackClick}/>
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
