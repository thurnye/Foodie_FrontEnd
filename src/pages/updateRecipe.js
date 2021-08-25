import React, {useState, useEffect} from 'react';
import services from '../util/services'
import {useDispatch} from 'react-redux'
import {recipesActions} from '../store/allRecipesSlice'
import UpdateRecipeForm from '../components/updateRecipe/updateRecipeForm'

export default function UpdateRecipe(props) {
    const recipeId = props.location.state.recipeId
    const edit = props.location.state.edit
    
    const dispatch = useDispatch()
    const [recipe, setRecipe] = useState(null)
    
    useEffect(() => {
        const fetchRecipe = async () => {
          const result = await services.findById(recipeId)
        setRecipe(result.data)

        // store the recipe in redux state
        dispatch(recipesActions.getSingleRecipes({
            data: result.data
        })
        )
        }
        fetchRecipe()
      }, 
    [recipeId, dispatch])
    
    
    return (
        <section>
            {edit && <UpdateRecipeForm/>}
            {!edit && <h1>Access Denied</h1>}
            
        </section>
    )
}
