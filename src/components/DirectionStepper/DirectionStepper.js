import React, { useEffect } from 'react';
import styles from './DirectionStepper.module.css';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Typography from '@mui/material/Typography';
import parser from 'html-react-parser';
import { Card, CardContent } from '@mui/material';
import ImageLayout from '../Dashboard/Recipes/Forms/RecipeDirections/ImageLayout';
import VideoPlayer from '../VideoPlayer/VideoPlayer';
import { getRandomInt } from '../../util/commons';


const DirectionStepper = ({methods}) => {

  return (
    <Box className={styles.DirectionStepper} sx={{height: '100%'}}>
      <Box >
        <Stepper  orientation="vertical">
          {methods.map((methods, index) => {
            const { step } = methods;
            return (
            <Step key={step.label} expanded={true} active={true} >
              {step.map((el) =>  <React.Fragment key={getRandomInt()}>
                 { el.type === 'title' &&  <StepLabel>{el.value}</StepLabel> }
                  <StepContent sx={{height: 'auto'}}>
                    {el.type === 'text' && 
                      <Typography>
                        {parser(el.value)}
                      </Typography>
                    }
                    {el.type === 'image' &&  <Box sx={{ maxWidth: 650, m: 'auto'}}>
                      <Box sx={{mb:3}}>
                        <Card sx={{boxShadow: 'none', border:0}}>
                            <CardContent>
                                <ImageLayout isMultiple={el.isMultiple} imageList={el.value}/>
                            </CardContent>
                        </Card>
                      </Box>
                      <Box>
                      </Box>
                    </Box>}
                    {el.type === 'video' && <Box 
                      sx={{
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                    >
                        <VideoPlayer link={el.value}/>
                    </Box>
                    }
                  </StepContent>
                </React.Fragment>
              )}
            </Step>
          )})}
        </Stepper>
      </Box>
    </Box>
  );
};

export default DirectionStepper;
