import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import ArtistList from './ArtistList'
import {getMusicData} from './api-client'
import {Actions} from 'react-native-router-flux';

export default class HomeView extends Component {
  state = {
    artists: null
  }

  componentDidMount() {
    getMusicData().then(data => this.setState({ artists: data }))
  }


  render() {
    const artists = this.state.artists

    return (
      <View style={styles.container}>
        {artists && <ArtistList artists={artists}/>}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
  }
});

// import React, { Component } from 'react' 
// import { View,Image, Text, StyleSheet } from 'react-native'

// export default class HomeView extends Component {
  
//   render() {
//     const data2 = this.props.email
//     const data3 = this.props.password
//     console.log(data2)
//     console.log(data3)
//    return (
//     <View style = {styles.container}>
     
//         <Image 
//           style={styles.imagen}
//           source={{uri: 'https://pbs.twimg.com/profile_images/486929358120964097/gNLINY67_400x400.png'}}
//         />
//         <Text style={styles.input}>
//             Los resultados obtenidos son:
//         </Text>
//         <Text style={styles.input}>
//             {data2}
//         </Text>
//         <Text style={styles.input}>
//             {data3}
//         </Text>
     
//    </View>
//   )
//  } 
// } 
 
// const styles = StyleSheet.create({
//  container: {
//   flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'flex-start',
//  },
//  imagen: {
//   width: 300,
//     height: 140,
//     marginBottom: 30,
//     marginTop: 50,
//  },
//  input: {
//   width: 300,
//   height: 40,
//   marginBottom: 30
//  }
// })


