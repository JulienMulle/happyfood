import React, { useState, useRef} from 'react'
import {Text,View, SafeAreaView, StyleSheet, FlatList, Animated} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';


//components
import DayTile from '../components/DayTile.js';
import ModalRecipes from '../components/ModalRecipes.js';



const Menu = () => {
  const [day, setDay] = useState([{"id":"01","name":"lundi", "recipe":""},{"id":"02","name":"mardi", "recipe":""},{"id":"03","name":"mercredi", "recipe":""},{"id":"04","name":"jeudi", "recipe":""},{"id":"05","name":"vendredi", "recipe":""},{"id":"06","name":"samedi", "recipe":""},{"id":"07","name":"dimanche", "recipe":""} ]);

  //redux
  const listingMenu = useSelector((state)=>state.listingMenu);
  const dispatch = useDispatch;
  console.log(listingMenu)

  const scrollX = useRef(new Animated.Value(0)).current;

  return (
    <SafeAreaView>
      <Animated.FlatList 
        style={styles.container}
        data={day}
        key={day.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToAlignment='start'
        decelerationRate={Platform.OS === 'ios' ? 0 : 0.98}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: {x: scrollX } } }],
          {useNativeDriver: false}
        )}
        scrollEventThrottle={16}
        renderItem={({item})=>
          <DayTile 
            name={item.name}
          />}
      >
      </Animated.FlatList>
    </SafeAreaView>
  )
};

const styles= StyleSheet.create({
  container:{

  }
})

export default Menu