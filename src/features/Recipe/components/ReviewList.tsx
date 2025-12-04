import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  CircularProgress,
  Alert,
  Pagination,
  Divider,
} from '@mui/material';
import { IReview, IReviewReaction } from '../types/recipe.types';
import ReviewItem from './ReviewItem';
import { useAppSelector } from '../../../app/hooks/app.hooks';
import { ReviewApiService } from '../services/review.service';

interface ReviewListProps {
  recipeId: string;
}

const ReviewList: React.FC<ReviewListProps> = ({ recipeId }) => {
  const [reviews, setReviews] = useState<IReview[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const { user } = useAppSelector((state) => state.auth);
  const currentUserId = user?.id;

  useEffect(() => {
    fetchReviews();
  }, [recipeId, page]);

  const fetchReviews = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await ReviewApiService.getReviewsWithReplies(recipeId, page, 12);
      setReviews(response.reviews);
      setTotalPages(response.meta.totalPages);
      setLoading(false);
    } catch (err: any) {
      setError(err?.response?.data?.message || 'Failed to load reviews');
      setLoading(false);
    }
  };

  const handleLikeReview = async (reviewId: string) => {
    if (!currentUserId) return;

    // Update local state optimistically
    setReviews((prevReviews) =>
      prevReviews.map((review) => {
        if (review._id === reviewId) {
          const isLiked = review.likes.includes(currentUserId);
          return {
            ...review,
            likes: isLiked
              ? review.likes.filter((id) => id !== currentUserId)
              : [...review.likes, currentUserId],
          };
        }
        return review;
      })
    );

    try {
      await ReviewApiService.toggleReviewLike(reviewId);
    } catch (err) {
      console.error('Failed to like review:', err);
      // Revert optimistic update on error
      setReviews((prevReviews) =>
        prevReviews.map((review) => {
          if (review._id === reviewId) {
            const isLiked = review.likes.includes(currentUserId);
            return {
              ...review,
              likes: isLiked
                ? review.likes.filter((id) => id !== currentUserId)
                : [...review.likes, currentUserId],
            };
          }
          return review;
        })
      );
    }
  };

  const handleReactReview = async (reviewId: string, reactionType: IReviewReaction['type']) => {
    if (!currentUserId) return;

    // Store previous state for rollback
    const previousReviews = reviews;

    // Update local state optimistically
    setReviews((prevReviews) =>
      prevReviews.map((review) => {
        if (review._id === reviewId) {
          const existingReaction = review.reactions.find(
            (r) => r.userId === currentUserId && r.type === reactionType
          );

          if (existingReaction) {
            // Remove reaction
            return {
              ...review,
              reactions: review.reactions.filter(
                (r) => !(r.userId === currentUserId && r.type === reactionType)
              ),
            };
          } else {
            // Add reaction (remove any other reaction from this user first)
            const filteredReactions = review.reactions.filter((r) => r.userId !== currentUserId);
            return {
              ...review,
              reactions: [...filteredReactions, { type: reactionType, userId: currentUserId }],
            };
          }
        }
        return review;
      })
    );

    try {
      await ReviewApiService.toggleReviewReaction(reviewId, reactionType);
    } catch (err) {
      console.error('Failed to react to review:', err);
      // Revert to previous state on error
      setReviews(previousReviews);
    }
  };

  const handleReplyToReview = async (reviewId: string, replyText: string, parentReplyId?: string) => {
    if (!currentUserId) return;

    try {
      await ReviewApiService.createReply(reviewId, replyText, parentReplyId);

      // Refresh reviews to get the new reply
      await fetchReviews();
    } catch (err) {
      console.error('Failed to reply to review:', err);
    }
  };

  const handleLikeReply = async (replyId: string) => {
    if (!currentUserId) return;

    // Update local state optimistically
    setReviews((prevReviews) =>
      prevReviews.map((review) => ({
        ...review,
        replies: review.replies.map((reply) => {
          if (reply._id === replyId) {
            const isLiked = reply.likes.includes(currentUserId);
            return {
              ...reply,
              likes: isLiked
                ? reply.likes.filter((id) => id !== currentUserId)
                : [...reply.likes, currentUserId],
            };
          }
          return reply;
        }),
      }))
    );

    try {
      await ReviewApiService.toggleReplyLike(replyId);
    } catch (err) {
      console.error('Failed to like reply:', err);
      // Revert optimistic update on error
      setReviews((prevReviews) =>
        prevReviews.map((review) => ({
          ...review,
          replies: review.replies.map((reply) => {
            if (reply._id === replyId) {
              const isLiked = reply.likes.includes(currentUserId);
              return {
                ...reply,
                likes: isLiked
                  ? reply.likes.filter((id) => id !== currentUserId)
                  : [...reply.likes, currentUserId],
              };
            }
            return reply;
          }),
        }))
      );
    }
  };

  const handleReactReply = async (replyId: string, reactionType: IReviewReaction['type']) => {
    if (!currentUserId) return;

    // Store previous state for rollback
    const previousReviews = reviews;

    // Update local state optimistically
    setReviews((prevReviews) =>
      prevReviews.map((review) => ({
        ...review,
        replies: review.replies.map((reply) => {
          if (reply._id === replyId) {
            const existingReaction = reply.reactions.find(
              (r) => r.userId === currentUserId && r.type === reactionType
            );

            if (existingReaction) {
              return {
                ...reply,
                reactions: reply.reactions.filter(
                  (r) => !(r.userId === currentUserId && r.type === reactionType)
                ),
              };
            } else {
              const filteredReactions = reply.reactions.filter((r) => r.userId !== currentUserId);
              return {
                ...reply,
                reactions: [...filteredReactions, { type: reactionType, userId: currentUserId }],
              };
            }
          }
          return reply;
        }),
      }))
    );

    try {
      await ReviewApiService.toggleReplyReaction(replyId, reactionType);
    } catch (err) {
      console.error('Failed to react to reply:', err);
      // Revert to previous state on error
      setReviews(previousReviews);
    }
  };

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', py: 4 }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return <Alert severity="error">{error}</Alert>;
  }

  return (
    <Box>
      <Typography variant="h5" gutterBottom sx={{ mb: 3 }}>
        Reviews ({reviews.length})
      </Typography>

      {reviews.length === 0 ? (
        <Alert severity="info">
          No reviews yet. Be the first to review this recipe!
        </Alert>
      ) : (
        <>
          {reviews.map((review) => (
            <ReviewItem
              key={review._id}
              review={review}
              currentUserId={currentUserId}
              onLike={handleLikeReview}
              onReact={handleReactReview}
              onReply={handleReplyToReview}
              onLikeReply={handleLikeReply}
              onReactReply={handleReactReply}
            />
          ))}

          {totalPages > 1 && (
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
              <Pagination
                count={totalPages}
                page={page}
                onChange={(event, value) => setPage(value)}
                color="primary"
              />
            </Box>
          )}
        </>
      )}
    </Box>
  );
};

export default ReviewList;
