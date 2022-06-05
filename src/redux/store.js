import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';
import AsyncStorage from "@react-native-async-storage/async-storage";

import shoplistSlice from "./shoplistSlice";
import menuSlice from "./menuSlice";

const Reducers = combineReducers({
    shopList: shoplistSlice,
    listingMenu: menuSlice,
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

