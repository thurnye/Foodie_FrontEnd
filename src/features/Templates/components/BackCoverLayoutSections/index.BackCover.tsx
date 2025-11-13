import React from 'react';
import { IRecipe } from '../../../Recipe/types/recipe.types';
import BackCoverLayoutOne from './BackCoverLayoutOne';
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


// Function to return selected layout(s) based on layout number
export function getBackPageLayouts(): React.ReactNode[] {
  const pages: React.ReactNode[] = [];

  // layout number from recipe data (default to 1)
  const layoutNumber:number = 1;

  switch (layoutNumber) {
    case 1:
      pages.push(<BackCoverLayoutOne key="backCover" data={data}/>);
      break;
    default:
      console.warn(`Invalid layout number: ${layoutNumber}`);
      pages.push(<BackCoverLayoutOne key="backCover" data={data}/>);
      break;
  }

  return pages;
}
