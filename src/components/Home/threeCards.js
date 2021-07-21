import React from 'react'
import Nav from 'react-bootstrap/Nav';
import {Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Share2,Bookmark, Video } from 'react-feather';
import ImgHolder from '../../public/images/imgPlaceholder.jpeg'
import Avatar from '../Avatar/avatar'
import Img2 from '../../public/images/tier3/img2.jpeg'
import Img3 from '../../public/images/tier3/img3.jpeg'
import Img4 from '../../public/images/tier3/img4.jpeg'

export default function threeCards() {
    return (
        <>
             <section className="three-card-group">
                <div className="container">
                    <div className="card-deck">        
                        <div className="card mb-4">
                            {/* <!--Card image--> */}
                            <div className="view overlay">
                                <img className="card-img-top" src={Img2}
                                    alt="Cardimagecap"/>
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
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">
                                <Link to={{
                                        pathname: `/recipe` ,
                                        search: `?q=${("40 mother’s day breakfast and brunch recipes").replaceAll(" ", "-")}`,
                                        // state: {postId: post._id},
                                    }}
                                    className="content-title">40 Mother’s Day Breakfast and Brunch Recipes</Link>
                                </h5>

                                <p className="card-text">Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad mi</p>

                                <div className="editor d-flex ">
                                    <div className="content-author">
                                        <Avatar/>
                                        <p>
                                            <span><small>LAURA DERN</small></span>
                                            <span className="text-muted"><small>May 08, 2021</small></span>
                                        </p>

                                    </div>
                                    <div className="content-share-icon">
                                        <p className="share">
                                            <span className="card-icon"><Share2 strokeWidth="1"/> </span>
                                        </p>
                                        {/* <ul className="my-social-icon">
                                            <li className="my-social-icon-list" style={{color: '#4267B2'}}>
                                                <FontAwesomeIcon icon={['fab', 'facebook']} />                                   
                                            </li>
                                            
                                            <li className="my-social-icon-list" style={{color: '#1DA1F2'}}>
                                                <FontAwesomeIcon icon={['fab', 'twitter']} />                                    
                                            </li>
                                            <li className="my-social-icon-list" style={{color: '#E60023'}}>
                                                <FontAwesomeIcon icon={['fab', 'pinterest']} />                                   
                                            </li>
                                            <li className="my-social-icon-list" style={{color: '#2867B2'}}>
                                                <FontAwesomeIcon icon={['fab', 'linkedin']} />                                    
                                            </li>

                                        </ul> */}
                                        
                                        <p className="bookmark">
                                            <span className="card-icon"><Bookmark strokeWidth="1"/> </span>
                                        </p>

                                    </div>
                                </div>
                            </div>

                        </div>
                        
                        
                        
                        
                        
                        <div className="card mb-4">

                            {/* <!--Card image--> */}
                            <div className="view overlay">
                                <img className="card-img-top" src={Img3}
                                    alt="Cardimagecap"/>
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
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">
                                     <Link to={{
                                        pathname: `/recipe` ,
                                        search: `?q=${("slow cooker apple cinnamon oatmeal pot").replaceAll(" ", "-")}`,
                                        // state: {postId: post._id},
                                    }}
                                    className="content-title">Slow cooker apple cinnamon oatmeal pot</Link>
                                </h5>

                                <p className="card-text">Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad mi</p>

                                <div className="editor d-flex ">
                                    <div className="content-author">
                                         <Avatar/>
                                        <p>
                                            <span><small>LAURA DERN</small></span>
                                            <span className="text-muted"><small>May 08, 2021</small></span>
                                        </p>

                                    </div>
                                    <div className="content-share-icon">
                                        <p className="share">
                                            <span className="card-icon"><Share2 strokeWidth="1"/> </span>
                                        </p>
                                        {/* <ul className="my-social-icon">
                                            <li className="my-social-icon-list" style={{color: '#4267B2'}}>
                                                <FontAwesomeIcon icon={['fab', 'facebook']} />                                   
                                            </li>
                                            
                                            <li className="my-social-icon-list" style={{color: '#1DA1F2'}}>
                                                <FontAwesomeIcon icon={['fab', 'twitter']} />                                    
                                            </li>
                                            <li className="my-social-icon-list" style={{color: '#E60023'}}>
                                                <FontAwesomeIcon icon={['fab', 'pinterest']} />                                   
                                            </li>
                                            <li className="my-social-icon-list" style={{color: '#2867B2'}}>
                                                <FontAwesomeIcon icon={['fab', 'linkedin']} />                                    
                                            </li>

                                        </ul> */}
                                        
                                        <p className="bookmark">
                                            <span className="card-icon"><Bookmark strokeWidth="1"/> </span>
                                        </p>

                                    </div>
                                </div>
                            </div>

                        </div>
                        
                        
                        
                        
                        
                        
                        
                        <div className="card mb-4">

                            {/* <!--Card image--> */}
                            <div className="view overlay">
                                <img className="card-img-top" src={Img4}
                                    alt="Card image cap"/>
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
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">
                                     <Link to={{
                                        pathname: `/recipe` ,
                                        search: `?q=${("fudge waffles with ice cream and chocolate sauce").replaceAll(" ", "-")}`,
                                        // state: {postId: post._id},
                                    }}
                                    className="content-title">Fudge waffles with ice cream and chocolate sauce</Link>
                                </h5>

                                <p className="card-text">Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad mi</p>

                                <div className="editor d-flex ">
                                    <div className="content-author">
                                         <Avatar/>
                                        <p>
                                            <span><small>LAURA DERN</small></span>
                                            <span className="text-muted"><small>May 08, 2021</small></span>
                                        </p>

                                    </div>
                                    <div className="content-share-icon">
                                        <p className="share">
                                            <span className="card-icon"><Share2 strokeWidth="1"/> </span>
                                        </p>
                                        {/* <ul className="my-social-icon">
                                            <li className="my-social-icon-list" style={{color: '#4267B2'}}>
                                                <FontAwesomeIcon icon={['fab', 'facebook']} />                                   
                                            </li>
                                            
                                            <li className="my-social-icon-list" style={{color: '#1DA1F2'}}>
                                                <FontAwesomeIcon icon={['fab', 'twitter']} />                                    
                                            </li>
                                            <li className="my-social-icon-list" style={{color: '#E60023'}}>
                                                <FontAwesomeIcon icon={['fab', 'pinterest']} />                                   
                                            </li>
                                            <li className="my-social-icon-list" style={{color: '#2867B2'}}>
                                                <FontAwesomeIcon icon={['fab', 'linkedin']} />                                    
                                            </li>

                                        </ul> */}
                                        
                                        <p className="bookmark">
                                            <span className="card-icon"><Bookmark strokeWidth="1"/> </span>
                                        </p>

                                    </div>

                                </div>
                            </div>

                        

                        </div>
                        

                    </div>

                </div>
                
            </section>
            
        </>
    )
}
