import React from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import parser from 'html-react-parser';
import { IoTimeOutline } from 'react-icons/io5';
import { FaRegThumbsUp } from 'react-icons/fa';
import { FaUtensils } from 'react-icons/fa6';
import { MdExpandMore } from 'react-icons/md';

import FavBookMarkPrintRecipe from './FavBookMarkPrintRecipe';
import Recommendations from './Recommendations';
import BookAd from './BookAd';
import ReviewForm from './ReviewForm';
import Share from './Share';
import HelmentSEO from '../../../app/utils/HelmentSEO';
import AppAvatar from '../../../app/components/AppAvatar';
import ImageLayout from './ImageLayout';
import VideoPlayer from './VideoPlayer';
import Ratings from './Ratings';
import Heading from '../../../app/components/UI/Heading';
import DirectionStepper from './DirectionStepper';
import IngredientsList from './IngredientsList';
import { API_BASE_URL } from '../../../shared/services/apiClient.service';
import { getDateShort } from '../../../app/utils/app.date';
import { IRecipe } from '../types/recipe.types';
import NutrientsTable from './NutritionTable';

interface IRecipeContainerProps {
  recipe: IRecipe;
}

const RecipeContainer: React.FC<IRecipeContainerProps> = ({ recipe }) => {
  const { basicInfo, details, nutritionalFacts, directions } = recipe;
  const { recipeName, duration, level, serving, tags } = basicInfo;
  const { thumbnail, about, faqs } = details;
  const { methods, ingredients } = directions;

  return (
    <Box sx={{ pb: 6 }}>
      {/* SEO */}
      <HelmentSEO
        title={recipeName}
        description=''
        thumbnail={thumbnail}
        name={recipeName}
        type='article'
        url={`${API_BASE_URL}/recipe/${recipe._id}`}
      />

      {/* Recipe Title */}
      <Typography variant='h3' gutterBottom>
        {recipeName}
      </Typography>

      {/* Author + Share */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
        }}
      >
        <AppAvatar
          title={
            recipe.author
              ? `${recipe.author.firstName ?? ''} ${
                  recipe.author.lastName ?? ''
                }`
              : 'John Doe'
          }
          image={recipe.author?.avatar}
          subHeader={
            recipe.createdAt
              ? getDateShort(recipe.createdAt)
              : getDateShort(new Date().toISOString())
          }
          id={recipe.author.userId}
        />

        <Share
          avatar={thumbnail}
          title={recipeName}
          shareUrl={window.location.href}
        />
      </Box>

      {/* Thumbnail + Info */}
      <Box
        sx={{
          width: { xs: '100%', lg: '50vw' },
          maxWidth: 650,
          mx: 'auto',
          mt: 3,
        }}
      >
        <CardMedia component='img' image={thumbnail} alt={recipeName} />

        {/* Info Badges */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            mt: 1,
          }}
        >
          <Typography variant='caption' sx={{ fontWeight: 700, fontSize: 12 }}>
            <IoTimeOutline style={{ marginRight: 3, fontSize: 13 }} />
            {duration?.value}
          </Typography>
          <Typography variant='caption' sx={{ fontWeight: 700, fontSize: 12 }}>
            <FaRegThumbsUp style={{ marginRight: 3, fontSize: 13 }} />
            {level?.value}
          </Typography>
          <Typography variant='caption' sx={{ fontWeight: 700, fontSize: 12 }}>
            <FaUtensils style={{ marginRight: 3, fontSize: 13 }} />
            Serves {serving?.value}
          </Typography>
        </Box>

        {/* About Section */}
        <Box>
          {about?.map((el, i) => (
            <Box sx={{ width: '100%', my: 2 }} key={`about_recipe_${i}`}>
              {el.type === 'text' && parser(el.value as string)}

              {el.type === 'image' && Array.isArray(el.value) && (
                <Card sx={{ boxShadow: 'none', border: 0, my: 3 }}>
                  <CardContent>
                    <ImageLayout
                      isMultiple={el.isMultiple}
                      imageList={el.value}
                    />
                  </CardContent>
                </Card>
              )}

              {el.type === 'video' && typeof el.value === 'string' && (
                <Box
                  sx={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    mt: 2,
                  }}
                >
                  <VideoPlayer link={el.value} />
                </Box>
              )}
            </Box>
          ))}
        </Box>

        {/* Ratings */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            background: '#f8f6e6',
            p: 2.5,
            width: 300,
            my: 3,
          }}
        >
          <Ratings value={0} />
        </Box>

        {/* Ingredients */}
        <Box sx={{ my: 3 }}>
          <Heading title='Ingredients' />
          <IngredientsList ingredients={ingredients} />
        </Box>

        {/* Nutritional Info */}
        <Box sx={{ my: 3 }}>
          <NutrientsTable nutrients={nutritionalFacts} />
        </Box>

        {/* Directions */}
        <Box sx={{ my: 5 }}>
          <Heading title='Directions' />
          <DirectionStepper methods={methods} />
        </Box>

        {/* Fav / Bookmark / Print */}
        <Box sx={{ my: 5 }}>
          <FavBookMarkPrintRecipe />
        </Box>

        {/* Tags */}
        <Box
          sx={{
            my: 5,
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
          }}
        >
          <Typography sx={{ mr: 1, mb: 1 }}>Tags:</Typography>
          {tags.map((el) => (
            <Typography
              key={el.value}
              sx={{
                mr: 1,
                mb: 1,
                background: '#f7f7f7',
                px: 0.8,
                py: 0.3,
                borderRadius: 0.5,
              }}
            >
              {el.value}
            </Typography>
          ))}
        </Box>

        {/* FAQs */}
        {faqs?.length > 0 && (
          <Box sx={{ my: 5 }}>
            <Typography variant='h5' gutterBottom sx={{ mb: 3 }}>
              Frequently Asked Questions
            </Typography>
            {faqs.map((el, i) => (
              <Accordion sx={{ maxWidth: 650, mb: 1 }} key={`faq_${i}`}>
                <AccordionSummary expandIcon={<MdExpandMore />}>
                  <Typography>{el.ques}</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ background: '#F8F7FA', m: 2 }}>
                  <Typography sx={{ py: 2 }}>{el.ans}</Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default RecipeContainer;
