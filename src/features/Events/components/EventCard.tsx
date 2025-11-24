import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Chip,
  IconButton,
  Menu,
  MenuItem,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Avatar,
  Stack,
} from '@mui/material';
import {
  MoreVert,
  CalendarToday,
  LocationOn,
  People,
  ConfirmationNumber,
  Edit,
  Delete,
  Share,
  Videocam,
} from '@mui/icons-material';
import { formatDistanceToNow } from 'date-fns';
import { AppDispatch, RootState } from '../../../app/stores/stores';
import { IEvent, IEventOrganizer } from '../types/event.types';
import { deleteEvent } from '../redux/event.thunk';
import CreateEventDialog from './CreateEventDialog';

interface EventCardProps {
  event: IEvent;
  showActions?: boolean;
  showStatus?: boolean;
}

const EventCard: React.FC<EventCardProps> = ({ event, showActions = false, showStatus=false }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { user } = useSelector((state: RootState) => state.auth);

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [shareDialogOpen, setShareDialogOpen] = useState(false);

  const organizer = event.organizer as IEventOrganizer;
  const isOrganizer = user?.id === (typeof event.organizer === 'string' ? event.organizer : organizer?._id);
  const coverImage = event.images?.find((img) => img.isCover) || event.images?.[0];
  const isOnline = event?.location?.type === 'online';
  const isSoldOut = event.attendeeCount >= event.capacity;
  const isPastEvent = new Date(event.endDate) < new Date();

  // Get the cheapest ticket
  const cheapestTicket = event.ticketTiers?.reduce((min, tier) =>
    tier.price < min.price ? tier : min
  , event.ticketTiers[0]);

  const handleMenuOpen = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    setAnchorEl(e.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleEdit = (e: React.MouseEvent) => {
    e.stopPropagation();
    handleMenuClose();
    setEditDialogOpen(true);
  };

  const handleDeleteClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    handleMenuClose();
    setDeleteDialogOpen(true);
  };

  const handleDeleteConfirm = async () => {
    try {
      await dispatch(deleteEvent(event._id)).unwrap();
      setDeleteDialogOpen(false);
    } catch (error) {
      console.error('Failed to delete event:', error);
    }
  };

  const handleShare = (e: React.MouseEvent) => {
    e.stopPropagation();
    handleMenuClose();
    setShareDialogOpen(true);
  };

  const handleCardClick = () => {
    navigate(`/events/${event._id}`);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'published':
        return 'success';
      case 'draft':
        return 'default';
      case 'cancelled':
        return 'error';
      case 'completed':
        return 'info';
      default:
        return 'default';
    }
  };

  return (
    <>
      <Card
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          cursor: 'pointer',
          transition: 'transform 0.2s, box-shadow 0.2s',
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: 4,
          },
        }}
        onClick={handleCardClick}
      >
        {/* Event Image */}
        {coverImage ? (
          <CardMedia
            component="img"
            height="200"
            image={coverImage.url}
            alt={coverImage.alt || event.title}
            sx={{ objectFit: 'cover' }}
          />
        ) : (
          <Box
            sx={{
              height: 200,
              bgcolor: 'grey.200',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <CalendarToday sx={{ fontSize: 60, color: 'grey.400' }} />
          </Box>
        )}

        <CardContent sx={{ flex: 1, display: 'flex', flexDirection: 'column', p: 2 }}>
          {/* Header with Status and Actions */}
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1 }}>
            <Box sx={{ display: 'flex', gap: 0.5, flexWrap: 'wrap' }}>
              {showStatus && <Chip
                label={event.status}
                size="small"
                color={getStatusColor(event.status)}
                sx={{ textTransform: 'capitalize' }}
              />}
              {isSoldOut && <Chip label="Sold Out" size="small" color="error" />}
              {isPastEvent && <Chip label="Past Event" size="small" />}
              {isOnline && (
                <Chip
                  icon={<Videocam />}
                  label="Online"
                  size="small"
                  color="primary"
                  variant="outlined"
                />
              )}
            </Box>

            {(showActions || isOrganizer) && (
              <IconButton size="small" onClick={handleMenuOpen}>
                <MoreVert fontSize="small" />
              </IconButton>
            )}
          </Box>

          {/* Event Title */}
          <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
            {event.title}
          </Typography>

          {/* Event Date */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
            <CalendarToday fontSize="small" color="action" />
            <Typography variant="body2" color="text.secondary">
              {new Date(event.startDate).toLocaleDateString('en-US', {
                weekday: 'short',
                month: 'short',
                day: 'numeric',
                year: 'numeric',
              })}
              {' • '}
              {new Date(event.startDate).toLocaleTimeString('en-US', {
                hour: 'numeric',
                minute: '2-digit',
              })}
            </Typography>
          </Box>

          {/* Event Location */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
            <LocationOn fontSize="small" color="action" />
            <Typography variant="body2" color="text.secondary" noWrap>
              {isOnline
                ? 'Online Event'
                : `${event.location?.venueName || ''}, ${event.location?.city || ''}`}
            </Typography>
          </Box>

          {/* Attendee Count */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
            <People fontSize="small" color="action" />
            <Typography variant="body2" color="text.secondary">
              {event.attendeeCount} / {event.capacity} attendees
            </Typography>
          </Box>

          {/* Price */}
          {cheapestTicket && (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
              <ConfirmationNumber fontSize="small" color="action" />
              <Typography variant="body2" color="text.secondary">
                {cheapestTicket.price === 0 ? (
                  <strong>Free</strong>
                ) : (
                  <>
                    From <strong>${cheapestTicket.price.toFixed(2)}</strong>
                  </>
                )}
              </Typography>
            </Box>
          )}

          {/* Tags */}
          {event.tags && event.tags.length > 0 && (
            <Box sx={{ display: 'flex', gap: 0.5, flexWrap: 'wrap', mb: 2 }}>
              {event.tags.slice(0, 3).map((tag, index) => (
                <Chip key={index} label={tag} size="small" variant="outlined" />
              ))}
              {event.tags.length > 3 && (
                <Chip label={`+${event.tags.length - 3}`} size="small" variant="outlined" />
              )}
            </Box>
          )}

          {/* Spacer */}
          <Box sx={{ flex: 1 }} />

          {/* Organizer */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 2, pt: 2, borderTop: '1px solid #e0e0e0' }}>
            <Avatar
              src={organizer?.avatar}
              alt={`${organizer.firstName} ${organizer.lastName}`}
              sx={{ width: 32, height: 32 }}
            >
              {organizer.firstName?.[0]}{organizer.lastName?.[0]}
            </Avatar>
            <Box sx={{ flex: 1 }}>
              <Typography variant="caption" color="text.secondary">
                Organized by
              </Typography>
              <Typography variant="body2" sx={{ fontWeight: 500 }}>
                {organizer.firstName} {organizer.lastName}
              </Typography>
            </Box>
          </Box>
        </CardContent>
      </Card>

      {/* Actions Menu */}
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
        <MenuItem onClick={handleShare}>
          <Share fontSize="small" sx={{ mr: 1 }} />
          Share
        </MenuItem>
        {isOrganizer && (
          <>
            <MenuItem onClick={handleEdit}>
              <Edit fontSize="small" sx={{ mr: 1 }} />
              Edit
            </MenuItem>
            <MenuItem onClick={handleDeleteClick} sx={{ color: 'error.main' }}>
              <Delete fontSize="small" sx={{ mr: 1 }} />
              Delete
            </MenuItem>
          </>
        )}
      </Menu>

      {/* Delete Confirmation Dialog */}
      <Dialog
        open={deleteDialogOpen}
        onClose={() => setDeleteDialogOpen(false)}
        onClick={(e) => e.stopPropagation()}
      >
        <DialogTitle>Delete Event</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete "{event.title}"? This action cannot be undone and all registrations will be
            cancelled.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDeleteDialogOpen(false)}>Cancel</Button>
          <Button onClick={handleDeleteConfirm} color="error" variant="contained">
            Delete
          </Button>
        </DialogActions>
      </Dialog>

      {/* Edit Dialog */}
      {editDialogOpen && (
        <CreateEventDialog
          open={editDialogOpen}
          onClose={() => setEditDialogOpen(false)}
          editEvent={event}
        />
      )}

      {/* Share Dialog */}
      <Dialog
        open={shareDialogOpen}
        onClose={() => setShareDialogOpen(false)}
        onClick={(e) => e.stopPropagation()}
      >
        <DialogTitle>Share Event</DialogTitle>
        <DialogContent>
          <DialogContentText sx={{ mb: 2 }}>
            Share this event with others
          </DialogContentText>
          <Stack spacing={2}>
            <Button
              variant="outlined"
              onClick={() => {
                navigator.clipboard.writeText(`${window.location.origin}/events/${event._id}`);
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
    </>
  );
};

export default EventCard;
