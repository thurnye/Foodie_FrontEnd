import React, { useState } from 'react';
import { Box, Grid } from '@mui/material';
import BarChartCard from '../Charts/BarChartCard';
import { topRecipesData } from '../../mock/analysis.charts.mock';

const Top5ByEngagement: React.FC = () => {
  return (
      <Grid item xs={12} lg={8}>
        <BarChartCard
          title='Top 5 Recipes by Engagement'
          data={topRecipesData}
          xKey='name'
          yKey='engagement'
        />
      </Grid>
  );
};

export default Top5ByEngagement;
