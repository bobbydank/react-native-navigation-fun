import { View, Text, Button, StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
import Header from '../components/Header'

const MenuOne = () => {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.container}>
            <Header title="MenuOne"></Header>
            <View style={styles.view}>
                <Text style={styles.text}>MenuOne</Text>
                <Button 
                    onPress={() => navigation.navigate("Modal", {
                        name: "hello from MenuOne"
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

export default MenuOne

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