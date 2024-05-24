import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function mySocialMedia() {
    return (
        <>
             <div className="category-container my-social-medias mb-3 ">
                                    <div className="card-body">
                                        <h5 className="card-title category">Follow us</h5>
                                        <div className="category-items container">
                                            <ul className="my-social-icon">
                                                <li className="my-social-icon-list" >
                                                    <a href="#">
                                                        <FontAwesomeIcon icon={['fab','facebook']}/>                                   
                                                    </a>
                                                </li>
                                                
                                                <li className="my-social-icon-list" >
                                                    <a href="#">
                                                        <FontAwesomeIcon icon={['fab','twitter']}/>                                    
                                                    </a>
                                                </li>
                                                <li className="my-social-icon-list" >
                                                    <a href="#">
                                                        <FontAwesomeIcon icon={['fab','instagram']}/>                                     
                                                    </a>
                                                </li>
                                                <li className="my-social-icon-list" >
                                                    <a href="#">
                                                        <FontAwesomeIcon icon={['fab','pinterest']}/>                                   
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                
        </>
    )
}
