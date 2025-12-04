import { apiClient } from '../../../shared/services/apiClient.service';
import {
  IGroup,
  ICreateGroup,
  IUpdateGroup,
  IPost,
  ICreatePost,
  IUpdatePost,
  IComment,
  ICreateComment,
  IUpdateComment,
  IGroupFilters,
  IPostFilters,
  ICommunityStats,
  ReactionType,
} from '../types/community.types';

const COMMUNITY_API_BASE = '/community';

/**
 * Community Service
 * Handles all API calls related to community features
 */
class CommunityService {
  // ==================== GROUP ENDPOINTS ====================

  /**
   * Get all groups with optional filters
   */
  async getGroups(filters?: IGroupFilters): Promise<IGroup[]> {
    const params = new URLSearchParams();
    if (filters?.search) params.append('search', filters.search);
    if (filters?.tags) params.append('tags', filters.tags.join(','));
    if (filters?.isPrivate !== undefined) params.append('isPrivate', String(filters.isPrivate));
    if (filters?.sort) params.append('sort', filters.sort);

    return await apiClient.get<IGroup[]>(
      `${COMMUNITY_API_BASE}/groups${params.toString() ? `?${params.toString()}` : ''}`
    );
  }

  /**
   * Get a single group by ID
   */
  async getGroupById(groupId: string): Promise<IGroup> {
    return await apiClient.get<IGroup>(`${COMMUNITY_API_BASE}/groups/${groupId}`);
  }

  /**
   * Create a new group
   */
  async createGroup(data: ICreateGroup): Promise<IGroup> {
    return await apiClient.post<IGroup>(`${COMMUNITY_API_BASE}/groups`, data);
  }

  /**
   * Update a group
   */
  async updateGroup(groupId: string, data: IUpdateGroup): Promise<IGroup> {
    return await apiClient.put<IGroup>(`${COMMUNITY_API_BASE}/groups/${groupId}`, data);
  }

  /**
   * Delete a group
   */
  async deleteGroup(groupId: string): Promise<void> {
    await apiClient.delete(`${COMMUNITY_API_BASE}/groups/${groupId}`);
  }

  /**
   * Join a group
   */
  async joinGroup(groupId: string): Promise<IGroup> {
    return await apiClient.post<IGroup>(`${COMMUNITY_API_BASE}/groups/${groupId}/join`);
  }

  /**
   * Leave a group
   */
  async leaveGroup(groupId: string): Promise<void> {
    await apiClient.post(`${COMMUNITY_API_BASE}/groups/${groupId}/leave`);
  }

  /**
   * Get user's joined groups
   */
  async getMyGroups(): Promise<IGroup[]> {
    return await apiClient.get<IGroup[]>(`${COMMUNITY_API_BASE}/groups/my-groups`);
  }

  /**
   * Cancel join request
   */
  async cancelJoinRequest(groupId: string): Promise<IGroup> {
    return await apiClient.delete<IGroup>(`${COMMUNITY_API_BASE}/groups/${groupId}/join-request`);
  }

  /**
   * Approve join request (admin/moderator only)
   */
  async approveJoinRequest(groupId: string, userId: string): Promise<IGroup> {
    return await apiClient.post<IGroup>(`${COMMUNITY_API_BASE}/groups/${groupId}/join-request/${userId}/approve`);
  }

  /**
   * Reject join request (admin/moderator only)
   */
  async rejectJoinRequest(groupId: string, userId: string): Promise<IGroup> {
    return await apiClient.post<IGroup>(`${COMMUNITY_API_BASE}/groups/${groupId}/join-request/${userId}/reject`);
  }

  // ==================== POST ENDPOINTS ====================

  /**
   * Get posts with optional filters
   */
  async getPosts(filters?: IPostFilters): Promise<IPost[]> {
    const params = new URLSearchParams();
    if (filters?.groupId) params.append('groupId', filters.groupId);
    if (filters?.authorId) params.append('authorId', filters.authorId);
    if (filters?.search) params.append('search', filters.search);
    if (filters?.tags) params.append('tags', filters.tags.join(','));
    if (filters?.sort) params.append('sort', filters.sort);
    if (filters?.isPinned !== undefined) params.append('isPinned', String(filters.isPinned));
    if (filters?.page) params.append('page', String(filters.page));
    if (filters?.limit) params.append('limit', String(filters.limit));

    return await apiClient.get<IPost[]>(
      `${COMMUNITY_API_BASE}/posts${params.toString() ? `?${params.toString()}` : ''}`
    );
  }

