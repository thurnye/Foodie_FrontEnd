import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
  Visibility,
  PictureAsPdf,
  MenuBook,
} from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../app/stores/stores';
import { setCurrentCookbook } from '../redux/cookbook.slice';
import {
  ICookbook,
  CookbookStatus,
  CreateCookbookData,
} from '../types/cookbook.types';
import {
  createCookbook,
  deleteCookbook,
  fetchMyCookbooks,
} from '../redux/cookbook.async.thunk';

const CookbookList: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const {
    cookbooks = [],
    loading,
    error,
  } = useSelector((state: RootState) => state.cookbook);

  const [menuAnchor, setMenuAnchor] = useState<null | HTMLElement>(null);
  const [selectedCookbook, setSelectedCookbook] = useState<ICookbook | null>(
    null
  );
  const [createDialogOpen, setCreateDialogOpen] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [newCookbookTitle, setNewCookbookTitle] = useState('');
  const [newCookbookDescription, setNewCookbookDescription] = useState('');

  useEffect(() => {
    dispatch(fetchMyCookbooks({}));
  }, [dispatch]);

  const handleMenuOpen = (
    event: React.MouseEvent<HTMLElement>,
    cookbook: ICookbook
  ) => {
    event.stopPropagation();
    setMenuAnchor(event.currentTarget);
    setSelectedCookbook(cookbook);
  };

  const handleMenuClose = () => {
    setMenuAnchor(null);
  };

  const handleEdit = () => {
    if (selectedCookbook) {
      navigate(`/dashboard/cookbook/${selectedCookbook._id}/edit`);
    }
    handleMenuClose();
  };

  const handleView = () => {
    if (selectedCookbook) {
      // TODO: Navigate to public view
      console.log('View cookbook:', selectedCookbook._id);
    }
    handleMenuClose();
  };

  const handleDeleteClick = () => {
    setDeleteDialogOpen(true);
    handleMenuClose();
  };

  const handleDeleteConfirm = async () => {
    if (selectedCookbook) {
      await dispatch(deleteCookbook(selectedCookbook._id));
      setDeleteDialogOpen(false);
      setSelectedCookbook(null);
    }
  };

  const handleCreateClick = () => {
    setCreateDialogOpen(true);
  };

  const handleCreateConfirm = async () => {
    if (!newCookbookTitle.trim()) return;

    const cookbookData: CreateCookbookData = {
      title: newCookbookTitle,
      description: newCookbookDescription,
      recipes: [], // Start with empty recipes
    };

    try {
      const result = await dispatch(createCookbook(cookbookData)).unwrap();
      setCreateDialogOpen(false);
      setNewCookbookTitle('');
      setNewCookbookDescription('');
      navigate(`/dashboard/cookbook/${result._id}/edit`);
    } catch (err) {
      console.error('Failed to create cookbook:', err);
    }
  };

  const handleCardClick = (cookbook: ICookbook) => {
    dispatch(setCurrentCookbook(cookbook));
    navigate(`/dashboard/cookbook/${cookbook._id}/edit`);
  };

  const getStatusColor = (status: CookbookStatus) => {
    switch (status) {
      case CookbookStatus.COMPLETED:
        return 'success';
      case CookbookStatus.GENERATING:
        return 'warning';
      case CookbookStatus.FAILED:
        return 'error';
      case CookbookStatus.DRAFT:
      default:
        return 'default';
    }
  };

  const getStatusLabel = (status: CookbookStatus) => {
    return status.charAt(0).toUpperCase() + status.slice(1);
  };

  if (loading && cookbooks.length === 0) {
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
        py: 4,
      }}
    >
      <Container maxWidth='xl'>
        {/* Header */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            mb: 4,
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <MenuBook sx={{ fontSize: 40, color: '#3b82f6' }} />
            <Typography variant='h4' sx={{ fontWeight: 700 }}>
              My Cookbooks
            </Typography>
          </Box>
          <Button
            variant='contained'
            startIcon={<Add />}
            onClick={handleCreateClick}
            sx={{
              backgroundColor: '#3b82f6',
              '&:hover': { backgroundColor: '#2563eb' },
              px: 3,
              py: 1.5,
            }}
          >
            Create Cookbook
          </Button>
        </Box>

        {/* Error Alert */}
        {error && (
          <Alert severity='error' sx={{ mb: 3 }}>
            {error}
          </Alert>
        )}

        {/* Empty State */}
        {cookbooks.length === 0 && !loading && (
          <Box
            sx={{
              textAlign: 'center',
              py: 8,
              px: 2,
            }}
          >
            <MenuBook
              sx={{
                fontSize: 80,
                color: '#3a3a3a',
                mb: 2,
              }}
            />
            <Typography variant='h5' sx={{ mb: 2, color: '#9ca3af' }}>
              No cookbooks yet
            </Typography>
            <Typography sx={{ mb: 4, color: '#6b7280' }}>
              Create your first cookbook to get started
            </Typography>
            <Button
              variant='contained'
              startIcon={<Add />}
              onClick={handleCreateClick}
              sx={{
                backgroundColor: '#3b82f6',
                '&:hover': { backgroundColor: '#2563eb' },
              }}
            >
              Create Your First Cookbook
            </Button>
          </Box>
        )}

        {/* Cookbook Grid */}
        {cookbooks.length > 0 && (
          <Grid container spacing={3}>
            {cookbooks.map((cookbook) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={cookbook._id}>
                <Card
                  sx={{
                    backgroundColor: '#252525',
                    color: '#e0e0e0',
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: '0 8px 24px rgba(0,0,0,0.3)',
                    },
                    position: 'relative',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                  onClick={() => handleCardClick(cookbook)}
                >
                  <CardMedia
                    component='img'
                    height='200'
                    image={
                      cookbook.coverImage ||
                      'https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=400'
                    }
                    alt={cookbook.title}
                    sx={{ objectFit: 'cover' }}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
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
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          display: '-webkit-box',
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: 'vertical',
                          flex: 1,
                        }}
                      >
                        {cookbook.title}
                      </Typography>
                      <IconButton
                        size='small'
                        onClick={(e) => handleMenuOpen(e, cookbook)}
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
                      {cookbook.description || 'No description'}
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
                        label={getStatusLabel(cookbook.status)}
                        color={getStatusColor(cookbook.status)}
                        size='small'
                      />
                      {cookbook.isPublic && (
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
                      {Array.isArray(cookbook.recipes)
                        ? cookbook.recipes.length
                        : 0}{' '}
                      recipe(s)
                    </Typography>
                  </CardContent>
                  <CardActions sx={{ p: 2, pt: 0 }}>
                    <Button
                      size='small'
                      startIcon={<Edit />}
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate(`/dashboard/cookbook/${cookbook._id}/edit`);
                      }}
                      sx={{ color: '#3b82f6' }}
                    >
                      Edit
                    </Button>
                    {cookbook.pdfUrl && (
                      <Button
                        size='small'
                        startIcon={<PictureAsPdf />}
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(cookbook.pdfUrl, '_blank');
                        }}
                        sx={{ color: '#10b981' }}
                      >
                        PDF
                      </Button>
                    )}
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
        <MenuItem onClick={handleView}>
          <Visibility sx={{ mr: 1, fontSize: 20 }} />
          View
        </MenuItem>
        <MenuItem onClick={handleDeleteClick} sx={{ color: '#ef4444' }}>
          <Delete sx={{ mr: 1, fontSize: 20 }} />
          Delete
        </MenuItem>
      </Menu>

      {/* Create Dialog */}
      <Dialog
        open={createDialogOpen}
        onClose={() => setCreateDialogOpen(false)}
        maxWidth='sm'
        fullWidth
        PaperProps={{
          sx: {
            backgroundColor: '#1e1e1e',
            color: '#e0e0e0',
          },
        }}
      >
        <DialogTitle>Create New Cookbook</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            fullWidth
            label='Cookbook Title'
            value={newCookbookTitle}
            onChange={(e) => setNewCookbookTitle(e.target.value)}
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
            value={newCookbookDescription}
            onChange={(e) => setNewCookbookDescription(e.target.value)}
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
            onClick={() => setCreateDialogOpen(false)}
            sx={{ color: '#9ca3af' }}
          >
            Cancel
          </Button>
          <Button
            onClick={handleCreateConfirm}
            variant='contained'
            disabled={!newCookbookTitle.trim()}
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
        <DialogTitle>Delete Cookbook?</DialogTitle>
        <DialogContent>
          <Typography>
            Are you sure you want to delete "{selectedCookbook?.title}"? This
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

export default CookbookList;
