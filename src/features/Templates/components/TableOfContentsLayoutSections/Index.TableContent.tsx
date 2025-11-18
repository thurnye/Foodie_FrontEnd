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

  // Extract recipe names from books - support new schema with recipe array
  const recipeNames = booksToUse.books
    .map((book) => {
      if (typeof book !== 'string') {
        // New schema: recipe array contains recipe pages
        const bookData = book as any;
        if (bookData.recipe && Array.isArray(bookData.recipe) && bookData.recipe.length > 0) {
          const recipePage = bookData.recipe[0];
          if (recipePage?.basicInfo?.recipeName) {
            return recipePage.basicInfo.recipeName;
          }
        }
        // Old schema fallback
        if (bookData.recipe?.basicInfo?.recipeName) {
          return bookData.recipe.basicInfo.recipeName;
        }
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
