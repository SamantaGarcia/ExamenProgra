
import React, { Component } from 'react' 
import {View,Image, TextInput, StyleSheet, Button } from 'react-native'
import {Actions} from 'react-native-router-flux'

 export default class LoginView extends Component { 
     constructor(props){
         super(props)
         this.state = {
             email: '',
             password: ''
         }
     }
     handleEmail = (text) => {
        this.state.email= text
       } 
       handlePassword = (text) => {
        this.state.password= text
       }
     getLogin = () => {
         console.log("You pressed the button")
         Actions.home({email: this.state.email, password: this.state.password})
     }
     render(){
         
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
        
        <Button style={styles.submitButton}
            onPress={this.getLogin}
            title="Login"
            color="#841584"
            accessibilityLabel="Login Button"
        />
       </View>
         );
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


