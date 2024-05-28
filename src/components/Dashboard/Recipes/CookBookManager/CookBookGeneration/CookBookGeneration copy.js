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
import PDFGeneration from '../PDFGeneration/PDFGeneration'
import DynamicPDF from '../PDFGeneration/dummy';

const CookBookGeneration = () => {
  const [recipeList, setRecipeList] = useState([]);
  const user = useSelector((state) => state.userLog.user);
  const [perPage, setPerPage] = useState(20);
  const [skip, setSkip] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [recipeIds, setRecipeIds] = useState([]);
  const [pdf, setPdf] = useState(null);

  const [pdfData, setPdfData] = useState([])

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


  // From Server
  const handleGenerateCookBook = async () => {
    try {
      const result = await services.generateCookBookPDF(user.user._id, {
        recipeIds,
        name: 'Testing Recipe Book Generation',
        coverPage: recipeList[0]?.details?.thumbnail,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,."
      });
      console.log(result.data);

      // Check if result.data is already a Blob or ArrayBuffer
      const pdfBlob =
        result.data instanceof Blob
          ? result.data
          : new Blob([result.data], { type: 'application/pdf' });

      // Create object URL
      const objectUrl = window.URL.createObjectURL(pdfBlob);
      setPdf(objectUrl);
    } catch (error) {
      console.log(error);
    }
  };


  // const handleGenerateCookBook = async () => {
  //   try {
  //     const result = await services.generateCookBook(user.user._id, {
  //       recipeIds,
  //       name: 'Testing Recipe Book Generation',
  //       coverPage: recipeList[0]?.details?.thumbnail,
  //       description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,."
  //     });
  //     console.log(result.data);
  //     setPdfData(result.data)

  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

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
              {/* <PDFGeneration pdfData={pdfData}/> */}
              <DynamicPDF setPdfDataURL={setPdfData}/>

              {/* Front Page */}
              <div>
                <div
                  style={{ width: '100%', marginTop: '30px', margin: 'auto' }}
                >
                  <div class=' text-bg-dark'
                   style={{
                    // backgroundImage: `url(${recipeList[0]?.details?.thumbnail})`,
                    position:'relative'
                   }}
                  >
                    <img
                      src={recipeList[0]?.details?.thumbnail}
                      class='card-img'
                      alt='...'
                      style={{
                    //     backgroundColor: '#cccccc', 
                    // height: '500px',
                    // backgroundPosition: 'center', 
                    // backgroundRepeat: 'no-repeat', 
                    // backgroundSize: 'cover', 
                      }}
                    />
                    <div class='' style={{
                      // height: 'inherit',
                      padding: '20px',
                      border: '2px dotted red',
                      position: 'absolute',
                      top: 0,
                      width: '100%',
                      height: '100%'
                    }}>
                      <div
                        class='frontPageDescription'
                        style={{
                          border: ' 1px solid white',
                          height: '98%',
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'center',
                          alignItems: 'center',
                          color: 'white'
                        }}
                      >
                        <h2 class='' style={{color: 'white'}}>Title of the Book</h2>
                        <p
                          class='  frontPageIntro'
                          style={{
                            width: '500px',
                            textAlign: 'center',
                            marginTop: '24px'
                          }}
                        >
                          This is a wider card with supporting text below as a
                          natural lead-in to additional content. This content is
                          a little bit longer.
                        </p>
                      </div>
                      <div>
                        <p
                          style={{ textAlign: 'end', fontWeight: 'bolder' }}
                          class='frontPageAuthor'
                        >
                          By: John Doe
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* About Me */}
              <div class='card mb-3 aboutMe' style={{ marginTop: '30px' }}>
                <h4 class='card-title'>About me</h4>
                <div class='row g-0'>
                  <div class='col-md-6'>
                    <div class='card mb-3 mt-3'>
                      <img
                        src={recipeList[0]?.author?.avatar}
                        class='card-img-top'
                        alt='...'
                      />
                    </div>
                  </div>
                  <div class='col-md-6'>
                    <div
                      class='card-body authorTitle d-flex'
                      style={{
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '100%',
                      }}
                    >
                      <h5 class='card-title'>
                        {recipeList[0]?.author?.firstName} &nbsp;
                        {recipeList[0]?.author?.lastName}
                      </h5>
                      <p class='card-text'>
                        <small class='text-body-secondary '>
                          {recipeList[0]?.author?.slogan}
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
                <div class=' mb-5'>
                  {recipeList[0]?.author?.aboutMe?.map((el) => {
                    return (
                      <div
                        class='aboutMeContainer'
                        style={{ width: '100%', margin: '16px initial' }}
                      >
                        {el.type === 'text' && <div>{el.value}</div>}
                        {el.type === 'image' && (
                          <div class='container text-center mt-5 mb-5'>
                            <div class='row'>
                              {el?.value?.map(() => (
                                <div class='col-sm-6 col-md-4 m-auto'>
                                  <img
                                    src={recipeList[0]?.details?.thumbnail}
                                    class='img-fluid rounded-start'
                                    alt='...'
                                  />
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Recipe Page */}
              <div class='card mb-3'>
                <div class='row g-0'>
                  <div class='col-md-5'>
                    <div class='card mb-3 mt-3'>
                      <img
                        src={recipeList[0]?.details?.thumbnail}
                        class='card-img-top'
                        alt='...'
                      />
                    </div>
                  </div>
                  <div class='col-md-1'></div>
                  <div class='col-md-6'>
                    <div class='card-body'>
                      <h2 class='card-title text-center mb-2'>
                        {recipeList[0]?.basicInfo?.recipeName}
                      </h2>
                    </div>
                    <div
                      class='recipeInfo'
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'flex-start',
                        alignItems: 'flex-start',
                      }}
                    >
                      <div
                        class='card-text d-flex recipe-info-extras'
                        style={{ marginBottom: '-15px' }}
                      >
                        <p
                          class='text-body-secondary info-items'
                          style={{ width: '70px' }}
                        >
                          time:
                        </p>
                        <p class='text-body-secondary'>
                          {recipeList[0]?.basicInfo?.duration?.value}
                        </p>
                      </div>
                      <div
                        class='card-text d-flex recipe-info-extras'
                        style={{ marginBottom: '-15px' }}
                      >
                        <p
                          class='text-body-secondary info-items'
                          style={{ width: '70px' }}
                        >
                          level:
                        </p>
                        <p class='text-body-secondary'>
                          {recipeList[0]?.basicInfo?.level?.value}
                        </p>
                      </div>
                      <div
                        class='card-text d-flex recipe-info-extras'
                        style={{ marginBottom: '-15px' }}
                      >
                        <p
                          class='text-body-secondary info-items'
                          style={{ width: '70px' }}
                        >
                          serves:
                        </p>
                        <p class='text-body-secondary'>
                          {recipeList[0]?.basicInfo?.serving?.value}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class='aboutRecipe' style={{ marginTop: '30px' }}>
                  {console.log(recipeList[0]?.details?.about)}
                  {recipeList[0]?.details?.about?.map((el) => {
                    return (
                      <div
                        class='aboutRecipeContainer'
                        style={{ width: '100%', margin: '16px initial' }}
                      >
                        {el.type === 'text' && <div>{el.value}</div>}
                        {el.type === 'image' && (
                          <div class='container text-center mt-5 mb-5'>
                            <div class='row'>
                              {el?.value?.map(() => (
                                <div class='col-sm-6 col-md-4 m-auto'>
                                  <img
                                    src={recipeList[0]?.details?.thumbnail}
                                    class='img-fluid rounded-start'
                                    alt='...'
                                  />
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                  {/* Ingredients */}
                  <div class='ingredients mt-5 mb-5'>
                    <h4>Ingredients</h4>
                    <div
                      class='container text-center pt-4 pb-4 ingredientContainer'
                      style={{
                        background: '#e7e7e7',
                      }}
                    >
                      <div class='row'>
                        <div class='col'>
                          <h6>Main Ingredients</h6>
                          <ul class='list-group list-group-flush'>
                            {recipeList[0]?.directions?.ingredients?.map(
                              (el) =>
                                el.type === 'main' && (
                                  <li class='list-group-item text-start'>
                                    {el.name}
                                  </li>
                                )
                            )}
                          </ul>
                        </div>
                        <div class='col'>
                          <h6>Dressing</h6>
                          <ul class='list-group list-group-flush'>
                            {recipeList[0]?.directions?.ingredients?.map(
                              (el) =>
                                el.type === 'dressing' && (
                                  <li class='list-group-item text-start'>
                                    {el.name}
                                  </li>
                                )
                            )}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Directions */}
                  <div>
                    <h4 class='mb-2'>Directions</h4>
                    <div>
                      {recipeList[0]?.directions?.methods?.map(
                        (methods, index) => {
                          const { step } = methods;
                          return (
                            <div>
                              {step?.map((el) => (
                                <React.Fragment>
                                  {el.type === 'title' && (
                                    <div>
                                      <h6>{`Step ${index + 1}.: ${
                                        el.value
                                      }`}</h6>
                                    </div>
                                  )}
                                  <div>
                                    {el.type === 'text' && (
                                      <div>{el.value}</div>
                                    )}
                                    {el.type === 'image' && (
                                      <div class='container text-center mt-5 mb-5'>
                                        <div class='row'>
                                          {el?.value?.map(() => (
                                            <div class='col-sm-6 col-md-4 m-auto'>
                                              <img
                                                src={
                                                  recipeList[0]?.details
                                                    ?.thumbnail
                                                }
                                                class='img-fluid rounded-start'
                                                alt='...'
                                              />
                                            </div>
                                          ))}
                                        </div>
                                      </div>
                                    )}
                                  </div>
                                </React.Fragment>
                              ))}
                            </div>
                          );
                        }
                      )}
                    </div>
                  </div>

                  {/* Nutrition Facts */}
                  <div class='mt-5 mb-5'>
                    <div>
                      <div
                        class='nutrition'
                        style={{
                          display: 'flex',
                          justifyContent: 'center',
                          flexDirection: 'column',
                        }}
                      >
                        <div
                          class='nutritionHeader'
                          style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: '80%',
                            margin: 'auto',
                            padding: '32px',
                            background: '#fee86d',
                          }}
                        >
                          <h6 class='text-center'>Nutritional Information</h6>
                        </div>
                        <div
                          class='nutritionContainer'
                          style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            background: '#f8f6e6',
                            width: '90%',
                            margin: 'auto',
                          }}
                        >
                          {recipeList[0]?.nutritionalFacts?.map((el, index) => {
                            return (
                              <div
                                class='nutritionList'
                                style={{
                                  flexGrow: 1,
                                  display: 'flex',
                                  flexDirection: 'column',
                                  justifyContent: 'center',
                                  alignItems: 'center',
                                  flexWrap: 'wrap',
                                  marginRight: '15px',
                                }}
                              >
                                <p>
                                  {el.amount}
                                  {el.unit}
                                </p>
                                <p
                                  style={{ marginTop: '-15px' }}
                                  class='nutrientName'
                                >
                                  {el.name}
                                </p>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default CookBookGeneration;
