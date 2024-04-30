import React from 'react'
import {Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import truncateText from '../../UI/truncate'
import AuthorFooter from '../../AuthorFooter/AuthorFooter'
import Img2 from '../../../public/images/tier3/img2.jpeg'
import Img3 from '../../../public/images/tier3/img3.jpeg'
import Img4 from '../../../public/images/tier3/img4.jpeg'
import './threeCards.css'


export default function threeCards() {

    const showCase = [
        {
            recipeName: "40 Mother’s Day Breakfast and Brunch Recipes",
            _id: '64ab7469f86e56f5d7278684',
            thumbnail: Img2,
            duration: '30 Minutes',
            level: 'Super Easy'
        },
        {
            recipeName: "Slow cooker apple cinnamon oatmeal pot",
            _id: '64ab7469f86e56f5d7278683',
            thumbnail: Img3,
            duration: '30 Minutes',
            level: 'Super Easy'
        },
        {
            recipeName: "Fudge waffles with ice cream and chocolate sauce",
            _id: '64ab7469f86e56f5d7278682',
            thumbnail: Img4,
            duration: '30 Minutes',
            level: 'Super Easy'
        }
    ]
    return (
        <>
             <section className="three-card-group">
                <div className="container">
                    <div className="card-deck"> 
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        {showCase.map((el, i) => 
                        <div className="col" key={`threeCards_${i}_${el.recipeName}`}>
                        <div className="card mb-4" key={el.recipeName}>
                            {/* <!--Card image--> */}
                            <div className="view overlay">
                                <img className="card-img-top" src={el.thumbnail}
                                    alt="Cardimagecap"/>
                                <div className="mask rgba-white-slight d-flex">
                                    <p>
                                        <span className="card-icon"><FontAwesomeIcon icon={['far', 'clock']} /> </span>
                                        <span><small><b>{el.duration}</b></small></span>
                                    </p>
                                    <p>
                                        <span className="card-icon"><FontAwesomeIcon icon={['far', 'thumbs-up']}/> </span>
                                        <span><small><b>{el.level}</b></small></span>
                                    </p>
                                </div>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">
                                <Link to={{
                                        pathname: `/recipe` ,
                                        // search: `?q=${(el.recipeName).toLocaleLowerCase().replaceAll(" ", "-")}`,
                                    }}
                                    state={{recipeId: el._id}}
                                    className="content-title">{el.recipeName}</Link>
                                </h5>

                                <p className="card-text ">{truncateText('Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad mi.Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad mi')} 
                                <Link to={{
                                        pathname: `/recipe` ,
                                        // search: `?q=${("40 mother’s day breakfast and brunch recipes").replaceAll(" ", "-")}`,
                                    }}
                                    state={{recipeId: el._id}}
                                    style={{color: '#1e8aff'}}>Read More</Link>
                                </p>
                                <AuthorFooter/>
                            </div>

                        </div>
                        </div>
                        )} 
                        </div>      
                    </div>

                </div>
                
            </section>
            
        </>
    )
}
