import React from 'react';
import {useSelector, useDispatch} from 'react-redux'
import { useHistory, Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {userActions} from '../../store/userSlice'
import './navbar.css';



function Header(){
    const user = useSelector(state => state.userLog.user)
    const dispatch = useDispatch()
    const history = useHistory();


    
  const logoutHandler = (e) => {
    e.preventDefault()
    dispatch(userActions.logout())
    let token = localStorage.getItem('token')
    if (token){
        localStorage.removeItem('token')
        history.push("/login");
    }
    
  }
    return (
        <React.Fragment>

            
            <header className="header">
                <Navbar  expand="lg" >
                    <Navbar.Brand href="/">
                        TEST
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto m-auto nav-bar">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/all-recipes">Recipes</Nav.Link>
                        <Nav.Link href="/forum">Forum</Nav.Link>
                        {!user && <Nav.Link href="/login">Login</Nav.Link>}
                        {user && <Nav.Link href="/new-recipe">Add Recipe</Nav.Link>}
                        {user && <Nav.Link href="/new-account">Account</Nav.Link>}
                        {user &&  <button className="nav-link btn" onClick={logoutHandler}>Logout</button>}
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>   
              
            </header>
        </React.Fragment>
    );
}

export default Header;
