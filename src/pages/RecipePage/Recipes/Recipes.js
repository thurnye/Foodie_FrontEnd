import React, { useEffect, useState } from 'react';
import styles from './Recipes.module.css';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import RecipesCard from '../RecipesCard/RecipesCard';
import { useDispatch, useSelector } from 'react-redux';
import services from '../../../util/services';
import { recipesActions } from '../../../store/allRecipesSlice';
import { useLocation } from 'react-router';
import PaginationNav from '../../../components/PaginationNav/PaginationNav';
import BackToTop from '../../../components/BackToTop/BackToTop';

const Recipes = ({ filter }) => {
  const dispatch = useDispatch();
  let location = useLocation();
  const { recipes, count } = useSelector((state) => state.recipesData.recipes); // adjust selector to match your state structure
  const category = location.state?.category;
  const [currentPage, setCurrentPage] = useState(1);
  const [skip, setSkip] = useState(0);
  const [loading, setLoading] = useState(true);

  const fetchFilteredRecipes = async (query) => {
    try {
      setLoading(true);
      let result;
      console.log('QUERY::', query);
      result = await services.findQuery(query);
      console.log('Filtered Result', result);
      dispatch(
        recipesActions.getAllRecipes({
          recipes: result.data.recipes,
          count: result.data.count,
        })
      );
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    setCurrentPage(1);
    setSkip(0);
  }, [filter]);

  useEffect(() => {
    fetchFilteredRecipes({ filter, currentPage, skip });
  }, [filter, currentPage, category]);

  return (
    <Box >
      <Box
        className={styles.Recipes}
        component={'div'}
        sx={{
          height: 'fit-content',
          maxHeight: 'calc(100% - 2vh)',
          overflow: 'auto',
          px: 2,
        }}
        
      >
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={{ xs: 3, md: 3 }}
            columns={{ xs: 12, sm: 12, md: 12 }}
          >
            {recipes &&
              Array.isArray(recipes) && // ensure recipes is defined and an array
              recipes.map((recipe) => (
                <Grid item xs={6} sm={4} md={4} key={recipe._id}>
                  <RecipesCard recipe={recipe} />
                </Grid>
              ))}
          </Grid>
        </Box>
      </Box>
      {count && (
        <Box>
          <PaginationNav
            page={currentPage}
            setPage={setCurrentPage}
            count={count}
          />
        </Box>
      )}
      <BackToTop/>
    </Box>
  );
};

export default Recipes;
