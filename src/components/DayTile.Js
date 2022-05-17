import React, {useState, useEffect} from 'react';
import { Text, TouchableOpacity, View, StyleSheet, Button, Modal, Pressable } from 'react-native';

const DayTile = ({name})=>{
    const [modalVisible, setModalVisible] = useState(false)
    return(
        <View style={styles.container}>
            <Text>{name}</Text>
            <View>
                <Text>Recette</Text>
            </View>
            <Modal
                animationType='slide'
                transparent={false}
                visible={modalVisible}
            >
                <Text>test recette ok</Text>
                <Pressable
             onPress={()=> setModalVisible(!modalVisible)}
             >
               <Text>close</Text>
            </Pressable>
            </Modal>
            <Button
                onPress={()=> setModalVisible(!modalVisible)}
                title='Ajouter Recette'
            />
        </View>

    )
};

const styles = StyleSheet.create({
    container:{
        backgroundColor:'white',
        justifyContent: 'center',
        alignItems: "center",
        width: '80%',
        heigth: '70%',
        
    }
})

export default DayTile;