import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
  CircularProgress,
  Alert,
  Fab,
} from '@mui/material';
import { Add, Event } from '@mui/icons-material';
import { AppDispatch, RootState } from '../../../app/stores/stores';
import { fetchOrganizedEvents } from '../redux/event.thunk';
import { IEventFilters } from '../types/event.types';
import EventCard from '../components/EventCard';
import EventFilters from '../components/EventFilters';
import CreateEventDialog from '../components/CreateEventDialog';

const OrganizedEventList: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { organizedEvents, organizedEventsLoading, error } = useSelector(
    (state: RootState) => state.events
  );
  const { user } = useSelector((state: RootState) => state.auth);

  const [createDialogOpen, setCreateDialogOpen] = useState(false);
  const [filters, setFilters] = useState<IEventFilters>({ sort: 'upcoming' });

  useEffect(() => {
    if (user) {
      dispatch(fetchOrganizedEvents(filters));
    }
  }, [dispatch, user, filters]);

  return (
    <Container maxWidth='xl' sx={{ py: 4 }}>
      {/* HEADER */}
      <Box
        sx={{
          mb: 4,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Box>
          <Typography variant='h4' gutterBottom sx={{ fontWeight: 600 }}>
            My Organized Events
          </Typography>
          <Typography variant='body1' color='text.secondary'>
            View and manage all events you have created
          </Typography>
        </Box>

        <Button
          variant='contained'
          startIcon={<Add />}
          onClick={() => setCreateDialogOpen(true)}
          size='large'
          sx={{
            backgroundColor: '#333',
            '&:hover': { backgroundColor: '#444' },
          }}
        >
          Create Event
        </Button>
      </Box>

      {/* ERROR ALERT */}
      {error && (
        <Alert severity='error' sx={{ mb: 3 }}>
          {error}
        </Alert>
      )}

      {/* CONTENT */}
      <Grid container spacing={3}>
        {/* FILTER SIDEBAR - always visible since you want it */}
        <Grid item xs={12} md={3}>
          <EventFilters filters={filters} onFiltersChange={setFilters} />
        </Grid>

        {/* EVENT GRID */}
        <Grid item xs={12} md={9}>
          {organizedEventsLoading ? (
            <Box sx={{ display: 'flex', justifyContent: 'center', py: 8 }}>
              <CircularProgress />
            </Box>
          ) : organizedEvents.length === 0 ? (
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                py: 8,
                textAlign: 'center',
              }}
            >
              <Event sx={{ fontSize: 80, color: 'grey.300', mb: 2 }} />
              <Typography variant='h6' color='text.secondary' gutterBottom>
                You haven't created any events yet
              </Typography>
              <Typography variant='body2' color='text.secondary' sx={{ mb: 3 }}>
                Create your first event to get started
              </Typography>
              {user && (
                <Button
                  variant='contained'
                  startIcon={<Add />}
                  onClick={() => setCreateDialogOpen(true)}
                >
                  Create Event
                </Button>
              )}
            </Box>
          ) : (
            <>
              <Box sx={{ mb: 2 }}>
                <Typography variant='body2' color='text.secondary'>
                  {organizedEvents.length}{' '}
                  {organizedEvents.length === 1 ? 'event' : 'events'} found
                </Typography>
              </Box>

              <Grid container spacing={3}>
                {organizedEvents.map((event) => (
                  <Grid item xs={12} sm={6} md={4} key={event._id}>
                    <EventCard event={event} showActions={true} showStatus={true}/>
                  </Grid>
                ))}
              </Grid>
            </>
          )}
        </Grid>
      </Grid>

      {/* MOBILE FAB */}
      {user && (
        <Fab
          color='primary'
          aria-label='create event'
          onClick={() => setCreateDialogOpen(true)}
          sx={{
            position: 'fixed',
            bottom: 24,
            right: 24,
            display: { xs: 'flex', sm: 'none' },
          }}
        >
          <Add />
        </Fab>
      )}

      {/* CREATE EVENT DIALOG */}
      <CreateEventDialog
        open={createDialogOpen}
        onClose={() => setCreateDialogOpen(false)}
      />
    </Container>
  );
};

export default OrganizedEventList;
