import React, { useEffect, useState } from 'react'
// import { useLocation } from "react-router-dom";
import {useSelector, useDispatch} from 'react-redux'
import jwt_decode from "jwt-decode";
import {Link } from 'react-router-dom';
import { MoreVertical } from 'react-feather';
import services from '../../util/services'
import {userActions} from '../../store/userSlice'
import CustomPagination from '../CustomPagination/CustomPagination';
import { recipesActions } from '../../store/allRecipesSlice';
import styles from './userRecipeList.module.css';
import Loading from '../Loading/Loading';
import {decodeJWToken} from '../../util/commons'

export default function UserRecipeList() {
    const dispatch = useDispatch()
    const user = useSelector(state => state.userLog?.user?.user)
    // const myRecipes = user.myRecipes
    // const location = useLocation();
    const [currentPage, setCurrentPage] = useState(1)
    const [counts, setCounts] = useState(0);
    const [loading, setLoading] = useState(false);
    const [allRecipes, setAllRecipes] = useState();
    const [myRecipes, setMyRecipes] = useState(null)

    const fetchUpdatedUser = async (id) => {
        try {
            setLoading(true)
            const result = await services.getUserRecipes(id, {currentPage});
            setAllRecipes(result);
          setLoading(false)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        if(allRecipes){
            setMyRecipes(allRecipes.data.recipes);
            setCounts(allRecipes.data.count);
            // store the user in redux state
            dispatch(recipesActions.getAllUsersRecipes({
                data: allRecipes.data
              }))
        }
    },[allRecipes, dispatch]);

    useEffect(() => {
        if(user){
           fetchUpdatedUser(user._id);  
        }
    },[user, currentPage])

      //DELETE A Recipe
    const deleteRecipe = async (id) => {
       try{ 
            // console.log(id)
            const result = await services.removeRecipe(id)
            // console.log(result)
            let token = result.data
                  localStorage.setItem('token', token);  
                  const userDoc = decodeJWToken(token); 

                //   store the user in redux state
                  dispatch(userActions.login({
                    user: userDoc
                  }))
        }catch(err){
            console.log(err)
        } 
    }
    const onPageChange = (e) => {
        // console.log(e);
        setCurrentPage(e)
    }

    return (
        <>
            <div className="container">
                <h5 className="container">My RECIPE LIST</h5>
               note: Integrate Recipe Adaptations: Encourage users to submit their adapted versions of existing recipes, incorporating regional variations or unique twists.
            </div>
            <div className=" container">
                    
                {loading ? 
                    <Loading/>
                  :
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
                        {myRecipes?.map(el => {
                            return (
                                <div className="col result-item" key={el._id}>
                                    <div className="card">
                                        <div className={` ${styles.cardActionContainer}`}>
                                            <div className={`nav-item dropdown ${styles.dropDownContents}`} >
                                                <a className="nav-link " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                    <MoreVertical strokeWidth="2.5"  width="27" height="19" size={64}/>
                                                </a>
                                                <ul className="dropdown-menu">
                                                    <li className={` ${styles.cardActions}`}>
                                                        <Link to="edit" state={{recipeId: el._id, edit: true}} className={`content-title ${styles.cardActionDelete}`}>
                                                            Edit
                                                        </Link>
                                                    </li>
                                                    <li className={` ${styles.cardActions}`}>
                                                        <a href="#" type="button" className={`action-btn ${styles.cardActionDelete}`} data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                            Delete
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                            {/* <Link to={{
                                                pathname: `edit` ,
                                            }}
                                            state={{recipeId: el._id, edit: true}}
                                            className="content-title">
                                                <Edit strokeWidth="1"  width="27" height="19"/>
                                                
                                            </Link>

                                            <button type="button" className="action-btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                <Trash2 strokeWidth="1" size="18"/>
                                            </button> */}



                                            {/* Modal  */}
                                            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div className="modal-dialog modal-dialog-centered">
                                                    <div className="modal-content">
                                                        <div className="modal-header">
                                                            <h5 className="modal-title" id="exampleModalLabel">{el.recipeName}</h5>
                                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                        </div>
                                                        <div className="modal-body">
                                                            Are you sure you want to delete this recipe?
                                                        </div>
                                                        <div className="modal-footer">
                                                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                                                            <button type="button" className="btn btn-danger" data-bs-dismiss="modal" onClick={()=> deleteRecipe(el._id)}>Confirm</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <img src={el.thumbnail} className="card-img-top allRecipeImg" alt="recipeResult" />
                                        <div className="card-body result-body">
                                            <h5 className="card-title result-title">
                                                <Link to={{
                                                    pathname: `/recipe` ,
                                                    search: `?q=${(el.recipeName).toLocaleLowerCase().replaceAll(" ", "-")}`,
                                                }}
                                                state={{recipeId: el._id}}
                                                >
                                                {el.recipeName}
                                                </Link>
                                            </h5>
                                        </div>
                                    </div>
                                </div>
                            )
                        })} 
                    </div>
                }
                   
                
            </div>
            <div>
            {counts > 1 && <CustomPagination totalPages={counts} currentPage={currentPage} onPageChange={setCurrentPage}/>}
            </div>
        </>
    )
}
