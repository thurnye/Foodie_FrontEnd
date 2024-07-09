import  { configureStore} from '@reduxjs/toolkit'
import userReducer from './userSlice'
import allRecipesReducer from './allRecipesSlice'
import eventReducer from './eventSlice'
import chatReducer from './chatSlice'



const store = configureStore({
    reducer: {
        userLog: userReducer,
        recipesData: allRecipesReducer,
        eventData: eventReducer,
        chatData: chatReducer
    }
})



export default store;