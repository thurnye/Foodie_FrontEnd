import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Box,
  Container,
  Avatar,
  Typography,
  Card,
  CardContent,
  Grid,
  Chip,
  Button,
  CircularProgress,
  Divider,
  Stack,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import {
  LocationOn as LocationIcon,
  Email as EmailIcon,
  Phone as PhoneIcon,
  CalendarToday as CalendarIcon,
  Restaurant as RestaurantIcon,
  Star as StarIcon,
  ArrowBack as ArrowBackIcon,
} from '@mui/icons-material';
import { IUser } from '../../auth/types/auth.types';
import { profileApiService } from '../services/profile.api.service';

const AuthorPage: React.FC = () => {
  const { authorId } = useParams<{ authorId: string }>();
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const [author, setAuthor] = useState<IUser | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAuthor = async () => {
      if (!authorId) {
        setError('Author ID is required');
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        const data = await profileApiService.getUserById('612296fc86231100a0631b22');
        setAuthor(data);
        setError(null);
      } catch (err: any) {
        console.error('Failed to fetch author:', err);
        setError(err.message || 'Failed to load author profile');
      } finally {
        setLoading(false);
      }
    };

    fetchAuthor();
  }, [authorId]);

  if (loading) {
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '60vh',
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  if (error || !author) {
    return (
      <Container maxWidth="md" sx={{ py: 4 }}>
        <Card>
          <CardContent>
            <Typography variant="h6" color="error" gutterBottom>
              {error || 'Author not found'}
            </Typography>
            <Button
              startIcon={<ArrowBackIcon />}
              onClick={() => navigate(-1)}
              sx={{ mt: 2 }}
            >
              Go Back
            </Button>
          </CardContent>
        </Card>
      </Container>
    );
  }

  return (
    <Box sx={{ bgcolor: 'background.default', minHeight: '100vh', py: 4 }}>
      <Container maxWidth="lg">
        {/* Back Button */}
        <Button
          startIcon={<ArrowBackIcon />}
          onClick={() => navigate(-1)}
          sx={{ mb: 3 }}
        >
          Back
        </Button>

        <Grid container spacing={3}>
          {/* Author Profile Card */}
          <Grid item xs={12} md={4}>
            <Card sx={{ position: isMobile ? 'relative' : 'sticky', top: isMobile ? 0 : 16 }}>
              <CardContent>
                {/* Avatar and Name */}
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 3 }}>
                  <Avatar
                    src={author.avatar}
                    alt={`${author.firstName} ${author.lastName}`}
                    sx={{
                      width: 120,
                      height: 120,
                      mb: 2,
                      border: '4px solid',
                      borderColor: 'primary.main',
                    }}
                  >
                    {author.firstName?.[0]}
                    {author.lastName?.[0]}
                  </Avatar>
                  <Typography variant="h5" fontWeight={600} textAlign="center">
                    {author.firstName} {author.lastName}
                  </Typography>
                  {author.role && (
                    <Chip
                      label={author.role === 'restaurant' ? 'Restaurant' : 'Home Chef'}
                      color="primary"
                      size="small"
                      sx={{ mt: 1, textTransform: 'capitalize' }}
                    />
                  )}
                </Box>

                <Divider sx={{ my: 2 }} />

                {/* Bio */}
                {author.bio && (
                  <Box sx={{ mb: 3 }}>
                    <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                      About
                    </Typography>
                    <Typography variant="body2" sx={{ whiteSpace: 'pre-wrap' }}>
                      {author.bio}
                    </Typography>
                  </Box>
                )}

                {/* Stats */}
                {(author.rating !== undefined || author.completedTrades !== undefined) && (
                  <>
                    <Divider sx={{ my: 2 }} />
                    <Box sx={{ mb: 2 }}>
                      <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                        Statistics
                      </Typography>
                      <Stack spacing={1}>
                        {author.rating !== undefined && (
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <StarIcon fontSize="small" color="warning" />
                            <Typography variant="body2">
                              {author.rating.toFixed(1)} Rating
                            </Typography>
                          </Box>
                        )}
                        {author.completedTrades !== undefined && (
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <RestaurantIcon fontSize="small" color="primary" />
                            <Typography variant="body2">
                              {author.completedTrades} Recipes Shared
                            </Typography>
                          </Box>
                        )}
                      </Stack>
                    </Box>
                  </>
                )}

                {/* Contact Info */}
                <Divider sx={{ my: 2 }} />
                <Box>
                  <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                    Contact Information
                  </Typography>
                  <Stack spacing={1.5}>
                    {author.email && (
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <EmailIcon fontSize="small" color="action" />
                        <Typography variant="body2" sx={{ wordBreak: 'break-word' }}>
                          {author.email}
                        </Typography>
                      </Box>
                    )}
                    {author.phoneNumber && (
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <PhoneIcon fontSize="small" color="action" />
                        <Typography variant="body2">{author.phoneNumber}</Typography>
                      </Box>
                    )}
                    {(author.city || author.state || author.country) && (
                      <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1 }}>
                        <LocationIcon fontSize="small" color="action" />
                        <Typography variant="body2">
                          {[author.city, author.state, author.country]
                            .filter(Boolean)
                            .join(', ')}
                        </Typography>
                      </Box>
                    )}
                  </Stack>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          {/* Author Content */}
          <Grid item xs={12} md={8}>
            <Card>
              <CardContent>
                <Typography variant="h6" fontWeight={600} gutterBottom>
                  Recipes by {author.firstName}
                </Typography>
                <Divider sx={{ my: 2 }} />

                {/* Placeholder for recipes list */}
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    py: 6,
                  }}
                >
                  <RestaurantIcon sx={{ fontSize: 60, color: 'text.secondary', mb: 2 }} />
                  <Typography variant="body1" color="text.secondary" textAlign="center">
                    Recipe listings will appear here
                  </Typography>
                  <Typography variant="body2" color="text.secondary" textAlign="center" sx={{ mt: 1 }}>
                    This section can be populated with the author's recipes
                  </Typography>
                </Box>
              </CardContent>
            </Card>

            {/* Additional Info Card */}
            {author.dateOfBirth && (
              <Card sx={{ mt: 3 }}>
                <CardContent>
                  <Typography variant="h6" fontWeight={600} gutterBottom>
                    Additional Information
                  </Typography>
                  <Divider sx={{ my: 2 }} />
                  <Stack spacing={2}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <CalendarIcon fontSize="small" color="action" />
                      <Typography variant="body2">
                        Member since{' '}
                        {new Date(author.dateOfBirth).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                        })}
                      </Typography>
                    </Box>
                  </Stack>
                </CardContent>
              </Card>
            )}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AuthorPage;
