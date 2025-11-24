import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Box,
  IconButton,
  Typography,
  Stepper,
  Step,
  StepLabel,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Chip,
  InputAdornment,
  FormControlLabel,
  Switch,
  Grid,
  Paper,
  Alert,
} from '@mui/material';
import {
  Close,
  Add,
  Delete,
  Image as ImageIcon,
  LocationOn,
  Videocam,
  CalendarToday,
  ConfirmationNumber,
} from '@mui/icons-material';
import { AppDispatch } from '../../../app/stores/stores';
import { createEvent, updateEvent } from '../redux/event.thunk';
import {
  IEvent,
  IEventLocation,
  ITicketTier,
  IEventImage,
} from '../types/event.types';

interface CreateEventDialogProps {
  open: boolean;
  onClose: () => void;
  editEvent?: IEvent;
}

const steps = ['Basic Info', 'Location', 'Tickets', 'Images & Review'];

const CreateEventDialog: React.FC<CreateEventDialogProps> = ({
  open,
  onClose,
  editEvent,
}) => {
  const dispatch = useDispatch<AppDispatch>();
  const [activeStep, setActiveStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Basic Info State
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [tags, setTags] = useState<string[]>([]);
  const [tagInput, setTagInput] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [capacity, setCapacity] = useState('');
  const [isPublic, setIsPublic] = useState(true);
  const [status, setStatus] = useState<'draft' | 'published'>('draft');

  // Location State
  const [locationType, setLocationType] = useState<'venue' | 'online'>('venue');
  const [venueName, setVenueName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [country, setCountry] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [onlineUrl, setOnlineUrl] = useState('');

  // Ticket Tiers State
  const [ticketTiers, setTicketTiers] = useState<ITicketTier[]>([
    {
      name: 'General Admission',
      description: '',
      price: 0,
      quantity: 0,
      quantitySold: 0,
      salesStartDate: '',
      salesEndDate: '',
    },
  ]);

  // Images State
  const [images, setImages] = useState<IEventImage[]>([]);
  const [imageUrl, setImageUrl] = useState('');
  const [imageAlt, setImageAlt] = useState('');

  // Populate fields when editing
  useEffect(() => {
    if (editEvent) {
      setTitle(editEvent.title);
      setDescription(editEvent.description);
      setCategory(editEvent.category);
      setTags(editEvent.tags || []);
      setStartDate(
        typeof editEvent.startDate === 'string'
          ? editEvent.startDate
          : new Date(editEvent.startDate).toISOString().slice(0, 16)
      );
      setEndDate(
        typeof editEvent.endDate === 'string'
          ? editEvent.endDate
          : new Date(editEvent.endDate).toISOString().slice(0, 16)
      );
      setCapacity(editEvent.capacity.toString());
      setIsPublic(editEvent.isPublic);
      setStatus(editEvent.status === 'published' ? 'published' : 'draft');

      // Location
      setLocationType(editEvent.location.type);
      setVenueName(editEvent.location.venueName || '');
      setAddress(editEvent.location.address || '');
      setCity(editEvent.location.city || '');
      setState(editEvent.location.state || '');
      setCountry(editEvent.location.country || '');
      setPostalCode(editEvent.location.postalCode || '');
      setOnlineUrl(editEvent.location.onlineUrl || '');

      // Tickets
      setTicketTiers(editEvent.ticketTiers || []);

      // Images
      setImages(editEvent.images || []);
    }
  }, [editEvent]);

  const handleNext = () => {
    // Validate current step
    if (activeStep === 0) {
      if (!title.trim() || !description.trim() || !category || !startDate || !endDate || !capacity) {
        setError('Please fill in all required fields');
        return;
      }
      if (new Date(startDate) >= new Date(endDate)) {
        setError('End date must be after start date');
        return;
      }
    } else if (activeStep === 1) {
      if (locationType === 'venue') {
        if (!venueName.trim() || !city.trim() || !country.trim()) {
          setError('Please fill in all required location fields');
          return;
        }
      } else {
        if (!onlineUrl.trim()) {
          setError('Please provide an online event URL');
          return;
        }
      }
    } else if (activeStep === 2) {
      const hasInvalidTier = ticketTiers.some(
        (tier) => !tier.name.trim() || tier.quantity <= 0 || !tier.salesStartDate || !tier.salesEndDate
      );
      if (hasInvalidTier) {
        setError('Please complete all ticket tier information');
        return;
      }
    }

    setError(null);
    setActiveStep((prev) => prev + 1);
  };

  const handleBack = () => {
    setError(null);
    setActiveStep((prev) => prev - 1);
  };

  const handleAddTag = () => {
    if (tagInput.trim() && !tags.includes(tagInput.trim())) {
      setTags([...tags, tagInput.trim()]);
      setTagInput('');
    }
  };

  const handleRemoveTag = (tagToRemove: string) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  const handleAddTicketTier = () => {
    setTicketTiers([
      ...ticketTiers,
      {
        name: '',
        description: '',
        price: 0,
        quantity: 0,
        quantitySold: 0,
        salesStartDate: startDate,
        salesEndDate: endDate,
      },
    ]);
  };

  const handleRemoveTicketTier = (index: number) => {
    if (ticketTiers.length > 1) {
      setTicketTiers(ticketTiers.filter((_, i) => i !== index));
    }
  };

  const handleUpdateTicketTier = (index: number, field: keyof ITicketTier, value: any) => {
    const updated = [...ticketTiers];
    updated[index] = { ...updated[index], [field]: value };
    setTicketTiers(updated);
  };

  const handleAddImage = () => {
    if (imageUrl.trim()) {
      setImages([
        ...images,
        {
          url: imageUrl.trim(),
          alt: imageAlt.trim() || undefined,
          isCover: images.length === 0,
        },
      ]);
      setImageUrl('');
      setImageAlt('');
    }
  };

  const handleRemoveImage = (index: number) => {
    setImages(images.filter((_, i) => i !== index));
  };

  const handleSetCoverImage = (index: number) => {
    setImages(images.map((img, i) => ({ ...img, isCover: i === index })));
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setError(null);

    const location: IEventLocation = {
      type: locationType,
      ...(locationType === 'venue'
        ? {
            venueName,
            address,
            city,
            state,
            country,
            postalCode,
          }
        : {
            onlineUrl,
          }),
    };

    const eventData = {
      title: title.trim(),
      description: description.trim(),
      category,
      tags,
      startDate,
      endDate,
      location,
      images,
      ticketTiers,
      capacity: parseInt(capacity),
      status,
      isPublic,
    };

    try {
      if (editEvent) {
        await dispatch(
          updateEvent({
            eventId: editEvent._id,
            data: eventData,
          })
        ).unwrap();
      } else {
        await dispatch(createEvent(eventData)).unwrap();
      }
      handleClose();
    } catch (err: any) {
      setError(err || 'Failed to save event');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setActiveStep(0);
    setTitle('');
    setDescription('');
    setCategory('');
    setTags([]);
    setTagInput('');
    setStartDate('');
    setEndDate('');
    setCapacity('');
    setIsPublic(true);
    setStatus('draft');
    setLocationType('venue');
    setVenueName('');
    setAddress('');
    setCity('');
    setState('');
    setCountry('');
    setPostalCode('');
    setOnlineUrl('');
    setTicketTiers([
      {
        name: 'General Admission',
        description: '',
        price: 0,
        quantity: 0,
        quantitySold: 0,
        salesStartDate: '',
        salesEndDate: '',
      },
    ]);
    setImages([]);
    setImageUrl('');
    setImageAlt('');
    setError(null);
    onClose();
  };

  const renderStepContent = () => {
    switch (activeStep) {
      case 0:
        return (
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <TextField
              fullWidth
              label="Event Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Give your event a name"
              required
              inputProps={{ maxLength: 200 }}
              helperText={`${title.length}/200`}
            />

            <TextField
              fullWidth
              multiline
              minRows={4}
              label="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Describe what makes your event unique..."
              required
              inputProps={{ maxLength: 5000 }}
              helperText={`${description.length}/5000`}
            />

            <FormControl fullWidth required>
              <InputLabel>Category</InputLabel>
              <Select value={category} onChange={(e) => setCategory(e.target.value)} label="Category">
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

            <Box>
              <TextField
                fullWidth
                size="small"
                label="Tags"
                value={tagInput}
                onChange={(e) => setTagInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleAddTag()}
                placeholder="Add tags (press Enter)"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <Button size="small" onClick={handleAddTag}>
                        Add
                      </Button>
                    </InputAdornment>
                  ),
                }}
              />
              {tags.length > 0 && (
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mt: 1 }}>
                  {tags.map((tag, index) => (
                    <Chip
                      key={index}
                      label={tag}
                      size="small"
                      onDelete={() => handleRemoveTag(tag)}
                      variant="outlined"
                    />
                  ))}
                </Box>
              )}
            </Box>

            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  type="datetime-local"
                  label="Start Date & Time"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
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
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
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

            <TextField
              fullWidth
              type="number"
              label="Event Capacity"
              value={capacity}
              onChange={(e) => setCapacity(e.target.value)}
              placeholder="Maximum number of attendees"
              required
              inputProps={{ min: 1 }}
            />

            <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
              <FormControlLabel
                control={<Switch checked={isPublic} onChange={(e) => setIsPublic(e.target.checked)} />}
                label="Public Event"
              />
              <FormControl sx={{ minWidth: 150 }}>
                <InputLabel>Status</InputLabel>
                <Select value={status} onChange={(e) => setStatus(e.target.value as 'draft' | 'published')} label="Status">
                  <MenuItem value="draft">Draft</MenuItem>
                  <MenuItem value="published">Published</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Box>
        );

      case 1:
        return (
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <FormControl fullWidth>
              <InputLabel>Location Type</InputLabel>
              <Select
                value={locationType}
                onChange={(e) => setLocationType(e.target.value as 'venue' | 'online')}
                label="Location Type"
              >
                <MenuItem value="venue">
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <LocationOn fontSize="small" />
                    Venue
                  </Box>
                </MenuItem>
                <MenuItem value="online">
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Videocam fontSize="small" />
                    Online Event
                  </Box>
                </MenuItem>
              </Select>
            </FormControl>

            {locationType === 'venue' ? (
              <>
                <TextField
                  fullWidth
                  label="Venue Name"
                  value={venueName}
                  onChange={(e) => setVenueName(e.target.value)}
                  placeholder="e.g., Grand Hall, Central Park"
                  required
                />
                <TextField
                  fullWidth
                  label="Address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Street address"
                />
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="City"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      required
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="State/Province"
                      value={state}
                      onChange={(e) => setState(e.target.value)}
                    />
                  </Grid>
                </Grid>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Country"
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                      required
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Postal Code"
                      value={postalCode}
                      onChange={(e) => setPostalCode(e.target.value)}
                    />
                  </Grid>
                </Grid>
              </>
            ) : (
              <TextField
                fullWidth
                label="Online Event URL"
                value={onlineUrl}
                onChange={(e) => setOnlineUrl(e.target.value)}
                placeholder="https://zoom.us/j/..."
                required
                helperText="Provide the link for attendees to join the online event"
              />
            )}
          </Box>
        );

      case 2:
        return (
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Typography variant="h6">Ticket Tiers</Typography>
              <Button startIcon={<Add />} onClick={handleAddTicketTier} variant="outlined" size="small">
                Add Tier
              </Button>
            </Box>

            {ticketTiers.map((tier, index) => (
              <Paper key={index} sx={{ p: 2, bgcolor: '#f9f9f9' }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                  <Typography variant="subtitle1">
                    <ConfirmationNumber fontSize="small" sx={{ mr: 1, verticalAlign: 'middle' }} />
                    Tier {index + 1}
                  </Typography>
                  {ticketTiers.length > 1 && (
                    <IconButton size="small" onClick={() => handleRemoveTicketTier(index)} color="error">
                      <Delete fontSize="small" />
                    </IconButton>
                  )}
                </Box>

                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Tier Name"
                      value={tier.name}
                      onChange={(e) => handleUpdateTicketTier(index, 'name', e.target.value)}
                      placeholder="e.g., General Admission, VIP"
                      required
                      size="small"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      type="number"
                      label="Price"
                      value={tier.price}
                      onChange={(e) => handleUpdateTicketTier(index, 'price', parseFloat(e.target.value) || 0)}
                      InputProps={{
                        startAdornment: <InputAdornment position="start">$</InputAdornment>,
                      }}
                      required
                      size="small"
                      inputProps={{ min: 0, step: 0.01 }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Description"
                      value={tier.description}
                      onChange={(e) => handleUpdateTicketTier(index, 'description', e.target.value)}
                      placeholder="What's included in this tier?"
                      size="small"
                      multiline
                      rows={2}
                    />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <TextField
                      fullWidth
                      type="number"
                      label="Quantity"
                      value={tier.quantity}
                      onChange={(e) => handleUpdateTicketTier(index, 'quantity', parseInt(e.target.value) || 0)}
                      required
                      size="small"
                      inputProps={{ min: 1 }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <TextField
                      fullWidth
                      type="datetime-local"
                      label="Sales Start"
                      value={tier.salesStartDate}
                      onChange={(e) => handleUpdateTicketTier(index, 'salesStartDate', e.target.value)}
                      InputLabelProps={{ shrink: true }}
                      required
                      size="small"
                    />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <TextField
                      fullWidth
                      type="datetime-local"
                      label="Sales End"
                      value={tier.salesEndDate}
                      onChange={(e) => handleUpdateTicketTier(index, 'salesEndDate', e.target.value)}
                      InputLabelProps={{ shrink: true }}
                      required
                      size="small"
                    />
                  </Grid>
                </Grid>
              </Paper>
            ))}
          </Box>
        );

      case 3:
        return (
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Typography variant="h6">Event Images</Typography>

            <Box sx={{ display: 'flex', gap: 1, alignItems: 'flex-end' }}>
              <TextField
                fullWidth
                label="Image URL"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                placeholder="https://example.com/image.jpg"
                size="small"
              />
              <TextField
                sx={{ maxWidth: 200 }}
                label="Alt Text"
                value={imageAlt}
                onChange={(e) => setImageAlt(e.target.value)}
                placeholder="Optional"
                size="small"
              />
              <Button startIcon={<Add />} onClick={handleAddImage} variant="contained" disabled={!imageUrl.trim()}>
                Add
              </Button>
            </Box>

            {images.length > 0 && (
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                {images.map((img, index) => (
                  <Paper key={index} sx={{ p: 2, display: 'flex', alignItems: 'center', gap: 2 }}>
                    <ImageIcon />
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
                    {img.isCover && (
                      <Chip label="Cover" size="small" color="primary" />
                    )}
                    {!img.isCover && (
                      <Button size="small" onClick={() => handleSetCoverImage(index)}>
                        Set as Cover
                      </Button>
                    )}
                    <IconButton size="small" onClick={() => handleRemoveImage(index)} color="error">
                      <Delete fontSize="small" />
                    </IconButton>
                  </Paper>
                ))}
              </Box>
            )}

            <Typography variant="h6" sx={{ mt: 2 }}>Review Your Event</Typography>
            <Paper sx={{ p: 2, bgcolor: '#f9f9f9' }}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Typography variant="subtitle2" color="text.secondary">Title</Typography>
                  <Typography>{title}</Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant="subtitle2" color="text.secondary">Category</Typography>
                  <Typography>{category}</Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant="subtitle2" color="text.secondary">Capacity</Typography>
                  <Typography>{capacity} attendees</Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant="subtitle2" color="text.secondary">Start</Typography>
                  <Typography>{new Date(startDate).toLocaleString()}</Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant="subtitle2" color="text.secondary">End</Typography>
                  <Typography>{new Date(endDate).toLocaleString()}</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="subtitle2" color="text.secondary">Location</Typography>
                  <Typography>
                    {locationType === 'venue'
                      ? `${venueName}, ${city}, ${country}`
                      : 'Online Event'}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="subtitle2" color="text.secondary">Ticket Tiers</Typography>
                  <Typography>{ticketTiers.length} tier(s)</Typography>
                </Grid>
              </Grid>
            </Paper>
          </Box>
        );

      default:
        return null;
    }
  };

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
      <DialogTitle sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Typography variant="h6">{editEvent ? 'Edit Event' : 'Create Event'}</Typography>
        <IconButton size="small" onClick={handleClose} disabled={isSubmitting}>
          <Close />
        </IconButton>
      </DialogTitle>

      <DialogContent dividers>
        <Stepper activeStep={activeStep} sx={{ mb: 3 }}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>

        {error && (
          <Alert severity="error" sx={{ mb: 2 }} onClose={() => setError(null)}>
            {error}
          </Alert>
        )}

        {renderStepContent()}
      </DialogContent>

      <DialogActions sx={{ p: 2 }}>
        <Button onClick={handleClose} disabled={isSubmitting}>
          Cancel
        </Button>
        <Box sx={{ flex: 1 }} />
        {activeStep > 0 && (
          <Button onClick={handleBack} disabled={isSubmitting}>
            Back
          </Button>
        )}
        {activeStep < steps.length - 1 ? (
          <Button variant="contained" onClick={handleNext}>
            Next
          </Button>
        ) : (
          <Button variant="contained" onClick={handleSubmit} disabled={isSubmitting}>
            {isSubmitting ? (editEvent ? 'Updating...' : 'Creating...') : (editEvent ? 'Update Event' : 'Create Event')}
          </Button>
        )}
      </DialogActions>
    </Dialog>
  );
};

export default CreateEventDialog;
