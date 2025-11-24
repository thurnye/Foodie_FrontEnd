import React from 'react';
import { Box, Typography, Grid, Button } from '@mui/material';
import { Add as AddIcon } from '@mui/icons-material';
import OrganizedEventList from '../../Events/pages/EventsOrganisedByMeList';

const DashboardEvents: React.FC = () => {
  return (
    <Box>
      <OrganizedEventList />
    </Box>
  );
};

export default DashboardEvents;
