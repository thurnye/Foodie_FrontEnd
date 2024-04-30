import React from 'react'
import {Link} from 'react-router-dom'
import Bg4 from '../../public/images/jumbotron/bg4.png'

export default function forumAd() {
    return (
        <>
            <section className="forum">
                <div className="container">
                    <div className="card text-center" style={{backgroundImage: `url(${Bg4})`}}>
                        <div className="view overlay my-4">
                            <div className="container ">
                                <div className="forum-card">
                                    <div className="card-body forum-content">
                                        <h2 className="card-title h2-responsive forum-title">Easy Meals Forum</h2>
                                        <h5>
                                            <span className="forum-data">186.281 users, </span>
                                            <span className="forum-data">184.853 recipes, </span>
                                            <span className="forum-data">1.432.915 photos</span>
                                        </h5>
                                        <div className="join-forum">
                                            <Link to="/" className="content-title btn  btn-warning">Join Now!</Link>
                                        </div>
                                    </div>
                                </div>
                                    
                            </div>
                                
                        </div>
                    </div>
                </div>
            </section>
             
        </>
    )
}
