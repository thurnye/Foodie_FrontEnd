import React from 'react';
import { Box, Grid } from '@mui/material';
import PieChartCard from '../Charts/PieChartCard';
import { recipeCategoriesData } from '../../mock/analysis.charts.mock';

const RecipesByCategory: React.FC = () => {
  return (
      <Grid item xs={12} lg={4}>
        <PieChartCard title='Recipe Categories' data={recipeCategoriesData} />
      </Grid>
  );
};

export default RecipesByCategory;
