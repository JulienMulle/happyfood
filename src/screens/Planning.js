import React, { useState, useRef} from 'react'
import {Text,View, SafeAreaView, StyleSheet, FlatList, Animated, Dimensions} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

//components
import DayTile from '../components/DayTile.js';

const { width } = Dimensions.get('window');
const SPACING = 10;
const ITEM_SIZE = Platform.OS === 'ios' ? width * 0.50 : width * 0.55;
const EMPTY_ITEM_SIZE = (width - ITEM_SIZE) / 2;

const Menu = ({navigation}) => {
  const [day, setDay] = useState([{"id":"01","name":"lundi", "recipe":""},{"id":"02","name":"mardi", "recipe":""},{"id":"03","name":"mercredi", "recipe":""},{"id":"04","name":"jeudi", "recipe":""},{"id":"05","name":"vendredi", "recipe":""},{"id":"06","name":"samedi", "recipe":""},{"id":"07","name":"dimanche", "recipe":""} ]);

  //redux
  const listingMenu = useSelector((state)=>state.listingMenu);
  const dispatch = useDispatch;
 

  return (
    <SafeAreaView>
      <Animated.FlatList 
        style={styles.container}
        data={day}
        key={day.id}
        //horizontal
        showsHorizontalScrollIndicator={false}
        snapToAlignment='center'
        
        renderItem={({item})=>{
          return(
            <DayTile 
            style={{
              marginHorizontal: SPACING,
              padding: SPACING * 2,
              alignItems: 'center',
              backgroundColor: 'white',
              borderRadius: 34,
            }}
            name={item.name}
          />
          )
        }
          }
      >
      </Animated.FlatList>
    </SafeAreaView>
  )
};

const styles= StyleSheet.create({
  container:{
    height:'91%',
    //marginBottom: 60
  }
})

export default Menu