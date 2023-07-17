import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Header,
  Image,
} from 'react-native';

import AppHeader from '../components/AppHeader';

export default class HomeScreen extends Component {
  render() {
    return (
      <View>
      <AppHeader />
      <View>
      <View style={styles.buttonContainer}>
      <TouchableOpacity
      style={styles.buttons}
      onPress={() => this.props.navigation.navigate('Monday')}>
      <Text styles={{ fontSize:25, fontWightcolor:"white"}}>Monday</Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={styles.buttons}
      onPress={() => this.props.navigation.navigate('Tuesday')}>
      <Text styles={{ fontSize:25, color:"white"}}>Tuesday</Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={styles.buttons}
      onPress={() => this.props.navigation.navigate('Wednesday')}>
      <Text styles={{ fontSize:25, color:"white"}}>Wednesday</Text>        
      </TouchableOpacity>

      <TouchableOpacity
      style={styles.buttons}
      onPress={() => this.props.navigation.navigate('Thursday')}>
      <Text styles={{ fontSize:25, color:"white"}}>Thursday</Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={styles.buttons}
      onPress={() => this.props.navigation.navigate('Friday')}>
      <Text styles={{ fontSize:25, color:"white"}}>Friday</Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={styles.buttons}
      onPress={() => this.props.navigation.navigate('Saturday')}>
      <Text styles={{ fontSize:25, color:"white"}}>Saturday</Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={styles.buttons}
      onPress={() => this.props.navigation.navigate('Sunday')}>
      <Text styles={{ fontSize:25, color:"white"}}>Sunday</Text>
      </TouchableOpacity>

       <TouchableOpacity
      style={styles.buttons}
      onPress={() => this.props.navigation.navigate('WorldRecords')}>
      <Text styles={{ fontSize:25, color:"white"}}>World Records</Text>
      </TouchableOpacity>
      </View>
      </View>
      </View>
    );
  }
} 

const styles = StyleSheet.create({
   buttonContainer: {
    alignSelf: 'center',
    justifyContent: 'center',
  },
buttons: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: 15,
    backgroundColor:"royalblue",
    margin: 15,
    width: 200,
    height: 50,
  },
  text: {
    color: 'black',
    padding: 20,
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  }
});