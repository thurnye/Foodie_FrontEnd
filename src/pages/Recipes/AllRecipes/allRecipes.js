import React, { useState } from 'react'
import ForumAd from '../../../components/Home/forumAd'
import ResultList from '../../../components/AllRecipes/resultList'
import FilterRecipes from '../../../components/AllRecipes/FilterRecipes/FilterRecipes'
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Filter } from 'react-feather';
import styles from './allRecipes.module.css'
import RecipesContainer from '../../RecipePage/RecipesContainer/RecipesContainer';

export default function AllRecipes() {
    const [filters, setFilters] = useState();
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    return (
      <div className={styles.AllRecipes}>

        <RecipesContainer/>
        <section className={styles.AllRecipesContainer}>
            <div className="container">
            <div className="card mb-3">
              <div className={styles.mobileNavigationContainer}> 
                <div className={` container ${styles.offCanvasContainer}`}> 
                  <div variant="primary" className="d-lg-none" >
                    <Filter strokeWidth="2.5"  width="27" height="19" size={64} onClick={handleShow}/>
                    <span>Filter Recipes</span>
                  </div>
                  <Offcanvas show={show} onHide={handleClose} responsive="lg" scroll={true} backdrop={false}>
                    <Offcanvas.Header closeButton style={{justifyContent:'flex-end'}}>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                      <FilterRecipes getFilters={setFilters}/>
                    </Offcanvas.Body>
                  </Offcanvas>
                </div>
              </div>
              <div className="row g-0">
                <div className={`col-md-3 ${styles.desktopContainer}`}>
                  <FilterRecipes getFilters={setFilters}/>
                </div>
                <div className="col">
                  <div className="card-body">
                    <ResultList filters={filters}/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <ForumAd/>
      </div>
    )
}
