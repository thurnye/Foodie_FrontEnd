import React from 'react'
import {Link } from 'react-router-dom';

export default function partnership() {
    return (
        <section className="partnership container">
            {/* <div class="card mb-3" >
                <div class="row g-0">
                    <div class="col-md-4">
                        <h4>We Offer You Partnership</h4>
                    </div>
                    <div class="col-md-8">
                        <p>We love to partner with brands and products that we believe in. Drop us a note this very day!</p>
                    </div>
                    <div class="col-md-4">
                        <p>We love to partner with brands and products that we believe in. Drop us a note this very day!</p>
                    </div>
                </div>
            </div> */}
            <div className="d-flex">
            <h5>We Offer You Partnership</h5>
            <p>We love to partner with brands and products that we believe in. Drop us a note this very day!</p>
            <div className="learn-more">
            <Link to='/'>Learn More</Link>
            </div>
            </div>
        </section>
    )
}
