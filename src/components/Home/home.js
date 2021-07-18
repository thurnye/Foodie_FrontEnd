import React from 'react';
import {useSelector} from 'react-redux'
import Nav from 'react-bootstrap/Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Share2,Bookmark, Video } from 'react-feather';
import $ from 'jquery'

import JumbotronImg1 from '../../public/images/img1.jpeg'
import ImgHolder from '../../public/images/imgPlaceholder.jpeg'
import Img2 from '../../public/images/img2.jpeg'
import Img3 from '../../public/images/img3.jpeg'
import Img4 from '../../public/images/img4.jpeg'
import Img5 from '../../public/images/img5.jpeg'
import Book1 from '../../public/images/book1.png'
import Book2 from '../../public/images/book2.png'
import Book3 from '../../public/images/book3.png'
import Img6 from '../../public/images/img6.jpeg'
import Img7 from '../../public/images/img7.jpeg'
import Img8 from '../../public/images/img8.jpeg'
import Img9 from '../../public/images/img9.jpeg'
import Img10 from '../../public/images/img10.jpeg'
import Img11  from '../../public/images/img11.jpeg'
import Img12 from '../../public/images/img12.jpeg'
import Img13 from '../../public/images/img13.jpeg'
import Cat1 from '../../public/images/cat1.png'
import Cat2 from '../../public/images/cat2.png'
import Cat3 from '../../public/images/cat3.png'
import Cat4 from '../../public/images/cat4.png'
import Cat5 from '../../public/images/cat5.png'
import Cat6 from '../../public/images/cat6.png'
import Rp1 from '../../public/images/rp1.jpeg'
import Rp2 from '../../public/images/rp2.jpeg'
import Rp3 from '../../public/images/rp3.jpeg'
import Ad from '../../public/images/ad.jpeg'
import UTube from '../../public/images/utube.png'
import Bg3 from '../../public/images/bg3.jpeg'
import Bg4 from '../../public/images/bg4.png'
import Mg1 from '../../public/images/magazines/mg1.png'
import Mg2 from '../../public/images/magazines/mg2.png'
import Mg3 from '../../public/images/magazines/mg3.png'
import Mg4 from '../../public/images/magazines/mg4.png'
import Mg5 from '../../public/images/magazines/mg5.png'
import Mg6 from '../../public/images/magazines/mg6.png'
import Ppl1 from '../../public/images/popular/ppl1.jpeg'
import Ppl2 from '../../public/images/popular/ppl2.jpeg'
import Ppl3 from '../../public/images/popular/ppl3.jpeg'
import Ppl4 from '../../public/images/popular/ppl4.jpeg'
import Ppl5 from '../../public/images/popular/ppl5.jpeg'
import Ppl6 from '../../public/images/popular/ppl6.jpeg'
import Ppl7 from '../../public/images/popular/ppl7.jpeg'
import Ppl8 from '../../public/images/popular/ppl8.jpeg'
import Ppl9 from '../../public/images/popular/ppl9.jpeg'
import Ppl10 from '../../public/images/popular/ppl10.jpeg'
import Ppl11 from '../../public/images/popular/ppl11.jpeg'
import Ppl12 from '../../public/images/popular/ppl12.jpeg'


