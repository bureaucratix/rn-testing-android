import React from 'react'
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native'

const ListItem = props => {
    return (
        <TouchableOpacity onPress={props.onDelete}>
            <View style={styles.listItem}> 
                <Text>{props.textValue}</Text> 
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({listItem: {
    backgroundColor: 'purple',
    marginVertical: 5,
    height: 30,
    justifyContent:'center',
    borderWidth: 1,
    borderColor: 'black'
  }})

export default ListItem