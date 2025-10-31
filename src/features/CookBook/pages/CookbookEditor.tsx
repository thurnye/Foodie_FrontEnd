import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Menu,
  MenuItem,
  CircularProgress,
  Alert,
  Snackbar,
} from '@mui/material';
import {
  Save,
  Preview,
  PictureAsPdf,
  Settings,
  MoreVert,
  ArrowBack,
} from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../app/stores/stores';
import { clearSelectedRecipes } from '../redux/cookbook.slice';
import {
  fetchCookbookById,
  updateCookbook,
  generateCookbook,
} from '../redux/cookbook.async.thunk';
import EditorSidebar from '../components/EditorSidebar';
import EditorToolbar from '../components/EditorToolbar';
import RecipeSelector from '../components/RecipeSelector';
import CookbookSettings from '../components/CookbookSettings';
import { IRecipe } from '../../Recipe/types/recipe.types';
import { ICookbook, UpdateCookbookData } from '../types/cookbook.types';
import CookBookContents from '../components/CookBookContents';

const CookbookEditor: React.FC = () => {
  const { cookbookId } = useParams<{ cookbookId: string }>();
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const { currentCookbook, loading, error, selectedRecipes } = useSelector(
    (state: RootState) => state.cookbook
  );
  const [selectedRecipeIds, setSelectedRecipeIds] = useState<string[]>([]);
  const [selectedSection, setSelectedSection] = useState<string | null>(
    'cover'
  );
  const [editorContent, setEditorContent] = useState('');
  const [pendingChanges, setPendingChanges] = useState<{
    description?: string;
    authorBio?: string;
    notes?: string;
  }>({});
  const [recipeNotes, setRecipeNotes] = useState<Record<string, string>>({});
  const [recipeSelectorOpen, setRecipeSelectorOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [menuAnchor, setMenuAnchor] = useState<null | HTMLElement>(null);
  const [snackbar, setSnackbar] = useState<{
    open: boolean;
    message: string;
    severity: 'success' | 'error' | 'info' | 'warning';
  }>({ open: false, message: '', severity: 'info' });
  const [isSaving, setIsSaving] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);

  // Fetch cookbook on mount
  useEffect(() => {
    if (cookbookId) {
      dispatch(fetchCookbookById(cookbookId));
    }
  }, [cookbookId, dispatch]);

  // Update editor content when section changes
  useEffect(() => {
    if (selectedSection === 'cover') {
      setEditorContent(pendingChanges.description || currentCookbook?.description || '');
    } else if (selectedSection === 'intro') {
      setEditorContent(pendingChanges.authorBio || currentCookbook?.authorBio || '');
    } else if (selectedSection === 'notes') {
      setEditorContent(pendingChanges.notes || 'Add any additional notes here...');
    } else if (selectedSection && selectedSection !== 'toc') {
      // For recipe sections - the content will be generated in CookBookContents
      // We just pass through any existing notes or empty string
      setEditorContent(recipeNotes[selectedSection] || '');
    }
  }, [selectedSection, currentCookbook, pendingChanges, recipeNotes]);

  // Handle content change from editor
  const handleContentChange = (content: string) => {
    setEditorContent(content);

    // Update pending changes based on selected section
    if (selectedSection === 'cover') {
      setPendingChanges(prev => ({ ...prev, description: content }));
    } else if (selectedSection === 'intro') {
      setPendingChanges(prev => ({ ...prev, authorBio: content }));
    } else if (selectedSection === 'notes') {
      setPendingChanges(prev => ({ ...prev, notes: content }));
    } else if (selectedSection && selectedSection !== 'toc') {
      // Store recipe edits by recipe ID
      setRecipeNotes(prev => ({ ...prev, [selectedSection]: content }));
    }
  };

  const handleSave = async () => {
    if (!cookbookId || !currentCookbook) return;

    // Check if cookbook is being generated
    if (currentCookbook.status === 'generating') {
      setSnackbar({
        open: true,
        message: 'Cannot update cookbook while it is being generated. Please wait for generation to complete.',
        severity: 'warning',
      });
      return;
    }

    setIsSaving(true);
    try {
      const updates: UpdateCookbookData = {
        title: currentCookbook.title,
        description: pendingChanges.description || currentCookbook.description,
        authorBio: pendingChanges.authorBio || currentCookbook.authorBio,
        recipes: currentCookbook.recipes.map((r) =>
          typeof r === 'string' ? r : r._id
        ),
      };

      await dispatch(updateCookbook({ cookbookId, data: updates })).unwrap();

      // Refresh the cookbook to ensure all data is up-to-date
      await dispatch(fetchCookbookById(cookbookId)).unwrap();

      // Clear pending changes after successful save
      setPendingChanges({});

      setSnackbar({
        open: true,
        message: 'Cookbook saved successfully. Note: Recipe edits are saved in the cookbook context only.',
        severity: 'success',
      });
    } catch (err: any) {
      console.error('Save cookbook error:', err);
      const errorMessage = typeof err === 'string'
        ? err
        : err?.message || err?.error || 'Failed to save cookbook';

      setSnackbar({
        open: true,
        message: errorMessage,
        severity: 'error',
      });
    } finally {
      setIsSaving(false);
    }
  };

  const handleGenerate = async () => {
    if (!cookbookId) return;

    setIsGenerating(true);
    try {
      await dispatch(generateCookbook(cookbookId)).unwrap();
      setSnackbar({
        open: true,
        message: 'Cookbook generation started',
        severity: 'info',
      });
    } catch (err: any) {
      console.error('Generate cookbook error:', err);
      const errorMessage = typeof err === 'string'
        ? err
        : err?.message || err?.error || 'Failed to generate cookbook';

      setSnackbar({
        open: true,
        message: errorMessage,
        severity: 'error',
      });
    } finally {
      setIsGenerating(false);
    }
  };

  const handleAddRecipes = async (recipeIds: string[]) => {
    if (!cookbookId || !currentCookbook) return;

    // Check if cookbook is being generated
    if (currentCookbook.status === 'generating') {
      setSnackbar({
        open: true,
        message: 'Cannot add recipes while cookbook is being generated. Please wait for generation to complete.',
        severity: 'warning',
      });
      return;
    }

    try {
      const existingRecipeIds = currentCookbook.recipes.map((r) =>
        typeof r === 'string' ? r : r._id
      );
      const newRecipeIds = [...existingRecipeIds, ...recipeIds];

      setSelectedRecipeIds(newRecipeIds);

      await dispatch(
        updateCookbook({
          cookbookId,
          data: { recipes: newRecipeIds },
        })
      ).unwrap();

      // Refresh the cookbook to get populated recipe data
      await dispatch(fetchCookbookById(cookbookId)).unwrap();

      dispatch(clearSelectedRecipes());
      setSnackbar({
        open: true,
        message: `${recipeIds.length} recipe(s) added to cookbook`,
        severity: 'success',
      });
    } catch (err: any) {
      console.error('Add recipes error:', err);
      const errorMessage = typeof err === 'string'
        ? err
        : err?.message || err?.error || 'Failed to add recipes';

      setSnackbar({
        open: true,
        message: errorMessage,
        severity: 'error',
      });
    }
  };

  const handleSettingsSave = async (settings: Partial<ICookbook>) => {
    if (!cookbookId || !currentCookbook) return;

    // Check if cookbook is being generated
    if (currentCookbook.status === 'generating') {
      setSnackbar({
        open: true,
        message: 'Cannot update settings while cookbook is being generated. Please wait for generation to complete.',
        severity: 'warning',
      });
      return;
    }

    try {
      await dispatch(
        updateCookbook({
          cookbookId,
          data: settings as UpdateCookbookData,
        })
      ).unwrap();

      // Refresh the cookbook to ensure all data is up-to-date
      await dispatch(fetchCookbookById(cookbookId)).unwrap();

      setSnackbar({
        open: true,
        message: 'Settings updated successfully',
        severity: 'success',
      });
    } catch (err: any) {
      console.error('Update settings error:', err);
      const errorMessage = typeof err === 'string'
        ? err
        : err?.message || err?.error || 'Failed to update settings';

      setSnackbar({
        open: true,
        message: errorMessage,
        severity: 'error',
      });
    }
  };

  // Todo
  const handleFormat = (format: string) => {
    console.log('Format applied:', format);
    // TODO: Implement rich text formatting
  };

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMenuAnchor(event.currentTarget);
  };

  const handleMenuClose = () => {
    setMenuAnchor(null);
  };

  const handlePreview = () => {
    handleMenuClose();
    // TODO: Open preview in new tab/modal
    console.log('Preview cookbook');
  };

  const handleExport = () => {
    handleMenuClose();
    // TODO: Export cookbook data
    console.log('Export cookbook');
  };

  if (loading && !currentCookbook) {
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          backgroundColor: '#1e1e1e',
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  if (error && !currentCookbook) {
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          backgroundColor: '#1e1e1e',
        }}
      >
        <Alert severity='error' sx={{ maxWidth: 400 }}>
          {error}
        </Alert>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        backgroundColor: '#1e1e1e',
        color: '#e0e0e0',
      }}
    >
      {/* Top AppBar */}
      <AppBar
        position='static'
        sx={{
          backgroundColor: '#252525',
          borderBottom: '1px solid #2d2d2d',
          boxShadow: 'none',
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <IconButton
              onClick={() => navigate('/cookbook')}
              sx={{ color: '#e0e0e0' }}
            >
              <ArrowBack />
            </IconButton>
            <Box>
              <Typography variant='h6' sx={{ fontWeight: 600 }}>
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

          <Box sx={{ display: 'flex', gap: 1 }}>
            <Button
              variant='outlined'
              startIcon={<Settings />}
              onClick={() => setSettingsOpen(true)}
              sx={{
                color: '#e0e0e0',
                borderColor: '#3a3a3a',
                '&:hover': { borderColor: '#4a4a4a' },
              }}
            >
              Settings
            </Button>
            <Button
              variant='outlined'
              startIcon={<Preview />}
              onClick={handlePreview}
              sx={{
                color: '#e0e0e0',
                borderColor: '#3a3a3a',
                '&:hover': { borderColor: '#4a4a4a' },
              }}
            >
              Preview
            </Button>
            <Button
              variant='contained'
              startIcon={isSaving ? <CircularProgress size={16} /> : <Save />}
              onClick={handleSave}
              disabled={isSaving || currentCookbook?.status === 'generating'}
              sx={{
                backgroundColor: '#3b82f6',
                '&:hover': { backgroundColor: '#2563eb' },
              }}
            >
              {isSaving ? 'Saving...' : 'Save'}
            </Button>
            <Button
              variant='contained'
              startIcon={
                isGenerating ? <CircularProgress size={16} /> : <PictureAsPdf />
              }
              onClick={handleGenerate}
              disabled={isGenerating}
              sx={{
                backgroundColor: '#10b981',
                '&:hover': { backgroundColor: '#059669' },
              }}
            >
              {isGenerating ? 'Generating...' : 'Generate PDF'}
            </Button>
            <IconButton onClick={handleMenuOpen} sx={{ color: '#e0e0e0' }}>
              <MoreVert />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Main Content Area */}
      <Box sx={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
        {/* Sidebar */}
        <EditorSidebar
          cookbookTitle={currentCookbook?.title || 'My Cookbook'}
          recipes={currentCookbook?.recipes || []}
          selectedRecipeId={selectedSection}
          onRecipeSelect={setSelectedSection}
          onAddRecipe={() => setRecipeSelectorOpen(true)}
          onEditInfo={() => setSettingsOpen(true)}
          isGenerating={currentCookbook?.status === 'generating'}
        />

        {/* Editor Area */}
        <Box
          sx={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
          }}
        >
          {/* Editor Toolbar */}
          {/* <EditorToolbar onFormat={handleFormat} /> */}

          {/* Editor Content */}
          <CookBookContents
            selectedSection={selectedSection}
            currentCookbook={currentCookbook}
            editorContents={editorContent}
            onContentChange={handleContentChange}
          />
        </Box>
      </Box>

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

      {/* Recipe Selector Dialog */}
      <RecipeSelector
        open={recipeSelectorOpen}
        onClose={() => setRecipeSelectorOpen(false)}
        onConfirm={handleAddRecipes}
      />

      {/* Settings Dialog */}
      <CookbookSettings
        open={settingsOpen}
        onClose={() => setSettingsOpen(false)}
        cookbook={currentCookbook}
        onSave={handleSettingsSave}
      />

      {/* Snackbar for notifications */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={4000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
        <Alert
          onClose={() => setSnackbar({ ...snackbar, open: false })}
          severity={snackbar.severity}
          sx={{ width: '100%' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default CookbookEditor;
