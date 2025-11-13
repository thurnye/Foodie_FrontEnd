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

const recipeData = require('../../../../shared/data/shared.updatedRecipeFoodieData.json');

type PageLayout =
  | 'A3-portrait'
  | 'A3-landscape'
  | 'A4-portrait'
  | 'A4-landscape'
  | 'letter-portrait'
  | 'letter-landscape';

const data: IRecipe = {
  basicInfo: {
    recipeName: 'Smoked Tofu Salad with Spicy Peanut Sauce',
    duration: {
      label: '25 Minutes',
      value: '25',
    },
    level: {
      label: 'Easy',
      value: 'Easy',
    },
    serving: {
      label: '2',
      value: '2',
    },
    tags: [
      {
        label: 'Vegan',
        value: 'Vegan',
      },
      {
        label: 'High Protein',
        value: 'High Protein',
      },
      {
        label: 'Healthy Lunch',
        value: 'Healthy Lunch',
      },
      {
        label: 'Peanut Sauce',
        value: 'Peanut Sauce',
      },
      {
        label: 'Quick Meals',
        value: 'Quick Meals',
      },
    ],
    categories: [
      {
        label: 'Salads',
        value: 'Salads',
      },
      {
        label: 'Lunch',
        value: 'Lunch',
      },
      {
        label: 'Vegan',
        value: 'Vegan',
      },
    ],
  },
  details: {
    thumbnail:
      'http://res.cloudinary.com/xperiacloud/image/upload/v1688927568/l2qgx3ktzkfgwpxxdadx.jpg',
    about: [
      {
        type: 'title',
        value: 'A Refreshing, Protein-Packed Vegan Salad with Bold Flavor',
      },
      {
        type: 'text',
        value:
          'Smoked tofu salad with spicy peanut sauce is a bright, crunchy, and deeply satisfying vegan meal that doesn’t compromise on flavor or nutrition. The smoky tofu adds depth and protein, while the crisp vegetables keep it light and refreshing. The real magic happens with the creamy peanut dressing—it’s savory, slightly sweet, and just spicy enough to wake up your taste buds. In less than 30 minutes, you’ll have a balanced meal that’s both nourishing and energizing. Perfect for weekday lunches, quick dinners, or a wholesome post-workout meal, this salad proves healthy food can be genuinely exciting.',
      },
      {
        type: 'text',
        value:
          'To achieve the best flavor, make sure to pan-sear or air-fry the tofu until golden brown—it creates a light crust that soaks up the peanut sauce beautifully. Don’t skip the fresh herbs either; cilantro and mint give this dish its signature freshness. For a complete meal, serve the salad with brown rice or rice noodles, or enjoy it as-is for a lighter plate. The peanut dressing can also double as a dipping sauce or marinade, making this recipe a versatile addition to your kitchen rotation.',
      },
      {
        type: 'text',
        value:
          'This salad is ideal for meal prep as the vegetables stay crisp for hours and the sauce keeps well for up to five days. Just store them separately to preserve texture. The combination of crunch, creaminess, and subtle spice makes it appealing even to non-vegan eaters. Once you try it, it might just become your go-to quick healthy bowl.',
      },
      {
        type: 'image',
        value: [
          'https://images.unsplash.com/photo-1611075579954-193677c3b7d5?auto=format&fit=crop&w=900&q=80',
        ],
        isUnsplash: true,
        isMultiple: false,
      },
      {
        type: 'video',
        value: 'https://www.youtube.com/watch?v=4SG4O7G9bWs',
      },
    ],
    faqs: [
      {
        ques: 'Can I bake the tofu instead of pan-searing?',
        ans: 'Yes. Bake at 400°F (200°C) for about 20 minutes, flipping halfway, until lightly crisped. This works great if you prefer oil-free cooking.',
      },
      {
        ques: 'How can I make the sauce nut-free?',
        ans: 'You can substitute sunflower seed butter or tahini instead of peanut butter. The flavor will be slightly different but still creamy and delicious.',
      },
      {
        ques: 'What vegetables work best for this salad?',
        ans: 'Fresh, crunchy vegetables like bell peppers, cucumbers, carrots, and cabbage work beautifully. You can also add edamame or shredded lettuce for volume.',
      },
    ],
  },
  nutritionalFacts: [
    {
      name: 'Calories',
      amount: '370',
      unit: 'kcal',
    },
    {
      name: 'Protein',
      amount: '22',
      unit: 'g',
    },
    {
      name: 'Total Fat',
      amount: '23',
      unit: 'g',
    },
    {
      name: 'Saturated Fat',
      amount: '3',
      unit: 'g',
    },
    {
      name: 'Carbohydrates',
      amount: '19',
      unit: 'g',
    },
    {
      name: 'Fiber',
      amount: '5',
      unit: 'g',
    },
    {
      name: 'Sugar',
      amount: '6',
      unit: 'g',
    },
    {
      name: 'Sodium',
      amount: '530',
      unit: 'mg',
    },
    {
      name: 'Calcium',
      amount: '150',
      unit: 'mg',
    },
    {
      name: 'Iron',
      amount: '3.5',
      unit: 'mg',
    },
  ],
  directions: {
    ingredients: [
      {
        name: '200g smoked tofu, pressed and cubed',
        type: 'main',
      },
      {
        name: '3 cups mixed greens (spinach, arugula, or lettuce)',
        type: 'main',
      },
      {
        name: '1 medium carrot, julienned',
        type: 'main',
      },
      {
        name: '½ cucumber, sliced thinly',
        type: 'main',
      },
      {
        name: '½ red bell pepper, thinly sliced',
        type: 'main',
      },
      {
        name: '¼ cup fresh cilantro or mint leaves',
        type: 'main',
      },
      {
        name: '1 tablespoon sesame oil',
        type: 'main',
      },
      {
        name: '2 tablespoons chopped peanuts (for garnish)',
        type: 'main',
      },
      {
        name: '2 tablespoons natural peanut butter',
        type: 'dressing',
      },
      {
        name: '1 tablespoon soy sauce or tamari',
        type: 'dressing',
      },
      {
        name: '1 tablespoon lime juice',
        type: 'dressing',
      },
      {
        name: '1 teaspoon maple syrup or honey',
        type: 'dressing',
      },
      {
        name: '½ teaspoon chili flakes or 1 teaspoon sriracha',
        type: 'dressing',
      },
      {
        name: '1 tablespoon warm water (to thin sauce)',
        type: 'dressing',
      },
      {
        name: '½ teaspoon grated ginger',
        type: 'dressing',
      },
    ],
    methods: [
      {
        step: [
          {
            type: 'title',
            value: 'Step 1: Sear the Tofu',
          },
          {
            type: 'text',
            value:
              'Pat the tofu dry and cut into bite-sized cubes. Heat sesame oil in a non-stick skillet over medium heat. Add tofu and cook for 6–8 minutes, turning occasionally, until golden and crisp on all sides. Remove from heat and set aside to cool slightly.',
          },
          {
            type: 'image',
            value:
              'https://images.unsplash.com/photo-1587650635594-7c805cd0efb7?auto=format&fit=crop&w=900&q=80',
            isUnsplash: true,
          },
        ],
      },
      {
        step: [
          {
            type: 'title',
            value: 'Step 2: Prepare the Peanut Sauce',
          },
          {
            type: 'text',
            value:
              'In a small mixing bowl, combine peanut butter, soy sauce, lime juice, maple syrup, chili flakes, and grated ginger. Whisk together until smooth. Add warm water a little at a time until you get a creamy, pourable consistency. Taste and adjust spice or sweetness to your preference.',
          },
        ],
      },
      {
        step: [
          {
            type: 'title',
            value: 'Step 3: Assemble the Salad',
          },
          {
            type: 'text',
            value:
              'In a large salad bowl, toss together the mixed greens, carrots, cucumber, and red bell pepper. Add the tofu cubes and drizzle the peanut sauce over the top. Gently toss to coat evenly.',
          },
        ],
      },
      {
        step: [
          {
            type: 'title',
            value: 'Step 4: Garnish and Serve',
          },
          {
            type: 'text',
            value:
              'Top the salad with fresh cilantro or mint and a sprinkle of chopped peanuts. Serve immediately, or refrigerate for up to 2 hours before eating. The flavors intensify as it sits, making it even more delicious.',
          },
        ],
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

// split records into chunks for table of contents
function splitRecipes(recipeData: string[]) {
  const result: Record<string, string[]> = {};
  const total = recipeData.length;

  // first 9 records
  result[`part1`] = recipeData.slice(0, 9);

  // remaining records in groups of 10
  let part = 2;
  for (let i = 9; i < total; i += 10) {
    const chunk = recipeData.slice(i, i + 10);
    result[`part${part}`] = chunk;
    part++;
  }

  return result;
}

const weekDays = [
  'MONDAY',
  'TUESDAY',
  'WEDNESDAY',
  'THURSDAY',
  'FRIDAY',
  'SATURDAY',
  'SUNDAY',
];

// Split recipe into sections for pagination
const getRecipeSections = (recipe: IRecipe) => {
  const recipeNames = recipeData.map((el: IRecipe) => el.basicInfo.recipeName);
  const tableOfContentsData = splitRecipes(recipeNames);
  console.log('tableOfContentsData::', tableOfContentsData);

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

  Object.entries(tableOfContentsData).forEach(
    ([partKey, partItems], partIndex) => {
      const startNumber = partIndex === 0 ? 1 : 9 + (partIndex - 1) * 10 + 1;

      console.log('startNumber::', startNumber);

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
                py: 14,
                px: 8,
                height: '115%',
                backgroundColor: '#f9f9f9',
              }}
            >
              {partIndex < 1 && (
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
              )}
              {partItems.map((item, index) => (
                <Box
                  sx={{
                    display: 'flex',
                    mb: 2,
                  }}
                >
                  <Box sx={{ mr: 2 }}>
                    <Typography
                      sx={{
                        fontSize: '2rem',
                        fontWeight: 700,
                      }}
                    >
                      {startNumber < 10
                        ? `0${startNumber + index}`
                        : startNumber + index}
                    </Typography>
                  </Box>
                  <Box>
                    <Typography
                      variant='body1'
                      sx={{
                        fontSize: '1rem',
                        fontWeight: 700,
                      }}
                    >
                      {item}
                    </Typography>
                    <Typography variant='caption' sx={{ width: 300 }}>
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
    }
  );

  //   Food Contents Sections
  //   Food section  - layout 1
  sections.push(
    <Box key='food-layout-one' sx={{ display: 'flex', px: 5 }}>
      <Box
        sx={{
          width: 794,
          height: 1123,
          maxContentHeight: 1050,
          p: 9,
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

          {/* nutritionalFacts */}
          {/* <Box>
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
          </Box> */}
        </Box>
      </Box>

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
    <Box key='food-layout-two' sx={{ display: 'flex' }}>
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

  //   Food section  - layout 3
  sections.push(
    <Box key='food-layout-three' sx={{ display: 'flex', px: 5 }}>
      <Box
        sx={{
          width: 794,
          height: 1123,
          overflow: 'hidden',
        }}
      >
        <Box sx={{ pt: 4, pr: 5 }}>
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
              pr: 4,
            }}
          >
            {data.basicInfo.recipeName.toUpperCase()}
          </Typography>

          {/* Description */}
          <Typography sx={{ pr: 5 }}>
            {data.details.about.find((block) => block.type === 'text')?.value}
          </Typography>

          {/* Ingredients */}
          <Box sx={{ pr: 5 }}>
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
          {/* Img and metadata */}
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={{ xs: 2 }} columns={{ xs: 12 }}>
              <Grid item xs={8}>
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
              </Grid>

              <Grid item xs={3}>
                {/* Level, Serving, Duration */}
                <Box sx={{ mt: 2, backgroundColor: '#ebebeb', p: 1 }}>
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      // width: '80%',
                      margin: 'auto',
                    }}
                  >
                    <Box
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        p: 2,
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
                        p: 2,
                      }}
                    >
                      <GiLever
                        size={30}
                        color={
                          data.basicInfo.level.value.toLowerCase() === 'easy'
                            ? '#2E7D32'
                            : data.basicInfo.level.value.toLowerCase() ===
                              'medium'
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
                        p: 2,
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
              </Grid>
            </Grid>
          </Box>
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
          component='img'
          src='https://images.unsplash.com/photo-1488477181946-6428a0291777?w=800&h=600&fit=crop'
          alt='Muesli'
          sx={{
            width: '100%',
            height: 'auto',
            objectFit: 'cover',
          }}
        />
        {/* Instruction */}
        <Box sx={{ p: 6, px: 10 }}>
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

  //   Food section  - layout 4
  sections.push(
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

  //   Food section  - layout 5
  sections.push(
    <Box key='food-layout-five' sx={{ display: 'flex' }}>
      {/* First Layout PAGE */}
      <Box
        sx={{
          width: 794,
          height: 1123,
          overflow: 'hidden',
          px: 5,
        }}
      >
        <Box sx={{ py: 5 }}>
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
          {/* Instruction */}
          <Box sx={{ pr: 5 }}>
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
              Instructions
            </Typography>

            {/* Two-column layout */}
            <Grid container spacing={3}>
              {data.directions.methods.map((method, methodIndex) => (
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
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={{ xs: 2 }} columns={{ xs: 12 }}>
              <Grid item>
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
              </Grid>

              <Grid item xs={3}></Grid>
            </Grid>
          </Box>
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
          component='img'
          src='https://images.unsplash.com/photo-1488477181946-6428a0291777?w=800&h=600&fit=crop'
          alt='Muesli'
          sx={{
            width: '100%',
            height: 'auto',
            objectFit: 'cover',
          }}
        />
        {/* Ingredients */}
        <Box sx={{ p: 5, px: 14 }}>
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
      </Box>
    </Box>
  );

  //   Food section  - layout 6
  sections.push(
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

  //   Food section  - layout 7
  sections.push(
    <Box key='food-layout-seven' sx={{ display: 'flex' }}>
      {/* First Layout PAGE */}
      <Box
        sx={{
          width: 794,
          height: 1123,
          p: 5,
          pr: 15,
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
      {/* Second Layout PAGE */}
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
    </Box>
  );

  //   Food section  - layout 8
  sections.push(
    <Box
      key='food-layout-eight'
      sx={{
        width: 1580,
        height: 1123,
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Full-width top image section */}
      <Box
        sx={{
          flexShrink: 0,
          width: '100%',
          height: 350,
          backgroundImage:
            "url('https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=1600&h=900&fit=crop')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          ml: -7,
        }}
      />

      {/* Two side-by-side pages below */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          flexGrow: 1,
          px: 5,
          gap: 2,
        }}
      >
        {/* First Layout Page */}
        <Box
          sx={{
            width: 794,
            height: '100%',
            overflow: 'hidden',
            pr: 10,
          }}
        >
          {/* Ingredients */}
          <Box>
            <Box
              sx={{
                m: 3,
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              <Box sx={{ borderTop: '1px solid black', width: 300 }} />
              <Box
                sx={{
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

          {/* Instruction */}
          <Box sx={{}}>
            {/* Header */}
            <Typography
              sx={{
                fontFamily: "'Georgia', serif",
                fontSize: '1.8rem',
                fontWeight: 700,
                color: '#2d2d2d',
                my: 3,
              }}
            >
              Directions
            </Typography>
            <Grid container spacing={3}>
              {data.directions.methods.length > 2 &&
                data.directions.methods
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

        {/* Second Layout Page */}
        <Box
          sx={{
            width: 794,
            height: '100%',
            p: 5,
            pl: 10,
            bgcolor: '#fff',
          }}
        >
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
          {/* Instruction part 2*/}
          <Box sx={{ mt: 5 }}>
            <Grid container spacing={3}>
              {data.directions.methods.length > 2 &&
                data.directions.methods
                  .slice(2, 4)
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
                                {methodIndex + 3}.
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
  //   Food section  - layout 9
  sections.push(
    <Box key='food-layout-nine' sx={{ display: 'flex',  }}>
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
        <Box sx={{ pr: 6, pt: 3 , px: 5}}>
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
          pl: 14
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

          {/* nutritionalFacts */}
          {/* <Box>
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
          </Box> */}
        </Box>
      </Box>
    </Box>
  );
  //   Food section  - layout 10
  sections.push(
    <Box
      key='food-layout-ten'
      sx={{
        width: 1580,
        height: 1123,
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Full-width top image section */}
      <Box
        sx={{
          flexShrink: 0,
          width: '100%',
          height: 350,
          backgroundImage:
            "url('https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=1600&h=900&fit=crop')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          ml: -7,
        }}
      />

      {/* Two side-by-side pages below */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          flexGrow: 1,
          px: 5,
          gap: 2,
        }}
      >
        {/* First Layout Page */}
        <Box
          sx={{
            width: 794,
            height: '100%',
            overflow: 'hidden',
            pr: 10,
          }}
        >
          {/* Ingredients */}
          <Box>
            <Box
              sx={{
                m: 3,
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              <Box sx={{ borderTop: '1px solid black', width: 300 }} />
              <Box
                sx={{
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

          {/* Instruction */}
          <Box sx={{}}>
            {/* Header */}
            <Typography
              sx={{
                fontFamily: "'Georgia', serif",
                fontSize: '1.8rem',
                fontWeight: 700,
                color: '#2d2d2d',
                my: 3,
              }}
            >
              Directions
            </Typography>
            <Grid container spacing={3}>
              {data.directions.methods.length > 2 &&
                data.directions.methods
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

        {/* Second Layout Page */}
        <Box
          sx={{
            width: 794,
            height: '100%',
            p: 5,
            pl: 10,
            bgcolor: '#fff',
          }}
        >
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

          <Box sx={{ flexGrow: 1, mt: 3 }}>
            <Grid container spacing={4}>
              {Array.from(Array(2)).map((el, indx) => (
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
  );

  //   back section - weekly planner - layout 12
  sections.push(
    <Box key='food-layout-twelve' sx={{ display: 'flex' }}>
      {/* First half */}
      <Box
        sx={{
          width: 794,
          height: 1123,
          p: 5,
          pr: 15,
          bgcolor: '#fff',
          position: 'relative',
        }}
      >
        <Typography
          sx={{
            fontFamily: "'Playfair Display', serif",
            fontSize: '2.5rem',
            fontWeight: 700,
            color: '#2d2d2d',
            mb: 4,
            textAlign: 'center',
          }}
        >
          WEEKLY PLANNER
        </Typography>

        {/* Days grid */}
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
          {weekDays.map((day, idx) => (
            <Box
              key={day}
              sx={{
                display: 'flex',
                alignItems: 'center',
                borderBottom: '1px solid #e0e0e0',
                pb: 2.5,
              }}
            >
              <Box sx={{ width: '30%', pr: 2 }}>
                <Typography
                  sx={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: '0.95rem',
                    fontWeight: 600,
                    color: '#2d2d2d',
                  }}
                >
                  {day}
                </Typography>
              </Box>
              <Box
                sx={{
                  flex: 1,
                  height: '70px',
                  borderBottom: '1px dotted #ccc',
                }}
              />
            </Box>
          ))}
        </Box>

        {/* Decorative element */}
        <Box
          sx={{
            mt: 4,
            pt: 3,
            borderTop: '2px solid #8B7355',
            textAlign: 'center',
          }}
        >
          <Typography
            sx={{
              fontFamily: "'Dancing Script', cursive",
              fontSize: '1.3rem',
              color: '#8B7355',
            }}
          >
            Plan your meals with love
          </Typography>
        </Box>

        <Box
          sx={{
            position: 'absolute',
            bottom: 20,
            left: '50%',
            transform: 'translateX(-50%)',
            width: 40,
            height: 40,
            border: '2px solid #8B7355',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Box
            sx={{
              width: 8,
              height: 8,
              bgcolor: '#8B7355',
              borderRadius: '50%',
            }}
          />
        </Box>
      </Box>

      {/* second half */}
      <Box
        sx={{
          width: 794,
          height: 1123,
          p: 5,
          pl: 15,
          bgcolor: '#f5f5f5',
          position: 'relative',
        }}
      >
        <Typography
          sx={{
            fontFamily: "'Playfair Display', serif",
            fontSize: '2.5rem',
            fontWeight: 700,
            color: '#2d2d2d',
            mb: 4,
            textAlign: 'center',
          }}
        >
          WEEKLY PLANNER
        </Typography>

        {/* Lined paper effect */}
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          {Array.from({ length: 35 }).map((_, idx) => (
            <Box
              key={idx}
              sx={{
                width: '100%',
                height: '1px',
                bgcolor: '#e0e0e0',
                position: 'relative',
              }}
            >
              {/* Small decorative circle on left */}
              <Box
                sx={{
                  position: 'absolute',
                  left: -12,
                  top: '50%',
                  transform: 'translateY(-50%)',
                  width: 6,
                  height: 6,
                  bgcolor: '#8B7355',
                  borderRadius: '50%',
                }}
              />
            </Box>
          ))}
        </Box>

        {/* Bottom decorative quote */}
        <Box
          sx={{
            position: 'absolute',
            bottom: 60,
            left: 0,
            right: 0,
            textAlign: 'center',
          }}
        >
          <Typography
            sx={{
              fontFamily: "'Lato', sans-serif",
              fontSize: '0.9rem',
              color: '#999',
              fontStyle: 'italic',
            }}
          >
            "Cooking is an act of love, a gift, a way of sharing with others"
          </Typography>
        </Box>

        <Box
          sx={{
            position: 'absolute',
            bottom: 20,
            left: '50%',
            transform: 'translateX(-50%)',
            width: 40,
            height: 40,
            border: '2px solid #8B7355',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Box
            sx={{
              width: 8,
              height: 8,
              bgcolor: '#8B7355',
              borderRadius: '50%',
            }}
          />
        </Box>
      </Box>
    </Box>
  );

  //   back section  - layout 10
  sections.push(
    <Box key='food-layout-eleven' sx={{ display: 'flex' }}>
      {/* First half */}
      <Box
        sx={{
          width: 794,
          height: 1123,
          p: 5,
          pr: 15,
          bgcolor: '#fff',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography
          sx={{
            fontFamily: "'Georgia', serif",
            fontSize: '2.5rem',
            fontWeight: 700,
            color: '#2d2d2d',
            mb: 4,
          }}
        >
          NOTES
        </Typography>

        <Typography
          sx={{
            fontFamily: "'Georgia', serif",
            fontSize: '0.9rem',
            color: '#666',
            lineHeight: 1.8,
            textAlign: 'justify',
            mb: 4,
          }}
        >
          Use this space to write your own recipe variations, cooking tips, or
          favorite modifications. Every cook has their own secrets and special
          touches that make a recipe their own.
        </Typography>

        <Box
          sx={{
            borderTop: '1px solid #ddd',
            pt: 2,
            mt: 4,
            minHeight: '300px',
          }}
        >
          <Typography
            sx={{
              fontFamily: "'Georgia', serif",
              fontSize: '0.85rem',
              color: '#999',
              fontStyle: 'italic',
            }}
          >
            Your notes here...
          </Typography>
        </Box>
      </Box>

      {/* second half */}
      <Box
        sx={{
          width: 794,
          height: 1123,
          p: 5,
          pl: 15,
          bgcolor: '#f5f5f5',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography
          sx={{
            fontFamily: "'Georgia', serif",
            fontSize: '3rem',
            fontWeight: 700,
            color: '#2d2d2d',
            mb: 3,
            textAlign: 'center',
          }}
        >
          Classic Recipes
        </Typography>

        <Typography
          sx={{
            fontFamily: "'Georgia', serif",
            fontSize: '1.1rem',
            color: '#666',
            lineHeight: 1.8,
            textAlign: 'center',
            maxWidth: '400px',
            mb: 6,
          }}
        >
          A collection of timeless recipes for every meal. From breakfast to
          lunch, each dish is crafted with care and designed to bring joy to
          your table.
        </Typography>

        <Box
          sx={{
            width: '80px',
            height: '2px',
            bgcolor: '#2d2d2d',
            mb: 4,
          }}
        />

        <Typography
          sx={{
            fontFamily: "'Georgia', serif",
            fontSize: '0.9rem',
            color: '#999',
            textAlign: 'center',
          }}
        >
          Happy Cooking
        </Typography>
      </Box>
    </Box>
  );

  // Back Cover Page
  sections.push(
    <Box
      key='backCover'
      sx={{
        bgcolor: '#f5f5f5',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        p: -8,
      }}
    >
      <Box
        sx={{
          width: '210mm',
          height: '297mm',
          bgcolor: '#fff',
          borderRadius: 2,
          boxShadow: '0 0 25px rgba(0,0,0,0.15)',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/* Top section with beige background */}
        <Box
          sx={{
            height: '40%',
            bgcolor: '#F5E6D3',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Typography
            sx={{
              fontFamily: "'Helvetica Neue', sans-serif",
              fontSize: '0.9rem',
              color: '#999',
              letterSpacing: '0.2em',
            }}
          >
            0999
          </Typography>
        </Box>

        {/* Bottom section with content */}
        <Box
          sx={{
            flex: 1,
            p: 10,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Box
            component='img'
            src='https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400&h=300&fit=crop'
            alt='Thank you'
            sx={{
              width: '300px',
              height: '200px',
              objectFit: 'cover',
              mb: 6,
            }}
          />

          <Typography
            sx={{
              fontFamily: "'Helvetica Neue', sans-serif",
              fontSize: '3.5rem',
              fontWeight: 700,
              color: '#2d2d2d',
              mb: 4,
            }}
          >
            THANK YOU
          </Typography>

          <Typography
            sx={{
              fontFamily: "'Helvetica Neue', sans-serif",
              fontSize: '0.9rem',
              color: '#999',
              textAlign: 'center',
              lineHeight: 1.8,
            }}
          >
            Address
            <br />
            E-mail and Phone
          </Typography>
        </Box>
      </Box>
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
