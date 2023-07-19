import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Offcanvas from 'react-bootstrap/Offcanvas';
import styles from './Dashboard.module.css';
import { Menu } from 'react-feather';

const Dashboard = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return(
    <div className={styles.Dashboard}>

      
      <section className={styles.DashboardSection}>
              <div className="container">
                  <div className="card mb-3">
                    <div className={styles.mobileNavigationContainer}> 
                      <div className={` container ${styles.offCanvasContainer}`}> 
                        <div variant="primary" className="d-lg-none" >
                          <Menu strokeWidth="2.5"  width="27" height="19" size={64} onClick={handleShow}/>
                        </div>
                        <Offcanvas show={show} onHide={handleClose} responsive="lg" scroll={true} backdrop={false}>
                          <Offcanvas.Header closeButton>
                            <Offcanvas.Title>Responsive offcanvas</Offcanvas.Title>
                          </Offcanvas.Header>
                          <Offcanvas.Body>
                            <nav>
                              <ul>
                                <li>
                                  <Link to='dashboard'>Dashboard</Link>
                                </li>
                                <li>
                                  <Link to='profile'>Profile</Link>
                                </li>

                                <div className="btn-group dropend">
                                  <button type="button" className="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                    Recipe Manager
                                  </button>
                                  <ul className="dropdown-menu">
                                    <li>
                                      <Link to='manage-recipe' className="dropdown-item">Manage Recipes</Link>
                                    </li>
                                    <li>
                                      <Link to='add-recipe' className="dropdown-item">Add Recipe</Link>
                                    </li>
                                    
                                  </ul>
                                </div>
                              </ul>

                              
                            </nav>
                          </Offcanvas.Body>
                        </Offcanvas>
                      </div>
                    </div>
                    <div className="row g-0">
                      <div className={`col-md-3 ${styles.desktopContainer}`}>
                        <nav>
                          <ul>
                            <li>
                              <Link to='dashboard'>Dashboard</Link>
                            </li>
                            <li>
                              <Link to='profile'>Profile</Link>
                            </li>
                            <li class="nav-item dropdown">
                              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                              Recipe Manager
                              </a>
                              <ul class="dropdown-menu">
                                <li><Link to='manage-recipe' className="dropdown-item">Manage Recipes</Link></li>
                                <li><Link to='add-recipe' className="dropdown-item">Add Recipe</Link></li>
                              </ul>
                            </li>
                          </ul>

                          
                        </nav>
                      </div>
                      <div className="col">
                        <div className={`card-body ${styles.DashboardContents}`}>
                          <div id="detail">
                            
                            <Outlet/>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
              </div> 
          </section>
    </div>
  )
};


export default Dashboard;