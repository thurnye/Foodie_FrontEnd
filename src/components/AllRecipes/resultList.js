import React, {useState, useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {Link } from 'react-router-dom';
import { ThumbsUp, Clock } from 'react-feather';
import services from '../../util/services'
import {recipesActions} from '../../store/allRecipesSlice'
import Img1 from '../../public/images/allRecipes/img1.jpeg'
import Img2 from '../../public/images/allRecipes/img2.jpeg'
import Img3 from '../../public/images/allRecipes/img3.jpeg'
import Img4 from '../../public/images/allRecipes/img4.jpeg'
import Img5 from '../../public/images/allRecipes/img5.jpeg'
import Img6 from '../../public/images/allRecipes/img6.jpeg'
import Img7 from '../../public/images/allRecipes/img7.jpeg'
import Img8 from '../../public/images/allRecipes/img8.jpeg'
import Img9 from '../../public/images/allRecipes/img9.jpeg'
import '../../public/css/allRecipe.css'

export default function ResultList() {
    const dispatch = useDispatch()
    const [recipes, setRecipes] = useState(null)


    useEffect(() => {
        const fetchRecipes = async () => {
          const allRecipes = await services.find()
        // console.log(allRecipes.data)
        setRecipes(allRecipes.data)
        // store the user in redux state
        dispatch(recipesActions.getAllRecipes({
            data: allRecipes.data
          }))
        }
        fetchRecipes()
      }, 
    [])
    
    return (
        <>
           <section className="resultList">
                <div className="row row-cols-1 row-cols-md-3 g-4">
                     {recipes && recipes && recipes.map(el => {
                            return (
                                <div className="col result-item" key={el._id}>
                                    <Link to={{
                                        pathname: `/recipe` ,
                                        search: `?q=${(el.recipeName).toLocaleLowerCase().replaceAll(" ", "-")}`,
                                        state: {recipeId: el._id},
                                    }}
                                    >   
                        <div className="card">
                            <img src={el.thumbnail} className="card-img-top allRecipeImg" alt="recipeResult" />
                            <div className="card-body result-body">
                                 <p>
                                    <span className="duration"><small><strong><Clock strokeWidth="1" size="15"/> {el.duration[0].value.toUpperCase()}</strong></small></span>
                                    <span className="level"><small><strong><ThumbsUp strokeWidth="1" size="15"/> {el.level[0].value.toUpperCase()}</strong></small></span>
                                </p>
                                <h5 className="card-title result-title">{el.recipeName}</h5>
                            </div>
                        </div>
                                </Link>
                    </div>
                            )
                    })} 
                    <div className="col result-item">
                        <div className="card">
                            <img src={Img1} className="card-img-top allRecipeImg" alt="recipeResult"/>
                            <div className="card-body result-body">
                                 <p>
                                    <span className="duration"><small><strong><Clock strokeWidth="1" size="15"/> 60 MINUTES</strong></small></span>
                                    <span className="level"><small><strong><ThumbsUp strokeWidth="1" size="15"/> MEDIUM</strong></small></span>
                                </p>
                                <h5 className="card-title">
                                    <Link to={{
                                        pathname: `/recipe` ,
                                        search: `?q=${("overnight oatmeal and fig for breakfast weight loss").toLocaleLowerCase().replaceAll(" ", "-")}`,
                                        // state: {postId: post._id},
                                    }}
                                    className="result-title">Overnight oatmeal and fig for breakfast weight loss</Link>
                                </h5>
                                
                            </div>
                        </div>
                    </div>
                    <div className="col result-item">
                        <div className="card">
                            <img src={Img2} className="card-img-top allRecipeImg" alt="recipeResult"/>
                            <div className="card-body result-body">
                                 <p>
                                    <span className="duration"><small><strong><Clock strokeWidth="1" size="15"/> 60 MINUTES</strong></small></span>
                                    <span className="level"><small><strong><ThumbsUp strokeWidth="1" size="15"/> MEDIUM</strong></small></span>
                                </p>
                                <h5 className="card-title">
                                    <Link to={{
                                        pathname: `/recipe` ,
                                        search: `?q=${("smoked tofu salad with spicy peanut sauce").toLocaleLowerCase().replaceAll(" ", "-")}`,
                                        // state: {postId: post._id},
                                    }}
                                    className="result-title">Smoked tofu salad with spicy peanut sauce</Link>
                                </h5>
                                
                            </div>
                        </div>
                    </div>
                    <div className="col result-item">
                        <div className="card">
                            <img src={Img3} className="card-img-top allRecipeImg" alt="recipeResult"/>
                            <div className="card-body result-body">
                                 <p>
                                    <span className="duration"><small><strong><Clock strokeWidth="1" size="15"/> 60 MINUTES</strong></small></span>
                                    <span className="level"><small><strong><ThumbsUp strokeWidth="1" size="15"/> MEDIUM</strong></small></span>
                                </p>
                                <h5 className="card-title">
                                    <Link to={{
                                        pathname: `/recipe` ,
                                        search: `?q=${("5 antioxidant-powered smoothie recipes").toLocaleLowerCase().replaceAll(" ", "-")}`,
                                        // state: {postId: post._id},
                                    }}
                                    className="result-title">5 antioxidant-powered smoothie recipes</Link>
                                </h5>
                                
                            </div>
                        </div>
                    </div>
                    <div className="col result-item">
                        <div className="card">
                            <img src={Img4} className="card-img-top allRecipeImg" alt="recipeResult"/>
                            <div className="card-body result-body">
                                 <p>
                                    <span className="duration"><small><strong><Clock strokeWidth="1" size="15"/> 60 MINUTES</strong></small></span>
                                    <span className="level"><small><strong><ThumbsUp strokeWidth="1" size="15"/> MEDIUM</strong></small></span>
                                </p>
                                <h5 className="card-title">
                                    <Link to={{
                                        pathname: `/recipe` ,
                                        search: `?q=${("stuffed avocado with vegetables and fruit").toLocaleLowerCase().replaceAll(" ", "-")}`,
                                        // state: {postId: post._id},
                                    }}
                                    className="result-title">Stuffed avocado with vegetables and fruit</Link>
                                </h5>
                                
                            </div>
                        </div>
                    </div>
                    <div className="col result-item">
                        <div className="card">
                            <img src={Img5} className="card-img-top allRecipeImg" alt="recipeResult"/>
                            <div className="card-body result-body">
                                 <p>
                                    <span className="duration"><small><strong><Clock strokeWidth="1" size="15"/> 60 MINUTES</strong></small></span>
                                    <span className="level"><small><strong><ThumbsUp strokeWidth="1" size="15"/> MEDIUM</strong></small></span>
                                </p>
                                <h5 className="card-title">
                                    <Link to={{
                                        pathname: `/recipe` ,
                                        search: `?q=${("The best Hungarian beef goulash recipe").toLocaleLowerCase().replaceAll(" ", "-")}`,
                                        // state: {postId: post._id},
                                    }}
                                    className="result-title">The best Hungarian beef goulash recipe</Link>
                                </h5>
                                
                            </div>
                        </div>
                    </div>
                    <div className="col result-item">
                        <div className="card">
                            <img src={Img6} className="card-img-top allRecipeImg" alt="recipeResult"/>
                            <div className="card-body result-body">
                                 <p>
                                    <span className="duration"><small><strong><Clock strokeWidth="1" size="15"/> 60 MINUTES</strong></small></span>
                                    <span className="level"><small><strong><ThumbsUp strokeWidth="1" size="15"/> MEDIUM</strong></small></span>
                                </p>
                                <h5 className="card-title">
                                    <Link to={{
                                        pathname: `/recipe` ,
                                        search: `?q=${("Apple tart recipe: extra buttery & flaky crust").toLocaleLowerCase().replaceAll(" ", "-")}`,
                                        // state: {postId: post._id},
                                    }}
                                    className="result-title">Apple tart recipe: extra buttery & flaky crust</Link>
                                </h5>
                                
                            </div>
                        </div>
                    </div>
                    <div className="col result-item">
                        <div className="card">
                            <img src={Img7} className="card-img-top allRecipeImg" alt="recipeResult"/>
                            <div className="card-body result-body">
                                 <p>
                                    <span className="duration"><small><strong><Clock strokeWidth="1" size="15"/> 60 MINUTES</strong></small></span>
                                    <span className="level"><small><strong><ThumbsUp strokeWidth="1" size="15"/> MEDIUM</strong></small></span>
                                </p>
                                <h5 className="card-title">
                                    <Link to={{
                                        pathname: `/recipe` ,
                                        search: `?q=${("Avocado toast with egg, cucumber and radish").toLocaleLowerCase().replaceAll(" ", "-")}`,
                                        // state: {postId: post._id},
                                    }}
                                    className="result-title">Avocado toast with egg, cucumber and radish</Link>
                                </h5>
                                
                            </div>
                        </div>
                    </div>
                    <div className="col result-item">
                        <div className="card">
                            <img src={Img8} className="card-img-top allRecipeImg" alt="recipeResult"/>
                            <div className="card-body result-body">
                                 <p>
                                    <span className="duration"><small><strong><Clock strokeWidth="1" size="15"/> 60 MINUTES</strong></small></span>
                                    <span className="level"><small><strong><ThumbsUp strokeWidth="1" size="15"/> MEDIUM</strong></small></span>
                                </p>
                                <h5 className="card-title">
                                    <Link to={{
                                        pathname: `/recipe` ,
                                        search: `?q=${("Mediterranean tuna salad with fresh herbs").toLocaleLowerCase().replaceAll(" ", "-")}`,
                                        // state: {postId: post._id},
                                    }}
                                    className="result-title">Mediterranean tuna salad with fresh herbs</Link>
                                </h5>
                                
                            </div>
                        </div>
                    </div>
                    <div className="col result-item">
                        <div className="card">
                            <img src={Img9} className="card-img-top allRecipeImg" alt="recipeResult"/>
                            <div className="card-body result-body">
                                 <p>
                                    <span className="duration"><small><strong><Clock strokeWidth="1" size="15"/> 60 MINUTES</strong></small></span>
                                    <span className="level"><small><strong><ThumbsUp strokeWidth="1" size="15"/> MEDIUM</strong></small></span>
                                </p>
                                <h5 className="card-title">
                                    <Link to={{
                                        pathname: `/recipe` ,
                                        search: `?q=${("Avocado toast with spinach, egg and tomatoes").toLocaleLowerCase().replaceAll(" ", "-")}`,
                                        // state: {postId: post._id},
                                    }}
                                    className="result-title">Avocado toast with spinach, egg and tomatoes</Link>
                                </h5>
                                
                            </div>
                        </div>
                    </div>
                </div> 
        
            </section>
        </>
    )
}
