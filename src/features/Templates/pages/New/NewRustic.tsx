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
  Grid,
  Divider,
  Stack,
} from '@mui/material';
import { usePDF } from 'react-to-pdf';
import { IRecipe } from '../../../Recipe/types/recipe.types';

type PageLayout =
  | 'A3-portrait'
  | 'A3-landscape'
  | 'A4-portrait'
  | 'A4-landscape'
  | 'letter-portrait'
  | 'letter-landscape';

const data: any = {
  _id: {
    $oid: '664e404cb4513dfa42a75dd7',
  },
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
        _id: {
          $oid: '664e404cb4513dfa42a75dd8',
        },
      },
      {
        value: 'appetizer',
        label: 'appetizer',
        _id: {
          $oid: '664e404cb4513dfa42a75dd9',
        },
      },
      {
        value: 'bbb',
        label: 'bbb',
        _id: {
          $oid: '664e404cb4513dfa42a75dda',
        },
      },
    ],
    categories: [
      {
        value: 'Pizza',
        label: 'Pizza',
        _id: {
          $oid: '664e404cb4513dfa42a75ddb',
        },
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
        _id: {
          $oid: '664e404cb4513dfa42a75ddc',
        },
      },
      {
        type: 'image',
        value: [
          'https://images.unsplash.com/photo-1517666005606-69dea9b54865?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0ODIwNDd8MHwxfHNlYXJjaHwyfHx0b21hdG8lMjBwdXJlZXxlbnwwfHx8fDE3MTU4MDk5NTd8MA&ixlib=rb-4.0.3&q=80&w=400',
          'https://images.unsplash.com/photo-1542010589005-d1eacc3918f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0ODIwNDd8MHwxfHNlYXJjaHw0fHxyZWNpcGV8ZW58MHx8fHwxNzE1NzkzOTgyfDA&ixlib=rb-4.0.3&q=80&w=400',
        ],
        isUnsplash: true,
        isMultiple: true,
        _id: {
          $oid: '664e404cb4513dfa42a75ddd',
        },
      },
      {
        type: 'text',
        value:
          "<p><strong>Lorem Ipsum</strong>&nbsp;is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>",
        _id: {
          $oid: '664e404cb4513dfa42a75dde',
        },
      },
    ],
    faqs: [
      {
        ques: 'ssdfs',
        ans: 'rrfgfgfgf',
        _id: {
          $oid: '664e404cb4513dfa42a75ddf',
        },
      },
    ],
  },
  nutritionalFacts: [
    {
      name: 'calories',
      amount: '455',
      unit: 'g',
      _id: {
        $oid: '664e404cb4513dfa42a75de0',
      },
    },
    {
      name: 'satFat',
      amount: '344',
      unit: 'g',
      _id: {
        $oid: '664e404cb4513dfa42a75de1',
      },
    },
    {
      name: 'carbs',
      amount: '454',
      unit: 'g',
      _id: {
        $oid: '664e404cb4513dfa42a75de2',
      },
    },
    {
      name: 'protein',
      amount: '43',
      unit: 'g',
      _id: {
        $oid: '664e404cb4513dfa42a75de3',
      },
    },
    {
      name: 'cholesterol',
      amount: '34323',
      unit: 'mg',
      _id: {
        $oid: '664e404cb4513dfa42a75de4',
      },
    },
    {
      name: 'sodium',
      amount: '654',
      unit: 'mg',
      _id: {
        $oid: '664e404cb4513dfa42a75de5',
      },
    },
    {
      name: 'sugar',
      amount: '45332',
      unit: 'g',
      _id: {
        $oid: '664e404cb4513dfa42a75de6',
      },
    },
    {
      name: 'fibers',
      amount: '4546',
      unit: 'g',
      _id: {
        $oid: '664e404cb4513dfa42a75de7',
      },
    },
  ],
  directions: {
    methods: [
      {
        step: [
          {
            type: 'title',
            value: 'Preparations',
            _id: {
              $oid: '664e404cb4513dfa42a75de9',
            },
          },
          {
            type: 'text',
            value:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            _id: {
              $oid: '664e404cb4513dfa42a75dea',
            },
          },
          {
            type: 'image',
            value: [
              'https://images.unsplash.com/photo-1542010589005-d1eacc3918f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0ODIwNDd8MHwxfHNlYXJjaHw0fHxyZWNpcGV8ZW58MHx8fHwxNzE1NzkzOTgyfDA&ixlib=rb-4.0.3&q=80&w=400',
              'https://images.unsplash.com/photo-1466637574441-749b8f19452f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0ODIwNDd8MHwxfHNlYXJjaHwyfHxyZWNpcGV8ZW58MHx8fHwxNzE1NzkzOTgyfDA&ixlib=rb-4.0.3&q=80&w=400',
            ],
            isUnsplash: true,
            isMultiple: true,
            _id: {
              $oid: '664e404cb4513dfa42a75deb',
            },
          },
        ],
        _id: {
          $oid: '664e404cb4513dfa42a75de8',
        },
      },
      {
        step: [
          {
            type: 'title',
            value: 'Boiling',
            _id: {
              $oid: '664e404cb4513dfa42a75ded',
            },
          },
          {
            type: 'text',
            value:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            _id: {
              $oid: '664e404cb4513dfa42a75dee',
            },
          },
        ],
        _id: {
          $oid: '664e404cb4513dfa42a75dec',
        },
      },
    ],
    ingredients: [
      {
        name: '2 pisces',
        type: 'main',
        _id: {
          $oid: '664e404cb4513dfa42a75def',
        },
      },
      {
        name: '1 ½ cups peeled and chopped golden potato or sweet potato (large bite-size pieces)',
        type: 'main',
        _id: {
          $oid: '664e404cb4513dfa42a75df0',
        },
      },
      {
        name: '4 Eggs batches flax eggs* (2 flax eggs = 2 Tbsp flaxseed meal / 14 g + 5 Tbsp / 75 ml water)',
        type: 'main',
        _id: {
          $oid: '664e404cb4513dfa42a75df1',
        },
      },
      {
        name: '0.17 cup chopped walnuts or pecans (or sub other nut or seed of choice)',
        type: 'main',
        _id: {
          $oid: '664e404cb4513dfa42a75df2',
        },
      },
      {
        name: 'fresh herbs, such as chopped parsley and/or cilantro',
        type: 'dressing',
        _id: {
          $oid: '664e404cb4513dfa42a75df3',
        },
      },
      {
        name: '2 cups blueberries, washed and picked over for stems',
        type: 'main',
        _id: {
          $oid: '664e404cb4513dfa42a75df4',
        },
      },
      {
        name: '300 g Mayonaise',
        type: 'dressing',
        _id: {
          $oid: '664e404cb4513dfa42a75df5',
        },
      },
      {
        name: '1 tablespoon honey (light brown sugar or maple syrup also works)',
        type: 'main',
        _id: {
          $oid: '664e404cb4513dfa42a75df6',
        },
      },
    ],
  },
  author: {
    $oid: '612296fc86231100a0631b22',
  },
  reviews: [],
  createdAt: {
    $date: '2024-05-22T18:58:21.386Z',
  },
  updatedAt: {
    $date: '2024-05-23T18:47:17.831Z',
  },
  __v: 0,
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

