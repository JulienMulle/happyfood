import React, {useState} from "react";
import {StyleSheet, View, TextInput, Button, Text} from "react-native";
import axios from "axios";


const ItemAddForm = () => {
    const [onChangeText, setOnChangeText] = useState('')
    const [loading, setLoading] = useState('')

    const loadItems = ()=>{
        axios.get(`http://10.0.2.2:5000/items/`)
        .then((response)=>{
            setLoading(response.data)
        })
      }
    const NewItem = () => {
        axios.post(`http://10.0.2.2:5000/item/`, { name: onChangeText })
        .then(()=>{
            setOnChangeText(); 
            loadItems();
        })
        //
    }
    return(
        <View>
            <Text>Formulaire creation d'article'</Text>
            <TextInput 
             style={stlyes.container}
             onChangeText={setOnChangeText}
             value={onChangeText}
             placeholder={'nouvel article'}
             />
             <Button
              title="Ajouter"
              onPress={NewItem}
             />
        </View>
    )
};
const stlyes = StyleSheet.create({
    container:{

    }
})
export default ItemAddForm;