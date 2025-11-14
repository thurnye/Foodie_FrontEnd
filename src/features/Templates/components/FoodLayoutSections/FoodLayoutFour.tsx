import React from 'react';
import { Box, Typography, Divider, Grid } from '@mui/material';
import { GiCampCookingPot, GiLever } from 'react-icons/gi';
import { HandPlatter } from 'lucide-react';
import parser from 'html-react-parser';
import { IRecipeData } from '../../../CookBook/types/book.types';

interface IFoodLayoutFour {
  data: IRecipeData;
}

export default function FoodLayoutFour({ data }: IFoodLayoutFour) {
  return (
    <Box key='food-layout-four' sx={{ display: 'flex' }}>
      <Box
        sx={{
          width: 794,
          height: 1123,
          overflow: 'hidden',
        }}
      >
        {/* thumbnail */}
        <Box sx={{ flexGrow: 1 }}>
          <Box
            component='img'
            src='https://images.unsplash.com/photo-1488477181946-6428a0291777?w=800&h=600&fit=crop'
            alt='Muesli'
            sx={{
              width: '100%',
              height: 300,
              objectFit: 'cover',
            }}
          />
        </Box>

        <Box sx={{ px: 5 }}>
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
              pr: 5,
            }}
          >
            {data.basicInfo.recipeName.toUpperCase()}
          </Typography>

          {/* Description */}
          <Typography sx={{ pr: 5 }}>
            {data.details.about.find((block) => block.type === 'text')?.value}
          </Typography>
        </Box>

        {/* Ingredients */}
        <Box sx={{ p: 3, flex: 1, px: 9 }}>
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
        </Box>
      </Box>

      {/* Second Layout PAGE */}
      <Box
        sx={{
          width: 794,
          height: 1123,
          bgcolor: '#fff',
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
            }}
          >
            {/* Instruction */}
            <Box sx={{ p: 3 }}>
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
                    <Box sx={{ height: 'auto' }}>
                      {/* Text Content */}
                      {el.type === 'text' && (
                        <Box
                          sx={{
                            display: 'flex',
                          }}
                        >
                          <Typography sx={{ mb: 2, whiteSpace: 'pre-line' }}>
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

            {/* MetaDetails */}
            <Box sx={{ backgroundColor: '#ebebeb', p: 1, mt: 2 }}>
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
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
