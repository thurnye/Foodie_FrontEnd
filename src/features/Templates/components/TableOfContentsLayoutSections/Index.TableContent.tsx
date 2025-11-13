import React from 'react';
import { IRecipe } from '../../../Recipe/types/recipe.types';
import TableOfContentsLayoutOne from './TableOfContentsLayoutOne';

// Dynamically return selected TOC layout(s)
export function getTableOfContentsLayouts(data?: IRecipe): React.ReactNode[] {
  const pages: React.ReactNode[] = [];

  // layout number from recipe data (default to 1)
  const layoutNumber: number = 1;

  switch (layoutNumber) {
    case 1:
      // Call the layout and spread its returned pages (Array<ReactNode>)
      pages.push(...TableOfContentsLayoutOne());
      break;

    default:
      console.warn(`⚠️ Invalid table of contents layout: ${layoutNumber}`);
      pages.push(...TableOfContentsLayoutOne());
      break;
  }

  return pages;
}
