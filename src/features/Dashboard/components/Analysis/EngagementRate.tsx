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

const EngagementRate: React.FC = () => {
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
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                mb: 3,
              }}
            >
              <Typography variant='h6' sx={{ fontWeight: 600 }}>
                Engagement Rate
              </Typography>
              <Chip label='This Month' size='small' />
            </Box>
            <Box sx={{ mb: 2 }}>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  mb: 1,
                }}
              >
                <Typography variant='body2' color='text.secondary'>
                  Recipe Views
                </Typography>
                <Typography variant='body2' fontWeight={600}>
                  68%
                </Typography>
              </Box>
              <LinearProgress
                variant='determinate'
                value={68}
                sx={{
                  height: 8,
                  borderRadius: 4,
                  bgcolor: '#e3e3e3',
                  '& .MuiLinearProgress-bar': { bgcolor: '#5e72e4' },
                }}
              />
            </Box>
            <Box sx={{ mb: 2 }}>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  mb: 1,
                }}
              >
                <Typography variant='body2' color='text.secondary'>
                  Event Attendance
                </Typography>
                <Typography variant='body2' fontWeight={600}>
                  82%
                </Typography>
              </Box>
              <LinearProgress
                variant='determinate'
                value={82}
                sx={{
                  height: 8,
                  borderRadius: 4,
                  bgcolor: '#e3e3e3',
                  '& .MuiLinearProgress-bar': { bgcolor: '#2dce89' },
                }}
              />
            </Box>
            <Box>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  mb: 1,
                }}
              >
                <Typography variant='body2' color='text.secondary'>
                  User Interactions
                </Typography>
                <Typography variant='body2' fontWeight={600}>
                  54%
                </Typography>
              </Box>
              <LinearProgress
                variant='determinate'
                value={54}
                sx={{
                  height: 8,
                  borderRadius: 4,
                  bgcolor: '#e3e3e3',
                  '& .MuiLinearProgress-bar': { bgcolor: '#11cdef' },
                }}
              />
            </Box>
          </CardContent>
        </Card>
      </Grid>
    </>
  );
};

export default EngagementRate;
