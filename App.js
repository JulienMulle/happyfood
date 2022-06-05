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
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import store from './src/redux/store';

//components
import ItemsList from './src/screens/ItemsList';
import ShoppingList from './src/screens/ShoppingList';
import RecipesStack from './src/stackNavigation/RecipesStack';
import MenuStack from './src/stackNavigation/MenuStack';
import Account from './src/screens/Account';

const Tab = createBottomTabNavigator();

const App = () => {
  let persistor = persistStore(store);

  return(
    <Provider store={store}>
      <PersistGate  persistor={persistor}>
      <NavigationContainer>
        <Tab.Navigator 
        screenOptions={({route}) => ({
          tabBarIcon: ({color}) =>{
            let iconName;
            switch(route.name){
              case 'Menu':
                iconName = 'home';
                break;
                case 'Recette':
                iconName = 'restaurant';
                break;
                case 'ItemsList':
                iconName = 'nutrition';
                break;
                case 'Liste de course':
                iconName = 'cart';
                break;
            }
            return <Icon  name={iconName} size={25}  color={color}/>
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'black',
          tabBarShowLabel: true,
          headerShown: false,
          tabBarStyle: {
            position: "absolute",
            bottom: 7,
            left: 15,
            right: 15,
            elevation: 0,
            backgroundColor: "white",
            borderRadius: 10,
            height: 50,
            // j'injecte le styles 
            ...styles.shadow
          }
        })
        }>
          <Tab.Screen 
          name="Menu"
          component={MenuStack}
          />
          <Tab.Screen 
          name="Recette"
          component={RecipesStack}
          />
          <Tab.Screen 
          name="ItemsList"
          component={ItemsList}
          />
          <Tab.Screen 
          name="Liste de course"
          component={ShoppingList}
          />
        </Tab.Navigator>
      </NavigationContainer>
      </PersistGate>
    </Provider>
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
