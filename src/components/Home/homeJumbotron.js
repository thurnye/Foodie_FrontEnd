import React from 'react'
import Bg2 from '../../public/images/jumbotron/bg2.jpeg'
import Nav from 'react-bootstrap/Nav';
import { Share2,Bookmark, Video } from 'react-feather';
import ImgHolder from '../../public/images/imgPlaceholder.jpeg'

export default function homeJumbotron() {
    return (
        <>
             <section className="home">
                <div className="jumbotron text-center" style={{backgroundImage: `url(${Bg2})`}}>
                    <div className="view overlay my-4">
                        <div className="container">
                            <div className="card jumbotron-content" >
                                <div className="card-body">
                                    <h5 className="card-title">
                                    <Nav.Link href="/" className="content-title">Mixed berry pie with fresh fruits</Nav.Link>
                                    </h5>
                                    <p className="card-text">Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad mi</p>
                                    <div className="editor d-flex ">
                                        <div className="content-author">
                                            <Nav.Link href="/" className="content-img">
                                                <img src={ImgHolder} alt="author" />
                                            </Nav.Link>
                                            <p>
                                                <span><small>LAURA DERN</small></span>
                                                <span className="text-muted"><small>May 08, 2021</small></span>
                                            </p>

                                        </div>
                                        <div className="content-share-icon">
                                        <div className="share">
                                            <p className="card-icon card-share-icon"><Share2 strokeWidth="1"/> </p>
                                            
                                        </div>
                                        
                                        
                                        <p className="bookmark">
                                            <span className="card-icon card-share-icon"><Bookmark strokeWidth="1"/> </span>
                                        </p>

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
