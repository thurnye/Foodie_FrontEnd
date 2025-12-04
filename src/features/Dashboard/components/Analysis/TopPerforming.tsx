import React from 'react';
import { Box, Grid, Paper, Typography, Divider } from '@mui/material';

const TopPerforming: React.FC = () => {
  return (
    <Box>
      <Grid item xs={12} lg={4}>
        <Paper
          sx={{
            p: 3,
            borderRadius: 2,
            boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
            border: '1px solid #eee',
            height: '100%',
          }}
        >
          <Typography variant='h6' gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
            Top Performing
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Box>
              <Typography variant='body2' fontWeight={500} sx={{ mb: 0.5 }}>
                Chocolate Cake Recipe
              </Typography>
              <Typography variant='caption' color='text.secondary'>
                342 views • 28 likes
              </Typography>
            </Box>
            <Divider />
            <Box>
              <Typography variant='body2' fontWeight={500} sx={{ mb: 0.5 }}>
                Summer Cooking Event
              </Typography>
              <Typography variant='caption' color='text.secondary'>
                45 attendees • 4.8★ rating
              </Typography>
            </Box>
            <Divider />
            <Box>
              <Typography variant='body2' fontWeight={500} sx={{ mb: 0.5 }}>
                Italian Pasta Guide
              </Typography>
              <Typography variant='caption' color='text.secondary'>
                289 views • 35 saves
              </Typography>
            </Box>
          </Box>
        </Paper>
      </Grid>
    </Box>
  );
};

export default TopPerforming;
