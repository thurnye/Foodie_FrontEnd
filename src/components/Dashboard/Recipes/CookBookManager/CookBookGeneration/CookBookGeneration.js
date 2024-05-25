import React from 'react';
import styles from './CookBookGeneration.module.css';
import { Container } from '@mui/material';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import GenerationRecipeList from '../GenerationRecipeList/GenerationRecipeList';
import { useState } from 'react';
import { useEffect } from 'react';
import services from '../../../../../util/services';
import { useSelector } from 'react-redux';
import CustomizedButton from '../../../../CustomizedButton/CustomizedButton';
import CookBookPreview from '../CookBookPreview/CookBookPreview';

const CookBookGeneration = () => {
  const [recipeList, setRecipeList] = useState([]);
  const user = useSelector((state) => state.userLog.user);
  const [perPage, setPerPage] = useState(20);
  const [skip, setSkip] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [recipeIds, setRecipeIds] = useState([]);
  const [pdf, setPdf] = useState(null);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const allRecipes = await services.getUserRecipes(user.user._id, {
          currentPage,
          perPage,
          skip,
          isScrollLoad: true,
        });
        console.log(allRecipes.data.recipes);
        setRecipeList([...recipeList, ...allRecipes.data.recipes]);
      } catch (e) {
        console.log(e);
      }
    };

    user?.user?._id && fetchTodos();
  }, [currentPage, perPage, user]);

  const handleScroll = (e) => {
    const { offsetHeight, scrollTop, scrollHeight } = e.target;

    if (offsetHeight + scrollTop === scrollHeight) {
      setCurrentPage(currentPage + 1);
      setSkip(recipeList.length);
    }
  };

  const handleGenerateCookBook = async () => {
    try {
      const result = await services.generateCookBook(user.user._id, {
        recipeIds,
        name: '',
      });
      console.log(result.data);
  
      // Check if result.data is already a Blob or ArrayBuffer
      const pdfBlob = result.data instanceof Blob
        ? result.data
        : new Blob([result.data], { type: 'application/pdf' });
  
      // Create object URL
      const objectUrl = window.URL.createObjectURL(pdfBlob);
      setPdf(objectUrl);
    } catch (error) {
      console.log(error);
    }
  };
  
  

  return (
    <div className={styles.CookBookGeneration}>
      <Container maxWidth='lg' sx={{ mt: 4, mb: 4 }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            mb: 2,
          }}
        >
          <CustomizedButton
            variant='contained'
            label={'Generate'}
            backgroundColor={'#fee86d'}
            id='demo-customized-button'
            disableElevation
            onClick={() => handleGenerateCookBook()}
            sx={{
              fontSize: 15,
              borderRadius: 1,
              height: 30,
              fontWeight: 700,
              textTransform: 'none',
            }}
          />
        </Box>
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={{ xs: 2, md: 2 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            <Grid item xs={4} sm={8} md={4}>
              {/* small screen */}
              <Box sx={{ display: { xs: 'block', md: 'none' } }}></Box>
              {/* large screen */}
              <Box
                sx={{
                  display: { xs: 'none', md: 'block' },
                  // height: { xs: 'initial', lg: '70vh' },
                  // overflow: 'auto',
                }}
              >
                <Box
                  component={'div'}
                  sx={{
                    height: { xs: 'initial', lg: '70vh' },
                    maxHeight: 'calc(100vh - 64px)',
                    overflowY: 'auto',
                  }}
                  onScroll={handleScroll}
                >
                  <GenerationRecipeList
                    listItems={recipeList}
                    setRecipeIds={setRecipeIds}
                  />
                </Box>
              </Box>
            </Grid>
            <Grid item xs={4} sm={8} md={8}>
              <CookBookPreview pdf={pdf} />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default CookBookGeneration;
