import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from '../../auth/types/auth.types';
import { ProfileState } from '../types/profile.types';
import {
  fetchProfile,
  updateProfile,
  changePassword,
  uploadAvatar,
  deleteAccount,
} from './profile.thunk';

const initialState: ProfileState = {
  profile: null,
  loading: false,
  updating: false,
  error: null,
  updateSuccess: false,
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
    clearUpdateSuccess: (state) => {
      state.updateSuccess = false;
    },
    setProfile: (state, action: PayloadAction<IUser>) => {
      state.profile = action.payload;
    },
  },
  extraReducers: (builder) => {
    // Fetch Profile
    builder
      .addCase(fetchProfile.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProfile.fulfilled, (state, action: PayloadAction<IUser>) => {
        state.loading = false;
        state.profile = action.payload;
      })
      .addCase(fetchProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });

    // Update Profile
    builder
      .addCase(updateProfile.pending, (state) => {
        state.updating = true;
        state.error = null;
        state.updateSuccess = false;
      })
      .addCase(updateProfile.fulfilled, (state, action: PayloadAction<IUser>) => {
        state.updating = false;
        state.profile = action.payload;
        state.updateSuccess = true;
      })
      .addCase(updateProfile.rejected, (state, action) => {
        state.updating = false;
        state.error = action.payload as string;
        state.updateSuccess = false;
      });

    // Change Password
    builder
      .addCase(changePassword.pending, (state) => {
        state.updating = true;
        state.error = null;
        state.updateSuccess = false;
      })
      .addCase(changePassword.fulfilled, (state) => {
        state.updating = false;
        state.updateSuccess = true;
      })
      .addCase(changePassword.rejected, (state, action) => {
        state.updating = false;
        state.error = action.payload as string;
        state.updateSuccess = false;
      });

    // Upload Avatar
    builder
      .addCase(uploadAvatar.pending, (state) => {
        state.updating = true;
        state.error = null;
      })
      .addCase(uploadAvatar.fulfilled, (state, action: PayloadAction<{ avatar: string }>) => {
        state.updating = false;
        if (state.profile) {
          state.profile.avatar = action.payload.avatar;
        }
        state.updateSuccess = true;
      })
      .addCase(uploadAvatar.rejected, (state, action) => {
        state.updating = false;
        state.error = action.payload as string;
      });

    // Delete Account
    builder
      .addCase(deleteAccount.pending, (state) => {
        state.updating = true;
        state.error = null;
      })
      .addCase(deleteAccount.fulfilled, (state) => {
        state.updating = false;
        state.profile = null;
      })
      .addCase(deleteAccount.rejected, (state, action) => {
        state.updating = false;
        state.error = action.payload as string;
      });
  },
});

export const { clearError, clearUpdateSuccess, setProfile } = profileSlice.actions;
export default profileSlice.reducer;
