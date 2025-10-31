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
  const [recipeSelectorOpen, setRecipeSelectorOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [menuAnchor, setMenuAnchor] = useState<null | HTMLElement>(null);
  const [snackbar, setSnackbar] = useState<{
    open: boolean;
    message: string;
    severity: 'success' | 'error' | 'info';
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
      setEditorContent(currentCookbook?.description || '');
    } else if (selectedSection === 'intro') {
      setEditorContent(currentCookbook?.authorBio || '');
    } else if (selectedSection === 'notes') {
      setEditorContent('Add any additional notes here...');
    }
  }, [selectedSection, currentCookbook]);

  const handleSave = async () => {
    if (!cookbookId || !currentCookbook) return;

    setIsSaving(true);
    try {
      const updates: UpdateCookbookData = {
        title: currentCookbook.title,
        description: currentCookbook.description,
        recipes: currentCookbook.recipes.map((r) =>
          typeof r === 'string' ? r : r._id
        ),
      };

      await dispatch(updateCookbook({ cookbookId, data: updates })).unwrap();
      setSnackbar({
        open: true,
        message: 'Cookbook saved successfully',
        severity: 'success',
      });
    } catch (err: any) {
      setSnackbar({
        open: true,
        message: err || 'Failed to save cookbook',
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
      setSnackbar({
        open: true,
        message: err || 'Failed to generate cookbook',
        severity: 'error',
      });
    } finally {
      setIsGenerating(false);
    }
  };

  const handleAddRecipes = (recipeIds: string[]) => {
    if (!cookbookId || !currentCookbook) return;

    const existingRecipeIds = currentCookbook.recipes.map((r) =>
      typeof r === 'string' ? r : r._id
    );
    const newRecipeIds = [...existingRecipeIds, ...recipeIds];

    setSelectedRecipeIds(newRecipeIds);

    dispatch(
      updateCookbook({
        cookbookId,
        data: { recipes: newRecipeIds },
      })
    );

    dispatch(clearSelectedRecipes());
    setSnackbar({
      open: true,
      message: `${recipeIds.length} recipe(s) added to cookbook`,
      severity: 'success',
    });
  };

  const handleSettingsSave = (settings: Partial<ICookbook>) => {
    if (!cookbookId) return;

    dispatch(
      updateCookbook({
        cookbookId,
        data: settings as UpdateCookbookData,
      })
    );

    setSnackbar({
      open: true,
      message: 'Settings updated successfully',
      severity: 'success',
    });
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
            <Typography variant='h6' sx={{ fontWeight: 600 }}>
              {currentCookbook?.title || 'Untitled Cookbook'}
            </Typography>
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
              disabled={isSaving}
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
          <EditorToolbar onFormat={handleFormat} />

          {/* Editor Content */}
          <CookBookContents
            selectedSection={selectedSection}
            currentCookbook={currentCookbook}
            editorContents={editorContent}
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
