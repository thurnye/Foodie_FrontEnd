import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  Box,
  Typography,
  FormControl,
  Select,
  MenuItem,
  Paper,
} from '@mui/material';
import { Settings } from '@mui/icons-material';
import { ICookbook, CookbookLayout } from '../types/cookbook.types';
import { bookService } from '../services/book.service';
import { getFoodLayouts } from '../../Templates/components/FoodLayoutSections/FoodLayout';
import { getTableOfContentsLayouts } from '../../Templates/components/TableOfContentsLayoutSections/Index.TableContent';
import { getIntroPageLayouts } from '../../Templates/components/IntroPageLayoutSections/Index.Intro';
import { getCoverPageLayouts } from '../../Templates/components/CoverPageLayoutSections/Index.CoverPage';
import { getBackCoverPageLayouts } from '../../Templates/components/BackCoverLayoutSections/index.BackCover';
import WeeklyPlannerLayout from '../../Templates/components/ExtraPageLayoutSelections/WeeklyPlannerLayout';
import BackCoverNoteLayout from '../../Templates/components/ExtraPageLayoutSelections/BackCoverNoteLayout';
import CookbookPageNavigation from './CookbookPageNavigation';
import { fetchCookbookById } from '../redux/cookbook.async.thunk';
import { AppDispatch } from '../../../app/stores/stores';

interface ExtraPage {
  id: string;
  title: string;
  type: 'blank' | 'template';
  templateType?: string;
  section?: 'front' | 'back';
}

interface CookbookContentDisplayProps {
  selectedSection: string | null;
  currentCookbook: ICookbook | null;
  currentPageNumber: number;
  totalPages: number;
  onPreviousPage: () => void;
  onNextPage: () => void;
  extraPages?: ExtraPage[];
}

