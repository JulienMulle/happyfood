import { StyleSheet, Text, View, Dimensions, ScrollView, TouchableOpacity } from 'react-native'
import React, {useEffect, useState} from 'react';
import axios from 'axios';

//params

const OPTIONS = ['tarte aux pommes', 'couscous', 'saumon aux légumes', 'quiche', 'raclette', 'salade composé', 'gateau au chocolat'];
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const ModalRecipes = ({modalVisibility, setData}) => {
  const [recipes, setRecipes] = useState([]);

  const loadRecipes = ()=>{
    axios.get(`http://10.0.2.2:5000/recipes`)
    .then((response)=>{
      setRecipes(response.data)
    })
    .catch((error)=>{
      console.log('erreur', error)
    })
  }
  useEffect(loadRecipes,[])
 
  const onPressRecipe = (recipesList)=>{
    modalVisibility(false);
    setData(recipesList.title)
  };

  const recipesList = recipes.map((recipe)=>{
    return(
      <TouchableOpacity
        style={styles.recipes}
        data={recipe}
        key={recipe.id}
        onPress={()=> onPressRecipe(recipe)}
      >
        <Text
          style={styles.text}
        >
          {recipe.title}
        </Text>

      </TouchableOpacity>
    )
  });

  return (
    <TouchableOpacity
          onPress={modalVisibility}
        //onPress={()=> props.changeModalVisibility(false)}
        style={styles.container}
    >
        <View 
         style={[styles.modal, {width: WIDTH - 20, height: HEIGHT /2}]}
        >
          <ScrollView>
            {recipesList}
          </ScrollView>
        </View>
    </TouchableOpacity>
  )
}

export default ModalRecipes;

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
    modal:{
        backgroundColor:'yellow',
        borderRadius:10
    },
    recipes:{
      alignItems:'center'
    },
    text:{
      margin: 15, 
      fontSize: 20, 
      fontWeight: 'bold'
    }
})