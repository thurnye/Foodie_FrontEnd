/**
 * Book Status
 */
export enum BookStatus {
  DRAFT = 'draft',
  PUBLISHED = 'published',
  ARCHIVED = 'archived',
}

/**
 * Section content - stores edited HTML content for each section
 */
export interface IBookSection {
  sectionId: string; // 'frontCover', 'backCover', 'intro', 'toc', 'notes', or recipe ID
  sectionType: 'frontCover' | 'backCover' | 'intro' | 'toc' | 'notes' | 'recipe';
  content: string; // HTML content from editor
  lastEditedAt: Date | string;
}

/**
 * Value Label interface for recipe fields
 */
export interface IValueLabel {
  value: string;
  label: string;
}

/**
 * Content Block interface for recipe content
 */
export interface IContentBlock {
  type: 'text' | 'image' | 'video' | 'title';
  value: any;
  isUnsplash?: boolean;
  isMultiple?: boolean;
}

/**
 * FAQ interface
 */
export interface IFAQ {
  ques: string;
  ans: string;
}

/**
 * Ingredient interface
 */
export interface IIngredient {
  name: string;
  type: 'main' | 'dressing';
}

/**
 * Method interface
 */
export interface IMethod {
  step: IContentBlock[];
}

/**
 * Recipe data embedded in Book
 */
export interface IRecipeData {
  basicInfo: {
    recipeName: string;
    duration: IValueLabel;
    level: IValueLabel;
    serving: IValueLabel;
    tags: IValueLabel[];
    categories: IValueLabel[];
  };
  details: {
    thumbnail: string;
    about: IContentBlock[];
    faqs: IFAQ[];
  };
  directions: {
    methods: IMethod[];
    ingredients: IIngredient[];
  };
  author: string;
}

/**
 * Book Interface - Stores edited cookbook content
 */
export interface IBook {
  _id: string;
  cookbook: string; // Cookbook ID
  layout?: string;
  recipe?: IRecipeData;

  // Edited sections content
  sections: IBookSection[];

  // Metadata
  status: BookStatus;
  isPublic: boolean;
  isActive: boolean;

  // Timestamps
  publishedAt?: Date | string;
  createdAt: Date | string;
  updatedAt: Date | string;
}

/**
 * Create Book Data
 */
export interface CreateBookData {
  cookbookId: string;
  layout?: string;
  sections?: IBookSection[];
  recipeData?: IRecipeData;
}

/**
 * Update Book Data
 */
export interface UpdateBookData {
  layout?: string;
  sections?: IBookSection[];
  status?: BookStatus;
  isPublic?: boolean;
}
