import React, { useState } from 'react';
import styles from './AddTickets.module.css';
import { useAddEventFormContext } from '../../../../../store/formStateContext';
import TicketForm from './TicketForm';
import Tickets from './Tickets';
import FormDirection from '../../../../Forms/FormDirection/FormDirection';

const AddTickets = () => {
  const { eventForm, setEventForm } = useAddEventFormContext();
  const [data, setData] = useState();
  const [capacity, setCapacity] = useState(eventForm.tickets.capacity);
  const [proceed, setProceed] = useState(false);
  const [isCapacityEdit, setIsCapacityEdit] = useState(false);
  const [sections, setSections] = useState(eventForm.tickets.sections);

  console.log(eventForm);

  // useEffect(() => {
  //   if(data){
  //     setEventForm((eventForm) => ({
  //       ...eventForm,
  //       tickets: data
  //     }
  //     ));
  //   }

  // }, [data]);

  const onSubmit = () => {
    if (sections.length > 0) {
      const data = {
        ...eventForm,
        tickets: {
          capacity,
          sections,
        },
      };
      setEventForm(data);
      setProceed(true);
    }
  };

  console.log(sections);

  return (
    <div className={styles.AddTickets}>
      {sections.length === 0 ? (
        <>
          <TicketForm
            data={data}
            setData={setData}
            capacity={capacity}
            setCapacity={setCapacity}
            isCapacityEdit={isCapacityEdit}
            setIsCapacityEdit={setIsCapacityEdit}
            setSections={setSections}
            sections={sections}
          />
        </>
      ) : (
        <>
          <Tickets
            setSections={setSections}
            sections={sections}
            capacity={capacity}
            setCapacity={setCapacity}
          />
        </>
      )}

      <FormDirection onSubmit={onSubmit} proceed={proceed} />
    </div>
  );
};

export default AddTickets;
