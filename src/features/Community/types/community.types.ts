/**
 * Community Types and Interfaces
 */

/**
 * User information
 */
export interface ICommunityUser {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  avatar?: string;
}

/**
 * Group Member
 */
export interface IGroupMember {
  user: string | ICommunityUser;
  role: 'admin' | 'moderator' | 'member';
  joinedAt: Date | string;
}

/**
 * Community Group
 */
export interface IGroup {
  _id: string;
  name: string;
  description: string;
  coverImage?: string;
  icon?: string;
  isPrivate: boolean;
  creator: string | ICommunityUser;
  members: IGroupMember[];
  joinRequest: string[];
  memberCount: number;
  postCount: number;
  tags: string[];
  rules?: string[];
  createdAt: Date | string;
  updatedAt: Date | string;
}

/**
 * Create Group Data
 */
export interface ICreateGroup {
  name: string;
  description: string;
  coverImage?: string;
  icon?: string;
  isPrivate: boolean;
  tags?: string[];
  rules?: string[];
}

/**
 * Update Group Data
 */
export interface IUpdateGroup {
  name?: string;
  description?: string;
  coverImage?: string;
  icon?: string;
  isPrivate?: boolean;
  tags?: string[];
  rules?: string[];
}

/**
 * Post Reaction Types
 */
export type ReactionType = 'like' | 'love' | 'fire' | 'laugh' | 'sad' | 'wow';

/**
 * Post Reaction
 */
export interface IReaction {
  user: string | ICommunityUser;
  type: ReactionType;
  createdAt: Date | string;
}

/**
 * Post Vote
 */
export interface IVote {
  user: string;
  value: 1 | -1; // 1 for upvote, -1 for downvote
  createdAt: Date | string;
}

/**
 * Post Media
 */
export interface IPostMedia {
  type: 'image' | 'video';
  url: string;
  thumbnail?: string;
  alt?: string;
}

/**
 * Community Post
 */
export interface IPost {
  _id: string;
  group: string | IGroup;
  author: string | ICommunityUser;
  title: string;
  content: string;
  media?: IPostMedia[];
  votes: IVote[];
  voteCount: number; // Sum of all votes
  reactions: IReaction[];
  reactionCount: number;
  commentCount: number;
  shareCount: number;
  isPinned: boolean;
  isLocked: boolean;
  tags?: string[];
  createdAt: Date | string;
  updatedAt: Date | string;
}

/**
 * Create Post Data
 */
export interface ICreatePost {
  groupId: string;
  title: string;
  content: string;
  media?: IPostMedia[];
  tags?: string[];
}

/**
 * Update Post Data
 */
export interface IUpdatePost {
  title?: string;
  content?: string;
  media?: IPostMedia[];
  tags?: string[];
}

/**
 * Post Comment
 */
export interface IComment {
  _id: string;
  post: string;
  author: string | ICommunityUser;
  content: string;
  parentComment?: string; // For nested replies
  votes: IVote[];
  voteCount: number;
  reactions: IReaction[];
  reactionCount: number;
  replies?: IComment[];
  replyCount: number;
  isEdited: boolean;
  createdAt: Date | string;
  updatedAt: Date | string;
}

/**
 * Create Comment Data
 */
export interface ICreateComment {
  postId: string;
  content: string;
  parentCommentId?: string;
}

/**
 * Update Comment Data
 */
export interface IUpdateComment {
  content: string;
}

/**
 * Post Share
 */
export interface IPostShare {
  _id: string;
  post: string;
  user: string | ICommunityUser;
  platform?: 'facebook' | 'twitter' | 'whatsapp' | 'copy';
  createdAt: Date | string;
}

/**
 * Community Stats
 */
export interface ICommunityStats {
  totalGroups: number;
  totalPosts: number;
  totalMembers: number;
  totalComments: number;
}

/**
 * Group Filters
 */
export interface IGroupFilters {
  search?: string;
  tags?: string[];
  isPrivate?: boolean;
  sort?: 'newest' | 'popular' | 'name';
}

/**
 * Post Filters
 */
export interface IPostFilters {
  groupId?: string;
  authorId?: string;
  search?: string;
  tags?: string[];
  sort?: 'newest' | 'popular' | 'trending';
  isPinned?: boolean;
  page?: number;
  limit?: number;
}
