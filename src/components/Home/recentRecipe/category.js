import React from 'react'
import Cat1 from '../../../public/images/category/cat1.png'
import Cat2 from '../../../public/images/category/cat2.png'
import Cat3 from '../../../public/images/category/cat3.png'
import Cat4 from '../../../public/images/category/cat4.png'
import Cat5 from '../../../public/images/category/cat5.png'
import Cat6 from '../../../public/images/category/cat6.png'

export default function category() {
    return (
        <>
            <div className="category-container mb-3 ">
                                    <div className="card-body">
                                        <h5 className="card-title category">Category</h5>
                                        <div className="category-items container">
                                            <div className="row">
                                                <div className="view overlay category-img-container col-md-4 col-12">
                                                    <a href="#"><img className="card-img-top hvr-bob" src={Cat1} alt="Popular"/> </a>
                                                    <p>Popular</p>
                                                </div>
                                                <div className="view overlay category-img-container col-md-4 col-12">
                                                    <a href="#"><img className="card-img-top hvr-bob" src={Cat2} alt="Pizza"/> </a>
                                                    <p>Pizza</p>
                                                </div>
                                                <div className="view overlay category-img-container col-md-4 col-12">
                                                    <a href="#"><img className="card-img-top hvr-bob" src={Cat3} alt="Meat"/> </a>
                                                    <p>Meat</p>
                                                </div>
                                                <div className="view overlay category-img-container col-md-4 col-12">
                                                    <a href="#"><img className="card-img-top hvr-bob" src={Cat4} alt="Lunch"/> </a>
                                                    <p>Lunch</p>
                                                </div>
                                                <div className="view overlay category-img-container col-md-4 col-12">
                                                    <a href="#"><img className="card-img-top hvr-bob" src={Cat5} alt="Greens"/> </a>
                                                    <p>Greens</p>
                                                </div>
                                                <div className="view overlay category-img-container col-md-4 col-12">
                                                    <a href="#"><img className="card-img-top hvr-bob" src={Cat6} alt="Desserts"/> </a>
                                                    <p>Desserts</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
        </>
    )
}
