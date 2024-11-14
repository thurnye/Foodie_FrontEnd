import React from 'react';
import styles from './MostViewedAndRated.module.css';
import DashboardRecipeCard from '../DashboardRecipeCard/DashboardRecipeCard';
import Img6 from '../../../../public/images/recentRecipes/img6.jpeg';
import Img7 from '../../../../public/images/recentRecipes/img7.jpeg';
import Img8 from '../../../../public/images/recentRecipes/img8.jpeg';
import Img9 from '../../../../public/images/recentRecipes/img9.jpeg';
import Img10 from '../../../../public/images/recentRecipes/img10.jpeg';
import Img11 from '../../../../public/images/recentRecipes/img11.jpeg';
import Img12 from '../../../../public/images/recentRecipes/img12.jpeg';
import Img13 from '../../../../public/images/recentRecipes/img13.jpeg';


const recipes = [
  {
    recipeName: 'The best fluffy buttermilk pancakes with triple berry sauce',
    description:
      'Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad mi',
    duration: '30 Minutes',
    thumbnail: Img6,
    level: 'Super Easy',
    isVideo: true,
    link: '/all-recipes',
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
    link: '/all-recipes',
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
    link: '/all-recipes',
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
    link: '/all-recipes',
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
    link: '/all-recipes',
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
    link: '/all-recipes',
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
    link: '/all-recipes',
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
    link: '/all-recipes',
    length: '0:30',
  },
]

const MostViewedAndRated = () => {
  
  return(
  <div className={styles.MostViewedAndRated}>
    <DashboardRecipeCard recipes={recipes}/>
  </div>
)};



export default MostViewedAndRated;
