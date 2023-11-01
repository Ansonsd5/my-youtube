import { createSlice } from "@reduxjs/toolkit";
import { LIVECHAT_LIMIT } from "./constants";

const chatSlice = createSlice({
    name: 'chat',
    initialState : {
        messages : [],

    },
    reducers : {
        
        addMessages : (state,action) =>{
            state.messages.splice(LIVECHAT_LIMIT,2)
            state.messages.unshift(action.payload)

        }
    }


});


export const { addMessages } = chatSlice.actions;

export default chatSlice.reducer;