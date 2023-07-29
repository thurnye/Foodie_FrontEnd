import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Offcanvas from 'react-bootstrap/Offcanvas';
import styles from './Dashboard.module.css';
import { Menu } from 'react-feather';
import DashboardNav from '../../components/Dashboard/DashboardNav/DashboardNav';
import Avatar from '../../public/images/imgPlaceholder.jpeg'

const Dashboard = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return(
    <div className={styles.Dashboard}>

      
      <section className={styles.DashboardSection}>
              <div className="container">
                  <div className={` card mb-3 ${styles.cardContainer}`}>
                    <div className={styles.mobileNavigationContainer}> 
                      <div className={` container ${styles.offCanvasContainer}`}> 
                        <div variant="primary" className="d-lg-none" >
                          <Menu strokeWidth="2.5"  width="27" height="19" size={64} onClick={handleShow}/>
                        </div>
                        <Offcanvas show={show} onHide={handleClose} responsive="lg" scroll={true} backdrop={false} className={styles.canvasContainer}>
                          <Offcanvas.Header closeButton>
                            <Offcanvas.Title></Offcanvas.Title>
                          </Offcanvas.Header>
                          <Offcanvas.Body className={styles.canvasBodyContainer}>
                            <DashboardNav/>
                            {/* <div className={styles.dashboardUserContainer}>
                              <Link to={{pathname: `/`}}
                                state= {{postId: ''}}
                                className={styles.imageContent}>
                                <img src={Avatar} alt="author-avatar" />
                              </Link>
                              <h6 className='mb-0'>John Doe</h6>
                              <p className={`text-small muted ${styles.dashboardUserName}`}>Johndoe@johndoe.com</p>
                            </div> */}
                          </Offcanvas.Body>
                        </Offcanvas>
                      </div>
                    </div>
                    <div className="row g-0">
                      <div className={`col-lg-3 ${styles.desktopContainer}`}>
                        <DashboardNav/>
                      </div>
                      <div className="col">
                        <div className={`card-body pt-0 ${styles.DashboardContents}`}>
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