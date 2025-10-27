import React from 'react';
import {
  Box,
  Typography,
  Paper,
  Grid,
  Button,
  Card,
  CardContent,
  CardActions,
  Chip,
} from '@mui/material';
import { Add as AddIcon } from '@mui/icons-material';

const DashboardEvents: React.FC = () => {
  return (
    <Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          mb: 4,
        }}
      >
        <Typography variant="h4">My Events</Typography>
        <Button variant="contained" startIcon={<AddIcon />}>
          Create Event
        </Button>
      </Box>

      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper sx={{ p: 3, textAlign: 'center', minHeight: 200 }}>
            <Typography variant="h6" color="text.secondary" gutterBottom>
              No events yet
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Create your first event to get started
            </Typography>
            <Button variant="outlined" startIcon={<AddIcon />}>
              Create Your First Event
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DashboardEvents;
