import React, { useState, useEffect} from 'react'
import {Text,View, SafeAreaView, StyleSheet, FlatList} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';


//components
import DayTile from '../components/DayTile.js';


const Menu = () => {
  //const initialData: [{"id":"01", "day":"lundi", "recipes":""}];
  const [day, setDay] = useState([{"id":"01","name":"lundi", "recipe":""},{"id":"02","name":"mardi", "recipe":""},{"id":"03","name":"mercredi", "recipe":""}, ]);

  //redux
  const listingMenu = useSelector((state)=>state.listingMenu);
  const dispatch = useDispatch;
  console.log(listingMenu)

  return (
    <SafeAreaView>
      <FlatList 
        style={styles.container}
        data={day}
        key={day.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item})=>
          <DayTile 
            name={item.name}
          />}
      >
      </FlatList>
    </SafeAreaView>
  )
};

const styles= StyleSheet.create({
  container:{
    //alignItems:'center',
    //justifyContent:'center'
  }
})

export default Menu