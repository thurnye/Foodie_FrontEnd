import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../app/hooks/app.hooks';
import { fetchRecipes } from '../redux/recipe.asyncThrunkService';
import { IRecipeQueryParams, IRecipe, IRecipeAuthor } from '../types/recipe.types';
import { Link } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  ButtonGroup,
  Card,
  CardMedia,
  CardContent,
  CardActionArea,
  Chip,
  Grid,
  Pagination,
  CircularProgress,
  Alert,
  InputAdornment,
  Stack,
} from '@mui/material';
import {
  Search as SearchIcon,
  AccessTime,
  Star,
  Person,
  Schedule,
  TrendingUp,
  SortByAlpha,
} from '@mui/icons-material';

export default function Recipes() {
  const dispatch = useAppDispatch();
  const { recipes, loading, error, pagination } = useAppSelector((state) => state.recipe);

  const [filters, setFilters] = useState<IRecipeQueryParams>({
    page: 1,
    limit: 12,
    sortBy: 'createdAt',
    sortOrder: 'desc',
  });

  const [searchTerm, setSearchTerm] = useState('');

  console.log('pagination:::', pagination);

  useEffect(() => {
    dispatch(fetchRecipes(filters));
  }, [dispatch, filters]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setFilters({ ...filters, search: searchTerm, page: 1 });
  };

  const handleSortChange = (sortBy: 'createdAt' | 'averageRating' | 'recipeName') => {
    setFilters({
      ...filters,
      sortBy,
      sortOrder: filters.sortBy === sortBy && filters.sortOrder === 'desc' ? 'asc' : 'desc',
      page: 1,
    });
  };

  const handleLevelFilter = (level: string) => {
    setFilters({ ...filters, level: level === filters.level ? undefined : level, page: 1 });
  };

  const handlePageChange = (_event: React.ChangeEvent<unknown>, newPage: number) => {
    setFilters({ ...filters, page: newPage });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getAuthorName = (author: IRecipeAuthor | string): string => {
    if (typeof author === 'string') return 'Unknown';
    return `${author.firstName} ${author.lastName}`;
  };

  if (error) {
    return (
      <Container sx={{ mt: 5 }}>
        <Alert severity="error">{error}</Alert>
      </Container>
    );
  }

  return (
    <Container sx={{ py: 5 }}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 'bold', mb: 4 }}>
          All Recipes
        </Typography>

        {/* Search Bar */}
        <Box component="form" onSubmit={handleSearch} sx={{ mb: 4 }}>
          <TextField
            fullWidth
            placeholder="Search recipes..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
              endAdornment: (
                <Button type="submit" variant="contained" sx={{ ml: 1 }}>
                  Search
                </Button>
              ),
            }}
          />
        </Box>

        {/* Filters and Sort */}
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="space-between" sx={{ mb: 4 }}>
          {/* Level Filters */}
          <ButtonGroup variant="outlined">
            <Button
              variant={filters.level === 'easy' ? 'contained' : 'outlined'}
              onClick={() => handleLevelFilter('easy')}
            >
              Easy
            </Button>
            <Button
              variant={filters.level === 'medium' ? 'contained' : 'outlined'}
              onClick={() => handleLevelFilter('medium')}
            >
              Medium
            </Button>
            <Button
              variant={filters.level === 'hard' ? 'contained' : 'outlined'}
              onClick={() => handleLevelFilter('hard')}
            >
              Hard
            </Button>
          </ButtonGroup>

          {/* Sort Buttons */}
          <ButtonGroup variant="outlined">
            <Button
              startIcon={<Schedule />}
              onClick={() => handleSortChange('createdAt')}
              variant={filters.sortBy === 'createdAt' ? 'contained' : 'outlined'}
            >
              Newest
              {filters.sortBy === 'createdAt' && (
                <Typography component="span" sx={{ ml: 0.5, fontSize: '0.875rem' }}>
                  {filters.sortOrder === 'desc' ? '↓' : '↑'}
                </Typography>
              )}
            </Button>
            <Button
              startIcon={<TrendingUp />}
              onClick={() => handleSortChange('averageRating')}
              variant={filters.sortBy === 'averageRating' ? 'contained' : 'outlined'}
            >
              Rating
              {filters.sortBy === 'averageRating' && (
                <Typography component="span" sx={{ ml: 0.5, fontSize: '0.875rem' }}>
                  {filters.sortOrder === 'desc' ? '↓' : '↑'}
                </Typography>
              )}
            </Button>
            <Button
              startIcon={<SortByAlpha />}
              onClick={() => handleSortChange('recipeName')}
              variant={filters.sortBy === 'recipeName' ? 'contained' : 'outlined'}
            >
              Name
              {filters.sortBy === 'recipeName' && (
                <Typography component="span" sx={{ ml: 0.5, fontSize: '0.875rem' }}>
                  {filters.sortOrder === 'desc' ? '↓' : '↑'}
                </Typography>
              )}
            </Button>
          </ButtonGroup>
        </Stack>
      </Box>

      {/* Loading State */}
      {loading && (
        <Box sx={{ display: 'flex', justifyContent: 'center', py: 5 }}>
          <CircularProgress />
        </Box>
      )}

      {/* No Recipes Found */}
      {!loading && recipes.length === 0 && (
        <Alert severity="info" sx={{ textAlign: 'center' }}>
          No recipes found. Try adjusting your filters.
        </Alert>
      )}

      {/* Recipes Grid */}
      {!loading && recipes.length > 0 && (
        <>
          <Grid container spacing={3}>
            {recipes.map((recipe: IRecipe) => (
              <Grid item xs={12} sm={6} md={4} key={recipe._id}>
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'transform 0.2s, box-shadow 0.2s',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: 6,
                    },
                  }}
                >
                  <CardActionArea component={Link} to={`/recipes/${recipe._id}`} sx={{ flexGrow: 1 }}>
                    <CardMedia
                      component="img"
                      height="250"
                      image={recipe.details.thumbnail || 'https://via.placeholder.com/400x300'}
                      alt={recipe.basicInfo.recipeName}
                      sx={{ objectFit: 'cover' }}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h6" component="h2" sx={{ fontWeight: 'bold' }}>
                        {recipe.basicInfo.recipeName}
                      </Typography>

                      <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 1 }}>
                        <Chip
                          label={recipe.basicInfo.level.label}
                          color="primary"
                          size="small"
                        />
                        <Box sx={{ display: 'flex', alignItems: 'center', color: 'text.secondary' }}>
                          <AccessTime sx={{ fontSize: 16, mr: 0.5 }} />
                          <Typography variant="body2">{recipe.basicInfo.duration.label}</Typography>
                        </Box>
                      </Stack>

                      {recipe.averageRating !== undefined && (
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                          <Star sx={{ color: 'warning.main', fontSize: 20, mr: 0.5 }} />
                          <Typography variant="body2" sx={{ fontWeight: 'bold', mr: 0.5 }}>
                            {recipe.averageRating.toFixed(1)}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            ({recipe.totalReviews || 0} reviews)
                          </Typography>
                        </Box>
                      )}

                      <Box sx={{ display: 'flex', alignItems: 'center', color: 'text.secondary' }}>
                        <Person sx={{ fontSize: 16, mr: 0.5 }} />
                        <Typography variant="body2">By {getAuthorName(recipe.author)}</Typography>
                      </Box>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
          </Grid>

          {/* Pagination */}
          {pagination && pagination.pages > 1 && (
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 5 }}>
              <Pagination
                count={pagination.pages}
                page={pagination.page}
                onChange={handlePageChange}
                color="primary"
                size="large"
                showFirstButton
                showLastButton
              />
            </Box>
          )}
        </>
      )}
    </Container>
  );
}
