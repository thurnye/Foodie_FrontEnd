import  {createSlice} from '@reduxjs/toolkit'


const events = {
    events: null,
    usersEvents: null,
    singleEvent: null,
    eventEdit: null,
}

const eventsSlice = createSlice({
    name: 'events',
    initialState: events,
    reducers: {
        // all all events from the database
       getEvents(state, action){
           state.events = action.payload.data;
       },
       getEventEdit(state, action){
        console.log(action.payload);
           state.eventEdit = action.payload;
       },
       getAllUsersEvents(state, action){
           state.usersEvents = action.payload.data;
       },

       getSingleEvent(state, action){
           const event = action.payload.data
           state.singleEvent = event
       }
    }
})

export default eventsSlice.reducer;
export const eventsActions = eventsSlice.actions