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
export function getCoverPageLayouts(layoutNumber: string = 'cover-layout-one'): {coverLayoutsCount:number, coverLayouts: React.ReactNode[]} {
  const pages: React.ReactNode[] = [];

  switch (layoutNumber) {
    case 'cover-layout-one':
      pages.push(<CoverPageLayoutOne key='cover-page-1' />);
      break;
    case 'cover-layout-two':
      pages.push(<CoverPageLayoutTwo key='cover-page-2' />);
      break;
    case 'cover-layout-three':
      pages.push(<CoverPageLayoutThree key='cover-page-3' />);
      break;
    case 'cover-layout-four':
      pages.push(<CoverPageLayoutFour key='cover-page-4' />);
      break;
    case 'cover-layout-five':
      pages.push(<CoverPageLayoutFive key='cover-page-5' />);
      break;
    case 'cover-layout-six':
      pages.push(<CoverPageLayoutSix key='cover-page-6' />);
      break;
    case 'cover-layout-seven':
      pages.push(<CoverPageLayoutSeven key='cover-page-7' />);
      break;
    default:
      console.warn(` Invalid layout number: ${layoutNumber}`);
      pages.push(<CoverPageLayoutOne key='cover-page-1' />);
      break;
  }

  return {coverLayoutsCount: 7, coverLayouts:pages};
}
