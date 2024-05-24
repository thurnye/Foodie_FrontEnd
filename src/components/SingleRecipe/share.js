import React from 'react'
import {useSelector} from 'react-redux'
import moment from 'moment';
import Avatar from '../Avatar/Avatar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Share() {
    const recipe = useSelector(state => state.recipesData.singleRecipe)
    return (
        <>
            <section className="share">
                <div className="card mb-3 " >
                    <div className="row g-0" style={{alignItems: 'center'}}>
                        { recipe &&    
                            <>
                                <div className="col-md-4">
                                    <div className="content-share-author">
                                        <div className="share-img-container">
                                            <Avatar img={recipe.author.avatar}/>
                                        </div>
                                        <div className="card-body content-share-author-body">
                                            <p className="content-share-author-name">
                                                <span><small><b>{recipe.author.firstName} {recipe.author.lastName}</b></small></span>
                                                <span className="card-text"><small className="text-muted">{moment(recipe.createdAt.toString()).format('MMM Do, YYYY')}</small></span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body content-share-items-container ">
                                        <ul className="my-share-links row">
                                            <li className="list-items" style={{backgroundColor: '#4267B2'}}>
                                                <a href={recipe.author.socialMedia[0].facebook}>
                                                    <FontAwesomeIcon icon={['fab','facebook']} style={{color: 'white'}}/>
                                                    <small className="brand-name">facebook</small>                                    
                                                </a>
                                            </li>
                                            <li className="list-items" style={{backgroundColor: '#1DA1F2'}}>
                                                <a href={recipe.author.socialMedia[0].twitter}>
                                                    <FontAwesomeIcon icon={['fab','twitter']} style={{color: 'white'}}/>
                                                    <small className="brand-name">twitter</small>                                     
                                                </a>
                                            </li> 
                                            <li className="list-items" style={{backgroundColor: '#2867B2'}}>
                                                <a href={recipe.author.socialMedia[0].linkedIn}>
                                                    <FontAwesomeIcon icon={['fab','linkedin']} style={{color: 'white'}}/>
                                                    <small className="brand-name">linkedin</small>                                      
                                                </a>
                                            </li>
                                            <li className="list-items" style={{backgroundColor: '#E60023'}}>
                                                <a href={recipe.author.socialMedia[0].pinterest}>
                                                    <FontAwesomeIcon icon={['fab','pinterest']} style={{color: 'white'}}/>
                                                    <small className="brand-name">pinterest</small>                                    
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </>
                        }
                    </div>
                </div>
            </section>
        </>
    )
}
