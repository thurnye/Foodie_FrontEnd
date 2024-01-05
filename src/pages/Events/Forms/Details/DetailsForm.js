import React,{useState} from 'react';
import FormDirection from '../../../../components/Dashboard/Events/Forms/FormDirection/FormDirection';
import { FormContainer, Input, LocationInput, ReactSelectInput, DateAndTimeInput, CheckBoxField } from '../FormContainer/FormContainer';
import SwipeableCarousel from './SwipeableCarousel'

const DetailsForm = () => {
    const [proceed, setProceed] = useState(false);
    const [eventImages, setEventImages] = useState([])

    const onSubmit = data => {
        if(data){
            console.log(data)
        }
    };
    return (
        <div>
            <FormContainer onSubmit={onSubmit}>
                <SwipeableCarousel setEventImages={setEventImages} eventImages={eventImages}/>
              <FormDirection onSubmit={() => setProceed(true)} proceed={proceed}/>
            </FormContainer>
        </div>
    );
}

export default DetailsForm;
