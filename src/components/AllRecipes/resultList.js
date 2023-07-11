import React, {useState, useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {Link, useLocation } from 'react-router-dom';
import { ThumbsUp, Clock } from 'react-feather';
import services from '../../util/services'
import {recipesActions} from '../../store/allRecipesSlice'
import '../../public/css/allRecipe.css'
import CustomPagination from '../CustomPagination/CustomPagination';
import {dummyRecipes} from '../updateRecipe/doc'

export default function ResultList(props) {
    let location = useLocation()
    const filters = props.filters
    const category = location.state?.category;
    const dispatch = useDispatch()
    const [recipes, setRecipes] = useState(null)
    const [currentPage, setCurrentPage] = useState(1)
    const [counts, setCounts] = useState(0);
    const [allRecipes, setAllRecipes] = useState();
    
    // Get All Recipes
    const fetchRecipes = async () => {
        const all = await services.find({currentPage});
        setAllRecipes(all)
    }
    // Get Query Recipes
    const fetchFilteredRecipes = async (query) => {
        const all = await services.findQuery(query);
        setAllRecipes(all)
    }

    useEffect(() => {
        const selections = filters
        console.log(selections)
        if(!category && !selections){
            fetchRecipes()
        }
        if(category || selections){
            // const cat = category;
            // const fil = selections.category;
            // const union = [
            //     ...(selections ? selections : ''),
            //     ...(category ? category : '')
            // ]

            // const categories = [...category,selections.category]
            // console.log(cat, fil)
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

    const onPageChange = (e) => {
        // console.log(e);
        setCurrentPage(e)
    }
    const handleClickMe = () => {
        // dummyRecipes.forEach(async (el) => {
        //     await services.postRecipe(el)
        // })
    }
    return (
        <>
        {/* <button onClick={handleClickMe}> Click me</button> */}
           <section className="resultList">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
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
                                    <span className="duration"><small><strong><Clock strokeWidth="1" size="15"/> {el.duration}</strong></small></span>
                                    <span className="level"><small><strong><ThumbsUp strokeWidth="1" size="15"/> {el.level}</strong></small></span>
                                </p>
                                <h5 className="card-title result-title">{el.recipeName}</h5>
                            </div>
                        </div>
                                </Link>
                    </div>
                            )
                    })} 
                </div> 
        
            </section>
            {counts > 1 && <CustomPagination totalPages={counts} currentPage={currentPage} onPageChange={onPageChange}/>}
        </>
    )
}
