import React from 'react'
import {useSelector} from 'react-redux'
import Headings from '../UI/heading'
import Tick from '../UI/tick'

export default function Directions() {
    const recipe = useSelector(state => state.recipesData.singleRecipe)
    console.log(recipe);

    
    return (
        <>
            <Headings title="Directions"/>
        <section className="directions">
            {recipe && recipe.directions.map((el, index) =>{
                const {title, steps, imageUrl} = el
                return(
                    <div className="order-directions" key={index}>
                    <span className="order-number">{index + 1}.</span>
                    <div className="direction-steps">
                        <h5 className="step-title">{title}:</h5>
                        <div className="steps">
                            <p>{steps}</p>
                            <div className="step-1-img">
                                <div className="row row-cols-1 row-cols-md-3 g-4">
                                    {imageUrl?.map((img, idx) =>{
                                        return(
                                            <div className="col-md-3" key={idx}>
                                                <div className="card">
                                                    <img src={img} className="card-img-top" alt="step1Image"/>
                                                </div>
                                            </div>
                                        )
                                    })}
                                    
                                </div>
                            </div>
                            <p className="step-complete">
                                <Tick/> Mark as Complete
                            </p>
                            
                        </div>
                    </div>
                    
                </div>
               
                
                )
            })}
        </section>
        </>
    )
}
