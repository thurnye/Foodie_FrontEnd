import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Menu,
  MenuItem,
  CircularProgress,
  Box,
} from '@mui/material';
import {
  Save,
  Preview,
  PictureAsPdf,
  Settings,
  MoreVert,
  ArrowBack,
  Menu as MenuIcon,
} from '@mui/icons-material';
import { ICookbook } from '../types/cookbook.types';

interface CookbookHeaderProps {
  currentCookbook: ICookbook | null;
  isSaving: boolean;
  isGenerating: boolean;
  sidebarOpen: boolean;
  onBack: () => void;
  onToggleSidebar: () => void;
  onSettingsOpen: () => void;
  onSave: () => void;
  onGenerate: () => void;
  onPreview?: () => void;
  onExport?: () => void;
}

const CookbookHeader: React.FC<CookbookHeaderProps> = ({
  currentCookbook,
  isSaving,
  isGenerating,
  sidebarOpen,
  onBack,
  onToggleSidebar,
  onSettingsOpen,
  onSave,
  onGenerate,
  onPreview,
  onExport,
}) => {
  const [menuAnchor, setMenuAnchor] = useState<null | HTMLElement>(null);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMenuAnchor(event.currentTarget);
  };

  const handleMenuClose = () => {
    setMenuAnchor(null);
  };

  const handlePreview = () => {
    handleMenuClose();
    if (onPreview) {
      onPreview();
    }
  };

  const handleExport = () => {
    handleMenuClose();
    if (onExport) {
      onExport();
    }
  };

  return (
    <>
      <AppBar
        position='static'
        sx={{
          backgroundColor: '#252525',
          borderBottom: '1px solid #2d2d2d',
          boxShadow: 'none',
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between', px: { xs: 1, sm: 2 } }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 1, sm: 2 } }}>
            <IconButton
              onClick={onToggleSidebar}
              sx={{ color: '#e0e0e0', display: { md: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            <IconButton
              onClick={onBack}
              sx={{ color: '#e0e0e0' }}
            >
              <ArrowBack />
            </IconButton>
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              <Typography variant='h6' sx={{ fontWeight: 600, fontSize: { xs: '0.9rem', sm: '1.25rem' } }}>
                {currentCookbook?.title || 'Untitled Cookbook'}
              </Typography>
              {currentCookbook?.status === 'generating' && (
                <Typography variant='caption' sx={{ color: '#fbbf24', display: 'flex', alignItems: 'center', gap: 0.5 }}>
                  <CircularProgress size={12} sx={{ color: '#fbbf24' }} />
                  Generating PDF... (Read-only mode)
                </Typography>
              )}
            </Box>
          </Box>

          <Box sx={{ display: 'flex', gap: { xs: 0.5, sm: 1 }, alignItems: 'center' }}>
            {/* Settings - visible on all screens */}
            <IconButton
              onClick={onSettingsOpen}
              sx={{
                color: '#e0e0e0',
                display: { xs: 'flex', sm: 'none' },
              }}
            >
              <Settings />
            </IconButton>
            <Button
              variant='outlined'
              startIcon={<Settings />}
              onClick={onSettingsOpen}
              sx={{
                color: '#e0e0e0',
                borderColor: '#3a3a3a',
                '&:hover': { borderColor: '#4a4a4a' },
                display: { xs: 'none', sm: 'flex' },
              }}
            >
              <Box component="span" sx={{ display: { xs: 'none', md: 'inline' } }}>
                Settings
              </Box>
            </Button>

            {/* Preview - hide on mobile */}
            <Button
              variant='outlined'
              startIcon={<Preview />}
              onClick={handlePreview}
              sx={{
                color: '#e0e0e0',
                borderColor: '#3a3a3a',
                '&:hover': { borderColor: '#4a4a4a' },
                display: { xs: 'none', md: 'flex' },
              }}
            >
              Preview
            </Button>

            {/* Save - visible on all screens */}
            <Button
              variant='contained'
              startIcon={isSaving ? <CircularProgress size={16} /> : <Save />}
              onClick={onSave}
              disabled={isSaving || currentCookbook?.status === 'generating'}
              sx={{
                backgroundColor: '#3b82f6',
                '&:hover': { backgroundColor: '#2563eb' },
                minWidth: { xs: 'auto', sm: '90px' },
                px: { xs: 1, sm: 2 },
              }}
            >
              <Box component="span" sx={{ display: { xs: 'none', sm: 'inline' } }}>
                {isSaving ? 'Saving...' : 'Save'}
              </Box>
            </Button>

            {/* Generate PDF - hide text on mobile */}
            <Button
              variant='contained'
              startIcon={
                isGenerating ? <CircularProgress size={16} /> : <PictureAsPdf />
              }
              onClick={onGenerate}
              disabled={isGenerating}
              sx={{
                backgroundColor: '#10b981',
                '&:hover': { backgroundColor: '#059669' },
                minWidth: { xs: 'auto', sm: '140px' },
                px: { xs: 1, sm: 2 },
              }}
            >
              <Box component="span" sx={{ display: { xs: 'none', sm: 'inline' } }}>
                {isGenerating ? 'Generating...' : 'Generate PDF'}
              </Box>
            </Button>

            {/* More menu */}
            <IconButton onClick={handleMenuOpen} sx={{ color: '#e0e0e0' }}>
              <MoreVert />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Menu */}
      <Menu
        anchorEl={menuAnchor}
        open={Boolean(menuAnchor)}
        onClose={handleMenuClose}
        PaperProps={{
          sx: {
            backgroundColor: '#252525',
            color: '#e0e0e0',
          },
        }}
      >
        <MenuItem onClick={handlePreview}>Preview</MenuItem>
        <MenuItem onClick={handleExport}>Export</MenuItem>
      </Menu>
    </>
  );
};

export default CookbookHeader;
