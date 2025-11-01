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
  Drawer,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import {
  Save,
  Preview,
  PictureAsPdf,
  Settings,
  MoreVert,
  ArrowBack,
  ChevronLeft,
  ChevronRight,
  Menu as MenuIcon,
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
import { IBookSection } from '../types/book.types';
import CookBookContents from '../components/CookBookContents';
import axios from 'axios';

const CookbookEditor: React.FC = () => {
  const { cookbookId } = useParams<{ cookbookId: string }>();
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

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
  const [currentPageNumber, setCurrentPageNumber] = useState(1);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  // Fetch cookbook on mount
  useEffect(() => {
    if (cookbookId) {
      dispatch(fetchCookbookById(cookbookId));
    }
  }, [cookbookId, dispatch]);

  // Calculate total pages and current page number
  const calculatePageInfo = () => {
    if (!currentCookbook) return { totalPages: 1, currentPage: 1 };

    // Page structure:
    // 1. Cover
    // 2. Introduction
    // 3. Table of Contents
    // 4-N. Recipes (one page per recipe)
    // N+1. Notes

    const recipeCount = currentCookbook.recipes?.length || 0;
    const totalPages = 3 + recipeCount + 1; // cover + intro + toc + recipes + notes

    let currentPage = 1;
    if (selectedSection === 'cover') {
      currentPage = 1;
    } else if (selectedSection === 'intro') {
      currentPage = 2;
    } else if (selectedSection === 'toc') {
      currentPage = 3;
    } else if (selectedSection === 'notes') {
      currentPage = totalPages;
    } else if (selectedSection && selectedSection !== 'toc') {
      // It's a recipe - find its index
      const recipeIndex = currentCookbook.recipes.findIndex((r) =>
        typeof r === 'string' ? r === selectedSection : r._id === selectedSection
      );
      if (recipeIndex !== -1) {
        currentPage = 4 + recipeIndex; // cover(1) + intro(2) + toc(3) + recipe position
      }
    }

    return { totalPages, currentPage };
  };

  // Update editor content and page number when section changes
  useEffect(() => {
    if (selectedSection === 'cover') {
      setEditorContent(pendingChanges.description || currentCookbook?.description || '');
    } else if (selectedSection === 'intro') {
      setEditorContent(pendingChanges.authorBio || currentCookbook?.authorBio || '');
    } else if (selectedSection === 'notes') {
      setEditorContent(pendingChanges.notes || 'Add any additional notes here...');
    } else if (selectedSection && selectedSection !== 'toc') {
      // For recipe sections - check if user has edited this recipe
      // If there are edited notes, pass them; otherwise pass undefined
      // to let CookBookContents generate the HTML from recipe data
      const editedContent = recipeNotes[selectedSection];
      setEditorContent(editedContent !== undefined ? editedContent : '');
    }

    // Update page number
    const { currentPage } = calculatePageInfo();
    setCurrentPageNumber(currentPage);
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

  // Navigate to previous page
  const handlePreviousPage = () => {
    if (!currentCookbook) return;

    const { currentPage } = calculatePageInfo();
    if (currentPage <= 1) return;

    const targetPage = currentPage - 1;
    navigateToPage(targetPage);
  };

  // Navigate to next page
  const handleNextPage = () => {
    if (!currentCookbook) return;

    const { currentPage, totalPages } = calculatePageInfo();
    if (currentPage >= totalPages) return;

    const targetPage = currentPage + 1;
    navigateToPage(targetPage);
  };

  // Navigate to a specific page number
  const navigateToPage = (pageNumber: number) => {
    if (!currentCookbook) return;

    if (pageNumber === 1) {
      setSelectedSection('cover');
    } else if (pageNumber === 2) {
      setSelectedSection('intro');
    } else if (pageNumber === 3) {
      setSelectedSection('toc');
    } else if (pageNumber === calculatePageInfo().totalPages) {
      setSelectedSection('notes');
    } else {
      // It's a recipe page
      const recipeIndex = pageNumber - 4; // Subtract cover(1), intro(2), toc(3)
      if (recipeIndex >= 0 && recipeIndex < currentCookbook.recipes.length) {
        const recipe = currentCookbook.recipes[recipeIndex];
        const recipeId = typeof recipe === 'string' ? recipe : recipe._id;
        setSelectedSection(recipeId);
      }
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

  const handleSaveAsBook = async () => {
    if (!cookbookId || !currentCookbook) return;

    setIsSaving(true);
    try {
      // Collect all edited sections
      const sections: IBookSection[] = [];

      // Add cover section if edited
      if (pendingChanges.description) {
        sections.push({
          sectionId: 'cover',
          sectionType: 'cover',
          content: pendingChanges.description,
          lastEditedAt: new Date().toISOString(),
        });
      }

      // Add intro section if edited
      if (pendingChanges.authorBio) {
        sections.push({
          sectionId: 'intro',
          sectionType: 'intro',
          content: pendingChanges.authorBio,
          lastEditedAt: new Date().toISOString(),
        });
      }

      // Add notes section if edited
      if (pendingChanges.notes) {
        sections.push({
          sectionId: 'notes',
          sectionType: 'notes',
          content: pendingChanges.notes,
          lastEditedAt: new Date().toISOString(),
        });
      }

      // Add all edited recipes
      Object.entries(recipeNotes).forEach(([recipeId, content]) => {
        if (content && content.trim()) {
          sections.push({
            sectionId: recipeId,
            sectionType: 'recipe',
            content,
            lastEditedAt: new Date().toISOString(),
          });
        }
      });

      if (sections.length === 0) {
        setSnackbar({
          open: true,
          message: 'No edited content to save. Please edit some sections first.',
          severity: 'warning',
        });
        setIsSaving(false);
        return;
      }

      // Save as book
      const response = await axios.post(
        `${process.env.REACT_APP_API_BASE_URL}/cookbook-service/api/books`,
        {
          cookbookId,
          title: currentCookbook.title,
          description: currentCookbook.description,
          sections,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
          withCredentials: true,
        }
      );

      console.log('Book saved:', response.data);

      setSnackbar({
        open: true,
        message: `Book saved successfully with ${sections.length} edited section(s)!`,
        severity: 'success',
      });
    } catch (err: any) {
      console.error('Save as book error:', err);
      const errorMessage = err?.response?.data?.message || err?.message || 'Failed to save as book';

      setSnackbar({
        open: true,
        message: errorMessage,
        severity: 'error',
      });
    } finally {
      setIsSaving(false);
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
    console.log('CookbookEditor - handleSettingsSave called with:', settings);

    if (!cookbookId || !currentCookbook) {
      console.error('Missing cookbookId or currentCookbook');
      return;
    }

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
      // Filter out empty strings - backend doesn't allow them
      const cleanedSettings: UpdateCookbookData = {};

      Object.entries(settings).forEach(([key, value]) => {
        // Skip empty strings for optional fields
        if (value === '' && ['coverImage', 'authorBio', 'authorImage', 'description'].includes(key)) {
          return;
        }
        // Include all other values
        cleanedSettings[key as keyof UpdateCookbookData] = value as any;
      });

      console.log('Dispatching updateCookbook with cleaned data:', { cookbookId, data: cleanedSettings });
      await dispatch(
        updateCookbook({
          cookbookId,
          data: cleanedSettings,
        })
      ).unwrap();

      // Refresh the cookbook to ensure all data is up-to-date
      await dispatch(fetchCookbookById(cookbookId)).unwrap();

      console.log('Settings updated and cookbook refreshed successfully');
      setSnackbar({
        open: true,
        message: 'Settings updated successfully',
        severity: 'success',
      });
    } catch (err: any) {
      console.error('Update settings error:', err);
      console.error('Error details:', {
        message: err?.message,
        error: err?.error,
        full: err
      });
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
        <Toolbar sx={{ justifyContent: 'space-between', px: { xs: 1, sm: 2 } }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 1, sm: 2 } }}>
            <IconButton
              onClick={() => setSidebarOpen(!sidebarOpen)}
              sx={{ color: '#e0e0e0', display: { md: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            <IconButton
              onClick={() => navigate('/dashboard/cook-book')}
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
              onClick={() => setSettingsOpen(true)}
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
              onClick={() => setSettingsOpen(true)}
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
              onClick={handleSave}
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

            {/* Save as Book - hide text on small screens */}
            <Button
              variant='contained'
              startIcon={<Save />}
              onClick={handleSaveAsBook}
              disabled={isSaving || currentCookbook?.status === 'generating'}
              sx={{
                backgroundColor: '#8b5cf6',
                '&:hover': { backgroundColor: '#7c3aed' },
                display: { xs: 'none', lg: 'flex' },
              }}
            >
              Save as Book
            </Button>

            {/* Generate PDF - hide text on mobile */}
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

      {/* Main Content Area */}
      <Box sx={{ display: 'flex', flex: 1, overflow: 'hidden', position: 'relative' }}>
        {/* Sidebar - Mobile Drawer (Absolute positioned) */}
        <Box
          sx={{
            display: { xs: sidebarOpen ? 'block' : 'none', md: 'none' },
            position: 'absolute',
            top: 0,
            left: 0,
            bottom: 0,
            width: 280,
            zIndex: 1200,
            boxShadow: '2px 0 8px rgba(0,0,0,0.3)',
          }}
        >
          <EditorSidebar
            cookbookTitle={currentCookbook?.title || 'My Cookbook'}
            recipes={currentCookbook?.recipes || []}
            selectedRecipeId={selectedSection}
            onRecipeSelect={(id) => {
              setSelectedSection(id);
              setSidebarOpen(false); // Close drawer on mobile after selection
            }}
            onAddRecipe={() => setRecipeSelectorOpen(true)}
            onEditInfo={() => setSettingsOpen(true)}
            isGenerating={currentCookbook?.status === 'generating'}
          />
        </Box>

        {/* Sidebar - Desktop Permanent */}
        <Box sx={{ display: { xs: 'none', md: 'block' } }}>
          <EditorSidebar
            cookbookTitle={currentCookbook?.title || 'My Cookbook'}
            recipes={currentCookbook?.recipes || []}
            selectedRecipeId={selectedSection}
            onRecipeSelect={setSelectedSection}
            onAddRecipe={() => setRecipeSelectorOpen(true)}
            onEditInfo={() => setSettingsOpen(true)}
            isGenerating={currentCookbook?.status === 'generating'}
          />
        </Box>

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
          <Box sx={{ flex: 1, overflow: 'hidden' }}>
            <CookBookContents
              selectedSection={selectedSection}
              currentCookbook={currentCookbook}
              editorContents={editorContent}
              onContentChange={handleContentChange}
            />
          </Box>

          {/* Page Navigation Footer */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              px: { xs: 1, sm: 2, md: 3 },
              py: { xs: 1, sm: 1.5 },
              backgroundColor: '#252525',
              borderTop: '1px solid #2d2d2d',
            }}
          >
            <IconButton
              onClick={handlePreviousPage}
              disabled={currentPageNumber <= 1}
              sx={{
                color: '#e0e0e0',
                '&.Mui-disabled': { color: '#6b7280' },
                p: { xs: 0.5, sm: 1 },
              }}
            >
              <ChevronLeft />
            </IconButton>

            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: { xs: 1, sm: 2 },
              }}
            >
              <Typography
                variant='body2'
                sx={{
                  color: '#9ca3af',
                  fontSize: { xs: '0.75rem', sm: '0.875rem' },
                  display: { xs: 'none', sm: 'block' },
                }}
              >
                Page
              </Typography>
              <Typography
                variant='h6'
                sx={{
                  color: '#e0e0e0',
                  fontWeight: 600,
                  fontSize: { xs: '0.875rem', sm: '1rem' },
                }}
              >
                {currentPageNumber}
              </Typography>
              <Typography
                variant='body2'
                sx={{
                  color: '#6b7280',
                  fontSize: { xs: '0.75rem', sm: '0.875rem' },
                }}
              >
                of {calculatePageInfo().totalPages}
              </Typography>
            </Box>

            <IconButton
              onClick={handleNextPage}
              disabled={currentPageNumber >= calculatePageInfo().totalPages}
              sx={{
                color: '#e0e0e0',
                '&.Mui-disabled': { color: '#6b7280' },
                p: { xs: 0.5, sm: 1 },
              }}
            >
              <ChevronRight />
            </IconButton>
          </Box>
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
        <MenuItem
          onClick={() => {
            handleMenuClose();
            handleSaveAsBook();
          }}
          sx={{ display: { lg: 'none' } }}
        >
          Save as Book
        </MenuItem>
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
