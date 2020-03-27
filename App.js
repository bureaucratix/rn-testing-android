import React, { useState } from 'react';
import { FlatList, TouchableWithoutFeedback, Keyboard, View, Text, StyleSheet, TextInput, Button, Alert } from 'react-native';
import ListItem from './components/ListItem'
import ItemInput from './components/ItemInput'

export default function App() {
  const [enteredListItem, setEnteredListItem] = useState('');
  const [fullList, setList] = useState([])
  const [isAdd, setIsAdd] = useState(false)
  const closeModal = () => setIsAdd(false)
  const listItemInputHandler = (text) => {
    setEnteredListItem(text)
  }
  const deleteItem = itemKey =>{
    setList(fullList => {
      return fullList.filter((item) => item.key !== itemKey )
    })
    
  }

  const addItemHandler = () => {
    setList(fullList => [...fullList, {key:Math.random().toString(), value: enteredListItem}])
    setIsAdd(false)

  }

  return (

    <View style={styles.mainScreen}>
      <Button title={"Add Item"} onPress={()=>setIsAdd(true)}/>
      <ItemInput visible={isAdd} setItem={setEnteredListItem} cancel={closeModal}inputHandler={listItemInputHandler} listItem={enteredListItem} addItemHandler={addItemHandler}/>
      <FlatList 
        data={fullList} 
        renderItem={itemData => ( <ListItem onDelete={()=> deleteItem(itemData.item.key)} textValue={itemData.item.value}/> )}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  mainScreen: {
    flex: 1,
    backgroundColor: '#a5a',
    padding: 50,
  },
  listItem: {
    backgroundColor: 'purple',
    marginVertical: 5,
    height: 30,
    justifyContent:'center',
    borderWidth: 1,
    borderColor: 'black'
  }
  
});
