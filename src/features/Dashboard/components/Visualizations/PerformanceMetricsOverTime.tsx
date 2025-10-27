import React from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
  LinearProgress,
  Grid,
} from '@mui/material';
import {
  TrendingUp as TrendingUpIcon,
  TrendingDown as TrendingDownIcon,
} from '@mui/icons-material';
import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { performanceData } from '../../mock/analysis.charts.mock';

const PerformanceMetricsOverTime: React.FC = () => {
  return (
    <Grid item xs={12} lg={6}>
      <Card
        sx={{
          borderRadius: 2,
          boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
          border: '1px solid #eee',
          mb: 3,
        }}
      >
        <CardContent>
          <Typography variant='h6' sx={{ fontWeight: 600, mb: 3 }}>
            Performance Metrics Over Time
          </Typography>

          <ResponsiveContainer width='100%' height={350}>
            <ComposedChart data={performanceData}>
              <CartesianGrid strokeDasharray='3 3' stroke='#f0f0f0' />
              <XAxis dataKey='month' tick={{ fontSize: 12 }} stroke='#666' />
              <YAxis tick={{ fontSize: 12 }} stroke='#666' />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#fff',
                  border: '1px solid #eee',
                  borderRadius: 8,
                }}
              />
              <Legend />
              <Bar dataKey='views' fill='#5e72e4' radius={[8, 8, 0, 0]} />
              <Line
                type='monotone'
                dataKey='likes'
                stroke='#2dce89'
                strokeWidth={2}
                dot={{ fill: '#2dce89', r: 4 }}
              />
              <Line
                type='monotone'
                dataKey='saves'
                stroke='#fb6340'
                strokeWidth={2}
                dot={{ fill: '#fb6340', r: 4 }}
              />
            </ComposedChart>
          </ResponsiveContainer>

          <Box
            sx={{
              mt: 2,
              p: 2,
              bgcolor: '#f8f9fa',
              borderRadius: 2,
              display: 'flex',
              gap: 3,
            }}
          >
            <Box>
              <Typography variant='caption' color='text.secondary'>
                Total Views
              </Typography>
              <Typography variant='h6' fontWeight={700}>
                11,900
              </Typography>
            </Box>
            <Box>
              <Typography variant='caption' color='text.secondary'>
                Total Likes
              </Typography>
              <Typography variant='h6' fontWeight={700}>
                4,370
              </Typography>
            </Box>
            <Box>
              <Typography variant='caption' color='text.secondary'>
                Total Saves
              </Typography>
              <Typography variant='h6' fontWeight={700}>
                2,310
              </Typography>
            </Box>
            <Box sx={{ ml: 'auto' }}>
              <Chip
                icon={<TrendingUpIcon />}
                label='↑ 23% vs last period'
                size='small'
                sx={{
                  bgcolor: '#e8f5e9',
                  color: '#2e7d32',
                  fontWeight: 600,
                }}
              />
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default PerformanceMetricsOverTime;
