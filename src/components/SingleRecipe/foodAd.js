import React from 'react'
import HealthyFood from '../../public/images/adverts/healthyFood.jpeg'
import Breakfast from '../../public/images/adverts/breakfast.jpeg'

export default function foodAdvert() {
    return (
        <>
            <div className="foodAd">
                <div className="card mb-3" >
                    <div className="row g-0">
                        <div className="col-12 foodAd-container">
                            <a href="#"><img src={HealthyFood} className="img-fluid rounded-start" alt="advert"/></a>
                        </div>
                        <div className="col-12 foodAd-container">
                            <a href="#"><img src={Breakfast} className="img-fluid rounded-start" alt="advert"/></a>
                        </div>
                        
                    </div>
                </div>
            </div>
                                
        </>
    )
}
