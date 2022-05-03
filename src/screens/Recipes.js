import React, {useState, useEffect, useRef} from 'react'
import {Text, View, StyleSheet, Image, Dimensions, Animated, Platform, TouchableOpacity } from 'react-native';
import axios from 'axios';
import Picture from '../assets/noImage.jpg'
//import RecipesCard from '../components/RecipesCard';


const { width } = Dimensions.get('window');
const SPACING = 10;
const ITEM_SIZE = Platform.OS === 'ios' ? width * 0.72 : width * 0.75;
const EMPTY_ITEM_SIZE = (width - ITEM_SIZE) / 2;


const Recipes = ({navigation}) => {
  const [recipes, setRecipes] = useState([]);
  const scrollX = useRef(new Animated.Value(0)).current;
    
  const loadData = ()=>{
    axios.get(`http://10.0.2.2:5000/recipes`)
      .then((response)=>{
      const RecipesData = response.data;
      setRecipes([{key: 'empty-left'}, ...RecipesData, {key: 'empty-right'}]);
      })
      .catch((error)=>{
      console.log('error', error)
        })
    }; 
    useEffect(loadData,[])

  
  //const recipeDetail = ()=>console.log('testdetail')
    
  return (
    
    <View style={styles.container}>
      <Animated.FlatList
      showsHorizontalScrollIndicator={false}
      data={recipes}
      key={recipes.id}
      horizontal
      bounces={false}
      decelerationRate={Platform.OS === 'ios' ? 0 : 0.98}
      renderToHardwareTextureAndroid
      //contentContainerStyle={{alignItems: 'center'}}
      snapToInterval={ITEM_SIZE}
      snapToAlignment='start'
      onScroll={Animated.event(
        [{ nativeEvent: { contentOffset: {x: scrollX } } }],
        {useNativeDriver: false}
      )}
      scrollEventThrottle={16}
      renderItem={({item, index})=>{
        if (!item.picture) {
          return <View style={{width: EMPTY_ITEM_SIZE}}/>;
        }
        const inputRange = [
          (index - 2) * ITEM_SIZE,
          (index - 1) * ITEM_SIZE,
          index * ITEM_SIZE
        ];

        const translateY = scrollX.interpolate({
          inputRange,
          outputRange: [100, 50, 100],
          extrapolate: 'clamp',
        });

        return(
          <TouchableOpacity onPress={()=>navigation.navigate('RecipeDetail', 
          {recipeId: item.id}
            )}>
          <View style={{width: ITEM_SIZE}}>
            <Animated.View
              style={{
                marginHorizontal: SPACING,
                padding: SPACING * 2,
                alignItems: 'center',
                transform: [{ translateY }],
                backgroundColor: 'white',
                borderRadius: 34,
              }}
            >
              <Image 
                resizeMode="cover"
                source={Picture}
                style={styles.posterImage}
              />
              <Text style={{ fontSize: 15 }} numberOfLines={2}>
                {item.title}
              </Text>
            </Animated.View>
          </View>
          </TouchableOpacity>
        )
      }}
      />      
    </View>

  )};

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
  },
  paragraph: {
    margin: 20,
    fontSize: 10,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  posterImage: {
    width: '100%',
    height: ITEM_SIZE * 1.2,
    resizeMode: 'cover',
    borderRadius: 24,
    margin: 0,
    marginBottom: 10,
  },
});
export default Recipes