import React, { Component } from 'react';
import { Text, View,TouchableOpacity, StyleSheet } from 'react-native';

export default class Wednesday extends Component {
  render() {
    return (
       <View style={styles.container}>
         <Text style={{ fontSize:30, backgroundColor:"#5fde9c"}}> Wednesday Workout </Text>
        <Text> </Text>

        <Text style={styles.points}></Text>
        <Text style={{ fontSize:20, backgroundColor:"#32b370", marginLeft: 15, marginRight: 15, marginTop: 20}}> 1. Working out your legs! You can start with your main quads as they take a huge part thats noticable on you leg right away. These muscles can also develop thoroughly from cardio and leg based workouts as well. </Text>
        <Text> </Text>

        <Text style={styles.points}></Text>
        <Text style={{ fontSize:20, backgroundColor:"#32b370", marginLeft: 15, marginRight: 15, marginTop: 10}}> 2. Calves are the muscleson the back of the lower segment of your leg. This muscle can also be trained much like other leg grouped muscles. Though this is the main muscle running, sprinting and playing active sports like soccer and badminton can get you from much running and activities surrounding the sport. </Text>
        <Text> </Text>

         <Text style={styles.points}></Text>
        <Text style={{ fontSize:20, backgroundColor:"#32b370", marginLeft: 15, marginRight: 15, marginTop: 10}}> 3. Stretching your leg muscles are very good for good muscle development as it gives more room for the actual muscles to grow. Stretching can also prevent much cramps you may recieve from workout prior of after. Cramps are VERY painful sometimes so be wary and careful. </Text>
        <Text> </Text>

        <Text style={styles.points}></Text>
        <Text style={{ fontSize:20, backgroundColor:"#32b370", marginLeft: 15, marginRight: 15, marginTop: 10, marginBottom: 20}}> 4. Sports. As much said in the past and future, sports are a great way to improve you leg muscle growth, size, and health. Playing the game of life well, and you legs will be a life saver as you get older and weaker. </Text>
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
    backgroundColor:"#76e3b6",
    margin: 10,
    width: 200,
    height: 50,
  }
})