/**
 * Profile API Service
 * - Get user profile
 * - Update user profile
 * - Change password
 * - Upload avatar
 */

import { apiClient } from '../../../shared/services/apiClient.service';
import { IUser } from '../../auth/types/auth.types';
import { IProfileUpdateData, IChangePasswordData } from '../types/profile.types';

class ProfileApiService {
  private baseUrl = '/user';
  /**
   * Get current user profile
   */
  async getProfile(): Promise<IUser> {
    return apiClient.get<IUser>(`${this.baseUrl}/me`);
  }

  /**
   * Update user profile
   */
  async updateProfile(data: IProfileUpdateData): Promise<IUser> {
    return apiClient.post<IUser>(`${this.baseUrl}/edit`, data);
  }

  /**
   * Change password
   */
  async changePassword(data: IChangePasswordData): Promise<void> {
    await apiClient.post('/auth/change-password', {
      oldPassword: data.currentPassword,
      newPassword: data.newPassword,
    });
  }

  /**
   * Upload avatar
   */
  async uploadAvatar(file: File): Promise<{ avatar: string }> {
    const formData = new FormData();
    formData.append('avatar', file);

    const axiosResponse = await apiClient.getClient().post<any>(
      '/auth/profile/avatar',
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    );

    return axiosResponse.data.data;
  }

  /**
   * Delete account
   */
  async deleteAccount(password: string): Promise<void> {
    await apiClient.delete('/auth/profile', {
      data: { password },
    });
  }

  /**
   * Get user profile by ID (public-facing)
   */
  async getUserById(userId: string): Promise<IUser> {
    return apiClient.get<IUser>(`${this.baseUrl}/${userId}`);
  }
}

export const profileApiService = new ProfileApiService();
