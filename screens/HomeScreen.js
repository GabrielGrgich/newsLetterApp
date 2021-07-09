import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet,Image } from 'react-native';
import AppHeader from '../Components/AppHeader'
//import AppHeader from '../components/AppHeader';

import firebase from "firebase";
import db from "../config.js"

export default class HomeScreen extends React.Component {
constructor(){
  super()
  this.state = {
  dilike:0,
  like:0
  }
}

disLikeCounter=()=>{
  this.setState({dislike: this.state.dislike+1})
}

likeCounter=()=>{
  this.setState({like: this.state.like+1})
}

 likepressed(){
  var like=db.ref('Rating/'+'/')
  like.update({
    'LikePressed':1
  })
  }

  dislikepressed(){
  var disLike=db.ref('Rating/'+'/')
  disLike.update({
    'DisLikePressed':1
  })
  }

  goToBuzzerScreen = (buzzercolor) => {
    this.props.navigation.navigate('BuzzerScreen', { color: buzzercolor });

  


  };
  render() {
    return (

      <View>
      <AppHeader
      text = "News Letter App"
      color = "white"
      />
       <View>
          <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: 'lightgray' }]}
          onPress={() => {
            this.props.navigation.navigate('NewsScreen');
            }}>
          <Text style={styles.buttonText}>NewsScreen</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, { backgroundColor: 'lightgray' }]}
          onPress={() => {
            this.props.navigation.navigate('WeatherScreen');
            }}>
          <Text style={styles.buttonText}>WeatherScreen</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, { backgroundColor: 'lightgray' }]}
          onPress={() => {
            this.props.navigation.navigate('JokeScreen');
          }}>
          <Text style={styles.buttonText}>JokeScreen</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, { backgroundColor: 'lightgray' }]}
          onPress={() => {
            this.props.navigation.navigate('HoroScope');
          }}>
          <Text style={styles.buttonText}>HoroScope</Text>
        </TouchableOpacity>

      </View>

     <View style={styles.ratingContainer}>
            <Text style={{ textAlign: 'center', margin:5 }}>Rate us</Text>
            <View style={{display:"flex",flexDirection:"row",justifyContent:"space-between",padding:20}}>
             <Text>{this.state.like}</Text>
             <Text>{this.state.dislike}</Text>
             </View>

      <TouchableOpacity onPress={this.disLikeCounter}>
        <Image style=
        {{width: 100,
        height:  50,
        marginLeft: 5,
        display:"flex",
        justifyContent:"center",
        alignContent:"center"
        }} 
        source={require('../Assets/disLike.jpg')}/>

        </TouchableOpacity>
      

<TouchableOpacity onPress={this.likeCounter}>
        <Image style=
        {{width: 150,
        height:  50,
        marginLeft: 5,
        display:"flex",
        justifyContent:"center",
        alignContent:"center"
        }} 
        source={require('../Assets/awesome.jpg')}/>

        </TouchableOpacity>

      </View>
      </View>
       </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    marginTop: 30,
    marginLeft: 80,
    borderWidth: 5,
    borderColor: 'rgba(0,0,0,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    height: 60,
    borderRadius: 20,
  },
  buttonText: {
    textAlign: 'center',
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16
  },
   ratingContainer: {
    alignSelf: 'center',
    marginTop: 50,
  },
});
