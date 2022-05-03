import React, {useState, useEffect} from 'react';
import {View, StyleSheet, SafeAreaView, Modal, Text, RefreshControl, Pressable, FlatList} from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

//components
import ItemsTile from '../components/ItemsTile'
import FloatinBtn from '../components/FloatingBtn';
import ItemAddForm from '../components/ItemAddForm';
import { add } from 'react-native-reanimated';


const ItemsList = () => {
  const [items, setItems] = useState("");
  const [modalVisible, setModalVisible] = useState(false)
  const [resfreshing, setRefreshing] = useState(false)

  const onRefresh =()=>{
    setRefreshing(true);
    loadItems();
    setRefreshing(false); 
  }
  const loadItems = ()=>{
    axios.get(`http://10.0.2.2:5000/items/`)
    .then((response)=>{
        setItems(response.data)
    })
  }
  useEffect(loadItems,[]);

  const deleteItem = async (id)=> {
    const newItemsList = items.filter((item)=>{
    return item.id !== (id)
    });
    await axios.delete(`http://10.0.2.2:5000/item/${id}`);   
    setItems(newItemsList);
  };

  const addShopList = async (id) =>{
    
    try {
      const addItem = items.filter((item)=>{
        return item.id !== id
      });
      const jsonValue = JSON.stringify(addItem)
      await AsyncStorage.setItem('001', jsonValue).then(console.log('success'));
      alert(addItem);
      console.log(addItem)
    }
    catch(error){
      console.error(error, 'erreur dans le asyncStorage')
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={items}
        key={items.id}
        renderItem={({item})=>
          <ItemsTile 
           name={item.name}
           removeItem={()=>deleteItem(item.id)}
           addShoppingList={()=>addShopList(item.name)}
           />}
        refreshControl={
          <RefreshControl
           refreshing={resfreshing}
           onRefresh={onRefresh}
          />
          }
      />
      <Modal
         style={styles.modalView}
         animationType='slide'
         transparent={false}
         visible={modalVisible}
        >
          <View>
            <ItemAddForm />
            <Pressable
             onPress={()=> setModalVisible(!modalVisible)}
             >
               <Text>close</Text>
            </Pressable>
          </View>
        </Modal>
        <FloatinBtn
          toggle={()=>setModalVisible(true)}
        />
        
      {/*<ScrollView
       refreshControl={
        <RefreshControl
         refreshing={resfreshing}
         onRefresh={onRefresh}
        />
        }
      >
      {
        items.map((item)=> {
          return (
            <ItemsTile
            key={item.id}
            name={item.name}
            removeItem={()=>deleteItem(item.id)}
            addShoppingList={addShopList}
           />
          )
        })
      }
        <Modal
         style={styles.modalView}
         animationType='slide'
         transparent={false}
         visible={modalVisible}
        >
          <View>
            <ItemAddForm />
            <Pressable
             onPress={()=> setModalVisible(!modalVisible)}
             >
               <Text>close</Text>
            </Pressable>
          </View>
        </Modal>
        <FloatinBtn
          toggle={()=>setModalVisible(true)}
        />
    </ScrollView>*/}
    </SafeAreaView>
  )
};
const styles = StyleSheet.create({
  modalView:{
    margin:20, 
    borderRadius: 20,
    padding: 35,
    alignItems:'center'
  },
  container:{
   height:'93%',
  },
})

export default ItemsList