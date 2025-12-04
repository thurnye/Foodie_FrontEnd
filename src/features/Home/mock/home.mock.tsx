import Img2 from '../../../public/images/tier3/img2.jpeg';
import Img3 from '../../../public/images/tier3/img3.jpeg';
import Img4 from '../../../public/images/tier3/img4.jpeg';
import Img6 from '../../../public/images/recentRecipes/img6.jpeg';
import Img7 from '../../../public/images/recentRecipes/img7.jpeg';
import Img8 from '../../../public/images/recentRecipes/img8.jpeg';
import Img9 from '../../../public/images/recentRecipes/img9.jpeg';
import Img10 from '../../../public/images/recentRecipes/img10.jpeg';
import Img11 from '../../../public/images/recentRecipes/img11.jpeg';
import Img12 from '../../../public/images/recentRecipes/img12.jpeg';
import Img13 from '../../../public/images/recentRecipes/img13.jpeg';
import { IContentBlock, IFAQ, IIngredient, IMethod, INutritionalFact, IRecipe, IRecipeAuthor, IValueLabel } from '../../Recipe/types/recipe.types';
import { SocialLink } from '../types/home.types';

// --- Reusable shared mock objects ---
const author: IRecipeAuthor = {
  userId: 'user_123',
  username: 'chefemily',
  firstName: 'Emily',
  lastName: 'Stone',
  avatar: '/images/authors/emily.jpg',
  slogan: 'Wholesome recipes that warm your heart and soul.',
};

const duration: IValueLabel = { value: '30', label: '30 Minutes' };
const level: IValueLabel = { value: 'easy', label: 'Super Easy' };
const serving: IValueLabel = { value: '2', label: 'Serves 2' };

const categories: IValueLabel[] = [
  { value: 'breakfast', label: 'Breakfast' },
  { value: 'dessert', label: 'Dessert' },
];

const tags: IValueLabel[] = [
  { value: 'pancakes', label: 'Pancakes' },
  { value: 'berries', label: 'Berries' },
];

const about: IContentBlock[] = [
  {
    type: 'text',
    value:
      'Fluffy, buttery pancakes topped with a luscious triple-berry sauce — perfect for a weekend breakfast or brunch.',
  },
];

const ingredients: IIngredient[] = [
  { name: 'Flour', type: 'main' },
  { name: 'Milk', type: 'main' },
  { name: 'Eggs', type: 'main' },
  { name: 'Berries', type: 'dressing' },
];

const methods: IMethod[] = [
  {
    step: [
      { type: 'text', value: 'Mix dry ingredients in a bowl.' },
      { type: 'text', value: 'Add wet ingredients and whisk until smooth.' },
      { type: 'text', value: 'Cook on a non-stick pan until golden.' },
    ],
  },
];

const nutritionalFacts: INutritionalFact[] = [
  { name: 'Calories', amount: '210', unit: 'kcal' },
  { name: 'Protein', amount: '8', unit: 'g' },
  { name: 'Carbs', amount: '35', unit: 'g' },
];

const faqs: IFAQ[] = [
  {
    ques: 'Can I use almond milk instead of dairy milk?',
    ans: 'Yes, almond milk works perfectly as a substitute.',
  },
  {
    ques: 'Can I make this gluten-free?',
    ans: 'You can replace regular flour with oat or almond flour.',
  },
];

