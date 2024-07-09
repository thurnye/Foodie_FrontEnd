import  {createSlice} from '@reduxjs/toolkit'


const chats = {
    chatLists: [],
    groupMembers:[],
    pendingMembers:[],
    activeChat: null,
}

const chatsSlice = createSlice({
    name: 'chats',
    initialState: chats,
    reducers: {
        // all all chats from the database
       getChatsList(state, action){
           state.chatLists = action.payload;
       },
       getActiveChat(state, action){
           state.activeChat = action.payload;
       },
       getGroupMembers(state, action){
           state.groupMembers = action.payload.data;
       },
       getPendingMembers(state, action){
           state.pendingMembers = action.payload.data;
       },
    }
})

export default chatsSlice.reducer;
export const chatsActions = chatsSlice.actions