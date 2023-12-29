import React,{useEffect} from 'react';
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import {decodeJWToken} from './util/commons'
import {useSelector, useDispatch} from 'react-redux'
import "bootstrap/dist/css/bootstrap.min.css";

import 'font-awesome/css/font-awesome.min.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import {far} from "@fortawesome/free-regular-svg-icons"
import {userActions } from './store/userSlice'
import {  useJsApiLoader } from '@react-google-maps/api';

import NavBar from './components/Nav/navbar'
import Home from './pages/home';
import SingleRecipe from './pages/singleRecipe'
import AllRecipe from './pages/Recipes/AllRecipes/allRecipes'
import Author from './pages/author';
import Forum from './pages/forum';
import Signup from './pages/signup';
import LoginUser from './pages/login';
import NewsFeeds from './pages/NewsFeeds/NewsFeeds';
import CompleteRegistration from './pages/completeRegistrationForm';
import UpdateRecipe from './pages/updateRecipe'
import NewRecipe from './pages/newRecipe'


import DashboardInfo from './components/Dashboard/DashboardInfo/DashboardInfo'
import BlogManager from './components/Dashboard/BlogManager/BlogManager'
import Notification from './components/Dashboard/Notification/Notification'
// import Footer from './elements/<Footer/>/footer'


import './public/css/hover.css'
import './App.css';
import Dashboard from './pages/Dashboard/Dashboard';
import UserRecipeList from './components/CompleteRegistrationForm/userRecipeList';
import Events from './components/Dashboard/Events/EventsContainer/EventsContainer'
import SavedBookmarks from './components/Dashboard/SavedBookmarks/SavedBookmarks'
import FeatureTesting from './components/FeatureTesting/FeatureTesting';

import AddEvent from './components/Dashboard/Events/AddEvent/AddEvent';
import EventListContainer from './components/Dashboard/Events/EventsList/EventListContainer';
import SingleEvent from './components/Dashboard/Events/SingleEvent/SingleEvent';



library.add(fab, fas, far)
// const history = require("history").createBrowserHistory() 

const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
const placesLibrary = ['places'];

function App() {
  const dispatch = useDispatch()
  let token = localStorage.getItem('token')

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: apiKey,
    libraries: placesLibrary
  })

  useEffect(() => {
    if (token) {
      // YOU DO: check expiry!
      const userDoc = decodeJWToken(token);  // decode jwt token
      dispatch(userActions.login({
        user: userDoc
      }))    
    }
  }, [token, dispatch])
    
  // get the loggedIn User
  const user = useSelector(state => state.userLog.user);

  
  return (
    <React.Fragment>
      <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path="/"  exact element={<Home/>} />
          {!user && <Route path="/signup" element={<Signup/>} /> }
          {!user && <Route path="/login" element={<LoginUser/>} />}
          {user && <Route path="/new-account" element={<CompleteRegistration/>} />}
          
          <Route path="/recipe" element={<SingleRecipe/>} />
          <Route path="/all-recipes" element={<AllRecipe/>} />
          <Route path="/forum" element={<Forum/>} />
          <Route path="/author" element={<Author/>} />
            <Route path="/test" element={<FeatureTesting/>}/>
          <Route path="account"  element={<Dashboard />}>
            <Route path="dashboard" element={<DashboardInfo/>}/>
            <Route path="profile" element={<CompleteRegistration/>} />
            <Route path="manage-recipe/edit" element={<UpdateRecipe/>} />
            <Route path="manage-recipe" element={<UserRecipeList/>}/>
            <Route path="add-recipe" element={<NewRecipe/>} />
            <Route path="blog-manager" element={<BlogManager/>} />
            <Route path="notification" element={<Notification/>} />
            <Route path="events" element={<Events/>}>
              <Route path="new-event" element={<AddEvent isNew={true} isLoaded={isLoaded}/>} />
              <Route path="edit-event" element={<AddEvent isNew={false} isLoaded={isLoaded}/>} />
              <Route path="scheduled-events" element={<EventListContainer/>}/>
              <Route path="my-events" element={<EventListContainer/>} />
              <Route path="*" element={<EventListContainer/>} />
            </Route>
            <Route path="saves-and-bookmarks" element={<SavedBookmarks/>} />
            <Route index element={<Navigate to="dashboard" />}></Route>
          </Route>
            <Route path="/event" element={<SingleEvent isLoaded={isLoaded}/>} />


        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </React.Fragment>
    
  );
}
export default App;
