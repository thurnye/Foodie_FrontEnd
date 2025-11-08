import React, { useState, useRef, useEffect } from 'react';
import {
  Box,
  Paper,
  Typography,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Chip,
  Card,
  CardMedia,
  Divider,
  Stack,
  CardContent,
  Grid,
  List,
  ListItem,
} from '@mui/material';
import { usePDF } from 'react-to-pdf';
import { IRecipe } from '../../../Recipe/types/recipe.types';
import parser from 'html-react-parser';
import ImageLayout from '../../../../app/components/Layouts/ImageLayout';
import { GiCampCookingPot, GiLever } from 'react-icons/gi';
import { HandPlatter } from 'lucide-react';

type PageLayout =
  | 'A3-portrait'
  | 'A3-landscape'
  | 'A4-portrait'
  | 'A4-landscape'
  | 'letter-portrait'
  | 'letter-landscape';

const data: IRecipe = {
  basicInfo: {
    recipeName: 'Smoked Tofu Salad with spicy peanut sauce',
    duration: {
      value: '10 Minutes',
      label: '10 Minutes',
    },
    level: {
      value: 'Medium',
      label: 'Medium',
    },
    serving: {
      value: '1',
      label: '1',
    },
    tags: [
      {
        value: '10 ingredients or less',
        label: '10 ingredients or less',
      },
      {
        value: 'appetizer',
        label: 'appetizer',
      },
      {
        value: 'bbb',
        label: 'bbb',
      },
    ],
    categories: [
      {
        value: 'Pizza',
        label: 'Pizza',
      },
    ],
  },
  details: {
    thumbnail:
      'http://res.cloudinary.com/xperiacloud/image/upload/v1688927568/l2qgx3ktzkfgwpxxdadx.jpg',
    about: [
      {
        type: 'text',
        value:
          "<p><strong>Lorem Ipsum</strong>&nbsp;is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>",
      },
      {
        type: 'image',
        value: [
          'https://images.unsplash.com/photo-1517666005606-69dea9b54865?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0ODIwNDd8MHwxfHNlYXJjaHwyfHx0b21hdG8lMjBwdXJlZXxlbnwwfHx8fDE3MTU4MDk5NTd8MA&ixlib=rb-4.0.3&q=80&w=400',
          'https://images.unsplash.com/photo-1542010589005-d1eacc3918f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0ODIwNDd8MHwxfHNlYXJjaHw0fHxyZWNpcGV8ZW58MHx8fHwxNzE1NzkzOTgyfDA&ixlib=rb-4.0.3&q=80&w=400',
        ],
        isUnsplash: true,
        isMultiple: true,
      },
      {
        type: 'text',
        value:
          "<p><strong>Lorem Ipsum</strong>&nbsp;is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>",
      },
    ],
    faqs: [
      {
        ques: 'ssdfs',
        ans: 'rrfgfgfgf',
      },
    ],
  },
  nutritionalFacts: [
    {
      name: 'calories',
      amount: '455',
      unit: 'g',
    },
    {
      name: 'satFat',
      amount: '344',
      unit: 'g',
    },
    {
      name: 'carbs',
      amount: '454',
      unit: 'g',
    },
    {
      name: 'protein',
      amount: '43',
      unit: 'g',
    },
    {
      name: 'cholesterol',
      amount: '343',
      unit: 'mg',
    },
    {
      name: 'sodium',
      amount: '654',
      unit: 'mg',
    },
    {
      name: 'sugar',
      amount: '432',
      unit: 'g',
    },
    {
      name: 'fibers',
      amount: '46',
      unit: 'g',
    },
  ],
  directions: {
    methods: [
      {
        step: [
          {
            type: 'title',
            value: 'Preparations',
          },
          {
            type: 'text',
            value:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          },
          {
            type: 'image',
            value: [
              'https://images.unsplash.com/photo-1542010589005-d1eacc3918f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0ODIwNDd8MHwxfHNlYXJjaHw0fHxyZWNpcGV8ZW58MHx8fHwxNzE1NzkzOTgyfDA&ixlib=rb-4.0.3&q=80&w=400',
              'https://images.unsplash.com/photo-1466637574441-749b8f19452f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0ODIwNDd8MHwxfHNlYXJjaHwyfHxyZWNpcGV8ZW58MHx8fHwxNzE1NzkzOTgyfDA&ixlib=rb-4.0.3&q=80&w=400',
            ],
            isUnsplash: true,
            isMultiple: true,
          },
        ],
      },
      {
        step: [
          {
            type: 'title',
            value: 'Boiling',
          },
          {
            type: 'text',
            value:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          },
        ],
      },
    ],
    ingredients: [
      {
        name: '2 pisces',
        type: 'main',
      },
      {
        name: '1 ½ cups peeled and chopped golden potato or sweet potato (large bite-size pieces)',
        type: 'main',
      },
      {
        name: '4 Eggs batches flax eggs* (2 flax eggs = 2 Tbsp flaxseed meal / 14 g + 5 Tbsp / 75 ml water)',
        type: 'main',
      },
      {
        name: '0.17 cup chopped walnuts or pecans (or sub other nut or seed of choice)',
        type: 'main',
      },
      {
        name: 'fresh herbs, such as chopped parsley and/or cilantro',
        type: 'dressing',
      },
      {
        name: '2 cups blueberries, washed and picked over for stems',
        type: 'main',
      },
      {
        name: '300 g Mayonaise',
        type: 'dressing',
      },
      {
        name: '1 tablespoon honey (light brown sugar or maple syrup also works)',
        type: 'main',
      },
    ],
  },
  _id: '',
  author: {
    userId: 'string',
    username: 'string',
    firstName: 'string',
    lastName: 'string',
    avatar: 'string',
    slogan: 'string',
  },
};

// Page dimensions in pixels (at 96 DPI)
const PAGE_DIMENSIONS: Record<
  PageLayout,
  { width: number; height: number; maxContentHeight: number }
> = {
  'A3-portrait': { width: 1123, height: 1587, maxContentHeight: 1487 },
  'A3-landscape': { width: 1587, height: 1123, maxContentHeight: 1023 },
  'A4-portrait': { width: 794, height: 1123, maxContentHeight: 1050 },
  'A4-landscape': { width: 1123, height: 794, maxContentHeight: 720 },
  'letter-portrait': { width: 816, height: 1056, maxContentHeight: 980 },
  'letter-landscape': { width: 1056, height: 816, maxContentHeight: 740 },
};

