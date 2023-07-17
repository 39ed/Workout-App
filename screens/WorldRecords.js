import React, { Component } from 'react';
import { Text, View,TouchableOpacity, StyleSheet } from 'react-native';

export default class WorldRecords extends Component {
  render() {
    return (
       <View style={styles.container}>
         <Text style={{ fontSize:30, backgroundColor:"#5b588c"}}> World Records </Text>
        <Text> </Text>

        <Text style={styles.points}></Text>
        <Text style={{ fontSize:20, backgroundColor:"#8d8bb0", marginLeft: 15, marginRight: 15, marginTop: 20}}> 1. Did you know that the oldest bodybuilder alive right now is a man named Jim Arrington. Though he maybe an astonishing 90 years olds, he is still going to the gym and pumping out those muscle gains. </Text>
        <Text> </Text>

        <Text style={styles.points}></Text>
        <Text style={{ fontSize:20, backgroundColor:"#8d8bb0", marginLeft: 15, marginRight: 15, marginTop: 10}}> 2. One of the most magnificient stories of any body builder would be Arnold Schwarzenegger. From pumping iron weights to Hollywood success, Winning Mr Olympia many times and many more achievements, he is sure one to look up to.  </Text>
        <Text> </Text>

         <Text style={styles.points}></Text>
        <Text style={{ fontSize:20, backgroundColor:"#8d8bb0", marginLeft: 15, marginRight: 15, marginTop: 10}}> 3. The worlds shortest bodybuilder to ever exist is Pratik Vitthal Mohite who is only a staggering 3 foot 4 inches tall and was made fun of his friends, familly, and collegues. But after all that mishap, he stil pushed through and became an inspiration for those who struggled with their height, so whats your excuse? </Text>
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
    backgroundColor:"#bab8db",
    margin: 10,
    width: 200,
    height: 50,
  }
})