import { useEffect, useState } from 'react';
import { ICookbook } from '../types/cookbook.types';

interface UseCookbookNavigationProps {
  currentCookbook: ICookbook | null;
  selectedSection: string | null;
  setSelectedSection: (section: string | null) => void;
}

export const useCookbookNavigation = ({
  currentCookbook,
  selectedSection,
  setSelectedSection,
}: UseCookbookNavigationProps) => {
  const [currentPageNumber, setCurrentPageNumber] = useState(1);

  // Calculate total pages and current page number
  const calculatePageInfo = () => {
    if (!currentCookbook) return { totalPages: 1, currentPage: 1 };

    // Page structure:
    // 1. Cover
    // 2. Introduction
    // 3. Table of Contents
    // 4-N. Recipes (one page per recipe)
    // N+1. Notes

    const recipeCount = currentCookbook.books?.length || 0;
    const totalPages = 3 + recipeCount + 1; // cover + intro + toc + recipes + notes

    let currentPage = 1;
    if (selectedSection === 'cover') {
      currentPage = 1;
    } else if (selectedSection === 'intro') {
      currentPage = 2;
    } else if (selectedSection === 'toc') {
      currentPage = 3;
    } else if (selectedSection === 'notes') {
      currentPage = totalPages;
    } else if (selectedSection && selectedSection !== 'toc') {
      // It's a recipe - find its index
      const recipeIndex = currentCookbook.books.findIndex((r) =>
        typeof r === 'string' ? r === selectedSection : r._id === selectedSection
      );
      if (recipeIndex !== -1) {
        currentPage = 4 + recipeIndex; // cover(1) + intro(2) + toc(3) + recipe position
      }
    }

    return { totalPages, currentPage };
  };

  // Update page number when section changes
  useEffect(() => {
    const { currentPage } = calculatePageInfo();
    setCurrentPageNumber(currentPage);
  }, [selectedSection, currentCookbook]);

  // Navigate to a specific page number
  const navigateToPage = (pageNumber: number) => {
    if (!currentCookbook) return;

    if (pageNumber === 1) {
      setSelectedSection('cover');
    } else if (pageNumber === 2) {
      setSelectedSection('intro');
    } else if (pageNumber === 3) {
      setSelectedSection('toc');
    } else if (pageNumber === calculatePageInfo().totalPages) {
      setSelectedSection('notes');
    } else {
      // It's a recipe page
      const recipeIndex = pageNumber - 4; // Subtract cover(1), intro(2), toc(3)
      if (recipeIndex >= 0 && recipeIndex < currentCookbook.books.length) {
        const recipe = currentCookbook.books[recipeIndex];
        const recipeId = typeof recipe === 'string' ? recipe : recipe._id;
        setSelectedSection(recipeId);
      }
    }
  };

  // Navigate to previous page
  const handlePreviousPage = () => {
    if (!currentCookbook) return;

    const { currentPage } = calculatePageInfo();
    if (currentPage <= 1) return;

    const targetPage = currentPage - 1;
    navigateToPage(targetPage);
  };

  // Navigate to next page
  const handleNextPage = () => {
    if (!currentCookbook) return;

    const { currentPage, totalPages } = calculatePageInfo();
    if (currentPage >= totalPages) return;

    const targetPage = currentPage + 1;
    navigateToPage(targetPage);
  };

  const { totalPages } = calculatePageInfo();

  return {
    currentPageNumber,
    totalPages,
    handlePreviousPage,
    handleNextPage,
    navigateToPage,
  };
};
