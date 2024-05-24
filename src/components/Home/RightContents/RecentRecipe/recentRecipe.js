import React from 'react';
import RecentRecipeList from './recentRecipeList';
import LatestRecipesList from '../LatestRecipe/latestRecipesList';
import Category from '../Categories/category';
import NewsLetter from '../NewsLetter/newsLetter';
import AppAdvert from '../AppAds/appAdvert';
import MySocialMedia from '../SocialMedia/mySocialMedia';
import Headings from '../../../UI/heading';
import MealApp from '../../../../public/images/adverts/ad.jpeg'
import UTube from '../../../../public/images/adverts/utube.png'

export default function recentRecipe() {
  return (
    <>
      <section className='recent-recipe'>
        <div className='container'>
          <Headings title='Recent recipes' />
        </div>
        <div className='recipes container'>
          <div className='card mb-3'>
            <div className='row g-0'>
              <div className='col-md-8 recipes-card-container'>
                <RecentRecipeList />
              </div>
              <div className='col-md-4 '>
                <Category />
                <NewsLetter />
                <LatestRecipesList />
                <AppAdvert src={MealApp} title={'Meal App'}/>
                <MySocialMedia />
                <AppAdvert src={UTube} title={'youtube'}/>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
