import React from 'react';
import { IBook } from '../../../CookBook/types/book.types';
import TableOfContentsLayoutOne from './TableOfContentsLayoutOne';
import { ICookbook } from '../../../CookBook/types/cookbook.types';
const sampleBooksData: ICookbook = require('../../../../shared/data/shared.updatedRecipeFoodieData.json');


// Dynamically return selected TOC layout(s)
export function getTableOfContentsLayouts(
  books: ICookbook | null,
  layoutNumber: string = 'toc-layout-one'
): {tocLayoutsCount: number, tableOfContentsLayouts: React.ReactNode[]} {
  const pages: React.ReactNode[] = [];

  // Use sample data as fallback if no books provided
  const booksToUse = !books ? sampleBooksData : books;
  console.log('booksToUse for TOC', booksToUse);

  // Extract recipe names from books
  const recipeNames = booksToUse.books
    .map((book) => {
      if (typeof book !== 'string' && book.recipe) {
        return book.recipe.basicInfo.recipeName;
      }
      return null;
    })
    .filter((name): name is string => name !== null);

  switch (layoutNumber) {
    case 'toc-layout-one':
      // Call the layout and spread its returned pages (Array<ReactNode>)
      pages.push(...TableOfContentsLayoutOne(recipeNames));
      break;

    default:
      console.warn(` Invalid table of contents layout: ${layoutNumber}`);
      pages.push(...TableOfContentsLayoutOne(recipeNames));
      break;
  }

  return {tocLayoutsCount: 1, tableOfContentsLayouts: pages};
}
