import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation, Location } from 'react-router-dom';
import Container from '@mui/material/Container';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';

import BackNavigation from '../../../app/components/BackNavigation';
import { IRecipeFormType } from '../types/dashboard_recipe.types';
import {
  AddRecipeFormContext,
  defaultForm,
} from '../Context/dashboard.recipeContext';
import { formSteps } from '../utils/dashboard.recipe.defaults';
import BasicRecipeInfo from '../components/DashboardRecipeComponents/Forms/BasicRecipeInfo/BasicRecipeInfo';
import RecipeDetails from '../components/DashboardRecipeComponents/Forms/RecipeDetails/RecipeDetails';
import RecipeNutritionalFacts from '../components/DashboardRecipeComponents/Forms/RecipeNutritionalFacts/RecipeNutritionalFacts';
import RecipeDirections from '../components/DashboardRecipeComponents/Forms/RecipeDirections/RecipeDirections';
import RecipePreview from '../components/DashboardRecipeComponents/Forms/RecipePreview/RecipePreview';
import { dashboardRecipeService } from '../services/dashboard.recipe.service';

// TabPanel Props Interface
interface TabPanelProps {
  children?: React.ReactNode;
  value: number;
  index: number;
}

// TabPanel Component
const TabPanel: React.FC<TabPanelProps> = ({
  children,
  value,
  index,
  ...other
}) => {
  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
};

// Accessibility helper
const a11yProps = (index: number) => ({
  id: `vertical-tab-${index}`,
  'aria-controls': `vertical-tabpanel-${index}`,
});

const CreateEditRecipe: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation() as Location & { state?: { id?: string } };
  const [currentFormStep, setCurrentFormStep] = useState<number>(0);
  const [recipeForm, setRecipeForm] = useState<IRecipeFormType>(defaultForm);
  const [saveResultStatus, setSaveResultStatus] = useState<number | string>(200);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const recipeId = location.state?.id;

  // Tab Change Handler
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setCurrentFormStep(newValue);
  };

  // Fetch recipe data for editing
  useEffect(() => {
    const fetchRecipeForEdit = async () => {
      if (!recipeId) return; // No ID means create mode, not edit mode

      setLoading(true);
      setError(null);

      try {
        const recipe = await dashboardRecipeService.getRecipeById(recipeId);

        console.log('RECIPE::', recipe)

        // Populate form with recipe data
        setRecipeForm({
          _id: recipe._id,
          basicInfo: recipe.basicInfo,
          details: recipe.details,
          nutritionalFacts: recipe.nutritionalFacts || [],
          directions: recipe.directions,
        });

        // Enable all form steps for editing
        formSteps.forEach((step) => {
          step.isDisabled = false;
        });
      } catch (err: any) {
        console.error('Error fetching recipe for edit:', err);
        setError(
          err.response?.data?.message ||
          err.message ||
          'Failed to load recipe. Please try again.'
        );
      } finally {
        setLoading(false);
      }
    };

    fetchRecipeForEdit();
  }, [recipeId]);


  // Render correct form based on step
  const getCurrentForm = (step: number) => {
    switch (step) {
      case 0:
        return <BasicRecipeInfo />;
      case 1:
        return <RecipeDetails />;
      case 2:
        return <RecipeNutritionalFacts />;
      case 3:
        return <RecipeDirections />;
      case 4:
        return <RecipePreview />;
      default:
        return null;
    }
  };

  // Handle back navigation
  const handleBackClick = () => {
    formSteps.forEach((el, i) => {
      if (i !== 0) el.isDisabled = true;
    });
    navigate('../recipes');
  };

  return (
    <div>
      <Container maxWidth='lg' sx={{ mt: 4, mb: 4 }}>
        <Box sx={{ my: 2 }}>
          <BackNavigation
            variant='text'
            label='Back'
            onClick={handleBackClick}
          />
        </Box>

        {/* Loading State */}
        {loading && (
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '400px' }}>
            <CircularProgress />
          </Box>
        )}

        {/* Error State */}
        {error && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {error}
          </Alert>
        )}

        {/* Form Content */}
        {!loading && !error && (

        <AddRecipeFormContext.Provider
          value={{
            formSteps,
            currentFormStep,
            setCurrentFormStep,
            recipeForm,
            setRecipeForm,
            saveResultStatus,
            setSaveResultStatus,
          }}
        >
          <Box
            sx={{
              flexGrow: 1,
              bgcolor: 'background.paper',
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              height: { md: '70vh' },
              overflow: 'auto',
            }}
          >
            {/* Vertical Tabs (Desktop) */}
            <Tabs
              orientation='vertical'
              variant='scrollable'
              value={currentFormStep}
              onChange={handleChange}
              aria-label='Vertical tabs'
              sx={{
                borderRight: 1,
                borderColor: 'divider',
                display: { xs: 'none', md: 'block' },
                minWidth: 200,
              }}
            >
              {formSteps.map((tab, i) => (
                <Tab
                     key={`currentFormStep_tab${i}`}
                  label={tab.label}
                  disabled={tab.isDisabled}
                  {...a11yProps(i)}
                  sx={{ mt: i === 0 ? 8 : 4 }}
                />
              ))}
            </Tabs>

            {/* Horizontal Tabs (Mobile) */}
            <Tabs
              value={currentFormStep}
              onChange={handleChange}
              variant='scrollable'
              scrollButtons='auto'
              aria-label='Horizontal tabs'
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {formSteps.map((tab, i) => (
                <Tab
                  key={`currentFormStep_${i}`}
                  label={tab.label}
                  disabled={tab.isDisabled}
                  {...a11yProps(i)}
                  sx={{ ml: i === 0 ? 4 : 2 }}
                />
              ))}
            </Tabs>

            {/* Tab Panels */}
            <Box sx={{ flexGrow: 1, height: { md: '70vh' } }}>
              {formSteps.map((_, i) => (
                <TabPanel
                  value={currentFormStep}
                  index={i}
                  key={`currentFormStep_panel${i}`}
                >
                  {getCurrentForm(i)}
                </TabPanel>
              ))}
            </Box>
          </Box>
        </AddRecipeFormContext.Provider>
        )}
      </Container>
    </div>
  );
};

export default CreateEditRecipe;
