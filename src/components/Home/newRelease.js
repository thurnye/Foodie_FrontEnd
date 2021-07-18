import React from 'react'
import Bg1 from '../../public/images/jumbotron/bg1.jpeg'


export default function newRelease() {
    return (
        <>
             <section className="new-recipe">
            <div className="jumbotron text-center" style={{backgroundImage: `url(${Bg1})`}}>
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
            
        </>
    )
}
