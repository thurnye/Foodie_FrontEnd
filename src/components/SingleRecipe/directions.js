import React from 'react'
import {useSelector} from 'react-redux'
import Headings from '../UI/heading'
import Img1 from '../../public/images/directions/img1.jpeg'
import Img2 from '../../public/images/directions/img2.jpeg'
import Img3 from '../../public/images/directions/img3.jpeg'
import Img4 from '../../public/images/directions/img4.jpeg'
import Img5 from '../../public/images/directions/img5.jpeg'
import Img6 from '../../public/images/directions/img6.png'
import Tick from '../UI/tick'

export default function Directions() {
    const recipe = useSelector(state => state.recipesData.singleRecipe)

    
    return (
        <>
            <Headings title="Directions"/>
        <section className="directions">
            {recipe && recipe.directions.map((el, index) =>{
                return(
                    <div className="order-directions" key={index}>
                    <span className="order-number">{index + 1}.</span>
                    <div className="direction-steps">
                        <h5 className="step-title">{el.title}:</h5>
                        <div className="steps">
                            <p>{el.steps}</p>
                            <div className="step-1-img">
                                <div className="row row-cols-1 row-cols-md-3 g-4">
                                    { el.imgUrl &&  el.imgUrl.map((img, idx) =>{
                                        return(
                                            <div className="col-md-3" key={idx}>
                                                <div className="card">
                                                    <img src={img} className="card-img-top" alt="step1Image"/>
                                                </div>
                                            </div>
                                        )
                                    })}
                                    {/* Remove later */}
                                    <div className="col-md-3">
                                        <div className="card">
                                            <img src={Img1} className="card-img-top" alt="step1Image"/>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="card">
                                            <img src={Img2} className="card-img-top" alt="step1Image"/>
                                        </div>
                                    </div>
                                    
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
