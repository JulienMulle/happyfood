import React, {useState, useEffect} from 'react';
import { Text, TouchableOpacity, View, StyleSheet, Button, Modal, Pressable,Dimensions } from 'react-native';

//components
import ModalRecipes from './ModalRecipes';

const DayTile = ({name})=>{
    const [recipes, setRecipes] = useState('no recipe');
    const [isModalVisible, setIsModalVisible] = useState(false);

    const changeModalVisibility = (bool) => {
        setIsModalVisible(bool)
    };

    const setData = (option) => {
        setRecipes(option)
    }

    return(
        <View style={styles.container}>
            <Text>{name}</Text>
            <View>
                <Text>{recipes}</Text>
            </View>
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
        height: Dimensions.get("window").height,
        width: Dimensions.get("window").width,
        backgroundColor:'white',
        justifyContent: 'center',
        alignItems: "center",
        width: '80%',
        heigth: '70%',
        
    }
})

export default DayTile;