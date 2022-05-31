import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import RecipeDetail from '../../screens/RecipeDetail';
import RecipesList from '../../screens/Recipes';

        
export default function RecipesStack() {

    const Stack = createStackNavigator();

    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Recipes" component={RecipesList} />
            <Stack.Screen name="RecipeDetail" component={RecipeDetail} />
      </Stack.Navigator>
    )
        }