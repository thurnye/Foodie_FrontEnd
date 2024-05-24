import React, {useState, useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {Link, useLocation } from 'react-router-dom';
import { ThumbsUp, Clock } from 'react-feather';
import services from '../../util/services'
import {recipesActions} from '../../store/allRecipesSlice'
import './allRecipe.css'
import './resultList.css';
import PaginationControlled from '../CustomPagination/CustomPaginations';


export default function ResultList(props) {
    let location = useLocation()
    const filters = props.filters
    const category = location.state?.category;
    const dispatch = useDispatch()
    const [recipes, setRecipes] = useState(null)
    const [currentPage, setCurrentPage] = useState(1)
    const [counts, setCounts] = useState(0);
    const [loading, setLoading] = useState(true);
    const [allRecipes, setAllRecipes] = useState();
    
    // Get All Recipes
    const fetchRecipes = async () => {
        setLoading(true)
        const all = await services.find({currentPage});
        setAllRecipes(all)
        setLoading(false);
    }
    // Get Query Recipes
    const fetchFilteredRecipes = async (query) => {
        try{
            setLoading(true)
            const all = await services.findQuery(query);
            setAllRecipes(all)
            setLoading(false);
        }catch(err){
            console.log(err)
        }
    }

    useEffect(() => {
        const selections = filters
        console.log(selections)
        if(!category && !selections){
            fetchRecipes()
        }
        if(category || selections){
            const filter = {...selections, category}
            fetchFilteredRecipes({filter, currentPage});
        }
      }, 
    [currentPage, dispatch, category, filters]);


    useEffect(() => {
        if(allRecipes){
            setRecipes(allRecipes.data.recipes);
            setCounts(allRecipes.data.count);
            // store the user in redux state
            dispatch(recipesActions.getAllRecipes({
                data: allRecipes.data
              }))
        }
    },[allRecipes, dispatch]);

    return (
        <>
           <section className="resultList">
            {loading ? 
                    <div className="text-center resultSpinnerContainer">
                        <div className="spinner-border text-secondary" role="status">
                        </div>
                    </div> 
                  :
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
                     {recipes?.map(el => {
                            return (
                                <div className="col result-item" key={el._id}>
                                    {/* <Link to={{
                                        pathname: `/recipe` ,
                                        search: `?q=${(el.recipeName).toLocaleLowerCase().replaceAll(" ", "-")}`,
                                    }}
                                    state={{recipeId: el._id}}
                                    >    */}
                        <div className="card">
                            <img src={el.details.thumbnail} className="card-img-top allRecipeImg" alt="recipeResult" />
                            <div className="card-body result-body">
                                 <p>
                                    <span className="duration"><small><strong><Clock strokeWidth="1" size="15"/> {el.basicInfo.duration.value}</strong></small></span>
                                    <span className="level"><small><strong><ThumbsUp strokeWidth="1" size="15"/> {el.basicInfo.level.value}</strong></small></span>
                                </p>
                                <h5 className="card-title result-title">
                                <Link to={{
                                        pathname: `/recipe` ,
                                        search: `?q=${(el.basicInfo.recipeName).toLocaleLowerCase().replaceAll(" ", "-")}`,
                                    }}
                                    state={{recipeId: el._id}}
                                    >   
                                    {el.basicInfo.recipeName}
                                </Link>
                                    </h5>
                            </div>
                        </div>
                    </div>
                            )
                    })} 
                </div>
            } 
            </section>
            {counts > 1 && <PaginationControlled totalPages={counts} currentPage={currentPage} onPageChange={setCurrentPage}/>}
        </>
    )
}
