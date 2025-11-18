import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../app/stores/stores';
import { clearSelectedRecipes } from '../redux/cookbook.slice';
import {
  fetchCookbookById,
  updateCookbook,
  generateCookbook,
} from '../redux/cookbook.async.thunk';
import { ICookbook, UpdateCookbookData } from '../types/cookbook.types';
import { IBookSection } from '../types/book.types';
import { bookService } from '../services/book.service';
import { IRecipe } from '../../Recipe/types/recipe.types';

interface SnackbarState {
  open: boolean;
  message: string;
  severity: 'success' | 'error' | 'info' | 'warning';
}

interface UseCookbookActionsProps {
  cookbookId: string | undefined;
  currentCookbook: ICookbook | null;
  pendingChanges: {
    description?: string;
    authorBio?: string;
    notes?: string;
  };
  recipeNotes: Record<string, string>;
  setPendingChanges: React.Dispatch<
    React.SetStateAction<{
      description?: string;
      authorBio?: string;
      notes?: string;
    }>
  >;
  bookId?: string; // Optional bookId for updating existing books
}

export const useCookbookActions = ({
  cookbookId,
  currentCookbook,
  pendingChanges,
  recipeNotes,
  setPendingChanges,
  bookId,
}: UseCookbookActionsProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const [snackbar, setSnackbar] = useState<SnackbarState>({
    open: false,
    message: '',
    severity: 'info',
  });
  const [isSaving, setIsSaving] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleSave = async () => {
    if (!cookbookId || !currentCookbook) return;

    if (currentCookbook.status === 'generating') {
      setSnackbar({
        open: true,
        message:
          'Cannot update cookbook while it is being generated. Please wait for generation to complete.',
        severity: 'warning',
      });
      return;
    }

    setIsSaving(true);
    try {
      // Build sections from pending changes and recipe notes
      const sections: IBookSection[] = [];

      if (pendingChanges.description) {
        sections.push({
          sectionId: 'cover',
          sectionType: 'frontCover',
          content: pendingChanges.description,
          lastEditedAt: new Date().toISOString(),
        });
      }

      if (pendingChanges.authorBio) {
        sections.push({
          sectionId: 'intro',
          sectionType: 'intro',
          content: pendingChanges.authorBio,
          lastEditedAt: new Date().toISOString(),
        });
      }

      if (pendingChanges.notes) {
        sections.push({
          sectionId: 'notes',
          sectionType: 'notes',
          content: pendingChanges.notes,
          lastEditedAt: new Date().toISOString(),
        });
      }

      // Add recipe notes
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
          message: 'No changes to save',
          severity: 'info',
        });
        setIsSaving(false);
        return;
      }

      // Save sections to book
      // Generate a meaningful name if not updating existing book
      const bookName = currentCookbook.title
        ? `${currentCookbook.title} - ${new Date().toLocaleDateString()}`
        : `My Book - ${new Date().toLocaleDateString()}`;

      await bookService.createBook({
        bookId, // If bookId exists, update existing book
        cookbookId,
        name: bookName,
        description: currentCookbook.description || 'My cookbook book',
        sections,
      });

      setPendingChanges({});

      setSnackbar({
        open: true,
        message: `Book saved successfully with ${sections.length} section(s)!`,
        severity: 'success',
      });

      // Refresh cookbook to get updated books
      await dispatch(fetchCookbookById(cookbookId)).unwrap();
    } catch (err: any) {
      console.error('Save book error:', err);
      const errorMessage =
        err?.response?.data?.message || err?.message || 'Failed to save book';

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
      const errorMessage =
        typeof err === 'string'
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

    if (currentCookbook.status === 'generating') {
      setSnackbar({
        open: true,
        message:
          'Cannot add recipes while cookbook is being generated. Please wait for generation to complete.',
        severity: 'warning',
      });
      return;
    }

    setIsSaving(true);
    try {
      console.log('📤 Adding recipe pages to cookbook:', { cookbookId, recipeIds, bookId });

      // Generate a meaningful name for the book
      // const bookName = currentCookbook.title
      //   ? `${currentCookbook.title} - ${new Date().toLocaleDateString()}`
      //   : `My Book - ${new Date().toLocaleDateString()}`;

      // Use createBook with bookId if available (update existing) or without (create new)
      const book = await bookService.createBook({
        bookId, // If bookId exists, update existing book
        cookbookId,
        // name: bookName,
        // description: currentCookbook.description || 'My cookbook book',
        recipeIds,
      });

      console.log('✅ Recipe pages added successfully:', book);

      // Refresh cookbook to get updated books
      await dispatch(fetchCookbookById(cookbookId)).unwrap();

      dispatch(clearSelectedRecipes());

      // Trigger book refetch event for BookEditor
      window.dispatchEvent(new CustomEvent('bookUpdated'));

      setSnackbar({
        open: true,
        message: `${recipeIds.length} recipe(s) added to ${bookId ? 'book' : 'cookbook'} successfully`,
        severity: 'success',
      });
    } catch (err: any) {
      console.error('Add recipes error:', err);
      const errorMessage =
        err?.response?.data?.message || err?.message || 'Failed to add recipes';

      setSnackbar({
        open: true,
        message: errorMessage,
        severity: 'error',
      });
    } finally {
      setIsSaving(false);
    }
  };

  const handleSettingsSave = async (settings: Partial<ICookbook>) => {
    console.log('CookbookEditor - handleSettingsSave called with:', settings);

    if (!cookbookId || !currentCookbook) {
      console.error('Missing cookbookId or currentCookbook');
      return;
    }

    if (currentCookbook.status === 'generating') {
      setSnackbar({
        open: true,
        message:
          'Cannot update settings while cookbook is being generated. Please wait for generation to complete.',
        severity: 'warning',
      });
      return;
    }

    try {
      const cleanedSettings: UpdateCookbookData = {};

      Object.entries(settings).forEach(([key, value]) => {
        if (
          value === '' &&
          ['coverImage', 'authorBio', 'authorImage', 'description'].includes(
            key
          )
        ) {
          return;
        }
        cleanedSettings[key as keyof UpdateCookbookData] = value as any;
      });

      console.log('Dispatching updateCookbook with cleaned data:', {
        cookbookId,
        data: cleanedSettings,
      });
      await dispatch(
        updateCookbook({
          cookbookId,
          data: cleanedSettings,
        })
      ).unwrap();

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
        full: err,
      });
      const errorMessage =
        typeof err === 'string'
          ? err
          : err?.message || err?.error || 'Failed to update settings';

      setSnackbar({
        open: true,
        message: errorMessage,
        severity: 'error',
      });
    }
  };

  return {
    snackbar,
    setSnackbar,
    isSaving,
    isGenerating,
    handleSave,
    handleGenerate,
    handleAddRecipes,
    handleSettingsSave,
  };
};
