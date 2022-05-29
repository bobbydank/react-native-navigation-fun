import { View, Text, Button, StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'

const Home = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Home Screen</Text>
      <Button 
        onPress={() => navigation.navigate("Modal", {
          name: "Hi there."
        })} 
        title="Open Modal">
      </Button>
      <Button 
        onPress={() => navigation.navigate("Second")} 
        title="Go to second screen"
      />
    </SafeAreaView>
  )
}

export default Home

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