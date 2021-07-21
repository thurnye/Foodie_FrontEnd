import React from 'react'
import BookAd from '../../public/images/adverts/book.png'

export default function bookAd() {
    return (
        <div className="bookAd">
                <div className="card mb-3" >
                    <div className="row g-0">
                        <div className="col-12">
                            <a href="#"><img src={BookAd} className="img-fluid rounded-start" alt="advert"/></a>
                        </div>
                        
                    </div>
                </div>
            </div>
    )
}