//   Food section  - Fried Rice
    sections.push(
        <Box key='food-fried-rice'></Box>
    )
//   Food section  - Dessert
    sections.push(
        <Box key='food-dessert'></Box>
    )
//   Food section  - Fruit Salad
    sections.push(
        <Box key='food-fruit-salad'></Box>
    )
//   Food section  - Bread
    sections.push(
        <Box key='food-bread'></Box>
    )
//   Food section  - Cripsy Chicken
    sections.push(
        <Box key='food-crispy-chicken'></Box>
    )
//   Food section  - Chaomin
    sections.push(
        <Box key='food-chaomin'></Box>
    )
//   Food section - Fruit Salad 2
    sections.push(
        <Box key='food-fruit-salad-2'></Box>
    )

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
                    lastPage.some((s: any) =>
                      s?.key?.startsWith('food-')
                    );

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
                const pageWidth = hasDedicatedPage ? A4_PORTRAIT.width : currentDimensions.width;
                const pageHeight = hasDedicatedPage ? A4_PORTRAIT.height : currentDimensions.height;

                return (
                  <Paper
                    key={`${pageLayout}-page-${pageIdx}`}
                    sx={{
                      width: `${pageWidth}px`,
                      height: hasDedicatedPage ? `${pageHeight}px` : 'auto',
                      minHeight: hasDedicatedPage ? `${pageHeight}px` : `${pageHeight}px`,
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
