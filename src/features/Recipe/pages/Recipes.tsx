import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../app/hooks/app.hooks';
import { fetchRecipes } from '../redux/recipe.asyncThrunkService';
import { IRecipeQueryParams } from '../types/recipe.types';
import {
  Box,
  Container,
  Grid,
  Pagination,
  Alert,
  Drawer,
  IconButton,
  useTheme,
  useMediaQuery,
  Fab,
} from '@mui/material';
import { FilterList as FilterListIcon, Close as CloseIcon } from '@mui/icons-material';

import RecipeFilter from '../components/RecipeFilter';
import RecipeList from '../components/RecipeList';

export default function Recipes() {
  const dispatch = useAppDispatch();
  const { loading, error, pagination } = useAppSelector((state) => state.recipe);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const [filters, setFilters] = useState<IRecipeQueryParams>({
    page: 1,
    limit: 12,
    sortBy: 'createdAt',
    sortOrder: 'asc',
  });
  const [drawerOpen, setDrawerOpen] = useState(false);

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

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <Container maxWidth='xl' sx={{ py: 5 }}>
      <>
        <Grid container spacing={3}>
          {/* Desktop Filter */}
          {!isMobile && (
            <Grid item xs={12} sm={3}>
              <RecipeFilter getFilter={setFilters} />
            </Grid>
          )}

          {/* Recipe List */}
          <Grid item xs={12} sm={isMobile ? 12 : 9}>
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

        {/* Mobile Filter Drawer */}
        {isMobile && (
          <>
            <Fab
              color='primary'
              aria-label='filter'
              onClick={handleDrawerToggle}
              sx={{
                position: 'fixed',
                bottom: 16,
                right: 16,
                zIndex: 1000,
              }}
            >
              <FilterListIcon />
            </Fab>

            <Drawer
              anchor='right'
              open={drawerOpen}
              onClose={handleDrawerToggle}
              sx={{
                '& .MuiDrawer-paper': {
                  width: '85%',
                  maxWidth: 360,
                },
              }}
            >
              <Box sx={{ p: 2 }}>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    mb: 2,
                  }}
                >
                  <Box sx={{ fontSize: '1.25rem', fontWeight: 600 }}>
                    Filters
                  </Box>
                  <IconButton onClick={handleDrawerToggle} size='small'>
                    <CloseIcon />
                  </IconButton>
                </Box>
                <RecipeFilter getFilter={setFilters} />
              </Box>
            </Drawer>
          </>
        )}
      </>
    </Container>
  );
}
