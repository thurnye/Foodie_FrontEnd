import  {createSlice} from '@reduxjs/toolkit'


const allRecipes = {
    recipes: {
        recipes: [],
        count: 0
    },
    usersRecipes: null,
    singleRecipe: null,
}

const allRecipesSlice = createSlice({
    name: 'recipes',
    initialState: allRecipes,
    reducers: {
        // all all recipes from the database
       getAllRecipes(state, action){
        console.log('ACTIONS', action)
        state.recipes = {
            recipes: action.payload.recipes, // update recipes array
            count: action.payload.count,    // update count
          };
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