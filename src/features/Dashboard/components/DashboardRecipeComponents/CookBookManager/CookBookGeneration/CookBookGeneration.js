import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Container, Box, Grid, Typography } from '@mui/material';
import CustomizedButton from '../../../../CustomizedButton/CustomizedButton';
import GenerationRecipeList from '../GenerationRecipeList/GenerationRecipeList';
import CookBookPreview from '../CookBookPreview/CookBookPreview';
import styles from './CookBookGeneration.module.css';
import services from '../../../../../util/services';
import Search from '../../../../Search/Search';
import CardMedia from '@mui/material/CardMedia';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import IconButton from '@mui/material/IconButton';
import ModalDialog from '../../../../ModalDialog/ModalDialog';
import DialogActions from '@mui/material/DialogActions';
import { getRandomInt } from '../../../../../util/commons';

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
  const [open, setOpen] = useState(false);
  const [error, setError] = useState();
  const [windowWidthSize, setWindowWidthSize] = useState(window.innerWidth);
  const withThreshold = 900;
  const [isMobile, setIsMobile] = useState(false);
  console.log();
  const [options, setOptions] = useState([])


  const fetchAutoComplete = async () => {
    try {
      // setLoading(true)
      const res = await services.getAutoComplete({
        section: ['recipe'],
      });
      console.log(res.data);
      setOptions(res.data)
      
    } catch (error) {
      console.log(error)
    }
  }


  // Update window size on resize
  useEffect(() => {
    const handleResize = () => {
      setWindowWidthSize(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (windowWidthSize < withThreshold) {
      setIsMobile(true);
    }else{
      setIsMobile(false);
      setOpen(false)
    }
  },[windowWidthSize])

  console.log(windowWidthSize, open, isMobile)


  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const allRecipes = await services.getUserRecipes(user.user._id, {
          currentPage,
          perPage,
          skip,
          isScrollLoad: true,
        });
        setRecipeList((prevRecipes) => [
          ...prevRecipes,
          ...allRecipes.data.recipes,
        ]);
      } catch (e) {
        console.log(e);
      }
    };
    fetchAutoComplete()

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
      if (recipeIds.length !== 0) {
        setPdfUrl(null);
        setLoading(!loading);
        setError(null);
        const response = await services.generateCookBookPDF(user.user._id, {
          recipeIds,
          name: 'Testing Recipe Book Generation',
          coverPage:
            'https://t4.ftcdn.net/jpg/03/96/95/05/360_F_396950567_PiXdbB4IUgco6CwjLhzekVgUSumsOdne.jpg',
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,.",
        });

        if (response.status === 200) {
          const pdfBlob = response.data;
          setBlob(pdfBlob);
          const pdfUrl = URL.createObjectURL(pdfBlob);
          setPdfUrl(pdfUrl);
          setLoading(!loading);
          setError(null);
        } else {
          setError('Failed to fetch PDF');
          setLoading(!loading);
        }
      } else {
        setError('Recipe needed for cook book generation!.');
      }
    } catch (error) {
      setLoading(!loading);
      setError('Something Went Wrong!.');
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
  };

  const handleSelect = (id) => {
    const isSelected = recipeIds.includes(id);

    if (isSelected) {
      const updatedImages = recipeIds.filter(
        (selectedImage) => selectedImage !== id
      );
      setRecipeIds(updatedImages);
    } else {
      setRecipeIds([...recipeIds, id]);
    }
  };

  return (
    <div className={styles.CookBookGeneration}>
      <Container maxWidth='lg' sx={{ mt: 4, mb: 4 }}>
        <Box sx={{ mb: 2 }}>
          <Box sx={{ flexGrow: 1 }}>
            <Search data={options} />
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 5 }}>
            <CustomizedButton
              variant='contained'
              label={'Generate'}
              backgroundColor={'#fee86d'}
              id='demo-customized-button'
              disableElevation
              onClick={() => {
                handleGenerateCookBook();
                isMobile && setOpen(true)
              }}
              disabled={recipeIds.length > 0 ? false : true}
              sx={{
                fontSize: 15,
                borderRadius: 1,
                height: 30,
                fontWeight: 700,
                textTransform: 'none',
                marginRight: { xs: 4, md: 'initial' },
              }}
            />
            <CustomizedButton
              variant='contained'
              label={'Preview Cook Book'}
              backgroundColor={'#fee86d'}
              id='demo-customized-button'
              disableElevation
              onClick={() => setOpen(!open)}
              sx={{
                fontSize: 15,
                borderRadius: 1,
                height: 30,
                fontWeight: 700,
                textTransform: 'none',
                display: isMobile ? 'block' : 'none',
              }}
            />
          </Box>
        </Box>
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={{ xs: 2, md: 2 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            <Grid item xs={4} sm={8} md={4}>
              {/* small Screen */}
              <Box sx={{ display: { xs: 'block', md: 'none' } }}>
                <Box
                  component={'div'}
                  sx={{
                    height: { xs: 'initial', lg: '70vh' },
                    maxHeight: 'calc(100vh - 64px)',
                    overflowY: 'auto',
                  }}
                  onScroll={handleScroll}
                >
                  <Grid
                    container
                    spacing={{ xs: 2, md: 3 }}
                    columns={{ xs: 4, sm: 12, md: 12 }}
                  >
                    {recipeList.map((recipe, index) => (
                      <Grid item xs={2} sm={4} md={4} key={getRandomInt()}>
                        <Box sx={{ flexGrow: 1 }}>
                          <Box
                            sx={{ position: 'relative' }}
                            onClick={() => handleSelect(recipe._id)}
                          >
                            <CardMedia
                              component='img'
                              height='150'
                              image={recipe.details.thumbnail}
                              alt={recipe.basicInfo.recipeName}
                            />
                            <Typography
                              variant='caption'
                              sx={{
                                color: recipeIds.includes(recipe._id)
                                  ? '#038703'
                                  : 'initial',
                              }}
                            >
                              {recipe.basicInfo.recipeName}
                            </Typography>
                            <Box
                              sx={{
                                position: 'absolute',
                                top: 0,
                                right: 0,
                              }}
                            >
                              <IconButton aria-label='icon'>
                                {recipeIds.includes(recipe._id) ? (
                                  <CheckCircleOutlineIcon
                                    sx={{ color: '#038703' }}
                                  />
                                ) : (
                                  <RadioButtonUncheckedIcon />
                                )}
                              </IconButton>
                            </Box>
                          </Box>
                        </Box>
                      </Grid>
                    ))}
                  </Grid>
                </Box>
                {isMobile && open && (
                  <ModalDialog setOpen={setOpen} open={open} fullScreen={true}>
                    <Box>
                      <CookBookPreview
                        pdfUrl={pdfUrl}
                        handleDownload={downloadPDF}
                        loading={loading}
                        error={error}
                      />
                    </Box>
                    <DialogActions>
                      <CustomizedButton
                        variant='contained'
                        label={'Close Preview'}
                        backgroundColor={'#fee86d'}
                        id='demo-customized-button'
                        disableElevation
                        onClick={() => setOpen(!open)}
                        sx={{
                          fontSize: 15,
                          borderRadius: 1,
                          height: 30,
                          fontWeight: 700,
                          textTransform: 'none',
                        }}
                      />
                    </DialogActions>
                  </ModalDialog>
                )}
              </Box>

              {/* large Screen */}
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
                  <GenerationRecipeList
                    listItems={recipeList}
                    setRecipeIds={setRecipeIds}
                    recipeIds={recipeIds}
                  />
                </Box>
              </Box>
            </Grid>
            <Grid
              item
              xs={4}
              sm={8}
              md={8}
              sx={{ display: { xs: 'none', md: 'block' } }}
            >
              <CookBookPreview
                pdfUrl={pdfUrl}
                handleDownload={downloadPDF}
                loading={loading}
                error={error}
              />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default CookBookGeneration;
