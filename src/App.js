import React,{useEffect} from 'react';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import jwt_decode from "jwt-decode";
import {useSelector, useDispatch} from 'react-redux'
import "bootstrap/dist/css/bootstrap.min.css";
import 'font-awesome/css/font-awesome.min.css';
import './App.css';
import {userActions } from './store/userSlice'
import Home from './components/Home/home';
import Signup from './components/signup/signup';
import Login from './components/LogIn/login';




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
    }, [token])
    
    const user = useSelector(state => state.userLog.user)

  
  console.log(user)

  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route path="/"  exact component={Home} />
          {!user && <Route path="/signin" component={Signup} /> }
          {!user && <Route path="/login" component={Login} />}
        </Switch>
      </Router>
    </React.Fragment>
    
  );
}
export default App;
