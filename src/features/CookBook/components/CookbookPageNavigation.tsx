import React from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';

interface CookbookPageNavigationProps {
  currentPageNumber: number;
  totalPages: number;
  onPreviousPage: () => void;
  onNextPage: () => void;
}

const CookbookPageNavigation: React.FC<CookbookPageNavigationProps> = ({
  currentPageNumber,
  totalPages,
  onPreviousPage,
  onNextPage,
}) => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        px: { xs: 1, sm: 2, md: 3 },
        py: { xs: 1, sm: 1.5 },
        backgroundColor: '#252525',
        borderTop: '1px solid #2d2d2d',
      }}
    >
      <IconButton
        onClick={onPreviousPage}
        disabled={currentPageNumber <= 1}
        sx={{
          color: '#e0e0e0',
          '&.Mui-disabled': { color: '#6b7280' },
          p: { xs: 0.5, sm: 1 },
        }}
      >
        <ChevronLeft />
      </IconButton>

      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: { xs: 1, sm: 2 },
        }}
      >
        <Typography
          variant='body2'
          sx={{
            color: '#9ca3af',
            fontSize: { xs: '0.75rem', sm: '0.875rem' },
            display: { xs: 'none', sm: 'block' },
          }}
        >
          Page
        </Typography>
        <Typography
          variant='h6'
          sx={{
            color: '#e0e0e0',
            fontWeight: 600,
            fontSize: { xs: '0.875rem', sm: '1rem' },
          }}
        >
          {currentPageNumber}
        </Typography>
        <Typography
          variant='body2'
          sx={{
            color: '#6b7280',
            fontSize: { xs: '0.75rem', sm: '0.875rem' },
          }}
        >
          of {totalPages}
        </Typography>
      </Box>

      <IconButton
        onClick={onNextPage}
        disabled={currentPageNumber >= totalPages}
        sx={{
          color: '#e0e0e0',
          '&.Mui-disabled': { color: '#6b7280' },
          p: { xs: 0.5, sm: 1 },
        }}
      >
        <ChevronRight />
      </IconButton>
    </Box>
  );
};

export default CookbookPageNavigation;
