import { createSlice } from '@reduxjs/toolkit';

const appSlice = createSlice({
    name : "app",
    initialState : {
        ismenuOpen :true,
    },
    reducers : {
        toggleMenu :(state) =>{
            state.ismenuOpen = !state.ismenuOpen;
        }
    },

})

export const { toggleMenu } = appSlice.actions;
export default appSlice.reducer;
