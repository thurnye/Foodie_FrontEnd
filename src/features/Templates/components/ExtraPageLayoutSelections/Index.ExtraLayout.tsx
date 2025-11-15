import React from 'react';
import BackCoverNoteLayout from './BackCoverNoteLayout';
import WeeklyPlannerLayout from './WeeklyPlannerLayout';


// Function to return selected layout(s) based on layout number
export function getExtraPageLayouts(): React.ReactNode[] {
  const pages: React.ReactNode[] = [];

  // layout number from recipe data (default to 1)
  const layoutNumber: number = 1;

  switch (layoutNumber) {
    case 1:
      pages.push(<WeeklyPlannerLayout key='food-layout-weekly-planner' />);
      // pages.push(<BackCoverNoteLayout key='food-layout-note' />);
      break;
    case 2:
      // pages.push(<WeeklyPlannerLayout key='food-layout-weekly-planner' />);
      pages.push(<BackCoverNoteLayout key='food-layout-note' />);
      break;
    default:
      console.warn(`Invalid layout number: ${layoutNumber}`);
      pages.push(<WeeklyPlannerLayout key='food-layout-weekly-planner' />);
      pages.push(<BackCoverNoteLayout key='food-layout-note' />);
      break;
  }

  return pages;
}
