import React, { useState } from 'react';
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
import { apiClient } from '../../../shared/services/apiClient.service';
import { getFoodLayouts } from '../../Templates/components/FoodLayoutSections/FoodLayout';
import { getTableOfContentsLayouts } from '../../Templates/components/TableOfContentsLayoutSections/Index.TableContent';
import { getIntroPageLayouts } from '../../Templates/components/IntroPageLayoutSections/Index.Intro';
import { getCoverPageLayouts } from '../../Templates/components/CoverPageLayoutSections/Index.CoverPage';
import { getBackCoverPageLayouts } from '../../Templates/components/BackCoverLayoutSections/index.BackCover';

interface CookbookContentDisplayProps {
  selectedSection: string | null;
  currentCookbook: ICookbook | null;
}

const CookbookContentDisplay: React.FC<CookbookContentDisplayProps> = ({
  selectedSection,
  currentCookbook,
}) => {
  const [bookLayout, setBookLayout] = useState<CookbookLayout>(
    CookbookLayout.LayoutOne
  );
  const [coverLayout, setCoverLayout] = useState<string>('cover-layout-one');
  const [introLayout, setIntroLayout] = useState<string>('intro-layout-one');
  const [tocLayout, setTocLayout] = useState<string>('toc-layout-one');
  const [backCoverLayout, setBackCoverLayout] = useState<string>('back-cover-layout-one');
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
    if (currentBook) {
      setBookLayout(currentBook.layout as CookbookLayout);
    }
  }, [currentBook]);

  const handleLayoutChange = async (newLayout: CookbookLayout) => {
    if (!currentBook || typeof currentBook === 'string') return;

    setBookLayout(newLayout);
    setIsSavingLayout(true);

    try {
      await apiClient.put(`/books/${currentBook._id}`, {
        layout: newLayout,
      });
      console.log('Book layout updated successfully');
    } catch (error) {
      console.error('Failed to update book layout:', error);
      // Revert on error
      if (currentBook && typeof currentBook !== 'string') {
        setBookLayout(
          (currentBook.layout as CookbookLayout) || CookbookLayout.LayoutOne
        );
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

  // Get food layouts based on the current book with the updated layout state
  // We need to merge the current book data with the updated layout to show changes in real-time
  const bookWithUpdatedLayout = React.useMemo(() => {
    if (currentBook && typeof currentBook !== 'string') {
      return {
        ...currentBook,
        layout: bookLayout,
      };
    }
    return null;
  }, [currentBook, bookLayout]);

  // Helper to convert number to word (1 -> one, 2 -> two, etc.)
  const numberToWord = (num: number): string => {
    const words = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
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
  const {coverLayoutsCount, coverLayouts} = getCoverPageLayouts(coverLayout);

  // --- Welcome Layout Pages ---
  const {introLayoutsCount, introLayouts} = getIntroPageLayouts(currentCookbook, introLayout);

  // Table of Contents layouts
  const {tocLayoutsCount, tableOfContentsLayouts} = getTableOfContentsLayouts(currentCookbook, tocLayout);

  // --- Back Cover Layout Pages ---
  const {backCoverLayoutsCount, backCoverLayouts} = getBackCoverPageLayouts(backCoverLayout);

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
      {/* Layout Selector Toolbar for Cover Page */}
      {selectedSection === 'cover' && (
        <Box
          sx={{
            p: 2,
            borderBottom: '1px solid #2d2d2d',
            backgroundColor: '#252525',
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
            borderBottom: '1px solid #2d2d2d',
            backgroundColor: '#252525',
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
            borderBottom: '1px solid #2d2d2d',
            backgroundColor: '#252525',
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
            borderBottom: '1px solid #2d2d2d',
            backgroundColor: '#252525',
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
              onChange={(e) =>
                handleLayoutChange(e.target.value as CookbookLayout)
              }
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
            borderBottom: '1px solid #2d2d2d',
            backgroundColor: '#252525',
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

      </Box>
    </Box>
  );
};

export default CookbookContentDisplay;
