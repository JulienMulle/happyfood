import { add_ShopList } from "./actionTypes";

export const addShopList = (name) => ({
    type: add_ShopList,
    payload:{
        name
    }
});