import React, { useEffect, useState} from 'react'
import {Text,View, StyleSheet, FlatList, scrollView} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { toggleItem, deleteItem } from '../features/Redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'react-persist';

//components
import ShoppingTile from '../components/ShoppingTile';


const ShoppingList = () => {
  const persistConfig = {
    key:'root',
    storage: AsyncStorage,
    whitelist: []
  }
  //redux
  const shoplist = useSelector((state)=>state.shopList);
  const dispatch = useDispatch();
  console.log(shoplist)

  return (
    <FlatList 
      data={shoplist}
      key={shoplist.id}
      renderItem={({item})=>
        <ShoppingTile 
          name={item.name}
          removeShopItem={()=>dispatch(deleteItem(item.id))}
        />}
    />
      
  )
};

const styles = StyleSheet.create({
  container:{
   
    
  }
})

export default ShoppingList