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

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);


function CoverCarousel({images}) {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{mt: 3, maxWidth: '100%', flexGrow: 1, 
    // backgroundImage: `url(${images[activeStep].imgPath})`,
    // backgroundSize: 'cover', // Optional: Adjust the size of the background image
    // backgroundPosition: 'center', 
    // backdropFilter: 'blur(50px) brightness(0.9)',
    }}>
      
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
                  height: {sx : 300, md: 470},
                  display: 'block',
                  maxWidth: '940px',
                  overflow: 'hidden',
                  width: '100%',
                  m: 'auto'
                }}
                src={step.imgPath}
                alt={step.label}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
    </Box>

    // <Box>
    //   <Box class="backgroundImageCVR" sx={{
    //     position:'relative',
    //     // padding:15,
    //     border: '2px dotted black',
    //   }}>
    //     <Box class="background-image" sx={{
    //       position:'absolute',
    //       border: '2px dotted red',
    //       left:0,
    //       right:0,
    //       top:0,
    //       bottom:0,
    //       backgroundImage:`url(${images[activeStep].imgPath})`,
    //       backgroundSize:'cover',
    //       zIndex:1,
    //     filter: 'blur(10px)',
    //     }}></Box>
    //     <Box class="content" sx={{
    //       position:'relative',
    //       zIndex:2,
    //       color:'#fff',
    //       border: '2px dotted blue'
    //     }}>
    //       <AutoPlaySwipeableViews
    //     axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
    //     index={activeStep}
    //     onChangeIndex={handleStepChange}
    //     enableMouseEvents
    //   >
    //     {images.map((step, index) => (
    //       <div key={step.label}>
    //         {Math.abs(activeStep - index) <= 2 ? (
    //           <Box
    //             component="img"
    //             sx={{
    //               height: {sx : 300, md: 470},
    //               display: 'block',
    //               maxWidth: '940px',
    //               overflow: 'hidden',
    //               width: '100%',
    //               m: 'auto'
    //             }}
    //             src={step.imgPath}
    //             alt={step.label}
    //           />
    //         ) : null}
    //       </div>
    //     ))}
    //   </AutoPlaySwipeableViews>
    //     </Box>
    //   </Box>
    // </Box>
  );
}

export default CoverCarousel;