import React from 'react'

export default function appAdvert({src, title}) {
    return (
        <>
            <div className="advert">
                <div className="card mb-3" >
                    <div className="row g-0">
                        <div className="col-12">
                            <a href="#"><img src={src} className="img-fluid rounded-start" alt={title}/></a>
                        </div>
                        
                    </div>
                </div>
            </div>
                                
        </>
    )
}
