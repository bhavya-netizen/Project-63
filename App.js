import React, { Component } from 'react';
import { StyleSheet, View,  Text } from 'react-native';
import HomeScreen from './HomeScreen';

export default class App extends React.Component {
  render (){
    return (
      <View style = {{flex: 1}}>
         <HomeScreen />
      </View>
    )
  }
}
