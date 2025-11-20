import { apiClient } from '../../../shared/services/apiClient.service';

interface PdfGenerationOptions {
  format?: 'A4' | 'Letter';
  orientation?: 'portrait' | 'landscape';
  margin?: {
    top?: string;
    right?: string;
    bottom?: string;
    left?: string;
  };
}

interface PdfGenerationResponse {
  success: boolean;
  message: string;
  data: {
    bookId: string;
    bookUrl: string;
    pdfSize: number;
  };
}

class PdfService {
  /**
   * Generate PDF for entire book
   * Returns the URL where the PDF is saved
   */
  async generateBookPdf(
    bookId: string,
    options?: PdfGenerationOptions
  ): Promise<PdfGenerationResponse> {
    try {
      const response: any = await apiClient.post(
        `/cookbook/pdf/generate-book/${bookId}`,
        options || {}
      );

      return response;
    } catch (error) {
      console.error('Error generating book PDF:', error);
      throw error;
    }
  }

  /**
   * Download PDF from URL
   */
  async downloadPdfFromUrl(url: string, filename: string): Promise<void> {
    try {
      // Fetch the PDF as a blob
      const response = await fetch(url);
      const blob = await response.blob();

      // Create download link
      const downloadUrl = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = downloadUrl;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(downloadUrl);
    } catch (error) {
      console.error('Error downloading PDF:', error);
      throw error;
    }
  }

  /**
   * Generate PDF for a single page
   */
  async generatePagePdf(
    bookId: string,
    pageId: string,
    pageType: string,
    options?: PdfGenerationOptions
  ): Promise<Blob> {
    try {
      const response: any = await apiClient.post(
        `/cookbook/pdf/generate-page/${bookId}/${pageId}`,
        {
          pageType,
          ...options,
        },
        {
          responseType: 'blob',
        }
      );

      return response.data as Blob;
    } catch (error) {
      console.error('Error generating page PDF:', error);
      throw error;
    }
  }

  /**
   * Get PDF generation status
   */
  async getPdfStatus(bookId: string): Promise<any> {
    try {
      const response: any = await apiClient.get(`/cookbook/pdf/status/${bookId}`);
      return response.data;
    } catch (error) {
      console.error('Error getting PDF status:', error);
      throw error;
    }
  }

  /**
   * Download PDF blob as file
   */
  downloadPdf(blob: Blob, filename: string): void {
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  }
}

export const pdfService = new PdfService();
