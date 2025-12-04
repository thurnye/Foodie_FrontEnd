import React from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
  Card,
  CardMedia,
  CardContent,
  Typography,
  useTheme,
} from '@mui/material';
import BorderBoxTextLayout from './Layouts/BorderBoxTextLayout';
import { IRecipe } from '../../features/Recipe/types/recipe.types';

interface LatestRecipesCardProps {
  title?: string;
  recipes: IRecipe[];
  showDate?: boolean;
}

/**
 * Compact recipe list component for displaying latest or related recipes.
 * Fully typed to work with IRecipe data model.
 */
const LatestRecipesCard: React.FC<LatestRecipesCardProps> = ({
  title = 'LATEST RECIPES',
  recipes,
  showDate = true,
}) => {
  const theme = useTheme();

  return (
    <Box sx={{ mb: 1 }}>
      <BorderBoxTextLayout title={title}>
        {recipes.map((recipe) => {
          const recipeId = recipe._id;
          const recipeName = recipe.basicInfo?.recipeName ?? 'Untitled Recipe';
          const thumbnail =
            recipe.details?.thumbnail ?? '/images/default-placeholder.png';
          const createdDate =
            recipe.createdAt ??
            new Date().toISOString(); // fallback if not provided

          const formattedDate = new Date(createdDate).toLocaleDateString(
            'en-US',
            {
              month: 'short',
              day: 'numeric',
              year: 'numeric',
            }
          );

          const query = recipeName
            .toLowerCase()
            .replaceAll(' ', '-')
            .replaceAll("'", '');

          return (
            <Card
              key={recipeId}
              sx={{
                display: 'flex',
                mb: 2,
                boxShadow: 'none',
                // border: `1px solid ${theme.palette.divider}`,
                '&:hover': {
                  boxShadow: 2,
                  transform: 'translateY(-2px)',
                  transition: 'all 0.2s ease',
                },
              }}
            >
              {/* Thumbnail */}
              <CardMedia
                component="img"
                image={thumbnail}
                alt={recipeName}
                sx={{
                  width: 100,
                  height: 'auto',
                  objectFit: 'cover',
                  borderRadius: { sm: '8px 0 0 8px' },
                }}
              />

              {/* Recipe Info */}
              <CardContent
                sx={{
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  p: 2,
                }}
              >
                <Typography
                  variant="body1"
                  sx={{
                    mb: 0.5,
                    lineHeight: 1.3,
                    textAlign: 'start',
                    fontFamily: '"Merriweather", serif',
                    fontSize: { xs: '0.95rem', sm: '1rem' },
                  }}
                >
                  <Link
                    to={{
                      pathname: `/recipe/${recipeId}`,
                      search: `?q=${query}`,
                    }}
                    state={{ recipeId }}
                    style={{
                      color: theme.palette.text.primary,
                      textDecoration: 'none',
                    }}
                  >
                    {recipeName}
                  </Link>
                </Typography>

                {showDate && (
                  <Typography
                    variant="caption"
                    color="text.secondary"
                    sx={{
                      fontSize: { xs: '0.8rem', sm: '0.9rem' },
                      textAlign: 'start',
                      fontFamily: '"Catamaran", sans-serif',
                    }}
                  >
                    {formattedDate}
                  </Typography>
                )}
              </CardContent>
            </Card>
          );
        })}
      </BorderBoxTextLayout>
    </Box>
  );
};

export default LatestRecipesCard;
