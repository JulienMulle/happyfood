import { StyleSheet, Text, View, Dimensions, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'

//params

const OPTIONS = ['tarte aux pommes', 'couscous', 'saumon aux légumes', 'quiche', 'raclette', 'salade composé', 'gateau au chocolat'];
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const ModalRecipes = ({modalVisibility, setData}) => {

  const onPressRecipe = (option)=>{
    modalVisibility(false);
    setData(option)
  };

  const option = OPTIONS.map((recipe, index)=>{
    return(
      <TouchableOpacity
        style={styles.recipes}
        key={index}
        onPress={()=> onPressRecipe(recipe)}
      >
        <Text
          style={styles.text}
        >
          {recipe}
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
            {option}
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
      alignItems:'flex-start'
    },
    text:{
      margin: 15, 
      fontSize: 20, 
      fontWeight: 'bold'
    }
})