import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';

import shoplistSlice from "./shoplistSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Reducers = combineReducers({
    shopList: shoplistSlice,
});

const persistConfig = {
    key: 'root',
    storage: AsyncStorage
};

const persistedReducer = persistReducer(persistConfig, Reducers);

const store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk],
});

export default store;
/*export const store = configureStore({
    reducer: {
        shopList: shoplistSlice
    }
    
});*/
