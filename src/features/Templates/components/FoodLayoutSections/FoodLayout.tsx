import React from 'react';
import { IRecipe } from '../../../Recipe/types/recipe.types';

// Layout imports
import FoodLayoutOne from './FoodLayoutOne';
import FoodLayoutTwo from './FoodLayoutTwo';
import FoodLayoutThree from './FoodLayoutThree';
import FoodLayoutFour from './FoodLayoutFour';
import FoodLayoutFive from './FoodLayoutFive';
import FoodLayoutSix from './FoodLayoutSix';
import FoodLayoutSeven from './FoodLayoutSeven';
import FoodLayoutEight from './FoodLayoutEight';
import FoodLayoutNine from './FoodLayoutNine';
import FoodLayoutTen from './FoodLayoutTen';
import { IBook, IRecipeData } from '../../../CookBook/types/book.types';
import { ICookbook } from '../../../CookBook/types/cookbook.types';

const sampleCookbookData: ICookbook = require('../../../../shared/data/shared.updatedRecipeFoodieData.json');

export function getFoodLayouts(
  data?: IBook | null,
  recipeData?: IRecipeData
): React.ReactNode[] {
  const pages: React.ReactNode[] = [];

  let layoutNumber = 'layout-one';
  let recipe: IRecipeData | undefined = recipeData;

  if (data) {
    // New schema: recipe array contains recipe pages
    const bookData = data as any;
    if (bookData.recipe && Array.isArray(bookData.recipe) && bookData.recipe.length > 0) {
      const recipePage = bookData.recipe[0];
      if (recipePage?.layout) {
        layoutNumber = recipePage.layout;
      }
      // The recipe page itself contains all the recipe data
      recipe = recipePage;
    } else if (bookData.layout) {
      // Old schema fallback
      layoutNumber = bookData.layout;
      if (bookData.recipe) {
        recipe = Array.isArray(bookData.recipe)
          ? bookData.recipe[0]
          : bookData.recipe;
      }
    }
  }

  // If no recipe data is available, use sample data as fallback
  if (
    !recipe &&
    sampleCookbookData.books &&
    sampleCookbookData.books.length > 0
  ) {
    console.log('Using sample cookbook data as fallback for food layout');
    const firstBook = sampleCookbookData.books[0];
    if (typeof firstBook !== 'string') {
      // New schema: recipe array
      if ((firstBook as any).recipe && Array.isArray((firstBook as any).recipe)) {
        recipe = (firstBook as any).recipe[0];
      } else if ((firstBook as any).recipe) {
        // Fallback to old schema
        const oldRecipe = (firstBook as any).recipe;
        recipe = Array.isArray(oldRecipe)
          ? oldRecipe[0]
          : oldRecipe;
      }
    }
  }

  // If still no recipe data, return empty array
  if (!recipe) {
    console.warn('⚠️ No recipe data provided to getFoodLayouts', { data, recipeData });
    return pages;
  }

  // Validate recipe structure
  if (!recipe.basicInfo || !recipe.basicInfo.recipeName) {
    console.error('❌ Invalid recipe structure - missing basicInfo or recipeName', recipe);
    return pages;
  }

  switch (layoutNumber) {
    case 'layout-one':
      pages.push(<FoodLayoutOne key='foodLayout-1' data={recipe} />);
      break;
    case 'layout-two':
      pages.push(<FoodLayoutTwo key='foodLayout-2' data={recipe} />);
      break;
    case 'layout-three':
      pages.push(<FoodLayoutThree key='foodLayout-3' data={recipe} />);
      break;
    case 'layout-four':
      pages.push(<FoodLayoutFour key='foodLayout-4' data={recipe} />);
      break;
    case 'layout-five':
      pages.push(<FoodLayoutFive key='foodLayout-5' data={recipe} />);
      break;
    case 'layout-six':
      pages.push(<FoodLayoutSix key='foodLayout-6' data={recipe} />);
      break;
    case 'layout-seven':
      pages.push(<FoodLayoutSeven key='foodLayout-7' data={recipe} />);
      break;
    case 'layout-eight':
      pages.push(<FoodLayoutEight key='foodLayout-8' data={recipe} />);
      break;
    case 'layout-nine':
      pages.push(<FoodLayoutNine key='foodLayout-9' data={recipe} />);
      break;
    case 'layout-ten':
      pages.push(<FoodLayoutTen key='foodLayout-10' data={recipe} />);
      break;
    default:
      console.warn(` Invalid layout number: ${layoutNumber}`);
      pages.push(<FoodLayoutOne key='foodLayout-default' data={recipe} />);
      break;
  }

  return pages;
}
