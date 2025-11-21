import React, { useEffect, useState } from 'react';
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
  LinearProgress,
} from '@mui/material';
import {
  Save,
  Preview,
  PictureAsPdf,
  Settings,
  MoreVert,
  ArrowBack,
  Menu as MenuIcon,
  Download,
} from '@mui/icons-material';
import { ICookbook } from '../types/cookbook.types';
import { useGenerationStatus } from '../hooks/useGenerationStatus';

interface CookbookHeaderProps {
  currentCookbook: ICookbook | null;
  bookName?: string; // Optional book name for BookEditor context
  bookId?: string; // Book ID for generation status polling
  bookStatus?: string; // Book status for checking if generating
  bookUrl?: string; // URL to the generated PDF
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
  bookName,
  bookId,
  bookStatus,
  bookUrl,
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

  // Poll for generation status when generating (check both isGenerating prop and bookStatus)
  const isCurrentlyGenerating = isGenerating || bookStatus === 'generating';
  const generationStatus = useGenerationStatus(bookId, isCurrentlyGenerating);

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

  const handleDownloadPdf = () => {
    if (!bookUrl) return;

    // Create a temporary anchor element to trigger download
    const link = document.createElement('a');
    link.href = bookUrl;
    link.download = `${bookName || currentCookbook?.title || 'cookbook'}.pdf`;
    link.target = '_blank'; // Open in new tab as fallback
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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
              <Typography
                variant='h6'
                sx={{
                  fontWeight: 600,
                  fontSize: { xs: '0.9rem', sm: '1.25rem' },
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                }}
              >
                <span style={{ color: '#9ca3af' }}>
                  {currentCookbook?.title || 'Untitled Cookbook'}
                </span>
                {bookName && (
                  <>
                    <span style={{ color: '#4a5568' }}>{'>'}</span>
                    <span style={{ color: '#e0e0e0' }}>{bookName}</span>
                  </>
                )}
              </Typography>
              {bookStatus === 'generating' && (
                <Box sx={{ mt: 0.5 }}>
                  <Typography variant='caption' sx={{ color: '#fbbf24', display: 'flex', alignItems: 'center', gap: 0.5 }}>
                    <CircularProgress size={12} sx={{ color: '#fbbf24' }} />
                    {generationStatus ? (
                      <>
                        Generating: {generationStatus.current} ({generationStatus.currentStep}/{generationStatus.total})
                      </>
                    ) : (
                      'Generating PDF... (Read-only mode)'
                    )}
                  </Typography>
                  {generationStatus && (
                    <LinearProgress
                      variant="determinate"
                      value={(generationStatus.currentStep / generationStatus.total) * 100}
                      sx={{
                        mt: 0.5,
                        height: 4,
                        borderRadius: 2,
                        backgroundColor: '#3a3a3a',
                        '& .MuiLinearProgress-bar': {
                          backgroundColor: '#fbbf24',
                        },
                      }}
                    />
                  )}
                </Box>
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
            {/* <Button
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
            </Button> */}

            {/* Save - visible on all screens */}
            {/* <Button
              variant='contained'
              startIcon={isSaving ? <CircularProgress size={16} /> : <Save />}
              onClick={onSave}
              disabled={isSaving || bookStatus === 'generating'}
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
            </Button> */}

            {/* Download PDF - visible when PDF is available */}
            {bookUrl && bookStatus === 'completed' && (
              <Button
                variant='contained'
                startIcon={<Download />}
                onClick={handleDownloadPdf}
                disabled={isGenerating}
                sx={{
                  backgroundColor: '#8b5cf6',
                  '&:hover': { backgroundColor: '#7c3aed' },
                  minWidth: { xs: 'auto', sm: '140px' },
                  px: { xs: 1, sm: 2 },
                }}
              >
                <Box component="span" sx={{ display: { xs: 'none', sm: 'inline' } }}>
                  Download PDF
                </Box>
              </Button>
            )}

            {/* Generate PDF - hide text on mobile */}
            {/* {(!bookUrl || bookStatus !== 'completed') && ( */}
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
            {/* )} */}

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
