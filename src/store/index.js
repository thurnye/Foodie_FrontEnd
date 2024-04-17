import  { configureStore} from '@reduxjs/toolkit'
import userReducer from './userSlice'
import allRecipesReducer from './allRecipesSlice'
import eventReducer from './eventSlice'




const store = configureStore({
    reducer: {
        userLog: userReducer,
        recipesData: allRecipesReducer,
        eventData: eventReducer
    }
})



export default store;