import React, {useState, useEffect} from 'react';
import {View, StyleSheet, SafeAreaView, Modal, Text, RefreshControl, Pressable, FlatList} from 'react-native';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addItem } from '../features/Redux';

//components
import ItemsTile from '../components/ItemsTile'
import FloatinBtn from '../components/FloatingBtn';
import ItemAddForm from '../components/ItemAddForm';


const ItemsList = () => {
  const [items, setItems] = useState("");
  const [modalVisible, setModalVisible] = useState(false)
  const [resfreshing, setRefreshing] = useState(false)
  //redux
  const dispatch = useDispatch();

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

  const addShopList = (id)=>{
    const newItem = items.filter((item)=>{
      return item.id !==(id)
    })
    dispatch(addItem(newItem))
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={items}
        key={items.id}
        renderItem={({item})=>
          <ItemsTile 
           name={item.name}
           removeItem={()=>deleteItem(item.id)}
           addShoppingList={()=>dispatch(addItem(item.name))}
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