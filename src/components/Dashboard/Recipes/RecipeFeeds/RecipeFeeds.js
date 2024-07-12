import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import styles from './RecipeFeeds.module.css';
import Box from '@mui/material/Box';
import { Paper, Grid } from '@mui/material';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
// import EventList from '../EventList/EventList';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import services from '../../../../util/services';
import AlertDialog from '../../../AlertDialog/AlertDialog';
import { PiTrashThin } from 'react-icons/pi';
import DataGridTable from '../../../DataGridTable/DataGridTable';
import { getDateShort } from '../../../../util/commons';
import CardMedia from '@mui/material/CardMedia';


const columns = [
  { field: 'id', headerName: '', width: 80 },
  {
    field: 'image',
    headerName: '',
    width: 150,
    renderCell: (params) => (
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
    renderCell: (params) => (
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
  { field: 'summary', headerName: 'Summary', width: 150 },
  { field: 'createdOn', headerName: 'Creation Date', width: 150 },
  { field: 'likes', headerName: 'Likes', width: 80 },
  { field: 'ratings', headerName: 'Ratings', width: 100 },
];

const getRows = (data) => {
  const rows = [];

  data.forEach((recipe, i) => {
    const { _id, basicInfo, details, summary, createdAt, likes, ratings } =
      recipe;
    rows.push({
      id: _id,
      image: details.thumbnail,
      recipeName: basicInfo.recipeName,
      summary: summary ?? '-',
      like: likes ?? '-',
      rating: ratings ?? '-',
      createdOn: getDateShort(createdAt),
    });
  });
  console.log(rows);
  return rows;
};

const RecipeFeeds = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userLog.user);
  const [selectedRecipeId, setSelectedRecipeId] = useState();
  const [recipes, setRecipes] = useState([]);
  const [previewEvent, setPreviewEvent] = useState(false);
  const [counts, setCounts] = useState(10);
  const [isDelete, setIsDelete] = useState(false);
  const [paginationModel, setPaginationModel] = React.useState({
    pageSize: 25,
    page: 1,
  });
  const [rows, setRows] = useState([]);
  const [message, setMessage] = useState();

  const fetchRecipes = async (query, userId) => {
    try {
      const allRecipes = await services.getUserRecipes(userId, query);
      console.log('allRecipes:::', allRecipes);
      setRecipes(allRecipes.data.recipes);
      setCounts(allRecipes.data.count);
    } catch (err) {
      console.log(err);
    }
  };

  console.log(paginationModel)
  console.log(`Recipes for page ${paginationModel.page}::`, recipes)

  useEffect(() => {
    setRows(getRows(recipes));
  }, [recipes]);

  useEffect(() => {
    if (user && paginationModel) {
      // Check if both user and paginationModel exist
      const filter = {
        currentPage: paginationModel.page + 1,
        perPage: paginationModel.pageSize,
      };
      user.user._id && fetchRecipes(filter, user.user._id);
    }
  }, [user, paginationModel.page, paginationModel.pageSize]);

  // Add the data to redux for preview
  useEffect(() => {
    if (selectedRecipeId) {
      setPreviewEvent(false);
      console.log({ selectedRecipeId, recipes });
    }
  }, [selectedRecipeId]);

  const handleSectionDelete = async () => {
    console.log(selectedRecipeId);
    try {
    } catch (err) {
      console.log(err);
    }
  };


  return (
      <div className={styles.RecipeFeeds}>
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
                  <Link to='/account/recipe/cook-book'>Cook Book</Link>
                </Typography>
                <Typography gutterBottom sx={{ mx: 3 }}>
                  <Link to='/account/recipe/create-recipe'>Create Recipe</Link>
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                <Box sx={{ display: 'flex' }}>
                  <Typography variant='body1' gutterBottom sx={{ flexGrow: 1 }}>
                    My Recipe Lists
                  </Typography>
                  <Stack direction='row' spacing={2}>
                    <Button
                      variant='text'
                      disabled={selectedRecipeId !== undefined ? false : true}
                      onClick={() => setIsDelete(true)}
                      sx={{ textTransform: 'none' }}
                      color='error'
                    >
                      Delete
                    </Button>
                    <Button
                      variant='text'
                      disabled={selectedRecipeId !== undefined ? false : true}
                      onClick={() =>
                        navigate('/account/recipe/create-recipe', {
                          state: { edit: false, id: selectedRecipeId },
                        })
                      }
                      sx={{ textTransform: 'none' }}
                    >
                      Edit
                    </Button>
                    {/* {previewEvent ? <Preview data={previewEvent} edit={true}/> 
                  : 
                  <Button  variant="text" disabled={true} sx={{textTransform: 'none'}}> Preview </Button>
                } */}
                  </Stack>
                </Box>
                {/* <RecipeList/> */}
                <DataGridTable
                  setSelected={setSelectedRecipeId}
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
      </div>
  );
};

export default RecipeFeeds;
