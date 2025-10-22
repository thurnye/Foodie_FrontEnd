export interface IRecipeAuthor {
  userId: string;
  username: string;
  firstName: string;
  lastName: string;
  avatar?: string;
}

export interface IValueLabel {
  value: string;
  label: string;
}

export interface IContentBlock {
  type: 'text' | 'image' | 'video' | 'title';
  value: any;
  isUnsplash?: boolean;
  isMultiple?: boolean;
}

export interface INutritionalFact {
  name: string;
  amount: string;
  unit: string;
}

export interface IFAQ {
  ques: string;
  ans: string;
}

export interface IIngredient {
  name: string;
  type: 'main' | 'dressing';
}

export interface IMethod {
  step: IContentBlock[];
}

export interface IRecipeBasicInfo {
  recipeName: string;
  duration: IValueLabel;
  level: IValueLabel;
  serving: IValueLabel;
  tags: IValueLabel[];
  categories: IValueLabel[];
}

export interface IRecipeDetails {
  thumbnail: string;
  about: IContentBlock[];
  faqs: IFAQ[];
}

export interface IRecipeDirections {
  methods: IMethod[];
  ingredients: IIngredient[];
}

export interface IRecipe {
  _id: string;
  basicInfo: IRecipeBasicInfo;
  details: IRecipeDetails;
  directions: IRecipeDirections;
  nutritionalFacts: INutritionalFact[];
  author: IRecipeAuthor | string;
  averageRating?: number;
  totalReviews?: number;
  createdAt?: string;
  updatedAt?: string;
}

export interface IRecipeQueryParams {
  page?: number;
  limit?: number;
  search?: string;
  category?: string;
  tags?: string[];
  level?: string;
  sortBy?: 'createdAt' | 'averageRating' | 'recipeName';
  sortOrder?: 'asc' | 'desc';
}

export interface IRecipeResponse {
  success: boolean;
  data: IRecipe[];
  message?: string;
  pagination?: {
    page: number;
    limit: number;
    total: number;
    pages: number;
  };
}
