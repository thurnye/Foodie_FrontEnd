import React from 'react';
import {
  Box,
  Grid,
  Typography,
  Card,
  CardContent,
  Chip,
} from '@mui/material';
import {
  Restaurant as RestaurantIcon,
  Event as EventIcon,
  Bookmark as BookmarkIcon,
  TrendingUp as TrendingUpIcon,
  ArrowUpward,
  ArrowDownward
} from '@mui/icons-material';

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

const Metrics: React.FC = () => {
  return (
    <>
        <Grid item xs={12} sm={6} lg={3}>
          <StatCard
            title='Total Recipes'
            value='24'
            icon={<RestaurantIcon sx={{ color: 'white', fontSize: 28 }} />}
            color='#5e72e4'
            change={12.5}
          />
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <StatCard
            title='Events Hosted'
            value='8'
            icon={<EventIcon sx={{ color: 'white', fontSize: 28 }} />}
            color='#2dce89'
            change={8.2}
          />
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <StatCard
            title='Saved Items'
            value='42'
            icon={<BookmarkIcon sx={{ color: 'white', fontSize: 28 }} />}
            color='#fb6340'
            change={-3.1}
          />
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <StatCard
            title='Total Views'
            value='1.2k'
            icon={<TrendingUpIcon sx={{ color: 'white', fontSize: 28 }} />}
            color='#11cdef'
            change={15.7}
          />
        </Grid>
    </>
  );
};

export default Metrics;
