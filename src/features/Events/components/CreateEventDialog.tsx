import React, { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Box,
  IconButton,
  Typography,
  Stepper,
  Step,
  StepLabel,
  Alert,
} from '@mui/material';
import { Close } from '@mui/icons-material';
import { AppDispatch } from '../../../app/stores/stores';
import { createEvent, updateEvent } from '../redux/event.thunk';
import { IEvent, IEventLocation, ITicketTier, IEventImage } from '../types/event.types';

import EventBasicInfo, { BasicInfo, BasicInfoStepRef } from './EventCreation/EventBasicInfo';
import EventVenue, { LocationInfo, VenueStepRef } from './EventCreation/EventVenue';
import EventTickets, { TicketsStepRef } from './EventCreation/EventTickets';
import EventImages, { ImagesStepRef } from './EventCreation/EventImages';

interface CreateEventDialogProps {
  open: boolean;
  onClose: () => void;
  editEvent?: IEvent;
}

const steps = ['Basic Info', 'Location', 'Tickets', 'Images & Review'];

const CreateEventDialog: React.FC<CreateEventDialogProps> = ({ open, onClose, editEvent }) => {
  const dispatch = useDispatch<AppDispatch>();

  const [activeStep, setActiveStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // step state
  const [basicInfo, setBasicInfo] = useState<BasicInfo>({
    title: '',
    description: '',
    category: '',
    tags: [],
    startDate: '',
    endDate: '',
    capacity: '',
    isPublic: true,
    status: 'draft',
  });

  const [location, setLocation] = useState<LocationInfo>({
    type: 'venue',
    venueName: '',
    address: '',
    city: '',
    state: '',
    country: '',
    postalCode: '',
    onlineUrl: '',
  });

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

  const [images, setImages] = useState<IEventImage[]>([]);

  // refs for validation
  const basicInfoRef = useRef<BasicInfoStepRef | null>(null);
  const venueRef = useRef<VenueStepRef | null>(null);
  const ticketsRef = useRef<TicketsStepRef | null>(null);
  const imagesRef = useRef<ImagesStepRef | null>(null);

  // populate edit values
  useEffect(() => {
    if (editEvent) {
      setBasicInfo({
        title: editEvent.title,
        description: editEvent.description,
        category: editEvent.category,
        tags: editEvent.tags || [],
        startDate:
          typeof editEvent.startDate === 'string'
            ? editEvent.startDate
            : new Date(editEvent.startDate).toISOString().slice(0, 16),
        endDate:
          typeof editEvent.endDate === 'string'
            ? editEvent.endDate
            : new Date(editEvent.endDate).toISOString().slice(0, 16),
        capacity: editEvent.capacity.toString(),
        isPublic: editEvent.isPublic,
        status: editEvent.status === 'published' ? 'published' : 'draft',
      });

      setLocation({
        type: editEvent.location.type,
        venueName: editEvent.location.venueName || '',
        address: editEvent.location.address || '',
        city: editEvent.location.city || '',
        state: editEvent.location.state || '',
        country: editEvent.location.country || '',
        postalCode: editEvent.location.postalCode || '',
        onlineUrl: editEvent.location.onlineUrl || '',
      });

      setTicketTiers(
        editEvent.ticketTiers && editEvent.ticketTiers.length > 0
          ? editEvent.ticketTiers
          : [
              {
                name: 'General Admission',
                description: '',
                price: 0,
                quantity: 0,
                quantitySold: 0,
                salesStartDate: basicInfo.startDate,
                salesEndDate: basicInfo.endDate,
              },
            ]
      );

      setImages(editEvent.images || []);
    } else {
      // reset when creating
      resetForm();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [editEvent]);

  const resetForm = () => {
    setActiveStep(0);
    setBasicInfo({
      title: '',
      description: '',
      category: '',
      tags: [],
      startDate: '',
      endDate: '',
      capacity: '',
      isPublic: true,
      status: 'draft',
    });
    setLocation({
      type: 'venue',
      venueName: '',
      address: '',
      city: '',
      state: '',
      country: '',
      postalCode: '',
      onlineUrl: '',
    });
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
    setError(null);
  };

  const handleNext = () => {
    setError(null);
    let result: { valid: boolean; error?: string } | undefined;

    if (activeStep === 0 && basicInfoRef.current) {
      result = basicInfoRef.current.validate();
    } else if (activeStep === 1 && venueRef.current) {
      result = venueRef.current.validate();
    } else if (activeStep === 2 && ticketsRef.current) {
      result = ticketsRef.current.validate();
    }

    if (result && !result.valid) {
      setError(result.error || 'Please fix the errors in this step.');
      return;
    }

    setActiveStep((prev) => prev + 1);
  };

  const handleBack = () => {
    setError(null);
    setActiveStep((prev) => prev - 1);
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setError(null);

    const locationPayload: IEventLocation = {
      type: location.type,
      ...(location.type === 'venue'
        ? {
            venueName: location.venueName,
            address: location.address,
            city: location.city,
            state: location.state,
            country: location.country,
            postalCode: location.postalCode,
          }
        : {
            onlineUrl: location.onlineUrl,
          }),
    };

    const eventData = {
      title: basicInfo.title.trim(),
      description: basicInfo.description.trim(),
      category: basicInfo.category,
      tags: basicInfo.tags,
      startDate: basicInfo.startDate,
      endDate: basicInfo.endDate,
      location: locationPayload,
      images,
      ticketTiers,
      capacity: parseInt(basicInfo.capacity, 10),
      status: basicInfo.status,
      isPublic: basicInfo.isPublic,
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
    resetForm();
    onClose();
  };

  const renderStepContent = () => {
    switch (activeStep) {
      case 0:
        return (
          <EventBasicInfo
            ref={basicInfoRef}
            data={basicInfo}
            onChange={setBasicInfo}
          />
        );
      case 1:
        return (
          <EventVenue
            ref={venueRef}
            data={location}
            onChange={setLocation}
          />
        );
      case 2:
        return (
          <EventTickets
            ref={ticketsRef}
            data={ticketTiers}
            onChange={setTicketTiers}
            capacity={basicInfo.capacity}
          />
        );
      case 3:
        return (
          <EventImages
            ref={imagesRef}
            basicInfo={basicInfo}
            location={location}
            tickets={ticketTiers}
            images={images}
            onImagesChange={setImages}
          />
        );
      default:
        return null;
    }
  };

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
      <DialogTitle
        sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
      >
        <Typography variant="h6">
          {editEvent ? 'Edit Event' : 'Create Event'}
        </Typography>
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
          <Button variant="contained" onClick={handleNext} disabled={isSubmitting}>
            Next
          </Button>
        ) : (
          <Button
            variant="contained"
            onClick={handleSubmit}
            disabled={isSubmitting}
          >
            {isSubmitting
              ? editEvent
                ? 'Updating...'
                : 'Creating...'
              : editEvent
              ? 'Update Event'
              : 'Create Event'}
          </Button>
        )}
      </DialogActions>
    </Dialog>
  );
};

export default CreateEventDialog;
