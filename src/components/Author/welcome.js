import React from 'react'
import {Link } from 'react-router-dom';
import Img4 from '../../public/images/directions/img4.jpeg'
import Img9 from '../../public/images/recentRecipes/img9.jpeg'
import Img10 from '../../public/images/recentRecipes/img10.jpeg'
import Img11 from '../../public/images/recentRecipes/img11.jpeg'
import Img12 from '../../public/images/recentRecipes/img12.jpeg'
import Img13 from '../../public/images/recentRecipes/img13.jpeg'
import '../../public/css/author.css'


export default function Welcome() {
    return (
        <section className="welcome">
            <div className="welcome-heading">
                <h1>Welcome! I’m <span>Maggy</span> from the Foodies</h1>
                <div className="welcome-heading-img">
                    <img src={Img4} className="img-fluid" hvr-bob alt=""/>
                </div>
            </div>
            <div className="author-description">
                <p>Et leo duis ut diam quam nulla porttitor massa id. Vitae auctor eu augue ut lectus arcu. Neque vitae tempus quam pellentesque nec. Volutpat consequat mauris nunc congue nisi.t Quam nulla porttitor massa id neque aliquam vestibulum morbi blandit. Amet consectetur adipiscing elit duis. Eget sit amet tellus cras adipiscing honcus mat voluptatem accusantium doloremque laudantium, totam rem aperiam, eaqueipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
            </div>
            <div className="resources">
                <h6>My Resources</h6>
                <p>
                Purus viverra accumsan in nisl. Quis blandit turpis cursus in hac habitasse platea fuss-free udin tempor id eu nisl nunc mi ipsum imperdiet massa, Aliquam Ultrices Sagittis, orci a scelerisque purus semper.
                Et leo duis ut diam quam nulla porttitor massa id. Vitae auctor eu augue ut lectus arcu. Neque vitae tempus quam pellentesque nec. Volutpat consequat mauris nunc congue nisi.t Quam nulla porttitor massa id neque aliquam vestibulum morbi blandit. Amet consectetur adipiscing elit duis. Eget sit amet tellus cras adipiscing honcus mat voluptatem accusantium doloremque laudantium, totam rem aperiam, eaqueipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                
                </p>
                <p>Leo in vitae turpis massa sed elementum tempus egestas sed:</p>
                <ul className="resourses-items">
                    <li className="resourses-item">Dolor sed viverra ipsum nunc alique</li>
                    <li className="resourses-item">Nec tincidunt semper Neque Ornare, aenean euismod</li>
                    <li className="resourses-item">Pellentesque massa placerat</li>
                </ul>
            </div>
            <div className="my-recipes">
                <div className="my-recipe-heading">
                    <h6>MY RECIPES</h6>
                </div>
                <div className="row row-cols-2 row-cols-md-3 g-4">
                    <div className="col my-recipes-list">
                        <div className="card">
                        <img src={Img9} className="card-img-top hvr-bob" alt="..."/>
                        <div className="">
                            <h6 className="card-title">
                            <Link to={{
                                        pathname: `/recipe` ,
                                        search: `?q=${("Peanut butter pancakes").toLocaleLowerCase().replaceAll(" ", "-")}`,
                                        // state: {postId: post._id},
                                    }}>Peanut butter pancakes</Link>
                            </h6>
                        </div>
                        </div>
                    </div>
                
                    <div className="col my-recipes-list">
                        <div className="card">
                        <img src={Img10} className="card-img-top hvr-bob" alt="..."/>
                        <div className="">
                            <h6 className="card-title">
                            <Link to={{
                                        pathname: `/recipe` ,
                                        search: `?q=${("Traditional French breakfast croissant and coffee").toLocaleLowerCase().replaceAll(" ", "-")}`,
                                        // state: {postId: post._id},
                                    }}>Traditional French breakfast croissant and coffee</Link>   
                            </h6>
                        </div>
                        </div>
                    </div>
                
                    <div className="col my-recipes-list">
                        <div className="card">
                        <img src={Img11} className="card-img-top hvr-bob" alt="..."/>
                        <div className="">
                            <h6 className="card-title">
                            <Link to={{
                                        pathname: `/recipe` ,
                                        search: `?q=${("One-pot pasta primavera").toLocaleLowerCase().replaceAll(" ", "-")}`,
                                        // state: {postId: post._id},
                                    }}>One-pot pasta primavera</Link>   
                            </h6>
                        </div>
                        </div>
                    </div>
                
                    <div className="col my-recipes-list">
                        <div className="card">
                        <img src={Img12} className="card-img-top hvr-bob" alt="..."/>
                        <div className="">
                            <h6 className="card-title">
                            <Link to={{
                                        pathname: `/recipe` ,
                                        search: `?q=${("Quick & easy chocolate cake with berries from scratch recipe").toLocaleLowerCase().replaceAll(" ", "-")}`,
                                        // state: {postId: post._id},
                                    }}>Quick & easy chocolate cake with berries from scratch recipe</Link>   
                            </h6>
                        </div>
                        </div>
                    </div>
                
                    <div className="col my-recipes-list">
                        <div className="card">
                        <img src={Img13} className="card-img-top hvr-bob" alt="..."/>
                        <div className="">
                            <h6 className="card-title">
                                <Link to={{
                                        pathname: `/recipe` ,
                                        search: `?q=${("Carrot and walnut cake").toLocaleLowerCase().replaceAll(" ", "-")}`,
                                        // state: {postId: post._id},
                                }}>Carrot and walnut cake</Link>   
                            </h6>
                        </div>
                        </div>
                    </div>
                
                </div>
            </div>

        </section>
    )
}
