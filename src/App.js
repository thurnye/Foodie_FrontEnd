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


import Home from './pages/home';
import AllRecipe from './pages/Recipes/AllRecipes/allRecipes'
import Author from './pages/author';
import Forum from './pages/forum';
import Signup from './pages/signup';
import LoginUser from './pages/login';
import CompleteRegistration from './pages/completeRegistrationForm';

import SingleRecipe from './pages/singleRecipe'



import './public/css/hover.css'
import './App.css';
import FeatureTesting from './components/FeatureTesting/FeatureTesting';





import CreateEvent from './components/Dashboard/Events/CreateEvent/CreateEvent';
import EditEvent from './components/Dashboard/Events/EditEvent/EditEvent';
import DashBoardContent from './components/Dashboard/DashboardContents/DashBoardContent';
import Organizer from './components/Dashboard/Events/Organizer/Organizer';
import EventFeed from './components/Dashboard/Events/EventFeed/EventFeed';
import Events from './components/Dashboard/Events/AllEvents/AllEvents';
import AccountMenu from './components/Nav/AccountMenu';
import SingleEventContainer from './components/Dashboard/Events/SingleEventContainer/SingleEventContainer';
import RecipeFeeds from './components/Dashboard/Recipes/RecipeFeeds/RecipeFeeds';
import EditRecipe from './components/Dashboard/Recipes/EditRecipe/EditRecipe';
import CreateRecipe from './components/Dashboard/Recipes/CreateRecipe/CreateRecipe';
import Notification from './components/Dashboard/Notification/Notification';
import SavedBookmarks from './components/Dashboard/SavedBookmarks/SavedBookmarks';
import AccountDashboard from './components/Dashboard/DashboardContents/AccountDashboard/AccountDashboard';



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
      {/* <NavBar/> */}
      <AccountMenu/>
        <Routes>
          <Route path="/"  exact element={<Home/>} />
          {!user && <Route path="/signup" element={<Signup/>} /> }
          {!user && <Route path="/login" element={<LoginUser/>} />}
          {user && <Route path="/new-account" element={<CompleteRegistration/>} />}
          
          {/* <Route path="/eventbrit" element={<EventBrit/>} /> */}
          <Route path="/recipe" element={<SingleRecipe/>} />
          <Route path="/events" element={<Events/>} />
          <Route path="/event" element={<SingleEventContainer/>} />
          <Route path="/all-recipes" element={<AllRecipe/>} />
          <Route path="/forum" element={<Forum/>} />
          <Route path="/author" element={<Author/>} />
          <Route path="/test" element={<FeatureTesting/>}/>
          

          {/* <Route path="/event" element={<SingleEvent isLoaded={isLoaded}/>} /> */}


          {/* Testing */}
          <Route path="account" element={<AccountDashboard/>}>
            <Route path="dashboard" element={<DashBoardContent/> }/>
            {/* Events */}
            <Route path="events-feeds" element={<EventFeed/> }/>
            <Route path="create-event" element={<CreateEvent isLoaded={isLoaded} />} />
            <Route path="edit-event" element={<EditEvent isLoaded={isLoaded} />} />
            <Route path="organizer" element={<Organizer/>} />

            {/* Recipes */}
            <Route path="recipe-feeds" element={<RecipeFeeds/> }/>
            <Route path="create-recipe" element={<CreateRecipe/>} />
            <Route path="edit-recipe" element={<EditRecipe/>} />

            {/* Notifications */}
            <Route path="notification" element={<Notification/>} />
            
            {/* Saves and BookMarks */}
            <Route path="saves-and-bookmarks" element={<SavedBookmarks/>} />

            {/* Profile */}
            <Route path="profile" element={<CompleteRegistration/>} />
            <Route index element={<Navigate to="dashboard" />}></Route>
          </Route>

          
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </React.Fragment>
    
  );
}
export default App;
