import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Ratings() {
    return (
        <>
            <div className="rating">
                <span className="rating-star"><FontAwesomeIcon icon={['far', 'star']} /> </span>
                <span className="rating-star"><FontAwesomeIcon icon={['far', 'star']} /> </span>
                <span className="rating-star"><FontAwesomeIcon icon={['far', 'star']} /> </span>
                <span className="rating-star"><FontAwesomeIcon icon={['far', 'star']} /> </span>
                <span className="rating-star"><FontAwesomeIcon icon={['far', 'star']} /> </span>
            </div>
        </>
    )
}
