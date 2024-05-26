import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';

export default function ProgressiveStepper({currentPage, totalPage, setPageNumber}) {
  const theme = useTheme();

  const handleNext = () => {
    setPageNumber((prevActiveStep) => prevActiveStep + 1);

  };

  const handleBack = () => {
    setPageNumber((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <MobileStepper
      variant="progress"
      steps={totalPage + 1}
      position="static"
      activeStep={currentPage}
      sx={{ flexGrow: 1 }}
      nextButton={
        <Button size="small" onClick={handleNext} disabled={currentPage === totalPage}>
          Next
          {theme.direction === 'rtl' ? (
            <KeyboardArrowLeft />
          ) : (
            <KeyboardArrowRight />
          )}
        </Button>
      }
      backButton={
        <Button size="small" onClick={handleBack} disabled={currentPage === 1}>
          {theme.direction === 'rtl' ? (
            <KeyboardArrowRight />
          ) : (
            <KeyboardArrowLeft />
          )}
          Back
        </Button>
      }
    />
  );
}
