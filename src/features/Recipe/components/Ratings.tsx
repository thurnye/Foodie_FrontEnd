import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Box, Rating, Typography } from '@mui/material';

interface IRating {
  value: number;
}

const Ratings: React.FC<IRating> = ({ value = 0 }) => {
  return (
    <>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
        <Typography variant='subtitle1' sx={{ mr: 2 }}>
          Ratings:
        </Typography>
        <Rating name='ratings' value={value} readOnly />
      </Box>
    </>
  );
};

export default Ratings;
