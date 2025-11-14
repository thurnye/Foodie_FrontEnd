import React from 'react';
import { Box, Typography } from '@mui/material';
import { ICookbook } from '../types/cookbook.types';

interface CookbookContentDisplayProps {
  selectedSection: string | null;
  currentCookbook: ICookbook | null;
}

const CookbookContentDisplay: React.FC<CookbookContentDisplayProps> = ({
  selectedSection,
  currentCookbook,
}) => {
  const getContentTitle = () => {
    if (selectedSection === 'cover') return 'Cover Page';
    if (selectedSection === 'intro') return 'Introduction';
    if (selectedSection === 'toc') return 'Table of Contents';
    if (selectedSection === 'notes') return 'Notes';

    if (
      selectedSection &&
      selectedSection !== 'cover' &&
      selectedSection !== 'intro' &&
      selectedSection !== 'toc' &&
      selectedSection !== 'notes'
    ) {
      const book = currentCookbook?.books?.find((b) =>
        typeof b === 'string'
          ? b === selectedSection
          : b._id === selectedSection
      );
      return typeof book === 'string'
        ? 'Recipe'
        : book?.recipe?.basicInfo?.recipeName || 'Recipe';
    }

    return 'Select a section';
  };

  const getContentDescription = () => {
    if (selectedSection === 'cover') return 'Cover page section';
    if (selectedSection === 'intro') return 'Introduction section';
    if (selectedSection === 'toc') return 'Table of contents';
    if (selectedSection === 'notes') return 'Additional notes section';
    if (
      selectedSection &&
      selectedSection !== 'cover' &&
      selectedSection !== 'intro' &&
      selectedSection !== 'toc' &&
      selectedSection !== 'notes'
    ) {
      return 'Recipe details';
    }
    return 'Choose a section from the sidebar to view its content';
  };

  return (
    <Box
      sx={{
        flex: 1,
        overflow: 'auto',
        p: 4,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Box sx={{ textAlign: 'center' }}>
        <Typography
          variant='h3'
          sx={{ color: '#e0e0e0', fontWeight: 600, mb: 2 }}
        >
          {getContentTitle()}
        </Typography>
        <Typography variant='body1' sx={{ color: '#9ca3af' }}>
          {getContentDescription()}
        </Typography>
      </Box>
    </Box>
  );
};

export default CookbookContentDisplay;
