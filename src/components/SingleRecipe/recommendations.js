import React from 'react'
import Nav from 'react-bootstrap/Nav';
import {Link } from 'react-router-dom';
import Heading from '../UI/heading'
import img1 from '../../public/images/recommendation/img1.jpeg'
import img2 from '../../public/images/recommendation/img2.jpeg'
import img3 from '../../public/images/recommendation/img3.jpeg'
import img4 from '../../public/images/recommendation/img4.jpeg'

export default function recommendations() {
    return (
        <section className="recommendation">
            <div className="recommend-heading">
                <Heading title="You may like these too"/>
            </div>
            <div className="row row-cols-1 row-cols-md-4 row-cols-sm-2">
                <div className="col mb-4">
                    <div className="card">
                        <div className="view overlay">
                            <img className="card-img-top" src={img1} alt="recommendationImage"/>
                        </div>
                        <div className="card-body  recommendation-body">
                            
                            <h6 className="card-title">
                            
                            <Link to={{
                                        pathname: `/recipe` ,
                                        search: `?q=${("overnight oatmeal and fig for breakfast weight loss").replaceAll(" ", "-")}`,
                                        // state: {postId: post._id},
                                    }}>Overnight oatmeal and fig for breakfast weight loss</Link>
                            </h6>
                        </div>
                    </div>
                </div>
                <div className="col mb-4">
                    <div className="card">
                        <div className="view overlay">
                            <img className="card-img-top" src={img2} alt="recommendationImage"/>
                        </div>
                        <div className="card-body  recommendation-body">
                            
                            <h6 className="card-title">
                            
                            <Link to={{
                                        pathname: `/recipe` ,
                                        search: `?q=${("smoked tofu salad with spicy peanut sauce").replaceAll(" ", "-")}`,
                                        // state: {postId: post._id},
                                    }}>Smoked tofu salad with spicy peanut sauce</Link>
                            </h6>
                        </div>
                    </div>
                </div>
                <div className="col mb-4">
                    <div className="card">
                        <div className="view overlay">
                            <img className="card-img-top" src={img3} alt="recommendationImage"/>
                        </div>
                        <div className="card-body  recommendation-body">
                            
                            <h6 className="card-title">
                            
                            <Link to={{
                                        pathname: `/recipe` ,
                                        search: `?q=${("5 antioxidant-powered smoothie recipes").replaceAll(" ", "-")}`,
                                        // state: {postId: post._id},
                                    }}>5 antioxidant-powered smoothie recipes</Link>
                            </h6>
                        </div>
                    </div>
                </div>
                <div className="col mb-4">
                    <div className="card">
                        <div className="view overlay">
                            <img className="card-img-top" src={img4} alt="recommendationImage"/>
                        </div>
                        <div className="card-body  recommendation-body">
                            
                            <h6 className="card-title">
                            
                            <Link to={{
                                        pathname: `/recipe` ,
                                        search: `?q=${("stuffed avocado with vegetables and fruit").replaceAll(" ", "-")}`,
                                        // state: {postId: post._id},
                                    }}>Stuffed avocado with vegetables and fruit</Link>
                            </h6>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}
