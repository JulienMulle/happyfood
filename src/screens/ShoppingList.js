import React from 'react';
import { FlatList, Button, View, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { deleteItem, increment, decrement, deleteAllItem } from '../redux/shoplistSlice';

//components
import ShoppingTile from '../components/ShoppingTile';

const ShoppingList = () => {

  //redux
  const shoplist = useSelector((state)=>state.shopList);
  const dispatch = useDispatch();
  console.log(shoplist);

  return (
    <View>
    <FlatList 
      style={styles.container}
      data={shoplist}
      key={shoplist.id}
      renderItem={({item})=>
        <ShoppingTile 
          name={item.name}
          removeShopItem={()=>dispatch(deleteItem(item.id))}
          add={()=>dispatch(increment(item.id))}
          remove={()=>{
            if (item.quantity === 1) {
              dispatch(deleteItem(item.id));
              
            } else {
              dispatch(decrement(item.id));
            }
          }}
          quantity={item.quantity}
        />}
    />
    <Button
      style={styles.btn}
      title="*pouf*"
      onPress={()=>dispatch(deleteAllItem())}
    />
    </View>
  )
};

const styles= StyleSheet.create({
  container:{
    height:'85%',
    //marginBottom: 60
  },
  btn:{
    width:'45%'
  },
})
export default ShoppingList