import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../app/stores/stores';
import { fetchCookbookById } from '../redux/cookbook.async.thunk';

export const useCookbookData = (cookbookId: string | undefined) => {
  const dispatch = useDispatch<AppDispatch>();
  const { currentCookbook, loading, error, selectedRecipes } = useSelector(
    (state: RootState) => state.cookbook
  );

  const [selectedSection, setSelectedSection] = useState<string | null>('cover');
  const [editorContent, setEditorContent] = useState('');
  const [pendingChanges, setPendingChanges] = useState<{
    description?: string;
    authorBio?: string;
    notes?: string;
  }>({});
  const [recipeNotes, setRecipeNotes] = useState<Record<string, string>>({});

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
      const editedContent = recipeNotes[selectedSection];
      setEditorContent(editedContent !== undefined ? editedContent : '');
    }
  }, [selectedSection, currentCookbook, pendingChanges, recipeNotes]);

  // Handle content change from editor
  const handleContentChange = (content: string) => {
    setEditorContent(content);

    if (selectedSection === 'cover') {
      setPendingChanges(prev => ({ ...prev, description: content }));
    } else if (selectedSection === 'intro') {
      setPendingChanges(prev => ({ ...prev, authorBio: content }));
    } else if (selectedSection === 'notes') {
      setPendingChanges(prev => ({ ...prev, notes: content }));
    } else if (selectedSection && selectedSection !== 'toc') {
      setRecipeNotes(prev => ({ ...prev, [selectedSection]: content }));
    }
  };

  return {
    currentCookbook,
    loading,
    error,
    selectedRecipes,
    selectedSection,
    setSelectedSection,
    editorContent,
    pendingChanges,
    setPendingChanges,
    recipeNotes,
    setRecipeNotes,
    handleContentChange,
  };
};
