import React from 'react'
import jwt_decode from "jwt-decode";
import {Link } from 'react-router-dom';
import { Edit, Trash2 } from 'react-feather';
import {useSelector, useDispatch} from 'react-redux'
import { useForm } from "react-hook-form";
import { redirect } from "react-router-dom";
import services from '../../util/services'
import Modal from './confirmDeleteModal';
import UserRecipeList from './userRecipeList';
import '../../public/css/userCompleteForm.css'
import {userActions} from '../../store/userSlice'

export default function CompleteForm() {
    const dispatch = useDispatch()

    const user = useSelector(state => state.userLog.user.user)

    const {
        register, 
        handleSubmit,
        formState: { errors },
    } = useForm();






  const onSubmit = async (data) => {
    try{
      const result =  await services.postEdit(user._id, data)
      console.log(result)
      let token = result.data
      localStorage.setItem('token', token);  
      const userDoc = jwt_decode(token); 

      // store the user in redux state
      dispatch(userActions.login({
        user: userDoc
      }))
      redirect("/");
      
    }catch(err){
      console.log(err)
    }
  };
    return (
        <div className="userForm">
            <div className="container">
                <form noValidate onSubmit={handleSubmit(onSubmit)}>
                    <div className="form">
                        <div className="received-data">
                            <div className="row row-cols-1 row-cols-md-4 g-4">
                                <div className="col form-fields">
                                    <label htmlFor="exampleInputFirstName" className="form-label">First Name</label>
                                    <input 
                                    type="text" 
                                    className="form-control" 
                                    id="exampleInputFirstName" 
                                     aria-invalid={errors.firstName ? "true" : "false"} 
                                    {...register("firstName", {
                                        required: "required",
                                        pattern: {
                                        value: /^[A-Za-z]+$/i ,
                                        message: "first name required"
                                        }
                                    })}
                                    defaultValue={user.firstName}
                                    />
                                    {errors.firstName && <span role="alert">{errors.firstName.message}</span>}
                                </div>
                                <div className="col form-fields">
                                    <label htmlFor="exampleInputLastName" className="form-label">Last Name</label>
                                    <input 
                                    type="text" 
                                    className="form-control" 
                                    id="exampleInputLastName" 
                                     aria-invalid={errors.lastName ? "true" : "false"} 
                                    {...register("lastName", {
                                        required: "required",
                                        pattern: {
                                        value: /^[A-Za-z]+$/i ,
                                        message: "first name required"
                                        }
                                    })}
                                    defaultValue={user.lastName}
                                    />
                                    {errors.lastName && <span role="alert">{errors.lastName.message}</span>}
                                </div>
                                <div className="col form-fields">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                                    <input 
                                    type="email" 
                                    className="form-control" 
                                    id="exampleInputEmail1" 
                                    aria-invalid={errors.email ? "true" : "false"}
                                    {...register("email", {
                                      required: "required",
                                      pattern: {
                                        value: /\S+@\S+\.\S+/,
                                        message: "Please enter a valid email"
                                      }
                                    })}
                                    defaultValue={user.email}
                                    />
                                    {errors.email && <span role="alert">{errors.email.message}</span>}
                                </div>
                                <div className="col form-fields">
                                    <label htmlFor="exampleInputLocation" className="form-label">City,Country</label>
                                    <input 
                                    type="text" 
                                    className="form-control" 
                                    id="exampleInputLocation" 
                                    {...register("location")} 
                                    />
                                </div>
                                
                            </div>
                        </div>
                        <hr></hr>
                        {/* Social Media and Slogan */}
                        <div className="card mb-3" >
                            <div className="row g-0">
                                {/* SLOGAN */}
                                <div className="col-md-4">
                                    <fieldset className="fieldset">
                                        <legend className="legend">Slogan / Motto</legend>
                                        <textarea 
                                    className="form-control" 
                                    id="exampleFormControlAboutMe" 
                                    rows="3"
                                    {...register("slogan")}
                                    maxLength="120"
                                    placeholder="maximum characters 120"
                                    ></textarea>
                                    </fieldset>
                                </div>
                                <div className="col-md-8">
                                    {/* Social Media */}
                                    <div className="data-social-media">
                                        <fieldset className="fieldset">
                                            <legend className="legend">Social Media Links</legend>
                                            <div className="row row-cols-2 row-cols-md-4 g-4">
                                                <div className="col form-fields">
                                                    <label htmlFor="exampleInputFacebook" className="form-label">Facebook</label>
                                                    <input 
                                                    type="url" 
                                                    className="form-control" 
                                                    id="exampleInputFacebook" 
                                                    {...register("facebook")} 
                                                    />
                                                </div>
                                                <div className="col form-fields">
                                                    <label htmlFor="exampleInputTwitter" className="form-label">Twitter</label>
                                                    <input 
                                                    type="url" 
                                                    className="form-control" 
                                                    id="exampleInputTwitter" 
                                                    {...register("twitter")} 
                                                    />
                                                </div>
                                                <div className="col form-fields">
                                                    <label htmlFor="exampleInputLinkedIn" className="form-label">LinkedIn</label>
                                                    <input 
                                                    type="url" 
                                                    className="form-control" 
                                                    id="exampleInputLinkedIn" 
                                                    {...register("linkedIn")} 
                                                    />
                                                </div>
                                                <div className="col form-fields">
                                                    <label htmlFor="exampleInputPinterest" className="form-label">Pinterest</label>
                                                    <input 
                                                    type="url" 
                                                    className="form-control" 
                                                    id="exampleInputPinterest" 
                                                    {...register("pinterest")} 
                                                    />
                                                </div>
                                            </div>
                                        </fieldset>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                      
                        <hr></hr>
                        {/* BIO */}
                        <div className="card mb-3 userInformation" >
                            <div className="row g-0">
                                {/* ABOUT ME, RESOURCES */}
                                <div className="col-md-6">
                                    {/* TAB BUTTONS */}
                                    <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                                        <li className="nav-item" role="presentation">
                                            <button className=" pill-btn btn-warning nav-link active" id="pills-about-me-tab" data-bs-toggle="pill" data-bs-target="#pills-about-me" type="button" role="tab" aria-controls="pills-about-me" aria-selected="true">About Me</button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className=" pill-btn btn-warning nav-link" id="pills-my-resources-tab" data-bs-toggle="pill" data-bs-target="#pills-my-resources" type="button" role="tab" aria-controls="pills-my-resources" aria-selected="false">My Resources</button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className=" pill-btn btn-warning nav-link" id="pills-resource-list-tab" data-bs-toggle="pill" data-bs-target="#pills-resource-list" type="button" role="tab" aria-controls="pills-resource-list" aria-selected="false">Resources List</button>
                                        </li>
                                    </ul>

                                    {/* Error handling for pills tabs */}
                                    <p style={{color: 'salmon'}}>{errors.aboutMe && <span  role="alert">{errors.aboutMe.message}</span>}</p>
                                    <p style={{color: 'salmon'}}>{errors.myResources && <span  role="alert">{errors.myResources.message}</span>}</p>
                                    {/* End of errow handling */}

                                        {/* ABOUT ME ITEM, RESOURCES ITEM */}
                                    <div className="tab-content" id="pills-tabContent">
                                        {/* ABOUT ME */}
                                        <div className="tab-pane fade show active" id="pills-about-me" role="tabpanel" aria-labelledby="pills-about-me-tab">
                                            <label htmlFor="exampleFormControlAboutMe" className="form-label text-muted">let us know about you</label>
                                            <textarea 
                                            className="form-control" 
                                            id="exampleFormControlAboutMe" 
                                            rows="20"
                                            aria-invalid={errors.aboutMe ? "true" : "false"}
                                            {...register("aboutMe", {
                                            required: "About me field is required"
                                            })}
                                            ></textarea>
                                            
                                        </div>
                                        
                                        {/* MY RESOURCE */}
                                        <div className="tab-pane fade" id="pills-my-resources" role="tabpanel" aria-labelledby="pills-my-resources-tab">
                                        <label htmlFor="exampleFormControlMyResources" className="form-label text-muted">what inspires you for your recipes method</label>
                                            <textarea 
                                            className="form-control" 
                                            id="exampleFormControlMyResources" 
                                            rows="20"
                                            aria-invalid={errors.myResources ? "true" : "false"}
                                            {...register("myResources", {
                                            required: "My Resources field is required",
                                            })}
                                            ></textarea>
                                        </div>
                                        
                                        {/* MY SOURCE LIST */}
                                        <div className="tab-pane fade" id="pills-resource-list" role="tabpanel" aria-labelledby="pills-resource-list-tab">
                                            <label htmlFor="exampleFormControlResourcesList" className="form-label text-muted">list resources use or external sources</label>

                                        </div> 
                                    </div>

                                    <div className="getForm">  
                                    <input type="submit" className="btn btn-dark btn-block submit-user-info"/>

                                    </div>
                                </div>
                                
                                
                                
                                {/* MY RECIPE LIST */}
                                <div className="col-md-6 user-recipe-list">
                                    <UserRecipeList />
                                   
                                </div>
                            </div>
                        </div>

                    </div>
                    
                </form>
            </div>
        </div>
    )
}
