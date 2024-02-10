import React, {useEffect, useState}  from 'react';
import styles from './AddTickets.module.css';
import FormDirection from '../../../../components/Dashboard/Events/Forms/FormDirection/FormDirection';
import { useAddEventFormContext } from '../../../../store/formStateContext';
import TicketForm from './TicketForm';
import Tickets from './Tickets';


const secs = [
  {
      "id": 77972707076,
      "name": "General Admission",
      "capacity": "40",
      "currency": {
          "label": "US Dollar - USD",
          "currency": "US Dollar",
          "symbol": "$"
      },
      "ticketTypes": [
          {
              "id": 46569303980,
              "name": "Testing",
              "section": "General Admission",
              "capacity": "15",
              "price": "5",
              "salesEnd": 1,
              "period": "Hour(s)",
              "periodFrame": "Before event starts",
              "type": "Paid",
              "sectionId": 77972707076
          }
      ]
  },
  {
      "name": "VIP",
      "capacity": "20",
      "id": 388326920221,
      "currency": {
          "label": "US Dollar - USD",
          "currency": "US Dollar",
          "symbol": "$"
      },
      "ticketTypes": []
  },
  {
      "name": "Regular",
      "capacity": "30",
      "id": 48427895281,
      "currency": {
          "label": "US Dollar - USD",
          "currency": "US Dollar",
          "symbol": "$"
      },
      "ticketTypes": []
  }
]

const AddTickets = () => {
  const { eventBritForm, setEventBritForm } = useAddEventFormContext();
  const [data, setData] = useState();
  const [capacity, setCapacity] = useState({
    "type": "Up to 100 tickets",
    "value": 100
});
  const [proceed, setProceed] = useState(false);
  const [isCapacityEdit, setIsCapacityEdit] = useState(false);
  const [sections, setSections] = useState([...secs])

  useEffect(() => {
    if(data){
      setEventBritForm((eventBritForm) => ({ 
        ...eventBritForm, 
        tickets: data 
      }
      ));
    }

  }, [data]);


  
const onSubmit = () => {
  if(data){
    setEventBritForm((eventBritForm) => ({ 
      ...eventBritForm, 
      tickets: data 
    }
    ));
    setProceed(true)
  }
}




  return(
  <div className={styles.AddTickets}>
    {sections.length === 0 ? <>
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
    </> : 
    <><Tickets setSections={setSections}
    sections={sections} capacity={capacity} setCapacity={setCapacity}/></>
    }
    <FormDirection onSubmit={onSubmit} proceed={proceed}/>
  </div>
)};


export default AddTickets;
