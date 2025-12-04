export interface IEventOrganizer {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  avatar: string;
}

export interface IEventLocation {
  type: 'venue' | 'online';
  venueName?: string;
  address?: string;
  city?: string;
  state?: string;
  country?: string;
  postalCode?: string;
  onlineUrl?: string;
  latitude?: number;
  longitude?: number;
}

export interface ITicketTier {
  _id?: string;
  name: string;
  description?: string;
  price: number;
  quantity: number;
  quantitySold: number;
  salesStartDate: Date | string;
  salesEndDate: Date | string;
}

export interface IEventImage {
  url: string;
  alt?: string;
  isCover?: boolean;
}

export interface IAttendee {
  user: IEventOrganizer;
  ticketTier: string;
  registeredAt: Date | string;
  attendanceStatus: 'registered' | 'checked-in' | 'cancelled';
}

export interface IEvent {
  _id: string;
  title: string;
  description: string;
  organizer: IEventOrganizer;
  category: string;
  tags: string[];
  startDate: Date | string;
  endDate: Date | string;
  location: IEventLocation;
  images: IEventImage[];
  ticketTiers: ITicketTier[];
  capacity: number;
  attendeeCount: number;
  attendees: IAttendee[];
  status: 'draft' | 'published' | 'cancelled' | 'completed';
  isPublic: boolean;
  isFeatured: boolean;
  createdAt: Date | string;
  updatedAt: Date | string;
}

export interface ICreateEvent {
  title: string;
  description: string;
  category: string;
  tags: string[];
  startDate: Date | string;
  endDate: Date | string;
  location: IEventLocation;
  images: IEventImage[];
  ticketTiers: ITicketTier[];
  capacity: number;
  status: 'draft' | 'published';
  isPublic: boolean;
}

export interface IUpdateEvent {
  title?: string;
  description?: string;
  category?: string;
  tags?: string[];
  startDate?: Date | string;
  endDate?: Date | string;
  location?: IEventLocation;
  images?: IEventImage[];
  ticketTiers?: ITicketTier[];
  capacity?: number;
  status?: 'draft' | 'published' | 'cancelled' | 'completed';
  isPublic?: boolean;
}

export interface IEventFilters {
  category?: string;
  tags?: string;
  location?: string;
  startDate?: string;
  endDate?: string;
  status?: string;
  search?: string;
  sort?: 'newest' | 'oldest' | 'popular' | 'upcoming';
  page?: number;
  limit?: number;
}
