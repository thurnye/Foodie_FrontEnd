import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IEvent } from '../types/event.types';
import {
  fetchEvents,
  fetchEventById,
  createEvent,
  updateEvent,
  deleteEvent,
  registerForEvent,
  cancelRegistration,
  fetchMyEvents,
  fetchOrganizedEvents,
} from './event.thunk';

interface EventState {
  events: IEvent[];
  selectedEvent: IEvent | null;
  myEvents: IEvent[];
  organizedEvents: IEvent[];
  eventsLoading: boolean;
  selectedEventLoading: boolean;
  myEventsLoading: boolean;
  organizedEventsLoading: boolean;
  error: string | null;
}

const initialState: EventState = {
  events: [],
  selectedEvent: null,
  myEvents: [],
  organizedEvents: [],
  eventsLoading: false,
  selectedEventLoading: false,
  myEventsLoading: false,
  organizedEventsLoading: false,
  error: null,
};

const eventSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {
    clearSelectedEvent: (state) => {
      state.selectedEvent = null;
    },
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    // Fetch Events
    builder
      .addCase(fetchEvents.pending, (state) => {
        state.eventsLoading = true;
        state.error = null;
      })
      .addCase(fetchEvents.fulfilled, (state, action: PayloadAction<IEvent[]>) => {
        state.eventsLoading = false;
        state.events = action.payload;
      })
      .addCase(fetchEvents.rejected, (state, action) => {
        state.eventsLoading = false;
        state.error = action.payload as string;
      });

    // Fetch Event By ID
    builder
      .addCase(fetchEventById.pending, (state) => {
        state.selectedEventLoading = true;
        state.error = null;
      })
      .addCase(fetchEventById.fulfilled, (state, action: PayloadAction<IEvent>) => {
        state.selectedEventLoading = false;
        state.selectedEvent = action.payload;
      })
      .addCase(fetchEventById.rejected, (state, action) => {
        state.selectedEventLoading = false;
        state.error = action.payload as string;
      });

    // Create Event
    builder
      .addCase(createEvent.pending, (state) => {
        state.error = null;
      })
      .addCase(createEvent.fulfilled, (state, action: PayloadAction<IEvent>) => {
        state.events.unshift(action.payload);
        state.organizedEvents.unshift(action.payload);
      })
      .addCase(createEvent.rejected, (state, action) => {
        state.error = action.payload as string;
      });

    // Update Event
    builder
      .addCase(updateEvent.pending, (state) => {
        state.error = null;
      })
      .addCase(updateEvent.fulfilled, (state, action: PayloadAction<IEvent>) => {
        const index = state.events.findIndex((e) => e._id === action.payload._id);
        if (index !== -1) {
          state.events[index] = action.payload;
        }
        if (state.selectedEvent?._id === action.payload._id) {
          state.selectedEvent = action.payload;
        }
        const orgIndex = state.organizedEvents.findIndex((e) => e._id === action.payload._id);
        if (orgIndex !== -1) {
          state.organizedEvents[orgIndex] = action.payload;
        }
      })
      .addCase(updateEvent.rejected, (state, action) => {
        state.error = action.payload as string;
      });

    // Delete Event
    builder
      .addCase(deleteEvent.pending, (state) => {
        state.error = null;
      })
      .addCase(deleteEvent.fulfilled, (state, action: PayloadAction<string>) => {
        state.events = state.events.filter((e) => e._id !== action.payload);
        state.organizedEvents = state.organizedEvents.filter((e) => e._id !== action.payload);
        if (state.selectedEvent?._id === action.payload) {
          state.selectedEvent = null;
        }
      })
      .addCase(deleteEvent.rejected, (state, action) => {
        state.error = action.payload as string;
      });

    // Register for Event
    builder
      .addCase(registerForEvent.pending, (state) => {
        state.error = null;
      })
      .addCase(registerForEvent.fulfilled, (state, action: PayloadAction<IEvent>) => {
        const index = state.events.findIndex((e) => e._id === action.payload._id);
        if (index !== -1) {
          state.events[index] = action.payload;
        }
        if (state.selectedEvent?._id === action.payload._id) {
          state.selectedEvent = action.payload;
        }
        state.myEvents.unshift(action.payload);
      })
      .addCase(registerForEvent.rejected, (state, action) => {
        state.error = action.payload as string;
      });

    // Cancel Registration
    builder
      .addCase(cancelRegistration.pending, (state) => {
        state.error = null;
      })
      .addCase(cancelRegistration.fulfilled, (state, action: PayloadAction<IEvent>) => {
        const index = state.events.findIndex((e) => e._id === action.payload._id);
        if (index !== -1) {
          state.events[index] = action.payload;
        }
        if (state.selectedEvent?._id === action.payload._id) {
          state.selectedEvent = action.payload;
        }
        state.myEvents = state.myEvents.filter((e) => e._id !== action.payload._id);
      })
      .addCase(cancelRegistration.rejected, (state, action) => {
        state.error = action.payload as string;
      });

    // Fetch My Events
    builder
      .addCase(fetchMyEvents.pending, (state) => {
        state.myEventsLoading = true;
        state.error = null;
      })
      .addCase(fetchMyEvents.fulfilled, (state, action: PayloadAction<IEvent[]>) => {
        state.myEventsLoading = false;
        state.myEvents = action.payload;
      })
      .addCase(fetchMyEvents.rejected, (state, action) => {
        state.myEventsLoading = false;
        state.error = action.payload as string;
      });

    // Fetch Organized Events
    builder
      .addCase(fetchOrganizedEvents.pending, (state) => {
        state.organizedEventsLoading = true;
        state.error = null;
      })
      .addCase(fetchOrganizedEvents.fulfilled, (state, action: PayloadAction<IEvent[]>) => {
        state.organizedEventsLoading = false;
        state.organizedEvents = action.payload;
      })
      .addCase(fetchOrganizedEvents.rejected, (state, action) => {
        state.organizedEventsLoading = false;
        state.error = action.payload as string;
      });
  },
});

export const { clearSelectedEvent, clearError } = eventSlice.actions;
export default eventSlice.reducer;
