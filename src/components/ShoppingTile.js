import React from 'react';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useDispatch } from 'react-redux';

const ShoppingTile = ({name, removeShopItem,ToggleShopItem })=> {
    
    return(
        <View style={styles.itemContainer}>
            <View style={styles.container}>
                <Text style={styles.name}>{name}</Text>
                <TouchableOpacity onPress={removeShopItem}>
                    <Icon 
                    name="trash"
                    size={25}
                    color='tomato'
                    />
                </TouchableOpacity>
            </View>
            
        </View>
    )
};
const styles = StyleSheet.create({
    itemContainer:{
        width: '100%',
        alignItems: 'center',
        paddingBottom:10
    },
    container:{
        flexDirection:'row',
        width: '80%',
        paddingTop:10,
        height: 50,
        justifyContent: 'space-between',
        paddingLeft: 30,
        backgroundColor: 'white',
        borderRadius: 10,
        // Shadow for iOS
        shadowOpacity: 0.08,
        shadowOffset: {
          width: 0,
          height: 20,
        },
        shadowRadius: 10,
        // Shadow for Android
        elevation: 5,
      },
    name:{
        fontSize: 16,
    },
    btn:{
        flexDirection:'row',
        paddingRight: 30,
    },
})

export default ShoppingTile;