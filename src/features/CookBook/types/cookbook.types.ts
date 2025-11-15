import { IRecipe } from '../../Recipe/types/recipe.types';
import { IBook } from './book.types';

export enum CookbookTheme {
  MODERN = 'modern',
  CLASSIC = 'classic',
  RUSTIC = 'rustic',
  MINIMALIST = 'minimalist',
  ELEGANT = 'elegant',
}

export enum CookbookLayout {
  LayoutOne = 'layout-one',
  LayoutTwo = 'layout-two',
  LayoutThree = 'layout-three',
  LayoutFour = 'layout-four',
  LayoutFive = 'layout-five',
  LayoutSix = 'layout-six',
  LayoutSeven = 'layout-seven',
  LayoutEight = 'layout-eight',
  LayoutNine = 'layout-nine',
  LayoutTen = 'layout-ten',
}

export enum CookbookStatus {
  DRAFT = 'draft',
  GENERATING = 'generating',
  COMPLETED = 'completed',
  FAILED = 'failed',
}

export interface CustomColors {
  primary?: string;
  secondary?: string;
  accent?: string;
}

export interface ICookbookAuthor {
  _id?: string;
  firstName: string;
  lastName: string;
  email: string;
  avatar: string;
  bio: string;
}

export interface ICookbook {
  _id: string;
  author: ICookbookAuthor;
  title: string;
  description?: string;
  books: IBook[];

  // Customization
  theme: CookbookTheme;
  layout: CookbookLayout;
  coverImage?: string;
  customColors?: CustomColors;

  // Author info
  authorBio?: string;
  authorImage?: string;

  // Status & Output
  status: CookbookStatus;
  pdfUrl?: string;
  generationProgress?: number;
  errorMessage?: string;

  // Metadata
  isPublic: boolean;
  isActive: boolean;
  pageCount?: number;
  fileSize?: number;
  lastGeneratedAt?: Date | string;
  createdAt: Date | string;
  updatedAt: Date | string;
  recipeCount?: number;
}

export interface CreateCookbookData {
  title: string;
  description?: string;
  recipes: string[];
  theme?: CookbookTheme;
  layout?: CookbookLayout;
  coverImage?: string;
  customColors?: CustomColors;
  authorBio?: string;
  authorImage?: string;
  isPublic?: boolean;
}

export interface UpdateCookbookData {
  title?: string;
  description?: string;
  recipes?: string[];
  theme?: CookbookTheme;
  layout?: CookbookLayout;
  coverImage?: string;
  customColors?: CustomColors;
  authorBio?: string;
  authorImage?: string;
  isPublic?: boolean;
}

export interface CookbookQueryParams {
  page?: number;
  limit?: number;
  status?: CookbookStatus;
  isPublic?: boolean;
  sortBy?: 'createdAt' | 'updatedAt' | 'title';
  sortOrder?: 'asc' | 'desc';
}

export interface CookbookResponse {
  success: boolean;
  data: ICookbook[];
  pagination?: {
    page: number;
    limit: number;
    totalPages: number;
    totalCookbooks: number;
  };
}

export interface SingleCookbookResponse {
  success: boolean;
  data: ICookbook;
  message?: string;
}

// Editor state
export interface EditorSection {
  id: string;
  type: 'cover' | 'intro' | 'recipe' | 'conclusion';
  title: string;
  content?: string;
  recipeId?: string;
}

export interface CookbookEditorState {
  currentCookbook: ICookbook | null;
  sections: EditorSection[];
  selectedSection: string | null;
  isDirty: boolean;
  isSaving: boolean;
}

export interface CookbookState {
  cookbooks: ICookbook[];
  currentCookbook: ICookbook | null;
  selectedRecipes: string[];
  loading: boolean;
  error: string | null;
  pagination: {
    page: number;
    limit: number;
    totalPages: number;
    totalCookbooks: number;
  } | null;
}

// Type guard to check if author is populated
export function isAuthorPopulated(author: string | ICookbookAuthor): author is ICookbookAuthor {
  return typeof author === 'object' && author !== null && 'firstName' in author;
}

// Helper to get author name
export function getAuthorName(author: string | ICookbookAuthor): string {
  if (isAuthorPopulated(author)) {
    return `${author.firstName} ${author.lastName}`.trim();
  }
  return 'Unknown Author';
}
