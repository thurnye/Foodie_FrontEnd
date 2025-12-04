import { IUser } from '../../auth/types/auth.types';

export interface IProfileUpdateData {
  firstName?: string;
  lastName?: string;
  email?: string;
  avatar?: string;
  dateOfBirth?: string;
  gender?: string;
  phoneNumber?: string;
  address?: string;
  city?: string;
  state?: string;
  country?: string;
  postalCode?: string;
  bio?: string;
}

export interface IChangePasswordData {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}

export interface ProfileState {
  profile: IUser | null;
  loading: boolean;
  updating: boolean;
  error: string | null;
  updateSuccess: boolean;
}
