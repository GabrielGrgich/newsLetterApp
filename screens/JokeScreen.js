import * as React from 'react';
import { View, Text, TouchableOpacity,StyleSheet } from 'react-native';
import AppHeader from '../Components/AppHeader'

export default class JokeScreen extends React.Component {
  render(){
    return(
      <View>
        <AppHeader
        text = "Joke Screen"
        />
        <Text> jusst act like I told you a funny joke </Text>
      </View>
    )
  }
}
