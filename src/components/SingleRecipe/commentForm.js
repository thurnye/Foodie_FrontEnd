import React from 'react'
import Nav from 'react-bootstrap/Nav';
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import {useSelector, useDispatch} from 'react-redux'
import Heading from '../UI/heading';
// import services from '../util/services'

export default function CommentForm()  {
  const user = useSelector(state => state.userLog.user)
  const history = useHistory();
  const {
    register, 
    handleSubmit,
    formState: { errors },
  } = useForm();


    const onChange = (e) => {
      // this.setState({ [e.target.name]: e.target.value });
    }
    
    const onSubmit = async (data) => {
      console.log(data)
      // try{
      //   const result = await services.create(data)
      //   console.log(result)
        
      //   let token = result.data
      //   localStorage.setItem('token', token);  
      //   const userDoc = jwt_decode(token); 
  
      //   // store the user in redux state
      //   dispatch(userActions.login({
      //     user: userDoc
      //   }))
      //   history.push("/");
      // }catch(err){
      //   console.log(err)
      // }
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
                <div class="star-rating">
                  <input type="radio" id="5-stars" name="rating" defaultValue="5" {...register("ratings")} />
                  <label for="5-stars" class="star">&#9733;</label>

                  <input type="radio" id="4-stars" name="rating" defaultValue="4" {...register("ratings")} />
                  <label for="4-stars" class="star">&#9733;</label>

                  <input type="radio" id="3-stars" name="rating" defaultValue="3" {...register("ratings")}/>
                  <label for="3-stars" class="star">&#9733;</label>

                  <input type="radio" id="2-stars" name="rating" defaultValue="2" {...register("ratings")} />
                  <label for="2-stars" class="star">&#9733;</label>

                  <input type="radio" id="1-star" name="rating" defaultValue="1" {...register("ratings")}/>
                  <label for="1-star" class="star">&#9733;</label>
                </div>
              </div>
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
                        value: /^[A-Za-z]+$/i ,
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
