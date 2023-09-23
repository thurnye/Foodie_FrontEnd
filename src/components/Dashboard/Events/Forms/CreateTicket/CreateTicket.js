import React, { useState, useEffect } from 'react';
import styles from './CreateTicket.module.css';
import FormDirection from '../FormDirection/FormDirection';
import { useForm, Controller } from "react-hook-form";
import { ErrorMessage } from '@hookform/error-message';
import { eventForm as formData, useAddEventFormContext } from '../../../../../store/formStateContext';
import { getRandomInt } from '../../../../../util/commons';
import { BsGear, BsTrash} from 'react-icons/bs';
import CompTextEditor from '../../../../CompTextEditor/CompTextEditor';

const CreateTicket = () => {
  const { eventForm, setEventForm } = useAddEventFormContext();
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
    setError,
    clearErrors,
  } = useForm({
    defaultValues: eventForm.tickets
  });


  const [proceed, setProceed] = useState(false);
  const [autoHideDate, setAutoHideDate] = useState(false)
  const { tickets } = eventForm;
  

  const onSubmit = async (data) => {
    try {
      const newData = data.tickets;
      const updatedData = []

      newData?.map((el, i) => {
        const oldData = tickets[i];
        updatedData.push({...oldData, ...el})
      })
      setEventForm((eventForm) => ({ ...eventForm, tickets: updatedData }));
      setProceed(true);
      reset(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    eventForm.tickets.forEach((ticket, index) => {
      const min = watch(`tickets[${index}].ticketsPerOrder.min`);
      const max = watch(`tickets[${index}].ticketsPerOrder.max`);

      if (min > max) {
        setError(`tickets[${index}].ticketsPerOrder.min`, {
          type: "minGreaterThanMax",
          message: "Minimum value must be less than or equal to Maximum value",
        });
      } else {
        clearErrors(`tickets[${index}].ticketsPerOrder.min`);
      }
    });
  }, [watch, eventForm.tickets, setError, clearErrors]);

  

  console.log(eventForm)

  return (
    <div className={styles.CreateTicket}>
      <div className={styles.sectionHeader}>
        <p className={`h1 ${styles.sectionNumber}`}>2</p>
        <p className={`h2 ${styles.sectionName}`}>Create Tickets</p>
      </div>

      <div className={styles.sectionForm}>
        <form>
          <div className="form">
            <table className="table table-hover mb-3">
              <thead>
                <tr>
                  <th scope="col">Ticket Name</th>
                  <th scope="col">Quantity Available</th>
                  <th scope="col">Price</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {eventForm.tickets.map((item, index) => {
                  const name = item.ticketName;
                  const ticketNameFieldName = `tickets[${index}].ticketName`;
                  const quantityFieldName = `tickets[${index}].quantity`;
                  const priceFieldName = `tickets[${index}].price`;
                  const collapseId = `collapse${index}`;
                  return (
                    <React.Fragment key={getRandomInt()}>
                      <tr>
                        <td>
                          <Controller
                            name={ticketNameFieldName}
                            control={control}
                            defaultValue={name}
                            rules={{
                              required: "Ticket Name is required",
                            }}
                            render={({ field }) => (
                              <input
                                type="text"
                                className={`form-control ${
                                  errors[ticketNameFieldName]
                                    ? styles.isError
                                    : ""
                                }`}
                                {...field}
                              />
                            )}
                          />
                          {errors[ticketNameFieldName] && (
                            <span className={styles.errorMessage}>
                              <ErrorMessage
                                errors={errors}
                                name={ticketNameFieldName}
                              />
                            </span>
                          )}
                        </td>

                        {/* Quantity */}
                        <td>
                          <Controller
                            name={quantityFieldName}
                            control={control}
                            defaultValue={tickets[index]['quantity']}
                            rules={{
                              required: "quantity is required",
                              min: 1,
                            }}
                            render={({ field }) => (
                              <input
                              type="number"
                              min={field.value}
                              className={`form-control ${
                                errors[quantityFieldName]
                                ? styles.isError
                                : ""
                              }`}
                              {...field}
                              />
                            )}
                          />
                          {errors[quantityFieldName] && (
                            <span className={styles.errorMessage}>
                              <ErrorMessage
                                errors={errors}
                                name={quantityFieldName}
                              />
                            </span>
                          )}
                        </td>

                        {/* Price */}
                        <td>
                          <Controller
                            name={priceFieldName}
                            control={control}
                            defaultValue={tickets[index]['price']}
                            rules={{
                              required: "Price is required",
                              min: 0,
                            }}
                            render={({ field }) => (
                              <input
                                {...field}
                                type="number"
                                min={1}
                                className={`form-control ${
                                  errors[priceFieldName] ? styles.isError : ""
                                }`}
                              />
                            )}
                          />
                          {errors[priceFieldName] && (
                            <span className={styles.errorMessage}>
                              <ErrorMessage
                                errors={errors}
                                name={priceFieldName}
                              />
                            </span>
                          )}
                        </td>

                        {/* Action */}
                        <td>
                          <div className="row">
                            <div
                              className="col"
                              data-bs-toggle="collapse"
                              href={`#${collapseId}`}
                            >
                              <BsGear />
                            </div>
                            <div className="col">
                              <BsTrash />
                            </div>
                          </div>
                        </td>
                      </tr>
                      {/* Hidden Component */}
                      <tr>
                        <td colSpan="4" className="p-0">
                          <div
                            className={`collapse ${styles.collapse}`}
                            id={collapseId}
                          >
                            <div id={`folder${index}`}>
                              <>
                                <div className='m-3'>
                                  <p> Settings for {name}</p>
                                <hr></hr>
                                </div>

                                {/* Event Ticket Description */}
                                <div className="mb-3">
                                  <label htmlFor="exampleFormControlTextarea_426" className="form-label">Ticket  Description</label>
                                  <Controller
                                    name={`tickets[${index}].ticketDescription`}
                                    control={control}
                                    defaultValue={tickets[index]['ticketDescription']}
                                    render={({ field }) => (
                                      <CompTextEditor
                                        setEditorData={(htmlValue) => field.onChange(htmlValue)}
                                        show={false}
                                        placeholder="Whats special about this ticket, Tell people to help them choose"
                                        content={field.value}
                                        className={`form-control ${ errors.TicketDescription ? styles.isError : ''}`}
                                      />
                                    )}
                                  />
                                </div>
                                
                                
                                {/* Show Ticket description */}
                                <div className="mb-3 form-check" key={index}>
                                  <Controller
                                    name={`tickets[${index}].showDescriptionOnEventPage`}
                                    control={control}
                                    defaultValue={tickets[index]['showDescriptionOnEventPage']}
                                    render={({ field }) => (
                                      <>
                                      {field.value}
                                        <input
                                          className="form-check-input"
                                          type="checkbox"
                                          id={`flexCheckIndeterminate_${index}`}
                                          defaultChecked={field.value}
                                          {...field}
                                          
                                        />
                                        <label className={`form-check-label ${styles.checkboxLabel}`} htmlFor="flexCheckIndeterminate">
                                          Show Ticket Description on Event Page
                                        </label>
                                      </>
                                    )}
                                  />
                                </div>

                                {/* Sales Channel */}
                                <div className="mb-3 ">
                                  <label htmlFor="exampleFormControlTextarea_46" className="form-label">Sales Channel</label>
                                  <div className="form-check">
                                    <Controller
                                      name={`tickets[${index}].onlineSales`}
                                      control={control}
                                      defaultValue={tickets[index]['onlineSales']}
                                      render={({ field }) => (
                                        <>
                                        {field.value}
                                          <input
                                            className="form-check-input"
                                            type="checkbox"
                                            id="flexCheckIndeterminate2wf"
                                            checked={field.value}
                                            {...field}
                                            
                                          />
                                          <label className={`form-check-label ${styles.checkboxLabel}`} htmlFor="flexCheckIndeterminate">
                                            Online Sales
                                          </label>
                                        </>
                                      )}
                                    />
                                  </div>
                                  <div className="form-check">
                                    <Controller
                                      name={`tickets[${index}].doorSales`}
                                      control={control}
                                      defaultValue={tickets[index]['doorSales']}
                                      render={({ field }) => (
                                        <>
                                        {field.value}
                                          <input
                                            className="form-check-input"
                                            type="checkbox"
                                            id="flexCheckIndeterminate2wf"
                                            checked={field.value}
                                            {...field}
                                            
                                          />
                                          <label className={`form-check-label ${styles.checkboxLabel}`} htmlFor="flexCheckIndeterminate">
                                            At the Door sales
                                          </label>
                                        </>
                                      )}
                                    />
                                  </div>
                                
                                </div>

                                {/* Ticket Timeline  */}
                                <div className={`mb-3 row ${styles.eventTime}`}>
                                  {/* Starts */}
                                  <div className="col-md-6">
                                    <label htmlFor="inputEmail_6764" className="form-label"
                                    >Ticket sales start date</label>
                                    <div className="container">
                                      <div className="row">
                                        <div className='col p-0'>
                                        <Controller
                                          name={`tickets[${index}].starts.date`}
                                          control={control}
                                          defaultValue={eventForm.eventDetails.starts.date}
                                          render={({ field }) => (
                                            <input
                                              type="date" 
                                              className={`form-control ${ errors?.starts?.date ? styles.isError : ''}`}
                                              id="eventStartDate"
                                              min={new Date()}
                                              {...field}
                                              placeholder="dd/mm/yyyy"
                                            />
                                          )}
                                        />
                                        </div>

                                        <div className='col p-0'>
                                          <Controller
                                            name={`tickets[${index}].starts.time`}
                                            control={control}
                                            defaultValue={eventForm.eventDetails.starts.time}
                                            render={({ field }) => (
                                              <input
                                                type="time" 
                                                className={`form-control ${ errors?.starts?.time ? styles.isError : ''}`}
                                                id="eventStartTime"
                                                {...field}
                                                placeholder="hh:mm"
                                              />
                                            )}
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>

                                  {/* Ends */}
                                  <div className="col-md-6">
                                    <label htmlFor="inputEmail_6754" className="form-label"
                                    >Ticket sales end date</label>
                                    <div className="container">
                                      <div className="row ">
                                        <div className='col p-0'>
                                        <Controller
                                          name={`tickets[${index}].ends.date`}
                                          control={control}
                                          defaultValue={eventForm.eventDetails.ends.date}
                                          render={({ field }) => (
                                            <input
                                              type="date" 
                                              className={`form-control ${ errors?.ends?.date ? styles.isError : ''}`}
                                              id="eventEndDate"
                                              {...field}
                                              placeholder="dd/mm/yyyy"
                                            />
                                          )}
                                        />
                                        </div>

                                        <div className='col p-0'>
                                          <Controller
                                           name={`tickets[${index}].ends.time`}
                                            control={control}
                                            defaultValue={eventForm.eventDetails.ends.time}
                                            render={({ field }) => (
                                              <input
                                                type="time" 
                                                className={`form-control ${ errors?.ends?.time ? styles.isError : ''}`}
                                                id="eventEndTime"
                                                {...field}
                                                placeholder="hh:mm"
                                              />
                                            )}
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                
                                {/* Ticket Visibility */}
                                <div className="mb-3 ">
                                  <label htmlFor="exampleFormControlTextarea_46" className="form-label">Sales Channel</label>
                                  <div className="form-check">
                                    <Controller
                                      name={`tickets[${index}].ticketVisibility`}
                                      control={control}
                                      defaultValue={tickets[index]['ticketVisibility']}
                                      render={({ field }) => (
                                        <>
                                        {field.value}
                                          <input
                                            className="form-check-input"
                                            type="checkbox"
                                            id="flexCheckIndeterminate2wf"
                                            checked={field.value}
                                            {...field}
                                            
                                          />
                                          <label className={`form-check-label ${styles.checkboxLabel}`} htmlFor="flexCheckIndeterminate">
                                            Hide this ticket type
                                          </label>
                                        </>
                                      )}
                                    />
                                  </div>
                                  <p><small className={styles.autoHideTicket} onClick={()=> setAutoHideDate(!autoHideDate)}>Add ticket auto-hide schedule</small></p>
                                </div>

                                {/* AutoHide Ticket Date  */}
                                {
                                  autoHideDate && 
                                  <div className={`mb-3 row ${styles.eventTime}`}>
                                    {/* Hide Ticket ON */}
                                    <div className="col-md-6">
                                      <label htmlFor="inputEmail_6764" className="form-label"
                                      >Auto-Hide Schedule</label>
                                      <div className="container">
                                        <div className="row">
                                          <div className='col p-0'>
                                          <Controller
                                            name={`tickets[${index}].autoHideDate.date`}
                                            control={control}
                                            render={({ field }) => (
                                              <input
                                                type="date" 
                                                className={`form-control ${ errors?.autoHideDate?.date ? styles.isError : ''}`}
                                                id="autoHideDate"
                                                min={new Date()}
                                                {...field}
                                                placeholder="dd/mm/yyyy"
                                              />
                                            )}
                                          />
                                          </div>

                                          <div className='col p-0'>
                                            <Controller
                                              name={`tickets[${index}].autoHideDate.time`}
                                              control={control}
                                              render={({ field }) => (
                                                <input
                                                  type="time" 
                                                  className={`form-control ${ errors?.autoHideDate?.time ? styles.isError : ''}`}
                                                  id="eventautoHideDateTime"
                                                  {...field}
                                                  placeholder="hh:mm"
                                                />
                                              )}
                                            />
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                }

                                {/* Tickets allowed per order */}
                                <div className={`mb-3 row ${styles.eventTime}`}>
                                  <div className="col-md-6">
                                    <label htmlFor="inputEmail_6764" className="form-label"
                                    >Ticket Allowed per Order</label>
                                    <div className="container">
                                      <div className="row">
                                        <div className='col p-0'>
                                          <Controller
                                            name={`tickets[${index}].ticketsPerOrder.min`}
                                            control={control}
                                            defaultValue={1} 
                                            rules={{ required: 'Min value must be less than Max and greater than 0', min: 1 }} 
                                            render={({ field }) => <input 
                                              {...field} 
                                              type="number" 
                                              min={1}
                                              className={`form-control `}
                                            />}
                                          />
                                          <label className={`form-check-label ${styles.checkboxLabel}`} htmlFor="flexCheckIndeterminate">
                                              Minimum
                                            </label>
                                            {errors[`tickets[${index}].ticketsPerOrder.min`] && 
                                              <span className={styles.errorMessage}>
                                                {errors[`tickets[${index}].ticketsPerOrder.min`].message}
                                              </span>
                                            }
                                        </div>
                                        <div className='col p-0'>
                                          <Controller
                                            name={`tickets[${index}].ticketsPerOrder.max`}
                                            control={control}
                                            defaultValue={10} 
                                            rules={{ required: 'Maximum value must be greater than or equal to Min.'}} 
                                            render={({ field }) => <input 
                                              {...field} 
                                              type="number" 
                                              min={1}
                                              className={`form-control `}
                                            />}
                                          />
                                          <label className={`form-check-label ${styles.checkboxLabel}`} htmlFor="flexCheckIndeterminate">
                                              Maximum
                                            </label>
                                            {errors[`tickets[${index}].ticketsPerOrder.max`] && 
                                              <span className={styles.errorMessage}>
                                                <ErrorMessage errors={errors} name={`tickets[${index}].ticketsPerOrder.max`} />
                                              </span>
                                            }
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </React.Fragment>
                  );
                })}
              </tbody>
            </table>
          </div>

          <div>
    </div> 
        </form>
      </div>

      <div className={styles.Directions}>
        <FormDirection onSubmit={handleSubmit(onSubmit)} proceed={proceed}/>
    </div>
    </div>
  );
};

export default CreateTicket;
