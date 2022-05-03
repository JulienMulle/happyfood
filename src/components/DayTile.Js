import React from 'react';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';

const DayTile = ({day})=>{

    return(
        <View>
            <Text>{day}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    
})

export default DayTile;