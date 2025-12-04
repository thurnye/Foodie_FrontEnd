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
   * Create or update recipe (unified endpoint)
   * User ID is automatically extracted from JWT token in backend
   * If data contains _id, it updates; otherwise creates new recipe
   */
  async createRecipe(data: any): Promise<IRecipe> {
    const response = await apiClient.post<{ success: boolean; data: IRecipe }>('/recipe/add', data);
    return response.data;
  }

  /**
   * Update existing recipe (uses unified endpoint)
   * Kept for backward compatibility
   */
  async updateRecipe(recipeId: string, data: any): Promise<IRecipe> {
    const dataWithId = { ...data, _id: recipeId };
    const response = await apiClient.post<{ success: boolean; data: IRecipe }>('/recipe/add', dataWithId);
    return response.data;
  }

  /**
   * Delete recipe
   */
  async deleteRecipe(recipeId: string): Promise<void> {
    await apiClient.delete<void>(`/recipe/${recipeId}`);
  }

  /**
   * Get current user's recipes
   * Backend will extract user ID from JWT token
   */
  async getMyRecipes(): Promise<IRecipe[]> {
    const response = await apiClient.get<IRecipe[]>('/recipe/my-recipes');
    return response;
  }
}

export const RecipeApiService = new RecipeApi();