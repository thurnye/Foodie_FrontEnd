import React from 'react';
import {
  Box,
  Grid,
  Typography,
  Card,
  CardContent,
  LinearProgress,
  Chip,
} from '@mui/material';
import {
  Visibility as VisibilityIcon,
  ThumbUp as ThumbUpIcon,
} from '@mui/icons-material';

const PerformanceInsight: React.FC = () => {
  return (
    <>
      <Grid item xs={12} md={6}>
        <Card
          sx={{
            borderRadius: 2,
            boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
            border: '1px solid #eee',
          }}
        >
          <CardContent>
            <Typography variant='h6' sx={{ fontWeight: 600, mb: 3 }}>
              Performance Insights
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Box
                  sx={{
                    textAlign: 'center',
                    p: 2,
                    bgcolor: '#f8f9fa',
                    borderRadius: 2,
                  }}
                >
                  <VisibilityIcon
                    sx={{ fontSize: 32, color: '#5e72e4', mb: 1 }}
                  />
                  <Typography variant='h5' fontWeight={700}>
                    2.4k
                  </Typography>
                  <Typography variant='caption' color='text.secondary'>
                    Page Views
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={6}>
                <Box
                  sx={{
                    textAlign: 'center',
                    p: 2,
                    bgcolor: '#f8f9fa',
                    borderRadius: 2,
                  }}
                >
                  <ThumbUpIcon sx={{ fontSize: 32, color: '#2dce89', mb: 1 }} />
                  <Typography variant='h5' fontWeight={700}>
                    186
                  </Typography>
                  <Typography variant='caption' color='text.secondary'>
                    Total Likes
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Box
                  sx={{
                    mt: 2,
                    p: 2,
                    bgcolor: '#fff3cd',
                    borderRadius: 2,
                    border: '1px solid #ffeaa7',
                  }}
                >
                  <Typography
                    variant='body2'
                    sx={{ color: '#856404', fontWeight: 500 }}
                  >
                    📊 Your engagement increased by 23% this week!
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </>
  );
};

export default PerformanceInsight;
