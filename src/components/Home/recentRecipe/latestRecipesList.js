import React from 'react'
import {Link } from 'react-router-dom';
import Rp1 from '../../../public/images/latestRecipes/rp1.jpeg'
import Rp2 from '../../../public/images/latestRecipes/rp2.jpeg'
import Rp3 from '../../../public/images/latestRecipes/rp3.jpeg'

export default function latestRecipesList() {
    return (
        <>
          <div className="category-container latest-recipes mb-3 ">
                                    <div className="card-body">
                                        <h5 className="card-title category">LATEST RECIPES</h5>
                                        <div className="card mb-3" >
                                            <div className="row g-0">
                                                <div className="col-md-5">
                                                    <img src={Rp1} className="img-fluid rounded-start" alt="latestRecipe"/>
                                                </div>
                                                <div className="col-md-7">
                                                    <div className="card-body latest-recipe-body">
                                                        <h5 className="card-title latest-recipe-title">
                                                            <Link to={{
                                                                pathname: `/recipe` ,
                                                                search: `?q=${("cupcakes with coconut oil").replaceAll(" ", "-")}`,
                                                                // state: {postId: post._id},
                                                            }}
                                                            className="content-title">Cupcakes with coconut oil</Link>
                                                        </h5>
                                                        <p className="card-text"><small className="text-muted">July 17th, 2021</small></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card mb-3" >
                                            <div className="row g-0">
                                                <div className="col-md-5">
                                                    <img src={Rp2} className="img-fluid rounded-start" alt="latestRecipe"/>
                                                </div>
                                                <div className="col-md-7">
                                                    <div className="card-body latest-recipe-body">
                                                        <h5 className="card-title latest-recipe-title">
                                                            <Link to={{
                                                                pathname: `/recipe` ,
                                                                search: `?q=${("easy breakfast meal prep").replaceAll(" ", "-")}`,
                                                                // state: {postId: post._id},
                                                            }}
                                                            className="content-title">Easy breakfast meal prep</Link>
                                                        </h5>
                                                        <p className="card-text"><small className="text-muted">July 17th, 2021</small></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card mb-3" >
                                            <div className="row g-0">
                                                <div className="col-md-5">
                                                    <img src={Rp3} className="img-fluid rounded-start" alt="latestRecipe"/>
                                                </div>
                                                <div className="col-md-7">
                                                    <div className="card-body latest-recipe-body">
                                                        <h5 className="card-title latest-recipe-title">
                                                            <Link to={{
                                                                pathname: `/recipe` ,
                                                                search: `?q=${("brownies with walnuts").replaceAll(" ", "-")}`,
                                                                // state: {postId: post._id},
                                                            }}
                                                            className="content-title">Brownies with walnuts</Link>
                                                        </h5>
                                                        <p className="card-text"><small className="text-muted">July 17th, 2021</small></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                              
        </>
    )
}
