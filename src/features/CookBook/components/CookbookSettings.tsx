import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
  Typography,
  Tabs,
  Tab,
  Switch,
  FormControlLabel,
} from '@mui/material';
import { CookbookTheme, CookbookLayout, ICookbook } from '../types/cookbook.types';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const TabPanel: React.FC<TabPanelProps> = ({ children, value, index }) => {
  return (
    <div role="tabpanel" hidden={value !== index}>
      {value === index && <Box sx={{ py: 2 }}>{children}</Box>}
    </div>
  );
};

interface CookbookSettingsProps {
  open: boolean;
  onClose: () => void;
  cookbook: Partial<ICookbook> | null;
  onSave: (settings: Partial<ICookbook>) => void;
}

const CookbookSettings: React.FC<CookbookSettingsProps> = ({
  open,
  onClose,
  cookbook,
  onSave,
}) => {
  const [tabValue, setTabValue] = React.useState(0);
  const [settings, setSettings] = React.useState<Partial<ICookbook>>({
    title: '',
    description: '',
    theme: CookbookTheme.MODERN,
    layout: CookbookLayout.SINGLE_COLUMN,
    coverImage: '',
    authorBio: '',
    authorImage: '',
    isPublic: false,
    customColors: {
      primary: '#3b82f6',
      secondary: '#10b981',
      accent: '#f59e0b',
    },
  });

  React.useEffect(() => {
    if (cookbook) {
      setSettings({
        title: cookbook.title || '',
        description: cookbook.description || '',
        theme: cookbook.theme || CookbookTheme.MODERN,
        layout: cookbook.layout || CookbookLayout.SINGLE_COLUMN,
        coverImage: cookbook.coverImage || '',
        authorBio: cookbook.authorBio || '',
        authorImage: cookbook.authorImage || '',
        isPublic: cookbook.isPublic || false,
        customColors: cookbook.customColors || {
          primary: '#3b82f6',
          secondary: '#10b981',
          accent: '#f59e0b',
        },
      });
    }
  }, [cookbook]);

  const handleChange = (field: string, value: any) => {
    setSettings((prev) => ({ ...prev, [field]: value }));
  };

  const handleColorChange = (colorKey: string, value: string) => {
    setSettings((prev) => ({
      ...prev,
      customColors: {
        ...prev.customColors,
        [colorKey]: value,
      },
    }));
  };

  const handleSave = () => {
    onSave(settings);
    onClose();
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      PaperProps={{
        sx: {
          backgroundColor: '#1e1e1e',
          color: '#e0e0e0',
        },
      }}
    >
      <DialogTitle sx={{ borderBottom: '1px solid #2d2d2d' }}>
        Cookbook Settings
      </DialogTitle>

      <Tabs
        value={tabValue}
        onChange={(_, newValue) => setTabValue(newValue)}
        sx={{
          borderBottom: '1px solid #2d2d2d',
          '& .MuiTab-root': { color: '#9ca3af' },
          '& .Mui-selected': { color: '#3b82f6' },
        }}
      >
        <Tab label="General" />
        <Tab label="Design" />
        <Tab label="Author" />
      </Tabs>

      <DialogContent sx={{ p: 3 }}>
        {/* General Tab */}
        <TabPanel value={tabValue} index={0}>
          <TextField
            fullWidth
            label="Cookbook Title"
            value={settings.title}
            onChange={(e) => handleChange('title', e.target.value)}
            sx={{ mb: 2 }}
            InputLabelProps={{ sx: { color: '#9ca3af' } }}
            InputProps={{
              sx: {
                backgroundColor: '#252525',
                color: '#e0e0e0',
                '& fieldset': { borderColor: '#3a3a3a' },
              },
            }}
          />

          <TextField
            fullWidth
            label="Description"
            value={settings.description}
            onChange={(e) => handleChange('description', e.target.value)}
            multiline
            rows={3}
            sx={{ mb: 2 }}
            InputLabelProps={{ sx: { color: '#9ca3af' } }}
            InputProps={{
              sx: {
                backgroundColor: '#252525',
                color: '#e0e0e0',
                '& fieldset': { borderColor: '#3a3a3a' },
              },
            }}
          />

          <TextField
            fullWidth
            label="Cover Image URL"
            value={settings.coverImage}
            onChange={(e) => handleChange('coverImage', e.target.value)}
            sx={{ mb: 2 }}
            InputLabelProps={{ sx: { color: '#9ca3af' } }}
            InputProps={{
              sx: {
                backgroundColor: '#252525',
                color: '#e0e0e0',
                '& fieldset': { borderColor: '#3a3a3a' },
              },
            }}
          />

          <FormControlLabel
            control={
              <Switch
                checked={settings.isPublic}
                onChange={(e) => handleChange('isPublic', e.target.checked)}
                sx={{
                  '& .MuiSwitch-switchBase.Mui-checked': {
                    color: '#3b82f6',
                  },
                  '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                    backgroundColor: '#3b82f6',
                  },
                }}
              />
            }
            label="Make Public"
            sx={{ color: '#e0e0e0' }}
          />
        </TabPanel>

        {/* Design Tab */}
        <TabPanel value={tabValue} index={1}>
          <FormControl fullWidth sx={{ mb: 2 }}>
            <InputLabel sx={{ color: '#9ca3af' }}>Theme</InputLabel>
            <Select
              value={settings.theme}
              onChange={(e) => handleChange('theme', e.target.value)}
              sx={{
                backgroundColor: '#252525',
                color: '#e0e0e0',
                '& fieldset': { borderColor: '#3a3a3a' },
              }}
            >
              {Object.values(CookbookTheme).map((theme) => (
                <MenuItem key={theme} value={theme}>
                  {theme.charAt(0).toUpperCase() + theme.slice(1)}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl fullWidth sx={{ mb: 2 }}>
            <InputLabel sx={{ color: '#9ca3af' }}>Layout</InputLabel>
            <Select
              value={settings.layout}
              onChange={(e) => handleChange('layout', e.target.value)}
              sx={{
                backgroundColor: '#252525',
                color: '#e0e0e0',
                '& fieldset': { borderColor: '#3a3a3a' },
              }}
            >
              {Object.values(CookbookLayout).map((layout) => (
                <MenuItem key={layout} value={layout}>
                  {layout.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <Typography variant="subtitle2" sx={{ mb: 1, color: '#9ca3af' }}>
            Custom Colors
          </Typography>

          <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
            <Box sx={{ flex: 1 }}>
              <Typography variant="caption" sx={{ color: '#9ca3af', display: 'block', mb: 0.5 }}>
                Primary
              </Typography>
              <input
                type="color"
                value={settings.customColors?.primary}
                onChange={(e) => handleColorChange('primary', e.target.value)}
                style={{ width: '100%', height: 40, cursor: 'pointer' }}
              />
            </Box>
            <Box sx={{ flex: 1 }}>
              <Typography variant="caption" sx={{ color: '#9ca3af', display: 'block', mb: 0.5 }}>
                Secondary
              </Typography>
              <input
                type="color"
                value={settings.customColors?.secondary}
                onChange={(e) => handleColorChange('secondary', e.target.value)}
                style={{ width: '100%', height: 40, cursor: 'pointer' }}
              />
            </Box>
            <Box sx={{ flex: 1 }}>
              <Typography variant="caption" sx={{ color: '#9ca3af', display: 'block', mb: 0.5 }}>
                Accent
              </Typography>
              <input
                type="color"
                value={settings.customColors?.accent}
                onChange={(e) => handleColorChange('accent', e.target.value)}
                style={{ width: '100%', height: 40, cursor: 'pointer' }}
              />
            </Box>
          </Box>
        </TabPanel>

        {/* Author Tab */}
        <TabPanel value={tabValue} index={2}>
          <TextField
            fullWidth
            label="Author Bio"
            value={settings.authorBio}
            onChange={(e) => handleChange('authorBio', e.target.value)}
            multiline
            rows={4}
            sx={{ mb: 2 }}
            InputLabelProps={{ sx: { color: '#9ca3af' } }}
            InputProps={{
              sx: {
                backgroundColor: '#252525',
                color: '#e0e0e0',
                '& fieldset': { borderColor: '#3a3a3a' },
              },
            }}
          />

          <TextField
            fullWidth
            label="Author Image URL"
            value={settings.authorImage}
            onChange={(e) => handleChange('authorImage', e.target.value)}
            InputLabelProps={{ sx: { color: '#9ca3af' } }}
            InputProps={{
              sx: {
                backgroundColor: '#252525',
                color: '#e0e0e0',
                '& fieldset': { borderColor: '#3a3a3a' },
              },
            }}
          />
        </TabPanel>
      </DialogContent>

      <DialogActions sx={{ p: 3, borderTop: '1px solid #2d2d2d' }}>
        <Button onClick={onClose} sx={{ color: '#9ca3af' }}>
          Cancel
        </Button>
        <Button
          onClick={handleSave}
          variant="contained"
          sx={{
            backgroundColor: '#3b82f6',
            '&:hover': { backgroundColor: '#2563eb' },
          }}
        >
          Save Settings
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CookbookSettings;
