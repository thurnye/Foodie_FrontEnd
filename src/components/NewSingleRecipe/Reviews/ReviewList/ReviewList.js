import React,{useState} from 'react'
import moment from 'moment';
import {useSelector} from 'react-redux'
import Avatar from '../Avatar/avatar'
import ReactStars from "react-rating-stars-component";
import '../../public/css/reviewList.css'
// import Ratings from './ratings'
import '../../public/css/review.css'

export default function ReviewList() {
    const recipe = useSelector(state => state.recipesData.singleRecipe)


    let review;
    if(recipe){
        if(recipe.reviews.length === 0){
            review = false
        }else{
            review = true
        }
    }
    return (
        <>
                    <h5>Reviews</h5>
                {!review &&  <p><span><i>There have been no reviews on this recipe yet...</i></span></p>}
            <div className="reviewLists scroll_effect scrollspy-example" data-spy="scroll" data-target="#spy">
                <div className="container review-list">
                    {recipe && recipe.reviews.map((el, index) => {
                        return(
                            <div key={index}>         
                                <div className="container review-list-item">
                                    <div className="row row-cols-1 row-cols-md-12 g-4 review " key={index}>
                                        <div className="col">
                                            <div className="row row-cols-2 row-cols-md-2 g-4" style={{marginTop: "15px"}}>
                                                <div className="col-md-8" style={{paddingRight: "0"}}>
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
                                                    {/* <Ratings/> */}
                                                    <ReactStars
                                                        size={12}
                                                        half={true}
                                                        value={el.review.rating}
                                                        color2={"#fc6"}
                                                        edit={false}
                                                        onChange={newRating => {
                                                        console.log(newRating);
                                                        }}
                                                    />
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
                </div>
            </div>
        </>
    )
}
