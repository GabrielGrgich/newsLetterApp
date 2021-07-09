import * as React from 'react';
import { View, Text, TouchableOpacity,StyleSheet } from 'react-native';
import AppHeader from '../Components/AppHeader'

export default class HoroScope extends React.Component {
  render(){
    return(
      <View>
        <AppHeader
        text = "Horo Scope Screen"
        />
        <Text>news letter app</Text>
      </View>
    )
  }
}
