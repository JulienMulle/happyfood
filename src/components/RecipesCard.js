import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import noImage from '../assets/noImage.jpg'

const RecipesCard = ({title,ingredient, description, picture, addMenu, patchRecipe})=> {

    return(
            <View style={styles.container}>
                <Image 
                style={styles.image} source={noImage}/>
                <Text>{title}</Text>
                <Text>{ingredient}</Text>
                <Text>{description}</Text>
                <View style={styles.btn}>
                <TouchableOpacity onPress={addMenu}>
                    <View style={styles.item}>
                    <Icon 
                    name="add-circle-outline"
                    size={25}
                    />
                    <Text>Ajouter au Menu</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={patchRecipe}>
                    <View style={styles.item}>
                        <Icon 
                         name="create"
                         size={25}
                        />
                        <Text>Modifier</Text>
                    </View> 
                </TouchableOpacity>
                </View>
            </View>
    )
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems:'center',
        backgroundColor: "white",
        height: 600,
        //width:'80%',
        borderRadius: 30
    },
    image:{
        width:'100%',
        height: 350,
        resizeMode: 'cover',
        marginBottom: 10,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        borderBottomRightRadius: 180,
        borderBottomLeftRadius: 180,
    },
    item:{
        flexDirection:'row'
    },
    btn:{
        flexDirection:'row',
        justifyContent:'space-between',
        border:'solide'
    }
})
export default RecipesCard;