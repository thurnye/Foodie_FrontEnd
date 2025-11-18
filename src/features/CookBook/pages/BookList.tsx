import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  IconButton,
  Menu,
  MenuItem,
  Chip,
  CircularProgress,
  Alert,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
} from '@mui/material';
import {
  Add,
  MoreVert,
  Edit,
  Delete,
  ArrowBack,
  MenuBook,
  Book,
} from '@mui/icons-material';
import { bookService } from '../services/book.service';
import { IBook, BookStatus } from '../types/book.types';

const BookList: React.FC = () => {
  const navigate = useNavigate();
  const { cookbookId } = useParams<{ cookbookId: string }>();

  const [books, setBooks] = useState<IBook[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [menuAnchor, setMenuAnchor] = useState<null | HTMLElement>(null);
  const [selectedBook, setSelectedBook] = useState<IBook | null>(null);
  const [createDialogOpen, setCreateDialogOpen] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [newBookTitle, setNewBookTitle] = useState('');
  const [newBookDescription, setNewBookDescription] = useState('');

  // Fetch books for this cookbook
  useEffect(() => {
    const fetchBooks = async () => {
      if (!cookbookId) {
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        const response = await bookService.getMyBooks({ cookbookId });
        setBooks(response.data || []);
        setError(null);
      } catch (err: any) {
        console.error('Failed to fetch books:', err);
        setError(err?.response?.data?.message || 'Failed to fetch books');
        setBooks([]); // Set empty array on error
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, [cookbookId]);

  const handleMenuOpen = (
    event: React.MouseEvent<HTMLElement>,
    book: IBook
  ) => {
    event.stopPropagation();
    setMenuAnchor(event.currentTarget);
    setSelectedBook(book);
  };

  const handleMenuClose = () => {
    setMenuAnchor(null);
  };

  const handleEdit = () => {
    if (selectedBook) {
      navigate(`/dashboard/cook-book/book/${selectedBook._id}/edit`);
    }
    handleMenuClose();
  };

  const handleDeleteClick = () => {
    setDeleteDialogOpen(true);
    handleMenuClose();
  };

  const handleDeleteConfirm = async () => {
    if (selectedBook) {
      try {
        await bookService.deleteBook(selectedBook._id);
        setDeleteDialogOpen(false);
        setSelectedBook(null);

        // Refresh books list
        const response = await bookService.getMyBooks({ cookbookId });
        setBooks(response.data || []);
      } catch (err) {
        console.error('Failed to delete book:', err);
      }
    }
  };

  const handleCreateClick = () => {
    setCreateDialogOpen(true);
  };

  const handleCreateConfirm = async () => {
    if (!newBookTitle.trim() || !cookbookId) return;

    const bookData = {
      cookbookId,
      name: newBookTitle,
      description: newBookDescription,
    };

    try {
      const result = await bookService.createBook(bookData);
      setCreateDialogOpen(false);
      setNewBookTitle('');
      setNewBookDescription('');

      console.log('Book created:', result);

      // Refresh books list
      const response = await bookService.getMyBooks({ cookbookId });
      setBooks(response.data || []);

      // Navigate to book editor
      navigate(`/dashboard/cook-book/book/${result._id}/edit`);
    } catch (err) {
      console.error('Failed to create book:', err);
    }
  };

  const handleCardClick = (book: IBook) => {
    navigate(`/dashboard/cook-book/book/${book._id}/edit`);
  };

  const getStatusColor = (status: BookStatus) => {
    switch (status) {
      case BookStatus.PUBLISHED:
        return 'success';
      case BookStatus.ARCHIVED:
        return 'warning';
      case BookStatus.DRAFT:
      default:
        return 'default';
    }
  };

  const getStatusLabel = (status: BookStatus) => {
    return status.charAt(0).toUpperCase() + status.slice(1);
  };

  if (loading) {
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh',
          backgroundColor: '#1e1e1e',
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundColor: '#1e1e1e',
        color: '#e0e0e0',
        py: { xs: 2, sm: 3, md: 4 },
      }}
    >
      <Container maxWidth='xl' sx={{ px: { xs: 2, sm: 3 } }}>
        {/* Header */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: { xs: 'flex-start', sm: 'center' },
            mb: { xs: 3, sm: 4 },
            flexDirection: { xs: 'column', sm: 'row' },
            gap: { xs: 2, sm: 0 },
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 1, sm: 2 } }}>
            <IconButton
              onClick={() => navigate('/dashboard/cook-book')}
              sx={{ color: '#3b82f6' }}
            >
              <ArrowBack />
            </IconButton>
            <Book sx={{ fontSize: { xs: 32, sm: 40 }, color: '#3b82f6' }} />
            <Typography
              variant='h4'
              sx={{
                fontWeight: 700,
                fontSize: { xs: '1.5rem', sm: '2rem', md: '2.125rem' },
              }}
            >
              Books in Collection
            </Typography>
          </Box>
          <Button
            variant='contained'
            startIcon={<Add />}
            onClick={handleCreateClick}
            sx={{
              backgroundColor: '#3b82f6',
              '&:hover': { backgroundColor: '#2563eb' },
              px: { xs: 2, sm: 3 },
              py: { xs: 1, sm: 1.5 },
              width: { xs: '100%', sm: 'auto' },
            }}
          >
            <Box component="span" sx={{ display: { xs: 'none', sm: 'inline' } }}>
              Create Book
            </Box>
            <Box component="span" sx={{ display: { xs: 'inline', sm: 'none' } }}>
              Create
            </Box>
          </Button>
        </Box>

        {/* Error Alert */}
        {error && (
          <Alert severity='error' sx={{ mb: 3 }}>
            {error}
          </Alert>
        )}

        {/* Empty State */}
        {books.length === 0 && !loading && (
          <Box
            sx={{
              textAlign: 'center',
              py: { xs: 4, sm: 6, md: 8 },
              px: 2,
            }}
          >
            <Book
              sx={{
                fontSize: { xs: 60, sm: 80 },
                color: '#3a3a3a',
                mb: 2,
              }}
            />
            <Typography
              variant='h5'
              sx={{
                mb: 2,
                color: '#9ca3af',
                fontSize: { xs: '1.25rem', sm: '1.5rem' },
              }}
            >
              No books yet
            </Typography>
            <Typography
              sx={{
                mb: 4,
                color: '#6b7280',
                fontSize: { xs: '0.875rem', sm: '1rem' },
              }}
            >
              Create your first book to get started
            </Typography>
            <Button
              variant='contained'
              startIcon={<Add />}
              onClick={handleCreateClick}
              sx={{
                backgroundColor: '#3b82f6',
                '&:hover': { backgroundColor: '#2563eb' },
                px: { xs: 2, sm: 3 },
                py: { xs: 1, sm: 1.5 },
              }}
            >
              Create Your First Book
            </Button>
          </Box>
        )}

        {/* Book Grid */}
        {books.length > 0 && (
          <Grid container spacing={{ xs: 2, sm: 3 }}>
            {books.map((book) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={book._id}>
                <Card
                  sx={{
                    backgroundColor: '#252525',
                    color: '#e0e0e0',
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                    '&:hover': {
                      transform: { xs: 'none', sm: 'translateY(-4px)' },
                      boxShadow: { xs: 'none', sm: '0 8px 24px rgba(0,0,0,0.3)' },
                    },
                    position: 'relative',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                  onClick={() => handleCardClick(book)}
                >
                  <CardMedia
                    component='img'
                    sx={{
                      height: { xs: 180, sm: 200 },
                      objectFit: 'cover',
                    }}
                    image={
                      book.recipe?.[0]?.details?.thumbnail ||
                      'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400'
                    }
                    alt={book.name}
                  />
                  <CardContent sx={{ flexGrow: 1, p: { xs: 1.5, sm: 2 } }}>
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'flex-start',
                        mb: 1,
                      }}
                    >
                      <Typography
                        variant='h6'
                        sx={{
                          fontWeight: 600,
                          fontSize: { xs: '1rem', sm: '1.125rem' },
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          display: '-webkit-box',
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: 'vertical',
                          flex: 1,
                        }}
                      >
                        {book.name}
                      </Typography>
                      <IconButton
                        size='small'
                        onClick={(e) => handleMenuOpen(e, book)}
                        sx={{ color: '#9ca3af', ml: 1 }}
                      >
                        <MoreVert />
                      </IconButton>
                    </Box>
                    <Typography
                      variant='body2'
                      sx={{
                        color: '#9ca3af',
                        mb: 2,
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                      }}
                    >
                      {book.description || 'No description'}
                    </Typography>
                    <Box
                      sx={{
                        display: 'flex',
                        gap: 1,
                        flexWrap: 'wrap',
                        mb: 1,
                      }}
                    >
                      <Chip
                        label={getStatusLabel(book.status)}
                        color={getStatusColor(book.status)}
                        size='small'
                      />
                      {book.isPublic && (
                        <Chip
                          label='Public'
                          size='small'
                          sx={{
                            backgroundColor: '#3b82f620',
                            color: '#3b82f6',
                          }}
                        />
                      )}
                    </Box>
                    <Typography variant='caption' sx={{ color: '#6b7280' }}>
                      {book.recipe?.length || 0} recipe(s)
                    </Typography>
                  </CardContent>
                  <CardActions sx={{ p: { xs: 1.5, sm: 2 }, pt: 0 }}>
                    <Button
                      size='small'
                      startIcon={<Edit />}
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate(`/dashboard/cook-book/book/${book._id}/edit`);
                      }}
                      sx={{
                        color: '#3b82f6',
                        fontSize: { xs: '0.75rem', sm: '0.875rem' },
                      }}
                    >
                      Edit
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        )}
      </Container>

      {/* Context Menu */}
      <Menu
        anchorEl={menuAnchor}
        open={Boolean(menuAnchor)}
        onClose={handleMenuClose}
        PaperProps={{
          sx: {
            backgroundColor: '#252525',
            color: '#e0e0e0',
          },
        }}
      >
        <MenuItem onClick={handleEdit}>
          <Edit sx={{ mr: 1, fontSize: 20 }} />
          Edit
        </MenuItem>
        <MenuItem onClick={handleDeleteClick} sx={{ color: '#ef4444' }}>
          <Delete sx={{ mr: 1, fontSize: 20 }} />
          Delete
        </MenuItem>
      </Menu>

      {/* Create Dialog */}
      <Dialog
        open={createDialogOpen}
        onClose={() => {
          setCreateDialogOpen(false);
          setNewBookTitle('');
          setNewBookDescription('');
        }}
        maxWidth='sm'
        fullWidth
        PaperProps={{
          sx: {
            backgroundColor: '#1e1e1e',
            color: '#e0e0e0',
          },
        }}
      >
        <DialogTitle>Create New Book</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            fullWidth
            label='Book Name'
            value={newBookTitle}
            onChange={(e) => setNewBookTitle(e.target.value)}
            sx={{ mt: 2, mb: 2 }}
            InputLabelProps={{ sx: { color: '#9ca3af' } }}
            InputProps={{
              sx: {
                backgroundColor: '#252525',
                color: '#e0e0e0',
                '& fieldset': { borderColor: '#3a3a3a' },
              },
            }}
          />
          <TextField
            fullWidth
            label='Description'
            value={newBookDescription}
            onChange={(e) => setNewBookDescription(e.target.value)}
            multiline
            rows={3}
            InputLabelProps={{ sx: { color: '#9ca3af' } }}
            InputProps={{
              sx: {
                backgroundColor: '#252525',
                color: '#e0e0e0',
                '& fieldset': { borderColor: '#3a3a3a' },
              },
            }}
          />
        </DialogContent>
        <DialogActions sx={{ p: 3 }}>
          <Button
            onClick={() => {
              setCreateDialogOpen(false);
              setNewBookTitle('');
              setNewBookDescription('');
            }}
            sx={{ color: '#9ca3af' }}
          >
            Cancel
          </Button>
          <Button
            onClick={handleCreateConfirm}
            variant='contained'
            disabled={!newBookTitle.trim()}
            sx={{
              backgroundColor: '#3b82f6',
              '&:hover': { backgroundColor: '#2563eb' },
            }}
          >
            Create
          </Button>
        </DialogActions>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <Dialog
        open={deleteDialogOpen}
        onClose={() => setDeleteDialogOpen(false)}
        maxWidth='xs'
        fullWidth
        PaperProps={{
          sx: {
            backgroundColor: '#1e1e1e',
            color: '#e0e0e0',
          },
        }}
      >
        <DialogTitle>Delete Book?</DialogTitle>
        <DialogContent>
          <Typography>
            Are you sure you want to delete "{selectedBook?.name}"? This
            action cannot be undone.
          </Typography>
        </DialogContent>
        <DialogActions sx={{ p: 3 }}>
          <Button
            onClick={() => setDeleteDialogOpen(false)}
            sx={{ color: '#9ca3af' }}
          >
            Cancel
          </Button>
          <Button
            onClick={handleDeleteConfirm}
            variant='contained'
            sx={{
              backgroundColor: '#ef4444',
              '&:hover': { backgroundColor: '#dc2626' },
            }}
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default BookList;
