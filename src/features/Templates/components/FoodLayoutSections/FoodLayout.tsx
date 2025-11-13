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

// Function to return selected layout(s) based on layout number
export function getFoodLayouts(data: IRecipe): React.ReactNode[] {
  const pages: React.ReactNode[] = [];

  // layout number from recipe data (default to 1)
  const layoutNumber:number = 1;

  switch (layoutNumber) {
    case 1:
      pages.push(<FoodLayoutOne key="foodLayout-1" data={data} />);
      break;
    case 2:
      pages.push(<FoodLayoutTwo key="foodLayout-2" data={data} />);
      break;
    case 3:
      pages.push(<FoodLayoutThree key="foodLayout-3" data={data} />);
      break;
    case 4:
      pages.push(<FoodLayoutFour key="foodLayout-4" data={data} />);
      break;
    case 5:
      pages.push(<FoodLayoutFive key="foodLayout-5" data={data} />);
      break;
    case 6:
      pages.push(<FoodLayoutSix key="foodLayout-6" data={data} />);
      break;
    case 7:
      pages.push(<FoodLayoutSeven key="foodLayout-7" data={data} />);
      break;
    case 8:
      pages.push(<FoodLayoutEight key="foodLayout-8" data={data} />);
      break;
    case 9:
      pages.push(<FoodLayoutNine key="foodLayout-9" data={data} />);
      break;
    case 10:
      pages.push(<FoodLayoutTen key="foodLayout-10" data={data} />);
      break;
    default:
      console.warn(`⚠️ Invalid layout number: ${layoutNumber}`);
      pages.push(<FoodLayoutOne key="foodLayout-default" data={data} />);
      break;
  }

  return pages;
}
