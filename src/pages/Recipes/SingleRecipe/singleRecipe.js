import React, { useState, useEffect } from 'react';
import services from '../../../util/services';
import { useDispatch } from 'react-redux';
import { recipesActions } from '../../../store/allRecipesSlice';
import AppAdvert from '../../../components/Home/RightContents/AppAds/appAdvert';
import NewsLetter from '../../../components/Home/RightContents/NewsLetter/newsLetter';
import LatestRecipesList from '../../../components/Home/RightContents/LatestRecipe/latestRecipesList';
import Category from '../../../components/Home/RightContents/Categories/category';
import AboutMe from '../../../components/SingleRecipe/aboutMe';
import FoodsAd from '../../../components/SingleRecipe/foodAd';
import './singleRecipe.css';
import { useParams } from 'react-router-dom';
import NewSingleRecipe from '../../../components/NewSingleRecipe/NewSingleRecipe';
import ReviewList from '../../../components/NewSingleRecipe/Reviews/ReviewList/ReviewList';

export default function SingleMeal() {
  const { recipeId } = useParams();
  const dispatch = useDispatch();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      const result = await services.findById(recipeId);
      setRecipe(result.data);

      // store the recipe in redux state
      dispatch(
        recipesActions.getSingleRecipes({
          data: result.data,
        })
      );
    };

    fetchRecipe();
  }, [recipeId, dispatch]);

  return (
      <section className=''>
        <div className=' container'>
          <div className='card mb-3'>
            <div className='row '>
              {recipe && (
                <>
                  <div className='col-md-8 ' style={{ marginBottom: '5vh' }}>
                    <h1>{recipe.recipeName}</h1>
                    <NewSingleRecipe recipe={recipe} />
                  </div>
                  <div className='col-md-4 '>
                    <AppAdvert />
                    <AboutMe />
                    <FoodsAd />
                    <NewsLetter />
                    <LatestRecipesList />
                    <Category />
                    <ReviewList />
                  </div>
                </>
              )}
              {!recipe && <h1>Loading</h1>}
            </div>
          </div>
        </div>
      </section>
  );
}
