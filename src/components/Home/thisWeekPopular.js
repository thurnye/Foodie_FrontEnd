import React from 'react'
import {Link } from 'react-router-dom';

import Ppl1 from '../../public/images/popular/ppl1.jpeg'
import Ppl2 from '../../public/images/popular/ppl2.jpeg'
import Ppl3 from '../../public/images/popular/ppl3.jpeg'
import Ppl4 from '../../public/images/popular/ppl4.jpeg'
import Ppl5 from '../../public/images/popular/ppl5.jpeg'
import Ppl6 from '../../public/images/popular/ppl6.jpeg'
import Ppl7 from '../../public/images/popular/ppl7.jpeg'
import Ppl8 from '../../public/images/popular/ppl8.jpeg'
import Ppl9 from '../../public/images/popular/ppl9.jpeg'
import Ppl10 from '../../public/images/popular/ppl10.jpeg'
import Ppl11 from '../../public/images/popular/ppl11.jpeg'
import Ppl12 from '../../public/images/popular/ppl12.jpeg'

export default function thisWeekPopular() {
    return (
        <>
            <section className="popular-this-week">
                <div className="container popular-container">
                    <span></span>
                    <h5>The most popular recipes this week</h5>
                    <span></span>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                            <div className="card">
                                <img className="card-img-top" src={Ppl1} alt="popularThisWeek"/>
                                <div className="card-body popular-body">
                                    <h6 className="card-title popular-week-title ">
                                        <Link to={{
                                        pathname: `/recipe` ,
                                        search: `?q=${("marshmallow light and easy cake").replaceAll(" ", "-")}`,
                                        // state: {postId: post._id},
                                    }}>Marshmallow light and easy cake</Link>
                                        
                                    </h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                            <div className="card">
                                <img className="card-img-top" src={Ppl2} alt="popularThisWeek"/>
                                <div className="card-body popular-body">
                                    <h6 className="card-title popular-week-title">
                                        <Link to={{
                                        pathname: `/recipe` ,
                                        search: `?q=${("cupcakes with pistachio pudding").replaceAll(" ", "-")}`,
                                        // state: {postId: post._id},
                                    }}>Cupcakes with pistachio pudding</Link>
                                        
                                    </h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                            <div className="card">
                                <img className="card-img-top" src={Ppl3} alt="popularThisWeek"/>
                                <div className="card-body popular-body">
                                    <h6 className="card-title popular-week-title">
                                        <Link to={{
                                        pathname: `/recipe` ,
                                        search: `?q=${("baked chicken legs with garlic and Dijon").replaceAll(" ", "-")}`,
                                        // state: {postId: post._id},
                                    }}>Baked chicken legs with garlic and Dijon</Link>
                                        
                                    </h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                            <div className="card">
                                <img className="card-img-top" src={Ppl4} alt="popularThisWeek"/>
                                <div className="card-body popular-body">
                                    <h6 className="card-title popular-week-title">
                                        <Link to={{
                                        pathname: `/recipe` ,
                                        search: `?q=${("crench onion soup with veggie stock").replaceAll(" ", "-")}`,
                                        // state: {postId: post._id},
                                    }}>French onion soup with veggie stock</Link>
                                        
                                    </h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                            <div className="card">
                                <img className="card-img-top" src={Ppl5} alt="popularThisWeek"/>
                                <div className="card-body popular-body">
                                    <h6 className="card-title popular-week-title">
                                        <Link to={{
                                        pathname: `/recipe` ,
                                        search: `?q=${("make chicken paella in under an hour").replaceAll(" ", "-")}`,
                                        // state: {postId: post._id},
                                    }}>Make chicken paella in under an hour</Link>
                                        
                                    </h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                            <div className="card">
                                <img className="card-img-top" src={Ppl6} alt="popularThisWeek"/>
                                <div className="card-body popular-body">
                                    <h6 className="card-title popular-week-title">
                                        <Link to={{
                                        pathname: `/recipe` ,
                                        search: `?q=${("pumpkin soup with cheese and cinnamon").replaceAll(" ", "-")}`,
                                        // state: {postId: post._id},
                                    }}>Pumpkin soup with cheese and cinnamon</Link>
                                        
                                    </h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                            <div className="card">
                                <img className="card-img-top" src={Ppl7} alt="popularThisWeek"/>
                                <div className="card-body popular-body">
                                    <h6 className="card-title popular-week-title">
                                        <Link to={{
                                        pathname: `/recipe` ,
                                        search: `?q=${("easy ground beef recipes with bacon").replaceAll(" ", "-")}`,
                                        // state: {postId: post._id},
                                    }}>Easy ground beef recipes with bacon</Link>
                                        
                                    </h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                            <div className="card">
                                <img className="card-img-top" src={Ppl8} alt="popularThisWeek"/>
                                <div className="card-body popular-body">
                                    <h6 className="card-title popular-week-title">
                                        <Link to={{
                                        pathname: `/recipe` ,
                                        search: `?q=${("avocado toast with valerianella and egg").replaceAll(" ", "-")}`,
                                        // state: {postId: post._id},
                                    }}>Avocado toast with valerianella and egg</Link>
                                        
                                    </h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                            <div className="card">
                                <img className="card-img-top" src={Ppl9} alt="popularThisWeek"/>
                                <div className="card-body popular-body">
                                    <h6 className="card-title popular-week-title">
                                        <Link to={{
                                        pathname: `/recipe` ,
                                        search: `?q=${("how to make fast margherita pizza").replaceAll(" ", "-")}`,
                                        // state: {postId: post._id},
                                    }}>How to make fast margherita pizza</Link>
                                        
                                    </h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                            <div className="card">
                                <img className="card-img-top" src={Ppl10} alt="popularThisWeek"/>
                                <div className="card-body popular-body">
                                    <h6 className="card-title popular-week-title">
                                        <Link to={{
                                        pathname: `/recipe` ,
                                        search: `?q=${("avocado toast with spinach and egg").replaceAll(" ", "-")}`,
                                        // state: {postId: post._id},
                                    }}>Avocado toast with spinach and egg</Link>
                                        
                                    </h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                            <div className="card">
                                <img className="card-img-top" src={Ppl11} alt="popularThisWeek"/>
                                <div className="card-body popular-body">
                                    <h6 className="card-title popular-week-title">
                                        <Link to={{
                                        pathname: `/recipe` ,
                                        search: `?q=${("deliciously spicy Thai chili crab recipe").replaceAll(" ", "-")}`,
                                        // state: {postId: post._id},
                                    }}>Deliciously spicy Thai chili crab recipe</Link>
                                        
                                    </h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                            <div className="card">
                                <img className="card-img-top" src={Ppl12} alt="popularThisWeek"/>
                                <div className="card-body popular-body">
                                    <h6 className="card-title popular-week-title">
                                        <Link to={{
                                        pathname: `/recipe` ,
                                        search: `?q=${("creamy potato soup with almond milk").replaceAll(" ", "-")}`,
                                        // state: {postId: post._id},
                                    }}>Creamy potato soup with almond milk</Link>
                                        
                                    </h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        
        </>
    )
}