import './home.css'
const Home = () => {
    const user = useSelector(state => state.userLog.user)
 
    

    return (
        <>
            <section className="home">
                <div className="jumbotron text-center" style={{backgroundImage: `url(${JumbotronImg1})`}}>
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
                                            <p className="card-icon"><Share2 strokeWidth="1"/> </p>
                                            
                                        </div>
                                        {/* <ul className="my-social-icon">
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

                                        </ul> */}
                                        
                                        <p className="bookmark">
                                            <span className="card-icon"><Bookmark strokeWidth="1"/> </span>
                                        </p>

                                    </div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        
                    </div>
                </div>

            </section>

            <section className="three-card-group">
                <div className="container">
                    <div className="card-deck">
                        <div className="card mb-4">
                            <div className="view overlay">
                                <img className="card-img-top" src={Img2} alt="CardImageCap"/>
                                <div className="mask rgba-white-slight d-flex">
                                    <p>
                                        <span className="card-icon"><FontAwesomeIcon icon={['far', 'clock']} /> </span>
                                        <span><small><b>30 MINUTES</b></small></span>
                                    </p>
                                    <p>
                                        <span className="card-icon"><FontAwesomeIcon icon={['far', 'thumbs-up']} /> </span>
                                        <span><small><b>SUPER EASY</b></small></span>
                                    </p>
                                </div>
                            </div>

                            <div className="card-body">
                                <h5 className="card-title">
                                <Nav.Link href="/" className="content-title">40 Mother’s Day Breakfast and Brunch Recipes</Nav.Link>
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
                                            <p className="card-icon"><Share2 strokeWidth="1"/> </p>
                                            
                                        </div>
                                        {/* <ul className="my-social-icon">
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

                                        </ul> */}
                                        
                                        <p className="bookmark">
                                            <span className="card-icon"><Bookmark strokeWidth="1"/> </span>
                                        </p>

                                    </div>
                                </div>
                            </div>

                        </div>
        
                        <div className="card mb-4">

                            {/* <!--Card image--> */}
                            <div className="view overlay">
                                <img className="card-img-top" src={Img3}
                                    alt="Cardimagecap"/>
                                <div className="mask rgba-white-slight d-flex">
                                    <p>
                                        <span className="card-icon"><FontAwesomeIcon icon={['far', 'clock']} /> </span>
                                        <span><small><b>30 MINUTES</b></small></span>
                                    </p>
                                    <p>
                                        <span className="card-icon"><FontAwesomeIcon icon={['far', 'thumbs-up']} /> </span>
                                        <span><small><b>SUPER EASY</b></small></span>
                                    </p>
                                </div>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">
                                <Nav.Link href="/" className="content-title">Slow cooker apple cinnamon oatmeal pot</Nav.Link>
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
                                        <p className="share">
                                            <span className="card-icon"><Share2 strokeWidth="1"/> </span>
                                        </p>
                                        {/* <ul className="my-social-icon">
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

                                        </ul> */}
                                        
                                        <p className="bookmark">
                                            <span className="card-icon"><Bookmark strokeWidth="1"/> </span>
                                        </p>

                                    </div>
                                </div>
                            </div>

                        </div>
                        
                        <div className="card mb-4">

                            {/* <!--Card image--> */}
                            <div className="view overlay">
                                <img className="card-img-top" src={Img4}
                                    alt="Card image cap"/>
                                <div className="mask rgba-white-slight d-flex">
                                    <p>
                                        <span className="card-icon"><FontAwesomeIcon icon={['far', 'clock']} /> </span>
                                        <span><small><b>30 MINUTES</b></small></span>
                                    </p>
                                    <p>
                                        <span className="card-icon"><FontAwesomeIcon icon={['far', 'thumbs-up']} /> </span>
                                        <span><small><b>SUPER EASY</b></small></span>
                                    </p>
                                </div>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">
                                <Nav.Link href="/" className="content-title">Fudge waffles with ice cream and chocolate sauce</Nav.Link>
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
                                        <p className="share">
                                            <span className="card-icon"><Share2 strokeWidth="1"/> </span>
                                        </p>
                                        {/* <ul className="my-social-icon">
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

                                        </ul> */}
                                        
                                        <p className="bookmark">
                                            <span className="card-icon"><Bookmark strokeWidth="1"/> </span>
                                        </p>

                                    </div>

                                </div>
                            </div>

                        

                        </div>
                        

                    </div>

                </div>
                
            </section>
            
            <section className="vegan-books">
                <div className="jumbotron text-center" style={{backgroundImage: `url(${Img5})`}}>
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
                                                <Nav.Link href="/" className="book-img">
                                                    <img className="card-img-top" src={Book1} alt="CardImageCap"/>
                                                </Nav.Link>
                                            </div>
                                        </div>
                        
                                        <div className="card mb-4">
                                            <div className="view overlay">
                                                <Nav.Link href="/" className="book-img">
                                                    <img className="card-img-top" src={Book2} alt="CardimageCap"/>
                                                </Nav.Link>
                                            </div>
                                        </div>
                                        
                                        <div className="card mb-4">
                                            <div className="view overlay">
                                                <Nav.Link href="/" className="book-img">
                                                    <img className="card-img-top" src={Book3} alt="CardImageCap"/>
                                                </Nav.Link>
                                            </div>
                                        </div>
                                        

                                    </div>

                                </div>
                            </div>
                            
                        </div>
                        
                    </div>
                </div>
            </section>

            <section className="recent-recipe">
            <div className="recipe-intro container">
                <h3>Recent recipes</h3>
                <div className="strokes"></div>
            </div>
            <div className="recipes container">
                    <div className="card mb-3">
                        <div className="row g-0">
                            <div className="col-md-8 recipes-card-container">
                                <div className="card mb-3 recipe-card">
                                    <div className="row g-0">
                                        <div className="col-md-5 recipe-card-img">
                                            <img src={Img6} className="img-fluid rounded-start" alt="recipe"/>
                                        </div>
                                        <div className="col-md-7">
                                            <div className="card-body recipe-card-content">
                                                <div className="mask rgba-white-slight d-flex">
                                                    <p>
                                                        <span className="card-icon"><Video strokeWidth="2" size="15"/> </span>
                                                        <span><small><b> 0 : 30</b></small></span>
                                                    </p>
                                                    
                                                </div>
                                                <h5 className="card-title content-title">The best fluffy buttermilk pancakes with triple berry sauce</h5>
                                                <p className="card-text">Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad mi</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="card mb-3 recipe-card">
                                    <div className="row g-0">
                                        <div className="col-md-5 recipe-card-img">
                                            <img src={Img7} className="img-fluid rounded-start" alt="recipe"/>
                                        </div>
                                        <div className="col-md-7">
                                            <div className="card-body recipe-card-content">
                                                <div className="mask rgba-white-slight d-flex">
                                                    <p>
                                                        <span className="card-icon"><FontAwesomeIcon icon={['far', 'clock']} /> </span>
                                                        <span><small><b>30 MINUTES</b></small></span>
                                                    </p>
                                                    <p>
                                                        <span className="card-icon"><FontAwesomeIcon icon={['far', 'thumbs-up']} /> </span>
                                                        <span><small><b>SUPER EASY</b></small></span>
                                                    </p>
                                                </div>
                                                <h5 className="card-title content-title">Chocolate banana pancakes</h5>
                                                <p className="card-text">Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad mi</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="card mb-3 recipe-card">
                                    <div className="row g-0">
                                        <div className="col-md-5 recipe-card-img">
                                            <img src={Img8} className="img-fluid rounded-start" alt="recipe"/>
                                        </div>
                                        <div className="col-md-7">
                                            <div className="card-body recipe-card-content">
                                                <div className="mask rgba-white-slight d-flex">
                                                <p>
                                                        <span className="card-icon"><Video strokeWidth="2" size="15"/> </span>
                                                        <span><small><b> 0 : 30</b></small></span>
                                                    </p>
                                                </div>
                                                <h5 className="card-title content-title">Cinnamon french toast with cream cheese glaze and berry syrup</h5>
                                                <p className="card-text">Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad mi</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="card mb-3 recipe-card">
                                    <div className="row g-0">
                                        <div className="col-md-5 recipe-card-img">
                                            <img src={Img9} className="img-fluid rounded-start" alt="recipe"/>
                                        </div>
                                        <div className="col-md-7">
                                            <div className="card-body recipe-card-content">
                                                <div className="mask rgba-white-slight d-flex">
                                                    <p>
                                                        <span className="card-icon"><FontAwesomeIcon icon={['far', 'clock']} /> </span>
                                                        <span><small><b>30 MINUTES</b></small></span>
                                                    </p>
                                                    <p>
                                                        <span className="card-icon"><FontAwesomeIcon icon={['far', 'thumbs-up']} /> </span>
                                                        <span><small><b>SUPER EASY</b></small></span>
                                                    </p>
                                                </div>
                                                <h5 className="card-title content-title">Peanut butter pancakes</h5>
                                                <p className="card-text">Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad mi</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            
                                <div className="card mb-3 recipe-card">
                                    <div className="row g-0">
                                        <div className="col-md-5 recipe-card-img">
                                            <img src={Img10} className="img-fluid rounded-start" alt="recipe"/>
                                        </div>
                                        <div className="col-md-7">
                                            <div className="card-body recipe-card-content">
                                                <div className="mask rgba-white-slight d-flex">
                                                <p>
                                                        <span className="card-icon"><Video strokeWidth="2" size="15"/> </span>
                                                        <span><small><b> 0 : 30</b></small></span>
                                                    </p>
                                                </div>
                                                <h5 className="card-title content-title">Traditional French breakfast croissant and coffee</h5>
                                                <p className="card-text">Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad mi</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            
                                <div className="card mb-3 recipe-card">
                                    <div className="row g-0">
                                        <div className="col-md-5 recipe-card-img">
                                            <img src={Img11} className="img-fluid rounded-start" alt="recipe"/>
                                        </div>
                                        <div className="col-md-7">
                                            <div className="card-body recipe-card-content">
                                                <div className="mask rgba-white-slight d-flex">
                                                    <p>
                                                        <span className="card-icon"><FontAwesomeIcon icon={['far', 'clock']} /> </span>
                                                        <span><small><b>30 MINUTES</b></small></span>
                                                    </p>
                                                    <p>
                                                        <span className="card-icon"><FontAwesomeIcon icon={['far', 'thumbs-up']} /> </span>
                                                        <span><small><b>SUPER EASY</b></small></span>
                                                    </p>
                                                </div>
                                                <h5 className="card-title content-title">One-pot pasta primavera</h5>
                                                <p className="card-text">Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad mi</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            
                                <div className="card mb-3 recipe-card">
                                    <div className="row g-0">
                                        <div className="col-md-5 recipe-card-img">
                                            <img src={Img12} className="img-fluid rounded-start" alt="recipe"/>
                                        </div>
                                        <div className="col-md-7">
                                            <div className="card-body recipe-card-content">
                                                <div className="mask rgba-white-slight d-flex">
                                                    <p>
                                                        <span className="card-icon"><Video strokeWidth="2" size="15"/> </span>
                                                        <span><small><b> 0 : 30</b></small></span>
                                                    </p>
                                                </div>
                                                <h5 className="card-title content-title">Quick & easy chocolate cake with berries from scratch recipe</h5>
                                                <p className="card-text">Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad mi</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            
                                <div className="card mb-3 recipe-card">
                                    <div className="row g-0">
                                        <div className="col-md-5 recipe-card-img">
                                            <img src={Img13} className="img-fluid rounded-start" alt="recipe"/>
                                        </div>
                                        <div className="col-md-7">
                                            <div className="card-body recipe-card-content">
                                                <div className="mask rgba-white-slight d-flex">
                                                    <p>
                                                        <span className="card-icon"><FontAwesomeIcon icon={['far', 'clock']} /> </span>
                                                        <span><small><b>30 MINUTES</b></small></span>
                                                    </p>
                                                    <p>
                                                        <span className="card-icon"><FontAwesomeIcon icon={['far', 'thumbs-up']} /> </span>
                                                        <span><small><b>SUPER EASY</b></small></span>
                                                    </p>
                                                </div>
                                                <h5 className="card-title content-title">Carrot and walnut cake</h5>
                                                <p className="card-text">Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad mi</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            
                            </div>
                            <div className="col-md-4 ">
                                <div className="category-container mb-3 ">
                                    <div className="card-body">
                                        <h5 className="card-title category">Category</h5>
                                        <div className="category-items container">
                                            <div className="row">
                                                <div className="view overlay category-img-container col-md-4 col-12">
                                                    <a href="#"><img className="card-img-top" src={Cat1} alt="Popular"/> </a>
                                                    <p>Popular</p>
                                                </div>
                                                <div className="view overlay category-img-container col-md-4 col-12">
                                                    <a href="#"><img className="card-img-top" src={Cat2} alt="Pizza"/> </a>
                                                    <p>Pizza</p>
                                                </div>
                                                <div className="view overlay category-img-container col-md-4 col-12">
                                                    <a href="#"><img className="card-img-top" src={Cat3} alt="Meat"/> </a>
                                                    <p>Meat</p>
                                                </div>
                                                <div className="view overlay category-img-container col-md-4 col-12">
                                                    <a href="#"><img className="card-img-top" src={Cat4} alt="Lunch"/> </a>
                                                    <p>Lunch</p>
                                                </div>
                                                <div className="view overlay category-img-container col-md-4 col-12">
                                                    <a href="#"><img className="card-img-top" src={Cat5} alt="Greens"/> </a>
                                                    <p>Greens</p>
                                                </div>
                                                <div className="view overlay category-img-container col-md-4 col-12">
                                                    <a href="#"><img className="card-img-top" src={Cat6} alt="Desserts"/> </a>
                                                    <p>Desserts</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="newsLetter mb-3 ">
                                    <form className="text-center border border-light p-5" action="#!">
                                        <h4 className="h4 mb-4">Never Miss A Post!</h4>
                                        <p>Sign up for free and be the first to get notified about updates.</p>
                                        <input type="email" id="defaultSubscriptionFormEmail" className="form-control mb-4" placeholder="e-mail"/>
                                        <button className="btn btn-dark btn-block" type="submit">Subscribe</button>
                                    </form>
                                </div>
                                
                                <div className="category-container latest-recipes mb-3 ">
                                    <div className="card-body">
                                        <h5 className="card-title category">LATEST RECIPES</h5>
                                        <div className="card mb-3" >
                                            <div className="row g-0">
                                                <div className="col-md-5">
                                                    <img src={Rp1} className="img-fluid rounded-start" alt="latestRecipe"/>
                                                </div>
                                                <div className="col-md-7">
                                                    <div className="card-body latest-recipe-body">
                                                        <h5 className="card-title latest-recipe-title"><a href="#">Cupcakes with coconut oil</a></h5>
                                                        <p className="card-text"><small className="text-muted">July 17th, 2021</small></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card mb-3" >
                                            <div className="row g-0">
                                                <div className="col-md-5">
                                                    <img src={Rp2} className="img-fluid rounded-start" alt="latestRecipe"/>
                                                </div>
                                                <div className="col-md-7">
                                                    <div className="card-body latest-recipe-body">
                                                        <h5 className="card-title latest-recipe-title"><a href="#">Easy breakfast meal prep</a></h5>
                                                        <p className="card-text"><small className="text-muted">July 17th, 2021</small></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card mb-3" >
                                            <div className="row g-0">
                                                <div className="col-md-5">
                                                    <img src={Rp3} className="img-fluid rounded-start" alt="latestRecipe"/>
                                                </div>
                                                <div className="col-md-7">
                                                    <div className="card-body latest-recipe-body">
                                                        <h5 className="card-title latest-recipe-title"><a href="#">Brownies with walnuts</a></h5>
                                                        <p className="card-text"><small className="text-muted">July 17th, 2021</small></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            
                                <div className="advert">
                                    <div className="card mb-3" >
                                        <div className="row g-0">
                                            <div className="col-12">
                                                <a href="#"><img src={Ad} className="img-fluid rounded-start" alt="advert"/></a>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>
                                
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
                                
                                <div className="advert">
                                    <div className="card mb-3" >
                                        <div className="row g-0">
                                            <div className="col-12">
                                                <a href="#"><img src={UTube} className="img-fluid rounded-start" alt="youtube"/></a>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>           
                            </div>
                        </div>
                    </div>
            </div>
            </section>
            
            <section className="new-recipe">
            <div className="jumbotron text-center" style={{backgroundImage: `url(${Bg3})`}}>
                    <div className="view overlay my-4">
                        <h2>New Recipes Every Wednesday </h2>
                        <div className="container new-recipe-intro">
                            <p>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor dunt ut labore et dolore magna aliqut enim ad minim veniamquis nostrud exercitation</p>
                        </div>
                   
                        <div className="recipe-video container">
                        <iframe width="435" height="301" className="my-video col-md-6 col-12" src="https://www.youtube.com/embed/_tmq1PT_88c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                        <iframe width="460" height="301" className="my-video col-md-6 col-12"  src="https://www.youtube.com/embed/MD7pkEhojKM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> 

                        </div>
                    </div>
                </div>
            
            </section>
            
            <section className="magazine-brands container">
                <div className="container magazine-brands-container">
                    
                        <div class="owl-carousel owl-theme">
                        <div class='item'>
                            <div className="item-img">
                                <img src={Mg1} className="img-fluid rounded-start" alt="recipe"/>
                            </div>
                        </div>
                        <div class='item'>
                            <div className="item-img">
                                <img src={Mg2} className="img-fluid rounded-start" alt="recipe"/>
                            </div>
                        </div>
                        <div class='item'>
                            <div className="item-img">
                                <img src={Mg3} className="img-fluid rounded-start" alt="recipe"/>
                            </div>
                        </div>
                        <div class='item'>
                            <div className="item-img">
                                <img src={Mg4} className="img-fluid rounded-start" alt="recipe"/>
                            </div>
                        </div>
                        <div class='item'>
                            <div className="item-img">
                                <img src={Mg5} className="img-fluid rounded-start" alt="recipe"/>
                            </div>
                        </div>
                        <div class='item'>
                            <div className="item-img">
                                <img src={Mg6} className="img-fluid rounded-start" alt="recipe"/>
                            </div>
                        </div>
                        </div>
                    
                </div>
            </section>
        
            <section className="popular-this-week">
                <div className="container popular-container">
                    <span></span>
                    <h5>The most popular recipes this week</h5>
                    <span></span>
                </div>
                <div class="container">
                    <div class="row">
                        <div class="col-lg-2 col-md-3 col-sm-4 col-6">
                            <div class="card">
                                <img class="card-img-top" src={Ppl1} alt="Card image cap"/>
                                <div class="card-body popular-body">
                                    <h6 class="card-title"><a href="#">Marshmallow light and easy cake</a></h6>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-2 col-md-3 col-sm-4 col-6">
                            <div class="card">
                                <img class="card-img-top" src={Ppl2} alt="Card image cap"/>
                                <div class="card-body popular-body">
                                    <h6 class="card-title"><a href="#">Cupcakes with pistachio pudding</a></h6>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-2 col-md-3 col-sm-4 col-6">
                            <div class="card">
                                <img class="card-img-top" src={Ppl3} alt="Card image cap"/>
                                <div class="card-body popular-body">
                                    <h6 class="card-title"><a href="#">Baked chicken legs with garlic and Dijon</a></h6>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-2 col-md-3 col-sm-4 col-6">
                            <div class="card">
                                <img class="card-img-top" src={Ppl4} alt="Card image cap"/>
                                <div class="card-body popular-body">
                                    <h6 class="card-title"><a href="#">French onion soup with veggie stock</a></h6>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-2 col-md-3 col-sm-4 col-6">
                            <div class="card">
                                <img class="card-img-top" src={Ppl5} alt="Card image cap"/>
                                <div class="card-body popular-body">
                                    <h6 class="card-title"><a href="#">Make chicken paella in under an hour</a></h6>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-2 col-md-3 col-sm-4 col-6">
                            <div class="card">
                                <img class="card-img-top" src={Ppl6} alt="Card image cap"/>
                                <div class="card-body popular-body">
                                    <h6 class="card-title"><a href="#">Pumpkin soup with cheese and cinnamon</a></h6>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-2 col-md-3 col-sm-4 col-6">
                            <div class="card">
                                <img class="card-img-top" src={Ppl7} alt="Card image cap"/>
                                <div class="card-body popular-body">
                                    <h6 class="card-title"><a href="#">Easy ground beef recipes with bacon</a></h6>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-2 col-md-3 col-sm-4 col-6">
                            <div class="card">
                                <img class="card-img-top" src={Ppl8} alt="Card image cap"/>
                                <div class="card-body popular-body">
                                    <h6 class="card-title"><a href="#">Avocado toast with valerianella and egg</a></h6>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-2 col-md-3 col-sm-4 col-6">
                            <div class="card">
                                <img class="card-img-top" src={Ppl9} alt="Card image cap"/>
                                <div class="card-body popular-body">
                                    <h6 class="card-title"><a href="#">How to make fast margherita pizza</a></h6>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-2 col-md-3 col-sm-4 col-6">
                            <div class="card">
                                <img class="card-img-top" src={Ppl10} alt="Card image cap"/>
                                <div class="card-body popular-body">
                                    <h6 class="card-title"><a href="#">Avocado toast with spinach and egg</a></h6>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-2 col-md-3 col-sm-4 col-6">
                            <div class="card">
                                <img class="card-img-top" src={Ppl11} alt="Card image cap"/>
                                <div class="card-body popular-body">
                                    <h6 class="card-title"><a href="#">Deliciously spicy Thai chili crab recipe</a></h6>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-2 col-md-3 col-sm-4 col-6">
                            <div class="card">
                                <img class="card-img-top" src={Ppl12} alt="Card image cap"/>
                                <div class="card-body popular-body">
                                    <h6 class="card-title"><a href="#">Creamy potato soup with almond milk</a></h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        
            <section className="forum">
                <div className="container">
                    <div className="card text-center" style={{backgroundImage: `url(${Bg4})`}}>
                            <div className="view overlay my-4">
                                <div className="container ">
                                    <div className="forum-card">
                                        <div className="card-body forum-content">
                                            <h2 class="card-title h2-responsive forum-title">Easy Meals Forum</h2>
                                            <h5>
                                                <span className="forum-data">186.281 users, </span>
                                                <span className="forum-data">184.853 recipes, </span>
                                                <span className="forum-data">1.432.915 photos</span>
                                            </h5>
                                            <div className="join-forum">
                                            <Nav.Link href="/" className="content-title btn  btn-warning">Join Now!</Nav.Link>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                                
                            </div>
                        </div>
                    {/* <div class="jumbotron card card-image" style={{backgroundImage: `url(${Bg4})`}}>
  <div class="text-white text-center py-5 px-4">
    <div>
      <h2 class="card-title h1-responsive pt-3 mb-5 font-bold"><strong>Easy Meals Forum </strong></h2>
      <p class="mx-5 mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat fugiat, laboriosam, voluptatem,
        optio vero odio nam sit officia accusamus minus error nisi architecto nulla ipsum dignissimos. Odit sed qui, dolorum!
      </p>
      <Nav.Link href="/" className="content-title btn  btn-warning">Join Now!</Nav.Link>
      <a class="btn btn-outline-white btn-md"><i class="fas fa-clone left"></i> View project</a>
    </div>
  </div>
</div> */}
                </div>
            </section>
            
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
    );
}

export default Home;
