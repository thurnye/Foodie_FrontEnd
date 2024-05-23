import React, { useEffect, useState } from 'react';
import styles from './RecipePreview.module.css';
import { useAddRecipeFormContext } from '../../../../../store/recipeStateContext';
import NewSingleRecipe from '../../../../NewSingleRecipe/NewSingleRecipe';
import { Box } from '@mui/material';
import CustomizedButton from '../../../../CustomizedButton/CustomizedButton';
import services from '../../../../../util/services';
import { useSelector } from 'react-redux';

const RecipePreview = () => {
  const { recipeForm } = useAddRecipeFormContext();
  const user = useSelector((state) => state.userLog?.user?.user);

  const handlePostRecipe = async () => {
    try {
      await services.postRecipe(user._id, recipeForm);
    } catch (error) {
      console.log(error);
    }
  };

  console.log('recipeForm::', recipeForm);

  return (
    <div className={styles.RecipePreview}>
      {/* <RecipePreview setData={setData} 
      defaultValues={recipeForm.directions}/> */}
      <Box sx={{ textAlign: 'end', mb: 4 }}>
        <CustomizedButton
          variant='contained'
          label={'Looks Good!. Post Now.'}
          backgroundColor={'#fee86d'}
          id='demo-customized-button'
          disableElevation
          onClick={() => handlePostRecipe()}
          sx={{
            fontSize: { xs: 15, md: 18 },
            borderRadius: 0,
            height: 40,
            fontWeight: 700,
          }}
        />
      </Box>
      <NewSingleRecipe recipe={recipeForm} />
      <Box sx={{ textAlign: 'end' }}>
        <CustomizedButton
          variant='contained'
          label={'Looks Good!. Post Now.'}
          backgroundColor={'#fee86d'}
          id='demo-customized-button'
          disableElevation
          onClick={() => handlePostRecipe()}
          sx={{
            fontSize: { xs: 15, md: 18 },
            borderRadius: 0,
            height: 40,
            fontWeight: 700,
          }}
        />
      </Box>
    </div>
  );
};

export default RecipePreview;
