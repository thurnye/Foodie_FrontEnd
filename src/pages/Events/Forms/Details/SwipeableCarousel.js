import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { MdOutlineFileUpload } from "react-icons/md";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: 'San Francisco – Oakland Bay Bridge, United States',
    imgPath:
      'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'Bird',
    imgPath:
      'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'Bali, Indonesia',
    imgPath:
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250',
  },
  {
    label: 'Goč, Serbia',
    imgPath:
      'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
  },
];

function SwipeableCarousel() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ maxWidth: 400, flexGrow: 1, position: 'relative' }}>
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)', // Change overlay color and transparency as needed
          zIndex: 1,
        }}
      >
        
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            pl: 2,
            position: 'relative',
            height: '100%',
            background: 'transparent'
          }}
        >
          <Box >
            <Button >
              <Card sx={{ width: 100 }} onClick={()=> console.log('clicked')}>
                <CardContent>
                  <Typography>
                    <MdOutlineFileUpload color='#3559E3'/>
                  </Typography>
                  <Typography variant="body2" color="text.primary" sx={{fontSize: '7px', color: '#3559E3', mt: 2}}>
                    Upload photos and video
                  </Typography>
                </CardContent>
              </Card>
            </Button>
          </Box>
        </Box>
      </div>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  height: 255,
                  display: 'block',
                  maxWidth: 400,
                  overflow: 'hidden',
                  width: '100%',
                }}
                src={step.imgPath}
                alt={step.label}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        // nextButton={
        //   <Button
        //     size="small"
        //     onClick={handleNext}
        //     disabled={activeStep === maxSteps - 1}
        //   >
        //     Next
        //     {theme.direction === 'rtl' ? (
        //       <KeyboardArrowLeft />
        //     ) : (
        //       <KeyboardArrowRight />
        //     )}
        //   </Button>
        // }
        // backButton={
        //   <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
        //     {theme.direction === 'rtl' ? (
        //       <KeyboardArrowRight />
        //     ) : (
        //       <KeyboardArrowLeft />
        //     )}
        //     Back
        //   </Button>
        // }
      />
    </Box>
  );
}

export default SwipeableCarousel;