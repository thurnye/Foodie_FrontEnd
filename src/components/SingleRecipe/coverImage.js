import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Tag } from 'react-feather';
import img11 from '../../public/images/recentRecipes/img11.jpeg';
import Ratings from './ratings';
export default function coverImage() {
    return (
        <>
            <section className="coverImg">
                <div class="jumbotron p-0">
                    <div class="view overlay rounded-top">
                        <img src={img11} class="img-fluid" alt="coverImage"/>
                    </div>
                </div>
                <div className="container cover-tags">
                    <div className="coverImg-card-container rgba-white-slight d-flex">
                        <p>
                            <span className="card-icon"><FontAwesomeIcon icon={['far', 'clock']} /> </span>
                            <span><small><b>30 MINUTES</b></small></span>
                        </p>
                        <p>
                            <span className="card-icon"><FontAwesomeIcon icon={['far', 'thumbs-up']} /> </span>
                            <span><small><b>SUPER EASY</b></small></span>
                        </p>
                        <p>
                            <span className="card-icon"><FontAwesomeIcon icon={['fas', 'utensils']} /> </span>
                            <span><small><b>SERVES</b></small></span>
                        </p>
                        <p>
                            <span className="card-icon"><Tag /> </span>
                            <span><small><b>BREAKFAST</b></small></span>
                        </p>
                    </div>
                    
                </div>
                <div className="about-recipe">
                    <p>Nam aliquam sem et tortor consequat. Odio tempor orci dapibus ultrices in iaculis. Vitae proin sagittis nisl rhoncus mattis rhoncus. Sed risus ultricies tristique nulla aliquet. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborumd ut perspiciatis unde omnis iste voluptatem accusantium doloremque laudantium,  aperiam, eaque.</p>

                </div>
                <Ratings/>
                
            </section>
        </>
    )
}
