import React from 'react'
import Mg1 from '../../public/images/magazines/mg1.png'
import Mg2 from '../../public/images/magazines/mg2.png'
import Mg3 from '../../public/images/magazines/mg3.png'
import Mg4 from '../../public/images/magazines/mg4.png'
import Mg5 from '../../public/images/magazines/mg5.png'
import Mg6 from '../../public/images/magazines/mg6.png'

export default function magazineBrands() {
    return (
        <>
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
        
            
        </>
    )
}
