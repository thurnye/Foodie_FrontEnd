import React from 'react';
import { Box, Grid, Typography, Card, CardContent, Chip } from '@mui/material';
import { ArrowUpward, ArrowDownward } from '@mui/icons-material';
import Metrics from '../components/Analysis/Metrics';
import EngagementRate from '../components/Analysis/EngagementRate';
import RecentActivity from '../components/Analysis/RecentActivity';
import RecipeViewTrend from '../components/Visualizations/RecipeViewTrend';
import RecipesByCategory from '../components/Visualizations/RecipesByCategory';
import Top5ByEngagement from '../components/Visualizations/Top5ByEngagement';
import DeviceMetrics from '../components/Demography/DeviceMetrics';
import DemographyMetrics from '../components/Demography/DemographMetrics';
import DemographyMap from '../components/Demography/DemographyMap';
import TopCountries from '../components/Demography/TopCountries';
import TopPerformingRecipeTable from '../components/Analysis/TopPerformingRecipeTable';
import PerformanceMetricsOverTime from '../components/Visualizations/PerformanceMetricsOverTime';
import PerformanceInsight from '../components/Analysis/PerformanceInsight';

interface StatCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  color: string;
  change?: number;
  subtitle?: string;
}

const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  icon,
  color,
  change,
  subtitle,
}) => {
  const isPositive = change && change > 0;

  return (
    <Card
      sx={{
        height: '100%',
        borderRadius: 2,
        boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
        border: '1px solid #eee',
        transition: 'transform 0.2s, box-shadow 0.2s',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: '0 4px 16px rgba(0,0,0,0.12)',
        },
      }}
    >
      <CardContent>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            mb: 2,
          }}
        >
          <Box>
            <Typography
              variant='body2'
              color='text.secondary'
              sx={{ mb: 1, fontWeight: 500 }}
            >
              {title}
            </Typography>
            <Typography
              variant='h4'
              component='div'
              sx={{ fontWeight: 700, color: '#1a1a2e' }}
            >
              {value}
            </Typography>
          </Box>
          <Box
            sx={{
              backgroundColor: color,
              borderRadius: 2,
              p: 1.5,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {icon}
          </Box>
        </Box>

        {change !== undefined && (
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <Chip
              icon={
                isPositive ? (
                  <ArrowUpward sx={{ fontSize: 16 }} />
                ) : (
                  <ArrowDownward sx={{ fontSize: 16 }} />
                )
              }
              label={`${Math.abs(change)}%`}
              size='small'
              sx={{
                height: 24,
                bgcolor: isPositive ? '#e8f5e9' : '#ffebee',
                color: isPositive ? '#2e7d32' : '#c62828',
                '& .MuiChip-icon': {
                  color: 'inherit',
                },
                fontWeight: 600,
              }}
            />
            <Typography variant='caption' color='text.secondary'>
              {subtitle || 'vs last month'}
            </Typography>
          </Box>
        )}
      </CardContent>
    </Card>
  );
};

const DashboardHome: React.FC = () => {
  return (
    <Box>
      {/* Header */}
      <Box sx={{ mb: 4 }}>
        <Typography
          variant='h4'
          sx={{ fontWeight: 700, color: '#1a1a2e', mb: 1 }}
        >
          Analytics Overview
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          Track your performance and engagement metrics
        </Typography>
      </Box>

      <Grid container spacing={3} sx={{ mb: 4 }}>
        {/* Stats Grid */}
        <Metrics />

        {/* Recipe View Trends */}
        <RecipeViewTrend />

        {/* Recipes By Category */}
        <RecipesByCategory />

        {/* Top 5 Recipes By engagement */}
        <Top5ByEngagement />

        {/* Recent Activity */}
        <RecentActivity />

        {/* Devices Used */}
        <DeviceMetrics />

        {/* Performance Chart over time*/}
        <PerformanceMetricsOverTime />

        {/* Secondary Metrics */}
        <EngagementRate />

        {/* PerformanceInsight */}
        <PerformanceInsight />

        {/* Visitors by Source */}
        {/* <VisitorsMetrics /> */}

        {/* Interactive Geo-location Map */}
        <DemographyMetrics />

        {/* <GeoLocationMap /> */}
        <DemographyMap />

        {/* Top Performing Countries */}
        <TopCountries />

        {/* Recipe Metrics Table */}
        <TopPerformingRecipeTable />
      </Grid>
    </Box>
  );
};

export default DashboardHome;
