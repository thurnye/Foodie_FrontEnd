import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {
  Box,
  CircularProgress,
  Alert,
  Snackbar,
  Button,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import EditorSidebar from '../components/EditorSidebar';
import RecipeSelector from '../components/RecipeSelector';
import CookbookSettings from '../components/CookbookSettings';
import CookbookHeader from '../components/CookbookHeader';
import CookbookContentDisplay from '../components/CookbookContentDisplay';
import CookbookPageNavigation from '../components/CookbookPageNavigation';
import DeletePageDialog from '../components/DeletePageDialog';
import { useCookbookData } from '../hooks/useCookbookData';
import { useCookbookNavigation } from '../hooks/useCookbookNavigation';
import { useCookbookActions } from '../hooks/useCookbookActions';
import { apiClient } from '../../../shared/services/apiClient.service';
import { fetchCookbookById } from '../redux/cookbook.async.thunk';
import { AppDispatch } from '../../../app/stores/stores';
import { bookService } from '../services/book.service';

const BookEditor: React.FC = () => {
  const { bookId } = useParams<{ bookId: string }>();
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const [recipeSelectorOpen, setRecipeSelectorOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [cookbookId, setCookbookId] = useState<string | undefined>(undefined);
  const [loadingBook, setLoadingBook] = useState(true);
  const [bookError, setBookError] = useState<string | null>(null);
  const [currentBook, setCurrentBook] = useState<any>(null);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [pageToDelete, setPageToDelete] = useState<{ pageId: string; pageType: 'extra' | 'recipe'; pageName?: string } | null>(null);

  // Fetch book data
  useEffect(() => {
    const fetchBook = async () => {
      if (!bookId) return;

      try {
        setLoadingBook(true);
        const book = await bookService.getBookById(bookId);

        // Extract cookbook ID - could be string or object if populated
        const extractedCookbookId = typeof book.cookbook === 'string'
          ? book.cookbook
          : (book.cookbook as any)?._id || book.cookbook;

        console.log('📖 Book fetched:', book);
        console.log('📚 Extracted cookbookId:', extractedCookbookId);
        console.log('📄 Book recipes:', book.recipe);

        setCurrentBook(book);
        setCookbookId(extractedCookbookId);
        setBookError(null);
      } catch (err: any) {
        console.error('Failed to fetch book:', err);
        setBookError(err?.response?.data?.message || 'Failed to load book');
      } finally {
        setLoadingBook(false);
      }
    };

    fetchBook();
  }, [bookId]);

  // Refetch book when recipes are added or layout changes
  useEffect(() => {
    const refetchBook = async () => {
      if (!bookId) return;

      try {
        console.log('🔄 Refetching book due to update event...');
        const book = await bookService.getBookById(bookId);
        console.log('✅ Book refetched successfully:', book);
        console.log('📄 Updated recipes:', book.recipe);
        setCurrentBook(book);
      } catch (err: any) {
        console.error('❌ Failed to refetch book:', err);
      }
    };

    // Listen for book updates (triggered after adding recipes or changing layout)
    const handleBookUpdate = () => {
      console.log('📡 Received bookUpdated event');
      refetchBook();
    };

    window.addEventListener('bookUpdated', handleBookUpdate);
    return () => window.removeEventListener('bookUpdated', handleBookUpdate);
  }, [bookId]);

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

  // Convert book's extra pages to component format
  const extraPages = React.useMemo(() => {
    const pages = (currentBook?.extraPageData || []).map((page: any) => ({
      id: page.pageId,
      title: page.title,
      type: page.pageType,
      templateType: page.templateType,
      section: page.section,
    }));

    // Debug: Log extra pages
    if (pages.length > 0) {
      console.log('📄 Extra pages loaded from book:', pages);
    }

    return pages;
  }, [currentBook?.extraPageData]);

  // Create a modified cookbook object with book recipe pages for content display
  const modifiedCookbook = React.useMemo(() => {
    if (!currentBook || !currentCookbook) return currentCookbook;

    const recipePages = currentBook.recipe || [];

    console.log('📚 Creating modified cookbook with book recipe pages:', {
      bookId: currentBook._id,
      recipeCount: currentBook.recipe?.length,
      layouts: recipePages.map((r: any) => ({ pageId: r.pageId, layout: r.layout }))
    });

    return {
      ...currentCookbook,
      // Replace books array with recipe pages from current book formatted as books
      books: recipePages.map((recipePage: any) => ({
        _id: recipePage.pageId,
        recipe: [recipePage],
        ...recipePage,
      })),
    };
  }, [currentBook, currentCookbook]);

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
    isGeneratingPdf,
    handleSave,
    handleGenerate,
    handleGeneratePdf,
    handleAddRecipes,
    handleSettingsSave,
  } = useCookbookActions({
    cookbookId,
    currentCookbook,
    pendingChanges,
    recipeNotes,
    setPendingChanges,
    bookId, // Pass bookId for updating existing books
  });

  // Simple handlers
  const handlePreview = () => {
    console.log('Preview cookbook');
  };

  const handleExport = () => {
    console.log('Export cookbook');
  };

  const handleAddExtraPage = async (pageType: 'blank' | 'template', section: 'front' | 'back', templateType?: string) => {
    if (!currentBook || !bookId) return;

    let pageTitle = '';
    if (pageType === 'blank') {
      pageTitle = 'Blank Page';
    } else if (templateType === 'weekly-planner') {
      pageTitle = 'Weekly Planner';
    } else if (templateType === 'note-page') {
      pageTitle = 'Note Page';
    }

    try {
      // Get default paper size from layout function
      const { getExtraPageLayout } = await import('../../Templates/components/ExtraPageLayoutSelections/Index.ExtraLayout');
      const { paperSize } = getExtraPageLayout(
        pageType,
        templateType as 'weekly-planner' | 'note-page' | undefined
      );

      // Calculate position based on section and existing extra pages in the book
      const existingPagesInSection = currentBook.extraPageData?.filter((p: any) => p.section === section) || [];
      const position = existingPagesInSection.length + 1;

      // Call backend API to add extra page to the book
      await bookService.addPage(bookId, {
        pageType: 'extra' as any,
        position,
        extraPageData: {
          title: pageTitle,
          pageType,
          templateType,
          section,
          paperSize, // Use default paper size from layout function
        } as any,
      });

      // Trigger book refetch
      console.log('📡 Dispatching bookUpdated event after adding extra page');
      window.dispatchEvent(new CustomEvent('bookUpdated'));

      // Note: The book refetch in useEffect will update currentBook and extraPages automatically
    } catch (error) {
      console.error('Error adding extra page:', error);
      alert('Failed to add page. Please try again.');
    }
  };

  const handleDeletePage = (pageId: string, pageType: 'extra' | 'recipe', pageName?: string) => {
    // Open delete confirmation dialog
    setPageToDelete({ pageId, pageType, pageName });
    setDeleteDialogOpen(true);
  };

  const confirmDeletePage = async () => {
    if (!currentBook || !bookId || !pageToDelete) return;

    try {
      // Call backend API to delete the page
      await bookService.deletePage(bookId, pageToDelete.pageId);

      // If the deleted page was selected, switch to cover page
      if (selectedSection === pageToDelete.pageId) {
        setSelectedSection('cover');
      }

      // Trigger book refetch
      console.log('📡 Dispatching bookUpdated event after deleting page');
      window.dispatchEvent(new CustomEvent('bookUpdated'));

      // Show success message
      setSnackbar({
        open: true,
        message: pageToDelete.pageType === 'extra' ? 'Page deleted successfully' : 'Recipe removed successfully',
        severity: 'success',
      });

      // Note: The book refetch in useEffect will update currentBook automatically
    } catch (error: any) {
      console.error('Error deleting page:', error);
      setSnackbar({
        open: true,
        message: error?.response?.data?.message || 'Failed to delete page. Please try again.',
        severity: 'error',
      });
    }
  };

  // Loading state
  if (loadingBook || (loading && !currentCookbook)) {
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
  if (bookError || (error && !currentCookbook)) {
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
          {bookError || error}
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
        bookName={currentBook?.name}
        bookId={bookId}
        bookStatus={currentBook?.status}
        bookUrl={currentBook?.bookUrl}
        isSaving={isSaving}
        isGenerating={isGeneratingPdf}
        sidebarOpen={sidebarOpen}
        onBack={() => navigate(`/dashboard/cook-book/collection/${cookbookId}`)}
        onToggleSidebar={() => setSidebarOpen(!sidebarOpen)}
        onSettingsOpen={() => setSettingsOpen(true)}
        onSave={handleSave}
        onGenerate={handleGeneratePdf}
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
            cookbookTitle={currentBook?.name || currentCookbook?.title || 'My Book'}
            recipes={currentBook?.recipe || modifiedCookbook?.books || []}
            selectedRecipeId={selectedSection}
            onRecipeSelect={(id) => {
              setSelectedSection(id);
              setSidebarOpen(false);
            }}
            onAddRecipe={() => setRecipeSelectorOpen(true)}
            onEditInfo={() => setSettingsOpen(true)}
            onAddExtraPage={handleAddExtraPage}
            onDeletePage={handleDeletePage}
            extraPages={extraPages}
            isGenerating={currentBook?.status === 'generating'}
          />
        </Box>

        {/* Sidebar - Desktop Permanent */}
        <Box sx={{ display: { xs: 'none', md: 'block' } }}>
          <EditorSidebar
            cookbookTitle={currentBook?.name || currentCookbook?.title || 'My Book'}
            recipes={currentBook?.recipe || modifiedCookbook?.books || []}
            selectedRecipeId={selectedSection}
            onRecipeSelect={setSelectedSection}
            onAddRecipe={() => setRecipeSelectorOpen(true)}
            onEditInfo={() => setSettingsOpen(true)}
            onAddExtraPage={handleAddExtraPage}
            onDeletePage={handleDeletePage}
            extraPages={extraPages}
            isGenerating={currentBook?.status === 'generating'}
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
            currentCookbook={modifiedCookbook}
            currentPageNumber={currentPageNumber}
            totalPages={totalPages}
            onPreviousPage={handlePreviousPage}
            onNextPage={handleNextPage}
            extraPages={extraPages}
            actualBook={currentBook}
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

      {/* Delete Page Dialog */}
      <DeletePageDialog
        open={deleteDialogOpen}
        onClose={() => {
          setDeleteDialogOpen(false);
          setPageToDelete(null);
        }}
        onConfirm={confirmDeletePage}
        pageType={pageToDelete?.pageType || 'extra'}
        pageName={pageToDelete?.pageName}
      />

      {/* Snackbar for notifications */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={snackbar.action ? 10000 : 4000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
        <Alert
          onClose={() => setSnackbar({ ...snackbar, open: false })}
          severity={snackbar.severity}
          sx={{ width: '100%' }}
          action={
            snackbar.action ? (
              <Button
                color="inherit"
                size="small"
                onClick={() => {
                  snackbar.action?.onClick();
                  setSnackbar({ ...snackbar, open: false });
                }}
              >
                {snackbar.action.label}
              </Button>
            ) : undefined
          }
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default BookEditor;
