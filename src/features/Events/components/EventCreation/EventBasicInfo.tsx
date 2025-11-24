import React, { useState, forwardRef, useImperativeHandle } from 'react';
import {
  Box,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Chip,
  Button,
  InputAdornment,
  Grid,
  FormControlLabel,
  Switch,
} from '@mui/material';
import { CalendarToday } from '@mui/icons-material';

export interface BasicInfo {
  title: string;
  description: string;
  category: string;
  tags: string[];
  startDate: string;
  endDate: string;
  capacity: string; // keep as string, parse on submit
  isPublic: boolean;
  status: 'draft' | 'published';
}

export interface BasicInfoStepRef {
  validate: () => { valid: boolean; error?: string };
}

interface Props {
  data: BasicInfo;
  onChange: (updated: BasicInfo) => void;
}

const EventBasicInfo = forwardRef<BasicInfoStepRef, Props>(({ data, onChange }, ref) => {
  const [tagInput, setTagInput] = useState('');

  const update = (field: keyof BasicInfo, value: any) => {
    onChange({ ...data, [field]: value });
  };

  const addTag = () => {
    const t = tagInput.trim();
    if (t && !data.tags.includes(t)) {
      update('tags', [...data.tags, t]);
    }
    setTagInput('');
  };

  const removeTag = (tag: string) => {
    update('tags', data.tags.filter((t) => t !== tag));
  };

  useImperativeHandle(ref, () => ({
    validate: () => {
      if (
        !data.title.trim() ||
        !data.description.trim() ||
        !data.category ||
        !data.startDate ||
        !data.endDate ||
        !data.capacity
      ) {
        return { valid: false, error: 'Please fill in all required fields in Basic Info.' };
      }
      if (new Date(data.startDate) >= new Date(data.endDate)) {
        return { valid: false, error: 'End date must be after start date.' };
      }
      if (parseInt(data.capacity, 10) <= 0 || Number.isNaN(parseInt(data.capacity, 10))) {
        return { valid: false, error: 'Capacity must be at least 1.' };
      }
      return { valid: true };
    },
  }));

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <TextField
        fullWidth
        label="Event Title"
        value={data.title}
        onChange={(e) => update('title', e.target.value)}
        required
      />

      <TextField
        fullWidth
        multiline
        minRows={4}
        label="Description"
        value={data.description}
        onChange={(e) => update('description', e.target.value)}
        required
      />

      <FormControl fullWidth required>
        <InputLabel>Category</InputLabel>
        <Select
          value={data.category}
          onChange={(e) => update('category', e.target.value)}
          label="Category"
        >
          <MenuItem value="cooking-class">Cooking Class</MenuItem>
          <MenuItem value="food-festival">Food Festival</MenuItem>
          <MenuItem value="wine-tasting">Wine Tasting</MenuItem>
          <MenuItem value="restaurant-event">Restaurant Event</MenuItem>
          <MenuItem value="pop-up">Pop-up</MenuItem>
          <MenuItem value="networking">Networking</MenuItem>
          <MenuItem value="workshop">Workshop</MenuItem>
          <MenuItem value="other">Other</MenuItem>
        </Select>
      </FormControl>

      {/* Tags */}
      <Box>
        <TextField
          fullWidth
          label="Tags"
          value={tagInput}
          onChange={(e) => setTagInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), addTag())}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <Button size="small" onClick={addTag}>
                  Add
                </Button>
              </InputAdornment>
            ),
          }}
          placeholder="Add tags (press Enter)"
        />
        {data.tags.length > 0 && (
          <Box sx={{ mt: 1, display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
            {data.tags.map((tag) => (
              <Chip key={tag} label={tag} size="small" onDelete={() => removeTag(tag)} />
            ))}
          </Box>
        )}
      </Box>

      {/* Dates */}
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            type="datetime-local"
            label="Start Date & Time"
            value={data.startDate}
            onChange={(e) => update('startDate', e.target.value)}
            InputLabelProps={{ shrink: true }}
            required
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <CalendarToday fontSize="small" />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            type="datetime-local"
            label="End Date & Time"
            value={data.endDate}
            onChange={(e) => update('endDate', e.target.value)}
            InputLabelProps={{ shrink: true }}
            required
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <CalendarToday fontSize="small" />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
      </Grid>

      {/* Capacity */}
      <TextField
        fullWidth
        type="number"
        label="Event Capacity"
        value={data.capacity}
        onChange={(e) => update('capacity', e.target.value)}
        required
        inputProps={{ min: 1 }}
      />

      {/* Public + Status */}
      <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
        <FormControlLabel
          control={
            <Switch
              checked={data.isPublic}
              onChange={(e) => update('isPublic', e.target.checked)}
            />
          }
          label="Public Event"
        />
        <FormControl sx={{ minWidth: 150 }}>
          <InputLabel>Status</InputLabel>
          <Select
            value={data.status}
            label="Status"
            onChange={(e) => update('status', e.target.value as 'draft' | 'published')}
          >
            <MenuItem value="draft">Draft</MenuItem>
            <MenuItem value="published">Published</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </Box>
  );
});

export default EventBasicInfo;
