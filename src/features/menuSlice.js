import { createSlice } from "@reduxjs/toolkit";

export const menuSlice = createSlice({
    name: 'menuList',
    initialState: [], 
    reducers:{
        addItem: (state, action)=>{
            const newRecipe = {               
                id:Date.now(),
                name: action.payload,
                //user_id: action.payload
            }
            state.push(newRecipe);
        },

        deleteItem: (state, action)=>{
            state = state.filter((i)=> i.id !== action.payload);
            return state;
        },
        /*deleteAllItem: (state, action)=>{

        },*/
    }
});

export const { newRecipe } = menuSlice.actions;

export default menuSlice.reducer
