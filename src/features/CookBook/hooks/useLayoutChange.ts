import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../app/stores/stores';
import { bookService } from '../services/book.service';
import { fetchCookbookById } from '../redux/cookbook.async.thunk';
import { PageType } from '../types/book.types';
import { CookbookLayout } from '../types/cookbook.types';

interface ExtraPage {
  id: string;
  title: string;
  type: 'blank' | 'template';
  templateType?: string;
  section?: 'front' | 'back';
}

interface UseLayoutChangeParams {
  selectedSection: string | null;
  currentBook?: any; // From CookbookContentDisplay's currentBook or actualBook
  actualBook?: any; // The actual book data (for BookEditor context)
  extraPages?: ExtraPage[];
  isBookEditorContext?: boolean;
}

export const useLayoutChange = ({
  selectedSection,
  currentBook,
  actualBook,
  extraPages = [],
  isBookEditorContext = false,
}: UseLayoutChangeParams) => {
  const dispatch = useDispatch<AppDispatch>();
  const { cookbookId, bookId } = useParams<{ cookbookId?: string; bookId?: string }>();
  const [isSavingLayout, setIsSavingLayout] = useState(false);

  const handleLayoutChange = async (newLayout: CookbookLayout): Promise<void> => {
    if (!selectedSection) return;
    console.log('selectedSection for layout change:', selectedSection);

    setIsSavingLayout(true);

    try {
      if (isBookEditorContext && bookId && selectedSection) {
        // Determine pageType and actual pageId based on selectedSection
        let pageType: PageType;
        let actualPageId = selectedSection;

        if (selectedSection === 'cover') {
          pageType = PageType.COVER;
          // Get the actual pageId from book.coverData (use actualBook if available)
          const bookToUse = actualBook || currentBook;
          actualPageId = bookToUse?.coverData?.pageId || 'cover';
        } else if (selectedSection === 'intro') {
          pageType = PageType.INTRO;
          // Get the actual pageId from book.introData (use actualBook if available)
          const bookToUse = actualBook || currentBook;
          actualPageId = bookToUse?.introData?.pageId || 'intro';
        } else if (selectedSection === 'toc') {
          pageType = PageType.TOC;
          const bookToUse = actualBook || currentBook;
          actualPageId = bookToUse?.tocData?.pageId || 'toc';
        } else if (selectedSection === 'back-cover') {
          pageType = PageType.BACK_COVER;
          const bookToUse = actualBook || currentBook;
          actualPageId = bookToUse?.backCoverData?.pageId || 'back';
        } else if (selectedSection === 'notes') {
          pageType = PageType.NOTES;
          actualPageId = 'notes'; // Notes doesn't have a pageId in the schema yet
        } else {
          // Check if it's an extra page
          const extraPage = extraPages?.find(p => p.id === selectedSection);
          if (extraPage) {
            pageType = PageType.EXTRA;
            actualPageId = selectedSection; // Extra pages use their pageId directly
          } else {
            // Default to RECIPE for other pages
            pageType = PageType.RECIPE;
            actualPageId = selectedSection; // Recipe pages use their pageId directly
          }
        }

        console.log('📤 Saving layout...', {
          bookId,
          selectedSection,
          actualPageId,
          pageType,
          newLayout,
        });

        await bookService.updatePage(bookId, actualPageId, {
          layout: newLayout,
          pageType,
        });

        console.log('✅ Layout saved successfully');

        // Trigger refetch
        window.dispatchEvent(new CustomEvent('bookUpdated'));
      } else if (currentBook && typeof currentBook !== 'string') {
        // CookbookEditor context - old logic
        console.log('📤 Updating in cookbook editor context...');

        await bookService.updateBook(currentBook._id, { layout: newLayout });

        if (cookbookId) {
          await dispatch(fetchCookbookById(cookbookId));
        }
      }
    } catch (error) {
      console.error('❌ Failed to update layout:', error);
      throw error; // Re-throw to allow caller to handle
    } finally {
      setIsSavingLayout(false);
    }
  };

  return {
    handleLayoutChange,
    isSavingLayout,
  };
};
