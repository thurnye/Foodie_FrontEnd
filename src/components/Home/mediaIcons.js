import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export default function mediaIcons() {
    return (
        <>
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

            </ul>  
        </>
    )
}
