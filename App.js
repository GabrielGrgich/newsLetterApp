import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import Constants from 'expo-constants';

import HomeScreen from './screens/HomeScreen';
import HoroScope from './screens/HoroScope';
import JokeScreen from './screens/JokeScreen';
import NewsScreen from './screens/NewsScreen';
import WeatherScreen from './screens/WeatherScreen';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <AppContainer />
      </View>
    );
  }
}

var AppNavigator = createSwitchNavigator({
  HomeScreen: HomeScreen,
  HoroScope: HoroScope,
  JokeScreen: JokeScreen,
  NewsScreen: NewsScreen,
  WeatherScreen: WeatherScreen,

});

const AppContainer = createAppContainer(AppNavigator);