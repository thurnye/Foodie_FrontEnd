import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './footer.css'

export default function footer() {
    return (
        <>
            <footer className="footer">
                <div className="footer-container">
                    <p>&#169; 2021 Tamunotonye Daniel All Rights Reserved</p>
                    <ul className="my-social-icon">
                        <li className="my-social-icon-list" style={{color: '#4267B2'}}>
                            <FontAwesomeIcon icon={['fab', 'facebook']} />                                   
                        </li>
                        <li className="my-social-icon-list" style={{color: '#1DA1F2'}}>
                            <FontAwesomeIcon icon={['fab', 'twitter']} />                                    
                        </li>
                        <li className="my-social-icon-list" style={{color: '#E60023'}}>
                            <FontAwesomeIcon icon={['fab', 'pinterest']} />                                   
                        </li>
                        <li className="my-social-icon-list" style={{color: '#2867B2'}}>
                            <FontAwesomeIcon icon={['fab', 'linkedin']} />                                    
                        </li>
                        <li className="my-social-icon-list" style={{color: '#2867B2'}}>
                            <FontAwesomeIcon icon={['fab', 'instagram']} />                                    
                        </li>

                    </ul>
                </div>
            </footer>   
        </>
    )
}
