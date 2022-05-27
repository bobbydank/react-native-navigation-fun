import { Text, StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const Modal = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Modal</Text>
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
  }
})