import React from 'react'
// import {Link } from 'react-router-dom';
// import Avatar from '../../public/images/imgPlaceholder.jpeg'
import Avatar from '../Avatar/avatar'
import Signature from '../../public/images/signature.png'

export default function aboutMe() {
    return (
        <>
            <div className="category-container  mb-3 ">
                <div className="card-body">
                    <h5 className="card-title category">ABOUT ME</h5>
                    <div className="about-me-container container">
                        <div className="about-me-avatar"><Avatar/></div>
                        <h4>Hi! I’m Leo.</h4>
                        <p>I create simple, delicious recipes that require 10 ingredients or less, one bowl, or 30 minutes or less to prepare.</p>
                        <img src={Signature} alt="author-avatar" style={{width: '100%'}}/>
                    </div>
                </div>
            </div>
                                
        </>
    )
}
