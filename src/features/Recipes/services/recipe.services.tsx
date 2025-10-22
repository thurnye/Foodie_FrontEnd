/**
 * Recipe API Service
 * - Create or update depending on ID
 */

import { apiClient } from '../../../shared/services/apiClient.service';
import { IRecipeData } from '../types/recipe.types';

class RecipeApi {
  /**
   * Get all recipes
   */
  async getRecipes(): Promise<IRecipeData[]> {
    return apiClient.get<IRecipeData[]>('/recipe');
  }

  /**
   * Save recipe — create if no ID, update if ID exists
   */
  async saveRecipe(data: IRecipeData): Promise<IRecipeData> {
    if (data.id) {
      // Update existing
      return apiClient.put<IRecipeData>(`/recipe/${data.id}`, data);
    } else {
      // Create new
      return apiClient.post<IRecipeData>('/recipe', data);
    }
  }

  /**
   * Delete recipe
   */
  async deleteRecipe(recipeId: string): Promise<void> {
    return apiClient.delete<void>(`/recipe/${recipeId}`);
  }
}

export const RecipeApiService = new RecipeApi();
