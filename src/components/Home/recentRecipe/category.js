import React from 'react'
import { Link } from "react-router-dom";
import Cat1 from '../../../public/images/category/cat1.png'
import Cat2 from '../../../public/images/category/cat2.png'
import Cat3 from '../../../public/images/category/cat3.png'
import Cat4 from '../../../public/images/category/cat4.png'
import Cat5 from '../../../public/images/category/cat5.png'
import Cat6 from '../../../public/images/category/cat6.png'

export default function category() {

    const categories = [
        {
            name: 'Popular',
            img: Cat1
        },
        {
            name: 'Pizza',
            img: Cat2
        },
        {
            name: 'Meat',
            img: Cat3
        },
        {
            name: 'Lunch',
            img: Cat4
        },
        {
            name: 'Greens',
            img: Cat5
        },
        {
            name: 'Deserts',
            img: Cat6
        },
    ];
    return (
        <>
            <div className="category-container mb-3 ">
                                    <div className="card-body">
                                        <h5 className="card-title category">Category</h5>
                                        <div className="category-items container">
                                        
                                            <div className="row row-cols-2 row-cols-md-3 g-4">
                                                {categories.map((el) =>  
                                                    <div className="view overlay category-img-container col" key={el.name}>
                                                        {/* <a href="#"> */}
                                                        <Link to={{
                                                            pathname: `/all-recipes` ,
                                                            search: `?q=${(el.name).toLocaleLowerCase().replaceAll(" ", "-")}`,
                                                            state: {category: el.name},
                                                        }}
                                                        > 
                                                            <img className="card-img-top hvr-bob" src={el.img} alt="Popular"/> 
                                                            </Link>
                                                        {/* </a> */}
                                                        <p>{el.name}</p>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
        </>
    )
}