  /**
   * Get a single post by ID
   */
  async getPostById(postId: string): Promise<IPost> {
    return await apiClient.get<IPost>(`${COMMUNITY_API_BASE}/posts/${postId}`);
  }

  /**
   * Create a new post
   */
  async createPost(data: ICreatePost): Promise<IPost> {
    return await apiClient.post<IPost>(`${COMMUNITY_API_BASE}/posts`, data);
  }

  /**
   * Update a post
   */
  async updatePost(postId: string, data: IUpdatePost): Promise<IPost> {
    return await apiClient.put<IPost>(`${COMMUNITY_API_BASE}/posts/${postId}`, data);
  }

  /**
   * Delete a post
   */
  async deletePost(postId: string): Promise<void> {
    await apiClient.delete(`${COMMUNITY_API_BASE}/posts/${postId}`);
  }

  /**
   * Vote on a post (upvote or downvote)
   */
  async votePost(postId: string, value: 1 | -1): Promise<IPost> {
    return await apiClient.post<IPost>(`${COMMUNITY_API_BASE}/posts/${postId}/vote`, { value });
  }

  /**
   * Remove vote from a post
   */
  async removeVote(postId: string): Promise<IPost> {
    return await apiClient.delete<IPost>(`${COMMUNITY_API_BASE}/posts/${postId}/vote`);
  }

  /**
   * React to a post
   */
  async reactToPost(postId: string, reactionType: ReactionType): Promise<IPost> {
    return await apiClient.post<IPost>(`${COMMUNITY_API_BASE}/posts/${postId}/react`, {
      type: reactionType,
    });
  }

  /**
   * Remove reaction from a post
   */
  async removeReaction(postId: string): Promise<IPost> {
    return await apiClient.delete<IPost>(`${COMMUNITY_API_BASE}/posts/${postId}/react`);
  }

  /**
   * Share a post
   */
  async sharePost(postId: string, platform?: string): Promise<void> {
    await apiClient.post(`${COMMUNITY_API_BASE}/posts/${postId}/share`, { platform });
  }

  // ==================== COMMENT ENDPOINTS ====================

  /**
   * Get comments for a post
   */
  async getComments(postId: string): Promise<IComment[]> {
    return await apiClient.get<IComment[]>(`${COMMUNITY_API_BASE}/posts/${postId}/comments`);
  }

  /**
   * Create a comment
   */
  async createComment(data: ICreateComment): Promise<IComment> {
    return await apiClient.post<IComment>(`${COMMUNITY_API_BASE}/comments`, data);
  }

  /**
   * Update a comment
   */
  async updateComment(commentId: string, data: IUpdateComment): Promise<IComment> {
    return await apiClient.put<IComment>(`${COMMUNITY_API_BASE}/comments/${commentId}`, data);
  }

  /**
   * Delete a comment
   */
  async deleteComment(commentId: string): Promise<void> {
    await apiClient.delete(`${COMMUNITY_API_BASE}/comments/${commentId}`);
  }

  /**
   * Vote on a comment
   */
  async voteComment(commentId: string, value: 1 | -1): Promise<IComment> {
    return await apiClient.post<IComment>(`${COMMUNITY_API_BASE}/comments/${commentId}/vote`, {
      value,
    });
  }

  /**
   * Remove vote from a comment
   */
  async removeCommentVote(commentId: string): Promise<IComment> {
    return await apiClient.delete<IComment>(`${COMMUNITY_API_BASE}/comments/${commentId}/vote`);
  }

  /**
   * React to a comment
   */
  async reactToComment(commentId: string, reactionType: ReactionType): Promise<IComment> {
    return await apiClient.post<IComment>(`${COMMUNITY_API_BASE}/comments/${commentId}/react`, {
      type: reactionType,
    });
  }

  /**
   * Remove reaction from a comment
   */
  async removeCommentReaction(commentId: string): Promise<IComment> {
    return await apiClient.delete<IComment>(`${COMMUNITY_API_BASE}/comments/${commentId}/react`);
  }

  // ==================== STATS ENDPOINTS ====================

  /**
   * Get community statistics
   */
  async getCommunityStats(): Promise<ICommunityStats> {
    return await apiClient.get<ICommunityStats>(`${COMMUNITY_API_BASE}/stats`);
  }
}

export const communityService = new CommunityService();
