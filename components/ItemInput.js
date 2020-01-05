import React from 'react'
import {StyleSheet, View, TextInput, Button, Modal} from 'react-native'

const ItemInput = props => {
    const confirmHandler = () => {
        props.addItemHandler();
        props.setItem('')

    }

    return (
        <Modal animationType="fade" visible={props.visible}>
          <View style={styles.input}>
            <TextInput placeholder="Input List Item" onChangeText={props.inputHandler} style={styles.inputText} value={props.listItem} />
           
            <View style={styles.buttonContainer}>
                <View style={styles.button}>
                    <Button title="CANCEL" color="red" onPress={props.cancel} />
                </View>
                <View style={styles.button}>
                    <Button title="ADD" color="green" onPress={confirmHandler}/>
                </View>
            </View>
            
          </View>
      </Modal>
    ) 
}

const styles = StyleSheet.create({

    input: {
        flex: 1,
        backgroundColor: '#a5a',
        justifyContent: 'center',
        alignItems: 'center'
      },
      inputText: {
        backgroundColor: '#fff',
        height:35, 
        width:'70%',
        marginBottom: 10
      },
      buttonContainer: {
          flexDirection:'row',
          justifyContent:'space-around', 
          width: '70%'},
      button: {
          width: '45%'
      }
      

})

export default ItemInput