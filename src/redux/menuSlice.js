import { createSlice } from "@reduxjs/toolkit";

export const menuSlice = createSlice({
    name: 'menuList',
    initialState: [], 
    reducers:{
        addRecipe: (state, action)=>{
            state.push(action.payload);
        },

        deleteRecipe: (state, action)=>{
            state = state.filter((i)=> i.id !== action.payload);
            return state;
        },
        /*deleteAllItem: (state, action)=>{

        },*/
    }
});

export const { addRecipe, deleteRecipe } = menuSlice.actions;

export default menuSlice.reducer
