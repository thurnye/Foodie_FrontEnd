/**
 * Review API Service
 */

import { apiClient } from '../../../shared/services/apiClient.service';
import { IReview, IReviewReply, IReviewReaction } from '../types/recipe.types';

interface GetReviewsResponse {
  reviews: IReview[];
  meta: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

interface CreateReplyPayload {
  parentReviewId: string;
  review: string;
  parentReplyId?: string;
}

interface ToggleReactionPayload {
  reactionType: IReviewReaction['type'];
}

/**
 * Review Service - API calls for review operations
 */
class ReviewApi {
  /**
   * Get reviews with replies for a recipe
   */
  async getReviewsWithReplies(
    recipeId: string,
    page: number = 1,
    limit: number = 12
  ): Promise<GetReviewsResponse> {
    const axiosClient = apiClient.getClient();
    const response = await axiosClient.get<any>(
      `/review/recipe/${recipeId}/with-replies?page=${page}&limit=${limit}`
    );

    // Extract data and pagination from the API response
    const reviews = response.data.data || [];
    const meta = response.data.meta || {
      page,
      limit,
      total: 0,
      totalPages: 0,
    };

    return {
      reviews,
      meta,
    };
  }

  /**
   * Toggle like on a review
   */
  async toggleReviewLike(reviewId: string): Promise<IReview> {
    const response = await apiClient.post<IReview>(`/review/${reviewId}/like`);
    return response;
  }

  /**
   * Toggle reaction on a review
   */
  async toggleReviewReaction(
    reviewId: string,
    reactionType: IReviewReaction['type']
  ): Promise<IReview> {
    const response = await apiClient.post<IReview>(`/review/${reviewId}/reaction`, {
      reactionType,
    });
    return response;
  }

  /**
   * Create a reply to a review or another reply
   */
  async createReply(
    parentReviewId: string,
    reviewText: string,
    parentReplyId?: string
  ): Promise<IReviewReply> {
    const response = await apiClient.post<IReviewReply>('/review/reply', {
      parentReviewId,
      review: reviewText,
      parentReplyId,
    });
    return response;
  }

  /**
   * Toggle like on a reply
   */
  async toggleReplyLike(replyId: string): Promise<IReviewReply> {
    const response = await apiClient.post<IReviewReply>(`/review/reply/${replyId}/like`);
    return response;
  }

  /**
   * Toggle reaction on a reply
   */
  async toggleReplyReaction(
    replyId: string,
    reactionType: IReviewReaction['type']
  ): Promise<IReviewReply> {
    const response = await apiClient.post<IReviewReply>(`/review/reply/${replyId}/reaction`, {
      reactionType,
    });
    return response;
  }

  /**
   * Add a review to a recipe
   */
  async addReview(
    recipeId: string,
    reviewText: string,
    rating: number
  ): Promise<{ reviewId: string; rating: number }> {
    const response = await apiClient.post<{ reviewId: string; rating: number }>('/review/recipe', {
      recipeId,
      review: reviewText,
      rating,
    });
    return response;
  }

  /**
   * Update a review
   */
  async updateReview(
    reviewId: string,
    updates: { review?: string; rating?: number }
  ): Promise<IReview> {
    const response = await apiClient.patch<IReview>(`/review/${reviewId}`, updates);
    return response;
  }

  /**
   * Delete a review
   */
  async deleteReview(reviewId: string): Promise<void> {
    await apiClient.delete<void>(`/review/${reviewId}`);
  }

  /**
   * Get user's review for a recipe
   */
  async getUserReviewForRecipe(recipeId: string): Promise<IReview | null> {
    const response = await apiClient.get<IReview | null>(`/review/user/${recipeId}`);
    return response;
  }
}

export const ReviewApiService = new ReviewApi();
