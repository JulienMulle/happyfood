import React, { useState, useEffect} from 'react'
import {Text,View, SafeAreaView, StyleSheet, FlatList, Modal} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';


//components
import DayTile from '../components/DayTile.js';
import ModalRecipes from '../components/ModalRecipes.js';



const Menu = () => {
  //const initialData: [{"id":"01","name":"lundi", "recipe":""},{"id":"02","name":"mardi", "recipe":""},{"id":"03","name":"mercredi", "recipe":""},{"id":"04","name":"jeudi", "recipe":""},{"id":"05","name":"vendredi", "recipe":""},{"id":"06","name":"samedi", "recipe":""},{"id":"07","name":"dimanche", "recipe":""} ];
  const [day, setDay] = useState([{"id":"01","name":"lundi", "recipe":""}]);

  //redux
  const listingMenu = useSelector((state)=>state.listingMenu);
  const dispatch = useDispatch;
  console.log(listingMenu)

  return (
    <SafeAreaView>
      <FlatList 
        //style={styles.container}
        data={day}
        key={day.id}
        //horizontal
        showsHorizontalScrollIndicator={false}
        snapToAlignment='start'
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
     flex:1,
     //flexDirection:'column'
    alignItems:'center',
    justifyContent:'center'
  }
})

export default Menu