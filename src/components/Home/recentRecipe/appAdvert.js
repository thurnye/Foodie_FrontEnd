import React from 'react'
import Ad from '../../../public/images/adverts/ad.jpeg'

export default function appAdvert() {
    return (
        <>
              <div className="advert">
                                    <div className="card mb-3" >
                                        <div className="row g-0">
                                            <div className="col-12">
                                                <a href="#"><img src={Ad} className="img-fluid rounded-start" alt="advert"/></a>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>
                                
        </>
    )
}
