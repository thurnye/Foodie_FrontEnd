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
import { IContentBlock, IMethod } from '../../Recipe/types/recipe.types';
import ImageLayout from '../../../app/components/Layouts/ImageLayout';
import VideoPlayer from '../../../app/components/VideoPlayer';


interface DirectionStepperProps {
  methods: IMethod[];
}

const DirectionStepper: React.FC<DirectionStepperProps> = ({ methods }) => {
  return (
    <Box sx={{ height: '100%' }}>
      <Stepper orientation="vertical">
        {methods.map((method, methodIndex) => (
          <Step key={`method-${methodIndex}-direction`} expanded active>
            {method.step.map((el: IContentBlock, i: number) => (
              <React.Fragment key={`step-${methodIndex}-${i}-method`}>
                {el.type === 'title' && <StepLabel>{el.value}</StepLabel>}
                <StepContent sx={{ py: 2 }}>
                  {el.type === 'text' && (
                    <Typography variant="body2">{parser(el.value as string)}</Typography>
                  )}

                  {el.type === 'image' && Array.isArray(el.value) && (
                    <Box sx={{ maxWidth: 650, mx: 'auto', my: 2 }}>
                      <Card sx={{ boxShadow: 'none', border: 0 }}>
                        <CardContent>
                          <ImageLayout
                            isMultiple={el.isMultiple ?? false}
                            imageList={el.value}
                          />
                        </CardContent>
                      </Card>
                    </Box>
                  )}

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
