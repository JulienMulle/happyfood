import React, {useState, useEffect} from 'react';
import { Text, TouchableOpacity, View, StyleSheet, Image, Modal, Pressable,Dimensions, Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Picture from '../assets/noImage.jpg'

//components
import ModalRecipes from './ModalRecipes';

const DayTile = ({name})=>{
    const [recipes, setRecipes] = useState({title:'no recipe'});
    const [isModalVisible, setIsModalVisible] = useState(false);

    const changeModalVisibility = (bool) => {
        setIsModalVisible(bool)
    };

    const setData = (option) => {
        setRecipes(option)
    }
    const navigation = useNavigation();

    return(
        <View style={styles.container}>
            <Text>{name}</Text>
            <TouchableOpacity 
            onPress={()=>navigation.navigate('RecipeDetail', 
            {recipeId: recipes.id}
            )}
            >
                <Text>{recipes.title}</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={()=>changeModalVisibility(true)}
            >
                <Text>choisi une recette</Text>
            </TouchableOpacity>
            <Modal
             transparent={true}
             animationType='fade'
             visible={isModalVisible}
             nRequestClose={()=>changeModalVisibility(false)}
            >
                <ModalRecipes
                    modalVisibility={changeModalVisibility}
                    setData={setData}
                  //changeModalVisibility={changeModalVisibility}
                />
            </Modal>
        </View>

    )
};

const styles = StyleSheet.create({
    container:{
        height: Dimensions.get("window").height /8,
        width: Dimensions.get("window").width - 20,
        borderRadius: 10,
        backgroundColor:'white',
        justifyContent: 'center',
        alignItems: "center",
        padding: 10,
        margin: 10,
        marginBottom: 2,
    }
})

export default DayTile;