import React, {useState} from 'react'
import Nav from 'react-bootstrap/Nav';
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import {useSelector, useDispatch} from 'react-redux'
import Heading from '../UI/heading';
import services from '../../util/services'

export default function CommentForm()  {
  const user = useSelector(state => state.userLog.user)
  const history = useHistory();

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
        
        const comment= {
          ...data, 
          userId: user.user._id
          // recipeId: ''  --> add the recipe Id
        }

        const result = await services.postComment(comment)
        console.log(result)
      }
          
      
      // let token = result.data
      // localStorage.setItem('token', token);  
      // const userDoc = jwt_decode(token); 

      // // store the user in redux state
      // dispatch(userActions.login({
      //   user: userDoc
      // }))
      // history.push("/");
    }catch(err){
      console.log(err)
    }
  };


  return(
    <React.Fragment>
      <div className="comment-form">
        <div className="comment-heading">
          <Heading title="Leave a Reply"/>
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
                id="comment"
                className="form-control"
                aria-invalid={errors.comment ? "true" : "false"} 
                {...register("comment", {
                  required: "*Please add your comment to submit*",
                  pattern: {
                    message: "Comment required"
                  }
                })}
                type="text"
                placeholder="your comment*"
                rows="10"></textarea>
                {errors.comment && <span role="alert" style={{color: 'salmon'}}>{errors.comment.message}</span>}
              </div>
            </div>
          </div>
          <div className="getComment"> 
          {/* {!user && <Nav.Link href="/login" className="btn btn-dark btn-block">Post Comment</Nav.Link>} */}
          {/* {user && <button className="btn btn-dark btn-block" type="submit">Post Comment</button>} */}
          <button className="btn btn-dark btn-block" type="submit">Post Comment</button>
          </div>
        </form>
      </div>
      <hr/>
    </React.Fragment>
  )

}  
