import React, { useState } from 'react';
import styles from './RecipePreview.module.css';
import { useNavigate } from 'react-router';
import { useAddRecipeFormContext } from '../../../../../store/recipeStateContext';
import NewSingleRecipe from '../../../../NewSingleRecipe/NewSingleRecipe';
import { Box } from '@mui/material';
import CustomizedButton from '../../../../CustomizedButton/CustomizedButton';
import services from '../../../../../util/services';
import { useSelector } from 'react-redux';
import RequestFeedback from '../../../../RequestFeedback/RequestFeedback';

const RecipePreview = () => {
  let navigate = useNavigate();
  const { recipeForm } = useAddRecipeFormContext();
  const user = useSelector((state) => state.userLog?.user?.user);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [saved, setSaved] = useState(false);
  const [recipeId, setRecipeId] = useState('');

  const handlePostRecipe = async () => {
    try {
      setIsError(false);
      setSaved(false);
      setLoading(true);
      setOpen(true);
      const res = await services.postRecipe(user._id, recipeForm);
      if (res.status) {
        setLoading(false);
        setSaved(true);
        setRecipeId(res.data)
      }
    } catch (error) {
      setLoading(false);
      setSaved(false);
      setIsError(true);
      console.log(error)
    }
  };
  const handleViewLive = () => {
    if(recipeId){
      console.log(recipeId)
      navigate("/recipe", { state:  {recipeId} })
    }
  };

  return (
    <div className={styles.RecipePreview}>
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

      <Box>
        <RequestFeedback
          open={open}
          setOpen={setOpen}
          loading={loading}
          isError={isError}
          saved={saved}
          handleError={handlePostRecipe}
          handleSuccess={handleViewLive}
        />
      </Box>
    </div>
  );
};

export default RecipePreview;
