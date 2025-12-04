import { INutritionalFact, IRecipeBasicInfo, IRecipeDetails, IRecipeDirections } from "../../Recipe/types/recipe.types";

// Form Type
export interface IRecipeFormType {
  _id: string | null;
  basicInfo: IRecipeBasicInfo;
  details: IRecipeDetails;
  nutritionalFacts: INutritionalFact[];
  directions: IRecipeDirections;
}

// Step type
export interface IFormStep {
  label: string;
  isDisabled: boolean;
}

