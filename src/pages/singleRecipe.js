import React, {useState, useEffect} from 'react';
import services from '../util/services'
import {useDispatch} from 'react-redux'
import {recipesActions} from '../store/allRecipesSlice'
import AppAdvert from '../components/Home/recentRecipe/appAdvert'
import NewsLetter from '../components/Home/recentRecipe/newsLetter'
import LatestRecipesList from '../components/Home/recentRecipe/latestRecipesList'
import Category from '../components/Home/recentRecipe/category'
import AboutMe from '../components/SingleRecipe/aboutMe'
import FoodsAd from '../components/SingleRecipe/foodAd'
import Share from '../components/SingleRecipe/share'
import CoverImg from '../components/SingleRecipe/coverImage'
import Headings from '../components/UI/heading'
import Ingredients from '../components/SingleRecipe/ingredients'
import NutrientsInfo from '../components/SingleRecipe/nutrientsInfo'
import Directions from '../components/SingleRecipe/directions'
import Notes from '../components/SingleRecipe/notes';

import '../public/css/singleRecipe.css'
import FavBkmkPrt from '../components/SingleRecipe/favBkmkPrt';
import Tags from '../components/SingleRecipe/tags';
import BookAd from '../components/SingleRecipe/bookAd';
import Recommendations from '../components/SingleRecipe/recommendations';
import ReviewForm from '../components/SingleRecipe/reviewForm';
import Reviews from '../components/SingleRecipe/reviewList';

import { useLocation } from 'react-router-dom';


export default function SingleMeal() {
    const location = useLocation();
    const recipeId = location.state?.recipeId
    const dispatch = useDispatch()
    const [recipe, setRecipe] = useState(null)
    
    useEffect(() => {
        const fetchRecipe = async () => {
          const result = await services.findById(recipeId)
        setRecipe(result.data)

        // store the recipe in redux state
        dispatch(recipesActions.getSingleRecipes({
            data: result.data
        })
        )
        }
        

        fetchRecipe()
      }, 
    [recipeId, dispatch])


    return (
        
        <section className="">
            <div className=" container">
                <div className="card mb-3">
                    <div className="row ">
                        {recipe && 
                            <>
                                <div className="col-md-8 " style={{marginBottom: '5vh'}}>
                                    <h1>{recipe.recipeName}</h1>
                                    <Share />
                                    <CoverImg/>
                                    <Headings title="Ingredients"/>
                                    <Ingredients/>
                                    <NutrientsInfo/>
                                    <Directions/>
                                    <Notes/>
                                    <FavBkmkPrt/>
                                    <Tags/>
                                    <BookAd/>
                                    <Recommendations/>
                                    <ReviewForm/>
                                </div>
                                <div className="col-md-4 ">
                                    <AppAdvert />
                                    <AboutMe/>
                                    <FoodsAd/>
                                    <NewsLetter />
                                    <LatestRecipesList />
                                    <Category />
                                    <Reviews/>
                                </div>
                        
                            </>
                        }
                        {!recipe && <h1>Loading</h1>}
                    </div>
                </div>
            </div>
        </section>
        
    )
}
