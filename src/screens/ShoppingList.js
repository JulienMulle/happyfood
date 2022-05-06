import React, { useEffect, useState} from 'react'
import {Text,View, StyleSheet, FlatList, scrollView} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { toggleItem, deleteItem } from '../features/shoplistSlice';

//components
import ShoppingTile from '../components/ShoppingTile';


const ShoppingList = () => {

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