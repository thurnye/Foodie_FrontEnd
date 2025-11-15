import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Box,
  CircularProgress,
  Alert,
  Snackbar,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import EditorSidebar from '../components/EditorSidebar';
import RecipeSelector from '../components/RecipeSelector';
import CookbookSettings from '../components/CookbookSettings';
import CookbookHeader from '../components/CookbookHeader';
import CookbookContentDisplay from '../components/CookbookContentDisplay';
import CookbookPageNavigation from '../components/CookbookPageNavigation';
import { useCookbookData } from '../hooks/useCookbookData';
import { useCookbookNavigation } from '../hooks/useCookbookNavigation';
import { useCookbookActions } from '../hooks/useCookbookActions';

const CookbookEditor: React.FC = () => {
  const { cookbookId } = useParams<{ cookbookId: string }>();
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const [recipeSelectorOpen, setRecipeSelectorOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [extraPages, setExtraPages] = useState<Array<{
    id: string;
    title: string;
    type: 'blank' | 'template';
    templateType?: string;
    section?: 'front' | 'back';
  }>>([]);

  // Custom hooks for state and logic management
  const {
    currentCookbook,
    loading,
    error,
    selectedSection,
    setSelectedSection,
    pendingChanges,
    setPendingChanges,
    recipeNotes,
  } = useCookbookData(cookbookId);

  const {
    currentPageNumber,
    totalPages,
    handlePreviousPage,
    handleNextPage,
  } = useCookbookNavigation({
    currentCookbook,
    selectedSection,
    setSelectedSection,
  });

  const {
    snackbar,
    setSnackbar,
    isSaving,
    isGenerating,
    handleSave,
    handleGenerate,
    handleAddRecipes,
    handleSettingsSave,
  } = useCookbookActions({
    cookbookId,
    currentCookbook,
    pendingChanges,
    recipeNotes,
    setPendingChanges,
  });

  // Simple handlers
  const handlePreview = () => {
    console.log('Preview cookbook');
  };

  const handleExport = () => {
    console.log('Export cookbook');
  };

  const handleAddExtraPage = (pageType: 'blank' | 'template', section: 'front' | 'back', templateType?: string) => {
    const pageId = `extra-page-${Date.now()}`;
    let pageTitle = '';

    if (pageType === 'blank') {
      pageTitle = 'Blank Page';
    } else if (templateType === 'weekly-planner') {
      pageTitle = 'Weekly Planner';
    } else if (templateType === 'note-page') {
      pageTitle = 'Note Page';
    }

    const newPage = {
      id: pageId,
      title: pageTitle,
      type: pageType as 'blank' | 'template',
      templateType,
      section,
    };

    setExtraPages((prev) => [...prev, newPage]);
    setSelectedSection(pageId);
  };

  // Loading state
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

  // Error state
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
      {/* Header */}
      <CookbookHeader
        currentCookbook={currentCookbook}
        isSaving={isSaving}
        isGenerating={isGenerating}
        sidebarOpen={sidebarOpen}
        onBack={() => navigate('/dashboard/cook-book')}
        onToggleSidebar={() => setSidebarOpen(!sidebarOpen)}
        onSettingsOpen={() => setSettingsOpen(true)}
        onSave={handleSave}
        onGenerate={handleGenerate}
        onPreview={handlePreview}
        onExport={handleExport}
      />

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
            recipes={currentCookbook?.books || []}
            selectedRecipeId={selectedSection}
            onRecipeSelect={(id) => {
              setSelectedSection(id);
              setSidebarOpen(false);
            }}
            onAddRecipe={() => setRecipeSelectorOpen(true)}
            onEditInfo={() => setSettingsOpen(true)}
            onAddExtraPage={handleAddExtraPage}
            extraPages={extraPages}
            isGenerating={currentCookbook?.status === 'generating'}
          />
        </Box>

        {/* Sidebar - Desktop Permanent */}
        <Box sx={{ display: { xs: 'none', md: 'block' } }}>
          <EditorSidebar
            cookbookTitle={currentCookbook?.title || 'My Cookbook'}
            recipes={currentCookbook?.books || []}
            selectedRecipeId={selectedSection}
            onRecipeSelect={setSelectedSection}
            onAddRecipe={() => setRecipeSelectorOpen(true)}
            onEditInfo={() => setSettingsOpen(true)}
            onAddExtraPage={handleAddExtraPage}
            extraPages={extraPages}
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
          {/* Content Display */}
          <CookbookContentDisplay
            selectedSection={selectedSection}
            currentCookbook={currentCookbook}
            currentPageNumber={currentPageNumber}
            totalPages={totalPages}
            onPreviousPage={handlePreviousPage}
            onNextPage={handleNextPage}
            extraPages={extraPages}
          />

          {/* Page Navigation Footer */}
          <CookbookPageNavigation
            currentPageNumber={currentPageNumber}
            totalPages={totalPages}
            onPreviousPage={handlePreviousPage}
            onNextPage={handleNextPage}
          />
        </Box>
      </Box>

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
