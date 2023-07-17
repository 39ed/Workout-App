import React, { Component } from 'react';
import { Text, View,TouchableOpacity, StyleSheet } from 'react-native';

export default class Friday extends Component {
  render() {
    return (
       <View style={styles.container}>
         <Text style={{ fontSize:30, backgroundColor:"#d9fafc"}}> Friday Workout </Text>
        <Text> </Text>

        <Text style={styles.points}></Text>
        <Text style={{ fontSize:20, backgroundColor:"lightblue", marginLeft: 15, marginRight: 15, marginTop: 20}}> 1. Work on your Torso by working on your abs as they are one of the most attractive muscle groups on a man or woman! </Text>
        <Text> </Text>

        <Text style={styles.points}></Text>
        <Text style={{ fontSize:20, backgroundColor:"lightblue", marginLeft: 15, marginRight: 15, marginTop: 10}}> 2. Try working out your pectoral muscles as well! </Text>
        <Text> </Text>

        <Text style={styles.points}></Text>
        <Text style={{ fontSize:20, backgroundColor:"lightblue", marginLeft: 15, marginRight: 15, marginTop: 10}}> 3. Working on your back and your lateral muscles will make you appear bigger and stronger! </Text>
        <Text> </Text>

        <Text style={styles.points}></Text>
        <Text style={{ fontSize:20, backgroundColor:"lightblue", marginLeft: 15, marginRight: 15, marginTop: 10, marginBottom: 20}}> 4. Obliques, when at their best definition, will give you a "V - Shaped" Torso giving you more of a dry, lean, and conditioned physique! </Text>
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
    backgroundColor:"#c2f0ef",
    margin: 10,
    width: 200,
    height: 50,
  }
})