import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Box from '@mui/material/Box';
import { Paper, Grid, Alert } from '@mui/material';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { PiTrashThin } from 'react-icons/pi';
import { getDateShort } from '../../../../util/commons';
import CardMedia from '@mui/material/CardMedia';
import DataGridTable from '../../../../app/components/DataGridTable';
import AlertDialog from '../../../../app/components/AlertDialog';
import { IRecipe } from '../../../Recipe/types/recipe.types';
import { AppDispatch } from '../../../../app/stores/stores';
import { deleteMyRecipe } from '../../redux/dashboard.asyncThunkService';

const columns = [
  { field: 'id', headerName: '', width: 80 },
  {
    field: 'image',
    headerName: '',
    width: 150,
    renderCell: (params: any) => (
      <Box sx={{ height: 'inherit' }}>
        <CardMedia
          component='img'
          width='100'
          height='auto'
          image={params.value}
          alt='recipe'
        />
      </Box>
    ),
  },
  {
    field: 'recipeName',
    headerName: 'Recipe Name',
    width: 200,
    renderCell: (params: any) => (
      <Box
        style={{
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        }}
      >
        {params.value}
      </Box>
    ),
  },
  { field: 'categories', headerName: 'Categories', width: 150 },
  { field: 'createdOn', headerName: 'Creation Date', width: 150 },
  { field: 'reviews', headerName: 'Reviews', width: 80 },
  { field: 'ratings', headerName: 'Ratings', width: 100 },
];

interface RecipeRow {
  id: string;
  image: string;
  recipeName: string;
  categories: string;
  reviews: number;
  ratings: number | string;
  createdOn: string;
}

const getRows = (data: IRecipe[]): RecipeRow[] => {
  const rows: RecipeRow[] = [];

  data.forEach((recipe) => {
    const { _id, basicInfo, details, createdAt, averageRating, totalReviews } =
      recipe;

    // Format categories as comma-separated string
    const categoriesStr =
      basicInfo.categories?.map((cat) => cat.label).join(', ') || '-';

    rows.push({
      id: _id,
      image: details.thumbnail,
      recipeName: basicInfo.recipeName,
      categories: categoriesStr,
      reviews: totalReviews ?? 0,
      ratings: averageRating ? averageRating.toFixed(1) : '-',
      createdOn: getDateShort(createdAt),
    });
  });
  return rows;
};

interface DashboardRecipeTableProps {
  recipes: IRecipe[];
}

const DashboardRecipeTable: React.FC<DashboardRecipeTableProps> = ({ recipes }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const [selectedRecipeId, setSelectedRecipeId] = useState<string | undefined>();
  const [error, setError] = useState<string | null>(null);
  const [counts, setCounts] = useState<number>(0);
  const [isDelete, setIsDelete] = useState<boolean>(false);
  const [paginationModel, setPaginationModel] = useState({
    pageSize: 25,
    page: 0,
  });
  const [rows, setRows] = useState<RecipeRow[]>([]);
  const [message, setMessage] = useState<string>(
    'Are you sure you want to delete this recipe?'
  );

  // Handle row selection
  const handleSetSelected = (id: string | number | undefined) => {
    setSelectedRecipeId(id?.toString());
  };

  // Update rows when recipes change
  useEffect(() => {
    const recipeRows = getRows(recipes);
    setRows(recipeRows);
    setCounts(recipes.length);
  }, [recipes]);

  const handleSectionDelete = async () => {
    if (!selectedRecipeId) return;

    try {
      setError(null);
      await dispatch(deleteMyRecipe(selectedRecipeId)).unwrap();
      setSelectedRecipeId(undefined);
      setIsDelete(false);
    } catch (err: any) {
      setError(err || 'Failed to delete recipe');
      console.error('Error deleting recipe:', err);
    }
  };

  return (
    <Box>
      <Container maxWidth='lg' sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'flex-end',
              }}
            >
              <Typography gutterBottom sx={{ mx: 3 }}>
                <Link to='cook-book'>Cook Book</Link>
              </Typography>
              <Typography gutterBottom sx={{ mx: 3 }}>
                <Link to='create'>Create Recipe</Link>
              </Typography>
            </Box>
          </Grid>

          {error && (
            <Grid item xs={12}>
              <Alert severity='error' onClose={() => setError(null)}>
                {error}
              </Alert>
            </Grid>
          )}

          <Grid item xs={12}>
            <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
              <Box sx={{ display: 'flex' }}>
                <Typography variant='body1' gutterBottom sx={{ flexGrow: 1 }}>
                  My Recipe Lists
                </Typography>
                <Stack direction='row' spacing={2}>
                  <Button
                    variant='text'
                    disabled={!selectedRecipeId}
                    onClick={() => setIsDelete(true)}
                    sx={{ textTransform: 'none' }}
                    color='error'
                  >
                    Delete
                  </Button>
                  <Button
                    variant='text'
                    disabled={!selectedRecipeId}
                    onClick={() =>
                      navigate('/account/recipe/create-recipe', {
                        state: { edit: true, id: selectedRecipeId },
                      })
                    }
                    sx={{ textTransform: 'none' }}
                  >
                    Edit
                  </Button>
                </Stack>
              </Box>
              <DataGridTable
                setSelected={handleSetSelected}
                data={recipes}
                paginationModel={paginationModel}
                setPaginationModel={setPaginationModel}
                rowCount={counts}
                rows={rows}
                columns={columns}
              />
            </Paper>
          </Grid>
        </Grid>
        <AlertDialog
          open={isDelete}
          setOpen={setIsDelete}
          setConfirmDelete={() => handleSectionDelete()}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Typography
              variant='button'
              display='block'
              gutterBottom
              sx={{
                transform: 'none',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: 50,
                width: 50,
                borderRadius: '50%',
                backgroundColor: '#f8f7fa',
              }}
            >
              <PiTrashThin fontSize={30} />
            </Typography>
            <Typography variant='h6' gutterBottom color='error'>
              Delete
            </Typography>
            <Typography variant='caption' gutterBottom>
              {message}
            </Typography>
          </Box>
        </AlertDialog>
      </Container>
    </Box>
  );
};

export default DashboardRecipeTable;
