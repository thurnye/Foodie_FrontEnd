import React from 'react'
import ad from '../../../public/images/adverts/book.png'

export default function BookAd() {
    return (
        <div>
                <div className="card mb-3" >
                    <div className="row g-0">
                        <div className="col-12">
                            <a href="#"><img src={ad} className="img-fluid rounded-start" alt="advert"/></a>
                        </div>
                        
                    </div>
                </div>
            </div>
    )
}
