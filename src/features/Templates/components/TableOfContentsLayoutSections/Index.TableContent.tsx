import React from 'react';
import { PageLayoutFormat } from '../../../CookBook/types/book.types';
import TableOfContentsLayoutOne from './TableOfContentsLayoutOne';
import { ICookbook } from '../../../CookBook/types/cookbook.types';
import TableOfContentsLayoutTwo from './TableOfContentsLayoutTwo';
const sampleBooksData: ICookbook = require('../../../../shared/data/shared.updatedRecipeFoodieData.json');


// Dynamically return selected TOC layout(s)
export function getTableOfContentsLayouts(
  books: ICookbook | null,
  layoutNumber: string = 'toc-layout-one',
  dbPaperSize?: PageLayoutFormat // Optional paper size from database
): {tocLayoutsCount: number, tableOfContentsLayouts: React.ReactNode[], paperSize: PageLayoutFormat} {
  const pages: React.ReactNode[] = [];

  // Default paper sizes for each layout (used as fallback if dbPaperSize is not provided)
  let defaultPaperSize: PageLayoutFormat = PageLayoutFormat.A4;

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
      defaultPaperSize = PageLayoutFormat.A4;
      break;
    case 'toc-layout-two':
      // Call the layout and spread its returned pages (Array<ReactNode>)
      pages.push(...TableOfContentsLayoutTwo(recipeNames));
      defaultPaperSize = PageLayoutFormat.A3;
      break;

    default:
      console.warn(` Invalid table of contents layout: ${layoutNumber}`);
      pages.push(...TableOfContentsLayoutOne(recipeNames));
      defaultPaperSize = PageLayoutFormat.A4;
      break;
  }

  // Use database paper size if provided, otherwise fall back to default
  const paperSize = dbPaperSize || defaultPaperSize;

  return {tocLayoutsCount: 2, tableOfContentsLayouts: pages, paperSize};
}
