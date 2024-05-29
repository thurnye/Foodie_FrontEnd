import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Container, Box, Grid } from '@mui/material';
import CustomizedButton from '../../../../CustomizedButton/CustomizedButton';
import GenerationRecipeList from '../GenerationRecipeList/GenerationRecipeList';
import CookBookPreview from '../CookBookPreview/CookBookPreview';
import styles from './CookBookGeneration.module.css';
import services from '../../../../../util/services';

const CookBookGeneration = () => {
  const [recipeList, setRecipeList] = useState([]);
  const user = useSelector((state) => state.userLog.user);
  const [perPage, setPerPage] = useState(20);
  const [skip, setSkip] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [recipeIds, setRecipeIds] = useState([]);
  const [pdfUrl, setPdfUrl] = useState(null);
  const [blob, setBlob] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState()

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const allRecipes = await services.getUserRecipes(user.user._id, {
          currentPage,
          perPage,
          skip,
          isScrollLoad: true,
        });
        setRecipeList((prevRecipes) => [...prevRecipes, ...allRecipes.data.recipes]);
      } catch (e) {
        console.log(e);
      }
    };

    user?.user?._id && fetchTodos();
  }, [currentPage, perPage, user]);

  const handleScroll = (e) => {
    const { offsetHeight, scrollTop, scrollHeight } = e.target;

    if (offsetHeight + scrollTop === scrollHeight) {
      setCurrentPage((prevPage) => prevPage + 1);
      setSkip(recipeList.length);
    }
  };

  const handleGenerateCookBook = async () => {
    try {
      if(recipeIds.length !== 0){
        setPdfUrl(null);
        setLoading(!loading);
        setError(null)
        const response = await services.generateCookBookPDF(user.user._id, {
          recipeIds,
          name: 'Testing Recipe Book Generation',
          coverPage: "https://t4.ftcdn.net/jpg/03/96/95/05/360_F_396950567_PiXdbB4IUgco6CwjLhzekVgUSumsOdne.jpg",
          description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,."
        });
  
        if (response.status === 200) {
          const pdfBlob = response.data;
          setBlob(pdfBlob)
          const pdfUrl = URL.createObjectURL(pdfBlob);
          setPdfUrl(pdfUrl);
          setLoading(!loading)
          setError(null)
        } else {
          setError('Failed to fetch PDF');
          setLoading(!loading)
        }

      }else{
        setError('Recipe needed for cook book generation!.');
      }
    } catch (error) {
      setLoading(!loading)
      setError('Something Went Wrong!.')
      console.log(error);
    }
  };


  const downloadPDF = () => {
     // Create a temporary URL for the blob
     const url = window.URL.createObjectURL(blob);

     // Create a link element to trigger the download
     const link = document.createElement('a');
     link.href = url;
     link.setAttribute('download', 'recipe-book.pdf');
     document.body.appendChild(link);

     // Trigger the download
     link.click();

     // Cleanup
     document.body.removeChild(link);
     window.URL.revokeObjectURL(url);
  }

  return (
    <div className={styles.CookBookGeneration}>
      <Container maxWidth='lg' sx={{ mt: 4, mb: 4 }}>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
          <CustomizedButton
            variant='contained'
            label={'Generate'}
            backgroundColor={'#fee86d'}
            id='demo-customized-button'
            disableElevation
            onClick={handleGenerateCookBook}
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
          <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            <Grid item xs={4} sm={8} md={4}>
              <Box sx={{ display: { xs: 'block', md: 'none' } }}></Box>
              <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                <Box
                  component={'div'}
                  sx={{
                    height: { xs: 'initial', lg: '70vh' },
                    maxHeight: 'calc(100vh - 64px)',
                    overflowY: 'auto',
                  }}
                  onScroll={handleScroll}
                >
                  <GenerationRecipeList listItems={recipeList} setRecipeIds={setRecipeIds} />
                </Box>
              </Box>
            </Grid>
            <Grid item xs={4} sm={8} md={8}>
              <CookBookPreview pdfUrl={pdfUrl} handleDownload={downloadPDF} loading={loading} error={error}/>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default CookBookGeneration;
