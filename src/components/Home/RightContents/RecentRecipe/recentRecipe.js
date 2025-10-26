import React from 'react';
import LatestRecipesList from '../LatestRecipe/latestRecipesList';
import Category from '../Categories/category';
import NewsLetter from '../NewsLetter/newsLetter';
import AppAdvert from '../AppAds/appAdvert';
import MySocialMedia from '../SocialMedia/mySocialMedia';
import Headings from '../../../UI/heading';
import MealApp from '../../../../public/images/adverts/ad.jpeg';
import UTube from '../../../../public/images/adverts/utube.png';
import Img6 from '../../../../public/images/recentRecipes/img6.jpeg';
import Img7 from '../../../../public/images/recentRecipes/img7.jpeg';
import Img8 from '../../../../public/images/recentRecipes/img8.jpeg';
import Img9 from '../../../../public/images/recentRecipes/img9.jpeg';
import Img10 from '../../../../public/images/recentRecipes/img10.jpeg';
import Img11 from '../../../../public/images/recentRecipes/img11.jpeg';
import Img12 from '../../../../public/images/recentRecipes/img12.jpeg';
import Img13 from '../../../../public/images/recentRecipes/img13.jpeg';
import RecentRecipeList from '../../../RecentContainer/RecentRecipeList';

const recent = [
  {
    recipeName: 'The best fluffy buttermilk pancakes with triple berry sauce',
    description:
      'Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad mi',
    duration: '30 Minutes',
    thumbnail: Img6,
    level: 'Super Easy',
    isVideo: true,
    link: '/recipes',
    length: '0:30',
  },
  {
    recipeName: 'Chocolate banana pancakes',
    description:
      'Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad mi',
    duration: '30 Minutes',
    thumbnail: Img7,
    level: 'Super Easy',
    isVideo: false,
    link: '/recipes',
    length: '0:30',
  },
  {
    recipeName: 'Cinnamon french toast with cream cheese glaze and berry syrup',
    description:
      'Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad mi',
    duration: '30 Minutes',
    thumbnail: Img8,
    level: 'Super Easy',
    isVideo: true,
    link: '/recipes',
    length: '0:30',
  },
  {
    recipeName: 'Peanut butter pancakes',
    description:
      'Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad mi',
    duration: '30 Minutes',
    thumbnail: Img9,
    level: 'Super Easy',
    isVideo: false,
    link: '/recipes',
    length: '0:30',
  },
  {
    recipeName: 'Traditional French breakfast croissant and coffee',
    description:
      'Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad mi',
    duration: '30 Minutes',
    thumbnail: Img10,
    level: 'Super Easy',
    isVideo: true,
    link: '/recipes',
    length: '0:30',
  },
  {
    recipeName: 'One-pot pasta primavera',
    description:
      'Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad mi',
    duration: '30 Minutes',
    thumbnail: Img11,
    level: 'Super Easy',
    isVideo: false,
    link: '/recipes',
    length: '0:30',
  },
  {
    recipeName: 'Quick & easy chocolate cake with berries from scratch recipe',
    description:
      'Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad mi',
    duration: '30 Minutes',
    thumbnail: Img12,
    level: 'Super Easy',
    isVideo: true,
    link: '/recipes',
    length: '0:30',
  },
  {
    recipeName: 'Carrot and walnut cake',
    description:
      'Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad mi',
    duration: '30 Minutes',
    thumbnail: Img13,
    level: 'Super Easy',
    isVideo: false,
    link: '/recipes',
    length: '0:30',
  },
];

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
                <RecentRecipeList recent={recent} />
              </div>
              <div className='col-md-4 '>
                <Category />
                <NewsLetter />
                <LatestRecipesList />
                <AppAdvert src={MealApp} title={'Meal App'} />
                <MySocialMedia />
                <AppAdvert src={UTube} title={'youtube'} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
