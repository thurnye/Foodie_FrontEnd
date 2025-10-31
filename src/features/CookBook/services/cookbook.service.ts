import { apiClient } from '../../../shared/services/apiClient.service';
import {
  ICookbook,
  CreateCookbookData,
  UpdateCookbookData,
  CookbookQueryParams,
  CookbookResponse,
  SingleCookbookResponse,
} from '../types/cookbook.types';

class CookbookService {
  /**
   * Create a new cookbook
   */
  async createCookbook(data: CreateCookbookData): Promise<ICookbook> {
    const response = await apiClient.post<SingleCookbookResponse>('/cookbook', data);
    return response.data;
  }

  /**
   * Get cookbook by ID
   */
  async getCookbookById(cookbookId: string): Promise<ICookbook> {
    const response = await apiClient.get<ICookbook>(`/cookbook/${cookbookId}`);
    return response;
  }

  /**
   * Get current user's cookbooks
   */
  async getMyCookbooks(params?: CookbookQueryParams): Promise<CookbookResponse> {
    // Use getClient() to access the full response with pagination
    const client = apiClient.getClient();
    const response = await client.get<{
      success: boolean;
      data: ICookbook[];
      pagination?: {
        page: number;
        limit: number;
        total: number;
        pages: number;
      };
    }>('/cookbook/my-cookbooks', { params });

    return {
      success: response.data.success,
      data: response.data.data,
      pagination: response.data.pagination ? {
        page: response.data.pagination.page,
        limit: response.data.pagination.limit,
        totalPages: response.data.pagination.pages,
        totalCookbooks: response.data.pagination.total,
      } : undefined,
    };
  }

  /**
   * Get public cookbooks
   */
  async getPublicCookbooks(params?: CookbookQueryParams): Promise<CookbookResponse> {
    const response = await apiClient.get<CookbookResponse>('/cookbook/public', {
      params,
    });
    return response;
  }

  /**
   * Update cookbook
   */
  async updateCookbook(cookbookId: string, data: UpdateCookbookData): Promise<ICookbook> {
    const response = await apiClient.patch<SingleCookbookResponse>(
      `/cookbook/${cookbookId}`,
      data
    );
    return response.data;
  }

  /**
   * Delete cookbook
   */
  async deleteCookbook(cookbookId: string): Promise<void> {
    await apiClient.delete(`/cookbook/${cookbookId}`);
  }

  /**
   * Generate cookbook PDF
   */
  async generateCookbook(cookbookId: string): Promise<ICookbook> {
    const response = await apiClient.post<SingleCookbookResponse>(
      `/cookbook/${cookbookId}/generate`
    );
    return response.data;
  }

  /**
   * Get cookbook generation status
   */
  async getCookbookStatus(cookbookId: string): Promise<{
    status: string;
    progress?: number;
    pdfUrl?: string;
    errorMessage?: string;
  }> {
    const response = await apiClient.get<{
      status: string;
      progress?: number;
      pdfUrl?: string;
      errorMessage?: string;
    }>(`/cookbook/${cookbookId}/status`);
    return response;
  }
}

export const cookbookService = new CookbookService();
