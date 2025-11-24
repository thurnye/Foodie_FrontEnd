import React, { useState } from 'react';
import {
  Box,
  Paper,
  Typography,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Chip,
  InputAdornment,
  Stack,
} from '@mui/material';
import { ExpandMore, Search, FilterList, Clear } from '@mui/icons-material';
import { IEventFilters } from '../types/event.types';

interface EventFiltersProps {
  filters: IEventFilters;
  onFiltersChange: (filters: IEventFilters) => void;
}

const EventFilters: React.FC<EventFiltersProps> = ({
  filters,
  onFiltersChange,
}) => {
  const [localFilters, setLocalFilters] = useState<IEventFilters>(filters);

  const handleFilterChange = (field: keyof IEventFilters, value: any) => {
    const updatedFilters = { ...localFilters, [field]: value };
    setLocalFilters(updatedFilters);
  };

  const handleApplyFilters = () => {
    onFiltersChange(localFilters);
  };

  const handleClearFilters = () => {
    const clearedFilters: IEventFilters = {};
    setLocalFilters(clearedFilters);
    onFiltersChange(clearedFilters);
  };

  const activeFilterCount = Object.keys(localFilters).filter(
    (key) =>
      localFilters[key as keyof IEventFilters] !== undefined &&
      localFilters[key as keyof IEventFilters] !== ''
  ).length;

  return (
    <Paper sx={{ p: 2 }}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          mb: 2,
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <FilterList />
          <Typography variant='h6'>Filters</Typography>
          {activeFilterCount > 0 && (
            <Chip label={activeFilterCount} size='small' color='primary' />
          )}
        </Box>
        {activeFilterCount > 0 && (
          <Button
            startIcon={<Clear />}
            onClick={handleClearFilters}
            size='small'
            color='secondary'
          >
            Clear All
          </Button>
        )}
      </Box>

      <Stack spacing={2}>
        {/* Search */}
        <TextField
          fullWidth
          size='small'
          placeholder='Search events...'
          value={localFilters.search || ''}
          onChange={(e) => handleFilterChange('search', e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position='start'>
                <Search fontSize='small' />
              </InputAdornment>
            ),
          }}
        />

        {/* Category */}
        <FormControl fullWidth size='small'>
          <InputLabel>Category</InputLabel>
          <Select
            value={localFilters.category || ''}
            onChange={(e) => handleFilterChange('category', e.target.value)}
            label='Category'
          >
            <MenuItem value=''>All Categories</MenuItem>
            <MenuItem value='cooking-class'>Cooking Class</MenuItem>
            <MenuItem value='food-festival'>Food Festival</MenuItem>
            <MenuItem value='wine-tasting'>Wine Tasting</MenuItem>
            <MenuItem value='restaurant-event'>Restaurant Event</MenuItem>
            <MenuItem value='pop-up'>Pop-up</MenuItem>
            <MenuItem value='networking'>Networking</MenuItem>
            <MenuItem value='workshop'>Workshop</MenuItem>
            <MenuItem value='other'>Other</MenuItem>
          </Select>
        </FormControl>

        {/* Status */}
        {/* <FormControl fullWidth size='small'>
          <InputLabel>Status</InputLabel>
          <Select
            value={localFilters.status || ''}
            onChange={(e) => handleFilterChange('status', e.target.value)}
            label='Status'
          >
            <MenuItem value=''>All Statuses</MenuItem>
            <MenuItem value='published'>Published</MenuItem>
            <MenuItem value='draft'>Draft</MenuItem>
            <MenuItem value='cancelled'>Cancelled</MenuItem>
            <MenuItem value='completed'>Completed</MenuItem>
          </Select>
        </FormControl> */}

        {/* Sort */}
        <FormControl fullWidth size='small'>
          <InputLabel>Sort By</InputLabel>
          <Select
            value={localFilters.sort || 'upcoming'}
            onChange={(e) => handleFilterChange('sort', e.target.value)}
            label='Sort By'
          >
            <MenuItem value='upcoming'>Upcoming</MenuItem>
            <MenuItem value='newest'>Newest</MenuItem>
            <MenuItem value='oldest'>Oldest</MenuItem>
            <MenuItem value='popular'>Popular</MenuItem>
          </Select>
        </FormControl>

        {/* Advanced Filters Accordion */}
        <Accordion elevation={0} sx={{ border: '1px solid #e0e0e0' }}>
          <AccordionSummary expandIcon={<ExpandMore />}>
            <Typography variant='body2'>Advanced Filters</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Stack spacing={2}>
              {/* Location */}
              <TextField
                fullWidth
                size='small'
                label='Location'
                value={localFilters.location || ''}
                onChange={(e) => handleFilterChange('location', e.target.value)}
                placeholder='City or venue name'
              />

              {/* Tags */}
              <TextField
                fullWidth
                size='small'
                label='Tags'
                value={localFilters.tags || ''}
                onChange={(e) => handleFilterChange('tags', e.target.value)}
                placeholder='Comma-separated tags'
                helperText='e.g., vegan, outdoor, family-friendly'
              />

              {/* Date Range */}
              <TextField
                fullWidth
                size='small'
                type='date'
                label='Start Date'
                value={localFilters.startDate || ''}
                onChange={(e) =>
                  handleFilterChange('startDate', e.target.value)
                }
                InputLabelProps={{ shrink: true }}
              />

              <TextField
                fullWidth
                size='small'
                type='date'
                label='End Date'
                value={localFilters.endDate || ''}
                onChange={(e) => handleFilterChange('endDate', e.target.value)}
                InputLabelProps={{ shrink: true }}
              />
            </Stack>
          </AccordionDetails>
        </Accordion>

        {/* Apply Button */}
        <Button
          variant='contained'
          fullWidth
          onClick={handleApplyFilters}
          startIcon={<FilterList />}
          sx={{
            backgroundColor: '#333',
            '&:hover': { backgroundColor: '#444' },
          }}
        >
          Apply Filters
        </Button>
      </Stack>
    </Paper>
  );
};

export default EventFilters;
