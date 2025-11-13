import React from 'react';
import { Box, Typography, Divider, Grid } from '@mui/material';
import { GiCampCookingPot, GiLever } from 'react-icons/gi';
import { HandPlatter } from 'lucide-react';
import parser from 'html-react-parser';
import { IRecipe } from '../../../Recipe/types/recipe.types';

interface IFoodLayoutTwo {
  data: IRecipe;
}

export default function FoodLayoutTwo({ data }: IFoodLayoutTwo) {
  return (
    <Box key='food-layout-two' sx={{ display: 'flex', pt: 2 }}>
      {/* First Layout PAGE */}
      <Box
        sx={{
          width: 794,
          height: 1123,
          overflow: 'hidden',
        }}
      >
        <Box
          sx={{
            height: '100%',
            display: 'flex',
            flexDirection: 'row',
          }}
        >
          {/* Left side - Image */}
          <Box
            sx={{
              width: '50%',
              backgroundImage:
                "url('https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=800&h=600&fit=crop')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />

          {/* Right side - Content */}
          <Box
            sx={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: '#fff',
              pr: 5,
            }}
          >
            {/* Top info bar */}
            <Box sx={{ backgroundColor: '#ebebeb', p: 1 }}>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                {/* Cooking */}
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
                      width: 80,
                      borderWidth: 1.5,
                      borderColor: 'black',
                      borderStyle: 'solid',
                    }}
                  />
                  <Typography variant='caption'>
                    {data.basicInfo.duration.value}
                  </Typography>
                </Box>

                {/* Level */}
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
                      width: 80,
                      borderWidth: 1.5,
                      borderColor: 'black',
                      borderStyle: 'solid',
                    }}
                  />
                  <Typography variant='caption'>
                    {data.basicInfo.level.value}
                  </Typography>
                </Box>

                {/* Serving */}
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
                      width: 80,
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
            <Box sx={{ p: 3, flex: 1 }}>
              {/* Section title */}
              <Box
                sx={{
                  mb: 2,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Box sx={{ flexGrow: 1, borderTop: '1px solid black' }} />
                <Typography
                  sx={{
                    mx: 2,
                    fontWeight: 'bold',
                    fontSize: 14,
                    letterSpacing: 1,
                  }}
                >
                  INGREDIENTS
                </Typography>
                <Box sx={{ flexGrow: 1, borderTop: '1px solid black' }} />
              </Box>

              {/* Ingredients grid */}
              <Grid container spacing={1}>
                {data.directions.ingredients.map((el, indx) => (
                  <Grid item xs={6} key={indx}>
                    <Typography
                      variant='body2'
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

              <Box sx={{ flexGrow: 1, mt: 3 }}>
                <Grid container spacing={4}>
                  {Array.from(Array(6)).map((el, indx) => (
                    <Grid item xs={6} key={indx}>
                      <Box sx={{ textAlign: 'center' }}>
                        <Box
                          component='img'
                          src='https://images.unsplash.com/photo-1488477181946-6428a0291777?w=800&h=600&fit=crop'
                          alt='Muesli'
                          sx={{
                            width: '100%',
                            height: 'auto',
                            objectFit: 'cover',
                            pt: 2,
                          }}
                        />
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Second Layout PAGE */}
      <Box
        sx={{
          width: 794,
          height: 1123,
          p: 5,
          px: 10,
          bgcolor: '#fff',
        }}
      >
        {/* Recipe Title */}
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

        {/* About / Intro */}
        <Typography
          sx={{ fontSize: '1rem', lineHeight: 1.6, textAlign: 'justify' }}
        >
          {data.details.about.find((block) => block.type === 'text')?.value}
        </Typography>

        {/* Directions Section */}
        <Box sx={{ mt: 6 }}>
          <Typography
            sx={{
              fontFamily: "'Georgia', serif",
              fontSize: '1.4rem',
              fontWeight: 700,
              color: '#2d2d2d',
              mb: 3,
            }}
          >
            Instructions
          </Typography>

          {data.directions.methods.map((method, index) =>
            method.step.map((el, i) => (
              <React.Fragment key={i}>
                <Box sx={{ height: 'auto' }}>
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
    </Box>
  );
}
