import React, { Component } from 'react';
import { Text, View,TouchableOpacity, StyleSheet } from 'react-native';

export default class Thursday extends Component {
  render() {
    return (
       <View style={styles.container}>
         <Text style={{ fontSize:30, backgroundColor:"#ffb65c"}}> Thursday Workout </Text>
        <Text> </Text>

        <Text style={styles.points}></Text>
        <Text style={{ fontSize:20, backgroundColor:"#ff9f29", marginLeft: 15, marginRight: 15, marginTop: 20}}> Thursday is more of a mid-week, from Wednesday, as more of a muscle break. Although you can have plenty of time to relax on the weekends, taking a nice cold plunge will relax nerves and improve muscle growth. It is improper to not give your muscles to rest because it will/would be unbeneficial to muscle growth. Peace at mind and medititation is highly recommended as well. </Text>
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
    backgroundColor:"#ffbd87",
    margin: 10,
    width: 200,
    height: 50,
  }
})