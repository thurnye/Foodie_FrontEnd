import React from 'react'
import Nav from 'react-bootstrap/Nav';
import {Link} from 'react-router-dom'
import Bg3 from '../../public/images/jumbotron/bg3.jpeg'
import Book1 from '../../public/images/books/book1.png'
import Book2 from '../../public/images/books/book2.png'
import Book3 from '../../public/images/books/book3.png'




export default function veganBooks() {
    return (
        <>
              <section className="vegan-books">
                <div className="jumbotron text-center" style={{backgroundImage: `url(${Bg3})`}}>
                    <div className="view overlay my-4">
                        <div className="container">
                            <div className="vegan-jumbotron" >
                                <div className="card-body">
                                    <h1 className="card-title">
                                    Check out my <span>newest</span> vegan recipes books 
                                    </h1>
                                    <p className="card-text">Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad mi</p>
                                
                                    <div className="card-deck vegan-book-covers">
                                        <div className="card mb-4">
                                            <div className="view overlay">
                                                <Link to="/" className="book-img">
                                                    <img className="card-img-top" src={Book1} alt="CardImageCap"/>
                                                </Link>
                                            </div>
                                        </div>
                        
                                        <div className="card mb-4">
                                            <div className="view overlay">
                                                <Link to="/" className="book-img">
                                                    <img className="card-img-top" src={Book2} alt="CardimageCap"/>
                                                </Link>
                                            </div>
                                        </div>
                                        
                                        <div className="card mb-4">
                                            <div className="view overlay">
                                                <Link to="/" className="book-img">
                                                    <img className="card-img-top" src={Book3} alt="CardImageCap"/>
                                                </Link>
                                            </div>
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
