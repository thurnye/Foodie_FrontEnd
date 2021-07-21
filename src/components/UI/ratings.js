import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useForm } from "react-hook-form";
import './ratings.css'



export default function Ratings() {

    const {
        register, 
      } = useForm();
    

    return (
        <div class="star-rating">
            <input type="radio" id="5-stars" name="rating" defaultValue="5" {...register("ratings")} />
            <label for="5-stars" class="star">&#9733;</label>

            <input type="radio" id="4-stars" name="rating" defaultValue="4" {...register("ratings")}/>
            <label for="4-stars" class="star">&#9733;</label>

            <input type="radio" id="3-stars" name="rating" defaultValue="3" {...register("ratings")}/>
            <label for="3-stars" class="star">&#9733;</label>

            <input type="radio" id="2-stars" name="rating" defaultValue="2" {...register("ratings")}/>
            <label for="2-stars" class="star">&#9733;</label>

            <input type="radio" id="1-star" name="rating" defaultValue="1" {...register("ratings")}/>
            <label for="1-star" class="star">&#9733;</label>
        </div>
    )
}
