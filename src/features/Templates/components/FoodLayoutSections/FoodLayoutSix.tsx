import React from 'react';
import { Box, Typography, Divider, Grid } from '@mui/material';
import { GiCampCookingPot, GiLever } from 'react-icons/gi';
import { HandPlatter } from 'lucide-react';
import parser from 'html-react-parser';
import { IRecipe } from '../../../Recipe/types/recipe.types';

interface IFoodLayoutSix {
  data: IRecipe;
}

export default function FoodLayoutSix({ data }: IFoodLayoutSix) {
  return (
    <Box key='food-layout-six' sx={{ display: 'flex' }}>
      {/* First Layout PAGE */}
      <Box
        sx={{
          width: 794,
          height: 1123,
          overflow: 'hidden',
          backgroundImage:
            "url('https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=800&h=600&fit=crop')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></Box>

      {/* Second Layout PAGE */}
      <Box
        sx={{
          width: 794,
          height: 1123,
          p: 5,
          pl: 15,
          bgcolor: '#fff',
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
                  {data.directions.ingredients.slice(0, 4).map((el, indx) => (
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
          {/* Instruction */}
          <Box sx={{}}>
            {/* Header */}
            <Typography
              sx={{
                fontFamily: "'Georgia', serif",
                fontSize: '1.8rem',
                fontWeight: 700,
                color: '#2d2d2d',
                mb: 3,
              }}
            >
              Directions
            </Typography>
            <Grid container spacing={3}>
              {data.directions.methods
                .slice(0, 2)
                .map((method, methodIndex) => (
                  <Grid item xs={12} sm={6} key={`method_${methodIndex}`}>
                    <Box>
                      {/* Step Text */}
                      {method.step
                        .filter((s) => s.type === 'text')
                        .map((el, textIndex) => (
                          <Box
                            key={`text_${methodIndex}_${textIndex}`}
                            sx={{
                              display: 'flex',
                              alignItems: 'flex-start',
                              mb: 2,
                            }}
                          >
                            <Typography
                              sx={{
                                fontWeight: 600,
                                mr: 1.5,
                                fontSize: '1rem',
                                color: '#555',
                                lineHeight: 1.5,
                              }}
                            >
                              {methodIndex + 1}.
                            </Typography>
                            <Typography
                              sx={{
                                fontSize: '1rem',
                                color: '#333',
                                whiteSpace: 'pre-line',
                                lineHeight: 1.5,
                              }}
                            >
                              {parser(el.value as string)}
                            </Typography>
                          </Box>
                        ))}
                    </Box>
                  </Grid>
                ))}
            </Grid>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