// Helper function to strip HTML tags and convert to plain text
const stripHtml = (html: string): string => {
  const tmp = document.createElement('DIV');
  tmp.innerHTML = html;
  return tmp.textContent || tmp.innerText || '';
};

// Split recipe into sections for pagination
const getRecipeSections = (recipe: IRecipe) => {
  const sections: React.ReactNode[] = [];

  // front coverPage
  sections.push(
    <Box
      key='coverPage'
      sx={{
        // border: '2px dotted green',
        height: '100%',
        position: 'relative',
      }}
    >
      {/* Background Image */}
      <Box
        sx={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=800&h=600&fit=crop')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          width: '100%',
          height: '100%',
          borderRadius: 1,
        }}
      >
        {/* Inner Content Box */}
        <Box
          sx={{
            pt: 4,
            // border: '2px dotted grey',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'center',
            height: 'inherit',
            margin: 'auto',
            background: 'white',
            width: 200,
            textAlign: 'center',
          }}
        >
          <Typography
            sx={{
              fontFamily: "'Arial', sans-serif",
              fontSize: '2rem',
            }}
          >
            Healthy
          </Typography>
          <Box>
            <Typography>Fresh</Typography>
            <Typography>Best Recipes</Typography>
            <Box sx={{ m: 4 }}>
              <Typography>Chef Mary Smith</Typography>
              <Typography>Special Edition</Typography>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'center',
          zIndex: 1,
          p: 6,
          borderRadius: 1,
          minWidth: '60%',
        }}
      >
        <Typography
          sx={{
            fontFamily: "'Arial', sans-serif",
            fontSize: '4rem',
            fontWeight: 700,
            color: '#2d2d2d',
            letterSpacing: '0.05em',
            mb: 2,
            lineHeight: 1.2,
          }}
        >
          THE COOKBOOK
        </Typography>
      </Box>
    </Box>
  );

  //welcome section
  sections.push(
    <Box
      key='welcome'
      sx={{
        // border: '2px dotted green',
        height: '100%',
        position: 'relative',
      }}
    >
      {/* Background Image */}
      <Box
        sx={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=800&h=600&fit=crop')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          width: '100%',
          height: '100%',
          borderRadius: 1,
          p: 10,
        }}
      >
        {/* Inner Content Box */}
        <Box
          sx={{
            height: 'inherit',
            margin: 'auto',
            background: 'white',
            width: '95%',
            textAlign: 'center',
          }}
        >
          <Box
            sx={{
              // border: '2px dotted grey',
              py: 8,
              px: 3,
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              alignItems: 'center',
              textAlign: 'start',
            }}
          >
            <Box>
              <Card sx={{ mb: 2, maxWidth: '100%' }}>
                <CardMedia
                  component='img'
                  image={recipe.details.thumbnail}
                  alt={recipe.basicInfo.recipeName}
                  sx={{ maxHeight: 300, objectFit: 'cover' }}
                />
              </Card>
            </Box>
            <Box>
              <Typography>Contact Me.</Typography>
              <Typography>Phone: +123-4566-7890</Typography>
              <Typography>Mail. use@example.com</Typography>
              <Typography>Web: www.example.com</Typography>
            </Box>
          </Box>
          <Box sx={{ px: 8, py: 4 }}>
            <Typography> WELCOME</Typography>
            <Typography>
              {' '}
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id
              beatae quas nisi ad? Deleniti veritatis delectus beatae nisi
              laudantium pariatur odio? Quas laborum et consectetur recusandae
              dolorem maxime commodi voluptatem?
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );

  //   max of 9 contents allowed
  //table of content section
  sections.push(
    <Box
      key='tableOfContent'
      sx={{
        height: '100%',
        position: 'relative',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          height: 'inherit',
        }}
      >
        <Box
          sx={{
            flexGrow: 1,
            // border: '2px dotted red',
            mt: -5,
            mb: 4,
            py: 10,
            px: 4,
            height: '115%',
            backgroundColor: '#f9f9f9',
          }}
        >
          <Typography
            sx={{
              fontFamily: "'Arial', sans-serif",
              fontSize: '4rem',
              fontWeight: 700,
              color: '#2d2d2d',
              letterSpacing: '0.05em',
              mb: 2,
              lineHeight: 1.2,
            }}
          >
            CONTENT
          </Typography>
          {Array.from(Array(9)).map((_, index) => (
            <Box
              sx={{
                display: 'flex',
                mb: 3,
              }}
            >
              <Box sx={{ mr: 2 }}>
                <Typography
                  sx={{
                    fontSize: '2rem',
                    fontWeight: 700,
                  }}
                >
                  0{index + 1}
                </Typography>
              </Box>
              <Box>
                <Typography
                  variant='body1'
                  sx={{
                    fontSize: '1.5rem',
                    fontWeight: 500,
                  }}
                >
                  Menu {index + 1}
                </Typography>
                <Typography variant='body2' sx={{ width: 300 }}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Molestiae, earum!
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
        <Box sx={{ width: 300, py: 4 }}>
          {Array.from(Array(3)).map((_, index) => (
            <Box>
              <Card sx={{ mb: 2, maxWidth: '100%', boxShadow: 'none' }}>
                <CardMedia
                  component='img'
                  image={recipe.details.thumbnail}
                  alt={recipe.basicInfo.recipeName}
                  sx={{ maxHeight: 300, objectFit: 'cover', p: 2 }}
                />
              </Card>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );

  //   Food Contents Sections
  //   Food section  - layout 1
  sections.push(
    <Box key='food-smoked-tofu' sx={{ display: 'flex', px: 5 }}>
      <Box
        sx={{
          width: 794,
          height: 1123,
          maxContentHeight: 1050,
          p: 5,
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis ad
            natus molestiae tenetur, provident rerum nostrum quas ratione saepe
            nam, voluptatem sit deleniti eveniet numquam odit autem dicta quos
            ex debitis officiis unde aliquam obcaecati. Ipsa, voluptatibus
            doloremque facere temporibus ratione, in nesciunt fuga praesentium
            eius alias ex incidunt. Qui quibusdam, optio neque pariatur,
            nesciunt, numquam cupiditate assumenda quam dolore blanditiis
            voluptates. Obcaecati odio magnam illum aperiam incidunt repudiandae
            repellat alias sapiente aliquam, itaque quaerat ad cum dicta,
            doloribus sequi! At iusto voluptatum nam quisquam eos aliquid
            consectetur, illo molestiae quam quia repellendus labore totam eius
            provident rem. Soluta, ducimus!
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
                      <Typography>{el.name}</Typography>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Box>
          </Box>

          {/* nutritionalFacts */}
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
                <Typography>NUTRIENTS</Typography>
              </Box>
              <Box sx={{ borderTop: '1px solid black', width: 300 }} />
            </Box>

            <Box>
              <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={{ xs: 2 }} columns={{ xs: 12 }}>
                  {data.nutritionalFacts.map((el, indx) => (
                    <Grid item xs={1.5}>
                      <Box sx={{ textAlign: 'center' }}>
                        <Typography>{el.name}</Typography>
                        <Typography>
                          {el.amount}
                          {el.unit}
                        </Typography>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Thumbnail Image */}
      {/* <Box
        sx={{
          width: 794,
          height: 1123,
          maxContentHeight: 1050,
          border: '2px dotted black',
        }}
      >
        <Box
          sx={{
            height: '100%',
            position: 'relative',
            p: 5,
          }}
        >
          <Box
            sx={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=800&h=600&fit=crop')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              width: '100%',
              height: '100%',
              borderRadius: 1,
            }}
          />
        </Box>
      </Box> */}

      {/* second half */}
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
          sx={{ width: '100%', height: '60%', objectFit: 'cover' }}
        />
        {/* Instruction */}
        <Box sx={{ p: 6 }}>
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
    </Box>
  );

  //   Food section  - layout 2
  sections.push(
    <Box key='food-fried-rice' sx={{ display: 'flex', px: 5 }}>
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
              borderRight: '2px dotted black',
            }}
          />

          {/* Right side - Content */}
          <Box
            sx={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: '#fff',
              borderLeft: '2px dotted black',
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

              {/* Nutrition */}
              <Box
                sx={{
                  mt: 2,
                  mb: 2,
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Box sx={{ flexGrow: 1, borderTop: '1px solid black' }} />
                <Box
                  sx={{
                    py: 0.5,
                    px: 2,
                    textAlign: 'center',
                  }}
                >
                  <Typography
                    sx={{ fontWeight: 'bold', fontSize: 14, letterSpacing: 1 }}
                  >
                    NUTRIENTS
                  </Typography>
                </Box>
                <Box sx={{ flexGrow: 1, borderTop: '1px solid black' }} />
              </Box>
              <Grid container spacing={1}>
                {data.nutritionalFacts.map((el, indx) => (
                  <Grid item xs={4} key={indx}>
                    <Box sx={{ textAlign: 'center' }}>
                      <Typography
                        sx={{
                          fontWeight: 500,
                          fontSize: 13,
                          textTransform: 'uppercase',
                          lineHeight: 1.4,
                        }}
                      >
                        {el.name}
                      </Typography>
                      <Typography sx={{ fontSize: 12 }}>
                        {el.amount}
                        {el.unit}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
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
        bgcolor: "#fff",
      }}
    >
      {/* Recipe Title */}
      <Typography
        sx={{
          fontFamily: "'Arial', sans-serif",
          fontSize: "3rem",
          fontWeight: 700,
          color: "#2d2d2d",
          letterSpacing: "0.05em",
          mb: 2,
          lineHeight: 1.2,
          textAlign: "center",
        }}
      >
        {data.basicInfo.recipeName.toUpperCase()}
      </Typography>

      {/* About / Intro */}
      <Typography sx={{ fontSize: "1rem", lineHeight: 1.6, textAlign: "justify" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis ad natus molestiae
        tenetur, provident rerum nostrum quas ratione saepe nam, voluptatem sit deleniti eveniet
        numquam odit autem dicta quos ex debitis officiis unde aliquam obcaecati. Ipsa,
        voluptatibus doloremque facere temporibus ratione, in nesciunt fuga praesentium eius alias
        ex incidunt. Qui quibusdam, optio neque pariatur, nesciunt, numquam cupiditate assumenda
        quam dolore blanditiis voluptates. Obcaecati odio magnam illum aperiam incidunt repudiandae
        repellat alias sapiente aliquam, itaque quaerat ad cum dicta, doloribus sequi! At iusto
        voluptatum nam quisquam eos aliquid consectetur, illo molestiae quam quia repellendus labore
        totam eius provident rem. Soluta, ducimus!
      </Typography>

      {/* Directions Section */}
      <Box sx={{ mt: 6 }}>
        <Typography
          sx={{
            fontFamily: "'Georgia', serif",
            fontSize: "1.4rem",
            fontWeight: 700,
            color: "#2d2d2d",
            mb: 3,
          }}
        >
          Instructions
        </Typography>

        {data.directions.methods.map((method, methodIndex) => (
          <Box key={methodIndex} sx={{ mb: 3 }}>
            {method.step.map((el, stepIndex) =>
              el.type === "text" ? (
                <Grid
                  key={`${methodIndex}-${stepIndex}`}
                  container
                  alignItems="flex-start"
                  spacing={1}
                  sx={{ mb: 2 }}
                >
                  {/* Step Number */}
                  <Grid item xs="auto">
                    <Typography
                      sx={{
                        fontWeight: 700,
                        minWidth: "32px",
                        textAlign: "right",
                      }}
                    >
                      {stepIndex + 1}.
                    </Typography>
                  </Grid>

                  {/* Step Text */}
                  <Grid item xs>
                    <Typography
                      sx={{
                        whiteSpace: "pre-line",
                        lineHeight: 1.6,
                        fontSize: "1rem",
                      }}
                    >
                      {parser(el.value as string)}
                    </Typography>
                  </Grid>
                </Grid>
              ) : null
            )}
          </Box>
        ))}
      </Box>
    </Box>
    </Box>
  );

  //   Food section  - Dessert
  sections.push(<Box key='food-dessert'></Box>);
  //   Food section  - Fruit Salad
  sections.push(<Box key='food-fruit-salad'></Box>);
  //   Food section  - Bread
  sections.push(<Box key='food-bread'></Box>);
  //   Food section  - Cripsy Chicken
  sections.push(<Box key='food-crispy-chicken'></Box>);
  //   Food section  - Chaomin
  sections.push(<Box key='food-chaomin'></Box>);
  //   Food section - Fruit Salad 2
  sections.push(<Box key='food-fruit-salad-2'></Box>);

  // Section 1: Header
  sections.push(
    <Box key='header'>
      <Typography
        variant='h3'
        component='h1'
        gutterBottom
        fontWeight='bold'
        sx={{ mb: 3 }}
      >
        {recipe.basicInfo.recipeName}
      </Typography>

      <Stack direction='row' spacing={2} sx={{ mb: 2 }} flexWrap='wrap'>
        <Chip
          label={`⏱️ ${recipe.basicInfo.duration.value}`}
          color='primary'
          variant='outlined'
        />
        <Chip
          label={`📊 ${recipe.basicInfo.level.value}`}
          color='secondary'
          variant='outlined'
        />
        <Chip
          label={`🍽️ Serves ${recipe.basicInfo.serving.value}`}
          color='success'
          variant='outlined'
        />
      </Stack>

      {recipe.basicInfo.tags && recipe.basicInfo.tags.length > 0 && (
        <Box sx={{ mb: 2 }}>
          {recipe.basicInfo.tags.map((tag, idx) => (
            <Chip
              key={idx}
              label={tag.value}
              size='small'
              sx={{ mr: 1, mb: 1 }}
            />
          ))}
        </Box>
      )}

      {recipe.basicInfo.categories &&
        recipe.basicInfo.categories.length > 0 && (
          <Box sx={{ mb: 3 }}>
            <Typography variant='subtitle2' color='text.secondary' gutterBottom>
              Categories:
            </Typography>
            {recipe.basicInfo.categories.map((cat, idx) => (
              <Chip
                key={idx}
                label={cat.value}
                color='info'
                size='small'
                sx={{ mr: 1 }}
              />
            ))}
          </Box>
        )}

      {recipe.details.thumbnail && (
        <Card sx={{ mb: 2, maxWidth: '100%' }}>
          <CardMedia
            component='img'
            image={recipe.details.thumbnail}
            alt={recipe.basicInfo.recipeName}
            sx={{ maxHeight: 300, objectFit: 'cover' }}
          />
        </Card>
      )}
    </Box>
  );

  // Section 2: About
  if (recipe.details.about && recipe.details.about.length > 0) {
    recipe.details.about.forEach((item, idx) => {
      if (item.type === 'text') {
        sections.push(
          <Box key={`about-text-${idx}`} sx={{ mb: 2 }}>
            <Typography
              variant='h5'
              gutterBottom
              fontWeight='bold'
              sx={{ mb: 1 }}
            >
              About
            </Typography>
            <Typography variant='body1' paragraph>
              {stripHtml(item.value as string)}
            </Typography>
          </Box>
        );
      } else if (item.type === 'image') {
        sections.push(
          <Grid container spacing={2} key={`about-img-${idx}`} sx={{ mb: 2 }}>
            {(Array.isArray(item.value) ? item.value : [item.value]).map(
              (img, imgIdx) => (
                <Grid item xs={12} sm={6} key={imgIdx}>
                  <Card>
                    <CardMedia
                      component='img'
                      image={img}
                      alt={`Image ${imgIdx + 1}`}
                      sx={{ height: 180, objectFit: 'cover' }}
                    />
                  </Card>
                </Grid>
              )
            )}
          </Grid>
        );
      }
    });
  }

  // Section 3: Ingredients
  const ingredientsByType: Record<string, string[]> = {};
  recipe.directions.ingredients.forEach((ing) => {
    if (!ingredientsByType[ing.type]) {
      ingredientsByType[ing.type] = [];
    }
    ingredientsByType[ing.type].push(ing.name);
  });

  sections.push(
    <Box key='ingredients' sx={{ mb: 3 }}>
      <Typography variant='h5' gutterBottom fontWeight='bold' sx={{ mb: 2 }}>
        Ingredients
      </Typography>
      {Object.entries(ingredientsByType).map(([type, items]) => (
        <Box key={type} sx={{ mb: 2 }}>
          <Typography variant='h6' sx={{ textTransform: 'capitalize', mb: 1 }}>
            {type}:
          </Typography>
          <Box component='ul' sx={{ pl: 3 }}>
            {items.map((item, idx) => (
              <Typography
                component='li'
                key={idx}
                variant='body1'
                sx={{ mb: 0.5 }}
              >
                {item}
              </Typography>
            ))}
          </Box>
        </Box>
      ))}
    </Box>
  );

  // Section 4: Directions
  recipe.directions.methods.forEach((method, methodIdx) => {
    const stepElements: React.ReactNode[] = [];

    method.step.forEach((step, stepIdx) => {
      if (step.type === 'title') {
        stepElements.push(
          <Typography
            key={`title-${stepIdx}`}
            variant='subtitle1'
            fontWeight='bold'
            gutterBottom
          >
            {step.value as string}
          </Typography>
        );
      } else if (step.type === 'text') {
        stepElements.push(
          <Typography key={`text-${stepIdx}`} variant='body1' paragraph>
            {stripHtml(step.value as string)}
          </Typography>
        );
      } else if (step.type === 'image') {
        stepElements.push(
          <Grid container spacing={2} key={`img-${stepIdx}`} sx={{ my: 1 }}>
            {(Array.isArray(step.value) ? step.value : [step.value]).map(
              (img, imgIdx) => (
                <Grid item xs={12} sm={6} key={imgIdx}>
                  <Card>
                    <CardMedia
                      component='img'
                      image={img}
                      alt={`Step ${methodIdx + 1} - Image ${imgIdx + 1}`}
                      sx={{ height: 180, objectFit: 'cover' }}
                    />
                  </Card>
                </Grid>
              )
            )}
          </Grid>
        );
      }
    });

    sections.push(
      <Box key={`direction-${methodIdx}`} sx={{ mb: 3 }}>
        {methodIdx === 0 && (
          <Typography
            variant='h5'
            gutterBottom
            fontWeight='bold'
            sx={{ mb: 2 }}
          >
            Directions
          </Typography>
        )}
        <Typography variant='h6' color='primary' gutterBottom>
          Step {methodIdx + 1}
        </Typography>
        {stepElements}
      </Box>
    );
  });

  // Section 5: Nutritional Facts
  if (recipe.nutritionalFacts && recipe.nutritionalFacts.length > 0) {
    sections.push(
      <Box key='nutrition' sx={{ mb: 3 }}>
        <Typography variant='h5' gutterBottom fontWeight='bold' sx={{ mb: 2 }}>
          Nutritional Facts
        </Typography>
        <Grid container spacing={2}>
          {recipe.nutritionalFacts.map((fact, idx) => (
            <Grid item xs={6} sm={4} md={3} key={idx}>
              <Card sx={{ p: 2, textAlign: 'center' }}>
                <Typography
                  variant='body2'
                  color='text.secondary'
                  sx={{ textTransform: 'capitalize' }}
                >
                  {fact.name}
                </Typography>
                <Typography variant='h6' fontWeight='bold'>
                  {fact.amount}
                  {fact.unit}
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    );
  }

  // Section 6: FAQs
  if (recipe.details.faqs && recipe.details.faqs.length > 0) {
    sections.push(
      <Box key='faqs' sx={{ mb: 3 }}>
        <Typography variant='h5' gutterBottom fontWeight='bold' sx={{ mb: 2 }}>
          FAQs
        </Typography>
        {recipe.details.faqs.map((faq, idx) => (
          <Box key={idx} sx={{ mb: 2 }}>
            <Typography variant='subtitle1' fontWeight='bold' gutterBottom>
              Q{idx + 1}: {faq.ques}
            </Typography>
            <Typography variant='body1' color='text.secondary'>
              A: {faq.ans}
            </Typography>
          </Box>
        ))}
      </Box>
    );
  }

  // Back Cover Page
  sections.push(
    <Box
      key='backCover'
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        p: 6,
      }}
    >
      <Typography variant='h3' fontWeight='bold' sx={{ mb: 3 }}>
        {recipe.basicInfo.recipeName}
      </Typography>

      <Divider sx={{ width: '60%', mb: 3 }} />

      <Typography variant='h6' color='text.secondary' sx={{ mb: 4 }}>
        Thank you for choosing this recipe!
      </Typography>

      {recipe.basicInfo.tags && recipe.basicInfo.tags.length > 0 && (
        <Box sx={{ mb: 3 }}>
          <Typography variant='body2' color='text.secondary' gutterBottom>
            Tags:
          </Typography>
          {recipe.basicInfo.tags.map((tag, idx) => (
            <Chip
              key={idx}
              label={tag.value}
              size='small'
              sx={{ mr: 1, mb: 1 }}
            />
          ))}
        </Box>
      )}

      <Typography variant='body2' color='text.secondary' sx={{ mt: 4 }}>
        Level: {recipe.basicInfo.level.value} | Duration:{' '}
        {recipe.basicInfo.duration.value}
      </Typography>
    </Box>
  );

  return sections;
};

// Render recipe content as JSX
const RecipeContent: React.FC<{ recipe: IRecipe }> = ({ recipe }) => {
  return (
    <Box>
      {/* Title */}
      <Typography
        variant='h3'
        component='h1'
        gutterBottom
        fontWeight='bold'
        sx={{ mb: 3 }}
      >
        {recipe.basicInfo.recipeName}
      </Typography>

      {/* Basic Info */}
      <Stack direction='row' spacing={2} sx={{ mb: 2 }}>
        <Chip
          label={`⏱️ ${recipe.basicInfo.duration.value}`}
          color='primary'
          variant='outlined'
        />
        <Chip
          label={`📊 ${recipe.basicInfo.level.value}`}
          color='secondary'
          variant='outlined'
        />
        <Chip
          label={`🍽️ Serves ${recipe.basicInfo.serving.value}`}
          color='success'
          variant='outlined'
        />
      </Stack>

      {/* Tags */}
      {recipe.basicInfo.tags && recipe.basicInfo.tags.length > 0 && (
        <Box sx={{ mb: 2 }}>
          {recipe.basicInfo.tags.map((tag, idx) => (
            <Chip
              key={idx}
              label={tag.value}
              size='small'
              sx={{ mr: 1, mb: 1 }}
            />
          ))}
        </Box>
      )}

      {/* Categories */}
      {recipe.basicInfo.categories &&
        recipe.basicInfo.categories.length > 0 && (
          <Box sx={{ mb: 3 }}>
            <Typography variant='subtitle2' color='text.secondary' gutterBottom>
              Categories:
            </Typography>
            {recipe.basicInfo.categories.map((cat, idx) => (
              <Chip
                key={idx}
                label={cat.value}
                color='info'
                size='small'
                sx={{ mr: 1 }}
              />
            ))}
          </Box>
        )}

      <Divider sx={{ my: 3 }} />

      {/* Thumbnail */}
      {recipe.details.thumbnail && (
        <Card sx={{ mb: 3, maxWidth: '100%' }}>
          <CardMedia
            component='img'
            image={recipe.details.thumbnail}
            alt={recipe.basicInfo.recipeName}
            sx={{ maxHeight: 400, objectFit: 'cover' }}
          />
        </Card>
      )}

      {/* About Section */}
      {recipe.details.about && recipe.details.about.length > 0 && (
        <Box sx={{ mb: 4 }}>
          <Typography
            variant='h5'
            gutterBottom
            fontWeight='bold'
            sx={{ mb: 2 }}
          >
            About
          </Typography>
          {recipe.details.about.map((item, idx) => (
            <Box key={idx} sx={{ mb: 2 }}>
              {item.type === 'text' && (
                <Typography variant='body1' paragraph>
                  {stripHtml(item.value as string)}
                </Typography>
              )}
              {item.type === 'image' && (
                <Grid container spacing={2} sx={{ my: 2 }}>
                  {(Array.isArray(item.value) ? item.value : [item.value]).map(
                    (img, imgIdx) => (
                      <Grid item xs={12} sm={6} key={imgIdx}>
                        <Card>
                          <CardMedia
                            component='img'
                            image={img}
                            alt={`Image ${imgIdx + 1}`}
                            sx={{ height: 200, objectFit: 'cover' }}
                          />
                        </Card>
                      </Grid>
                    )
                  )}
                </Grid>
              )}
            </Box>
          ))}
        </Box>
      )}

      <Divider sx={{ my: 3 }} />

      {/* Ingredients */}
      <Box sx={{ mb: 4 }}>
        <Typography variant='h5' gutterBottom fontWeight='bold' sx={{ mb: 2 }}>
          Ingredients
        </Typography>
        {(() => {
          const ingredientsByType: Record<string, string[]> = {};
          recipe.directions.ingredients.forEach((ing) => {
            if (!ingredientsByType[ing.type]) {
              ingredientsByType[ing.type] = [];
            }
            ingredientsByType[ing.type].push(ing.name);
          });

          return Object.entries(ingredientsByType).map(([type, items]) => (
            <Box key={type} sx={{ mb: 2 }}>
              <Typography
                variant='h6'
                sx={{ textTransform: 'capitalize', mb: 1 }}
              >
                {type}:
              </Typography>
              <Box component='ul' sx={{ pl: 3 }}>
                {items.map((item, idx) => (
                  <Typography
                    component='li'
                    key={idx}
                    variant='body1'
                    sx={{ mb: 0.5 }}
                  >
                    {item}
                  </Typography>
                ))}
              </Box>
            </Box>
          ));
        })()}
      </Box>

      <Divider sx={{ my: 3 }} />

      {/* Directions */}
      <Box sx={{ mb: 4 }}>
        <Typography variant='h5' gutterBottom fontWeight='bold' sx={{ mb: 2 }}>
          Directions
        </Typography>
        {recipe.directions.methods.map((method, methodIdx) => (
          <Box key={methodIdx} sx={{ mb: 3 }}>
            <Typography variant='h6' color='primary' gutterBottom>
              Step {methodIdx + 1}
            </Typography>
            {method.step.map((step, stepIdx) => (
              <Box key={stepIdx} sx={{ mb: 2 }}>
                {step.type === 'title' && (
                  <Typography
                    variant='subtitle1'
                    fontWeight='bold'
                    gutterBottom
                  >
                    {step.value as string}
                  </Typography>
                )}
                {step.type === 'text' && (
                  <Typography variant='body1' paragraph>
                    {stripHtml(step.value as string)}
                  </Typography>
                )}
                {step.type === 'image' && (
                  <Grid container spacing={2} sx={{ my: 1 }}>
                    {(Array.isArray(step.value)
                      ? step.value
                      : [step.value]
                    ).map((img, imgIdx) => (
                      <Grid item xs={12} sm={6} key={imgIdx}>
                        <Card>
                          <CardMedia
                            component='img'
                            image={img}
                            alt={`Step ${methodIdx + 1} - Image ${imgIdx + 1}`}
                            sx={{ height: 200, objectFit: 'cover' }}
                          />
                        </Card>
                      </Grid>
                    ))}
                  </Grid>
                )}
              </Box>
            ))}
          </Box>
        ))}
      </Box>

      <Divider sx={{ my: 3 }} />

      {/* Nutritional Facts */}
      {recipe.nutritionalFacts && recipe.nutritionalFacts.length > 0 && (
        <Box sx={{ mb: 4 }}>
          <Typography
            variant='h5'
            gutterBottom
            fontWeight='bold'
            sx={{ mb: 2 }}
          >
            Nutritional Facts
          </Typography>
          <Grid container spacing={2}>
            {recipe.nutritionalFacts.map((fact, idx) => (
              <Grid item xs={6} sm={4} md={3} key={idx}>
                <Card sx={{ p: 2, textAlign: 'center' }}>
                  <Typography
                    variant='body2'
                    color='text.secondary'
                    sx={{ textTransform: 'capitalize' }}
                  >
                    {fact.name}
                  </Typography>
                  <Typography variant='h6' fontWeight='bold'>
                    {fact.amount}
                    {fact.unit}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      )}

      {/* FAQs */}
      {recipe.details.faqs && recipe.details.faqs.length > 0 && (
        <Box sx={{ mb: 4 }}>
          <Divider sx={{ my: 3 }} />
          <Typography
            variant='h5'
            gutterBottom
            fontWeight='bold'
            sx={{ mb: 2 }}
          >
            FAQs
          </Typography>
          {recipe.details.faqs.map((faq, idx) => (
            <Box key={idx} sx={{ mb: 2 }}>
              <Typography variant='subtitle1' fontWeight='bold' gutterBottom>
                Q{idx + 1}: {faq.ques}
              </Typography>
              <Typography variant='body1' color='text.secondary'>
                A: {faq.ans}
              </Typography>
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default function NewRustic() {
  const [pages, setPages] = useState<string[]>(['']);
  const [pageLayout, setPageLayout] = useState<PageLayout>('A3-landscape');
  const [importDialogOpen, setImportDialogOpen] = useState(false);
  const [recipeJson, setRecipeJson] = useState<string>('');
  const [recipeData, setRecipeData] = useState<IRecipe | null>(null);
  const fullTextRef = useRef<string>(''); // store full text without triggering re-render
  const measureRef = useRef<HTMLDivElement>(null);
  const editorRef = useRef<HTMLDivElement>(null);
  const caretPositionRef = useRef<number>(0); // store caret position
  const isUpdatingRef = useRef<boolean>(false); // prevent loops

  const currentDimensions = PAGE_DIMENSIONS[pageLayout];
  const pdfFormat = pageLayout.split('-')[0].toUpperCase() as
    | 'A3'
    | 'A4'
    | 'LETTER';
  const pdfOrientation = pageLayout.split('-')[1] as 'portrait' | 'landscape';

  const { toPDF, targetRef } = usePDF({
    filename: `document-${pageLayout}.pdf`,
    page: { format: pdfFormat, orientation: pdfOrientation },
  });

  // Save caret position relative to the full text
  const saveCaretPosition = () => {
    const selection = window.getSelection();
    if (!selection || !editorRef.current) return;

    try {
      const range = selection.getRangeAt(0);
      const preCaretRange = range.cloneRange();
      preCaretRange.selectNodeContents(editorRef.current);
      preCaretRange.setEnd(range.endContainer, range.endOffset);

      // Calculate position in full text
      const previousPagesText = pages.slice(0, -1).join(' ');
      const offsetFromPreviousPages = previousPagesText
        ? previousPagesText.length + 1
        : 0;
      const caretInLastPage = preCaretRange.toString().length;
      caretPositionRef.current = offsetFromPreviousPages + caretInLastPage;
    } catch (e) {
      // Ignore errors
    }
  };

  // Restore caret position
  const restoreCaretPosition = () => {
    if (!editorRef.current) return;

    const selection = window.getSelection();
    if (!selection) return;

    try {
      // Calculate where caret should be in the last page
      const previousPagesText = pages.slice(0, -1).join(' ');
      const offsetFromPreviousPages = previousPagesText
        ? previousPagesText.length + 1
        : 0;
      let targetPosition = Math.max(
        0,
        caretPositionRef.current - offsetFromPreviousPages
      );

      // Clamp to last page length
      const lastPageText = pages[pages.length - 1] || '';
      targetPosition = Math.min(targetPosition, lastPageText.length);

      // If editor is empty or has no text nodes, we can't restore
      if (!editorRef.current.firstChild) {
        return;
      }

      // Find the text node and offset
      let charCount = 0;
      const findPosition = (
        node: Node
      ): { node: Node; offset: number } | null => {
        if (node.nodeType === Node.TEXT_NODE) {
          const textLength = node.textContent?.length || 0;
          if (charCount + textLength >= targetPosition) {
            return {
              node,
              offset: Math.min(targetPosition - charCount, textLength),
            };
          }
          charCount += textLength;
        } else {
          for (let i = 0; i < node.childNodes.length; i++) {
            const result = findPosition(node.childNodes[i]);
            if (result) return result;
          }
        }
        return null;
      };

      const position = findPosition(editorRef.current);
      if (position) {
        const range = document.createRange();
        range.setStart(position.node, position.offset);
        range.collapse(true);
        selection.removeAllRanges();
        selection.addRange(range);
      } else {
        // Fallback: place cursor at the end
        const lastChild = editorRef.current.lastChild;
        if (lastChild && lastChild.nodeType === Node.TEXT_NODE) {
          const range = document.createRange();
          const textLength = lastChild.textContent?.length || 0;
          range.setStart(lastChild, Math.min(targetPosition, textLength));
          range.collapse(true);
          selection.removeAllRanges();
          selection.addRange(range);
        }
      }
    } catch (e) {
      console.error('Error restoring caret position:', e);
    }
  };

  const paginate = (text: string) => {
    if (!measureRef.current) return;
    const words = text.split(' ');
    const chunks: string[] = [];
    let current = '';
    const measureDiv = measureRef.current;
    measureDiv.innerHTML = '';

    words.forEach((word) => {
      measureDiv.innerText = current + ' ' + word;
      if (measureDiv.scrollHeight > currentDimensions.maxContentHeight) {
        chunks.push(current.trim());
        current = word;
        measureDiv.innerText = word;
      } else {
        current += ' ' + word;
      }
    });

    if (current.trim()) chunks.push(current.trim());
    if (chunks.length === 0) chunks.push('');
    setPages(chunks);
  };

  const handleInput = () => {
    if (!editorRef.current || isUpdatingRef.current) return;

    // Save caret position immediately when user types
    saveCaretPosition();

    // Combine all previous pages' content with current editable content
    const previousPagesText = pages.slice(0, -1).join(' ');
    const currentEditableText = editorRef.current.innerText;
    const fullText = previousPagesText
      ? previousPagesText + ' ' + currentEditableText
      : currentEditableText;

    fullTextRef.current = fullText;
    paginate(fullText);
  };

  // Handle recipe import
  const handleImportRecipe = () => {
    try {
      const recipe: IRecipe = JSON.parse(recipeJson);
      setRecipeData(recipe);
      setImportDialogOpen(false);
      setRecipeJson('');
    } catch (error) {
      alert('Invalid JSON format. Please check your recipe data.');
      console.error('Recipe import error:', error);
    }
  };

  // Load sample recipe data on mount
  useEffect(() => {
    setRecipeData(data as IRecipe);
  }, []);

  // Re-paginate when page layout changes
  useEffect(() => {
    if (fullTextRef.current) {
      saveCaretPosition();
      paginate(fullTextRef.current);
    }
  }, [pageLayout]);

  // Restore caret position after pages update
  useEffect(() => {
    if (!editorRef.current) return;

    const lastPageContent = pages[pages.length - 1] || '';
    const currentContent = editorRef.current.innerText;

    // Only update content if it actually differs (trim to handle whitespace)
    const contentDiffers = currentContent.trim() !== lastPageContent.trim();

    if (contentDiffers) {
      // Content has changed due to pagination - update it
      isUpdatingRef.current = true;
      editorRef.current.innerText = lastPageContent;

      // Restore caret after content update
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          restoreCaretPosition();
          isUpdatingRef.current = false;
        });
      });
    } else {
      // Content is the same - just restore caret without updating DOM
      isUpdatingRef.current = false;
    }
  }, [pages]);

  return (
    <Box sx={{ p: 4, bgcolor: '#f5f5f5', minHeight: '100vh' }}>
      <Typography variant='h4' textAlign='center' gutterBottom>
        Word-Like Editor (Smooth Typing + Pagination)
      </Typography>

      {/* Page Layout Selector and Import Button */}
      <Box
        sx={{ maxWidth: '600px', mx: 'auto', mb: 3, display: 'flex', gap: 2 }}
      >
        <FormControl fullWidth>
          <InputLabel>Page Layout</InputLabel>
          <Select
            value={pageLayout}
            label='Page Layout'
            onChange={(e) => setPageLayout(e.target.value as PageLayout)}
          >
            <MenuItem value='A4-portrait'>A4 - Portrait</MenuItem>
            <MenuItem value='A4-landscape'>A4 - Landscape</MenuItem>
            <MenuItem value='A3-portrait'>A3 - Portrait</MenuItem>
            <MenuItem value='A3-landscape'>A3 - Landscape</MenuItem>
            <MenuItem value='letter-portrait'>US Letter - Portrait</MenuItem>
            <MenuItem value='letter-landscape'>US Letter - Landscape</MenuItem>
          </Select>
        </FormControl>

        <Button
          variant='outlined'
          onClick={() => setImportDialogOpen(true)}
          sx={{ whiteSpace: 'nowrap' }}
        >
          Import Recipe
        </Button>

        {recipeData && (
          <Button
            variant='outlined'
            color='secondary'
            onClick={() => setRecipeData(null)}
            sx={{ whiteSpace: 'nowrap' }}
          >
            Clear Recipe
          </Button>
        )}
      </Box>

      {/* Hidden measurement element */}
      <div
        ref={measureRef}
        style={{
          position: 'absolute',
          visibility: 'hidden',
          width: `${currentDimensions.width}px`,
          padding: '32px',
          whiteSpace: 'pre-wrap',
          lineHeight: 1.5,
        }}
      />

      <Box ref={targetRef}>
        {recipeData ? (
          <Box
            key={pageLayout}
            sx={{
              mx: 'auto',
            }}
          >
            {/* Distribute sections across pages */}
            {(() => {
              const sections = getRecipeSections(recipeData);
              const pages: React.ReactNode[][] = [];

              // Dedicated full-page sections
              const dedicatedPageKeys = [
                'coverPage',
                'welcome',
                'tableOfContent',
                'backCover',
              ];

              sections.forEach((section: any) => {
                const sectionKey = section?.key || '';
                const isDedicatedPage = dedicatedPageKeys.includes(sectionKey);
                const isFoodSection = sectionKey.startsWith('food-');

                if (isDedicatedPage) {
                  // Dedicated pages get their own full page
                  pages.push([section]);
                } else if (isFoodSection) {
                  // Each food section starts on a new page
                  pages.push([section]);
                } else {
                  // Group content sections together on pages (max 2-3 per page)
                  const lastPage = pages[pages.length - 1];
                  const lastPageHasDedicated =
                    lastPage &&
                    lastPage.some((s: any) =>
                      dedicatedPageKeys.includes(s?.key)
                    );
                  const lastPageHasFood =
                    lastPage &&
                    lastPage.some((s: any) => s?.key?.startsWith('food-'));

                  if (
                    !lastPage ||
                    lastPageHasDedicated ||
                    lastPageHasFood ||
                    lastPage.length >= 2
                  ) {
                    // Start new page
                    pages.push([section]);
                  } else {
                    // Add to existing page
                    lastPage.push(section);
                  }
                }
              });

              return pages.map((pageSections, pageIdx) => {
                const hasDedicatedPage = pageSections.some((s: any) =>
                  dedicatedPageKeys.includes(s?.key)
                );

                // A4 Portrait dimensions for dedicated pages (always fixed)
                const A4_PORTRAIT = { width: 794, height: 1123 };

                // Dedicated pages always use A4 portrait, content pages use selected layout
                const pageWidth = hasDedicatedPage
                  ? A4_PORTRAIT.width
                  : currentDimensions.width;
                const pageHeight = hasDedicatedPage
                  ? A4_PORTRAIT.height
                  : currentDimensions.height;

                return (
                  <Paper
                    key={`${pageLayout}-page-${pageIdx}`}
                    sx={{
                      width: `${pageWidth}px`,
                      height: hasDedicatedPage ? `${pageHeight}px` : 'auto',
                      minHeight: hasDedicatedPage
                        ? `${pageHeight}px`
                        : `${pageHeight}px`,
                      maxHeight: hasDedicatedPage ? `${pageHeight}px` : 'none',
                      mb: 4,
                      p: 4,
                      bgcolor: '#fff',
                      position: 'relative',
                      overflow: hasDedicatedPage ? 'hidden' : 'visible',
                      boxShadow: 3,
                      mx: 'auto',
                    }}
                    elevation={3}
                  >
                    <Box
                      sx={{
                        height: hasDedicatedPage ? '100%' : 'auto',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 3,
                      }}
                    >
                      {pageSections}
                    </Box>

                    <Typography
                      variant='caption'
                      sx={{
                        position: 'absolute',
                        bottom: 8,
                        right: 16,
                        color: 'gray',
                        background: '#fff',
                        padding: '2px 8px',
                        borderRadius: 1,
                        fontSize: '11px',
                      }}
                    >
                      Page {pageIdx + 1}
                    </Typography>
                  </Paper>
                );
              });
            })()}
          </Box>
        ) : (
          pages.map((content, i) => (
            <Paper
              key={i}
              sx={{
                width: `${currentDimensions.width}px`,
                height: `${currentDimensions.height}px`,
                mx: 'auto',
                mb: 4,
                p: 4,
                bgcolor: '#fff',
                position: 'relative',
                overflow: 'hidden',
              }}
              elevation={3}
            >
              {/* Editable only on the last visible page */}
              {i === pages.length - 1 ? (
                <div
                  ref={editorRef}
                  contentEditable
                  suppressContentEditableWarning
                  onInput={handleInput}
                  style={{
                    outline: 'none',
                    whiteSpace: 'pre-wrap',
                    lineHeight: 1.6,
                    minHeight: '100%',
                    width: '100%',
                    overflowWrap: 'break-word',
                  }}
                />
              ) : (
                <Box
                  sx={{
                    whiteSpace: 'pre-wrap',
                    lineHeight: 1.6,
                    userSelect: 'none',
                  }}
                >
                  {content}
                </Box>
              )}
              <Typography
                variant='caption'
                sx={{
                  position: 'absolute',
                  bottom: 8,
                  right: 16,
                  color: 'gray',
                }}
              >
                Page {i + 1}
              </Typography>
            </Paper>
          ))
        )}
      </Box>

      <Box sx={{ textAlign: 'center', mt: 4 }}>
        <Button variant='contained' onClick={() => toPDF()}>
          Download {pdfFormat} PDF ({pdfOrientation})
        </Button>
      </Box>

      {/* Import Recipe Dialog */}
      <Dialog
        open={importDialogOpen}
        onClose={() => setImportDialogOpen(false)}
        maxWidth='md'
        fullWidth
      >
        <DialogTitle>Import Recipe JSON</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin='dense'
            label='Paste Recipe JSON Here'
            fullWidth
            multiline
            rows={15}
            value={recipeJson}
            onChange={(e) => setRecipeJson(e.target.value)}
            placeholder='Paste your recipe JSON data here...'
            sx={{ mt: 2 }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setImportDialogOpen(false)}>Cancel</Button>
          <Button onClick={handleImportRecipe} variant='contained'>
            Import
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
