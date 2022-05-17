import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const Counter = ({nb}) => {

    return(
        <View>
            <Text>{nb}</Text>
        </View>
    )
};

export default Counter;