import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Box,
  Typography,
  IconButton,
  Tabs,
  Tab,
  Avatar,
  TextField,
  Button,
  Switch,
  FormControlLabel,
  Divider,
  FormGroup,
} from '@mui/material';
import {
  Close as CloseIcon,
  Person as PersonIcon,
  Palette as PaletteIcon,
  Notifications as NotificationsIcon,
} from '@mui/icons-material';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../app/stores/stores';
import { toggleSettings, updateSettings, toggleTheme } from '../redux/communication.slice';
import { currentUser } from '../data/mockData';

interface TabPanelProps {
  children?: React.ReactNode;
  value: number;
  index: number;
}

const TabPanel: React.FC<TabPanelProps> = ({ children, value, index }) => {
  return (
    <div role="tabpanel" hidden={value !== index}>
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
};

const SettingsModal: React.FC = () => {
  const dispatch = useDispatch();
  const { showSettings, settings } = useSelector((state: RootState) => state.communication);

  const [activeTab, setActiveTab] = useState(0);
  const [profileData, setProfileData] = useState({
    name: settings.profile.name,
    avatar: settings.profile.avatar,
    status: settings.profile.status,
  });

  const handleClose = () => {
    dispatch(toggleSettings());
  };

  const handleSaveProfile = () => {
    dispatch(updateSettings({ profile: profileData }));
  };

  const handleNotificationChange = (key: keyof typeof settings.notifications) => {
    dispatch(
      updateSettings({
        notifications: {
          ...settings.notifications,
          [key]: !settings.notifications[key],
        },
      })
    );
  };

  return (
    <Dialog open={showSettings} onClose={handleClose} maxWidth="md" fullWidth>
      <DialogTitle sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Typography variant="h6">Settings</Typography>
        <IconButton size="small" onClick={handleClose}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={activeTab} onChange={(e, newValue) => setActiveTab(newValue)}>
          <Tab icon={<PersonIcon />} label="Profile" />
          <Tab icon={<PaletteIcon />} label="Appearance" />
          <Tab icon={<NotificationsIcon />} label="Notifications" />
        </Tabs>
      </Box>

      <DialogContent sx={{ minHeight: 400 }}>
        {/* Profile Tab */}
        <TabPanel value={activeTab} index={0}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Avatar
                src={profileData.avatar}
                alt={profileData.name}
                sx={{ width: 80, height: 80 }}
              />
              <Button variant="outlined" size="small">
                Change Photo
              </Button>
            </Box>

            <TextField
              label="Display Name"
              value={profileData.name}
              onChange={(e) => setProfileData({ ...profileData, name: e.target.value })}
              fullWidth
            />

            <TextField
              select
              label="Status"
              value={profileData.status}
              onChange={(e) =>
                setProfileData({
                  ...profileData,
                  status: e.target.value as 'online' | 'offline' | 'away' | 'busy',
                })
              }
              fullWidth
              SelectProps={{
                native: true,
              }}
            >
              <option value="online">Online</option>
              <option value="away">Away</option>
              <option value="busy">Busy</option>
              <option value="offline">Offline</option>
            </TextField>

            <Button variant="contained" onClick={handleSaveProfile}>
              Save Profile
            </Button>
          </Box>
        </TabPanel>

        {/* Appearance Tab */}
        <TabPanel value={activeTab} index={1}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            <Typography variant="subtitle1" fontWeight={600}>
              Theme
            </Typography>

            <FormControlLabel
              control={<Switch checked={settings.theme === 'dark'} onChange={() => dispatch(toggleTheme())} />}
              label={
                <Box>
                  <Typography variant="body2" fontWeight={500}>
                    Dark Mode
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    Use dark theme throughout the app
                  </Typography>
                </Box>
              }
            />

            <Divider />

            <Typography variant="body2" color="text.secondary">
              Current theme: <strong>{settings.theme === 'dark' ? 'Dark' : 'Light'}</strong>
            </Typography>
          </Box>
        </TabPanel>

        {/* Notifications Tab */}
        <TabPanel value={activeTab} index={2}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            <Typography variant="subtitle1" fontWeight={600}>
              Notification Preferences
            </Typography>

            <FormGroup>
              <FormControlLabel
                control={
                  <Switch
                    checked={settings.notifications.mentions}
                    onChange={() => handleNotificationChange('mentions')}
                  />
                }
                label={
                  <Box>
                    <Typography variant="body2" fontWeight={500}>
                      Mentions
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      Get notified when someone mentions you
                    </Typography>
                  </Box>
                }
              />

              <FormControlLabel
                control={
                  <Switch
                    checked={settings.notifications.directMessages}
                    onChange={() => handleNotificationChange('directMessages')}
                  />
                }
                label={
                  <Box>
                    <Typography variant="body2" fontWeight={500}>
                      Direct Messages
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      Get notified for direct messages
                    </Typography>
                  </Box>
                }
              />

              <FormControlLabel
                control={
                  <Switch
                    checked={settings.notifications.channelMessages}
                    onChange={() => handleNotificationChange('channelMessages')}
                  />
                }
                label={
                  <Box>
                    <Typography variant="body2" fontWeight={500}>
                      Channel Messages
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      Get notified for all channel messages
                    </Typography>
                  </Box>
                }
              />

              <FormControlLabel
                control={
                  <Switch
                    checked={settings.notifications.meetings}
                    onChange={() => handleNotificationChange('meetings')}
                  />
                }
                label={
                  <Box>
                    <Typography variant="body2" fontWeight={500}>
                      Meetings
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      Get reminders for upcoming meetings
                    </Typography>
                  </Box>
                }
              />

              <FormControlLabel
                control={
                  <Switch
                    checked={settings.notifications.sound}
                    onChange={() => handleNotificationChange('sound')}
                  />
                }
                label={
                  <Box>
                    <Typography variant="body2" fontWeight={500}>
                      Sound
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      Play sound for notifications
                    </Typography>
                  </Box>
                }
              />
            </FormGroup>
          </Box>
        </TabPanel>
      </DialogContent>
    </Dialog>
  );
};

export default SettingsModal;
