import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { decodeJWToken } from './util/commons';
import { useSelector, useDispatch } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';

import 'font-awesome/css/font-awesome.min.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { userActions } from './store/userSlice';
import { useJsApiLoader } from '@react-google-maps/api';

import Home from './pages/Home/home';
import AllRecipe from './pages/Recipes/AllRecipes/allRecipes';
import Author from './pages/Author/author';


import CompleteRegistration from './pages/Registeration/completeRegistrationForm';

import SingleRecipe from './pages/Recipes/SingleRecipe/singleRecipe';

import './public/css/hover.css';
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
import CookBook from './pages/CookBook/CookBook';
import CookBookGeneration from './components/Dashboard/Recipes/CookBookManager/CookBookGeneration/CookBookGeneration';

import AllForums from './pages/Forum/AllForums/AllForums';
import SingleForum from './pages/Forum/SingleForum/SingleForum';
import ForumComponent from './pages/Forum/ForumComponent/ForumComponent';
import Dashboard from './components/Dashboard/DashboardContents/Dashboard';
import SignUp from './pages/Auth/SignUp/SignUp';
import Login from './pages/Auth/Login/Login';
import ForgotPassword from './pages/Auth/ForgotPassword/ForgotPassword';
import GroupChat from './pages/Forum/GroupChat/GroupChat';
import SingleGroupContainer from './pages/Forum/SingleGroupContainer/SingleGroupContainer';
import GroupDiscussions from './pages/Forum/GroupDiscussions/GroupDiscussions';

library.add(fab, fas, far);

const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
const placesLibrary = ['places'];

function App() {
  const dispatch = useDispatch();
  let token = localStorage.getItem('token');

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: apiKey,
    libraries: placesLibrary,
  });

  useEffect(() => {
    if (token) {
      // YOU DO: check expiry!
      const userDoc = decodeJWToken(token); // decode jwt token
      dispatch(
        userActions.login({
          user: userDoc,
        })
      );
    }
  }, [token, dispatch]);

  // get the loggedIn User
  const user = useSelector((state) => state.userLog.user);

  return (
    <React.Fragment>
      <BrowserRouter>
        {/* <NavBar/> */}
        <AccountMenu />
        <Routes>
          <Route path='/' exact element={<Home />} />
          {!user && <Route path='/signup' element={<SignUp />} />}
          {!user && <Route path='/login' element={<Login />} />}
          {!user && (
            <Route path='/forgotPassword' element={<ForgotPassword />} />
          )}
          {user && (
            <Route path='/new-account' element={<CompleteRegistration />} />
          )}

          <Route path='/recipe' element={<SingleRecipe />} />
          <Route path='/events' element={<Events />} />
          <Route path='/event' element={<SingleEventContainer />} />
          <Route path='/all-recipes' element={<AllRecipe />} />
          <Route path='/author' element={<Author />} />
          <Route path='/test' element={<FeatureTesting />} />

          {/* Forum */}
          <Route path='forums' element={<ForumComponent />}>
            <Route path='all' element={<AllForums />} />
            <Route path='forum/:id' element={<SingleForum />} />
            {/* <Route path='forum/group' element={<SingleGroup />} />
            <Route path='group/chat' element={<GroupChat />} /> */}

            <Route path='forum' element={<SingleGroupContainer />}>
              <Route path='group' element={<GroupDiscussions />} />
              <Route path='group/chat' element={<GroupChat />} />

            {/* <Route index element={<Navigate to='group' />}></Route> */}
            </Route>
            

            <Route index element={<Navigate to='all' />}></Route>
          </Route>

          {/* Dashboard */}
          <Route path='account' element={<Dashboard />}>
            <Route path='dashboard' element={<DashBoardContent />} />

            {/* Events */}
            <Route path='events-feeds' element={<EventFeed />} />
            <Route
              path='create-event'
              element={<CreateEvent isLoaded={isLoaded} />}
            />
            <Route
              path='edit-event'
              element={<EditEvent isLoaded={isLoaded} />}
            />
            <Route path='organizer' element={<Organizer />} />

            {/* Recipes */}
            <Route path='recipe-feeds' element={<RecipeFeeds />} />
            <Route path='recipe/create-recipe' element={<CreateRecipe />} />
            <Route path='edit-recipe' element={<EditRecipe />} />
            <Route path='recipe/cook-book' element={<CookBook />} />
            <Route
              path='recipe/cook-book/generate'
              element={<CookBookGeneration />}
            />

            {/* Notifications */}
            <Route path='notification' element={<Notification />} />

            {/* Saves and BookMarks */}
            <Route path='saves-and-bookmarks' element={<SavedBookmarks />} />

            {/* Profile */}
            {/* <Route path='profile' element={<CompleteRegistration />} /> */}
            <Route index element={<Navigate to='dashboard' />}></Route>
          </Route>
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </React.Fragment>
  );
}
export default App;
