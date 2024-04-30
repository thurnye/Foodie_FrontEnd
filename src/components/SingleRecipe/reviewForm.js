import React, {useState} from 'react'
import { useForm } from "react-hook-form";
import { redirect, Link } from "react-router-dom";
import {useSelector, useDispatch} from 'react-redux'
import Heading from '../UI/heading';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import services from '../../util/services'

export default function ReviewForm()  {
  const user = useSelector(state => state.userLog.user)
  const recipe = useSelector(state => state.recipesData.singleRecipe)
  
  // const history = useHistory();

  const [ratingErr, setRatingErr] =  useState(null)

  const {
    register, 
    handleSubmit,
    formState: { errors },
  } = useForm();

  
  const onSubmit = async (data) => {
    try{
      const ratings = data.ratings

      if(!ratings){  //if ratings !== null
        setRatingErr('*rating is required')
      }else{
        setRatingErr(null)
        
        const review= {
          ...data, 
          userId: user.user._id,
          recipeId: recipe._id
        }
        console.log(review)

        const result = await services.postReview(review)
        console.log(result)
        // refresh the page if the status is 200
      }
    }catch(err){
      console.log(err)
    }
  };


  return(
    <React.Fragment>
        
      <div className="review-form">
      <div className="recommend-heading">
        <h5>Let us know how you like it</h5>
            </div>
        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <div className="rating">
            <h6><small className="text-muted">Rating:</small></h6>
            <div className="star-rating">
              <input type="radio" id="5-stars" name="rating" defaultValue="5" {...register("ratings")} />
              <label htmlFor="5-stars" className="star">&#9733;</label>

              <input type="radio" id="4-stars" name="rating" defaultValue="4" {...register("ratings")} />
              <label htmlFor="4-stars" className="star">&#9733;</label>

              <input type="radio" id="3-stars" name="rating" defaultValue="3" {...register("ratings")}/>
              <label htmlFor="3-stars" className="star">&#9733;</label>

              <input type="radio" id="2-stars" name="rating" defaultValue="2" {...register("ratings")} />
              <label htmlFor="2-stars" className="star">&#9733;</label>

              <input type="radio" id="1-star" name="rating" defaultValue="1" {...register("ratings")}/>
              <label htmlFor="1-star" className="star">&#9733;</label>
            </div>
            {/* rating error message */}
          </div>
            {ratingErr && <div className="ratingErr"><span role="alert" >{ratingErr}</span></div>}
          <div className="form">
            <div className="form-group row">
              <div className="col-sm-9">
                <textarea
                id="review"
                className="form-control"
                aria-invalid={errors.review ? "true" : "false"} 
                {...register("review", {
                  required: "*Please add your review to submit*",
                  pattern: {
                    message: "Review required"
                  }
                })}
                type="text"
                placeholder="your review*"
                rows="10"></textarea>
                {errors.review && <span role="alert" style={{color: 'salmon'}}>{errors.review.message}</span>}
                <div className="getReview"> 
          {!user && <Link to="/login" className="btn btn-dark btn-block">Post Review</Link>}
          {user && <button className="btn btn-dark btn-block" type="submit">Post Review</button>}
          {/* <button className="btn btn-dark btn-block" type="submit">Post Review</button> */}
          </div>
              </div>
            </div>
          </div>
          
        </form>
      </div>
      <hr/>
    </React.Fragment>
  )

}  
