export interface IUser {
  id: string;
  _id?: string; // MongoDB ID alias for compatibility
  firstName: string;
  lastName: string;
  email: string;
  avatar: string;
  dateOfBirth: string;
  gender: string;
  phoneNumber?: string;
  address?: string;
  city?: string;
  state?: string;
  country?: string;
  postalCode?: string;
  isActive?: boolean;
  // Legacy fields for backward compatibility
  name?: string;
  status?: 'online' | 'offline' | 'away' | 'busy'; // For communication feature
  lastSeen?: Date | string; // For communication feature
  role?: 'individual' | 'restaurant';
  location?: string;
  completedTrades?: number;
  rating?: number;
  bio?: string;
}

export interface IUserLoginInfo {
  email: string;
  password: string;
}

export interface RegisterData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  avatar?: string;
  dateOfBirth: string;
  gender: string;
  phoneNumber?: string;
  address?: string;
  city?: string;
  state?: string;
  country?: string;
  postalCode?: string;
}

export interface AuthTokens {
  accessToken: string;
  refreshToken: string;
  user: IUser;
}

export interface AuthState {
  user: IUser | null;
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
}
