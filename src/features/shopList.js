import { configureStore } from "@reduxjs/toolkit";

import shoplistSlice from "./shoplistSlice";

export const store = configureStore({
    reducer: {
        shopList: shoplistSlice
    }
    
});
