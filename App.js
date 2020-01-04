import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [outputText, setOutputText] = useState(0)
  return (
    <View style={styles.container}>
      <Text>{outputText}</Text>
      <Button title="Add One" onPress={() => setOutputText(outputText+1)}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e09000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    color: '#555555'
  },
});
