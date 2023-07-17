import React, { Component } from 'react';
import { Text, View,TouchableOpacity, StyleSheet } from 'react-native';

export default class Tuesday extends Component {
  render() {
    return (
       <View style={styles.container}>
         <Text style={{ fontSize:30, backgroundColor:"#ff91e9"}}> Tuesday Workout </Text>
        <Text> </Text>

        <Text style={styles.points}></Text>
        <Text style={{ fontSize:20, backgroundColor:"#eeb2f7", marginLeft: 15, marginRight: 15, marginTop: 20}}> 1. Cardio is a great way to cut out your real physique and lose tons of weight. You can do this by maybe taking a jog. This can suit and after your preferences based on time and distance. </Text>
        <Text> </Text>

        <Text style={styles.points}></Text>
        <Text style={{ fontSize:20, backgroundColor:"#eeb2f7", marginLeft: 15, marginRight: 15, marginTop: 10}}> 2. Elypticals are great ways to workout in one spot without having to move anywhere as Elypticals are just essentially stationary bicycles with preferable and changable resistance and incline for more workout for the legs. </Text>
        <Text> </Text>

         <Text style={styles.points}></Text>
        <Text style={{ fontSize:20, backgroundColor:"#eeb2f7", marginLeft: 15, marginRight: 15, marginTop: 10}}> 3. Other than the Elypticals, biking or cycling in general is much fun, and evene more so when doing it with people you enjoy hanging around with.  </Text>
        <Text> </Text>

        <Text style={styles.points}></Text>
        <Text style={{ fontSize:20, backgroundColor:"#eeb2f7", marginLeft: 15, marginRight: 15, marginTop: 10, marginBottom: 20}}> 4. Jump ropes and more childhood activities such as rock climbing, monkey bars, and sprinting can also help. As playing a sport you enjoy can be extremely crucial and beneficial to losing weight and gaining stamina. </Text>
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
    backgroundColor:"#ffc2f7",
    margin: 10,
    width: 200,
    height: 50,
  }
})