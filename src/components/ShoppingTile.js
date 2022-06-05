import React from 'react';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const ShoppingTile = ({name, removeShopItem,ToggleShopItem, quantity, add, remove })=> {
    
    return(
        <View style={styles.itemContainer}>
            <View style={styles.container}>
                <Text style={styles.name}>{name}</Text>
                <View style={styles.cmdbtn}>
                <TouchableOpacity onPress={add}>
                     <Icon
                        name='md-add'
                        size={15}
                        color="black"
                     />
                </TouchableOpacity>
                <Text>{quantity}</Text>
                <TouchableOpacity onPress={remove}>
                     <Icon
                        name='md-remove'
                        size={15}
                        color="black"
                     />
                </TouchableOpacity>
                
                <TouchableOpacity onPress={removeShopItem} style={styles.btn}>
                    <Icon 
                    name="trash"
                    size={25}
                    color='tomato'
                    />
                </TouchableOpacity>
                </View>
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
        paddingRight: 30,
    },
    cmdbtn:{
        flexDirection:'row',
        //justifyContent:'space-evenly'
    }
})

export default ShoppingTile;