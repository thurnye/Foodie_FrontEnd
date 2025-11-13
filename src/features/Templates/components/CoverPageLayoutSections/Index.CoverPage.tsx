import React from 'react';
import { IRecipe } from '../../../Recipe/types/recipe.types';

import CoverPageLayoutOne from './CoverPageLayoutOne';
import { CoverPageLayoutTwo } from './CoverPageLayoutTwo';
import { CoverPageLayoutThree } from './CoverPageLayoutThree';
import { CoverPageLayoutFour } from './CoverPageLayoutFour';
import { CoverPageLayoutFive } from './CoverPageLayoutFive';
import { CoverPageLayoutSix } from './CoverPageLayoutSix';
import { CoverPageLayoutSeven } from './CoverPageLayoutSeven';

// Function to return selected layout(s) based on layout number
export function getCoverPageLayouts(): React.ReactNode[] {
  const pages: React.ReactNode[] = [];

  // layout number from recipe data (default to 1)
  const layoutNumber:number = 7;

  switch (layoutNumber) {
    case 1:
      pages.push(<CoverPageLayoutOne key="cover-page-1" />);
      break;
    case 2:
      pages.push(<CoverPageLayoutTwo key="cover-page-2" />);
      break;
    case 3:
      pages.push(<CoverPageLayoutThree key="cover-page-3" />);
      break;
    case 4:
      pages.push(<CoverPageLayoutFour key="cover-page-4" />);
      break;
    case 5:
      pages.push(<CoverPageLayoutFive key="cover-page-5" />);
      break;
    case 6:
      pages.push(<CoverPageLayoutSix key="cover-page-6" />);
      break;
    case 7:
      pages.push(<CoverPageLayoutSeven key="cover-page-7" />);
      break;
    default:
      console.warn(`⚠️ Invalid layout number: ${layoutNumber}`);
      pages.push(<CoverPageLayoutOne key="cover-page-1"/>);
      break;
  }

  return pages;
}
