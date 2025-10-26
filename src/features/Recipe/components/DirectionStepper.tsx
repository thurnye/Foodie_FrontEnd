import React from 'react';
import {
  Box,
  Stepper,
  Step,
  StepLabel,
  StepContent,
  Typography,
  Card,
  CardContent,
} from '@mui/material';
import parser from 'html-react-parser';
import VideoPlayer from './VideoPlayer';
import ImageLayout from './ImageLayout';

// ---------- Types ----------
interface IStepElement {
  type: 'title' | 'text' | 'image' | 'video';
  value: string | string[];
  isMultiple?: boolean;
}

interface IStep {
  step: IStepElement[];
}

interface DirectionStepperProps {
  methods: IStep[];
}

// ---------- Component ----------
const DirectionStepper: React.FC<DirectionStepperProps> = ({ methods }) => {
  return (
    <Box sx={{ height: '100%', py: 2 }}>
      <Stepper orientation="vertical">
        {methods.map((method, index) => (
          <Step key={`method_stepper_${index}`} expanded active >
            {method.step.map((el, i) => (
              <React.Fragment key={i}>
                {el.type === 'title' && <StepLabel sx={{
                      '& .MuiStepLabel-iconContainer .MuiSvgIcon-root': {
                        // color: 'gold', 
                        
                      },
                      '& .MuiStepLabel-label': {
                        fontWeight: 600,
                      },
                    }}>{el.value}</StepLabel>}

                <StepContent sx={{ height: 'auto', pl: 3 }}>
                  {/* Text Content */}
                  {el.type === 'text' && (
                    <Typography sx={{ mb: 2, whiteSpace: 'pre-line' }}>
                      {parser(el.value as string)}
                    </Typography>
                  )}

                  {/* Image Content */}
                  {el.type === 'image' && Array.isArray(el.value) && (
                    <Box sx={{ maxWidth: 650, mx: 'auto', my: 3 }}>
                      <Card sx={{ boxShadow: 'none', border: 0 }}>
                        <CardContent>
                          <ImageLayout
                            isMultiple={el.isMultiple}
                            imageList={el.value}
                          />
                        </CardContent>
                      </Card>
                    </Box>
                  )}

                  {/* Video Content */}
                  {el.type === 'video' && typeof el.value === 'string' && (
                    <Box
                      sx={{
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        my: 2,
                      }}
                    >
                      <VideoPlayer link={el.value} />
                    </Box>
                  )}
                </StepContent>
              </React.Fragment>
            ))}
          </Step>
        ))}
      </Stepper>
    </Box>
  );
};

export default DirectionStepper;
