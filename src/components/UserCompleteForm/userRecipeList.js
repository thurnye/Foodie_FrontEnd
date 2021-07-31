import React from 'react'
import {Link } from 'react-router-dom';
import { Edit, Trash2 } from 'react-feather';
import {useSelector} from 'react-redux'
import Modal from './confirmDeleteModal';
import Img1 from '../../public/images/allRecipes/img1.jpeg'
import Img2 from '../../public/images/allRecipes/img2.jpeg'
import Img3 from '../../public/images/allRecipes/img3.jpeg'
import Img4 from '../../public/images/allRecipes/img4.jpeg'

export default function UserRecipeList() {
    const user = useSelector(state => state.userLog.user.user)

    return (
        <>
            <div className="container">
                <h5 className="container">My RECIPE LIST</h5>
            </div>
            <div className="user-recipe-list-items scrollspy-example container" data-spy="scroll" data-target="#spy">
                    
                <div className="row row-cols-2 row-cols-md-3 g-4" >
                    <div className="col form-fields">
                        <div className="card my-recipe-card">
                            <div className="card-actions">
                                <Link to={{
                                pathname: `/recipe` ,
                                search: `?q=${("mixed berry pie with fresh fruits").replaceAll(" ", "-")}`,
                                // state: {postId: post._id},
                                }}
                                className="content-title"><Edit strokeWidth="1"  width="27" height="19"/></Link>

                            <button type="button" className="action-btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                <Trash2 strokeWidth="1" size="18"/>
                            </button>
                            <Modal/>
                            </div>
                            <img src={Img1} className="card-img-top" alt="recipeResult"/>
                            <div className="card-body my-recipes-body ">
                                <h6 className="card-title">
                                    <Link to={{
                                        pathname: `/recipe` ,
                                        search: `?q=${("overnight oatmeal and fig for breakfast weight loss").toLocaleLowerCase().replaceAll(" ", "-")}`,
                                        // state: {postId: post._id},
                                    }}
                                    className="result-title">Overnight oatmeal and fig for breakfast weight loss</Link>
                                </h6>
                                
                            </div>
                        </div>
                    </div>

                </div>
                
            </div>
        </>
    )
}
