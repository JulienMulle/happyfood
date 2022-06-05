import { createSlice } from "@reduxjs/toolkit";

export const shoplistSlice = createSlice({
    name: 'shoppinglist',
    initialState: [], 
    reducers:{
        addItem(state, action){

            const { id } = action.payload;

            const find = state.find((item) => item.id === id);
            if (find) {
              return state.map((item)=>
                item.id === id ?
                {
                  ...item,
                  quantity: item.quantity + 1,
                }
                :item
              );
            } else {
              state.push({
                ...action.payload,
                quantity: 1,
              });
            }
          },
        
        toggleItem: (state, action)=>{
            const itemShop = state.find(i =>i.id=== action.payload);
            itemShop.done = !itemShop.done;
        },
        deleteItem: (state, action)=>{
            state = state.filter((i)=> i.id !== action.payload);
            return state;
        },
        increment(state, { payload }) {
            return state.map((item) =>
              item.id === payload
                ? {
                    ...item,
                    //je rajoute une champ qui n'est pas en bdd
                    quantity: item.quantity + 1,
                  }
                : item
            );
          },
        decrement(state, { payload }) {
            return state.map((item) =>
              item.id === payload
                ? {
                    ...item,
                    quantity: item.quantity - 1,
                  }
                : item
            );
          },
        deleteAllItem: (state)=>{
          return [];
        },
    }
});

export const { addItem, toggleItem, deleteItem, deleteAllItem, increment, decrement  } = shoplistSlice.actions;

export default shoplistSlice.reducer

