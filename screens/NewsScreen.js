import * as React from 'react';
import { View, Text, TouchableOpacity,StyleSheet } from 'react-native';
import AppHeader from '../Components/AppHeader'

export default class NewsScreen extends React.Component {
  render(){
    return(
      <View>
        <AppHeader
        text = "News Screen"
        color = "Pink"
        />
        <Text>news letter app</Text>
      </View>
    )
  }
}
