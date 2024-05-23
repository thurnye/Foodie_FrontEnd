import React, { useEffect, useState } from 'react'
//import jwt_decode from "jwt-decode";
import {Link } from 'react-router-dom';
import { Edit, Trash2 } from 'react-feather';
import {useSelector, useDispatch} from 'react-redux'
import { useForm, Controller } from "react-hook-form";
import { redirect } from "react-router-dom";
import services from '../../util/services'
import '../../public/css/userCompleteForm.css'
import {userActions} from '../../store/userSlice'
import Loading from '../Loading/Loading';
import {decodeJWToken} from '../../util/commons'
import { ErrorMessage } from '@hookform/error-message';
import CompTextEditor from '../CompTextEditor/CompTextEditor';




export default function CompleteForm() {
    const dispatch = useDispatch()

    const author = useSelector(state => state.userLog?.user?.user)
    const [user, setUser] = useState()
    const [loading, setLoading] = useState(true);
    const {
        control,
        register, 
        handleSubmit,
        formState: { errors },
    } = useForm();

    useEffect(() => {
        if(author){
            setUser(author)
            setLoading(false);
        }
    },[author])





  const onSubmit = async (data) => {
    try{
        console.log(data);
      const result =  await services.postEdit(user._id, data)
      console.log(result)
      let token = result.data
      localStorage.setItem('token', token);  
      const userDoc = decodeJWToken(token); 
        
      // store the user in redux state
      dispatch(userActions.login({
        user: userDoc
      }))
    //   redirect("/");
      
    }catch(err){
      console.log(err)
    }
  };
    return (
        <>
        { loading ? <Loading/> :
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
                            {console.log(user.aboutMe)}
                            <div className="card mb-3 userInformation" >
                                <Controller
                                    name="aboutMe"
                                    control={control}
                                    rules={{
                                        required: "This field is required",
                                    }}
                                    defaultValue={user?.aboutMe}
                              
                                    render={({ field }) => (
                                    <CompTextEditor
                                        setEditorData={(htmlValue) => field.onChange(htmlValue)}
                                        show={true}
                                        placeholder="We want to know about you, your recipe sources, and whats your inspiration, etc..."
                                        content={field.value}
                                        className={`form-control`}
                                    />
                                    )}
                                />
                                {errors.aboutMe && 
                                    <span className="text-danger">
                                        <ErrorMessage errors={errors} name="aboutMe" className="text-danger" />
                                    </span>
                                }
                                <div className="row g-0">
                                    <div className="col-md-6">

                                        <div className="getForm">  
                                        <input type="submit" className="btn btn-dark btn-block submit-user-info"/>

                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        
                    </form>
                </div>
            </div>
            }
        </>
    )
}
