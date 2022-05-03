import React, {useState, useEffect} from "react";
import {StyleSheet, ScrollView} from "react-native";
import axios from "axios";

//components
import RecipesCard from "../components/RecipesCard";

const RecipeDetail = ({ route }) => {
    const { recipeId } = route.params;
    const [recipe, setRecipe] = useState("");

    useEffect(()=>{
        axios.get(`http://10.0.2.2:5000/recipe/${recipeId}`)
        .then((response)=>{
            setRecipe(response.data)
        })
      },[]);


    return(
        <ScrollView style={styles.container}>
            < RecipesCard 
                //picture={recipe.picture}
                title={recipe.title}
                description={recipe.description}
                ingredient={recipe.ingredient}
                
            />
        </ScrollView>
    )
};
const styles = StyleSheet.create({
    container:{
    padding: 10
    }
})

export default RecipeDetail;