const CookbookContentDisplay: React.FC<CookbookContentDisplayProps> = ({
  selectedSection,
  currentCookbook,
  currentPageNumber,
  totalPages,
  onPreviousPage,
  onNextPage,
  extraPages = [],
}) => {
  const dispatch = useDispatch<AppDispatch>();
  const { cookbookId, bookId } = useParams<{ cookbookId?: string; bookId?: string }>();

  // Determine if we're in BookEditor or CookbookEditor context
  const isBookEditorContext = !!bookId;

  const [bookLayout, setBookLayout] = useState<CookbookLayout>(
    CookbookLayout.LayoutOne
  );
  const [coverLayout, setCoverLayout] = useState<string>('cover-layout-one');
  const [introLayout, setIntroLayout] = useState<string>('intro-layout-one');
  const [tocLayout, setTocLayout] = useState<string>('toc-layout-one');
  const [backCoverLayout, setBackCoverLayout] = useState<string>(
    'back-cover-layout-one'
  );
  const [isSavingLayout, setIsSavingLayout] = useState(false);

  // Get the current book if a recipe is selected
  const currentBook = React.useMemo(() => {
    if (
      selectedSection &&
      selectedSection !== 'cover' &&
      selectedSection !== 'intro' &&
      selectedSection !== 'toc' &&
      selectedSection !== 'notes'
    ) {
      return currentCookbook?.books?.find((b) =>
        typeof b === 'string'
          ? b === selectedSection
          : b._id === selectedSection
      );
    }
    return null;
  }, [selectedSection, currentCookbook]);

  // Update local layout when book changes
  React.useEffect(() => {
    if (currentBook && typeof currentBook !== 'string') {
      // New schema: Find the recipe in the book's recipe array
      const recipePage = (currentBook as any).recipe?.find((r: any) => r.pageId === selectedSection);
      if (recipePage?.layout) {
        setBookLayout(recipePage.layout as CookbookLayout);
      } else if ((currentBook as any).layout) {
        // Old schema: Use book's layout field (backward compatibility)
        setBookLayout((currentBook as any).layout as CookbookLayout);
      }
    }
  }, [currentBook, selectedSection]);

  const handleLayoutChange = async (newLayout: CookbookLayout) => {
    if (!currentBook || typeof currentBook === 'string') {
      console.warn('⚠️ Cannot update layout: No valid book selected');
      return;
    }

    console.log('📐 Layout change requested:', {
      selectedSection,
      newLayout,
      currentBookId: currentBook._id,
      isBookEditor: isBookEditorContext,
    });

    setBookLayout(newLayout);
    setIsSavingLayout(true);

    try {
      // Check if this is a new schema book (has recipe array)
      if ((currentBook as any).recipe && (currentBook as any).recipe.length > 0) {
        // NEW SCHEMA: Find the SPECIFIC recipe page being viewed
        const recipePage = (currentBook as any).recipe.find(
          (r: any) => r.pageId === selectedSection
        );

        if (recipePage) {
          console.log('📤 [NEW SCHEMA] Saving layout to backend for specific recipe page...', {
            bookId: currentBook._id,
            pageId: recipePage.pageId,
            selectedSection,
            newLayout,
          });

          // Update the specific page's layout via book service
          const updatedBook = await bookService.updatePage(
            currentBook._id,
            recipePage.pageId,
            { layout: newLayout }
          );

          console.log('✅ Layout saved successfully to database', {
            returnedBook: updatedBook,
            updatedRecipeLayout: (updatedBook as any)?.recipe?.find((r: any) => r.pageId === recipePage.pageId)?.layout,
          });

          if (isBookEditorContext) {
            // In BookEditor context: trigger book refetch event
            window.dispatchEvent(new CustomEvent('bookUpdated'));
            console.log('✅ Book update event dispatched for refetch');
          } else if (cookbookId) {
            // In CookbookEditor context: refetch cookbook
            await dispatch(fetchCookbookById(cookbookId));
            console.log('✅ Cookbook data refetched, layout change persisted');
          }
        } else {
          console.warn('⚠️ No recipe page found matching selectedSection:', selectedSection);
          console.warn('Available recipe pages:',
            (currentBook as any).recipe?.map((r: any) => ({ pageId: r.pageId, layout: r.layout })) || []
          );
        }
      } else {
        // OLD SCHEMA: Update the book's layout field directly
        console.log('📤 [OLD SCHEMA] Saving layout to backend...', {
          bookId: currentBook._id,
          newLayout,
        });

        // Update the book's layout field via book service
        await bookService.updateBook(currentBook._id, {
          layout: newLayout,
        });

        console.log('✅ Layout saved successfully, refetching data...');

        if (isBookEditorContext) {
          // In BookEditor context: trigger book refetch event
          window.dispatchEvent(new CustomEvent('bookUpdated'));
          console.log('✅ Book update event dispatched');
        } else if (cookbookId) {
          // In CookbookEditor context: refetch cookbook
          await dispatch(fetchCookbookById(cookbookId));
          console.log('✅ Cookbook data refetched, layout change persisted');
        }
      }
    } catch (error) {
      console.error('❌ Failed to update book layout:', error);

      // Revert on error
      if (currentBook && typeof currentBook !== 'string') {
        let originalLayout = CookbookLayout.LayoutOne;

        if ((currentBook as any).recipe && (currentBook as any).recipe.length > 0) {
          // New schema
          const recipePage = (currentBook as any).recipe.find((r: any) => r.pageId === selectedSection);
          originalLayout = (recipePage?.layout as CookbookLayout) || CookbookLayout.LayoutOne;
        } else {
          // Old schema
          originalLayout = ((currentBook as any).layout as CookbookLayout) || CookbookLayout.LayoutOne;
        }

        console.log('↩️ Reverting to original layout:', originalLayout);
        setBookLayout(originalLayout);
      }
    } finally {
      setIsSavingLayout(false);
    }
  };

  const isRecipeSection = !!(
    selectedSection &&
    selectedSection !== 'cover' &&
    selectedSection !== 'intro' &&
    selectedSection !== 'toc' &&
    selectedSection !== 'notes' &&
    currentBook
  );

  // Debug logging for recipe section detection
  React.useEffect(() => {
    console.log('🔍 Recipe section detection:', {
      selectedSection,
      isRecipeSection,
      currentBook: !!currentBook,
      currentBookType: typeof currentBook,
      currentBookId: currentBook && typeof currentBook !== 'string' ? currentBook._id : null,
      availableBooks: currentCookbook?.books?.map((b: any) =>
        typeof b === 'string' ? b : b._id
      ),
    });
  }, [selectedSection, isRecipeSection, currentBook, currentCookbook]);

  // Get food layouts based on the current book with the updated layout state
  // We need to merge the current book data with the updated layout to show changes in real-time
  const bookWithUpdatedLayout = React.useMemo(() => {
    if (currentBook && typeof currentBook !== 'string') {
      if ((currentBook as any).recipe && (currentBook as any).recipe.length > 0) {
        // New schema: Update the recipe's layout in the recipe array
        const updatedRecipes = (currentBook as any).recipe.map((r: any) =>
          r.pageId === selectedSection
            ? { ...r, layout: bookLayout }
            : r
        );

        return {
          ...currentBook,
          recipe: updatedRecipes,
        };
      } else {
        // Old schema: Update layout field directly (backward compatibility)
        return {
          ...currentBook,
          layout: bookLayout,
        } as any;
      }
    }
    return null;
  }, [currentBook, bookLayout, selectedSection]);

  // Helper to convert number to word (1 -> one, 2 -> two, etc.)
  const numberToWord = (num: number): string => {
    const words = [
      'one',
      'two',
      'three',
      'four',
      'five',
      'six',
      'seven',
      'eight',
      'nine',
      'ten',
    ];
    return words[num - 1] || num.toString();
  };

  // Create dynamic layout options based on section and count
  const createLayoutOptions = (sectionType: string, count: number) => {
    const options = [];
    for (let i = 1; i <= count; i++) {
      const layoutValue = `${sectionType}-layout-${numberToWord(i)}`;
      options.push(
        <MenuItem key={layoutValue} value={layoutValue}>
          Layout {i}
        </MenuItem>
      );
    }
    return options;
  };

  // --- Cover Layout Pages ---
  const { coverLayoutsCount, coverLayouts } = getCoverPageLayouts(coverLayout);

  // --- Welcome Layout Pages ---
  const { introLayoutsCount, introLayouts } = getIntroPageLayouts(
    currentCookbook,
    introLayout
  );

  // Table of Contents layouts
  const { tocLayoutsCount, tableOfContentsLayouts } = getTableOfContentsLayouts(
    currentCookbook,
    tocLayout
  );

  // --- Back Cover Layout Pages ---
  const { backCoverLayoutsCount, backCoverLayouts } =
    getBackCoverPageLayouts(backCoverLayout);

  // Food layouts
  const foodLayouts = getFoodLayouts(bookWithUpdatedLayout);

  return (
    <Box
      sx={{
        flex: 1,
        overflow: 'auto',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderBottom: '1px solid #2d2d2d',
          backgroundColor: '#252525',
        }}
      >
        <Box sx={{flexGrow:1}}>
          {/* Layout Selector Toolbar for Cover Page */}
          {selectedSection === 'cover' && (
            <Box
              sx={{
                p: 2,
                display: 'flex',
                alignItems: 'center',
                gap: 2,
              }}
            >
              <Settings sx={{ color: '#9ca3af', fontSize: 20 }} />
              <Typography variant='body2' sx={{ color: '#9ca3af' }}>
                Cover Layout:
              </Typography>
              <FormControl size='small' sx={{ minWidth: 200 }}>
                <Select
                  value={coverLayout}
                  onChange={(e) => setCoverLayout(e.target.value)}
                  sx={{
                    backgroundColor: '#1e1e1e',
                    color: '#e0e0e0',
                    '& fieldset': { borderColor: '#3a3a3a' },
                    '& .MuiSelect-select': { py: 1 },
                  }}
                >
                  {createLayoutOptions('cover', coverLayoutsCount)}
                </Select>
              </FormControl>
            </Box>
          )}

          {/* Layout Selector Toolbar for Intro Page */}
          {selectedSection === 'intro' && (
            <Box
              sx={{
                p: 2,
                display: 'flex',
                alignItems: 'center',
                gap: 2,
              }}
            >
              <Settings sx={{ color: '#9ca3af', fontSize: 20 }} />
              <Typography variant='body2' sx={{ color: '#9ca3af' }}>
                Intro Layout:
              </Typography>
              <FormControl size='small' sx={{ minWidth: 200 }}>
                <Select
                  value={introLayout}
                  onChange={(e) => setIntroLayout(e.target.value)}
                  sx={{
                    backgroundColor: '#1e1e1e',
                    color: '#e0e0e0',
                    '& fieldset': { borderColor: '#3a3a3a' },
                    '& .MuiSelect-select': { py: 1 },
                  }}
                >
                  {createLayoutOptions('intro', introLayoutsCount)}
                </Select>
              </FormControl>
            </Box>
          )}

          {/* Layout Selector Toolbar for TOC */}
          {selectedSection === 'toc' && (
            <Box
              sx={{
                p: 2,
                display: 'flex',
                alignItems: 'center',
                gap: 2,
              }}
            >
              <Settings sx={{ color: '#9ca3af', fontSize: 20 }} />
              <Typography variant='body2' sx={{ color: '#9ca3af' }}>
                TOC Layout:
              </Typography>
              <FormControl size='small' sx={{ minWidth: 200 }}>
                <Select
                  value={tocLayout}
                  onChange={(e) => setTocLayout(e.target.value)}
                  sx={{
                    backgroundColor: '#1e1e1e',
                    color: '#e0e0e0',
                    '& fieldset': { borderColor: '#3a3a3a' },
                    '& .MuiSelect-select': { py: 1 },
                  }}
                >
                  {createLayoutOptions('toc', tocLayoutsCount)}
                </Select>
              </FormControl>
            </Box>
          )}

          {/* Layout Selector Toolbar for Recipe Pages */}
          {isRecipeSection && (
            <Box
              sx={{
                p: 2,
                display: 'flex',
                alignItems: 'center',
                gap: 2,
              }}
            >
              <Settings sx={{ color: '#9ca3af', fontSize: 20 }} />
              <Typography variant='body2' sx={{ color: '#9ca3af' }}>
                Page Layout:
              </Typography>
              <FormControl size='small' sx={{ minWidth: 200 }}>
                <Select
                  value={bookLayout}
                  onChange={(e) => {
                    console.log('🎛️ Layout dropdown changed:', {
                      oldValue: bookLayout,
                      newValue: e.target.value,
                      selectedSection,
                      currentBook: !!currentBook,
                    });
                    handleLayoutChange(e.target.value as CookbookLayout);
                  }}
                  disabled={isSavingLayout}
                  sx={{
                    backgroundColor: '#1e1e1e',
                    color: '#e0e0e0',
                    '& fieldset': { borderColor: '#3a3a3a' },
                    '& .MuiSelect-select': { py: 1 },
                  }}
                >
                  {Object.values(CookbookLayout).map((layout) => (
                    <MenuItem key={layout} value={layout}>
                      {layout
                        .split('-')
                        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
                        .join(' ')}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              {isSavingLayout && (
                <Typography variant='caption' sx={{ color: '#9ca3af' }}>
                  Saving...
                </Typography>
              )}
            </Box>
          )}

          {/* Layout Selector Toolbar for Back Cover */}
          {selectedSection === 'back-cover' && (
            <Box
              sx={{
                p: 2,
                display: 'flex',
                alignItems: 'center',
                gap: 2,
              }}
            >
              <Settings sx={{ color: '#9ca3af', fontSize: 20 }} />
              <Typography variant='body2' sx={{ color: '#9ca3af' }}>
                Back Cover Layout:
              </Typography>
              <FormControl size='small' sx={{ minWidth: 200 }}>
                <Select
                  value={backCoverLayout}
                  onChange={(e) => setBackCoverLayout(e.target.value)}
                  sx={{
                    backgroundColor: '#1e1e1e',
                    color: '#e0e0e0',
                    '& fieldset': { borderColor: '#3a3a3a' },
                    '& .MuiSelect-select': { py: 1 },
                  }}
                >
                  {createLayoutOptions('back-cover', backCoverLayoutsCount)}
                </Select>
              </FormControl>
            </Box>
          )}
        </Box>

        <CookbookPageNavigation
          currentPageNumber={currentPageNumber}
          totalPages={totalPages}
          onPreviousPage={onPreviousPage}
          onNextPage={onNextPage}
        />
      </Box>

      {/* Content Display */}
      <Box
        sx={{
          flex: 1,
          overflow: 'auto',
          p: 4,
        }}
      >
        {/* CoverPage */}
        {selectedSection === 'cover' && (
          <Box>
            {coverLayouts.map((layout, index) => (
              <Paper
                key={`welcome-${index + 1}`}
                sx={{
                  backgroundColor: '#fff',
                  width: '100%',
                  minWidth: 793,
                  maxWidth: 794,
                  maxHeight: 1123,
                  m: 'auto',
                  mb: 4,
                  p: 0,
                }}
              >
                {layout}
              </Paper>
            ))}
          </Box>
        )}

        {/* Introduction */}
        {selectedSection === 'intro' && (
          <Box>
            {introLayouts.map((layout, index) => (
              <Paper
                key={`welcome-${index + 1}`}
                sx={{
                  backgroundColor: '#fff',
                  width: '100%',
                  minWidth: 793,
                  maxWidth: 794,
                  maxHeight: 1123,
                  m: 'auto',
                  mb: 4,
                  p: 0,
                }}
              >
                {layout}
              </Paper>
            ))}
          </Box>
        )}

        {/* Table of Contents */}
        {selectedSection === 'toc' && (
          <Box>
            {tableOfContentsLayouts.map((layout, index) => (
              <Paper
                key={`toc-layout-${index + 1}`}
                sx={{
                  backgroundColor: '#fff',
                  width: '100%',
                  minWidth: 793,
                  maxWidth: 794,
                  maxHeight: 1123,
                  m: 'auto',
                  mb: 4,
                  p: 0,
                }}
              >
                {layout}
              </Paper>
            ))}
          </Box>
        )}

        {/* Recipe Layouts */}
        {isRecipeSection && (
          <Box>
            {foodLayouts.map((layout, index) => (
              <Paper
                key={`food-layout-${index + 1}`}
                sx={{
                  backgroundColor: '#fff',
                  width: '100%',
                  minWidth: 1586,
                  maxWidth: 1587,
                  maxHeight: 1123,
                  m: 'auto',
                  p: 0,
                }}
              >
                {layout}
              </Paper>
            ))}
          </Box>
        )}

        {/* Back Cover */}
        {selectedSection === 'back-cover' && (
          <Box>
            {backCoverLayouts.map((layout, index) => (
              <Paper
                key={`back-cover-${index + 1}`}
                sx={{
                  backgroundColor: '#fff',
                  width: '100%',
                  minWidth: 793,
                  maxWidth: 794,
                  maxHeight: 1123,
                  m: 'auto',
                  mb: 4,
                  p: 0,
                }}
              >
                {layout}
              </Paper>
            ))}
          </Box>
        )}

        {/* Extra Pages */}
        {extraPages.map((page) => {
          if (selectedSection === page.id) {
            return (
              <Box key={page.id}>
                <Paper
                  sx={{
                    backgroundColor: '#fff',
                  width: '100%',
                  minWidth: 1586,
                  maxWidth: 1587,
                  maxHeight: 1123,
                  m: 'auto',
                  p: 0,
                  }}
                >
                  {page.type === 'blank' ? (
                    // Blank white page
                    <Box
                      sx={{
                        width: '100%',
                        height: 1123,
                        backgroundColor: '#fff',
                        display: 'flex',
                        p:2
                      }}
                    >
                      <Box sx={{width: 798, borderRight:'2px dotted #2d2d2d', p: 3}}></Box>
                      <Box sx={{ p: 3}} ></Box>
                    </Box>
                  ) : page.templateType === 'weekly-planner' ? (
                    <WeeklyPlannerLayout />
                  ) : page.templateType === 'note-page' ? (
                    <BackCoverNoteLayout />
                  ) : null}
                </Paper>
              </Box>
            );
          }
          return null;
        })}
      </Box>
    </Box>
  );
};

export default CookbookContentDisplay;
