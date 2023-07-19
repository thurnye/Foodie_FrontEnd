import React,{useEffect} from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import jwt_decode from "jwt-decode";
import {useSelector, useDispatch} from 'react-redux'
import "bootstrap/dist/css/bootstrap.min.css";

import 'font-awesome/css/font-awesome.min.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import {far} from "@fortawesome/free-regular-svg-icons"
import {userActions } from './store/userSlice'


import NavBar from './components/Nav/navbar'
import Home from './pages/home';
import SingleRecipe from './pages/singleRecipe'
import AllRecipe from './pages/Recipes/AllRecipes/allRecipes'
import Author from './pages/author';
import Forum from './pages/forum';
import Signup from './pages/signup';
import Login from './pages/login';
import CompleteRegistration from './pages/completeRegistrationForm';
import NewRecipe from './pages/newRecipe'
import UpdateRecipe from './pages/updateRecipe'
// import Footer from './elements/<Footer/>/footer'


import './public/css/hover.css'
import './App.css';
import Dashboard from './pages/Dashboard/Dashboard';
import UserRecipeList from './components/CompleteRegistrationForm/userRecipeList';



library.add(fab, fas, far)
// const history = require("history").createBrowserHistory()  

function App() {
  const dispatch = useDispatch()
  let token = localStorage.getItem('token')

  useEffect(() => {
    if (token) {
      // YOU DO: check expiry!
      const userDoc = jwt_decode(token);  // decode jwt token
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
          {!user && <Route path="/login" element={<Login/>} />}
          {user && <Route path="/new-account" element={<CompleteRegistration/>} />}
          {user && <Route path="/new-recipe" element={<NewRecipe/>} />}
          
          <Route path="/recipe" element={<SingleRecipe/>} />
          <Route path="/all-recipes" element={<AllRecipe/>} />
          <Route path="/forum" element={<Forum/>} />
          <Route path="/author" element={<Author/>} />
          <Route path="dashboard" element={<Dashboard />}>
        <Route
          path="settings"
          element={<>This is settings</>}
          />
        <Route path="profile" element={<CompleteRegistration/>} />
          {user && <Route path="manage-recipe/edit" element={<UpdateRecipe/>} />}
        <Route path="manage-recipe" element={<UserRecipeList/>}/>
        <Route path="add-recipe" element={<NewRecipe/>} />
      </Route>

        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </React.Fragment>
    
  );
}
export default App;
