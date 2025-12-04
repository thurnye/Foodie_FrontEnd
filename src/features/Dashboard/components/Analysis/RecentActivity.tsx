import React from 'react';
import { Box, Grid, Paper, Typography } from '@mui/material';

const RecentActivity: React.FC = () => {
  return (
    <>
        <Grid item xs={12} lg={4}>
          <Paper
            sx={{
              p: 3,
              borderRadius: 2,
              boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
              border: '1px solid #eee',
            }}
          >
            <Typography
              variant='h6'
              gutterBottom
              sx={{ fontWeight: 600, mb: 3 }}
            >
              Recent Activity
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {[
                {
                  action: 'New recipe published',
                  time: '2 hours ago',
                  color: '#5e72e4',
                },
                {
                  action: 'Event attendee registered',
                  time: '5 hours ago',
                  color: '#2dce89',
                },
                {
                  action: 'Recipe saved by user',
                  time: '1 day ago',
                  color: '#fb6340',
                },
              ].map((item, idx) => (
                <Box
                  key={idx}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2,
                    p: 2,
                    bgcolor: '#f8f9fa',
                    borderRadius: 1.5,
                  }}
                >
                  <Box
                    sx={{
                      width: 8,
                      height: 8,
                      borderRadius: '50%',
                      bgcolor: item.color,
                    }}
                  />
                  <Box sx={{ flexGrow: 1 }}>
                    <Typography variant='body2' fontWeight={500}>
                      {item.action}
                    </Typography>
                  </Box>
                  <Typography variant='caption' color='text.secondary'>
                    {item.time}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Paper>
        </Grid>
    </>
  );
};

export default RecentActivity;
