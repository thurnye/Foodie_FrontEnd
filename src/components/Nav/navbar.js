import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import { redirect } from "react-router-dom";
import {userActions} from '../../store/userSlice'
import './navbar.css';
import Logo from '../../public/images/logo.png'
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Menu } from 'react-feather';



function Header(){
    const user = useSelector(state => state.userLog.user)
    const dispatch = useDispatch()
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    
  const logoutHandler = (e) => {
    e.preventDefault()
    dispatch(userActions.logout())
    let token = localStorage.getItem('token')
    if (token){
        localStorage.removeItem('token')
        redirect("/login");
    }
    
  }

  const appNav = [
    
    {
        name: 'Home',
        path: '/',
        active: true
    },
    {
        name: 'Recipes',
        path: '/all-recipes',
        active: false
    },
    {
        name: 'Forum',
        path: '/forum',
        active: false,
    },
    {
        name: 'EVENTFORM',
        path: '/eventbrit',
        active: false,
    }
  ]

    return (
        <React.Fragment>
            <header className="header">
                <nav className="navbar  logo-nav">                   
                    <div className="container-fluid container showDesktopHeader" >
                        <a className="navbar-brand" href="/">
                        <img src={Logo} alt="foodie" width="50%"/>
                        </a>
                        <div className="nav-search">
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                        </div>
                    </div>
                </nav>
                <nav className="navbar navbar-expand-md">
                    <div className="container-fluid container">
                        <a href="/" className=' navbar-brand brand-foodie'>Foodie</a>
                        <div className="collapse navbar-collapse main-menu" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                {appNav.map((el, i) => <a className="nav-link" key={`nav_${el}_${i}`} aria-current="page" href={el.path}>{el.name}</a>
                                )}
                                {!user && <a className="nav-link" aria-current="page" href="/login">Login</a>}
                                {user && <a className="nav-link " aria-current="page" href="/account">Dashboard</a>}
                                {user && <a className="nav-link " aria-current="page" href="http://localhost:3001/" target="_blank">News Feeds</a>}
                                {user &&  <button className="nav-link btn" onClick={logoutHandler}>Logout</button>}
                                
                            </div>
                        </div>
                        <div className="mobileViewNav">
                        <div variant="primary" className="d-lg-none" >
                          <Menu strokeWidth="2.5"  width="27" height="19" size={64} onClick={handleShow}/>
                        </div>
                        <Offcanvas show={show} onHide={handleClose} responsive="lg" scroll={false} backdrop={false} placement='end'>
                          <Offcanvas.Header closeButton style={{justifyContent:'flex-end'}}>
                          </Offcanvas.Header>
                          <Offcanvas.Body>
                            <div className="container">
                                <ul className="list-group nav-list-items">
                                {appNav.map((el, i) => 
                                <li className="list-group-item" key={`nav-item_${el}_${i}`}>
                                    <a className="nav-link" aria-current="page" href={el.path}>{el.name}</a>
                                    </li>
                                )}
                                {!user && 
                                    <li className="list-group-item">
                                        <a className="nav-link" aria-current="page" href="/login">Login</a>
                                    </li>
                                }
                                {user && 
                                    <li className="list-group-item">
                                        <a className="nav-link " aria-current="page" href="/user">Dashboard</a>
                                    </li>
                                }
                                {user && 
                                    <li className="list-group-item">
                                        <a className="nav-link " aria-current="page" href="/newsFeeds">News Feeds</a>
                                    </li>
                                }
                                {user && 
                                    <li className="list-group-item">
                                        <button className="nav-link btn" onClick={logoutHandler}>Logout</button>
                                    </li>
                                }
                                <li className="list-group-item">
                                    <a className="nav-link " aria-current="page" href="test">FeatureTest</a>
                                </li>
                                <li className="list-group-item">
                                    <a className="nav-link " aria-current="page" href="/user">Dashboard</a>
                                </li>
                                <li className="list-group-item">
                                    <a className="nav-link " aria-current="page" href="/newsFeeds">News Feeds</a>
                                </li>
                                </ul>
                            </div>
                          </Offcanvas.Body>
                        </Offcanvas>
                        </div>

                    </div>
                </nav>
            </header>
        </React.Fragment>
    );
}

export default Header;
