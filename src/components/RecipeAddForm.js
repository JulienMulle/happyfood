import React, {useState} from "react";
import {StyleSheet, View, TextInput, Button, Text} from "react-native";
import axios from "axios";
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const RecipeAddForm = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [file, setFile] = useState('');

    const options = {
        title: 'Select Image',
        type: 'library',
        options: {
            maxHeight: 200,
            maxWidth: 200,
            selectionLimit: 1,
            mediaType: 'photo',
            includeBase64: false,
    }};

    const openGallery = async () =>{
        const image = await launchImageLibrary(options);
        setFile(
            image.assets[0]
          )
          console.log(image)
    }
    const FormData = global.FormData;
    const formData = new FormData();
    formData.append( 'title',title);
    formData.append( 'description',description);
    formData.append('picture', file)
    
    //console.log(formData)
    console.log(file,'contenu dans file')

    const NewRecipe = ()=>{
    fetch(`http://10.0.2.2:5000/recipe`,{
        method: 'post',
        headers: {
            'Content-Type': 'multipart/form-data'
        },
        body: formData
    }).then(response => {
        console.log(response,'test ok')
    }).catch(err=> console.log(err))
}

    /*const NewRecipe = ()=>{
        axios({
            url:`http://10.0.2.2:5000/recipe`,
            data: formData,
            method: 'post',
            headers: {
                'Content-Type': 'multipart/form-data'
            },
    })};*/

    return(
        <View>
            <Text>Formulaire creation de recette</Text>
            <TextInput 
             style={stlyes.container}
             onChangeText={setTitle}
             value={title}
             placeholder={'Titre'}
             />
             <TextInput 
             style={stlyes.container}
             onChangeText={setDescription}
             value={description}
             placeholder={'description'}
             />
             <Button
              title="upload"
              onPress={openGallery}
             />

             <Button
              title="Ajouter"
              onPress={NewRecipe}
             />
        </View>
    )
};
const stlyes = StyleSheet.create({
    container:{

    }
})
export default RecipeAddForm;