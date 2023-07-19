import React from 'react'
import Nav from 'react-bootstrap/Nav';
import {Link} from 'react-router-dom'
import Bg3 from '../../../public/images/jumbotron/bg3.jpeg'
import Book1 from '../../../public/images/books/book1.png'
import Book2 from '../../../public/images/books/book2.png'
import Book3 from '../../../public/images/books/book3.png'




export default function veganBooks() {

    const books = [
        {
            name: 'book1',
            image: Book1,
            link: '/'
        },
        {
            name: 'book2',
            image: Book2,
            link: '/'
        },
        {
            name: 'book3',
            image: Book3,
            link: '/'
        }
    ];

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
                                
                                    <div className="card-deck vegan-book-covers row row-cols-1 row-cols-md-3 g-4">
                                        {books.map((el, i) => 
                                            <div className="card mb-4 col" key={`book_${i}_${el.name}`}>
                                                <div className="view overlay" key={el.name}>
                                                    <Link to={el.link} className="book-img">
                                                        <img className="card-img-top" src={el.image} alt="CardImageCap"/>
                                                    </Link>
                                                </div>
                                            </div>
                                        )}
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
