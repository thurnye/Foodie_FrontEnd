import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import {
  Box,
  Button,
  TextField,
  Typography,
  Card,
  CardContent,
} from '@mui/material';

interface INewsLetterSubscriptionForm {
  email: string;
}

const NewsLetterSubscriptionForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm<INewsLetterSubscriptionForm>({
    defaultValues: { email: '' },
  });

  const onSubmit: SubmitHandler<INewsLetterSubscriptionForm> = async (data) => {
    console.log('Form Submitted:', data);
    // Example: await services.subscribeToNewsletter(data);
    reset(); // Reset after submit
  };

  return (
    <Box sx={{ my: 1 }}>
      <Card sx={{ boxShadow: 'none', border: '1px solid #e0e0e0' }}>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <Typography
              variant='h5'
              sx={{
                mb: 1,
                fontWeight: 600,
                textAlign: 'center',
                fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
              }}
            >
              Never Miss A Post!
            </Typography>
            <Typography
              variant='body2'
              color='text.secondary'
              sx={{ mb: 3, textAlign: 'center' }}
            >
              Sign up for free and be the first to get notified about updates.
            </Typography>

            <TextField
              fullWidth
              id='email'
              type='email'
              placeholder='Enter your email'
              variant='outlined'
              size='small'
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: 'Enter a valid email address',
                },
              })}
              error={!!errors.email}
              helperText={errors.email?.message}
              sx={{
                mb: 2,
              }}
            />

            <Button
              variant='contained'
              color='primary'
              type='submit'
              fullWidth
              disabled={isSubmitting}
              sx={{
                backgroundColor: '#000',
                textTransform: 'none',
                fontWeight: 500,
                py: 1,
                '&:hover': {
                  backgroundColor: '#333',
                },
              }}
            >
              {isSubmitting ? 'Subscribing...' : 'Subscribe'}
            </Button>

            {isSubmitSuccessful && (
              <Typography
                variant='body2'
                sx={{
                  mt: 2,
                  textAlign: 'center',
                  color: 'success.main',
                }}
              >
                You’ve successfully subscribed!
              </Typography>
            )}
          </form>
        </CardContent>
      </Card>
    </Box>
  );
};

export default NewsLetterSubscriptionForm;
