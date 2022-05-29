import { View, Text, Button, StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
import Header from '../components/Header'

const Second = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Second"></Header>
      <View style={styles.view}>
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
      </View>
    </SafeAreaView>
  )
}

export default Second

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: "center",
      backgroundColor:"#ffffff"
  },
  view: {
    flex: 15,
    backgroundColor: "#ffffff",
    justifyContent: "center"
  },  
  text: {
      textAlign: "center",
      fontSize: 30,
      marginBottom: 30
  }
})