import { useState, useEffect, useRef } from 'react';
import { bookService } from '../services/book.service';

interface GenerationStatus {
  current: string;
  total: number;
  currentStep: number;
}

/**
 * Hook to poll for PDF generation status
 * @param bookId - The book ID to poll status for
 * @param isGenerating - Whether the book is currently generating
 * @param pollingInterval - Interval in milliseconds (default: 1000ms / 1 second)
 */
export const useGenerationStatus = (
  bookId: string | undefined,
  isGenerating: boolean,
  pollingInterval: number = 1000
) => {
  const [generationStatus, setGenerationStatus] = useState<GenerationStatus | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Only poll if we have a bookId and generation is in progress
    if (!bookId || !isGenerating) {
      // Clear status when not generating
      if (!isGenerating) {
        setGenerationStatus(null);
      }
      return;
    }

    // Function to fetch status
    const fetchStatus = async () => {
      try {
        const status = await bookService.getGenerationStatus(bookId);
        setGenerationStatus(status);
      } catch (error) {
        console.error('Error fetching generation status:', error);
        // Don't clear status on error - keep showing last known status
      }
    };

    // Fetch immediately
    fetchStatus();

    // Set up polling interval
    intervalRef.current = setInterval(fetchStatus, pollingInterval);

    // Cleanup function
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [bookId, isGenerating, pollingInterval]);

  return generationStatus;
};
