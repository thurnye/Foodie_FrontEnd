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
  sectionId: string; // 'cover', 'intro', 'toc', 'notes', or recipe ID
  sectionType: 'cover' | 'intro' | 'toc' | 'notes' | 'recipe';
  content: string; // HTML content from editor
  lastEditedAt: Date | string;
}

/**
 * Book Interface - Stores edited cookbook content
 */
export interface IBook {
  _id: string;
  cookbook: string; // Cookbook ID
  author: string;
  title: string;
  description?: string;

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
  title: string;
  description?: string;
  sections: IBookSection[];
}

/**
 * Update Book Data
 */
export interface UpdateBookData {
  title?: string;
  description?: string;
  sections?: IBookSection[];
  status?: BookStatus;
  isPublic?: boolean;
}
