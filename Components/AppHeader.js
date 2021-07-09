import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

class AppHeader extends React.Component{
  render(){
    return(
      <View style= {styles.textContainer,{backgroundColor: this.props.color}}>
        <Text style={styles.text}>{this.props.text}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textContainer:{
  },
  text:{
    color: 'black',
    padding: 20,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  }
});

export default AppHeader;