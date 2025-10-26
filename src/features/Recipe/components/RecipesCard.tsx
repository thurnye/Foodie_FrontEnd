import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardActionArea,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { IRecipe, IRecipeAuthor } from '../types/recipe.types';
import { AccessTime, Person, Star, ThumbUpOffAlt } from '@mui/icons-material';
import { CardFooter } from 'react-bootstrap';

interface IRecipeCard {
  recipe: IRecipe;
}

export default function RecipesCard({ recipe }: IRecipeCard) {
  const getAuthorName = (author: IRecipeAuthor | string): string => {
    if (typeof author === 'string') return 'Unknown';
    return `${author.firstName} ${author.lastName}`;
  };

  return (
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
      <CardActionArea
        component={Link}
        to={`/recipe/${recipe._id}`}
        sx={{ flexGrow: 1 }}
      >
        <CardMedia
          component='img'
          height='194'
          image={
            recipe.details.thumbnail || 'https://via.placeholder.com/400x300'
          }
          alt={recipe.basicInfo.recipeName}
          sx={{ objectFit: 'cover' }}
        />
        <CardContent>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItem: 'center',
              // px: { xs: 0, sm: 2 },
              py: 1,
            }}
          >
            <Typography
              variant='caption'
              sx={{ fontWeight: 'bold', textWrap: 'no-wrap' }}
            >
              <AccessTime sx={{ fontSize: 15 }} />{' '}
              {recipe.basicInfo.duration.value}
            </Typography>
            <Typography
              variant='caption'
              sx={{
                fontWeight: 'bold',
                textWrap: 'no-wrap',
                color: `${
                  recipe.basicInfo.level.value === 'Easy'
                    ? 'success.main'
                    : recipe.basicInfo.level.value === 'Medium'
                    ? 'warning.main'
                    : 'error.main'
                }`,
              }}
            >
              <ThumbUpOffAlt sx={{ fontSize: 15 }} />{' '}
              {recipe.basicInfo.level.value}
            </Typography>
          </Box>
          <Typography
            variant='body1'
            sx={{
              height: 70,
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          >
            {recipe.basicInfo.recipeName}
          </Typography>

          {recipe.averageRating !== undefined && (
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <Star
                sx={{
                  color: 'warning.main',
                  fontSize: 20,
                  mr: 0.5,
                }}
              />
              <Typography variant='body2' sx={{ fontWeight: 'bold', mr: 0.5 }}>
                {recipe.averageRating.toFixed(1)}
              </Typography>
              <Typography variant='body2' color='text.secondary'>
                ({recipe.totalReviews || 0} reviews)
              </Typography>
            </Box>
          )}
        </CardContent>
        <CardFooter>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              color: 'text.secondary',
              px: { xs: 0, sm: 2 },
              py: 1,
            }}
          >
            <Person sx={{ fontSize: 16, mr: 0.5 }} />
            <Typography variant='caption'>
              By {getAuthorName(recipe.author)}
            </Typography>
          </Box>
        </CardFooter>
      </CardActionArea>
    </Card>
  );
}
