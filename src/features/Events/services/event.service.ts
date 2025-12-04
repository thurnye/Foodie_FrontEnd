import { apiClient } from '../../../shared/services/apiClient.service';
import {
  IEvent,
  ICreateEvent,
  IUpdateEvent,
  IEventFilters,
} from '../types/event.types';

class EventService {
  private baseUrl = '/event';

  /**
   * Get all events with filters
   */
  async getEvents(filters: IEventFilters = {}): Promise<IEvent[]> {
    const params = new URLSearchParams();

    if (filters.category) params.append('category', filters.category);
    if (filters.tags) params.append('tags', filters.tags);
    if (filters.location) params.append('location', filters.location);
    if (filters.startDate) params.append('startDate', filters.startDate);
    if (filters.endDate) params.append('endDate', filters.endDate);
    if (filters.status) params.append('status', filters.status);
    if (filters.search) params.append('search', filters.search);
    if (filters.sort) params.append('sort', filters.sort);
    if (filters.page) params.append('page', filters.page.toString());
    if (filters.limit) params.append('limit', filters.limit.toString());

    return await apiClient.get<IEvent[]>(
      `${this.baseUrl}${params.toString() ? `?${params.toString()}` : ''}`
    );
  }

  /**
   * Get event by ID
   */
  async getEventById(eventId: string): Promise<IEvent> {
    return await apiClient.get<IEvent>(`${this.baseUrl}/${eventId}`);
  }

  /**
   * Create a new event
   */
  async createEvent(data: ICreateEvent): Promise<IEvent> {
    return await apiClient.post<IEvent>(this.baseUrl, data);
  }

  /**
   * Update an event
   */
  async updateEvent(eventId: string, data: IUpdateEvent): Promise<IEvent> {
    return await apiClient.put<IEvent>(`${this.baseUrl}/${eventId}`, data);
  }

  /**
   * Delete an event
   */
  async deleteEvent(eventId: string): Promise<void> {
    await apiClient.delete(`${this.baseUrl}/${eventId}`);
  }

  /**
   * Register for an event
   */
  async registerForEvent(
    eventId: string,
    ticketTierId: string
  ): Promise<IEvent> {
    return await apiClient.post<IEvent>(`${this.baseUrl}/${eventId}/register`, {
      ticketTierId,
    });
  }

  /**
   * Cancel event registration
   */
  async cancelRegistration(eventId: string): Promise<IEvent> {
    return await apiClient.delete<IEvent>(
      `${this.baseUrl}/${eventId}/register`
    );
  }

  /**
   * Get user's registered events
   */
  async getMyEvents(): Promise<IEvent[]> {
    return await apiClient.get<IEvent[]>(`${this.baseUrl}/my-events`);
  }

  /**
   * Get events organized by user
   */
  async getOrganizedEvents(filters: IEventFilters = {}): Promise<IEvent[]> {
    const params = new URLSearchParams();

    if (filters.category) params.append('category', filters.category);
    if (filters.tags) params.append('tags', filters.tags);
    if (filters.location) params.append('location', filters.location);
    if (filters.startDate) params.append('startDate', filters.startDate);
    if (filters.endDate) params.append('endDate', filters.endDate);
    if (filters.status) params.append('status', filters.status);
    if (filters.search) params.append('search', filters.search);
    if (filters.sort) params.append('sort', filters.sort);

    return await apiClient.get<IEvent[]>(
      `/event/organized${params.toString() ? `?${params.toString()}` : ''}`
    );
  }
}

export const eventService = new EventService();
