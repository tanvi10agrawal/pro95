import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Header, Image} from 'react-native';
import AppHeader from '../components/AppHeader'

export default class HomeScreen extends Component{
  render(){
    return (
      <View>
        <AppHeader />
        <View>
          <View style={styles.buttonsContainer}>
            <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate('BeachScreen')}>
              <Text>Best Beaches in the USA</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate('CityScreen')}>
              <Text>Best Cities in the USA</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate('ForestScreen')}>
              <Text>Best Forests in the USA</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate('MountainScreen')}>
              <Text>Best Mountains in the USA</Text>
            </TouchableOpacity>
          </View>
          </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonsContainer: {
    alignSelf: 'center',
    marginTop: 50,
  },
  buttons: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: 15,
    margin: 10,
    width: 200,
    height: 50,
  },
  ratingContainer: {
    alignSelf: 'center',
    marginTop: 50,
  },
  iconImage:{
    position:'absolute',
    height:150,
    width:150,
    resizeMode:'contain',
    right:0,
    top:-30,
  }
});