/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// ne pas oublier : npx react-native link react-native-vector-icons
import Icon from 'react-native-vector-icons/Ionicons';

//components
import Menu from './src/screens/Menu';
import Recipes from './src/screens/Recipes';
import ItemsList from './src/screens/ItemsList';
import ShoppingList from './src/screens/ShoppingList';

const Tab = createBottomTabNavigator();

const App = () => {
  return(

      <NavigationContainer>
        <Tab.Navigator 
        screenOptions={({route}) => ({
          tabBarIcon: ({color}) =>{
            let iconName;
            switch(route.name){
              case 'Menu':
                iconName = 'home';
                break;
                case 'Recipes':
                iconName = 'restaurant';
                break;
                case 'ItemsList':
                iconName = 'document';
                break;
                case 'ShoppingList':
                iconName = 'cart';
                break;
                case 'search':
                iconName =  'search';
                break;
            }
            return <Icon  name={iconName} size={25}  color={color}/>
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'black',
          tabBarShowLabel: false,
          headerShown: false,
          tabBarStyle: {
            position: "absolute",
            bottom: 15,
            left: 15,
            right: 15,
            elevation: 0,
            backgroundColor: "white",
            borderRadius: 15,
            height: 50,
            // j'injecte le styles 
            ...styles.shadow
          }
        })
        }>
          <Tab.Screen 
          name="Menu"
          component={Menu}
          />
          <Tab.Screen 
          name="Recipes"
          component={Recipes}
          />
          <Tab.Screen 
          name="search"
          component={Recipes}
          />
          <Tab.Screen 
          name="ItemsList"
          component={ItemsList}
          />
          <Tab.Screen 
          name="ShoppingList"
          component={ShoppingList}
          />
        </Tab.Navigator>
      </NavigationContainer>
   
  )
}
const styles = StyleSheet.create({
  shadow:{
    shadowColor: "#7F5DF0",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5
  },
  container: {
    alignItems: 'flex-start',
    //justifyContent: 'center', 
    //top: 10
  } 
})
export default App;
