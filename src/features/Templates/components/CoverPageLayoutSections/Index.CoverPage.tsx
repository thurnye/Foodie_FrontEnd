import React from 'react';

import CoverPageLayoutOne from './CoverPageLayoutOne';
import { CoverPageLayoutTwo } from './CoverPageLayoutTwo';
import { CoverPageLayoutThree } from './CoverPageLayoutThree';
import { CoverPageLayoutFour } from './CoverPageLayoutFour';
import { CoverPageLayoutFive } from './CoverPageLayoutFive';
import { CoverPageLayoutSix } from './CoverPageLayoutSix';
import { CoverPageLayoutSeven } from './CoverPageLayoutSeven';
import { PageLayoutFormat } from '../../../CookBook/types/book.types';

// Function to return selected layout(s) based on layout number
export function getCoverPageLayouts(layoutNumber: string = 'cover-layout-one'): {coverLayoutsCount:number, coverLayouts: React.ReactNode[], paperSize: PageLayoutFormat} {
  const pages: React.ReactNode[] = [];
  console.log('Generating cover page layouts for layout number:', layoutNumber);

  switch (layoutNumber) {
    case 'cover-layout-one':
      pages.push(<CoverPageLayoutOne key='cover-page-1' />); //format will be A4
      break;
    case 'cover-layout-two':
      pages.push(<CoverPageLayoutTwo key='cover-page-2' />); //format will be A4
      break;
    case 'cover-layout-three':
      pages.push(<CoverPageLayoutThree key='cover-page-3' />); //format will be A4
      break;
    case 'cover-layout-four':
      pages.push(<CoverPageLayoutFour key='cover-page-4' />); //format will be A4
      break;
    case 'cover-layout-five':
      pages.push(<CoverPageLayoutFive key='cover-page-5' />); //format will be A4
      break;
    case 'cover-layout-six':
      pages.push(<CoverPageLayoutSix key='cover-page-6' />); //format will be A4
      break;
    case 'cover-layout-seven':
      pages.push(<CoverPageLayoutSeven key='cover-page-7' />); //format will be A4
      break;
    default:
      console.warn(` Invalid layout number: ${layoutNumber}`);
      pages.push(<CoverPageLayoutOne key='cover-page-1' />); //format will be A4
      break;
  }

  // All cover layouts use A4 format
  return {coverLayoutsCount: 7, coverLayouts:pages, paperSize: PageLayoutFormat.A4};
}
