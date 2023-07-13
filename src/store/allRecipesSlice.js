import  {createSlice} from '@reduxjs/toolkit'


const allRecipes = {
    recipes: null,
    usersRecipes: null,
    singleRecipe: null,
}

const allRecipesSlice = createSlice({
    name: 'recipes',
    initialState: allRecipes,
    reducers: {
        // all all recipes from the database
       getAllRecipes(state, action){
           state.recipes = action.payload.data;
       },
       getAllUsersRecipes(state, action){
           state.usersRecipes = action.payload.data;
       },

       getSingleRecipes(state, action){
           const recipe = action.payload.data
           state.singleRecipe = recipe
       }
    }
})

export default allRecipesSlice.reducer;
export const recipesActions = allRecipesSlice.actions