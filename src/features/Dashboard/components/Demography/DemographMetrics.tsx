import React from 'react';
import { Box, Typography, Grid, Paper } from '@mui/material';
import { TrendingUp as TrendingUpIcon } from '@mui/icons-material';
import { geoData } from '../../mock/demography.mock';

const DemographyMetrics: React.FC = () => {
  // Calculate summary statistics
  const totalVisitors = Object.values(geoData).reduce(
    (sum, country) => sum + country.visitors,
    0
  );
  const topCountries = Object.values(geoData)
    .sort((a, b) => b.visitors - a.visitors)
    .slice(0, 5);
  const avgGrowth =
    Object.values(geoData).reduce((sum, country) => sum + country.growth, 0) /
    Object.values(geoData).length;

  return (
    <Grid item xs={12}>
      <Grid
        container
        spacing={3}
        sx={{
          mb: 3,
          display: 'flex',
          flexWrap: 'wrap',
        }}
      >
        <Grid item xs={6} sm={6} md={3}>
          <Paper
            sx={{
              p: 2,
              borderRadius: 2,
              bgcolor: '#f8f9fa',
              border: '1px solid #eee',
            }}
          >
            <Typography
              variant='caption'
              color='text.secondary'
              sx={{ display: 'block', mb: 0.5 }}
            >
              Total Visitors
            </Typography>
            <Typography variant='h5' fontWeight={700} color='#5e72e4'>
              {totalVisitors.toLocaleString()}
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={6} sm={6} md={3}>
          <Paper
            sx={{
              p: 2,
              borderRadius: 2,
              bgcolor: '#f8f9fa',
              border: '1px solid #eee',
            }}
          >
            <Typography
              variant='caption'
              color='text.secondary'
              sx={{ display: 'block', mb: 0.5 }}
            >
              Countries Reached
            </Typography>
            <Typography variant='h5' fontWeight={700} color='#2dce89'>
              {Object.keys(geoData).length}
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={6} sm={6} md={3}>
          <Paper
            sx={{
              p: 2,
              borderRadius: 2,
              bgcolor: '#f8f9fa',
              border: '1px solid #eee',
            }}
          >
            <Typography
              variant='caption'
              color='text.secondary'
              sx={{ display: 'block', mb: 0.5 }}
            >
              Top Country
            </Typography>
            <Typography variant='h6' fontWeight={700} color='#fb6340'>
              {topCountries[0]?.name.split(' ')[0]}
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={6} sm={6} md={3}>
          <Paper
            sx={{
              p: 2,
              borderRadius: 2,
              bgcolor: '#f8f9fa',
              border: '1px solid #eee',
            }}
          >
            <Typography
              variant='caption'
              color='text.secondary'
              sx={{ display: 'block', mb: 0.5 }}
            >
              Avg. Growth
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
              <TrendingUpIcon sx={{ fontSize: 20, color: '#2dce89' }} />
              <Typography variant='h5' fontWeight={700} color='#2dce89'>
                {avgGrowth.toFixed(1)}%
              </Typography>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default DemographyMetrics;
