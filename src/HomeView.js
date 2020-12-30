
import React, { Component } from 'react' 
import { View,Image, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'

export default class HomeView extends Component {
  
  render() {
   return (
    <View style = {styles.container}>
     
        
 
     <TextInput style = {styles.input}
      underlineColorAndroid = "transparent"
      placeholder = "Password"
      placeholderTextColor = "#9a73ef"
      autoCapitalize = "none"
      onChangeText = {this.handlePassword}/>

   </View>
  )
 } 
} 


const styles = StyleSheet.create({
 container: {
  flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
 },
 imagen: {
  width: 300,
    height: 140,
    marginBottom: 30,
    marginTop: 50,
 },
 input: {
  width: 300,
  height: 40,
  marginBottom: 30,
  borderColor: '#7a42f7',
  borderWidth: 1
 },
 submitButton: {
  backgroundColor: '#7a42f4',
  width: 230,
    height: 40,
    marginBottom: 30,
 }, 

 submitButtonText:{ 
  color: 'white',
  textAlign: "center",
 } 
})


