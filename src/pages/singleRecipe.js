import React from 'react';
import AppAdvert from '../components/Home/recentRecipe/appAdvert'
import NewsLetter from '../components/Home/recentRecipe/newsLetter'
import LatestRecipesList from '../components/Home/recentRecipe/latestRecipesList'
import Category from '../components/Home/recentRecipe/category'
import AboutMe from '../components/SingleRecipe/aboutMe'
import FoodsAd from '../components/SingleRecipe/foodAd'
import Share from '../components/SingleRecipe/share'
import CoverImg from '../components/SingleRecipe/coverImage'
import Headings from '../components/UI/heading'
import Tables from '../components/SingleRecipe/table'
import NutrientsInfo from '../components/SingleRecipe/nutrientsInfo'
import Directions from '../components/SingleRecipe/directions'
import Notes from '../components/SingleRecipe/notes';

import '../public/css/singleRecipe.css'
import FavBkmkPrt from '../components/SingleRecipe/favBkmkPrt';
import Tags from '../components/SingleRecipe/tags';
import BookAd from '../components/SingleRecipe/bookAd';
import Recommendations from '../components/SingleRecipe/recommendations';
import CommentForm from '../components/SingleRecipe/commentForm';

export default function singleMeal() {
    return (
        
            <section className="">
            <div className=" container">
                    <div className="card mb-3">
                        <div className="row g-0">
                            <div className="col-md-8 " style={{marginBottom: '5vh'}}>
                                <h1>40 Mother’s Day Breakfast and Brunch Recipes</h1>
                                <Share />
                                <CoverImg/>
                                <Headings title="Ingredients"/>
                                <Tables/>
                                <NutrientsInfo/>
                                <Directions/>
                                <Notes/>
                                <FavBkmkPrt/>
                                <Tags/>
                                <BookAd/>
                                <Recommendations/>
                                <CommentForm/>
                            </div>
                            <div className="col-md-4 ">
                                <AppAdvert />
                                <AboutMe/>
                                <FoodsAd/>
                                <NewsLetter />
                                <LatestRecipesList />
                                <Category />
                            </div>
                        </div>
                    </div>
            </div>
            </section>
        
    )
}
