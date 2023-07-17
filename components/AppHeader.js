import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class AppHeader extends React.Component{
  render(){
    return(
      <View style= {styles.textContainer}>
        <Text style={styles.text}>Workout Routine App</Text>
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  textContainer:{
    backgroundColor: 'royalblue',
    marginBottom: 20,
  },
  text:{
    color: 'white',
    padding: 20,
    fontSize: 25,
    fontWeight: 'thin',
    textAlign: 'center',
  }
});
