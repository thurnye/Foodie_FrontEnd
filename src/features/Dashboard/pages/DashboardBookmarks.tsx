import React from 'react';
import {
  Box,
  Typography,
  Paper,
  Tabs,
  Tab,
} from '@mui/material';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`bookmarks-tabpanel-${index}`}
      aria-labelledby={`bookmarks-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

const DashboardBookmarks: React.FC = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom sx={{ mb: 4 }}>
        Saves & Bookmarks
      </Typography>

      <Paper>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="bookmarks tabs"
          sx={{ borderBottom: 1, borderColor: 'divider' }}
        >
          <Tab label="Saved Recipes" />
          <Tab label="Saved Events" />
          <Tab label="Collections" />
        </Tabs>

        <TabPanel value={value} index={0}>
          <Typography variant="body2" color="text.secondary">
            Your saved recipes will appear here
          </Typography>
        </TabPanel>

        <TabPanel value={value} index={1}>
          <Typography variant="body2" color="text.secondary">
            Your saved events will appear here
          </Typography>
        </TabPanel>

        <TabPanel value={value} index={2}>
          <Typography variant="body2" color="text.secondary">
            Your collections will appear here
          </Typography>
        </TabPanel>
      </Paper>
    </Box>
  );
};

export default DashboardBookmarks;
