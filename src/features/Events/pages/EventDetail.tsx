import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
  Chip,
  Paper,
  Avatar,
  Divider,
  CircularProgress,
  Alert,
  Card,
  CardContent,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Stack,
} from '@mui/material';
import {
  CalendarToday,
  LocationOn,
  People,
  ConfirmationNumber,
  Share,
  Edit,
  Delete,
  AccessTime,
  Videocam,
  ArrowBack,
} from '@mui/icons-material';
import { formatDistanceToNow } from 'date-fns';
import { AppDispatch, RootState } from '../../../app/stores/stores';
import {
  fetchEventById,
  registerForEvent,
  cancelRegistration,
  deleteEvent,
} from '../redux/event.thunk';
import { clearSelectedEvent } from '../redux/event.slice';
import { IEventOrganizer, ITicketTier } from '../types/event.types';
import CreateEventDialog from '../components/CreateEventDialog';

const EventDetail: React.FC = () => {
  const { eventId } = useParams<{ eventId: string }>();
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const { selectedEvent, selectedEventLoading, error } = useSelector(
    (state: RootState) => state.events
  );
  const { user } = useSelector((state: RootState) => state.auth);

  const [selectedTicketTier, setSelectedTicketTier] = useState<string | null>(null);
  const [registerDialogOpen, setRegisterDialogOpen] = useState(false);
  const [cancelDialogOpen, setCancelDialogOpen] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [shareDialogOpen, setShareDialogOpen] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);

  useEffect(() => {
    if (eventId) {
      dispatch(fetchEventById(eventId));
    }

    return () => {
      dispatch(clearSelectedEvent());
    };
  }, [dispatch, eventId]);

  if (selectedEventLoading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh' }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error || !selectedEvent) {
    return (
      <Container maxWidth="md" sx={{ py: 4 }}>
        <Alert severity="error">{error || 'Event not found'}</Alert>
        <Button onClick={() => navigate('/events')} sx={{ mt: 2 }}>
          Back to Events
        </Button>
      </Container>
    );
  }

  const organizer = selectedEvent.organizer as IEventOrganizer;
  const isOrganizer = user?.id === (typeof selectedEvent.organizer === 'string' ? selectedEvent.organizer : organizer._id);
  const isOnline = selectedEvent.location.type === 'online';
  const isSoldOut = selectedEvent.attendeeCount >= selectedEvent.capacity;
  const isPastEvent = new Date(selectedEvent.endDate) < new Date();
  const coverImage = selectedEvent.images?.find((img) => img.isCover) || selectedEvent.images?.[0];

  // Check if user is registered
  const userRegistration = selectedEvent.attendees?.find(
    (attendee) => {
      const attendeeUserId = typeof attendee.user === 'string' ? attendee.user : attendee.user._id;
      return attendeeUserId === user?.id;
    }
  );
  const isRegistered = !!userRegistration;

  console.log('isRegistered::', isRegistered)

  const handleRegisterClick = (tierId: string) => {
    setSelectedTicketTier(tierId);
    setRegisterDialogOpen(true);
  };

  const handleRegisterConfirm = async () => {
    if (!selectedTicketTier) return;

    setIsRegistering(true);
    try {
      await dispatch(
        registerForEvent({ eventId: selectedEvent._id, ticketTierId: selectedTicketTier })
      ).unwrap();
      setRegisterDialogOpen(false);
      setSelectedTicketTier(null);
    } catch (error) {
      console.error('Failed to register:', error);
    } finally {
      setIsRegistering(false);
    }
  };

  const handleCancelRegistration = async () => {
    try {
      await dispatch(cancelRegistration(selectedEvent._id)).unwrap();
      setCancelDialogOpen(false);
    } catch (error) {
      console.error('Failed to cancel registration:', error);
    }
  };

  const handleDeleteEvent = async () => {
    try {
      await dispatch(deleteEvent(selectedEvent._id)).unwrap();
      setDeleteDialogOpen(false);
      navigate('/events');
    } catch (error) {
      console.error('Failed to delete event:', error);
    }
  };

  const isTicketAvailable = (tier: ITicketTier) => {
    const now = new Date();
    const salesStart = new Date(tier.salesStartDate);
    const salesEnd = new Date(tier.salesEndDate);
    const isInSalesPeriod = now >= salesStart && now <= salesEnd;
    const hasTicketsLeft = tier.quantity - tier.quantitySold > 0;
    return isInSalesPeriod && hasTicketsLeft && !isPastEvent;
  };

  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      {/* Back Button */}
      <Button
        startIcon={<ArrowBack />}
        onClick={() => navigate('/events')}
        sx={{ mb: 2 }}
      >
        Back to Events
      </Button>

      {/* Cover Image */}
      {coverImage && (
        <Box
          component="img"
          src={coverImage.url}
          alt={coverImage.alt || selectedEvent.title}
          sx={{
            width: '100%',
            maxHeight: 400,
            objectFit: 'cover',
            borderRadius: 2,
            mb: 3,
          }}
        />
      )}

      <Grid container spacing={3}>
        {/* Main Content */}
        <Grid item xs={12} md={8}>
          {/* Title and Status */}
          <Box sx={{ mb: 3 }}>
            <Box sx={{ display: 'flex', gap: 1, mb: 2, flexWrap: 'wrap' }}>
              <Chip label={selectedEvent.status} color="primary" />
              <Chip label={selectedEvent.category} variant="outlined" />
              {isSoldOut && <Chip label="Sold Out" color="error" />}
              {isPastEvent && <Chip label="Past Event" />}
              {isOnline && <Chip icon={<Videocam />} label="Online" color="info" />}
            </Box>

            <Typography variant="h3" gutterBottom sx={{ fontWeight: 700 }}>
              {selectedEvent.title}
            </Typography>

            {/* Organizer */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mt: 2 }}>
              <Avatar
                src={organizer.avatar}
                alt={`${organizer.firstName} ${organizer.lastName}`}
                sx={{ width: 48, height: 48 }}
              >
                {organizer.firstName?.[0]}{organizer.lastName?.[0]}
              </Avatar>
              <Box>
                <Typography variant="caption" color="text.secondary">
                  Organized by
                </Typography>
                <Typography variant="body1" sx={{ fontWeight: 600 }}>
                  {organizer.firstName} {organizer.lastName}
                </Typography>
              </Box>
            </Box>
          </Box>

          <Divider sx={{ my: 3 }} />

          {/* Date and Time */}
          <Box sx={{ mb: 3 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
              <CalendarToday color="primary" />
              <Typography variant="h6">Date and Time</Typography>
            </Box>
            <Typography variant="body1" sx={{ ml: 4 }}>
              <strong>Start:</strong>{' '}
              {new Date(selectedEvent.startDate).toLocaleString('en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: 'numeric',
                minute: '2-digit',
              })}
            </Typography>
            <Typography variant="body1" sx={{ ml: 4 }}>
              <strong>End:</strong>{' '}
              {new Date(selectedEvent.endDate).toLocaleString('en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: 'numeric',
                minute: '2-digit',
              })}
            </Typography>
          </Box>

          <Divider sx={{ my: 3 }} />

          {/* Location */}
          <Box sx={{ mb: 3 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
              <LocationOn color="primary" />
              <Typography variant="h6">Location</Typography>
            </Box>
            {isOnline ? (
              <Typography variant="body1" sx={{ ml: 4 }}>
                Online Event
                {isRegistered && selectedEvent.location.onlineUrl && (
                  <>
                    <br />
                    <a href={selectedEvent.location.onlineUrl} target="_blank" rel="noopener noreferrer">
                      {selectedEvent.location.onlineUrl}
                    </a>
                  </>
                )}
              </Typography>
            ) : (
              <Box sx={{ ml: 4 }}>
                <Typography variant="body1">
                  <strong>{selectedEvent.location.venueName}</strong>
                </Typography>
                {selectedEvent.location.address && (
                  <Typography variant="body2">{selectedEvent.location.address}</Typography>
                )}
                <Typography variant="body2">
                  {selectedEvent.location.city}, {selectedEvent.location.state} {selectedEvent.location.postalCode}
                </Typography>
                <Typography variant="body2">{selectedEvent.location.country}</Typography>
              </Box>
            )}
          </Box>

          <Divider sx={{ my: 3 }} />

          {/* Description */}
          <Box sx={{ mb: 3 }}>
            <Typography variant="h6" gutterBottom>
              About This Event
            </Typography>
            <Typography variant="body1" sx={{ whiteSpace: 'pre-line' }}>
              {selectedEvent.description}
            </Typography>
          </Box>

          {/* Tags */}
          {selectedEvent.tags && selectedEvent.tags.length > 0 && (
            <Box sx={{ mb: 3 }}>
              <Typography variant="h6" gutterBottom>
                Tags
              </Typography>
              <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                {selectedEvent.tags.map((tag, index) => (
                  <Chip key={index} label={tag} variant="outlined" />
                ))}
              </Box>
            </Box>
          )}

          {/* Additional Images */}
          {selectedEvent.images && selectedEvent.images.length > 1 && (
            <Box sx={{ mb: 3 }}>
              <Typography variant="h6" gutterBottom>
                Gallery
              </Typography>
              <Grid container spacing={2}>
                {selectedEvent.images.filter((img) => !img.isCover).map((img, index) => (
                  <Grid item xs={6} sm={4} key={index}>
                    <Box
                      component="img"
                      src={img.url}
                      alt={img.alt || `Event image ${index + 1}`}
                      sx={{
                        width: '100%',
                        height: 150,
                        objectFit: 'cover',
                        borderRadius: 1,
                      }}
                    />
                  </Grid>
                ))}
              </Grid>
            </Box>
          )}
        </Grid>

        {/* Sidebar */}
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 3, position: 'sticky', top: 20 }}>
            {/* Registration Status */}
            {isRegistered && (
              <Alert severity="success" sx={{ mb: 2 }}>
                You're registered for this event!
              </Alert>
            )}

            {/* Capacity */}
            <Box sx={{ mb: 3 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                <People color="action" />
                <Typography variant="body2" color="text.secondary">
                  {selectedEvent.attendeeCount} / {selectedEvent.capacity} attendees
                </Typography>
              </Box>
            </Box>

            {/* Ticket Tiers */}
            <Typography variant="h6" gutterBottom>
              Tickets
            </Typography>
            <Stack spacing={2} sx={{ mb: 3 }}>
              {selectedEvent.ticketTiers?.map((tier) => {
                const available = isTicketAvailable(tier);
                const remaining = tier.quantity - tier.quantitySold;

                return (
                  <Card key={tier._id} variant="outlined">
                    <CardContent>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', mb: 1 }}>
                        <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                          {tier.name}
                        </Typography>
                        <Typography variant="h6" color="primary">
                          {tier.price === 0 ? 'Free' : `$${tier.price.toFixed(2)}`}
                        </Typography>
                      </Box>
                      {tier.description && (
                        <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                          {tier.description}
                        </Typography>
                      )}
                      <Typography variant="caption" color="text.secondary">
                        {remaining > 0 ? `${remaining} remaining` : 'Sold out'}
                      </Typography>
                      {!isRegistered && available && !isOrganizer && user && (
                        <Button
                          variant="contained"
                          fullWidth
                          sx={{ mt: 2 }}
                          onClick={() => handleRegisterClick(tier._id || '')}
                          disabled={!available}
                        >
                          Register
                        </Button>
                      )}
                    </CardContent>
                  </Card>
                );
              })}
            </Stack>

            {/* Actions */}
            <Stack spacing={1}>
              {isOrganizer ? (
                <>
                  <Button
                    variant="contained"
                    startIcon={<Edit />}
                    fullWidth
                    onClick={() => setEditDialogOpen(true)}
                  >
                    Edit Event
                  </Button>
                  <Button
                    variant="outlined"
                    startIcon={<Delete />}
                    fullWidth
                    color="error"
                    onClick={() => setDeleteDialogOpen(true)}
                  >
                    Delete Event
                  </Button>
                </>
              ) : isRegistered ? (
                <Button
                  variant="outlined"
                  color="error"
                  fullWidth
                  onClick={() => setCancelDialogOpen(true)}
                >
                  Cancel Registration
                </Button>
              ) : null}

              <Button
                variant="outlined"
                startIcon={<Share />}
                fullWidth
                onClick={() => setShareDialogOpen(true)}
              >
                Share Event
              </Button>
            </Stack>
          </Paper>
        </Grid>
      </Grid>

      {/* Register Dialog */}
      <Dialog open={registerDialogOpen} onClose={() => setRegisterDialogOpen(false)}>
        <DialogTitle>Confirm Registration</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to register for this event?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setRegisterDialogOpen(false)} disabled={isRegistering}>
            Cancel
          </Button>
          <Button onClick={handleRegisterConfirm} variant="contained" disabled={isRegistering}>
            {isRegistering ? 'Registering...' : 'Confirm'}
          </Button>
        </DialogActions>
      </Dialog>

      {/* Cancel Registration Dialog */}
      <Dialog open={cancelDialogOpen} onClose={() => setCancelDialogOpen(false)}>
        <DialogTitle>Cancel Registration</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to cancel your registration for this event?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setCancelDialogOpen(false)}>No, Keep It</Button>
          <Button onClick={handleCancelRegistration} color="error" variant="contained">
            Yes, Cancel
          </Button>
        </DialogActions>
      </Dialog>

      {/* Delete Event Dialog */}
      <Dialog open={deleteDialogOpen} onClose={() => setDeleteDialogOpen(false)}>
        <DialogTitle>Delete Event</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete this event? This action cannot be undone and all registrations will be
            cancelled.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDeleteDialogOpen(false)}>Cancel</Button>
          <Button onClick={handleDeleteEvent} color="error" variant="contained">
            Delete
          </Button>
        </DialogActions>
      </Dialog>

      {/* Edit Dialog */}
      {editDialogOpen && (
        <CreateEventDialog
          open={editDialogOpen}
          onClose={() => setEditDialogOpen(false)}
          editEvent={selectedEvent}
        />
      )}

      {/* Share Dialog */}
      <Dialog open={shareDialogOpen} onClose={() => setShareDialogOpen(false)}>
        <DialogTitle>Share Event</DialogTitle>
        <DialogContent>
          <DialogContentText sx={{ mb: 2 }}>
            Share this event with others
          </DialogContentText>
          <Stack spacing={2}>
            <Button
              variant="outlined"
              onClick={() => {
                navigator.clipboard.writeText(`${window.location.origin}/events/${selectedEvent._id}`);
              }}
            >
              Copy Link
            </Button>
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setShareDialogOpen(false)}>Close</Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default EventDetail;
