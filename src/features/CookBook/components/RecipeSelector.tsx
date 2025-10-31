import React, { useEffect } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Box,
  TextField,
  Checkbox,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Grid,
  CircularProgress,
} from '@mui/material';
import { Search } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../app/stores/stores';
import { fetchMyRecipes } from '../../Dashboard/redux/dashboard.asyncThunkService';
import { toggleRecipeSelection } from '../redux/cookbookSlice';
import { IRecipe } from '../../Recipe/types/recipe.types';

interface RecipeSelectorProps {
  open: boolean;
  onClose: () => void;
  onConfirm: (selectedIds: string[]) => void;
}

const RecipeSelector: React.FC<RecipeSelectorProps> = ({ open, onClose, onConfirm }) => {
  const dispatch = useDispatch<AppDispatch>();
  const [searchQuery, setSearchQuery] = React.useState('');

  const { myRecipes, recipesLoading } = useSelector((state: RootState) => state.dashboard);
  const { selectedRecipes } = useSelector((state: RootState) => state.cookbook);

  useEffect(() => {
    if (open) {
      dispatch(fetchMyRecipes());
    }
  }, [open, dispatch]);

  const filteredRecipes = myRecipes.filter((recipe: IRecipe) =>
    recipe.basicInfo.recipeName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleToggle = (recipeId: string) => {
    dispatch(toggleRecipeSelection(recipeId));
  };

  const handleConfirm = () => {
    onConfirm(selectedRecipes);
    onClose();
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      fullWidth
      PaperProps={{
        sx: {
          backgroundColor: '#1e1e1e',
          color: '#e0e0e0',
          maxHeight: '80vh',
        },
      }}
    >
      <DialogTitle sx={{ borderBottom: '1px solid #2d2d2d' }}>
        Select Recipes for Cookbook
      </DialogTitle>

      <DialogContent sx={{ p: 3 }}>
        {/* Search */}
        <TextField
          fullWidth
          placeholder="Search recipes..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          InputProps={{
            startAdornment: <Search sx={{ mr: 1, color: '#6b7280' }} />,
          }}
          sx={{
            mb: 3,
            '& .MuiOutlinedInput-root': {
              backgroundColor: '#252525',
              color: '#e0e0e0',
              '& fieldset': { borderColor: '#3a3a3a' },
              '&:hover fieldset': { borderColor: '#4a4a4a' },
              '&.Mui-focused fieldset': { borderColor: '#3b82f6' },
            },
          }}
        />

        {/* Recipe Grid */}
        {recipesLoading ? (
          <Box sx={{ display: 'flex', justifyContent: 'center', py: 4 }}>
            <CircularProgress />
          </Box>
        ) : (
          <Grid container spacing={2}>
            {filteredRecipes.map((recipe: IRecipe) => {
              const isSelected = selectedRecipes.includes(recipe._id);
              return (
                <Grid item xs={12} sm={6} md={4} key={recipe._id}>
                  <Card
                    sx={{
                      cursor: 'pointer',
                      backgroundColor: '#252525',
                      border: isSelected ? '2px solid #3b82f6' : '2px solid transparent',
                      transition: 'all 0.2s',
                      '&:hover': {
                        borderColor: '#3b82f6',
                        transform: 'translateY(-2px)',
                      },
                    }}
                    onClick={() => handleToggle(recipe._id)}
                  >
                    <Box sx={{ position: 'relative' }}>
                      <CardMedia
                        component="img"
                        height="140"
                        image={recipe.details.thumbnail}
                        alt={recipe.basicInfo.recipeName}
                      />
                      <Checkbox
                        checked={isSelected}
                        sx={{
                          position: 'absolute',
                          top: 8,
                          right: 8,
                          backgroundColor: 'rgba(0,0,0,0.5)',
                          '&:hover': { backgroundColor: 'rgba(0,0,0,0.7)' },
                          color: '#e0e0e0',
                          '&.Mui-checked': { color: '#3b82f6' },
                        }}
                      />
                    </Box>
                    <CardContent sx={{ p: 2 }}>
                      <Typography
                        variant="body2"
                        sx={{
                          fontWeight: 600,
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        {recipe.basicInfo.recipeName}
                      </Typography>
                      <Typography
                        variant="caption"
                        sx={{ color: '#9ca3af', display: 'block', mt: 0.5 }}
                      >
                        {recipe.basicInfo.duration?.label || 'N/A'} •{' '}
                        {recipe.basicInfo.level?.label || 'N/A'}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        )}

        {!recipesLoading && filteredRecipes.length === 0 && (
          <Box sx={{ textAlign: 'center', py: 4, color: '#6b7280' }}>
            <Typography>No recipes found</Typography>
          </Box>
        )}
      </DialogContent>

      <DialogActions sx={{ p: 3, borderTop: '1px solid #2d2d2d' }}>
        <Typography variant="body2" sx={{ mr: 'auto', color: '#9ca3af' }}>
          {selectedRecipes.length} recipe(s) selected
        </Typography>
        <Button onClick={onClose} sx={{ color: '#9ca3af' }}>
          Cancel
        </Button>
        <Button
          onClick={handleConfirm}
          variant="contained"
          disabled={selectedRecipes.length === 0}
          sx={{
            backgroundColor: '#3b82f6',
            '&:hover': { backgroundColor: '#2563eb' },
          }}
        >
          Add to Cookbook
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default RecipeSelector;
