import { createAsyncThunk } from '@reduxjs/toolkit';
import { profileApiService } from '../services/profile.api.service';
import { IProfileUpdateData, IChangePasswordData } from '../types/profile.types';

export const fetchProfile = createAsyncThunk(
  'profile/fetchProfile',
  async (_, { rejectWithValue }) => {
    try {
      return await profileApiService.getProfile();
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || 'Failed to fetch profile');
    }
  }
);

export const updateProfile = createAsyncThunk(
  'profile/updateProfile',
  async (data: IProfileUpdateData, { rejectWithValue }) => {
    try {
      return await profileApiService.updateProfile(data);
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || 'Failed to update profile');
    }
  }
);

export const changePassword = createAsyncThunk(
  'profile/changePassword',
  async (data: IChangePasswordData, { rejectWithValue }) => {
    try {
      await profileApiService.changePassword(data);
      return;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || 'Failed to change password');
    }
  }
);

export const uploadAvatar = createAsyncThunk(
  'profile/uploadAvatar',
  async (file: File, { rejectWithValue }) => {
    try {
      return await profileApiService.uploadAvatar(file);
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || 'Failed to upload avatar');
    }
  }
);

export const deleteAccount = createAsyncThunk(
  'profile/deleteAccount',
  async (password: string, { rejectWithValue }) => {
    try {
      await profileApiService.deleteAccount(password);
      return;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || 'Failed to delete account');
    }
  }
);
