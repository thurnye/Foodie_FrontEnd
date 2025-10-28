import React from 'react';
import { useAddRecipeFormContext } from '../../../../Context/dashboard.recipeContext';
import { Box } from '@mui/material';
import CustomizedButton from '../../../../../../app/components/CustomizedButton';
import RecipePreviewContent from './RecipePreviewContent';

const RecipePreview: React.FC = () => {
  const { recipeForm } = useAddRecipeFormContext();

  // save recipe will be done here
  const handlePost = () => {
    console.log('Posting recipe...', recipeForm);
    // TODO: Implement save recipe functionality
  };

  return (
    <Box>
      {/* --- Top Post Button --- */}
      {/* <Box sx={{ textAlign: 'end', mb: 4 }}>
        <CustomizedButton
          variant='contained'
          label='Looks Good! Post Now'
          backgroundColor='#fee86d'
          id='demo-customized-button'
          disableElevation
          onClick={handlePost}
          sx={{
            fontSize: { xs: 15, md: 18 },
            borderRadius: 0,
            height: 40,
            fontWeight: 700,
          }}
        />
      </Box> */}

      {/* --- Recipe Preview component --- */}
      <RecipePreviewContent recipe={recipeForm} />

      {/* --- Bottom Post Button --- */}
      {/* <Box sx={{ textAlign: 'end', mt: 4 }}>
        <CustomizedButton
          variant='contained'
          label='Looks Good! Post Now'
          backgroundColor='#fee86d'
          id='demo-customized-button'
          disableElevation
          onClick={handlePost}
          sx={{
            fontSize: { xs: 15, md: 18 },
            borderRadius: 0,
            height: 40,
            fontWeight: 700,
          }}
        />
      </Box> */}
    </Box>
  );
};

export default RecipePreview;
