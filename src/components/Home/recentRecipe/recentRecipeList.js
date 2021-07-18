import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Video } from 'react-feather';

import Img6 from '../../../public/images/recentRecipes/img6.jpeg'
import Img7 from '../../../public/images/recentRecipes/img7.jpeg'
import Img8 from '../../../public/images/recentRecipes/img8.jpeg'
import Img9 from '../../../public/images/recentRecipes/img9.jpeg'
import Img10 from '../../../public/images/recentRecipes/img10.jpeg'
import Img11  from '../../../public/images/recentRecipes/img11.jpeg'
import Img12 from '../../../public/images/recentRecipes/img12.jpeg'
import Img13 from '../../../public/images/recentRecipes/img13.jpeg'

export default function recentRecipeList() {
    return (
        <>
          <div className="card mb-3 recipe-card">
                                    <div className="row g-0">
                                        <div className="col-md-5 recipe-card-img ">
                                            <img src={Img6} className="img-fluid rounded-start " alt="recipe"/>
                                        </div>
                                        <div className="col-md-7">
                                            <div className="card-body recipe-card-content">
                                                <div className="mask rgba-white-slight d-flex">
                                                    <p>
                                                        <span className="card-icon"><Video strokeWidth="2" size="15"/> </span>
                                                        <span><small><b> 0 : 30</b></small></span>
                                                    </p>
                                                    
                                                </div>
                                                <h5 className="card-title content-title"><a href="#">The best fluffy buttermilk pancakes with triple berry sauce</a></h5>
                                                <p className="card-text">Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad mi</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="card mb-3 recipe-card">
                                    <div className="row g-0">
                                        <div className="col-md-5 recipe-card-img">
                                            <img src={Img7} className="img-fluid rounded-start" alt="recipe"/>
                                        </div>
                                        <div className="col-md-7">
                                            <div className="card-body recipe-card-content">
                                                <div className="mask rgba-white-slight d-flex">
                                                    <p>
                                                        <span className="card-icon"><FontAwesomeIcon icon={['far', 'clock']} /> </span>
                                                        <span><small><b>30 MINUTES</b></small></span>
                                                    </p>
                                                    <p>
                                                        <span className="card-icon"><FontAwesomeIcon icon={['far', 'thumbs-up']} /> </span>
                                                        <span><small><b>SUPER EASY</b></small></span>
                                                    </p>
                                                </div>
                                                <h5 className="card-title content-title"><a href="#">Chocolate banana pancakes</a></h5>
                                                <p className="card-text">Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad mi</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="card mb-3 recipe-card">
                                    <div className="row g-0">
                                        <div className="col-md-5 recipe-card-img">
                                            <img src={Img8} className="img-fluid rounded-start" alt="recipe"/>
                                        </div>
                                        <div className="col-md-7">
                                            <div className="card-body recipe-card-content">
                                                <div className="mask rgba-white-slight d-flex">
                                                <p>
                                                        <span className="card-icon"><Video strokeWidth="2" size="15"/> </span>
                                                        <span><small><b> 0 : 30</b></small></span>
                                                    </p>
                                                </div>
                                                <h5 className="card-title content-title"><a href="#">Cinnamon french toast with cream cheese glaze and berry syrup</a></h5>
                                                <p className="card-text">Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad mi</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="card mb-3 recipe-card">
                                    <div className="row g-0">
                                        <div className="col-md-5 recipe-card-img">
                                            <img src={Img9} className="img-fluid rounded-start" alt="recipe"/>
                                        </div>
                                        <div className="col-md-7">
                                            <div className="card-body recipe-card-content">
                                                <div className="mask rgba-white-slight d-flex">
                                                    <p>
                                                        <span className="card-icon"><FontAwesomeIcon icon={['far', 'clock']} /> </span>
                                                        <span><small><b>30 MINUTES</b></small></span>
                                                    </p>
                                                    <p>
                                                        <span className="card-icon"><FontAwesomeIcon icon={['far', 'thumbs-up']} /> </span>
                                                        <span><small><b>SUPER EASY</b></small></span>
                                                    </p>
                                                </div>
                                                <h5 className="card-title content-title"><a href="#">Peanut butter pancakes</a></h5>
                                                <p className="card-text">Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad mi</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            
                                <div className="card mb-3 recipe-card">
                                    <div className="row g-0">
                                        <div className="col-md-5 recipe-card-img">
                                            <img src={Img10} className="img-fluid rounded-start" alt="recipe"/>
                                        </div>
                                        <div className="col-md-7">
                                            <div className="card-body recipe-card-content">
                                                <div className="mask rgba-white-slight d-flex">
                                                <p>
                                                        <span className="card-icon"><Video strokeWidth="2" size="15"/> </span>
                                                        <span><small><b> 0 : 30</b></small></span>
                                                    </p>
                                                </div>
                                                <h5 className="card-title content-title"><a href="#">Traditional French breakfast croissant and coffee</a></h5>
                                                <p className="card-text">Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad mi</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            
                                <div className="card mb-3 recipe-card">
                                    <div className="row g-0">
                                        <div className="col-md-5 recipe-card-img">
                                            <img src={Img11} className="img-fluid rounded-start" alt="recipe"/>
                                        </div>
                                        <div className="col-md-7">
                                            <div className="card-body recipe-card-content">
                                                <div className="mask rgba-white-slight d-flex">
                                                    <p>
                                                        <span className="card-icon"><FontAwesomeIcon icon={['far', 'clock']} /> </span>
                                                        <span><small><b>30 MINUTES</b></small></span>
                                                    </p>
                                                    <p>
                                                        <span className="card-icon"><FontAwesomeIcon icon={['far', 'thumbs-up']} /> </span>
                                                        <span><small><b>SUPER EASY</b></small></span>
                                                    </p>
                                                </div>
                                                <h5 className="card-title content-title"><a href="#">One-pot pasta primavera</a></h5>
                                                <p className="card-text">Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad mi</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            
                                <div className="card mb-3 recipe-card">
                                    <div className="row g-0">
                                        <div className="col-md-5 recipe-card-img">
                                            <img src={Img12} className="img-fluid rounded-start" alt="recipe"/>
                                        </div>
                                        <div className="col-md-7">
                                            <div className="card-body recipe-card-content">
                                                <div className="mask rgba-white-slight d-flex">
                                                    <p>
                                                        <span className="card-icon"><Video strokeWidth="2" size="15"/> </span>
                                                        <span><small><b> 0 : 30</b></small></span>
                                                    </p>
                                                </div>
                                                <h5 className="card-title content-title"><a href="#">Quick & easy chocolate cake with berries from scratch recipe</a></h5>
                                                <p className="card-text">Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad mi</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            
                                <div className="card mb-3 recipe-card">
                                    <div className="row g-0">
                                        <div className="col-md-5 recipe-card-img">
                                            <img src={Img13} className="img-fluid rounded-start" alt="recipe"/>
                                        </div>
                                        <div className="col-md-7">
                                            <div className="card-body recipe-card-content">
                                                <div className="mask rgba-white-slight d-flex">
                                                    <p>
                                                        <span className="card-icon"><FontAwesomeIcon icon={['far', 'clock']} /> </span>
                                                        <span><small><b>30 MINUTES</b></small></span>
                                                    </p>
                                                    <p>
                                                        <span className="card-icon"><FontAwesomeIcon icon={['far', 'thumbs-up']} /> </span>
                                                        <span><small><b>SUPER EASY</b></small></span>
                                                    </p>
                                                </div>
                                                <h5 className="card-title content-title"><a href="#">Carrot and walnut cake</a></h5>
                                                <p className="card-text">Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad mi</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
  
        </>
    )
}
