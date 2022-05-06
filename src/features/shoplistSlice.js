import { createSlice } from "@reduxjs/toolkit";

export const shoplistSlice = createSlice({
    name: 'shoppinglist',
    initialState: [], 
    reducers:{
        addItem: (state, action)=>{
            const newItemShop = {               
                id:Date.now(),
                name: action.payload,
                //user_id: action.payload
            }
            state.push(newItemShop);
        },
        toggleItem: (state, action)=>{
            const itemShop = state.find(i =>i.id=== action.payload);
            itemShop.done = !itemShop.done;
        },
        deleteItem: (state, action)=>{
            state = state.filter((i)=> i.id !== action.payload);
            return state;
        },
        deleteAllItem: (state, action)=>{

        },
    }
});

export const { addItem, toggleItem, deleteItem, deleteAllItem } = shoplistSlice.actions;

export default shoplistSlice.reducer

