import React, {useState, useEffect, useMemo} from 'react';
import styles from './EventDetails.module.css';
import { useForm, Controller, useFieldArray } from "react-hook-form";
import { ErrorMessage } from '@hookform/error-message';
import CompTextEditor from '../../../../CompTextEditor/CompTextEditor';
import Dropzone from 'react-dropzone'
import {LiaCameraRetroSolid} from 'react-icons/lia';
import {MdOutlineCancel} from 'react-icons/md';
import { convertToBase64 } from '../../../../../util/commons';
import { useAddEventFormContext } from '../../../../../store/formStateContext';
import FormDirection from '../FormDirection/FormDirection'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { renderTimeViewClock } from '@mui/x-date-pickers/timeViewRenderers';


const EventDetails = () => {
  const { eventForm, setEventForm } = useAddEventFormContext()
  const {
    control,
    register, 
    handleSubmit,
    formState: { errors },
    reset,
    watch
  } = useForm({
    defaultValues: eventForm.eventDetails, // Use eventForm directly
  });

  const { append, remove } = useFieldArray({
    control,
    name: "fAQs",
  });


  const [proceed, setProceed] = useState(false);

  const onSubmit = async (data) => {
    try{

      setEventForm((eventForm) => ({ 
        ...eventForm, 
        eventDetails: data 
      }
      ));
      setProceed(true)
      reset(data); 
      console.log(data)
    }catch(err){
      console.log(err)
    }
  };

  console.log(errors)

  return(
    <div className={styles.EventDetails}>
      {/* Section 1: Event Details */}
      <div className={styles.sectionHeader}>
        <p className={`h1 ${styles.sectionNumber}`}>1</p>
        <p className={`h2 ${styles.sectionName}`}>Event Details</p>
      </div>

      <div className={styles.sectionForm}>
        <form>
          <div className="form">
            {/* Event Title */}
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput_4" className="form-label">Event Title</label>
              <Controller
                name="eventTitle"
                control={control}
                autoFocus
                rules={{
                  required: "Event title is required",
                }}
                render={({ field }) => (
                  <input
                    autoFocus
                    type="text"
                    className={`form-control ${ errors.eventTitle ? styles.isError : ''}`}
                    placeholder="Give it a short distinct name"
                    {...field}
                  />
                )}
              />
              {errors.eventTitle && 
                <span className={styles.errorMessage}>
                  <ErrorMessage errors={errors} name="eventTitle" />
                </span>
              }
            </div>

            {/* Event Location */}
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput_7861" className="form-label">Location</label>
              <Controller
                name="location"
                control={control}
                rules={{
                  required: "Event location title is required",
                }}
                render={({ field }) => (
                  <input
                    type="text"
                    className={`form-control ${ errors.location ? styles.isError : ''}`}
                    id="exampleFormControlInput1"
                    placeholder="Specify where it's held"
                    {...field}
                  />
                )}
              />
              {errors.location && 
                <span className={styles.errorMessage}>
                  <ErrorMessage errors={errors} name="location" />
                </span>
              }
              {/* IsOnline */}
              <div className="form-check">
                <Controller
                  name="isOnline"
                  control={control}
                  render={({ field }) => (
                    <>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="flexCheckIndeterminate"
                        checked={field.value}
                        {...field}
                      />
                      <label className="form-check-label" htmlFor="flexCheckIndeterminate">
                        Online Event
                      </label>
                    </>
                  )}
                />
                <label className="form-check-label" htmlFor="flexCheckIndeterminate_8979">
                  Online Event
                </label>
              </div>
            </div>

            {/* Event Time  */}
            <div className={`mb-3 row ${styles.eventTime}`}>
              {/* Starts */}
              <div className="col-md-6">
                <label htmlFor="inputEmail_6764" className="form-label"
                >STARTS</label>
                <div className="container">
                  <div className="row ">
                    <div className='col p-0'>
                      <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DemoContainer components={['DateTimePicker', 'DateTimePicker']}>
                          <Controller
                            name="starts"
                            control={control}
                            defaultValue={null}
                            render={({ field }) => (
                              <DateTimePicker
                                {...field}
                                fullWidth
                                margin="small"
                                id="date-picker"
                                value={field.value}
                                onChange={(date) => field.onChange(date)}
                                viewRenderers={{
                                  hours: renderTimeViewClock,
                                  minutes: renderTimeViewClock,
                                }}
                                minDate={new Date()}
                                error={!!errors.starts}
                                helperText={errors.starts?.message}
                              />
                            )}
                          />
                        </DemoContainer>
                      </LocalizationProvider>

                    {errors?.starts && 
                      <span className={styles.errorMessage}>
                        <ErrorMessage errors={errors} name="starts" />
                      </span>
                    }
                    </div>
                  </div>
                </div>
              </div>

              {/* Ends */}
              <div className="col-md-6">
                <label htmlFor="inputEmail_6754" className="form-label"
                >ENDS</label>
                <div className="container">
                  <div className="row ">
                    <div className='col p-0'>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DemoContainer components={['DateTimePicker', 'DateTimePicker']}>
                          <Controller
                            name="ends"
                            control={control}
                            defaultValue={null}
                            render={({ field }) => (
                              <DateTimePicker
                                {...field}
                                fullWidth
                                margin="small"
                                id="date-picker"
                                value={field.value}
                                onChange={(date) => field.onChange(date)}
                                viewRenderers={{
                                  hours: renderTimeViewClock,
                                  minutes: renderTimeViewClock,
                                }}
                                minDate={new Date()}
                                // className={`form-control ${ errors?.ends ? styles.isError : ''}`}
                              />
                            )}
                          />
                        </DemoContainer>
                      </LocalizationProvider>
                    {errors?.ends && 
                      <span className={styles.errorMessage}>
                        <ErrorMessage errors={errors} name="ends" />
                      </span>
                    }
                    </div>
                  </div>
                </div>
              </div>
              
              <Controller
                name="repeat"
                control={control}
                render={({ field }) => (
                  <div>
                    <div className={` mb-3 ${styles.repeatEvent}`}>
                      <input 
                      className="form-check-input" 
                      type="checkbox" 
                      id="flexCheckIndeterminate"
                      checked={field.value}
                      {...field}
                      />
                      <label className="form-check-label" htmlFor="flexCheckIndeterminate_8979">
                        Repeat Event
                      </label>
                    </div>
                  {field.value ? <div>
                    <label htmlFor="inputEmail_6764" className="form-label">Frequency</label>
                    <select 
                    className="form-select" 
                    aria-label="Default select example" 
                    {...register("frequency",{
                      required: field.value ? 'Frequency period is needed' : false
                    })}>
                      <option value="weekly" selected>Weekly</option>
                      <option value="monthly">Monthly</option>
                      <option value="quarterly">Quarterly</option>
                      <option value="Annually">Annually</option>
                    </select>
                  </div> : null}
                  </div>
                )}
              />
            </div>
            
            {/* Event Image */}
            <div className={`mb-3`}>
              <label htmlFor="eventImage_6764" className="form-label">Event Image</label>
              <Controller
                name="thumbnail"
                control={control}
                rules={{
                  required: "Event image/banner is required",
                }}
                render={({ field }) => (
                  <>
                    <Dropzone
                      multiple={false}
                      onDrop={async (acceptedFiles) => {
                        // Handle file upload and set the thumbnail value
                        field.onChange(await convertToBase64(acceptedFiles[0]));
                      }}
                    >
                      {({ getRootProps, getInputProps }) => (
                        <div 
                        {...getRootProps()} 
                        className={`${styles.dropZoneContainer} ${ errors.thumbnail ? styles.isError : ''}`}
                        >
                          <input {...getInputProps()} />
                          {!field.value ? (
                            <div className="card">
                              <div className={`card-body ${styles.DropZoneCard} `}>
                                <p className={`h1 ${styles.dropZoneIcon}`}>
                                  <LiaCameraRetroSolid />
                                </p>
                                <p className="h3">ADD AN EVENT IMAGE</p>
                                <h6 className="card-subtitle mb-2 text-body-secondary small">
                                  Choose a beautiful image that perfectly captures your event.
                                </h6>
                              </div>
                            </div>
                          ) : (
                            <div className="card">
                              <div className={`card-body ${styles.DropZoneCard}`}>
                                <img src={field.value} className="card-img" alt="event_banner" />
                              </div>
                            </div>
                          )}
                        </div>
                      )}
                    </Dropzone>
                  </>
                )}
              />
              {errors.thumbnail && 
                <span className={styles.errorMessage}>
                  <ErrorMessage errors={errors} name="thumbnail" />
                </span>
              }
            </div>
            
            {/* Event description  and FAQs*/}
            <div className="mb-3">
              <label htmlFor="exampleFormControlTextarea_456" className="form-label">Event Description</label>
              <Controller
                name="eventDescription"
                control={control}
                rules={{
                  required: "Event Description is required",
                }}
                render={({ field }) => (
                  <CompTextEditor
                    setEditorData={(htmlValue) => field.onChange(htmlValue)}
                    show={false}
                    placeholder="Tell people what's special about this event"
                    content={field.value}
                    className={`form-control ${ errors.eventDescription ? styles.isError : ''}`}
                  />
                )}
              />
              {errors.eventDescription && 
                <span className={styles.errorMessage}>
                  <ErrorMessage errors={errors} name="eventDescription" />
                </span>
              }
              {/* Add FAQs */} 
              <Controller
                name="addFAQs"
                control={control}
                render={({ field }) => (
                  <div>
                    <div className="form-check mb-2">
                      <input
                        className="form-check-input "
                        type="checkbox"
                        id="flexCheckDefault_989"
                        checked={field.value}
                        {...field}
                      />
                      <label className="form-check-label" htmlFor="flexCheckDefault">
                        Add FAQs
                      </label>
                    </div>
                    {field.value ? (
                      <>
                        <p className="h3">FAQs</p>
                        {watch("fAQs").map((item, index) => (
                          <div key={index}>
                            <div className="step-del mb-0">
                              <h6>No. {index + 1}</h6>
                              {watch("fAQs").length > 1 && (
                                <MdOutlineCancel
                                  strokeWidth="1"
                                  size="25"
                                  color="salmon"
                                  onClick={() => remove(index)} 
                                />
                              )}
                            </div>
                            <div className="container">
                              <div className={`mb-3 row ${styles.eventTime}`}>
                                <div className="col-md-6">
                                  <label
                                    htmlFor={`fAQs[${index}].ques`}
                                    className="form-label"
                                  >
                                    Question
                                  </label>
                                  <textarea
                                    className={`form-control method-steps ${
                                      errors.fAQs?.[index]?.ques ? styles.isError : ""
                                    }`}
                                    id={`fAQs[${index}].ques`}
                                    rows="2"
                                    {...register(`fAQs[${index}].ques`, {
                                      required: field.value ? "FAQ is required" : false,
                                    })}
                                    placeholder="Tell people what are your refund policies, dress code, key timings etc."
                                  ></textarea>
                                  {watch("fAQs").length > 0 && errors.fAQs?.[index]?.ques && (
                                    <span className={styles.errorMessage}>
                                      <ErrorMessage
                                        errors={errors}
                                        name={`fAQs[${index}].ques`}
                                        message={`fAQs[${index}].ques`}
                                      />
                                    </span>
                                  )}
                                </div>

                                <div className="col-md-6">
                                  <label
                                    htmlFor={`fAQs[${index}].ans`}
                                    className="form-label"
                                  >
                                    Answer
                                  </label>
                                  <textarea
                                    className={`form-control method-steps ${
                                      errors.fAQs?.[index]?.ans ? styles.isError : ""
                                    }`}
                                    id={`fAQs[${index}].ans`}
                                    rows="2"
                                    {...register(`fAQs[${index}].ans`, {
                                      required: field.value ? 'FAQ answer is required' : false
                                    })} 
                                  ></textarea>
                                  {watch("fAQs").length > 0 && errors.fAQs?.[index]?.ans && (
                                    <span className={styles.errorMessage}>
                                      <ErrorMessage
                                        errors={errors}
                                        name={`fAQs[${index}].ans`}
                                        message={`fAQs[${index}].ans`}
                                      />
                                    </span>
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                        <div className="row">
                          <div className="col col-md-10 text-right">
                            <button
                              type="button"
                              className="btn btn-link"
                              onClick={() => append({ ques: "", ans: "" })} // Use the append function from react-hook-form
                            >
                              Add New
                            </button>
                          </div>
                        </div>
                      </>
                    ) : null}
                  </div>
                )}
              />
            </div>
            
            {/* Event Organiser */}
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput_4" className="form-label">Organiser Name</label>
              <Controller
                name="organiserName"
                control={control}
                rules={{
                  required: "Event organiser is required",
                }}
                render={({ field }) => (
                  <input
                    type="text"
                    id="exampleFormControlInput1"
                    placeholder="Who's organising this event?"
                    className={`form-control ${ errors.organiserName ? styles.isError : ''}`}
                    {...field}
                  />
                )}
              />
              {errors.organiserName && 
                <span className={styles.errorMessage}>
                  <ErrorMessage errors={errors} name="organiserName" />
                </span>
              }
            </div>

            {/* Event Organiser Description */}
            <div className="mb-3">
              <label htmlFor="exampleFormControlTextarea_426" className="form-label">ORGANISER DESCRIPTION</label>
              <Controller
                name="organiserDescription"
                control={control}
                rules={{
                  required: "organiser description is required",
                }}
                render={({ field }) => (
                  <CompTextEditor
                    setEditorData={(htmlValue) => field.onChange(htmlValue)}
                    show={false}
                    placeholder="Tell people what's special about this event"
                    content={field.value}
                    className={`form-control ${ errors.organiserDescription ? styles.isError : ''}`}
                  />
                )}
              />
              {errors.organiserDescription && 
                <span className={styles.errorMessage}>
                  <ErrorMessage errors={errors} name="organiserDescription" />
                </span>
              }
            </div>

            {/* Event External Links */}
            <div className="mb-3 form-check">
              <Controller
                name="includeLinks"
                control={control}
                render={({ field }) => (
                  <>
                  {field.value}
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="flexCheckIndeterminate"
                      checked={field.value}
                      {...field}
                      
                    />
                    <label className="form-check-label" htmlFor="flexCheckIndeterminate">
                      Include links to Social Media platforms
                    </label>
                  </>
                )}
              />
              <label className="form-check-label" htmlFor="flexCheckIndeterminate_8979">
                Include links to Social Media platforms
              </label>
            </div>

          </div>
        </form>
      </div>

      <div className={styles.Directions}>
        <FormDirection onSubmit={handleSubmit(onSubmit)} proceed={proceed}/>
      </div> 
    </div>
  )
};


export default EventDetails;
