import React, { useEffect, useState} from 'react'
import {Text,View, StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ShoppingList = () => {
  const [listing, setListing] = useState()
  const readData = async () => {
    try {
      const shopList = await AsyncStorage.getItem('001')
      if (shopList !== null) {
        setListing(shopList);
      }
    } catch(e) {
      alert('oups ca ne fonctionne pas')
    }
  };
  useEffect(()=>{
    readData
  },[])
  console.log(listing)
  return (
    <View style={styles.container}>
        <Text>{listing}</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems: 'center',
    width: '80%',
    height:'93%',
    backgroundColor: 'red',
    
  }
})

export default ShoppingList