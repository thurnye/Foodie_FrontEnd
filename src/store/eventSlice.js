import  {createSlice} from '@reduxjs/toolkit'


const events = {
    events: null,
    userEvents: null,
    singleEvent: null,
}

const eventsSlice = createSlice({
    name: 'events',
    initialState: events,
    reducers: {
        // all all events from the database
       getEvents(state, action){
           state.events = action.payload.data;
       },
       getAllUsersEvents(state, action){
           state.userEvents = action.payload.data;
       },

       getSingleEvent(state, action){
           const event = action.payload.data
           state.singleEvent = event
       }
    }
})

export default eventsSlice.reducer;
export const eventsActions = eventsSlice.actions