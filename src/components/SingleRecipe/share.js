import React from 'react'
import Avatar from '../Avatar/avatar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function share() {
    return (
        <>
            <section className="share">
              <div className="card mb-3 " >
                <div className="row g-0" style={{alignItems: 'center'}}>
                    <div className="col-md-4">
                    <div className="content-share-author">
                                        <div className="share-img-container">
                                            <Avatar/>
                                        </div>
                                        <div className="card-body content-share-author-body">
                                        <p className="content-share-author-name">
                                            <span><small><b>Leo The Lion</b></small></span>
                                            <span className="card-text"><small className="text-muted">July 17th, 2021</small></span>
                                        </p>
                                        </div>
                                    </div>
                    </div>
                        <div className="col-md-8">
                            <div className="card-body content-share-items-container ">
                                <ul className="my-share-links row">
                                    <li className="list-items" style={{backgroundColor: '#4267B2'}}>
                                        <a href="#">
                                            <FontAwesomeIcon icon={['fab','facebook']} style={{color: 'white'}}/>
                                            <small className="brand-name">facebook</small>                                    
                                        </a>
                                    </li>
                                    <li className="list-items" style={{backgroundColor: '#1DA1F2'}}>
                                        <a href="#">
                                            <FontAwesomeIcon icon={['fab','twitter']} style={{color: 'white'}}/>
                                            <small className="brand-name">twitter</small>                                     
                                        </a>
                                    </li> 
                                    <li className="list-items" style={{backgroundColor: '#2867B2'}}>
                                        <a href="#">
                                            <FontAwesomeIcon icon={['fab','linkedin']} style={{color: 'white'}}/>
                                            <small className="brand-name">linkedin</small>                                      
                                        </a>
                                    </li>
                                    <li className="list-items" style={{backgroundColor: '#E60023'}}>
                                        <a href="#">
                                            <FontAwesomeIcon icon={['fab','pinterest']} style={{color: 'white'}}/>
                                            <small className="brand-name">pinterest</small>                                    
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
