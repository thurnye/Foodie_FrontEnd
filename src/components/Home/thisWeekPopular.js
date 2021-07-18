import React from 'react'

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

export default function thisWeekPopular() {
    return (
        <>
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
                                    <h6 class="card-title popular-week-title "><a href="#">Marshmallow light and easy cake</a></h6>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-2 col-md-3 col-sm-4 col-6">
                            <div class="card">
                                <img class="card-img-top" src={Ppl2} alt="Card image cap"/>
                                <div class="card-body popular-body">
                                    <h6 class="card-title popular-week-title"><a href="#">Cupcakes with pistachio pudding</a></h6>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-2 col-md-3 col-sm-4 col-6">
                            <div class="card">
                                <img class="card-img-top" src={Ppl3} alt="Card image cap"/>
                                <div class="card-body popular-body">
                                    <h6 class="card-title popular-week-title"><a href="#">Baked chicken legs with garlic and Dijon</a></h6>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-2 col-md-3 col-sm-4 col-6">
                            <div class="card">
                                <img class="card-img-top" src={Ppl4} alt="Card image cap"/>
                                <div class="card-body popular-body">
                                    <h6 class="card-title popular-week-title"><a href="#">French onion soup with veggie stock</a></h6>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-2 col-md-3 col-sm-4 col-6">
                            <div class="card">
                                <img class="card-img-top" src={Ppl5} alt="Card image cap"/>
                                <div class="card-body popular-body">
                                    <h6 class="card-title popular-week-title"><a href="#">Make chicken paella in under an hour</a></h6>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-2 col-md-3 col-sm-4 col-6">
                            <div class="card">
                                <img class="card-img-top" src={Ppl6} alt="Card image cap"/>
                                <div class="card-body popular-body">
                                    <h6 class="card-title popular-week-title"><a href="#">Pumpkin soup with cheese and cinnamon</a></h6>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-2 col-md-3 col-sm-4 col-6">
                            <div class="card">
                                <img class="card-img-top" src={Ppl7} alt="Card image cap"/>
                                <div class="card-body popular-body">
                                    <h6 class="card-title popular-week-title"><a href="#">Easy ground beef recipes with bacon</a></h6>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-2 col-md-3 col-sm-4 col-6">
                            <div class="card">
                                <img class="card-img-top" src={Ppl8} alt="Card image cap"/>
                                <div class="card-body popular-body">
                                    <h6 class="card-title popular-week-title"><a href="#">Avocado toast with valerianella and egg</a></h6>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-2 col-md-3 col-sm-4 col-6">
                            <div class="card">
                                <img class="card-img-top" src={Ppl9} alt="Card image cap"/>
                                <div class="card-body popular-body">
                                    <h6 class="card-title popular-week-title"><a href="#">How to make fast margherita pizza</a></h6>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-2 col-md-3 col-sm-4 col-6">
                            <div class="card">
                                <img class="card-img-top" src={Ppl10} alt="Card image cap"/>
                                <div class="card-body popular-body">
                                    <h6 class="card-title popular-week-title"><a href="#">Avocado toast with spinach and egg</a></h6>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-2 col-md-3 col-sm-4 col-6">
                            <div class="card">
                                <img class="card-img-top" src={Ppl11} alt="Card image cap"/>
                                <div class="card-body popular-body">
                                    <h6 class="card-title popular-week-title"><a href="#">Deliciously spicy Thai chili crab recipe</a></h6>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-2 col-md-3 col-sm-4 col-6">
                            <div class="card">
                                <img class="card-img-top" src={Ppl12} alt="Card image cap"/>
                                <div class="card-body popular-body">
                                    <h6 class="card-title popular-week-title"><a href="#">Creamy potato soup with almond milk</a></h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        
        </>
    )
}
