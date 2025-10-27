import React, { useState } from 'react';
import { Box, Grid } from '@mui/material';
import {
  dailyViewsData,
  weeklyViewsData,
} from '../../mock/analysis.charts.mock';
import LineChartCard from '../Charts/LineChartCard';

const RecipeViewTrend: React.FC = () => {
  const [timeframe, setTimeframe] = useState<'daily' | 'weekly'>('daily');

  const handleChange = (event: any, newValue: 'daily' | 'weekly') => {
    if (newValue) setTimeframe(newValue);
  };

  const viewsData = timeframe === 'daily' ? dailyViewsData : weeklyViewsData;
  const xAxisKey = timeframe === 'daily' ? 'date' : 'week';

  return (
      <Grid item xs={12} lg={8}>
        <LineChartCard
          title='Recipe Views Trend'
          data={viewsData}
          xKey={xAxisKey}
          yKey='views'
          timeframe={timeframe}
          onTimeframeChange={handleChange}
        />
      </Grid>
  );
};

export default RecipeViewTrend;
