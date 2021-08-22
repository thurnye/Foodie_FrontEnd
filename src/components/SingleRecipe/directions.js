import React from 'react'
import Headings from '../UI/heading'
import Img1 from '../../public/images/directions/img1.jpeg'
import Img2 from '../../public/images/directions/img2.jpeg'
import Img3 from '../../public/images/directions/img3.jpeg'
import Img4 from '../../public/images/directions/img4.jpeg'
import Img5 from '../../public/images/directions/img5.jpeg'
import Img6 from '../../public/images/directions/img6.png'
import Tick from '../UI/tick'

export default function directions() {
    return (
        <>
            <Headings title="Directions"/>
        <section className="directions">
            <div className="order-directions">
                <span className="order-number">1.</span>
                <div className="direction-steps">
                    <h5 className="step-title">Make the barbecue sauce (or substitute 3/4 to 1 cup bottled sauce):</h5>
                    <div className="steps">
                        <p>
                        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur
                        </p>
                        <div className="step-1-img">
                            <div className="row row-cols-1 row-cols-md-3 g-4">
                                <div className="col-md-6">
                                    <div className="card">
                                        <img src={Img1} className="card-img-top" alt="step1Image"/>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="card">
                                        <img src={Img2} className="card-img-top" alt="step1Image"/>
                                    </div>
                                </div>
                                
                             </div>
                        </div>
                        <p className="step-complete">
                            <Tick/> Mark as Complete
                        </p>
                        
                    </div>
                </div>
                
            </div>
                <div className="order-directions">
                <span className="order-number">2.</span>
                <div className="direction-steps">
                    <h5 className="step-title">Cook the chicken (or substitute 2 cups shredded cooked chicken):</h5>
                    <div className="steps">
                        <p>
                        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur
                        </p>
                        <div className="step-1-img">
                            <div className="row row-cols-1 row-cols-md-3 g-4">
                                <div className="col-md-6">
                                    <div className="card">
                                        <img src={Img6} className="card-img-top" alt="step1Image"/>
                                    </div>
                                </div>
                             </div>
                        </div>
                        <p className="step-complete">
                            <Tick/> Mark as Complete
                        </p>
                        
                    </div>
                </div>
            </div>
                
            <div className="order-directions">
                <span className="order-number">3.</span>
                <div className="direction-steps">
                    <h5 className="step-title">Mix the chicken with the barbecue sauce:</h5>
                    <div className="steps">
                        <p>
                        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur
                        </p>
                        <div className="step-1-img">
                            <div className="row row-cols-1 row-cols-md-3 g-4">
                                <div className="col-md-4">
                                    <div className="card">
                                        <img src={Img3} className="card-img-top" alt="step1Image"/>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="card">
                                        <img src={Img4} className="card-img-top" alt="step1Image"/>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="card">
                                        <img src={Img5} className="card-img-top" alt="step1Image"/>
                                    </div>
                                </div>
                             </div>
                        </div>
                        <p className="step-complete">
                            <Tick/> Mark as Complete
                        </p>
                        
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}
