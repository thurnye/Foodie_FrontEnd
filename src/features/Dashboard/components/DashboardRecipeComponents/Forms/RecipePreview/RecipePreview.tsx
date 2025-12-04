import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, CircularProgress, Alert, Snackbar, Button } from '@mui/material';
import { useAddRecipeFormContext } from '../../../../Context/dashboard.recipeContext';
import RecipePreviewContent from './RecipePreviewContent';
import { dashboardRecipeService } from '../../../../services/dashboard.recipe.service';

const RecipePreview: React.FC = () => {
  const navigate = useNavigate();
  const { recipeForm } = useAddRecipeFormContext();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showSuccess, setShowSuccess] = useState(false);

  // Check if recipe has enough data to save
  const canSave = () => {
    const { basicInfo, directions } = recipeForm;
    return (
      basicInfo?.recipeName &&
      directions?.ingredients?.length > 0 &&
      directions?.methods?.length > 0
    );
  };

  // Validate recipe data
  const validateRecipe = (): string | null => {
    const { basicInfo, details, directions } = recipeForm;

    if (!basicInfo?.recipeName || basicInfo.recipeName.trim() === '') {
      return 'Recipe name is required';
    }

    if (!details?.thumbnail || details.thumbnail.trim() === '') {
      return 'Recipe thumbnail image is required';
    }

    if (!directions?.ingredients || directions.ingredients.length === 0) {
      return 'At least one ingredient is required';
    }

    if (!directions?.methods || directions.methods.length === 0) {
      return 'At least one preparation method/step is required';
    }

    if (!basicInfo.duration?.value) {
      return 'Duration is required';
    }

    if (!basicInfo.level?.value) {
      return 'Difficulty level is required';
    }

    if (!basicInfo.serving?.value) {
      return 'Serving size is required';
    }

    return null;
  };

  // Save recipe
  const handlePost = async () => {
    // Validate
    const validationError = validateRecipe();
    if (validationError) {
      setError(validationError);
      return;
    }

    setLoading(true);
    setError(null);

    console.log('recipeForm::', recipeForm)

    try {
      // Unified endpoint handles both create and update automatically
      // If recipeForm has _id, it updates; otherwise creates new recipe
      const response = await dashboardRecipeService.createRecipe(recipeForm);

      setShowSuccess(true);

      // Navigate to recipes after success
      setTimeout(() => {
        navigate('/dashboard/recipes');
      }, 1500);
    } catch (err: any) {
      console.error('Error saving recipe:', err);
      setError(
        err.response?.data?.message ||
        err.message ||
        'Failed to save recipe. Please try again.'
      );
    } finally {
      setLoading(false);
    }
  };

  const hasContent = canSave();

  return (
    <Box>
      {/* Error Alert */}
      {error && (
        <Alert severity="error" onClose={() => setError(null)} sx={{ mb: 2 }}>
          {error}
        </Alert>
      )}

      {/* Top Post Button */}
      {hasContent && (
        <Box sx={{ textAlign: 'end', mb: 4 }}>
          <Button
            variant='contained'
            onClick={handlePost}
            disabled={loading || !hasContent}
            sx={{
              fontSize: { xs: 15, md: 18 },
              borderRadius: 0,
              height: 40,
              fontWeight: 700,
              backgroundColor: '#fee86d',
              color: '#000',
              '&:hover': {
                backgroundColor: '#fed34d',
              },
              opacity: loading || !hasContent ? 0.6 : 1,
              cursor: loading || !hasContent ? 'not-allowed' : 'pointer',
            }}
          >
            {loading ? 'Saving...' : (recipeForm._id ? 'Update Recipe' : 'Post Now')}
          </Button>
          {loading && (
            <CircularProgress
              size={20}
              sx={{ ml: 2, position: 'absolute', mt: 1 }}
            />
          )}
        </Box>
      )}

      {/* Recipe Preview component */}
      <RecipePreviewContent recipe={recipeForm} />

      {/* Bottom Post Button */}
      {hasContent && (
        <Box sx={{ textAlign: 'end', mt: 4 }}>
          <Button
            variant='contained'
            onClick={handlePost}
            disabled={loading || !hasContent}
            sx={{
              fontSize: { xs: 15, md: 18 },
              borderRadius: 0,
              height: 40,
              fontWeight: 700,
              backgroundColor: '#fee86d',
              color: '#000',
              '&:hover': {
                backgroundColor: '#fed34d',
              },
              opacity: loading || !hasContent ? 0.6 : 1,
              cursor: loading || !hasContent ? 'not-allowed' : 'pointer',
            }}
          >
            {loading ? 'Saving...' : (recipeForm._id ? 'Update Recipe' : 'Post Now')}
          </Button>
          {loading && (
            <CircularProgress
              size={20}
              sx={{ ml: 2, position: 'absolute', mt: 1 }}
            />
          )}
        </Box>
      )}

      {/* Success Snackbar */}
      <Snackbar
        open={showSuccess}
        autoHideDuration={3000}
        onClose={() => setShowSuccess(false)}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert severity="success" sx={{ width: '100%' }}>
          Recipe {recipeForm._id ? 'updated' : 'created'} successfully!
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default RecipePreview;
