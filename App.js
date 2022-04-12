/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//components
import Menu from './src/screens/Menu';
import Recipes from './src/screens/Recipes';
import ItemsList from './src/screens/ItemsList';
import ShoppingList from './src/screens/ShoppingList';

const Tab = createBottomTabNavigator();

const App = () => {
  return(
   
      <NavigationContainer>
        <Tab.Navigator screenOptions={{headerShown: false}}>
          <Tab.Screen 
          name="Menu"
          component={Menu}
          />
          <Tab.Screen 
          name="Recipes"
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

export default App;
