import React from 'react';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


const RecipesCard = ({name, removeItem, editItem, addShoppingList})=> {
    return(
        <View style={styles.itemContainer}>
            <View style={styles.container}>
                <Text style={styles.name}>{name}</Text>
                <View style={styles.btn}>
                <TouchableOpacity onPress={removeItem}>
                    <Icon 
                    name="trash"
                    size={25}
                    color='tomato'
                    />
                </TouchableOpacity>
                {/*<TouchableOpacity onPress={editItem}>
                    <Icon 
                    name="create"
                    size={25}
                    />
    </TouchableOpacity>*/}
                <TouchableOpacity onPress={addShoppingList}>
                    <Icon 
                    name="add-circle-outline"
                    size={25}
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
        flexDirection:'row',
        paddingRight: 30,
    },
})

export default RecipesCard;