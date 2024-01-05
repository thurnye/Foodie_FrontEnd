import React, {useState} from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Typography from '@mui/material/Typography';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { MdOutlineFileUpload } from "react-icons/md";
import Previews from './Previews';
import { MdOutlineEdit } from "react-icons/md";

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

function SwipeableCarousel({setEventImages, eventImages}) {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const [openImageAndVideo, setOpenImageAndVideo] = React.useState(false);
  const defaultImages = eventImages.length > 0 ? eventImages : images;
  const [isHovered, setIsHovered] = useState(false);
  const maxSteps = defaultImages.length;




  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{m: 'auto'}}>
      {!openImageAndVideo && 
        <Box sx={{ maxWidth: '100%', flexGrow: 1, position: 'relative' }} 
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}>
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundColor: eventImages.length === 0 ? 'rgba(0, 0, 0, 0.5)' : '', 
              zIndex: 1,
            }}
          >
            {eventImages.length === 0 && 
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
                  <Card sx={{ width: 100, textAlign: 'center' }} onClick={()=> setOpenImageAndVideo(true)}>
                    <CardContent>
                      <Typography>
                        <MdOutlineFileUpload color='#3559E3'/>
                      </Typography>
                      <Typography variant="body2" color="text.primary" sx={{fontSize: '7px', color: '#3559E3', mt: 2}}>
                        Upload photos and video
                      </Typography>
                    </CardContent>
                  </Card>
                </Box>
              </Box>
            }
          </div>

          {/* Show edit button when user save images */}
          {isHovered && 
            <Box sx={{ maxWidth: '100%', flexGrow: 1, position: 'relative' }}>
              <Box
                sx={{
                  position: 'absolute',
                  top: 6,
                  right: 6,
                  height: '100%',
                  backgroundColor: 'white', // Change overlay color and transparency
                  zIndex: 1,
                  color: '#3559E3'
                }}
              >
                <Card sx={{ width: 25, height: 25, borderRadius: '50%', textAlign: 'center' }} onClick={()=> setOpenImageAndVideo(true)}>
                  <Typography>
                    <MdOutlineEdit color='#3559E3'/>
                  </Typography>
                </Card>
              </Box>
            </Box>
            }
          <AutoPlaySwipeableViews
            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
            index={activeStep}
            onChangeIndex={handleStepChange}
            enableMouseEvents
          >
            {defaultImages.map((step, index) => (
              <div key={step.label}>
                {Math.abs(activeStep - index) <= 2 ? (
                  <Box
                    component="img"
                    sx={{
                      height: {sx : 300, md: 470},
                      display: 'block',
                      maxWidth: '100%',
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
          />
        </Box>
      }
      {openImageAndVideo && 
        <Box >
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <Typography variant="h5" component="div" sx={{ mb: 2.5 }}>
                Add images and video
              </Typography>
              <Typography sx={{  mb: 2 }} variant="body2">
                Images
              </Typography>
              <Typography sx={{ fontSize: 14, mb: 2 }} color="text.secondary" >
                Add photos to show what your event will be about. You can upload up to 3 images
              </Typography>

              <Previews 
              setEventImages={setEventImages} 
              eventImages={eventImages}
              setOpen={setOpenImageAndVideo}
              />  
              
            </CardContent>
          </Card>
        </Box>
      }
    </Box>
  );
}

export default SwipeableCarousel;