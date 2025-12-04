/**
 * Book Status
 */
export enum BookStatus {
  DRAFT = 'draft',
  GENERATING = 'generating',
  COMPLETED = 'completed',
  FAILED = 'failed',
  PUBLISHED = 'published',
  ARCHIVED = 'archived',
}

/**
 * Page Type Enum
 */
export enum PageType {
  COVER = 'cover',
  INTRO = 'intro',
  TOC = 'toc',
  RECIPE = 'recipe',
  NOTES = 'notes',
  BACK_COVER = 'backCover',
  EXTRA = 'extra',
}

/**
 * Page Layout Format Enum (Paper Size)
 */
export enum PageLayoutFormat {
  A3 = 'A3',
  A4 = 'A4',
}

/**
 * Cover/Back Cover Page Data
 */
export interface ICoverPageData {
  pageId: string;
  pageType: PageType;
  position: number;
  title?: string;
  subtitle?: string;
  backgroundImage?: string;
  backgroundColor?: string;
  customText?: string;
  layout: string;
  paperSize?: PageLayoutFormat; // Paper size: 'A3' or 'A4'
}

/**
 * Introduction Page Data
 */
export interface IIntroPageData {
  pageId: string;
  pageType: PageType;
  position: number;
  backgroundImage?: string;
  customContent?: string;
  layout: string;
  paperSize?: PageLayoutFormat; // Paper size: 'A3' or 'A4'
}

/**
 * Table of Contents Page Data
 */
export interface ITocPageData {
  pageId: string;
  pageType: PageType;
  position: number;
  customContent?: string;
  layout: string;
  paperSize?: PageLayoutFormat; // Paper size: 'A3' or 'A4'
}

/**
 * Back Cover Page Data
 */
export interface IBackCoverPageData {
  pageId: string;
  pageType: PageType;
  position: number;
  title?: string;
  subtitle?: string;
  backgroundImage?: string;
  backgroundColor?: string;
  customText?: string;
  layout: string;
  paperSize?: PageLayoutFormat; // Paper size: 'A3' or 'A4'
}

/**
 * Extra Page Data
 */
export interface IExtraPageData {
  pageId: string;
  position: number;
  title: string;
  pageType: 'blank' | 'template';
  templateType?: string;
  content?: string;
  layout?: string;
  paperSize?: PageLayoutFormat; // Paper size: 'A3' or 'A4'
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
 * Recipe Author interface
 */
export interface IRecipeAuthor {
  userId: string;
  firstName?: string;
  lastName?: string;
  avatar?: string;
  slogan?: string;
}

/**
 * Recipe Page - Recipe data with page metadata
 */
export interface IRecipePage {
  pageId: string;
  pageType: PageType;
  position: number;
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
  author: IRecipeAuthor;
  order: number;
  layout: string;
  paperSize: PageLayoutFormat; // Default: A3 (not updatable)
}

/**
 * Recipe data embedded in Book (for backward compatibility)
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
  author: string | IRecipeAuthor;
}

/**
 * Page Interface - Represents a single page in the cookbook
 */
export interface IPage {
  pageId: string; // Unique identifier for the page
  pageType: PageType;
  position: number; // Position/order in the cookbook

  // Cover page specific data
  coverData?: ICoverPageData;

  // Introduction page specific data
  introData?: IIntroPageData;

  // Recipe page specific data (if it's a recipe page)
  recipe?: IRecipeData;

  // Extra page specific data (blank pages, templates)
  extraPageData?: IExtraPageData;

  // Layout for this specific page
  layout?: string;

  // Edited content for this page
  editedContent?: string;
  lastEditedAt?: Date | string;
}

/**
 * Book Interface - Stores edited cookbook content
 */

export interface ICreateBook{
  name: string; // Book name/title
  description?: string;
};

export interface IBook {
  _id: string;
  name: string; // Book name/title
  description?: string;
  cookbook: string; // Cookbook ID

  // Cover page data
  coverData?: ICoverPageData;

  // Introduction page data
  introData?: IIntroPageData;

  // Table of Contents page data
  tocData?: ITocPageData;

  // Back Cover page data
  backCoverData?: IBackCoverPageData;

  // Recipe pages array
  recipe?: IRecipePage[];

  // Extra pages array (blank pages, templates, etc.)
  extraPageData?: IExtraPageData[];

  // Edited sections content (for backward compatibility, can be deprecated later)
  sections?: IBookSection[];

  // PDF URL - URL to the generated PDF file
  bookUrl?: string;

  // Status & Generation
  status: BookStatus;
  generationProgress?: number;
  errorMessage?: string;

  // Metadata
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
  name?: string;
  description?: string;
  pages?: IPage[];
  sections?: IBookSection[];
  recipeIds?: string[];
  recipeData?: IRecipeData;
}

/**
 * Update Book Data
 */
export interface UpdateBookData {
  name?: string;
  description?: string;
  pages?: IPage[];
  sections?: IBookSection[];
  status?: BookStatus;
  isPublic?: boolean;
  layout?: string; // For backward compatibility with old schema
}

/**
 * Create Page Data
 */
export interface CreatePageData {
  pageType: PageType;
  position: number;
  coverData?: ICoverPageData;
  introData?: IIntroPageData;
  tocData?: ITocPageData;
  backCoverData?: IBackCoverPageData;
  recipe?: IRecipeData;
  extraPageData?: IExtraPageData;
  layout?: string;
}

/**
 * Update Page Data
 */
export interface UpdatePageData {
  pageType?: PageType; // Flag to indicate which field to update
  position?: number;
  coverData?: ICoverPageData;
  introData?: IIntroPageData;
  tocData?: ITocPageData;
  backCoverData?: IBackCoverPageData;
  recipe?: IRecipeData;
  extraPageData?: IExtraPageData;
  layout?: string;
  paperSize?: PageLayoutFormat; // Paper size for the page
  editedContent?: string;
}
