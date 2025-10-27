import React from 'react';
import {
  Box,
  Typography,
  Paper,
  Grid,
  Button,
} from '@mui/material';
import { Add as AddIcon } from '@mui/icons-material';

const DashboardRecipes: React.FC = () => {
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
        <Typography variant="h4">My Recipes</Typography>
        <Button variant="contained" startIcon={<AddIcon />}>
          Create Recipe
        </Button>
      </Box>

      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper sx={{ p: 3, textAlign: 'center', minHeight: 200 }}>
            <Typography variant="h6" color="text.secondary" gutterBottom>
              No recipes yet
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Share your first recipe with the community
            </Typography>
            <Button variant="outlined" startIcon={<AddIcon />}>
              Create Your First Recipe
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DashboardRecipes;
