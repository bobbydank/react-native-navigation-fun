import { Text, Button, StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'

const Second = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Second</Text>
      <Button 
        onPress={() => navigation.navigate("Modal", {
          name: "hello"
        })} 
        title="Open Modal">
      </Button>
      <Button 
        onPress={() => navigation.goBack()} 
        title="Go Back">
      </Button>
    </SafeAreaView>
  )
}

export default Second

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