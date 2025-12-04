import { RecipeApiService } from '../../Recipe/services/recipe.services';
import { IRecipeFormType } from '../types/dashboard_recipe.types';
import { IRecipe } from '../../Recipe/types/recipe.types';

export interface CreateRecipeResponse {
  recipeId: string;
  recipeName: string;
}

export interface UpdateRecipeResponse {
  recipeId: string;
  recipeName: string;
}

class DashboardRecipeService {
  /**
   * Create a new recipe
   * User ID is automatically extracted from JWT token in backend
   */
  async createRecipe(recipeData: IRecipeFormType): Promise<IRecipe> {
    try {
      const response = await RecipeApiService.createRecipe(recipeData);
      return response;
    } catch (error) {
      console.error('Error creating recipe:', error);
      throw error;
    }
  }

  /**
   * Update an existing recipe
   */
  async updateRecipe(
    recipeId: string,
    recipeData: IRecipeFormType
  ): Promise<IRecipe> {
    try {
      const response = await RecipeApiService.updateRecipe(recipeId, recipeData);
      return response;
    } catch (error) {
      console.error('Error updating recipe:', error);
      throw error;
    }
  }

  /**
   * Get recipe by ID for editing
   */
  async getRecipeById(recipeId: string): Promise<IRecipe> {
    try {
      const response = await RecipeApiService.getRecipeById(recipeId);
      return response;
    } catch (error) {
      console.error('Error fetching recipe:', error);
      throw error;
    }
  }

  /**
   * Delete recipe
   */
  async deleteRecipe(recipeId: string): Promise<void> {
    try {
      await RecipeApiService.deleteRecipe(recipeId);
    } catch (error) {
      console.error('Error deleting recipe:', error);
      throw error;
    }
  }

  /**
   * Get current user's recipes
   */
  async getMyRecipes(): Promise<IRecipe[]> {
    try {
      const response = await RecipeApiService.getMyRecipes();
      return response;
    } catch (error) {
      console.error('Error fetching my recipes:', error);
      throw error;
    }
  }
}

export const dashboardRecipeService = new DashboardRecipeService();
