import React from 'react';
import { Box, Typography, Divider, Grid } from '@mui/material';
import { GiCampCookingPot, GiLever } from 'react-icons/gi';
import { HandPlatter } from 'lucide-react';
import parser from 'html-react-parser';
import { IRecipe } from '../../../Recipe/types/recipe.types';

interface IFoodLayoutNine {
  data: IRecipe;
}

export default function FoodLayoutNine({ data }: IFoodLayoutNine) {
  return (
    <Box key='food-layout-nine' sx={{ display: 'flex' }}>
      {/* First half */}
      <Box
        sx={{
          width: '50%',
          bgcolor: '#fff',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/* Thumbnail Image */}
        <Box
          component='img'
          src='https://images.unsplash.com/photo-1488477181946-6428a0291777?w=800&h=600&fit=crop'
          alt='Muesli'
          sx={{ width: '100%', height: '50%', objectFit: 'cover' }}
        />
        {/* Instruction */}
        <Box sx={{ pr: 6, pt: 3, px: 5 }}>
          <Typography
            sx={{
              fontFamily: "'Georgia', serif",
              fontSize: '1.2rem',
              fontWeight: 600,
              color: '#2d2d2d',
              mb: 2,
            }}
          >
            Instructions
          </Typography>

          {data.directions.methods.map((method, index) =>
            method.step.map((el, i) => (
              <React.Fragment key={i}>
                <Box sx={{ height: 'auto', pl: 3 }}>
                  {/* Text Content */}
                  {el.type === 'text' && (
                    <Box
                      sx={{
                        display: 'flex',
                      }}
                    >
                      <Typography sx={{ mb: 2, whiteSpace: 'pre-line', mx: 2 }}>
                        {index + 1}.
                      </Typography>
                      <Typography sx={{ mb: 2, whiteSpace: 'pre-line' }}>
                        {parser(el.value as string)}
                      </Typography>
                    </Box>
                  )}
                </Box>
              </React.Fragment>
            ))
          )}
        </Box>
      </Box>

      {/* second half */}
      <Box
        sx={{
          width: 794,
          height: 1123,
          maxContentHeight: 1050,
          p: 5,
          pl: 14,
        }}
      >
        {/* Recipe Name */}
        <Box>
          <Typography
            sx={{
              fontFamily: "'Arial', sans-serif",
              fontSize: '3rem',
              fontWeight: 700,
              color: '#2d2d2d',
              letterSpacing: '0.05em',
              mb: 2,
              lineHeight: 1.2,
              textAlign: 'center',
            }}
          >
            {data.basicInfo.recipeName.toUpperCase()}
          </Typography>

          {/* Description */}
          <Typography>
            {data.details.about.find((block) => block.type === 'text')?.value}
          </Typography>

          {/* Level, Serving, Duration */}
          <Box sx={{ mt: 2, backgroundColor: '#ebebeb', p: 1 }}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                width: '80%',
                margin: 'auto',
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <GiCampCookingPot size={30} />
                <Typography variant='caption'>Cooking</Typography>
                <Divider
                  sx={{
                    width: 100,
                    borderWidth: 1.5,
                    borderColor: 'black',
                    borderStyle: 'solid',
                  }}
                />
                <Typography variant='caption'>
                  {data.basicInfo.duration.value}
                </Typography>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <GiLever
                  size={30}
                  color={
                    data.basicInfo.level.value.toLowerCase() === 'easy'
                      ? '#2E7D32'
                      : data.basicInfo.level.value.toLowerCase() === 'medium'
                      ? '#ED6C02'
                      : '#D32F2F'
                  }
                />
                <Typography variant='caption'>Level</Typography>
                <Divider
                  sx={{
                    width: 100,
                    borderWidth: 1.5,
                    borderColor: 'black',
                    borderStyle: 'solid', // ensures visible border
                  }}
                />
                <Typography variant='caption'>
                  {data.basicInfo.level.value}
                </Typography>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <HandPlatter size={30} color='#0288D1' />
                <Typography variant='caption'>Serving</Typography>
                <Divider
                  sx={{
                    width: 100,
                    borderWidth: 1.5,
                    borderColor: 'black',
                    borderStyle: 'solid',
                  }}
                />
                <Typography variant='caption'>
                  {Number(data.basicInfo.serving.value) > 1
                    ? `${data.basicInfo.serving.value} PORTIONS`
                    : `${data.basicInfo.serving.value} PORTION`}
                </Typography>
              </Box>
            </Box>
          </Box>

          {/* Ingredients */}
          <Box>
            <Box
              sx={{
                m: 3,
                mt: 4,
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              <Box sx={{ borderTop: '1px solid black', width: 300 }} />
              <Box
                sx={{
                  py: 0.5,
                  px: 2,
                  width: 150,
                  textAlign: 'center',
                }}
              >
                <Typography>INGREDIENTS</Typography>
              </Box>
              <Box sx={{ borderTop: '1px solid black', width: 300 }} />
            </Box>

            <Box>
              <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={{ xs: 2 }} columns={{ xs: 12 }}>
                  {data.directions.ingredients.map((el, indx) => (
                    <Grid item xs={3} sm={4} md={4}>
                      <Typography
                        sx={{
                          display: 'list-item',
                          listStyleType: 'disc',
                          ml: 3,
                          lineHeight: 1.6,
                        }}
                      >
                        {el.name}
                      </Typography>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
