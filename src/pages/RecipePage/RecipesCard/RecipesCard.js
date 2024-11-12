import React from 'react';
import styles from './RecipesCard.module.css';
import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import { Typography } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import { Link } from 'react-router-dom';

const RecipesCard = ({ recipe }) => {
  const {
    basicInfo: { duration, level, recipeName },
    details: { thumbnail },
  } = recipe;
  return (
    <Box className={styles.RecipesCard}>
      <Link
        to={{
          pathname: `/recipe/${recipe._id}`,
          search: `?q=${recipe.basicInfo.recipeName
            .toLocaleLowerCase()
            .replaceAll(' ', '-')}`,
        }}
        state={{ recipeId: recipe._id }}
      >
      <CardMedia
        component='img'
        height='194'
        image={thumbnail}
        alt={recipeName}
      />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItem: 'center',
          px: { xs: 0, sm: 2 },
          py: 1,
        }}
      >
        <Typography
          variant='caption'
          sx={{ fontWeight: 'bold', textWrap: 'no-wrap' }}
        >
          <AccessTimeIcon sx={{ fontSize: 15 }} /> {duration.value}
        </Typography>
        <Typography
          variant='caption'
          sx={{ fontWeight: 'bold', textWrap: 'no-wrap' }}
        >
          <ThumbUpOffAltIcon sx={{ fontSize: 15 }} /> {level.value}
        </Typography>
      </Box>
      <Typography variant='body1'>{recipeName}</Typography>

      </Link>
    </Box>
  );
};

export default RecipesCard;
