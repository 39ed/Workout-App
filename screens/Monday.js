import React, { Component } from 'react';
import { Text, View,TouchableOpacity, StyleSheet } from 'react-native';

export default class Monday extends Component {
  render() {
    return (
       <View style={styles.container}>
         <Text style={{ fontSize:30, backgroundColor:"#fff678"}}> Monday Workout </Text>
        <Text> </Text>

        <Text style={styles.points}></Text>
        <Text style={{ fontSize:20, backgroundColor:"gold", marginLeft: 15, marginRight: 15, marginTop: 20}}> 1. Workout out your arms and forearms are essential to a great physique as forearms are one of the very first noticeable things on ones body! Neck muscles known as the Trapezius can give you a stronger neck and more aggresive physique as well! </Text>
        <Text> </Text>

        <Text style={styles.points}></Text>
        <Text style={{ fontSize:20, backgroundColor:"gold", marginLeft: 15, marginRight: 15, marginTop: 10}}> 2. Biceps are a huge muscle group as there are also one of the mouse popular. Working on these will help build stern arm strength. </Text>
        <Text> </Text>

         <Text style={styles.points}></Text>
        <Text style={{ fontSize:20, backgroundColor:"gold", marginLeft: 15, marginRight: 15, marginTop: 10}}> 3. Triceps are on the other side of you upper arm, right next to your biceps. Although this muscle group may appear smaller; it is still good to train for a vareity of reasons, such as proportionality! </Text>
        <Text> </Text>

        <Text style={styles.points}></Text>
        <Text style={{ fontSize:20, backgroundColor:"gold", marginLeft: 15, marginRight: 15, marginTop: 10, marginBottom: 20}}> 4. Deltoids can be very capped on some people or still pretty flat. Despite this, deltoids can also make you seem bigger and give you a broader range of shoulder size. </Text>
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
    backgroundColor:"#f8fa9d",
    margin: 10,
    width: 200,
    height: 50,
  }
})