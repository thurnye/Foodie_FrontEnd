import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Box, CircularProgress, Alert, Typography, GlobalStyles } from '@mui/material';
import { bookService } from '../services/book.service';
import { IBook } from '../types/book.types';
import { getCoverPageLayouts } from '../../Templates/components/CoverPageLayoutSections/Index.CoverPage';
import { getIntroPageLayouts } from '../../Templates/components/IntroPageLayoutSections/Index.Intro';
import { getTableOfContentsLayouts } from '../../Templates/components/TableOfContentsLayoutSections/Index.TableContent';
import { getBackCoverPageLayouts } from '../../Templates/components/BackCoverLayoutSections/index.BackCover';
import { getFoodLayouts } from '../../Templates/components/FoodLayoutSections/FoodLayout';
import WeeklyPlannerLayout from '../../Templates/components/ExtraPageLayoutSelections/WeeklyPlannerLayout';
import BackCoverNoteLayout from '../../Templates/components/ExtraPageLayoutSelections/BackCoverNoteLayout';

/**
 * BookRenderer Component
 * This component is used by the backend (Playwright/Puppeteer) to render pages for PDF generation.
 * It receives bookId, pageId, and pageType from query params and renders the appropriate template.
 *
 * TODO: Replace placeholder rendering with actual template components when they're created
 */
