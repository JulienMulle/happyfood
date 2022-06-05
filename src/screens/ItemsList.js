import React, {useState, useEffect} from 'react';
import {View, StyleSheet, SafeAreaView, Modal, Text, RefreshControl, Pressable, FlatList, TextInput} from 'react-native';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/shoplistSlice';

//components
import ItemsTile from '../components/ItemsTile'
import FloatinBtn from '../components/FloatingBtn';
import ItemAddForm from '../components/ItemAddForm';


const ItemsList = () => {
  const [items, setItems] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [resfreshing, setRefreshing] = useState(false);
  const [search, setSearch] = useState('');
  const [searchData, setSearchData] = useState([])
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
        setItems(response.data);
        setSearchData(response.data);
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

  const searchFilter = (text) => {
    if (text) {
      const newData = searchData.filter((item)=>{
        const itemData = item.name ? item.name : '';
        const textData = text;
        return itemData.indexOf(textData) > -1;
      });
      setItems(newData);
      setSearch(text);
    } else {
      setItems(searchData);
      setSearch(text);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        value={search}
        placeholder={"j'ai besoin de..."}
        onChangeText={(text)=>searchFilter(text)}
      />
      <FlatList
        data={items}
        key={items.id}
        renderItem={({item})=>
          <ItemsTile 
           name={item.name}
           removeItem={()=>deleteItem(item.id)}
           addShoppingList={()=>dispatch(addItem(item))}
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
   height:'92%',
  },
})

export default ItemsList