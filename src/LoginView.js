
import React, { Component } from 'react' 
import { View,Image, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
import {Actions} from 'react-native-router-flux'

 export default class LoginView extends Component {
  state = {
   email: '',
   password: ''
   }
  handleEmail = (text) => {
   this.setState({ email: text }) 
  } 
  handlePassword = (text) => {
   this.setState({ password: text })
  }
  login = (email, pass) => {
   alert('email: ' + email + ' password: ' + pass)
   Actions.home() 
  }
  render() {
   return (
    <View style = {styles.container}>
     
        <Image 
          style={styles.imagen}
          source={{uri: 'https://pbs.twimg.com/profile_images/486929358120964097/gNLINY67_400x400.png'}}
        />
     <TextInput style = {styles.input}
      underlineColorAndroid = "transparent"
      placeholder = "Email" 
      placeholderTextColor = "#9a73ef"
      autoCapitalize = "none"
      onChangeText = {this.handleEmail}/> 
 
     <TextInput style = {styles.input}
      underlineColorAndroid = "transparent"
      placeholder = "Password"
      placeholderTextColor = "#9a73ef"
      autoCapitalize = "none"
      onChangeText = {this.handlePassword}/>

     <TouchableOpacity style = {styles.submitButton}
      onPress = {
       () => this.login(this.state.email, this.state.password)
      
       }>
     <Text style = {styles.submitButtonText}> Entrar </Text> 
    </TouchableOpacity>
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


