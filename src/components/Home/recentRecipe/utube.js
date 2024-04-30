import React from 'react'
import UTube from '../../../public/images/adverts/utube.png'

export default function utube() {
    return (
        <>
            <div className="advert">
                <div className="card mb-3" >
                    <div className="row g-0">
                        <div className="col-12">
                            <a href="#"><img src={UTube} className="img-fluid rounded-start" alt="youtube"/></a>
                        </div>
                        
                    </div>
                </div>
            </div>           
                              
        </>
    )
}
