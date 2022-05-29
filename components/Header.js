import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';

const Header = (props) => {
  return (
    <View style={styles.container}>
        <View style={styles.buttonContainer}>
            <Icon.Button
                name='md-menu'
                size={30}
                color="#4F8EF7"
                backgroundColor="#ffffff">    
            </Icon.Button>
        </View>
        <Text style={styles.titleContainer}>
            {props.title}
        </Text>
        <View style={styles.rightContainer}>

        </View>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffffff",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        borderBottomColor:"#d1d1d1",
        borderBottomWidth:1
    },
    buttonContainer: {
        flex: 1,
    },
    titleContainer: {
        flex: 3,
        color: "#333333",
        textTransform: "uppercase",
        textAlign: "center",
        fontWeight:"bold",
        fontSize:15
    },
    rightContainer: {
        flex: 1
    }
})