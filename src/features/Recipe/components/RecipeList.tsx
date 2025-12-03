import { useAppSelector } from '../../../app/hooks/app.hooks';

import { IRecipe } from '../types/recipe.types';
import { Container, Grid, Alert } from '@mui/material';
import RecipesCard from './RecipesCard';

export default function RecipeList() {
  const { recipes, loading, error } = useAppSelector(
    (state) => state.recipe
  );

  if (error) {
    return (
      <Container sx={{ mt: 5 }}>
        <Alert severity='error'>{error}</Alert>
      </Container>
    );
  }

  return (
    <Container sx={{ py: 5 }}>
      {/* Recipes Grid */}
      {!loading && recipes.length > 0 && (
        <>
          <Grid container spacing={3}>
            {recipes.map((recipe: IRecipe) => (
              <Grid item xs={6} md={4} lg={3} key={recipe._id}>
                <RecipesCard recipe={recipe} />
              </Grid>
            ))}
          </Grid>
        </>
      )}
    </Container>
  );
}
