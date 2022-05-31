import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import RecipeDetail from '../../screens/RecipeDetail';
import Planning from '../../screens/Planning';
        
export default function MenuStack() {

    const Stack = createStackNavigator();

    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name='Planning' component={Planning}/>
            <Stack.Screen name="RecipeDetail" component={RecipeDetail} />
      </Stack.Navigator>
    )
        }