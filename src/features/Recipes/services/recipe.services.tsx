/**
 * Recipe API Service
 */

import { apiClient } from '../../../shared/services/apiClient.service';
import { IRecipe, IRecipeQueryParams, IRecipeResponse } from '../types/recipe.types';

class RecipeApi {
  /**
   * Get all recipes with filtering and sorting
   */
  async getRecipes(params?: IRecipeQueryParams): Promise<IRecipeResponse> {
    const axiosClient = apiClient.getClient();
    const response = await axiosClient.post<any>('/recipe', params || {});

    // Extract data and pagination from the API response
    const recipes = response.data.data || [];
    const pagination = response.data.pagination;

    return {
      success: true,
      data: recipes,
      pagination: pagination || undefined,
    };
  }

  /**
   * Get single recipe by ID
   */
  async getRecipeById(recipeId: string): Promise<IRecipe> {
    const response = await apiClient.get<IRecipe>(`/recipe/${recipeId}`);
    return response;
  }

  /**
   * Create new recipe
   */
  async createRecipe(userId: string, data: any): Promise<IRecipe> {
    const response = await apiClient.post<{ success: boolean; data: IRecipe }>(`/recipe/add/${userId}`, data);
    return response.data;
  }

  /**
   * Update existing recipe
   */
  async updateRecipe(recipeId: string, data: any): Promise<IRecipe> {
    const response = await apiClient.post<{ success: boolean; data: IRecipe }>(`/recipe/${recipeId}`, data);
    return response.data;
  }

  /**
   * Delete recipe
   */
  async deleteRecipe(recipeId: string): Promise<void> {
    await apiClient.delete<void>(`/recipe/${recipeId}`);
  }
}

export const RecipeApiService = new RecipeApi();