const BookRenderer: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [book, setBook] = useState<IBook | null>(null);
  const [ready, setReady] = useState(false);

  const bookId = searchParams.get('bookId');
  const pageId = searchParams.get('pageId');
  const pageType = searchParams.get('pageType');

  useEffect(() => {
    const fetchBook = async () => {
      if (!bookId || !pageId || !pageType) {
        setError('Missing required parameters: bookId, pageId, or pageType');
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        // Use the unauthenticated endpoint for PDF rendering
        const bookData = await bookService.getBookForRendering(bookId);
        setBook(bookData);
        setLoading(false);

        // Small delay to ensure all assets are loaded
        setTimeout(() => {
          setReady(true);
        }, 500);
      } catch (err: any) {
        console.error('Error fetching book:', err);
        setError(err?.response?.data?.message || 'Failed to load book');
        setLoading(false);
      }
    };

    fetchBook();
  }, [bookId, pageId, pageType]);

  // Render loading state
  if (loading) {
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          width: '100vw',
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  // Render error state
  if (error || !book) {
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          width: '100vw',
          padding: 4,
        }}
      >
        <Alert severity="error">{error || 'Book not found'}</Alert>
      </Box>
    );
  }

  // Render the appropriate page based on pageType
  const renderPage = () => {
    switch (pageType) {
      case 'cover':
        if (!book.coverData) return <Alert severity="error">Cover data not found</Alert>;
        const coverLayout = book.coverData.layout || 'cover-layout-one';
        const { coverLayouts } = getCoverPageLayouts(coverLayout);
        return (
          <Box sx={{
            width: '100% !important',
            height: '100%',
            overflow: 'hidden',
            '& *': {
              maxWidth: '100% !important',
            }
          }}>
            {coverLayouts[0]}
          </Box>
        );

      case 'intro':
        if (!book.introData) return <Alert severity="error">Intro data not found</Alert>;
        const introLayout = book.introData.layout || 'intro-layout-one';

        // Create a mock cookbook object with author data for intro page
        // book.cookbook might be populated with author data at runtime
        const cookbookData = book.cookbook as any;
        const cookbookForIntro = {
          author: cookbookData?.author || {
            _id: '',
            firstName: 'Author',
            lastName: 'Name',
            email: '',
            avatar: '',
            bio: book.introData.customContent || 'Welcome to this cookbook!',
          },
        };

        const { introLayouts } = getIntroPageLayouts(
          cookbookForIntro as any,
          introLayout,
          book.introData.paperSize // Pass DB paper size
        );
        return (
          <Box sx={{
            width: '100% !important',
            height: '100%',
            overflow: 'hidden',
            '& *': {
              maxWidth: '100% !important',
            }
          }}>
            {introLayouts[0]}
          </Box>
        );

      case 'toc':
        if (!book.tocData) return <Alert severity="error">TOC data not found</Alert>;
        const tocLayout = book.tocData.layout || 'toc-layout-one';

        // Create a mock cookbook with books array for TOC
        // book.cookbook might be populated at runtime, but we only need the books array
        const cookbookForToc = {
          ...(typeof book.cookbook === 'object' ? book.cookbook : {}),
          books: book.recipe?.map((r: any) => ({
            _id: r.pageId,
            recipe: [r],
          })) || [],
        };

        const { tableOfContentsLayouts } = getTableOfContentsLayouts(
          cookbookForToc as any,
          tocLayout,
          book.tocData.paperSize // Pass DB paper size
        );
        return (
          <Box sx={{
            width: '100% !important',
            height: '100%',
            overflow: 'hidden',
            '& *': {
              maxWidth: '100% !important',
            }
          }}>
            {tableOfContentsLayouts[0]}
          </Box>
        );

      case 'back-cover':
        if (!book.backCoverData) return <Alert severity="error">Back cover data not found</Alert>;
        const backCoverLayout = book.backCoverData.layout || 'back-cover-layout-one';
        const { backCoverLayouts } = getBackCoverPageLayouts(backCoverLayout);
        return (
          <Box sx={{
            width: '100% !important',
            height: '100%',
            overflow: 'hidden',
            '& *': {
              maxWidth: '100% !important',
            }
          }}>
            {backCoverLayouts[0]}
          </Box>
        );

      case 'recipe': {
        const recipe = book.recipe?.find((r: any) => r.pageId === pageId || r._id === pageId);
        if (!recipe) return <Alert severity="error">Recipe not found</Alert>;

        // Create a mock book object with the recipe for the food layout
        const bookWithRecipe = {
          _id: book._id,
          recipe: [recipe],
          layout: recipe.layout || 'layout-one',
        };

        const foodLayouts = getFoodLayouts(bookWithRecipe as any);
        return (
          <Box sx={{
            width: '100% !important',
            height: '100%',
            overflow: 'hidden',
            '& *': {
              maxWidth: '100% !important',
            }
          }}>
            {foodLayouts[0]}
          </Box>
        );
      }

      case 'extra': {
        const extraPage = book.extraPageData?.find((p: any) => p.pageId === pageId);
        if (!extraPage) return <Alert severity="error">Extra page not found</Alert>;

        // Render appropriate template based on page type
        if (extraPage.pageType === 'blank') {
          return (
            <Box
              sx={{
                width: '100%',
                height: '297mm',
                backgroundColor: '#fff',
                display: 'flex',
                p: 2,
              }}
            >
              <Box sx={{ width: '50%', borderRight: '2px dotted #2d2d2d', p: 3 }}></Box>
              <Box sx={{ width: '50%', p: 3 }}></Box>
            </Box>
          );
        } else if (extraPage.templateType === 'weekly-planner') {
          return <WeeklyPlannerLayout />;
        } else if (extraPage.templateType === 'note-page') {
          return <BackCoverNoteLayout />;
        }

        return (
          <Box sx={{ p: 8, minHeight: '297mm' }}>
            <Typography variant="h2" sx={{ mb: 4, fontSize: '2.5rem', fontWeight: 'bold' }}>
              {extraPage.title}
            </Typography>
            <div dangerouslySetInnerHTML={{ __html: extraPage.content || '<p>This is a custom page.</p>' }} />
          </Box>
        );
      }

      default:
        return <Alert severity="error">Unknown page type: {pageType}</Alert>;
    }
  };

  // Determine paper size for the current page
  // A4: 210mm x 297mm (portrait), 297mm x 210mm (landscape)
  // A3: 297mm x 420mm (portrait), 420mm x 297mm (landscape)
  const getPaperSize = () => {
    if (!book) return { width: '210mm', height: '297mm' }; // Default A4 portrait

    switch (pageType) {
      case 'cover':
        // Cover pages are portrait
        return book.coverData?.paperSize === 'A3'
          ? { width: '297mm', height: '420mm' } // A3 portrait
          : { width: '210mm', height: '297mm' }; // A4 portrait
      case 'intro':
        // Intro pages are portrait
        return book.introData?.paperSize === 'A3'
          ? { width: '297mm', height: '420mm' } // A3 portrait
          : { width: '210mm', height: '297mm' }; // A4 portrait
      case 'toc':
        // TOC pages are portrait
        return book.tocData?.paperSize === 'A3'
          ? { width: '297mm', height: '420mm' } // A3 portrait
          : { width: '210mm', height: '297mm' }; // A4 portrait
      case 'back-cover':
        // Back cover pages are portrait
        return book.backCoverData?.paperSize === 'A3'
          ? { width: '297mm', height: '420mm' } // A3 portrait
          : { width: '210mm', height: '297mm' }; // A4 portrait
      case 'recipe': {
        // Recipe pages are landscape
        const recipe = book.recipe?.find((r: any) => r.pageId === pageId || r._id === pageId);
        return (recipe as any)?.paperSize === 'A3'
          ? { width: '420mm', height: '297mm' } // A3 landscape
          : { width: '297mm', height: '210mm' }; // A4 landscape
      }
      case 'extra': {
        // Extra pages are portrait
        const extraPage = book.extraPageData?.find((p: any) => p.pageId === pageId);
        return extraPage?.paperSize === 'A3'
          ? { width: '297mm', height: '420mm' } // A3 portrait
          : { width: '210mm', height: '297mm' }; // A4 portrait
      }
      default:
        return { width: '210mm', height: '297mm' };
    }
  };

  const paperSize = getPaperSize();

  return (
    <>
      {/* Global styles to hide all headers, navbars, and layout elements */}
      <GlobalStyles
        styles={{
          body: {
            margin: 0,
            padding: 0,
            overflow: 'hidden',
            width: '100%',
            height: '100%',
          },
          html: {
            margin: 0,
            padding: 0,
            width: '100%',
            height: '100%',
          },
          // Hide common header/navbar selectors
          'header, nav, .header, .navbar, .nav, .MuiAppBar-root, [role="banner"], [role="navigation"]': {
            display: 'none !important',
          },
          // Ensure only the content area is visible
          '#root': {
            display: 'flex',
            margin: 0,
            padding: 0,
            width: '100%',
            height: '100%',
          },
          // Hide any sidebars or additional layout elements
          'aside, .sidebar, .drawer, .MuiDrawer-root': {
            display: 'none !important',
          },
          // Force all containers to full width
          '.MuiContainer-root, .container, .wrapper': {
            maxWidth: '100% !important',
            width: '100% !important',
            margin: '0 !important',
            padding: '0 !important',
          },
          // Force all layout boxes to full width
          '.MuiBox-root': {
            width: '100%',
            maxWidth: '100%',
          },
          // Override any template-specific width constraints
          '*': {
            maxWidth: '100% !important',
          },
          // Specifically target common layout patterns
          'div, section, article': {
            maxWidth: '100% !important',
          },
        }}
      />

      <Box
        data-pdf-ready={ready ? 'true' : 'false'}
        sx={{
          width: paperSize.width,
          height: paperSize.height,
          minHeight: paperSize.height,
          maxHeight: paperSize.height,
          minWidth: paperSize.width,
          maxWidth: paperSize.width,
          backgroundColor: '#fff',
          margin: 0,
          padding: 0,
          color: '#000',
          overflow: 'hidden',
          position: 'relative',
          boxSizing: 'border-box',
          '& > *': {
            width: '100% !important',
            maxWidth: '100% !important',
            boxSizing: 'border-box',
          },
          '@media print': {
            margin: 0,
            padding: 0,
          },
        }}
      >
        {renderPage()}
      </Box>
    </>
  );
};

export default BookRenderer;
