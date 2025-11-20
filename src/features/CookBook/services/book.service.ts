import { apiClient } from '../../../shared/services/apiClient.service';
import {
  IBook,
  CreateBookData,
  UpdateBookData,
  CreatePageData,
  UpdatePageData,
} from '../types/book.types';

interface BookResponse {
  success: boolean;
  data: IBook;
  message?: string;
}

interface BooksResponse {
  success: boolean;
  data: IBook[];
  pagination?: {
    page: number;
    limit: number;
    totalPages: number;
    totalBooks: number;
  };
}

interface PageOrderItem {
  pageId: string;
  position: number;
}

class BookService {
  /**
   * Create a new book or update existing book if bookId is provided
   */
  async createBook(data: CreateBookData & { bookId?: string }): Promise<IBook> {
    const response = await apiClient.post<IBook>('/books', data);
    return response;
  }

  /**
   * Create a new book with recipe IDs
   */
  async createBookWithRecipes(cookbookId: string, recipeIds: string[]): Promise<IBook> {
    const response = await apiClient.post<IBook>('/books', {
      cookbookId,
      recipeIds,
    });
    return response;
  }

  /**
   * Add recipe pages to cookbook
   */
  async addRecipePages(cookbookId: string, recipeIds: string[]): Promise<IBook> {
    const response = await apiClient.post<IBook>(
      `/cookbook/${cookbookId}/recipe-pages`,
      { recipeIds }
    );
    return response;
  }

  /**
   * Get book by ID
   */
  async getBookById(bookId: string): Promise<IBook> {
    const response = await apiClient.get<IBook>(`/books/${bookId}`);
    console.log('getBookById response:', response);
    return response;
  }

  /**
   * Get book data for PDF rendering (unauthenticated endpoint)
   */
  async getBookForRendering(bookId: string): Promise<IBook> {
    const response = await apiClient.get<IBook>(`/books/${bookId}/render-data`);
    return response;
  }

  /**
   * Get user's books
   */
  async getMyBooks(params?: {
    page?: number;
    limit?: number;
    status?: string;
    isPublic?: boolean;
    cookbookId?: string;
  }): Promise<BooksResponse> {
    // Use getClient() to access the full response with pagination
    const client = apiClient.getClient();
    const response = await client.get<BooksResponse>('/books/my', { params });

    return {
      success: response.data.success,
      data: response.data.data || [],
      pagination: response.data.pagination,
    };
  }

  /**
   * Update book
   */
  async updateBook(bookId: string, updates: UpdateBookData): Promise<IBook> {
    const response = await apiClient.put<IBook>(`/books/${bookId}`, updates);
    return response;
  }

  /**
   * Delete book
   */
  async deleteBook(bookId: string): Promise<void> {
    await apiClient.delete(`/books/${bookId}`);
  }

  /**
   * Add page to book
   */
  async addPage(bookId: string, pageData: CreatePageData): Promise<IBook> {
    const response = await apiClient.post<IBook>(`/books/${bookId}/pages`, pageData);
    return response;
  }

  /**
   * Update page in book
   */
  async updatePage(bookId: string, pageId: string, updates: UpdatePageData): Promise<IBook> {
    console.log('Updating page with data:', updates);
    const response = await apiClient.put<IBook>(
      `/books/${bookId}/pages/${pageId}`,
      updates
    );
    return response;
  }

  /**
   * Delete page from book
   */
  async deletePage(bookId: string, pageId: string): Promise<IBook> {
    const response = await apiClient.delete<IBook>(`/books/${bookId}/pages/${pageId}`);
    return response;
  }

  /**
   * Reorder pages in book
   */
  async reorderPages(bookId: string, pageOrder: PageOrderItem[]): Promise<IBook> {
    const response = await apiClient.put<IBook>(`/books/${bookId}/pages/reorder`, {
      pageOrder,
    });
    return response;
  }

  /**
   * Publish book
   */
  async publishBook(bookId: string): Promise<IBook> {
    const response = await apiClient.post<IBook>(`/books/${bookId}/publish`);
    return response;
  }
}

export const bookService = new BookService();
