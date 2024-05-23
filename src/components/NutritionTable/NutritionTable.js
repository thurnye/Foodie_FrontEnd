import React from 'react';
import { getRandomInt } from '../../util/commons';
import styles from './NutrientTable.module.css';
import { Box, Typography } from '@mui/material';

export default function NutrientsTable({ nutrients }) {
  return (
    <div className={styles.NutrientTable}>
      <Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: { xs: 'column', lg: 'row' },
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              m: { xs: 'initial', lg: 'auto' },
              p: { xs: 3, lg: 4 },
              background: '#fee86d',
            }}
          >
            <Typography variant='h4' sx={{ textAlign: 'center' }}>
              Nutritional Information
            </Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              background: '#f8f6e6',
            }}
          >
            {nutrients.map((el, index) => {
              return (
                <Box
                  key={getRandomInt()}
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    m: 2,
                  }}
                >
                  <Typography>
                    {el.amount}
                    {el.unit}
                  </Typography>
                  <Typography>{el.name}</Typography>
                </Box>
              );
            })}
          </Box>
        </Box>
      </Box>
    </div>
  );
}
