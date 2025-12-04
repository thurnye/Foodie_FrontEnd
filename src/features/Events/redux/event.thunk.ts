import { createAsyncThunk } from '@reduxjs/toolkit';
import { eventService } from '../services/event.service';
import { ICreateEvent, IUpdateEvent, IEventFilters } from '../types/event.types';

export const fetchEvents = createAsyncThunk(
  'events/fetchEvents',
  async (filters: IEventFilters = {}, { rejectWithValue }) => {
    try {
      return await eventService.getEvents(filters);
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || 'Failed to fetch events');
    }
  }
);

export const fetchEventById = createAsyncThunk(
  'events/fetchEventById',
  async (eventId: string, { rejectWithValue }) => {
    try {
      return await eventService.getEventById(eventId);
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || 'Failed to fetch event');
    }
  }
);

export const createEvent = createAsyncThunk(
  'events/createEvent',
  async (data: ICreateEvent, { rejectWithValue }) => {
    try {
      return await eventService.createEvent(data);
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || 'Failed to create event');
    }
  }
);

export const updateEvent = createAsyncThunk(
  'events/updateEvent',
  async ({ eventId, data }: { eventId: string; data: IUpdateEvent }, { rejectWithValue }) => {
    try {
      return await eventService.updateEvent(eventId, data);
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || 'Failed to update event');
    }
  }
);

export const deleteEvent = createAsyncThunk(
  'events/deleteEvent',
  async (eventId: string, { rejectWithValue }) => {
    try {
      await eventService.deleteEvent(eventId);
      return eventId;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || 'Failed to delete event');
    }
  }
);

export const registerForEvent = createAsyncThunk(
  'events/registerForEvent',
  async ({ eventId, ticketTierId }: { eventId: string; ticketTierId: string }, { rejectWithValue }) => {
    try {
      return await eventService.registerForEvent(eventId, ticketTierId);
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || 'Failed to register for event');
    }
  }
);

export const cancelRegistration = createAsyncThunk(
  'events/cancelRegistration',
  async (eventId: string, { rejectWithValue }) => {
    try {
      return await eventService.cancelRegistration(eventId);
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || 'Failed to cancel registration');
    }
  }
);

export const fetchMyEvents = createAsyncThunk(
  'events/fetchMyEvents',
  async (_, { rejectWithValue }) => {
    try {
      return await eventService.getMyEvents();
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || 'Failed to fetch your events');
    }
  }
);

export const fetchOrganizedEvents = createAsyncThunk(
  'events/fetchOrganizedEvents',
  async (filters: IEventFilters = {}, { rejectWithValue }) => {
    try {
      return await eventService.getOrganizedEvents(filters);
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || 'Failed to fetch organized events');
    }
  }
);
