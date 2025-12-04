import React, { useEffect, useState } from 'react';
import {
  Container,
  Box,
  Paper,
  Grid,
  Avatar,
  Typography,
  Button,
  TextField,
  CircularProgress,
  Alert,
  Divider,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  MenuItem,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import {
  Edit as EditIcon,
  Save as SaveIcon,
  Cancel as CancelIcon,
  PhotoCamera as PhotoCameraIcon,
  Lock as LockIcon,
} from '@mui/icons-material';
import { useAppDispatch, useAppSelector } from '../../../app/hooks/app.hooks';
import {
  fetchProfile,
  updateProfile,
  uploadAvatar,
  changePassword,
} from '../redux/profile.thunk';
import { clearError, clearUpdateSuccess } from '../redux/profile.slice';
import {
  IProfileUpdateData,
  IChangePasswordData,
} from '../types/profile.types';

const ProfilePage: React.FC = () => {
  const dispatch = useAppDispatch();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  // const { isAuthenticated, user } = useAppSelector((state) => state.auth);
  const { profile, loading, updating, error, updateSuccess } = useAppSelector(
    (state) => state.profile
  );
  const { user } = useAppSelector((state) => state.auth);

  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState<IProfileUpdateData>({});
  const [passwordDialogOpen, setPasswordDialogOpen] = useState(false);
  const [passwordData, setPasswordData] = useState<IChangePasswordData>({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });
  const [passwordError, setPasswordError] = useState('');

  console.log(user);

  useEffect(() => {
    if (!profile && user) {
      dispatch(fetchProfile());
    }
  }, [dispatch, profile, user]);

  useEffect(() => {
    if (profile) {
      setFormData({
        firstName: profile.firstName,
        lastName: profile.lastName,
        email: profile.email,
        phoneNumber: profile.phoneNumber || '',
        dateOfBirth: profile.dateOfBirth || '',
        gender: profile.gender || '',
        address: profile.address || '',
        city: profile.city || '',
        state: profile.state || '',
        country: profile.country || '',
        postalCode: profile.postalCode || '',
        bio: profile.bio || '',
      });
    }
  }, [profile]);

  useEffect(() => {
    if (updateSuccess) {
      setIsEditing(false);
      const timer = setTimeout(() => {
        dispatch(clearUpdateSuccess());
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [updateSuccess, dispatch]);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancel = () => {
    setIsEditing(false);
    if (profile) {
      setFormData({
        firstName: profile.firstName,
        lastName: profile.lastName,
        email: profile.email,
        phoneNumber: profile.phoneNumber || '',
        dateOfBirth: profile.dateOfBirth || '',
        gender: profile.gender || '',
        address: profile.address || '',
        city: profile.city || '',
        state: profile.state || '',
        country: profile.country || '',
        postalCode: profile.postalCode || '',
        bio: profile.bio || '',
      });
    }
  };

  const handleSave = async () => {
    try {
      await dispatch(updateProfile(formData)).unwrap();
    } catch (err) {
      console.error('Failed to update profile:', err);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAvatarUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      try {
        await dispatch(uploadAvatar(file)).unwrap();
      } catch (err) {
        console.error('Failed to upload avatar:', err);
      }
    }
  };

  const handlePasswordChange = async () => {
    setPasswordError('');

    if (passwordData.newPassword !== passwordData.confirmPassword) {
      setPasswordError('Passwords do not match');
      return;
    }

    if (passwordData.newPassword.length < 6) {
      setPasswordError('Password must be at least 6 characters');
      return;
    }

    try {
      await dispatch(changePassword(passwordData)).unwrap();
      setPasswordDialogOpen(false);
      setPasswordData({
        currentPassword: '',
        newPassword: '',
        confirmPassword: '',
      });
    } catch (err) {
      setPasswordError(
        'Failed to change password. Please check your current password.'
      );
    }
  };

  if (loading || !profile) {
    return (
      <Container maxWidth='lg' sx={{ py: 4 }}>
        <Box sx={{ display: 'flex', justifyContent: 'center', py: 8 }}>
          <CircularProgress />
        </Box>
      </Container>
    );
  }

  return (
    <Container maxWidth='lg' sx={{ py: 4 }}>
      {/* Header */}
      <Box sx={{ mb: 4 }}>
        <Typography variant='h4' gutterBottom fontWeight={600}>
          My Profile
        </Typography>
        <Typography variant='body1' color='text.secondary'>
          Manage your personal information and account settings
        </Typography>
      </Box>

      {/* Success/Error Messages */}
      {updateSuccess && (
        <Alert
          severity='success'
          sx={{ mb: 3 }}
          onClose={() => dispatch(clearUpdateSuccess())}
        >
          Profile updated successfully!
        </Alert>
      )}
      {error && (
        <Alert
          severity='error'
          sx={{ mb: 3 }}
          onClose={() => dispatch(clearError())}
        >
          {error}
        </Alert>
      )}

      <Grid container spacing={3}>
        {/* Avatar Section */}
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 3, textAlign: 'center' }}>
            <Box sx={{ position: 'relative', display: 'inline-block' }}>
              <Avatar
                src={profile.avatar}
                alt={`${profile.firstName} ${profile.lastName}`}
                sx={{
                  width: { xs: 120, md: 150 },
                  height: { xs: 120, md: 150 },
                  mx: 'auto',
                  mb: 2,
                }}
              />
              <IconButton
                component='label'
                sx={{
                  position: 'absolute',
                  bottom: 16,
                  right: -8,
                  bgcolor: 'primary.main',
                  color: 'white',
                  '&:hover': { bgcolor: 'primary.dark' },
                }}
              >
                <input
                  hidden
                  accept='image/*'
                  type='file'
                  onChange={handleAvatarUpload}
                />
                <PhotoCameraIcon />
              </IconButton>
            </Box>

            <Typography variant='h6' fontWeight={600}>
              {profile.firstName} {profile.lastName}
            </Typography>
            <Typography variant='body2' color='text.secondary' sx={{ mb: 2 }}>
              {profile.email}
            </Typography>

            <Divider sx={{ my: 2 }} />

            <Button
              fullWidth
              variant='outlined'
              startIcon={<LockIcon />}
              onClick={() => setPasswordDialogOpen(true)}
              sx={{ mb: 1 }}
            >
              Change Password
            </Button>

            {!isEditing ? (
              <Button
                fullWidth
                variant='contained'
                startIcon={<EditIcon />}
                onClick={handleEdit}
              >
                Edit Profile
              </Button>
            ) : (
              <Box sx={{ display: 'flex', gap: 1 }}>
                <Button
                  fullWidth
                  variant='outlined'
                  startIcon={<CancelIcon />}
                  onClick={handleCancel}
                  disabled={updating}
                >
                  Cancel
                </Button>
                <Button
                  fullWidth
                  variant='contained'
                  startIcon={<SaveIcon />}
                  onClick={handleSave}
                  disabled={updating}
                >
                  {updating ? <CircularProgress size={24} /> : 'Save'}
                </Button>
              </Box>
            )}
          </Paper>
        </Grid>

        {/* Profile Information */}
        <Grid item xs={12} md={8}>
          <Paper sx={{ p: 3 }}>
            <Typography variant='h6' fontWeight={600} gutterBottom>
              Personal Information
            </Typography>

            <Grid container spacing={2} sx={{ mt: 1 }}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label='First Name'
                  name='firstName'
                  value={formData.firstName || ''}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  variant={isEditing ? 'outlined' : 'filled'}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label='Last Name'
                  name='lastName'
                  value={formData.lastName || ''}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  variant={isEditing ? 'outlined' : 'filled'}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label='Email'
                  name='email'
                  type='email'
                  value={formData.email || ''}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  variant={isEditing ? 'outlined' : 'filled'}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label='Phone Number'
                  name='phoneNumber'
                  value={formData.phoneNumber || ''}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  variant={isEditing ? 'outlined' : 'filled'}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label='Date Of Birth'
                  name='dateOfBirth'
                  type='date'
                  value={formData.dateOfBirth || ''}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  variant={isEditing ? 'outlined' : 'filled'}
                  InputLabelProps={{ shrink: true }}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  select
                  label='Gender'
                  name='gender'
                  value={formData.gender || ''}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  variant={isEditing ? 'outlined' : 'filled'}
                >
                  <MenuItem value='male'>Male</MenuItem>
                  <MenuItem value='female'>Female</MenuItem>
                  <MenuItem value='other'>Other</MenuItem>
                  <MenuItem value='prefer-not-to-say'>
                    Prefer not to say
                  </MenuItem>
                </TextField>
              </Grid>

              <Grid item xs={12}>
                <Divider sx={{ my: 2 }} />
                <Typography variant='h6' fontWeight={600} gutterBottom>
                  Address
                </Typography>
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label='Street Address'
                  name='address'
                  value={formData.address || ''}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  variant={isEditing ? 'outlined' : 'filled'}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label='City'
                  name='city'
                  value={formData.city || ''}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  variant={isEditing ? 'outlined' : 'filled'}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label='State/Province'
                  name='state'
                  value={formData.state || ''}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  variant={isEditing ? 'outlined' : 'filled'}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label='Country'
                  name='country'
                  value={formData.country || ''}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  variant={isEditing ? 'outlined' : 'filled'}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label='Postal Code'
                  name='postalCode'
                  value={formData.postalCode || ''}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  variant={isEditing ? 'outlined' : 'filled'}
                />
              </Grid>

              <Grid item xs={12}>
                <Divider sx={{ my: 2 }} />
                <Typography variant='h6' fontWeight={600} gutterBottom>
                  Bio
                </Typography>
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  multiline
                  rows={4}
                  label='Bio'
                  name='bio'
                  value={formData.bio || ''}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  variant={isEditing ? 'outlined' : 'filled'}
                  placeholder='Tell us about yourself...'
                />
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>

      {/* Change Password Dialog */}
      <Dialog
        open={passwordDialogOpen}
        onClose={() => setPasswordDialogOpen(false)}
        maxWidth='sm'
        fullWidth
      >
        <DialogTitle>Change Password</DialogTitle>
        <DialogContent>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, pt: 2 }}>
            {passwordError && (
              <Alert severity='error' onClose={() => setPasswordError('')}>
                {passwordError}
              </Alert>
            )}

            <TextField
              fullWidth
              type='password'
              label='Current Password'
              value={passwordData.currentPassword}
              onChange={(e) =>
                setPasswordData((prev) => ({
                  ...prev,
                  currentPassword: e.target.value,
                }))
              }
            />

            <TextField
              fullWidth
              type='password'
              label='New Password'
              value={passwordData.newPassword}
              onChange={(e) =>
                setPasswordData((prev) => ({
                  ...prev,
                  newPassword: e.target.value,
                }))
              }
            />

            <TextField
              fullWidth
              type='password'
              label='Confirm New Password'
              value={passwordData.confirmPassword}
              onChange={(e) =>
                setPasswordData((prev) => ({
                  ...prev,
                  confirmPassword: e.target.value,
                }))
              }
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setPasswordDialogOpen(false)}>Cancel</Button>
          <Button
            onClick={handlePasswordChange}
            variant='contained'
            disabled={updating}
          >
            {updating ? <CircularProgress size={24} /> : 'Change Password'}
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default ProfilePage;
