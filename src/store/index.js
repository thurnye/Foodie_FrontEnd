import  { configureStore} from '@reduxjs/toolkit'
import userReducer from './userSlice'
import allRecipesReducer from './allRecipesSlice'




const store = configureStore({
    reducer: {
        userLog: userReducer,
        recipesData: allRecipesReducer
    }
})



export default store;