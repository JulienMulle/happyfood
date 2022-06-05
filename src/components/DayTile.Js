import React, {useState, useEffect} from 'react';
import { Text, TouchableOpacity, View, StyleSheet, Image, Modal, Pressable,Dimensions, Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Picture from '../assets/noImage.jpg'
import { useDispatch, useSelector } from 'react-redux';
import { addRecipe } from '../redux/menuSlice';


//components
import ModalRecipes from './ModalRecipes';

const DayTile = ({name})=>{
    const [recipes, setRecipes] = useState('');
    const [isModalVisible, setIsModalVisible] = useState(false);
    //redux
    const listingMenu = useSelector((state)=>state.listingMenu);
    const dispatch = useDispatch();

    const changeModalVisibility = (bool) => {
        setIsModalVisible(bool)
    };

    const setData = (option) => {
        //dispatch(addRecipe(option));
        setRecipes(option);
    }
    const navigation = useNavigation();
    
    return(
        <View style={styles.container}>
            <Text>{name}</Text>
            <TouchableOpacity 
            onPress={()=>navigation.navigate('RecipeDetail', 
            {recipeId: recipes.id}
            ) }  
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
        
        height: Dimensions.get("window").height /8.5,
        width: Dimensions.get("window").width - 20,
        borderRadius: 10,
        backgroundColor:'white',
        justifyContent: 'center',
        alignItems: "center",
        marginLeft:10,
        marginBottom: 5,
    }
})

export default DayTile;