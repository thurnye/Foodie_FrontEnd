import React from 'react';

import IntroPageLayoutOne from './IntroPageLayoutOne';
import {
  ICookbook,
  ICookbookAuthor,
} from '../../../CookBook/types/cookbook.types';

const SampleData: ICookbookAuthor = {
  _id: '612296fc86231100a0631b22',
  firstName: 'Sample',
  lastName: 'Sampler',
  email: 'testprogram404@gmail.com',
  avatar:
    'https://res.cloudinary.com/xperiacloud/image/upload/v1629673217/imgPlaceholder_vwmmo9.jpg',
  bio: "Hello! I'm Sample Sampler, a passionate home cook and food enthusiast. I love experimenting with new recipes and sharing my culinary adventures with others. Join me on this delicious journey!",
};

// Function to return selected layout(s) based on layout number
export function getIntroPageLayouts(
  books: ICookbook | null,
  layoutNumber: string = 'intro-layout-one'
): {introLayoutsCount: number, introLayouts: React.ReactNode[]} {
  const pages: React.ReactNode[] = [];

  const cookbookAuthor = books?.author || SampleData;

  switch (layoutNumber) {
    case 'intro-layout-one':
      pages.push(<IntroPageLayoutOne key='welcome' author={cookbookAuthor} />);
      break;
    default:
      console.warn(`Invalid layout number: ${layoutNumber}`);
      pages.push(<IntroPageLayoutOne key='welcome' author={cookbookAuthor} />);
      break;
  }

  return {introLayoutsCount: 1, introLayouts: pages};
}
