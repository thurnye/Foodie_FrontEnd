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

import ImageLayout from '../../../../../../app/components/Layouts/ImageLayout';
import Heading from '../../../../../../app/components/UI/Heading';

import {
  INutritionalFact,
  IRecipe,
  IRecipeBasicInfo,
  IRecipeDetails,
  IRecipeDirections,
} from '../../../../../Recipe/types/recipe.types';
import IngredientsList from '../../../IngredientsList';
import DirectionStepper from '../../../DirectionStepper';
import { IRecipeFormType } from '../../../../types/dashboard_recipe.types';

interface RecipePreviewContentProps {
  recipe: IRecipeFormType;
}

const RecipePreviewContent: React.FC<RecipePreviewContentProps> = ({
  recipe,
}) => {
  const basicInfo = recipe.basicInfo || {};
  const details = recipe.details || {};
  const nutritionalFacts = recipe.nutritionalFacts || {};
  const directions = recipe.directions || {};

  const { recipeName, duration, level, serving, tags = [], categories = [] } = basicInfo;
  const { thumbnail, about = [], faqs = [] } = details;
  const { methods = [], ingredients = [] } = directions;

  // Check if recipe has any content
  const hasBasicInfo =
    (recipeName && recipeName !== '') ||
    (duration?.value && duration.value !== '') ||
    (level?.value && level.value !== '') ||
    (serving?.value && serving.value !== '') ||
    (categories && categories.length > 0) ||
    (tags && tags.length > 0);
  const hasDetails = thumbnail || about.length > 0 || faqs.length > 0;
  const hasDirections = methods.length > 0 || ingredients.length > 0;
  const hasNutritionalFacts =
    nutritionalFacts && Object.keys(nutritionalFacts).length > 0;

  const hasContent =
    hasBasicInfo || hasDetails || hasDirections || hasNutritionalFacts;
  // Display empty state if no content
  if (!hasContent) {
    return (
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '400px',
          textAlign: 'center',
          py: 8,
        }}
      >
        <Typography variant='h4' gutterBottom sx={{ color: '#999', mb: 2 }}>
          No Recipe to Preview
        </Typography>
        <Typography variant='body1' sx={{ color: '#666', maxWidth: 500 }}>
          Start creating your recipe by filling in the basic information,
          details, directions, and nutritional facts. Your recipe preview will
          appear here once you add content.
        </Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ pb: 6 }}>
      {/* Recipe Title */}
      <Typography variant='h3' gutterBottom>
        {recipeName}
      </Typography>

      {/* Thumbnail + Info */}
      <Box
        sx={{
          width: { xs: '100%', lg: '50vw' },
          maxWidth: 650,
          mx: 'auto',
          mt: 3,
        }}
      >
        {thumbnail && (
          <CardMedia
            component='img'
            image={thumbnail}
            alt={recipeName || 'Recipe'}
          />
        )}

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
            {duration?.value || 'N/A'}
          </Typography>
          <Typography variant='caption' sx={{ fontWeight: 700, fontSize: 12 }}>
            <FaRegThumbsUp style={{ marginRight: 3, fontSize: 13 }} />
            {level?.value || 'N/A'}
          </Typography>
          <Typography variant='caption' sx={{ fontWeight: 700, fontSize: 12 }}>
            <FaUtensils style={{ marginRight: 3, fontSize: 13 }} />
            Serves {serving?.value || 'N/A'}
          </Typography>
        </Box>

        {/* About Section */}
        <Box>
          {about.map((el, i) => (
            <Box sx={{ width: '100%', my: 2 }} key={`about_recipe_${i}`}>
              {el.type === 'text' && parser(el.value as string)}

              {el.type === 'image' &&
                Array.isArray(el.value) &&
                el.value.length > 0 && (
                  <Card sx={{ boxShadow: 'none', border: 0, my: 3 }}>
                    <CardContent>
                      <ImageLayout
                        isMultiple={el.isMultiple}
                        imageList={el.value}
                      />
                    </CardContent>
                  </Card>
                )}

              {el.type === 'video' &&
                typeof el.value === 'string' &&
                el.value && (
                  <Box
                    sx={{
                      width: '100%',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      mt: 2,
                    }}
                  >
                    {parser(el.value)}
                  </Box>
                )}
            </Box>
          ))}
        </Box>

        {/* Ingredients */}
        {ingredients.length > 0 && (
          <Box sx={{ my: 3 }}>
            <Heading title='Ingredients' />
            <IngredientsList ingredients={ingredients} />
          </Box>
        )}

        {/* Nutritional Info */}
        {nutritionalFacts && Object.keys(nutritionalFacts).length > 0 && (
          <Box sx={{ my: 3 }}>
            <Heading title='Nutritional Information' />
            <Card sx={{ mt: 2 }}>
              <CardContent>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                  {Object.entries(nutritionalFacts).map(([key, value]) => (
                    <Box
                      key={key}
                      sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        py: 0.5,
                        borderBottom: '1px solid #f0f0f0',
                      }}
                    >
                      <Typography
                        variant='body2'
                        sx={{ textTransform: 'capitalize' }}
                      >
                        {value.name}
                      </Typography>
                      <Typography variant='body2' sx={{ fontWeight: 600 }}>
                        {value.amount} {value.unit}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </CardContent>
            </Card>
          </Box>
        )}

        {/* Directions */}
        {methods.length > 0 && (
          <Box sx={{ my: 5 }}>
            <Heading title='Directions' />
            <DirectionStepper methods={methods} />
          </Box>
        )}

        {/* Tags */}
        {tags.length > 0 && (
          <Box
            sx={{
              my: 5,
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
            }}
          >
            <Typography sx={{ mr: 1, mb: 1 }}>Tags:</Typography>
            {tags.map((el, index) => (
              <Typography
                key={`${el.value}_${index}`}
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
        )}

        {/* FAQs */}
        {faqs.length > 0 && (
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

export default RecipePreviewContent;
