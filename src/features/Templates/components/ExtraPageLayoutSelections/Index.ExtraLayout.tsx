import React from 'react';
import { Box } from '@mui/material';
import BackCoverNoteLayout from './BackCoverNoteLayout';
import WeeklyPlannerLayout from './WeeklyPlannerLayout';
import { PageLayoutFormat } from '../../../CookBook/types/book.types';

// Function to return selected extra page layout based on template type
export function getExtraPageLayout(
  pageType: 'blank' | 'template',
  templateType?: 'weekly-planner' | 'note-page',
  dbPaperSize?: PageLayoutFormat // Optional paper size from database
): { layout: React.ReactNode; paperSize: PageLayoutFormat } {
  // Default paper sizes for each template type
  let defaultPaperSize: PageLayoutFormat = PageLayoutFormat.A4;
  let layout: React.ReactNode = null;

  if (pageType === 'blank') {
    // Blank pages are A4 portrait by default
    defaultPaperSize = PageLayoutFormat.A4;
    layout = (
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
  } else if (templateType === 'weekly-planner') {
    // Weekly planner is A3 landscape by default
    defaultPaperSize = PageLayoutFormat.A3;
    layout = <WeeklyPlannerLayout key='weekly-planner' />;
  } else if (templateType === 'note-page') {
    // Note page is A4 portrait by default
    defaultPaperSize = PageLayoutFormat.A4;
    layout = <BackCoverNoteLayout key='note-page' />;
  } else {
    // Default fallback
    defaultPaperSize = PageLayoutFormat.A4;
    layout = (
      <Box sx={{ p: 8, minHeight: '297mm' }}>
        <p>Unknown extra page type</p>
      </Box>
    );
  }

  // Use database paper size if provided, otherwise fall back to default
  const paperSize = dbPaperSize || defaultPaperSize;

  return { layout, paperSize };
}
