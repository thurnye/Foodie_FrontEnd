import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import {
  Box,
  Typography,
  Rating,
  TextField,
  Button,
  Alert,
} from '@mui/material';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../../app/hooks/app.hooks';
import CustomizedButton from '../../../app/components/CustomizedButton';
import { ReviewApiService } from '../services/review.service';

interface IFormInputs {
  ratings: number | null;
  review: string;
}

// ---------- Component ----------
const ReviewForm: React.FC = () => {
  const navigate = useNavigate();
  const { isAuthenticated, user } = useAppSelector((state) => state.auth);
  const recipe = useAppSelector((state) => state.recipe.currentRecipe);

  const [ratingErr, setRatingErr] = useState<string | null>(null);
  const [ratingValue, setRatingValue] = useState<number | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormInputs>({
    defaultValues: {
      ratings: null,
      review: '',
    },
  });

  const onSubmit: SubmitHandler<IFormInputs> = async (data) => {
    try {
      if (!isAuthenticated) {
        navigate('/login');
        return;
      }

      if (!ratingValue) {
        setRatingErr('*Rating is required');
        return;
      }

      if (!recipe?._id) {
        setSubmitError('Recipe not found');
        return;
      }

      setRatingErr(null);
      setSubmitError(null);
      setIsSubmitting(true);

      // Call the API to add the review
      await ReviewApiService.addReview(
        recipe._id,
        data.review,
        ratingValue
      );

      // Success - reset form
      reset();
      setRatingValue(null);
      setSubmitSuccess(true);

      // Hide success message after 3 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 3000);

      // Optionally refresh the page to show the new review
      setTimeout(() => {
        window.location.reload();
      }, 1500);
    } catch (err: any) {
      console.error('Error submitting review:', err);
      setSubmitError(err?.response?.data?.message || 'Failed to submit review. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Box sx={{ mt: 5 }}>
      <Typography variant='h5' gutterBottom>
        Let us know how you like it
      </Typography>

      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        {/* Success Message */}
        {submitSuccess && (
          <Alert severity="success" sx={{ mb: 2 }}>
            Review submitted successfully!
          </Alert>
        )}

        {/* Error Message */}
        {submitError && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {submitError}
          </Alert>
        )}

        {/* Rating */}
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
          <Typography variant='subtitle1' color='text.secondary' sx={{ mr: 2 }}>
            Rating:
          </Typography>
          <Rating
            name='ratings'
            value={ratingValue}
            onChange={(_event, newValue) => setRatingValue(newValue)}
          />
        </Box>

        {ratingErr && (
          <Alert severity='error' sx={{ mb: 2, py: 0.5 }}>
            {ratingErr}
          </Alert>
        )}

        {/* Review Text */}
        <TextField
          label='Your review'
          placeholder='Share your thoughts...'
          multiline
          rows={5}
          fullWidth
          {...register('review', {
            required: '*Please add your review to submit*',
            minLength: {
              value: 5,
              message: 'Review must be at least 5 characters long',
            },
          })}
          error={!!errors.review}
          helperText={errors.review?.message}
          sx={{ mb: 3 }}
        />

        {/* Submit or Login */}
        <Box>
          {!user ? (
            <Button
              variant='contained'
              color='primary'
              component={Link}
              to='/login'
              sx={{ width: '100%' }}
            >
              Login to Post Review
            </Button>
          ) : (
            <Box sx={{}}>
              <CustomizedButton
                type='submit'
                variant='text'
                label={isSubmitting ? 'Posting...' : 'Post Review'}
                disabled={isSubmitting}
                disableElevation
                backgroundColor={'#000000'}
                sx={{
                  fontSize: 13,
                  borderRadius: 0,
                  textTransform: 'none',
                }}
              />
            </Box>
          )}
        </Box>
      </form>

      {/* <Box sx={{ mt: 3 }}>
        <hr />
      </Box> */}
    </Box>
  );
};

export default ReviewForm;
