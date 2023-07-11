import React from 'react';
import {useSelector} from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Tag } from 'react-feather';
import img11 from '../../public/images/recentRecipes/img11.jpeg';
// import Ratings from './ratings';
import ReactStars from "react-rating-stars-component";


export default function CoverImage() {
    const recipe = useSelector(state => state.recipesData.singleRecipe)
    return (
        <>
            <section className="coverImg">
            {recipe &&  
                <>
                    <div className="jumbotron p-0">
                        <div className="view overlay rounded-top" style={{textAlign: "center", backgroundColor: "white"}}>
                                <img src={recipe.thumbnail} className="img-fluid" alt="coverImage" style={{width: "-webkit-fill-available"}}/>
                        </div>
                    </div>
                    <div className="container cover-tags">
                        <div className="coverImg-card-container rgba-white-slight d-flex">
                            <p>
                                <span className="card-icon"><FontAwesomeIcon icon={['far', 'clock']} /> </span>
                                <span><small><b>{recipe.duration?.toUpperCase()}</b></small></span>
                                
                            </p>
                            <p>
                                <span className="card-icon"><FontAwesomeIcon icon={['far', 'thumbs-up']} /> </span>
                                <span><small><b>{recipe.level?.toUpperCase()}</b></small></span>
                                
                            </p>
                            <p>
                                <span className="card-icon"><FontAwesomeIcon icon={['fas', 'utensils']} /> </span>
                                <span><small><b>SERVES {recipe.serving} </b></small></span>
                                
                            </p>
                            {/* <p>
                                <span className="card-icon"><Tag /> </span>
                                <span><small><b>{recipe.category?.toUpperCase()}</b></small></span>
                                
                            </p> */}
                        </div>
                        
                    </div>
                    <div className="about-recipe">
                        <p>{recipe.description}</p>
                    </div>
                    {/* <Ratings/> */}
                    <div className="rating">
                        <ReactStars
                            size={18}
                            half={true}
                            value={recipe.rating}
                            color2={"#fc6"}
                            edit={false}
                        />
                        <p className="text-muted">({recipe.rating}/5) </p>
                    </div>
                </>
            }
                {/* <div className="jumbotron p-0">
                    <div className="view overlay rounded-top" style={{textAlign: "center", backgroundColor: "white"}}>
                    {recipe &&  <img src={recipe.thumbnail} className="img-fluid" alt="coverImage" style={{width: "-webkit-fill-available"}}/>}
                    </div>
                </div>
                <div className="container cover-tags">
                    <div className="coverImg-card-container rgba-white-slight d-flex">
                        <p>
                            <span className="card-icon"><FontAwesomeIcon icon={['far', 'clock']} /> </span>
                            {recipe &&  <span><small><b>{recipe.duration[0].value.toUpperCase()}</b></small></span>}
                            
                        </p>
                        <p>
                            <span className="card-icon"><FontAwesomeIcon icon={['far', 'thumbs-up']} /> </span>
                            {recipe && <span><small><b>{recipe.level[0].value.toUpperCase()}</b></small></span>}
                            
                        </p>
                        <p>
                            <span className="card-icon"><FontAwesomeIcon icon={['fas', 'utensils']} /> </span>
                            {recipe && <span><small><b>SERVES {recipe.serving[0].value} </b></small></span>}
                            
                        </p>
                        <p>
                            <span className="card-icon"><Tag /> </span>
                            {recipe && <span><small><b>{recipe.category[0].value.toUpperCase()}</b></small></span>}
                            
                        </p>
                    </div>
                    
                </div>
                <div className="about-recipe">
                {recipe && <p>{recipe.description}</p>}
                    

                </div>
                <Ratings/> */}
                
            </section>
        </>
    )
}