// --- Sample Recipes ---
export const recent: IRecipe[] = [
  {
    _id: 'r1',
    basicInfo: {
      recipeName: 'The best fluffy buttermilk pancakes with triple berry sauce',
      duration,
      level,
      serving,
      tags,
      categories,
    },
    details: {
      thumbnail: Img6,
      about,
      faqs,
    },
    directions: {
      methods,
      ingredients,
    },
    nutritionalFacts,
    author,
    averageRating: 4.9,
    totalReviews: 27,
    createdAt: '2024-07-15T10:00:00Z',
    updatedAt: '2024-08-10T10:00:00Z',
  },
  {
    _id: 'r2',
    basicInfo: {
      recipeName: 'Chocolate banana pancakes',
      duration,
      level,
      serving,
      tags: [{ value: 'chocolate', label: 'Chocolate' }],
      categories: [{ value: 'breakfast', label: 'Breakfast' }],
    },
    details: {
      thumbnail: Img7,
      about: [
        {
          type: 'text',
          value:
            'Rich chocolate and ripe banana come together in this quick and decadent breakfast treat.',
        },
      ],
      faqs,
    },
    directions: {
      methods,
      ingredients,
    },
    nutritionalFacts,
    author,
    averageRating: 4.7,
    totalReviews: 18,
    createdAt: '2024-07-16T09:00:00Z',
    updatedAt: '2024-08-09T09:00:00Z',
  },
  {
    _id: 'r3',
    basicInfo: {
      recipeName:
        'Cinnamon french toast with cream cheese glaze and berry syrup',
      duration,
      level,
      serving,
      tags: [{ value: 'french-toast', label: 'French Toast' }],
      categories: [{ value: 'brunch', label: 'Brunch' }],
    },
    details: {
      thumbnail: Img8,
      about: [
        {
          type: 'text',
          value:
            'Golden brown French toast with a smooth cream cheese glaze and tangy berry syrup — an indulgent morning favorite.',
        },
      ],
      faqs,
    },
    directions: {
      methods,
      ingredients,
    },
    nutritionalFacts,
    author,
    averageRating: 4.8,
    totalReviews: 25,
    createdAt: '2024-07-17T09:00:00Z',
    updatedAt: '2024-08-09T09:00:00Z',
  },
  {
    _id: 'r4',
    basicInfo: {
      recipeName: 'Peanut butter pancakes',
      duration,
      level,
      serving,
      tags: [{ value: 'peanut-butter', label: 'Peanut Butter' }],
      categories: [{ value: 'breakfast', label: 'Breakfast' }],
    },
    details: {
      thumbnail: Img9,
      about: [
        {
          type: 'text',
          value:
            'Creamy peanut butter pancakes that are as satisfying as they are easy to make.',
        },
      ],
      faqs,
    },
    directions: {
      methods,
      ingredients,
    },
    nutritionalFacts,
    author,
    averageRating: 4.6,
    totalReviews: 15,
    createdAt: '2024-07-18T08:00:00Z',
    updatedAt: '2024-08-08T08:00:00Z',
  },
  {
    _id: 'r5',
    basicInfo: {
      recipeName: 'Traditional French breakfast croissant and coffee',
      duration,
      level,
      serving,
      tags: [{ value: 'french', label: 'French' }],
      categories: [{ value: 'breakfast', label: 'Breakfast' }],
    },
    details: {
      thumbnail: Img10,
      about: [
        {
          type: 'text',
          value:
            'A timeless French breakfast pairing — flaky croissants with a smooth cup of coffee.',
        },
      ],
      faqs,
    },
    directions: {
      methods,
      ingredients,
    },
    nutritionalFacts,
    author,
    averageRating: 4.5,
    totalReviews: 10,
    createdAt: '2024-07-19T07:00:00Z',
    updatedAt: '2024-08-07T07:00:00Z',
  },
  {
    _id: 'r6',
    basicInfo: {
      recipeName: 'One-pot pasta primavera',
      duration,
      level,
      serving,
      tags: [{ value: 'pasta', label: 'Pasta' }],
      categories: [{ value: 'lunch', label: 'Lunch' }],
    },
    details: {
      thumbnail: Img11,
      about: [
        {
          type: 'text',
          value:
            'A light, veggie-packed one-pot pasta that’s fresh, colorful, and simple to make.',
        },
      ],
      faqs,
    },
    directions: {
      methods,
      ingredients,
    },
    nutritionalFacts,
    author,
    averageRating: 4.9,
    totalReviews: 31,
    createdAt: '2024-07-20T09:00:00Z',
    updatedAt: '2024-08-10T09:00:00Z',
  },
  {
    _id: 'r7',
    basicInfo: {
      recipeName: 'Quick & easy chocolate cake with berries from scratch recipe',
      duration,
      level,
      serving,
      tags: [{ value: 'cake', label: 'Cake' }],
      categories: [{ value: 'dessert', label: 'Dessert' }],
    },
    details: {
      thumbnail: Img12,
      about: [
        {
          type: 'text',
          value:
            'Moist chocolate cake topped with fresh berries — all made from scratch in minutes.',
        },
      ],
      faqs,
    },
    directions: {
      methods,
      ingredients,
    },
    nutritionalFacts,
    author,
    averageRating: 5.0,
    totalReviews: 40,
    createdAt: '2024-07-21T09:00:00Z',
    updatedAt: '2024-08-09T09:00:00Z',
  },
  {
    _id: 'r8',
    basicInfo: {
      recipeName: 'Carrot and walnut cake',
      duration,
      level,
      serving,
      tags: [{ value: 'carrot', label: 'Carrot' }],
      categories: [{ value: 'dessert', label: 'Dessert' }],
    },
    details: {
      thumbnail: Img13,
      about: [
        {
          type: 'text',
          value:
            'A moist carrot cake filled with earthy walnuts and a touch of spice for a comforting bite.',
        },
      ],
      faqs,
    },
    directions: {
      methods,
      ingredients,
    },
    nutritionalFacts,
    author,
    averageRating: 4.4,
    totalReviews: 9,
    createdAt: '2024-07-22T09:00:00Z',
    updatedAt: '2024-08-08T09:00:00Z',
  },
];


