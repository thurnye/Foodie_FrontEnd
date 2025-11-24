import React, { useEffect } from 'react';
import {
  Box,
  Typography,
  Button,
  CircularProgress,
  Alert,
} from '@mui/material';
import { Add as AddIcon } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../app/stores/stores';
import { fetchMyRecipes } from '../redux/dashboard.asyncThunkService';
import { clearRecipesError } from '../redux/dashboard.slice';
import DashboardRecipeTable from '../components/DashboardRecipe/DashboardRecipeTable';

const DashboardRecipes: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  // Get recipes from Redux store
  const { myRecipes, recipesLoading, recipesError } = useSelector(
    (state: RootState) => state.dashboard
  );

  useEffect(() => {
    // Fetch recipes when component mounts
    dispatch(fetchMyRecipes());
  }, [dispatch]);

  if (recipesLoading) {
    return (
      <Box
        display='flex'
        justifyContent='center'
        alignItems='center'
        minHeight={400}
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          mb: 4,
        }}
      >
        <Box>
          <Typography variant='h4' sx={{ fontWeight: 700 }}>
            My Recipes
          </Typography>
          <Typography variant='body2' color='text.secondary' sx={{ mt: 1 }}>
            Manage and track your recipe creations
          </Typography>
        </Box>
        <Button
          variant='contained'
          startIcon={<AddIcon />}
          onClick={() => navigate('create')}
          sx={{
            backgroundColor: '#333',
            '&:hover': { backgroundColor: '#444' },
          }}
        >
          Create Recipe
        </Button>
      </Box>

      {recipesError && (
        <Alert
          severity='error'
          sx={{ mb: 3 }}
          onClose={() => dispatch(clearRecipesError())}
        >
          {recipesError}
        </Alert>
      )}

      {myRecipes.length === 0 ? (
        <Box sx={{ p: 6, textAlign: 'center', borderRadius: 2 }}>
          <Typography variant='h6' color='text.secondary' gutterBottom>
            No recipes yet
          </Typography>
          <Typography variant='body2' color='text.secondary' sx={{ mb: 3 }}>
            Share your first recipe with the community
          </Typography>
          <Button
            variant='contained'
            startIcon={<AddIcon />}
            onClick={() => navigate('create-recipe')}
            sx={{ bgcolor: '#1a1a2e' }}
          >
            Create Your First Recipe
          </Button>
        </Box>
      ) : (
        <DashboardRecipeTable recipes={myRecipes} />
      )}
    </Box>
  );
};

export default DashboardRecipes;
