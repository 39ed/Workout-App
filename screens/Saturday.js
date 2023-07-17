import React, { Component } from 'react';
import { Text, View,TouchableOpacity, StyleSheet } from 'react-native';

export default class Saturday extends Component {
  render() {
    return (
       <View style={styles.container}>
         <Text style={{ fontSize:30, backgroundColor:"#a582ff"}}> Saturdays Plan </Text>
        <Text> </Text>

        <Text style={styles.points}></Text>
        <Text style={{ fontSize:20, backgroundColor:"#a17dff", marginLeft: 15, marginRight: 15, marginTop: 20}}> Just relax man, a well conditioned body also needs rest to heal. Take a workout day off today and enjoy life as how it is! </Text>
        <Text> </Text>

        <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate('HomeScreen')}>
              <Text style={{ fontSize:20, color:"black"}}>Back</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{ 
     alignItems: 'center',
     justifyContent: 'center',
     marginTop: 100 
    },
  points:{
    fontSize: 20
  },  buttons: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: 15,
    borderColor: "black",
    backgroundColor:"#b597f7",
    margin: 10,
    width: 200,
    height: 50,
  }
})