import React from 'react';
import {
  Box,
  TextField,
  Button,
  Paper,
  Typography,
  IconButton,
  Chip,
  Grid,
} from '@mui/material';
import { Add, Delete } from '@mui/icons-material';
import { IEventImage, ITicketTier } from '../../types/event.types';
import { BasicInfo } from './EventBasicInfo';
import { LocationInfo } from './EventVenue';

export interface ImagesStepRef {
  validate: () => { valid: boolean; error?: string };
}

interface Props {
  basicInfo: BasicInfo;
  location: LocationInfo;
  tickets: ITicketTier[];
  images: IEventImage[];
  onImagesChange: (updated: IEventImage[]) => void;
}

const EventImages = React.forwardRef<ImagesStepRef, Props>(
  ({ basicInfo, location, tickets, images, onImagesChange }, ref) => {
    const [imageUrl, setImageUrl] = React.useState('');
    const [imageAlt, setImageAlt] = React.useState('');

    const addImage = () => {
      if (!imageUrl.trim()) return;
      onImagesChange([
        ...images,
        { url: imageUrl.trim(), alt: imageAlt.trim() || undefined, isCover: images.length === 0 },
      ]);
      setImageUrl('');
      setImageAlt('');
    };

    const removeImage = (index: number) => {
      onImagesChange(images.filter((_, i) => i !== index));
    };

    const setCover = (index: number) => {
      onImagesChange(images.map((img, i) => ({ ...img, isCover: i === index })));
    };

    React.useImperativeHandle(ref, () => ({
      validate: () => ({ valid: true }), // no hard validation here
    }));

    return (
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
        <Typography variant="h6">Event Images</Typography>

        <Box sx={{ display: 'flex', gap: 1, alignItems: 'flex-end', flexWrap: 'wrap' }}>
          <TextField
            fullWidth
            label="Image URL"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            size="small"
          />
          <TextField
            label="Alt Text"
            value={imageAlt}
            onChange={(e) => setImageAlt(e.target.value)}
            size="small"
          />
          <Button
            startIcon={<Add />}
            variant="contained"
            onClick={addImage}
            disabled={!imageUrl.trim()}
          >
          Add
          </Button>
        </Box>

        {images.length > 0 && (
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            {images.map((img, index) => (
              <Paper
                key={index}
                sx={{ p: 2, display: 'flex', alignItems: 'center', gap: 2 }}
              >
                <Box sx={{ flex: 1 }}>
                  <Typography variant="body2" noWrap>
                    {img.url}
                  </Typography>
                  {img.alt && (
                    <Typography variant="caption" color="text.secondary">
                      Alt: {img.alt}
                    </Typography>
                  )}
                </Box>
                {img.isCover ? (
                  <Chip label="Cover" color="primary" size="small" />
                ) : (
                  <Button size="small" onClick={() => setCover(index)}>
                    Set as Cover
                  </Button>
                )}
                <IconButton size="small" onClick={() => removeImage(index)} color="error">
                  <Delete fontSize="small" />
                </IconButton>
              </Paper>
            ))}
          </Box>
        )}

        <Typography variant="h6" sx={{ mt: 2 }}>
          Review Your Event
        </Typography>
        <Paper sx={{ p: 2 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="subtitle2" color="text.secondary">
                Title
              </Typography>
              <Typography>{basicInfo.title}</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="subtitle2" color="text.secondary">
                Category
              </Typography>
              <Typography>{basicInfo.category}</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="subtitle2" color="text.secondary">
                Capacity
              </Typography>
              <Typography>{basicInfo.capacity || '-'} attendees</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="subtitle2" color="text.secondary">
                Start
              </Typography>
              <Typography>
                {basicInfo.startDate ? new Date(basicInfo.startDate).toLocaleString() : '-'}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="subtitle2" color="text.secondary">
                End
              </Typography>
              <Typography>
                {basicInfo.endDate ? new Date(basicInfo.endDate).toLocaleString() : '-'}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="subtitle2" color="text.secondary">
                Location
              </Typography>
              <Typography>
                {location.type === 'venue'
                  ? `${location.venueName || ''}${location.city ? `, ${location.city}` : ''}${
                      location.country ? `, ${location.country}` : ''
                    }`
                  : 'Online Event'}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="subtitle2" color="text.secondary">
                Ticket Tiers
              </Typography>
              <Typography>{tickets.length} tier(s)</Typography>
            </Grid>
          </Grid>
        </Paper>
      </Box>
    );
  }
);

export default EventImages;
