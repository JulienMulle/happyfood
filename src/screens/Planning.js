import React, { useState } from 'react'
import {SafeAreaView, StyleSheet, FlatList} from 'react-native';

//components
import DayTile from '../components/DayTile.js';

const Menu = () => {
  const [day, setDay] = useState([{"id":"01","name":"lundi", "recipe":""},{"id":"02","name":"mardi", "recipe":""},{"id":"03","name":"mercredi", "recipe":""},{"id":"04","name":"jeudi", "recipe":""},{"id":"05","name":"vendredi", "recipe":""},{"id":"06","name":"samedi", "recipe":""},{"id":"07","name":"dimanche", "recipe":""} ]);

  return (
    <SafeAreaView>
      <FlatList 
        style={styles.container}
        data={day}
        key={day.id}
        //horizontal
        showsHorizontalScrollIndicator={false}
        snapToAlignment='center'
        
        renderItem={({item})=>{
          return(
            <DayTile 
            name={item.name}
          />
          )
        }
          }
      >
      </FlatList>
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