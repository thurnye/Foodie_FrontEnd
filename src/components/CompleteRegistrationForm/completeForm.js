import React, { useEffect, useState } from 'react';
//import jwt_decode from "jwt-decode";
import { Link } from 'react-router-dom';
import { Edit, Trash2 } from 'react-feather';
import { useSelector, useDispatch } from 'react-redux';
import { useForm, Controller } from 'react-hook-form';
import { redirect } from 'react-router-dom';
import services from '../../util/services';
import './userCompleteForm.css';
import { userActions } from '../../store/userSlice';
import Loading from '../Loading/Loading';
import { decodeJWToken } from '../../util/commons';
import { ErrorMessage } from '@hookform/error-message';
import CompTextEditor from '../CompTextEditor/CompTextEditor';
import AboutMe from './AboutMe/AboutMe';
import { Container } from '@mui/material';
import SocialMediaPlatformForm from './SocialMediaPlatform/SocialMediaPlatformForm';

export default function CompleteForm() {
  const dispatch = useDispatch();

  const author = useSelector((state) => state.userLog?.user?.user);
  const [user, setUser] = useState();
  const [aboutMe, setAboutMe] = useState();
  const [platformData, setPlatformData] = useState([]);
  const [loading, setLoading] = useState(true);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (author) {
      const { aboutMe, avatar, socialMediaPlatform } = author;
      setUser(author);
      setAboutMe({ aboutMe, avatar });
      setPlatformData(socialMediaPlatform);
      setLoading(false);
    }
  }, [author]);

  const onSubmit = async (data) => {
    try {
      const details = {
        ...data,
        ...aboutMe,
        socialMediaPlatform: platformData,
        userId: user._id
      };
      const result = await services.postEditUser(details);
      let token = result.data;
      localStorage.setItem('token', token);
      const userDoc = decodeJWToken(token);

      // store the user in redux state
      dispatch(
        userActions.login({
          user: userDoc,
        })
      );
      // redirect("/");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className='userForm'>
          <form noValidate onSubmit={handleSubmit(onSubmit)}>
            <div className='form'>
              <Container>
                <div className='received-data'>
                  <div className='row row-cols-1 row-cols-md-4 g-4'>
                    <div className='col form-fields'>
                      <label
                        htmlFor='exampleInputFirstName'
                        className='form-label'
                      >
                        First Name
                      </label>
                      <input
                        type='text'
                        className='form-control'
                        id='exampleInputFirstName'
                        aria-invalid={errors.firstName ? 'true' : 'false'}
                        {...register('firstName', {
                          required: 'required',
                          pattern: {
                            value: /^[A-Za-z]+$/i,
                            message: 'first name required',
                          },
                        })}
                        defaultValue={user.firstName}
                      />
                      {errors.firstName && (
                        <span role='alert'>{errors.firstName.message}</span>
                      )}
                    </div>
                    <div className='col form-fields'>
                      <label
                        htmlFor='exampleInputLastName'
                        className='form-label'
                      >
                        Last Name
                      </label>
                      <input
                        type='text'
                        className='form-control'
                        id='exampleInputLastName'
                        aria-invalid={errors.lastName ? 'true' : 'false'}
                        {...register('lastName', {
                          required: 'required',
                          pattern: {
                            value: /^[A-Za-z]+$/i,
                            message: 'first name required',
                          },
                        })}
                        defaultValue={user.lastName}
                      />
                      {errors.lastName && (
                        <span role='alert'>{errors.lastName.message}</span>
                      )}
                    </div>
                    <div className='col form-fields'>
                      <label
                        htmlFor='exampleInputEmail1'
                        className='form-label'
                      >
                        Email
                      </label>
                      <input
                        type='email'
                        className='form-control'
                        id='exampleInputEmail1'
                        aria-invalid={errors.email ? 'true' : 'false'}
                        {...register('email', {
                          required: 'required',
                          pattern: {
                            value: /\S+@\S+\.\S+/,
                            message: 'Please enter a valid email',
                          },
                        })}
                        defaultValue={user.email}
                      />
                      {errors.email && (
                        <span role='alert'>{errors.email.message}</span>
                      )}
                    </div>
                    <div className='col form-fields'>
                      <label
                        htmlFor='exampleInputLocation'
                        className='form-label'
                      >
                        City, Country
                      </label>
                      <input
                        type='text'
                        className='form-control'
                        id='exampleInputLocation'
                        {...register('location')}
                        defaultValue={user.location}
                      />
                    </div>
                  </div>
                </div>
              </Container>
              <hr></hr>

              {/* Social Media and Slogan */}
              <Container>
                <div className=' mb-3'>
                  <div className='row g-0'>
                    {/* SLOGAN */}
                    <legend className='legend'>Slogan / Motto</legend>
                    <div className='col-md-8 mb-4 card'>
                      <fieldset className='fieldset'>
                        <textarea
                          className='form-control'
                          id='exampleFormControlAboutMe'
                          rows='3'
                          {...register('slogan')}
                          maxLength='120'
                          placeholder='maximum characters 120'
                          defaultValue={user.slogan}
                        ></textarea>
                      </fieldset>
                    </div>

                    {/* Social Media */}
                  </div>
                </div>
              </Container>
            </div>
            <SocialMediaPlatformForm
              setData={setPlatformData}
              defaultValues={platformData}
            />

            <hr></hr>

            <AboutMe setData={setAboutMe} defaultValues={aboutMe} />

            <Container>
              <div className=' mb-3 userInformation'>
                <div className='row g-0'>
                  <div className='col-12'>
                    <div className='getForm' style={{
                      width: '100%',
                      textAlign: 'end'
                    }}>
                      <input
                        type='submit'
                        className='btn btn-dark btn-block submit-user-info'
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Container>
          </form>

        </div>
      )}
    </>
  );
}
