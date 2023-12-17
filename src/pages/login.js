import React from 'react';
import jwt_decode from "jwt-decode";
import { useForm } from "react-hook-form";
import { redirect } from "react-router-dom";
import {useDispatch} from 'react-redux';
import services from '../util/services'
import Nav from 'react-bootstrap/Nav';
import {Link} from 'react-router-dom'
import {userActions } from '../store/userSlice'


export default function LogInUser() {
   const dispatch = useDispatch()
  const {
    register, 
    handleSubmit,
    formState: { errors },
  } = useForm();


  const onSubmit = async (data) => {
    try{
      const result = await services.postLogin(data)
      
      let token = result.data
      console.log(token.length);
      localStorage.setItem('token', token);  
      const userDoc = jwt_decode(token); 

      // store the user in redux state
      dispatch(userActions.login({
        user: userDoc
      }))
      redirect("/");
    }catch(err){
      console.log({err})
    }
  };
  
     return (
        <React.Fragment>
          <section className="guest">
            <div className="sign-up">
              <div className="card" style= {{width: "30rem"}} >
                <div className="card-header">
                  <h5 className="card-firstName">Login into your account</h5>
                  <hr></hr>
                </div>
                <div className="card-body">
                  <form noValidate onSubmit={handleSubmit(onSubmit)}>
                    <div className="form">
                      {/* Email */}
                      <div className="form-group row">
                        <label  className="col-sm-3 col-form-label">Email</label>
                        <div className="col-sm-9">
                          <input
                            id="email"
                            className="form-control"
                            aria-invalid={errors.email ? "true" : "false"}
                            {...register("email", {
                              required: "required",
                              pattern: {
                                value: /\S+@\S+\.\S+/,
                                message: "Please enter a valid email"
                              }
                            })}
                            type="email"
                            placeholder="example@mail.com"
                          />
                            {errors.email && <span role="alert">{errors.email.message}</span>}
                        </div>
                      </div>


                      {/* Password */}
                      <div className="form-group row">
                        <label  className="col-sm-3 col-form-label">Password</label>
                        <div className="col-sm-9">
                          <input
                            id="password"
                            className="form-control"
                            aria-invalid={errors.password ? "true" : "false"}
                            {...register("password", {
                              required: "required",
                              minLength: {
                                value: 5,
                                message: "min length is 5"
                              }
                            })}
                            type="password"
                            placeholder="password"
                          />
                          {errors.password && <span role="alert">{errors.password.message}</span>}
                        </div>
                      </div>

                    </div>
                    <div className="getForm">  
                      <button type="submit" className="btn">Login</button>
                    </div>
                  </form>
                  <p className="createAccount">
                    <span><small>Don't have an account?</small></span>
                    <span><small><Link to="/signup" style={{color: '#0077c8'}}>Create An Account</Link></small></span>
                  </p>
                </div>
                
              </div>
            </div>
            </section>
        </React.Fragment>
    )
}





