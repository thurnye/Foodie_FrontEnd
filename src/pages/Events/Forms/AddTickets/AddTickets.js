import React, {useEffect, useState}  from 'react';
import styles from './AddTickets.module.css';
import FormDirection from '../../../../components/Dashboard/Events/Forms/FormDirection/FormDirection';
import { useAddEventFormContext } from '../../../../store/formStateContext';
import TicketForm from './TicketForm';
import Tickets from './Tickets';


const secs =[
  {
    "id": 64559206548,
    "name": "General Assembly",
    "capacity": "45",
    "currency": {
      "label": "US Dollar - USD",
      "currency": "US Dollar",
      "symbol": "$"
    },
    "ticketTypes": [
      {
        "id": 33273913744,
        "name": "Test1",
        "section": "General Assembly",
        "capacity": "4",
        "price": "4",
        "salesEnd": 1,
        "period": "Hour(s)",
        "periodFrame": "Before event starts",
        "type": "Paid"
      },
      {
        "id": 48275706363,
        "name": "self",
        "section": "General Assembly",
        "capacity": "4",
        "price": "43",
        "salesEnd": 1,
        "period": "Hour(s)",
        "periodFrame": "Before event starts",
        "type": "Free"
      },
      {
        "id": 280179038640,
        "name": "Testing",
        "section": "General Assembly",
        "capacity": "3",
        "price": "32",
        "salesEnd": 1,
        "period": "Hour(s)",
        "periodFrame": "Before event starts",
        "type": "Donation"
      }
    ]
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
  console.log(sections, capacity, data)
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
