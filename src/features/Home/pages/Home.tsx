import React from 'react';
import { useSelector } from 'react-redux';

// import HomeJumbotron from '../../components/Jumbotron/homeJumbotron';
// import ThreeCards from '../../components/Home/ThreeCards/threeCards';
// import VeganBooks from '../../components/Home/Books/veganBooks';
// import RecentRecipe from '../../components/Home/RightContents/RecentRecipe/recentRecipe';
// import NewRelease from '../../components/Home/newRelease';
// import MagazineBrands from '../../components/Home/magazineBrands';
// import ThisWeekPopular from '../../components/Home/thisWeekPopular';
// import ForumAd from '../../components/Home/forumAd';
// import Footer from '../../components/Footer/footer';
// import './home.css';
import Jumbotron from '../components/Jumbotron';
import FeatureRecipe from '../components/FeatureRecipe';
import BooksAd from '../components/BooksAd';
import RecentRecipe from '../components/RecentRecipe';

const Home = () => {
  return (
    <>
      <Jumbotron />
      <FeatureRecipe/>
      <BooksAd/>
      <RecentRecipe />
      {/* <ThreeCards />
      <VeganBooks />
      <NewRelease />
      <MagazineBrands />
      <ThisWeekPopular />
      <ForumAd />
      <Footer /> */}
    </>
  );
};

export default Home;
