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
  Tabs,
  Tab,
  Paper,
} from '@mui/material';
import {  Event, CalendarToday } from '@mui/icons-material';
import { AppDispatch, RootState } from '../../../app/stores/stores';
import { fetchEvents, fetchMyEvents } from '../redux/event.thunk';
import { IEventFilters } from '../types/event.types';
import EventCard from '../components/EventCard';
import EventFilters from '../components/EventFilters';

const EventList: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { events, myEvents, eventsLoading, myEventsLoading, error } =
    useSelector((state: RootState) => state.events);
  const { user } = useSelector((state: RootState) => state.auth);

  const [filters, setFilters] = useState<IEventFilters>({ sort: 'upcoming' });
  const [currentTab, setCurrentTab] = useState(0);

  useEffect(() => {
    if (currentTab === 0) {
      dispatch(fetchEvents(filters));
    } else if (currentTab === 1 && user) {
      dispatch(fetchMyEvents());
    }
  }, [dispatch, filters, currentTab, user]);

  const handleFiltersChange = (newFilters: IEventFilters) => {
    setFilters(newFilters);
  };

  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setCurrentTab(newValue);
  };

  const getCurrentEvents = () => {
    switch (currentTab) {
      case 0:
        return events;
      case 1:
        return myEvents;
      default:
        return events;
    }
  };

  const getCurrentLoading = () => {
    switch (currentTab) {
      case 0:
        return eventsLoading;
      case 1:
        return myEventsLoading;
      default:
        return eventsLoading;
    }
  };

  const currentEvents = getCurrentEvents();
  const isLoading = getCurrentLoading();

  return (
    <Container maxWidth='xl' sx={{ py: 4 }}>
      {/* Header */}
      <Box sx={{ mb: 4 }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            mb: 2,
          }}
        >
          <Box>
            <Typography variant='h4' gutterBottom sx={{ fontWeight: 600 }}>
              Discover Food Events
            </Typography>
            <Typography variant='body1' color='text.secondary'>
              Find cooking classes, food festivals, and culinary experiences
              near you
            </Typography>
          </Box>
        </Box>

        {/* Tabs */}
        <Paper sx={{ mt: 3 }}>
          <Tabs
            value={currentTab}
            onChange={handleTabChange}
            variant='fullWidth'
          >
            <Tab icon={<Event />} label='All Events' iconPosition='start' />
            {user && (
              <Tab
                icon={<CalendarToday />}
                label='My Events'
                iconPosition='start'
              />
            )}
          </Tabs>
        </Paper>
      </Box>

      {/* Error Alert */}
      {error && (
        <Alert severity='error' sx={{ mb: 3 }}>
          {error}
        </Alert>
      )}

      {/* Content */}
      <Grid container spacing={3}>
        {/* Filters Sidebar - Only show for All Events tab */}
        {currentTab === 0 && (
          <Grid item xs={12} md={3}>
            <EventFilters
              filters={filters}
              onFiltersChange={handleFiltersChange}
            />
          </Grid>
        )}

        {/* Events Grid */}
        <Grid item xs={12} md={currentTab === 0 ? 9 : 12}>
          {isLoading ? (
            <Box sx={{ display: 'flex', justifyContent: 'center', py: 8 }}>
              <CircularProgress />
            </Box>
          ) : currentEvents.length === 0 ? (
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                py: 8,
                textAlign: 'center',
              }}
            >
              <Event sx={{ fontSize: 80, color: 'grey.300', mb: 2 }} />
              <Typography variant='h6' color='text.secondary' gutterBottom>
                {currentTab === 0 && 'No events found'}
                {currentTab === 1 &&
                  "You haven't registered for any events yet"}
              </Typography>
              <Typography variant='body2' color='text.secondary' sx={{ mb: 3 }}>
                {currentTab === 0 &&
                  'Try adjusting your filters or check back later'}
                {currentTab === 1 &&
                  'Browse events and register to see them here'}
              </Typography>
              {currentTab === 0 && (
                <Button
                  variant='outlined'
                  onClick={() => setFilters({ sort: 'upcoming' })}
                >
                  Clear Filters
                </Button>
              )}
            </Box>
          ) : (
            <>
              <Box sx={{ mb: 2 }}>
                <Typography variant='body2' color='text.secondary'>
                  {currentEvents.length}{' '}
                  {currentEvents.length === 1 ? 'event' : 'events'} found
                </Typography>
              </Box>
              <Grid container spacing={3}>
                {currentEvents.map((event) => (
                  <Grid
                    item
                    xs={12}
                    sm={6}
                    md={currentTab === 0 ? 4 : 3}
                    key={event._id}
                  >
                    <EventCard event={event} showActions={false} />
                  </Grid>
                ))}
              </Grid>
            </>
          )}
        </Grid>
      </Grid>
    </Container>
  );
};

export default EventList;
