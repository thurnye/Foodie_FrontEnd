import React from 'react'
import moment from 'moment';
import {useSelector} from 'react-redux'
import Avatar from '../Avatar/avatar'
import Ratings from './ratings'
import '../../public/css/review.css'

export default function ReviewList() {
    const recipe = useSelector(state => state.recipesData.singleRecipe)
    // const reviews = recipe.reviews
    // recipe && recipe.reviews.map(el => {
    //     console.log(el.review.review)
    //     console.log(el.review.userId)
    // })
    // the mark is 170 length
    // if it is less than 130 do not show, if it greater than 130 && less than 170 show few less 
    return (
        <>
            {recipe && recipe.reviews.map((el, index) => {
                return(
                    <div key={index}>         
                        {/* <h5>Reviews</h5> */}
                        <div className="container">
                            <div className="row row-cols-1 row-cols-md-12 g-4 review " key={index}>
                                <div className="col">
                                    <div className="row row-cols-2 row-cols-md-2 g-4" style={{marginTop: "15px"}}>
                                        <div className="col-md-8" >
                                            <div className="content-share-author">
                                                <div className="share-img-container">
                                                    <Avatar img={recipe.author.avatar}/>
                                                </div>
                                                <div className="card-body content-share-author-body">
                                                    <p className="content-share-author-name">
                                                        <span><small><b>{el.review.userId.firstName} {el.review.userId.lastName}</b></small></span>
                                                        <span className="card-text"><small className="text-muted">{moment(el.review.createdAt.toString()).format('MMM Do, YYYY')}</small></span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        {/* rating */}
                                        <div className="col-md-4 review-ratings">
                                            <Ratings/>
                                        </div>      
                                    </div>
                                </div>
                                {/* comment */}
                                <div className="col reviewComment">
                                    <p>{el.review.review}</p>
                                </div>  
                            </div>   
                        </div>
                    </div>    
                )
            })}
        </>
    )
}
