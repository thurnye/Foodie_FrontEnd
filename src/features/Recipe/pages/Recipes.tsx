import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../app/hooks/app.hooks';
import { fetchRecipes } from '../redux/recipe.asyncThrunkService';
import { IRecipeQueryParams } from '../types/recipe.types';
import { Box, Container, Grid, Pagination, Alert } from '@mui/material';

import RecipeFilter from '../components/RecipeFilter';
import RecipeList from '../components/RecipeList';

export default function Recipes() {
  const dispatch = useAppDispatch();
  const { loading, error, pagination } = useAppSelector((state) => state.recipe);

  const [filters, setFilters] = useState<IRecipeQueryParams>({
    page: 1,
    limit: 12,
    sortBy: 'createdAt',
    sortOrder: 'asc',
  });

  useEffect(() => {
    dispatch(fetchRecipes(filters));
  }, [dispatch, filters]);


  const handlePageChange = (
    _event: React.ChangeEvent<unknown>,
    newPage: number
  ) => {
    setFilters({ ...filters, page: newPage });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Container sx={{ py: 5 }}>
      <>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <RecipeFilter getFilter={setFilters} />
          </Grid>
          <Grid item xs={12} sm={8}>
            {error && <Alert severity='error'>{error}</Alert>}
            {!error && (
              <>
                <RecipeList />

                {!loading && pagination && pagination.pages > 1 && (
                  <Box
                    sx={{ display: 'flex', justifyContent: 'center', mt: 5 }}
                  >
                    <Pagination
                      count={pagination.pages}
                      page={pagination.page}
                      onChange={handlePageChange}
                      color='primary'
                      size='large'
                      showFirstButton
                      showLastButton
                    />
                  </Box>
                )}
              </>
            )}
          </Grid>
        </Grid>
      </>
    </Container>
  );
}
