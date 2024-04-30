import React from 'react'
import {useSelector} from 'react-redux'

export default function NutrientsInfo() {
    const recipe = useSelector(state => state.recipesData.singleRecipe)
    return (
        <>
           <div className="card  nutrients-info">
                <div className="nutrient-container">
                    <h5 className="text-center">Nutritional Information</h5>
                    <div className="card-body nutrients-contents container">
                        {recipe && recipe.nutritionFacts.map((el,index )=> {
                            return(
                                <p className="col-4 col-sm-4 col-md-2" key={index}>
                                <span>{el.value}{el.unit}</span>
                                <span>{el.name}</span>
                            </p>
                            )
                        }) }
                        </div>
                 </div>
            
            </div> 
        </>
    )
}
