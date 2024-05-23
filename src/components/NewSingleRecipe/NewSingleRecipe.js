import React from 'react';
import styles from './NewSingleRecipe.module.css';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import NewAvatar from '../NewAvatar/NewAvatar';
import { FaPinterestSquare } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import parser from 'html-react-parser';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { IoTimeOutline } from 'react-icons/io5';
import { FaRegThumbsUp } from 'react-icons/fa';
import { FaUtensils } from 'react-icons/fa6';
import { getRandomInt } from '../../util/commons';
import ImageLayout from '../ImageLayout/ImageLayout';
import VideoPlayer from '../VideoPlayer/VideoPlayer';
import Ratings from '../Ratings/Ratings';
import Headings from '../UI/heading';
import DirectionStepper from '../DirectionStepper/DirectionStepper';
import IngredientsList from '../IngredientsList/IngredientsList';
import NutrientsTable from '../NutritionTable/NutritionTable';
import FavBookMarkPrintRecipe from '../FavBookMarkPrintRecipe/FavBookMarkPrintRecipe';
import Recommendations from './Recommendations/Recommendations';
import BookAd from './BookAd/BookAd';
import ReviewForm from './Reviews/ReviewForm/ReviewForm';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { MdExpandMore } from 'react-icons/md';

const NewSingleRecipe = ({ recipe }) => {
  const { basicInfo, details, nutritionalFacts, directions } = recipe;

  const { recipeName, duration, level, serving, tags } = basicInfo;

  const { thumbnail, about, faqs } = details;
  const { methods, ingredients } = directions;

  return (
    <Box className={styles.NewSingleRecipe}>
      <Typography variant='h3' gutterBottom>
        {recipeName}
      </Typography>
      <Box
        sx={{
          display: 'flex',
          justifyContent: { xs: 'flex-start', md: 'space-between' },
          alignItems: { xs: 'flex-start', md: 'center' },
          flexDirection: { xs: 'column', md: 'row' },
        }}
      >
        <NewAvatar
          title={'Test Tester'}
          image={''}
          subHeader={'May 15th 2024'}
        />

        <Box
          sx={{
            width: { xs: '100%', md: 'initial' },
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              background: '#4267B2',
              mr: 1,
              padding: '3px',
            }}
          >
            <FaFacebookSquare color='white' />
            <Typography variant='caption' display='block' color='white'>
              Facebook
            </Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              mr: 1,
              padding: '3px',
              background: 'black',
            }}
          >
            <FaXTwitter color='white' />
            <Typography variant='caption' display='block' color='black'>
              X-twitter
            </Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              mr: 1,
              padding: '3px',
              background: '#2867B2',
            }}
          >
            <FaLinkedin color='white' />
            <Typography variant='caption' display='block' color='white'>
              LinkedIn
            </Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              mr: 1,
              padding: '3px',
              background: '#E60023',
            }}
          >
            <FaPinterestSquare color='white' />
            <Typography variant='caption' display='block' color='white'>
              Pinterest
            </Typography>
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          width: { xs: '100%', lg: '50vw' },
          maxWidth: '650px',
          m: 'auto',
          mt: 3,
        }}
      >
        <CardMedia component='img' image={thumbnail} alt={recipeName} />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-evenly',
            alignItems: 'center',
          }}
        >
          <Typography
            variant='caption'
            gutterBottom
            sx={{
              fontWeight: 700,
              fontSize: 12,
            }}
          >
            <IoTimeOutline style={{ marginRight: '3px', fontSize: 13 }} />
            {duration.value}
          </Typography>
          <Typography
            variant='caption'
            gutterBottom
            sx={{
              fontWeight: 700,
              fontSize: 12,
            }}
          >
            <FaRegThumbsUp style={{ marginRight: '3px', fontSize: 13 }} />
            {level.value}
          </Typography>
          <Typography
            variant='caption'
            gutterBottom
            sx={{
              fontWeight: 700,
              fontSize: 12,
            }}
          >
            <FaUtensils style={{ marginRight: '3px', fontSize: 13 }} />
            Serves {serving.value}
          </Typography>
        </Box>

        <Box>
          {about?.map((el, i) => (
            <Box sx={{ width: '100%', my: 2 }} key={getRandomInt()}>
              {el.type === 'text' && (
                <Typography>{parser(el.value)}</Typography>
              )}
              {el.type === 'image' && (
                <Box sx={{ maxWidth: 650, m: 'auto' }}>
                  <Box sx={{ mb: 3 }}>
                    <Card sx={{ boxShadow: 'none', border: 0 }}>
                      <CardContent>
                        <ImageLayout
                          isMultiple={el.isMultiple}
                          imageList={el.value}
                        />
                      </CardContent>
                    </Card>
                  </Box>
                  <Box></Box>
                </Box>
              )}

              {el.type === 'video' && (
                <Box
                  sx={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <VideoPlayer link={el.value} />
                </Box>
              )}
            </Box>
          ))}
        </Box>

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
            background: '#f8f6e6',
            p: 2.5,
            width: 200,
          }}
        >
          <Typography sx={{ mr: 1 }}>Ratings:</Typography>
          <Ratings />
        </Box>

        {/* Ingredients */}
        <Box
          sx={{
            my: 3,
          }}
        >
          <Headings title='Ingredients' />
          <Box sx={{ mt: -3 }}>
            <IngredientsList ingredients={ingredients} />
          </Box>
        </Box>

        {/* Nutritional Information */}
        <Box
          sx={{
            my: 3,
          }}
        >
          <Box>
            <NutrientsTable nutrients={nutritionalFacts} />
          </Box>
        </Box>

        {/* Directions */}
        <Box
          sx={{
            my: 3,
            mt: 5,
          }}
        >
          <Headings title='Directions' />
          <Box>
            <DirectionStepper methods={methods} />
          </Box>
        </Box>

        {/* Fav, Print, Bookmark */}
        <Box
          sx={{
            my: 3,
            mt: 5,
          }}
        >
          <FavBookMarkPrintRecipe />
        </Box>

        {/* Tags */}
        <Box
          sx={{
            my: 3,
            mt: 5,
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center'
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
                p: 0.3,
                px: 0.8,
                textWrap: 'no-wrap',
              }}
            >
              {el.value}
            </Typography>
          ))}
        </Box>

        {/* FAQs */}
        {faqs.length > 0 && (
          <Box
            sx={{
              my: 3,
              mt: 5,
            }}
          >
            <Typography variant='h5' gutterBottom sx={{ mb: 3 }}>
              Frequently Asked Questions
            </Typography>
            {faqs?.map((el) => (
              <Accordion sx={{ maxWidth: 650, mb: 1 }} key={getRandomInt()}>
                <AccordionSummary
                  expandIcon={<MdExpandMore />}
                  aria-controls='panel1a-content'
                  id='panel1a-header'
                >
                  <Typography>{el.ques}</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ background: '#F8F7FA', m: 2 }}>
                  <Typography sx={{ pt: 2, pb: 2 }}>{el.ans}</Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>
        )}
        {/* Books */}
        <Box
          sx={{
            my: 3,
            mt: 5,
          }}
        >
          <BookAd />
        </Box>

        {/* Recommendations */}
        <Box
          sx={{
            my: 3,
            mt: 5,
          }}
        >
          <Recommendations />
        </Box>

        {/* Review Form */}
        <Box
          sx={{
            my: 3,
            mt: 5,
          }}
        >
          <ReviewForm />
        </Box>
      </Box>
    </Box>
  );
};

export default NewSingleRecipe;
