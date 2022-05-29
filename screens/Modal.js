import React from 'react'
import { Text, StyleSheet, Button } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

function Modal ({ route, navigation }) {
  const { name } = route.params

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Modal</Text>
      <Text style={styles.secondText}>Name: {JSON.stringify(name)}</Text>
      <Button 
        onPress={() => navigation.goBack()} 
        title="Dismiss"
      />
    </SafeAreaView>
  )
}

export default Modal

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  },
  text: {
    textAlign: "center",
    fontSize: 30,
    marginBottom: 30
  },
  secondText: {
    textAlign: "center",
    fontSize: 20,
    marginBottom: 20
  }
})