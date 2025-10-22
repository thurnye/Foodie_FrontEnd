import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../app/hooks/app.hooks';
import { fetchRecipeById } from '../redux/recipe.asyncThrunkService';
import { IRecipeAuthor, IContentBlock, IIngredient } from '../types/recipe.types';
import {
  Box,
  Container,
  Typography,
  Chip,
  Grid,
  Card,
  CardContent,
  CircularProgress,
  Alert,
  Avatar,
  Divider,
  Stack,
  List,
  ListItem,
  ListItemText,
  Paper,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import {
  AccessTime,
  Person,
  Restaurant,
  ArrowBack,
  Star,
  ExpandMore,
} from '@mui/icons-material';

export default function RecipeDetail() {
  const { recipeId } = useParams<{ recipeId: string }>();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { currentRecipe: recipe, loading, error } = useAppSelector((state) => state.recipe);

  console.log('Recipe Detail Rendered:', recipe);
  useEffect(() => {
    if (recipeId) {
      dispatch(fetchRecipeById(recipeId));
    }
  }, [dispatch, recipeId]);

  const getAuthorName = (author: IRecipeAuthor | string): string => {
    if (typeof author === 'string') return 'Unknown';
    return `${author.firstName} ${author.lastName}`;
  };

  const renderContentBlock = (block: IContentBlock, index: number) => {
    switch (block.type) {
      case 'text':
        return (
          <Typography key={index} variant="body1" paragraph>
            {block.value}
          </Typography>
        );
      case 'title':
        return (
          <Typography key={index} variant="h6" gutterBottom sx={{ mt: 2, fontWeight: 'bold' }}>
            {block.value}
          </Typography>
        );
      case 'image':
        return (
          <Box key={index} sx={{ my: 2 }}>
            <img
              src={block.value}
              alt={`Recipe content ${index}`}
              style={{ width: '100%', maxHeight: '400px', objectFit: 'cover', borderRadius: '8px' }}
            />
          </Box>
        );
      case 'video':
        return (
          <Box key={index} sx={{ my: 2 }}>
            <video
              src={block.value}
              controls
              style={{ width: '100%', maxHeight: '400px', borderRadius: '8px' }}
            />
          </Box>
        );
      default:
        return null;
    }
  };

  if (loading) {
    return (
      <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh' }}>
        <CircularProgress />
      </Container>
    );
  }

  if (error || !recipe) {
    return (
      <Container sx={{ mt: 5 }}>
        <Alert severity="error">{error || 'Recipe not found'}</Alert>
        <Button startIcon={<ArrowBack />} onClick={() => navigate('/recipes')} sx={{ mt: 2 }}>
          Back to Recipes
        </Button>
      </Container>
    );
  }

  const mainIngredients = recipe.directions?.ingredients?.filter((ing: IIngredient) => ing.type === 'main') || [];
  const dressingIngredients = recipe.directions?.ingredients?.filter((ing: IIngredient) => ing.type === 'dressing') || [];

  return (
    <Container sx={{ py: 4 }}>
      {/* Back Button */}
      <Button startIcon={<ArrowBack />} onClick={() => navigate('/recipes')} sx={{ mb: 3 }}>
        Back to Recipes
      </Button>

      {/* Header Image */}
      <Box
        sx={{
          width: '100%',
          height: { xs: '250px', md: '400px' },
          borderRadius: 2,
          overflow: 'hidden',
          mb: 3,
        }}
      >
        <img
          src={recipe.details.thumbnail || 'https://via.placeholder.com/800x400'}
          alt={recipe.basicInfo.recipeName}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </Box>

      {/* Recipe Title and Info */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
          {recipe.basicInfo.recipeName}
        </Typography>

        {/* Tags and Categories */}
        <Stack direction="row" spacing={1} flexWrap="wrap" sx={{ mb: 2, gap: 1 }}>
          {recipe.basicInfo.categories?.map((cat, index) => (
            <Chip key={index} label={cat.label} color="primary" size="small" />
          ))}
          {recipe.basicInfo.tags?.map((tag, index) => (
            <Chip key={index} label={tag.label} variant="outlined" size="small" />
          ))}
        </Stack>

        {/* Meta Info */}
        <Grid container spacing={3} sx={{ mb: 2 }}>
          <Grid item xs={6} sm={3}>
            <Stack direction="row" spacing={1} alignItems="center">
              <AccessTime color="action" />
              <Box>
                <Typography variant="caption" color="text.secondary" display="block">
                  Duration
                </Typography>
                <Typography variant="body2" fontWeight="bold">
                  {recipe.basicInfo.duration.label}
                </Typography>
              </Box>
            </Stack>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Stack direction="row" spacing={1} alignItems="center">
              <Restaurant color="action" />
              <Box>
                <Typography variant="caption" color="text.secondary" display="block">
                  Difficulty
                </Typography>
                <Typography variant="body2" fontWeight="bold">
                  {recipe.basicInfo.level.label}
                </Typography>
              </Box>
            </Stack>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Stack direction="row" spacing={1} alignItems="center">
              <Person color="action" />
              <Box>
                <Typography variant="caption" color="text.secondary" display="block">
                  Servings
                </Typography>
                <Typography variant="body2" fontWeight="bold">
                  {recipe.basicInfo.serving?.label || 'N/A'}
                </Typography>
              </Box>
            </Stack>
          </Grid>
          <Grid item xs={6} sm={3}>
            {recipe.averageRating !== undefined && (
              <Stack direction="row" spacing={1} alignItems="center">
                <Star sx={{ color: 'warning.main' }} />
                <Box>
                  <Typography variant="caption" color="text.secondary" display="block">
                    Rating
                  </Typography>
                  <Typography variant="body2" fontWeight="bold">
                    {recipe.averageRating.toFixed(1)} ({recipe.totalReviews || 0})
                  </Typography>
                </Box>
              </Stack>
            )}
          </Grid>
        </Grid>

        {/* Author Info */}
        <Stack direction="row" spacing={2} alignItems="center" sx={{ mt: 3 }}>
          <Avatar sx={{ bgcolor: 'primary.main' }}>
            {typeof recipe.author !== 'string' && recipe.author.firstName ? recipe.author.firstName[0] : 'U'}
          </Avatar>
          <Box>
            <Typography variant="caption" color="text.secondary" display="block">
              Recipe by
            </Typography>
            <Typography variant="body1" fontWeight="bold">
              {getAuthorName(recipe.author)}
            </Typography>
          </Box>
        </Stack>
      </Box>

      <Divider sx={{ my: 4 }} />

      <Grid container spacing={4}>
        {/* Left Column - About and Instructions */}
        <Grid item xs={12} md={8}>
          {/* About Section */}
          {recipe.details.about && recipe.details.about.length > 0 && (
            <Card sx={{ mb: 4 }}>
              <CardContent>
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
                  About This Recipe
                </Typography>
                {recipe.details.about.map((block, index) => renderContentBlock(block, index))}
              </CardContent>
            </Card>
          )}

          {/* Instructions Section */}
          {recipe.directions?.methods && recipe.directions.methods.length > 0 && (
            <Card>
              <CardContent>
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
                  Instructions
                </Typography>
                {recipe.directions.methods.map((method, methodIndex) => (
                  <Box key={methodIndex} sx={{ mb: 3 }}>
                    <Typography variant="h6" gutterBottom sx={{ color: 'primary.main', fontWeight: 'bold' }}>
                      Step {methodIndex + 1}
                    </Typography>
                    {method.step.map((block, blockIndex) => renderContentBlock(block, blockIndex))}
                    {methodIndex < recipe.directions.methods.length - 1 && <Divider sx={{ mt: 3 }} />}
                  </Box>
                ))}
              </CardContent>
            </Card>
          )}
        </Grid>

        {/* Right Column - Ingredients and Nutrition */}
        <Grid item xs={12} md={4}>
          {/* Ingredients Section */}
          {(mainIngredients.length > 0 || dressingIngredients.length > 0) && (
            <Paper elevation={2} sx={{ p: 3, mb: 3, position: 'sticky', top: 20 }}>
              <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
                Ingredients
              </Typography>

              {mainIngredients.length > 0 && (
                <Box sx={{ mb: 2 }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: 'primary.main', mb: 1 }}>
                    Main Ingredients
                  </Typography>
                  <List dense>
                    {mainIngredients.map((ingredient, index) => (
                      <ListItem key={index} sx={{ pl: 0 }}>
                        <ListItemText
                          primary={`• ${ingredient.name}`}
                          primaryTypographyProps={{ variant: 'body2' }}
                        />
                      </ListItem>
                    ))}
                  </List>
                </Box>
              )}

              {dressingIngredients.length > 0 && (
                <Box>
                  <Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: 'primary.main', mb: 1 }}>
                    Dressing
                  </Typography>
                  <List dense>
                    {dressingIngredients.map((ingredient, index) => (
                      <ListItem key={index} sx={{ pl: 0 }}>
                        <ListItemText
                          primary={`• ${ingredient.name}`}
                          primaryTypographyProps={{ variant: 'body2' }}
                        />
                      </ListItem>
                    ))}
                  </List>
                </Box>
              )}
            </Paper>
          )}

          {/* Nutritional Facts */}
          {recipe.nutritionalFacts && recipe.nutritionalFacts.length > 0 && (
            <Paper elevation={2} sx={{ p: 3, mb: 3 }}>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                Nutritional Facts
              </Typography>
              <List dense>
                {recipe.nutritionalFacts.map((fact, index) => (
                  <ListItem key={index} sx={{ pl: 0, justifyContent: 'space-between' }}>
                    <Typography variant="body2">{fact.name}</Typography>
                    <Typography variant="body2" fontWeight="bold">
                      {fact.amount} {fact.unit}
                    </Typography>
                  </ListItem>
                ))}
              </List>
            </Paper>
          )}
        </Grid>
      </Grid>

      {/* FAQs Section */}
      {recipe.details.faqs && recipe.details.faqs.length > 0 && (
        <Box sx={{ mt: 4 }}>
          <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', mb: 2 }}>
            Frequently Asked Questions
          </Typography>
          {recipe.details.faqs.map((faq, index) => (
            <Accordion key={index}>
              <AccordionSummary expandIcon={<ExpandMore />}>
                <Typography fontWeight="bold">{faq.ques}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{faq.ans}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      )}
    </Container>
  );
}
