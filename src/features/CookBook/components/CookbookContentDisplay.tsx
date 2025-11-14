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
      setBookLayout(CookbookLayout.LayoutOne);
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

  const foodLayouts = getFoodLayouts(bookWithUpdatedLayout);
  console.log('foodLayouts', foodLayouts.length);

  // Get TOC layouts when viewing the table of contents section
  const tableOfContentsLayouts = getTableOfContentsLayouts(currentCookbook);
  console.log('tableOfContentsLayouts', tableOfContentsLayouts.length);

  return (
    <Box
      sx={{
        flex: 1,
        overflow: 'auto',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Layout Selector Toolbar (only show for recipe pages) */}
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

      {/* Content Display */}
      <Box
        sx={{
          flex: 1,
          overflow: 'auto',
          p: 4,
        }}
      >
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
          <Box >
            {foodLayouts.map((layout, index) => (
              <Paper key={`food-layout-${index + 1}`} sx={{
                  backgroundColor: '#fff',
                  width: '100%',
                  minWidth: 1586,
                  maxWidth: 1587,
                  maxHeight: 1123,
                  m: 'auto',
                  p: 0,
                }}>
                {layout}
              </Paper>
            ))}
          </Box>
        )}

        {/* Default Content for non-TOC and non-Recipe sections */}
        {!isRecipeSection && selectedSection !== 'toc' && (
          <Box sx={{ textAlign: 'center', mt: 8 }}>
            <Typography variant='h4' sx={{ color: '#e0e0e0', mb: 2 }}>
              {selectedSection === 'cover' && 'Cover Page'}
              {selectedSection === 'intro' && 'Introduction'}
              {selectedSection === 'notes' && 'Notes'}
              {!selectedSection && 'Select a section'}
            </Typography>
            <Typography variant='body1' sx={{ color: '#9ca3af' }}>
              {selectedSection === 'cover' &&
                'Cover page content will appear here'}
              {selectedSection === 'intro' &&
                'Introduction content will appear here'}
              {selectedSection === 'notes' &&
                'Additional notes will appear here'}
              {!selectedSection &&
                'Choose a section from the sidebar to view its content'}
            </Typography>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default CookbookContentDisplay;
