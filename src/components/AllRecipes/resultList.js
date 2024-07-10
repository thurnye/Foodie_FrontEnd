import React, { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { ThumbsUp, Clock } from 'react-feather';
import services from '../../util/services';
import { recipesActions } from '../../store/allRecipesSlice';
import './allRecipe.css';
import './resultList.css';
import { Box } from '@mui/material';
import { getRandomInt } from '../../util/commons';

export default function ResultList(props) {
  let location = useLocation();
  const filters = props.filters;
  const category = location.state?.category;
  const dispatch = useDispatch();
  const [recipes, setRecipes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [skip, setSkip] = useState(0);
  const [count, setCount] = useState(10); //default
  const [loading, setLoading] = useState(true);
  const [allRecipes, setAllRecipes] = useState();

  const isFetching = useRef(false);

  useEffect(() => {
    setCurrentPage(1);
    setSkip(0);
  }, [filters]);

  const fetchFilteredRecipes = async (query) => {
    if (isFetching.current) return;
    isFetching.current = true;

    try {
      setLoading(true);
      if(recipes.length !== count){
          const result = await services.findQuery(query);
          setAllRecipes(result);
          setRecipes((prevRecipes) => [...prevRecipes, ...result.data.recipes]);
          setCount(result.data.count)
      }
      setLoading(false);
    } catch (err) {
      console.log(err);
    } finally {
      isFetching.current = false;
    }
  };

  useEffect(() => {
    const allCategories = filters?.categories ? filters.categories : [];
    if (category) {
      allCategories.push(category);
    }
    let uniqueCategory = [...new Set(allCategories)];
    const filter = { ...filters, categories: uniqueCategory };
    // fetchFilteredRecipes({ filter, currentPage, skip });
  }, [currentPage, category, filters]);

  useEffect(() => {
    if (allRecipes) {
      dispatch(
        recipesActions.getAllRecipes({
          data: allRecipes.data,
        })
      );
    }
  }, [allRecipes, dispatch]);

  const handleScroll = (e) => {
    const { offsetHeight, scrollTop, scrollHeight } = e.target;
    // console.log(`OffsetHeight: ${offsetHeight}, ScrollTop: ${scrollTop}, ScrollHeight: ${scrollHeight} total: ${offsetHeight + scrollTop}`);
    
    if (offsetHeight + scrollTop === scrollHeight) {
        // console.log(`HERE:::: OffsetHeight: ${offsetHeight}, ScrollTop: ${scrollTop}, ScrollHeight: ${scrollHeight} total: ${offsetHeight + scrollTop}`);
        console.log(count, currentPage)
       setCurrentPage((prevPage) => prevPage + 1);
      setSkip(recipes.length);
    }
  };

  return (
    <Box
    component={'div'}
      sx={{
        height: '95vh',
        maxHeight: 'calc(100vh - 2vh)',
        overflow: 'auto',
        px: 2,
      }}
      onScroll={handleScroll}
    >
        <div className='row row-cols-2 row-cols-sm-2 row-cols-md-3 g-4'>
          {recipes?.map((el) => {
            return (
              <div className='col result-item' key={getRandomInt()}>
                <div className='card'>
                  <img
                    src={el.details.thumbnail}
                    className='card-img-top allRecipeImg'
                    alt='recipeResult'
                  />
                  <div className='card-body result-body'>
                    <p>
                      <span className='duration'>
                        <small>
                          <strong>
                            <Clock strokeWidth='1' size='15' />{' '}
                            {el.basicInfo.duration.value}
                          </strong>
                        </small>
                      </span>
                      <span className='level'>
                        <small>
                          <strong>
                            <ThumbsUp strokeWidth='1' size='15' />{' '}
                            {el.basicInfo.level.value}
                          </strong>
                        </small>
                      </span>
                    </p>
                    <h5 className='card-title result-title'>
                      <Link
                        to={{
                          pathname: `/recipe`,
                          search: `?q=${el.basicInfo.recipeName
                            .toLocaleLowerCase()
                            .replaceAll(' ', '-')}`,
                        }}
                        state={{ recipeId: el._id }}
                      >
                        {el.basicInfo.recipeName}
                      </Link>
                    </h5>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        {loading && (
          <div className='text-center resultSpinnerContainer'>
            <div className='spinner-border text-secondary' role='status'></div>
          </div>
        )}
      <section className='resultList'>
      </section>
    </Box>
  );
}