export const defaultLinks: SocialLink[] = [
  { platform: 'facebook', url: 'https://facebook.com' },
  { platform: 'twitter', url: 'https://x.com' },
  { platform: 'instagram', url: 'https://instagram.com' },
  { platform: 'pinterest', url: 'https://pinterest.com' },
];

// --- Platform Colors ---
export const brandColors: Record<string, string> = {
  facebook: '#1877F2',
  twitter: '#000000', 
  instagram: 'linear-gradient(45deg, #F58529, #DD2A7B, #8134AF, #515BD4)',
  pinterest: '#E60023',
};


export const featureRecipe: IRecipe[] = [
  {
    _id: '664e404cb4513dfa42a75f07',
    basicInfo: {
      recipeName: '40 Mother’s Day Breakfast and Brunch Recipes',
      duration: { value: '30', label: '30 Minutes' },
      level: { value: 'easy', label: 'Super Easy' },
      serving: { value: '4', label: '4 Servings' },
      tags: [{ value: 'brunch', label: 'Brunch' }],
      categories: [{ value: 'breakfast', label: 'Breakfast' }],
    },
    details: {
      thumbnail: Img2,
      about: [
        {
          type: 'text',
          value: `This Mother’s Day, treat mom to a breakfast spread that’s as warm and thoughtful as she is. 
          Our curated collection of 40 breakfast and brunch recipes is designed to bring joy, flavor, and a touch 
          of elegance to the table. From classic pancakes drizzled with maple syrup to savory egg bakes, 
          fruit parfaits, and freshly baked pastries, there’s something for every palate. Each recipe has been tested 
          for simplicity and taste, ensuring you can create a restaurant-quality brunch from the comfort of your home. 
          Celebrate the morning with dishes that combine love, comfort, and flavor — making memories one bite at a time.`,
        },
      ],
      faqs: [],
    },
    directions: {
      methods: [
        {
          step: [
            { type: 'title', value: 'Prepare Ingredients' },
            { type: 'text', value: 'Gather all necessary ingredients for your brunch dishes.' },
          ],
        },
      ],
      ingredients: [
        { name: 'Eggs', type: 'main' },
        { name: 'Butter', type: 'main' },
      ],
    },
    nutritionalFacts: [
      { name: 'Calories', amount: '320', unit: 'kcal' },
      { name: 'Protein', amount: '8', unit: 'g' },
    ],
    author: {
      userId: 'author_1',
      username: 'chef_jane',
      firstName: 'Jane',
      lastName: 'Doe',
      avatar: '/images/authors/jane.png',
      slogan: 'Cooking with love, one meal at a time.',
    },
    averageRating: 4.8,
    totalReviews: 152,
    createdAt: '2024-05-20T10:00:00Z',
    updatedAt: '2024-06-01T12:00:00Z',
  },
  {
    _id: '664e404cb4513dfa42a75ee9',
    basicInfo: {
      recipeName: 'Slow cooker apple cinnamon oatmeal pot',
      duration: { value: '30', label: '30 Minutes' },
      level: { value: 'easy', label: 'Super Easy' },
      serving: { value: '3', label: '3 Servings' },
      tags: [{ value: 'oatmeal', label: 'Oatmeal' }],
      categories: [{ value: 'breakfast', label: 'Breakfast' }],
    },
    details: {
      thumbnail: Img3,
      about: [
        {
          type: 'text',
          value: `Imagine waking up to the aroma of warm apples, sweet cinnamon, and hearty oats filling your kitchen. 
          This slow cooker apple cinnamon oatmeal is the ultimate breakfast comfort food — rich, creamy, and naturally 
          sweetened by the fruit itself. Designed for busy mornings, it cooks overnight to perfection, giving you a 
          wholesome start without any stress. The combination of rolled oats, tender apple slices, and fragrant spices 
          makes every spoonful feel like a cozy hug. Perfect for meal prep, family breakfasts, or chilly mornings when 
          you need a little extra warmth, this dish brings the essence of fall to your table year-round.`,
        },
      ],
      faqs: [],
    },
    directions: {
      methods: [
        {
          step: [
            { type: 'title', value: 'Cook in slow cooker' },
            { type: 'text', value: 'Combine all ingredients and cook on low for 6 hours.' },
          ],
        },
      ],
      ingredients: [
        { name: 'Rolled oats', type: 'main' },
        { name: 'Apple slices', type: 'main' },
      ],
    },
    nutritionalFacts: [
      { name: 'Calories', amount: '250', unit: 'kcal' },
      { name: 'Fiber', amount: '5', unit: 'g' },
    ],
    author: {
      userId: 'author_2',
      username: 'chef_mark',
      firstName: 'Mark',
      lastName: 'Johnson',
      avatar: '/images/authors/mark.png',
      slogan: 'Wholesome meals made simple.',
    },
    averageRating: 4.6,
    totalReviews: 98,
    createdAt: '2024-05-22T09:00:00Z',
    updatedAt: '2024-06-01T12:00:00Z',
  },
  {
    _id: '664e404cb4513dfa42a75ecb',
    basicInfo: {
      recipeName: 'Fudge waffles with ice cream and chocolate sauce',
      duration: { value: '30', label: '30 Minutes' },
      level: { value: 'easy', label: 'Super Easy' },
      serving: { value: '2', label: '2 Servings' },
      tags: [{ value: 'dessert', label: 'Dessert' }],
      categories: [{ value: 'waffles', label: 'Waffles' }],
    },
    details: {
      thumbnail: Img4,
      about: [
        {
          type: 'text',
          value: `For those who believe breakfast should sometimes taste like dessert, these fudge waffles are pure indulgence. 
          Each bite offers a perfect balance between crispy edges and a rich, chocolatey interior that melts in your mouth. 
          Served warm with a scoop of creamy vanilla ice cream and a drizzle of silky chocolate sauce, this recipe transforms 
          ordinary mornings into something extraordinary. Perfect for weekend brunches, special celebrations, or just because 
          you deserve it, these waffles are both simple to make and stunning to serve. Whether you’re treating loved ones or 
          yourself, they’re guaranteed to turn any breakfast into a sweet, unforgettable experience.`,
        },
      ],
      faqs: [],
    },
    directions: {
      methods: [
        {
          step: [
            { type: 'title', value: 'Make Waffles' },
            { type: 'text', value: 'Prepare the batter and cook in a waffle maker until golden brown.' },
          ],
        },
      ],
      ingredients: [
        { name: 'Flour', type: 'main' },
        { name: 'Cocoa powder', type: 'main' },
      ],
    },
    nutritionalFacts: [
      { name: 'Calories', amount: '410', unit: 'kcal' },
      { name: 'Carbs', amount: '55', unit: 'g' },
    ],
    author: {
      userId: 'author_3',
      username: 'chef_sophia',
      firstName: 'Sophia',
      lastName: 'Lee',
      avatar: '/images/authors/sophia.png',
      slogan: 'Sweet moments, one bite at a time.',
    },
    averageRating: 4.9,
    totalReviews: 210,
    createdAt: '2024-05-25T08:30:00Z',
    updatedAt: '2024-06-01T12:00:00Z',
  },
];