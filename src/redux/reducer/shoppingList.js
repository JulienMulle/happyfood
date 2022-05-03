import { add_ShopList } from "../action/actionTypes"

const initialState = [];

export const shoppingList = (state = initialState, action) => {
    switch(action.type){
        case add_ShopList:
            return [
                ...state,
                {
                    id:action.payload.id,
                    name: action.payload.name,
                },
            ];

        default:
            return state;
        
    }
}