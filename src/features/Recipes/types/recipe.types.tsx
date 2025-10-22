export interface IRecipeData {
  id?: string;
  title: string;
  amount: number;
  date: string;
  category: string;
  description?: string;
}

export interface IRecipe extends IRecipeData {
  id: string;
}
